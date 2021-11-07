import React from "react";
import { DashboardLayout } from "../../components/Layout";

export default function AboutAuthor() {
  return (
    <DashboardLayout>
      <div className="my-8 p-6 max-w-md mx-5 bg-white rounded-xl shadow-md flex justify-start items-center space-x-4">
        <div>
          <div className="text-2xl font-medium text-black">About Author</div>
          <p className="text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
