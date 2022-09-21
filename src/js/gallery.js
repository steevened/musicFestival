document.addEventListener("DOMContentLoaded", () => {
  startapp();
});

function startapp() {
  navFixed();
  createGallery();
  scrollNav();
}

const navFixed = () => {
  const bar = document.querySelector(".header");
  const festival = document.querySelector(".festival");
  const body = document.querySelector("body");

  window.addEventListener("scroll", () => {
    // console.log(festival.getBoundingClientRect()); //to look at for their position

    if (festival.getBoundingClientRect().top < 0) {
      bar.classList.add("fixed");
      body.classList.add("body-scroll");
    } else {
      bar.classList.remove("fixed");
      body.classList.remove("body-scroll");
    }
  });
};

const scrollNav = () => {
  const links = document.querySelectorAll(".nav a");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const scrollSection = e.target.attributes.href.value;

      const section = document.querySelector(scrollSection);
      section.scrollIntoView({ behavior: "smooth" });
    });
  });
};

function createGallery() {
  const gallery = document.querySelector(".gallery-images");

  for (let i = 1; i <= 12; i++) {
    const image = document.createElement("picture");
    image.innerHTML = `       
    <source srcset="build/img/thumb/${i}.avif" type="image/avif" />
    <source srcset="build/img/thumb/${i}.webp" type="image/webp" />
    <img
      loading="lazy"
      width="200"
      height="300"
      src="build/img/thumb/${i}.jpg"
      alt="image"
    />`;

    image.onclick = () => {
      showImage(i);
    };

    gallery.appendChild(image);
  }
}

//to create an overlay
const showImage = (index) => {
  const image = document.createElement("picture");
  image.innerHTML = `       
    <source srcset="build/img/grande/${index}.avif" type="image/avif" />
    <source srcset="build/img/grande/${index}.webp" type="image/webp" />
    <img
      loading="lazy"
      width="200"
      height="300"
      src="build/img/grande/${index}.jpg"
      alt="image"
    />`;

  //to create an overlay

  const overlay = document.createElement("div");
  overlay.appendChild(image);
  overlay.classList.add("overlay");
  overlay.onclick = () => {
    const body = document.querySelector("body");
    body.classList.remove("fix-body");
    overlay.remove();
  };

  //to close the modal

  const closeModal = document.createElement("p");

  closeModal.classList.add("closeModal");
  closeModal.onclick = () => {
    const body = document.querySelector("body");
    body.classList.remove("fix-body");
    overlay.remove();
  };
  overlay.appendChild(closeModal);

  //to add to html
  const body = document.querySelector("body");
  body.appendChild(overlay);
  body.classList.add("fix-body");
};
