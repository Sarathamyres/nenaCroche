document.addEventListener("DOMContentLoaded", function () {
  new Glide(".carrossel", {
    type: "carousel",
    startAt: 0,
    perView: 4,
    autoplay: 2000,
    hoverpause: true,
    animationDuration: 800,
    breakpoints: {
      400: {
        perView: 1,
      },
      768: {
        perView: 2,
      },
    },
  }).mount();
});

const hamburguer = document.querySelector(".hamburger");
const menu_hamburguer = document.querySelector(".menu-hamburguer");

function toggleMenu() {
  const isActive = hamburguer.classList.contains("is-active");
  menu_hamburguer.style.display = isActive ? "block" : "none";
}
hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("is-active");
  toggleMenu();
});

window.addEventListener("scroll", () => {
  const iconFixed = document.querySelector(".icons-fixed");
  if (window.scrollY <= 0) {
    iconFixed.style.display = "none";
  } else {
    iconFixed.style.display = "flex";
  }
  if (window.scrollY > 0 && hamburguer.classList.contains("is-active")) {
    hamburguer.classList.remove("is-active");
    toggleMenu();
  }
});

let radioS = document.querySelectorAll(".nav-produtos input");
let produtos = document.querySelectorAll(".produtos-container .produtos");

radioS.forEach((radio) => {
  radio.addEventListener("change", function () {
    const valueCheck = this.value;
    produtos.forEach((produto) => {
      const valueProd = produto.dataset.categoria;

      if (valueCheck === valueProd) {
        produto.classList.remove("escondido");
      } else {
        produto.classList.add("escondido");
      }
    });
  });
});
document
  .querySelector(".nav-produtos input:checked")
  ?.dispatchEvent(new Event("change"));
