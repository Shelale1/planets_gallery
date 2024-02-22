const galeryMenu = document.querySelector(".menu ul");
const imageContainer = document.querySelector(".image img");

const infos = [
  {
    tittle: "Mercury",
    imgURL:
      "https://i.pinimg.com/564x/4e/da/d2/4edad2c263f85a9795c6dd7177c03c8f.jpg",
  },
  {
    tittle: "Saturn",
    imgURL:
      "https://i.pinimg.com/564x/4b/9a/23/4b9a23467c2a88b5b0b9f6a02c615028.jpg",
  },
  {
    tittle: "Venus",
    imgURL:
      "https://i.pinimg.com/564x/73/d4/63/73d4638e2b97d6db9fb0a5b462d59201.jpg",
  },
  {
    tittle: "Mars",
    imgURL:
      "https://i.pinimg.com/564x/9f/4e/81/9f4e81d79b36df1206320831990ffd66.jpg",
  },
  {
    tittle: "Neptun",
    imgURL:
      "https://i.pinimg.com/564x/df/21/2f/df212fd39b6f8f73df045e90518304ec.jpg",
  },
  {
    tittle: "Earth",
    imgURL:
      "https://i.pinimg.com/564x/44/92/25/44922584056795e375fdef0f5df4267a.jpg",
  }
  ,
  {
    tittle: "Uranus",
    imgURL:
      "https://i.pinimg.com/564x/23/7a/b2/237ab210a2ea32ba91c350c9d9c62a1f.jpg",
  },
  {
    tittle: "Jupiter",
    imgURL:
      "https://i.pinimg.com/564x/2b/32/ef/2b32efd1163d2789cfe8803a0a23629a.jpg",
  }
  
  
  
];

let txt = " ";

infos.forEach((item) => {
  txt += `<li data-image= ${item.imgURL}><a href="#">${item.tittle}</a></li>`;
});
galeryMenu.innerHTML = txt;

const list = galeryMenu.querySelectorAll("li");
const photo = galeryMenu.getElementsByClassName("image");

list.forEach((item) => {
  item.addEventListener("click", () => {


    const imageURL = item.getAttribute("data-image");
    imageContainer.src = imageURL;
    imageContainer.style.opacity="1"
  });
});

