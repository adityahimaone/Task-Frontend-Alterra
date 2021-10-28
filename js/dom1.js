// H1
const fill = document.getElementById('fill-me')
fill.innerHTML = 'HALO!'

// P
const p = document.getElementsByTagName('p')
for(let i = 0;i< p.length;i++){
    p[i].innerHTML = 'HALO JUGA!'
}

//H2
const h2 = document.getElementsByTagName('h2')
h2[0].innerHTML = 'Apa Kabar!'

//main
const main = document.getElementById('main')
main.innerHTML += '<button>Ini Button</button>'
main.innerHTML += '<button>Ini Juga Button</button>'