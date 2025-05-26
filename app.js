const wrapper = document.querySelector(".slideWrapper");
const menuItems = document.querySelectorAll(".menuitem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 124,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Jordan",
    price: 110,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "CRATER",
    price: 199,
    colors: [
      {
        code: "lightgray",
        img: "./img/crater.png",
      },
      {
        code: "green",
        img: "./img/crater2.png", // corrected potential typo
      },
    ],
  },
  {
    id: 4,
    title: "BLAZER",
    price: 99,
    colors: [
      {
        code: "black",
        img: "./img/blazer2.png",
      },
      {
        code: "lightgray",
        img: "./img/jordan2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // Change the chosen product
    choosenProduct = products[index];

    // Update product content
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    // Update product color options
    currentProductColors.forEach((color, i) => {
      if (choosenProduct.colors[i]) {
        color.style.backgroundColor = choosenProduct.colors[i].code;
        color.style.display = "inline-block";
      } else {
        color.style.display = "none";
      }
    });
  });
});

// Update selected size UI
currentProductSizes.forEach((size) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((s) => {
      s.style.backgroundColor = "white";
      s.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
