//JavaScript Enhancements

// 1. Responsive Navigation (Hamburger Menu)
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav ul");
  const toggleBtn = document.createElement("button");
  toggleBtn.classList.add("nav-toggle");
  toggleBtn.textContent = "☰ Menu";

  // Insert toggle button before nav
  nav.parentElement.insertBefore(toggleBtn, nav);

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});

// 2. Accordion Example (Enquiries page)
function initAccordions() {
  const accordions = document.querySelectorAll(".accordion");
  accordions.forEach(acc => {
    acc.addEventListener("click", () => {
      acc.classList.toggle("open");
      const panel = acc.nextElementSibling;
      panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
  });
}
initAccordions();

// 3. Product Image Lightbox Gallery
function initLightbox() {
  const images = document.querySelectorAll(".product img");
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  document.body.appendChild(lightbox);

  images.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.classList.add("active");
      const fullImg = document.createElement("img");
      fullImg.src = img.src;
      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
      }
      lightbox.appendChild(fullImg);
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });
}
initLightbox();

// 4. Smooth Scroll for Navigation Links
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      target?.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// 5. Dynamic Content Example (Products Page)
function loadDynamicProducts() {
  const productGrid = document.querySelector(".product-grid");
  if (!productGrid) return;

  const newProduct = {
    name: "Limited Edition Denim Jacket",
    price: "R120",
    img: "images/Denim Jacket.jpg",
    sizes: "One Size"
  };

  const productDiv = document.createElement("div");
  productDiv.classList.add("product");
  productDiv.innerHTML = `
    <img src="${newProduct.img}" alt="${newProduct.name}">
    <h3 style="color: rgba(245, 245, 7, 0.886);">${newProduct.name}</h3>
    <p style="font-size: large;">${newProduct.price} ${newProduct.sizes}</p>
    <button class="btn">Buy</button>
  `;
  productGrid.appendChild(productDiv);
}
loadDynamicProducts();

// 6. Simple Search Filter (Products Page)
function initSearchFilter() {
  const searchBox = document.createElement("input");
  searchBox.type = "text";
  searchBox.placeholder = "Search products...";
  searchBox.style.margin = "1rem";
  const productGrid = document.querySelector(".product-grid");
  if (!productGrid) return;
  productGrid.parentElement.insertBefore(searchBox, productGrid);

  searchBox.addEventListener("keyup", () => {
    const term = searchBox.value.toLowerCase();
    document.querySelectorAll(".product").forEach(prod => {
      const text = prod.textContent.toLowerCase();
      prod.style.display = text.includes(term) ? "block" : "none";
    });
  });
}
initSearchFilter();

// 7. Animation Example (Hero Section)
const hero = document.querySelector(".hero");
if (hero) {
  hero.style.opacity = 0;
  window.addEventListener("load", () => {
    hero.style.transition = "opacity 2s ease-in-out";
    hero.style.opacity = 1;
  });
}

// Checkout Form Submission
const checkoutForm = document.getElementById("checkout-form");
if (checkoutForm) {
  checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your purchase! Payment processing will be integrated soon.");
    checkoutForm.reset();
  });
}

// Enquiry Form Validation
const enquiryForm = document.getElementById("enquiry-form");
if (enquiryForm) {
  enquiryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const type = enquiryForm["enquiry-type"].value;

    if (!type) {
      alert("Please complete all fields correctly.");
      return;
    }
    alert(`Thank you ${name}! We will respond regarding your ${type} enquiry soon.`);
    enquiryForm.reset();
  });
}

// Contact Form Validation
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const subject = contactForm.subject.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !subject || message.length < 10) {
      alert("Please complete all fields correctly.");
      return;
    }
    alert(`Message sent! Thank you ${name}, we’ll reply to your email at ${email}.`);
    contactForm.reset();
  });
}
