import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const url = "https://saurav.tech/NewsAPI/everything/cnn.json";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        // console.log(json.articles);
        // json map limit 100
        json.articles.slice(0, 20).map((item) => {
          //   console.log(item.author, item.title, item.description);
          const newNews = {
            id: Math.floor(Math.random() * 1000),
            author: item.author,
            title: item.title,
            description: item.description,
            urlImage: item.urlToImage,
          };
          setNews((news) => [...news, newNews]);
        });
        console.log("news", news);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="mx-auto w-full">
      <header class="p-12 bg-gradient-to-r from-blue-900 to-blue-700 sm:p-16 lg:p-14 lg:mb-4">
        <div class="max-w-xl mx-auto text-center">
          <p class="mt-2 text-3xl font-bold sm:text-5xl text-white font-sans">
            News
          </p>
          <p class="text-sm font-medium text-white">
            Baca berita terbaru disini
          </p>
          <div className="mt-4">
            <button class="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
            <Link to="/">Home</Link>
            </button>
          </div>
        </div>
      </header>
      <div className="max-w-3xl mx-auto">
        {news.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row bg-white my-4 p-2 rounded-lg shadow-lg"
          >
            <div className="md:flex-shrink-0">
              <img
                alt={item.title}
                src={item.urlImage}
                className="h-52 w-full md:h-full md:w-48 object-cover object-center rounded-md"
              />
            </div>
            <div className="mx-2 ">
              <h3 className="font-semibold text-xl text-yellow-700">
                {item.title}
              </h3>
              <h6 className="font-light text-sm">{item.author}</h6>
              <p className="font-normal text-md my-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
