
// ==========================
// NAVBAR ACTIVE STATE
// ==========================
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});



// ==========================
// NEWS "CLICK FOR MORE"
// ==========================
const newsButtons = document.querySelectorAll(".news-card button");

newsButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Full article coming soon...");
  });
});


// ==========================
// SCROLL FADE-IN ANIMATION
// ==========================
const items = document.querySelectorAll(".news-card, .product, .sidebar button");

items.forEach(item => {
  item.style.opacity = 0;
  item.style.transform = "translateY(40px)";
});

window.addEventListener("scroll", () => {
  items.forEach(item => {
    const pos = item.getBoundingClientRect().top;
    if (pos < window.innerHeight - 50) {
      item.style.opacity = 1;
      item.style.transform = "translateY(0)";
      item.style.transition = "0.6s ease";
    }
  });
});


// ==========================
// INDUSTRY PAGE SIDEBAR CONTENT SWITCH
// ==========================
const sidebarBtns = document.querySelectorAll(".sidebar button");
const contentBox = document.querySelector(".content");

const industryData = {
  "Overview": `The robotics and automation industry is rapidly transforming the way businesses operate across the globe. From manufacturing and logistics to healthcare and smart homes, automation technologies are driving efficiency, precision, and innovation at an unprecedented scale.
  The demand for robotics solutions continues to grow as businesses seek competitive advantages in a fast-paced digital economy. Collaborative robots, autonomous systems, and intelligent control platforms are reshaping workflows and enabling safer, more flexible operations.

At RoboCloud, we stand at the forefront of this technological revolution providing insights, solutions, and cutting-edge robotic products that empower industries and individuals to embrace the future of automation with confidence.`,
  "E-Commerce": "Automation in e-commerce improves delivery and logistics systems.",
  "Retail": "Retail robots help manage inventory and assist customers.",
  "Warehouse": "Warehouse automation boosts efficiency and reduces errors.",
  "Grocery": "Robots in grocery stores improve checkout and stock handling.",
  "Healthcare": "Healthcare robotics enables precision surgeries.",
  "Electronics": "Electronics manufacturing uses high-precision robotic systems."
};

sidebarBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    sidebarBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    if (contentBox) {
      contentBox.innerHTML = `<p style="animation: fadeIn 0.5s">${industryData[btn.innerText]}</p>`;
    }
  });
});


// ==========================
// PRODUCTS PAGE FILTER SYSTEM
// ==========================
const productButtons = document.querySelectorAll(".sidebar button");
const products = document.querySelectorAll(".product");

productButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    productButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.innerText;

    products.forEach(product => {
      if (category === "Factory Robots") {
        product.style.display = "block";
      } else {
        product.style.display = "none"; // demo logic
      }
    });
  });
});


// ==========================
// SEARCH FUNCTION (Products page)
// ==========================
const searchInput = document.querySelector("#search");

if (searchInput) {
  searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();

    products.forEach(product => {
      const name = product.innerText.toLowerCase();

      if (name.includes(value)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
}


// ==========================
// CART ICON CLICK
// ==========================
const cart = document.querySelector(".cart");

if (cart) {
  cart.addEventListener("click", () => {
    alert("Cart is empty (demo)");
  });
}


// ==========================
// MESSAGE US CHAT BUBBLE
// ==========================
const chatBtn = document.querySelector(".chat-btn");

if (chatBtn) {
  chatBtn.addEventListener("click", () => {
    alert("Chat support coming soon!");
  });
}


// ==========================
// LOGIN + REGISTER SWITCH
// ==========================
function login() {
  alert("Login successful (demo)");
}

function showRegister() {
  const box = document.querySelector(".login-box");

  box.innerHTML = `
    <h2>Register</h2>
    <input type="text" placeholder="Name">
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button onclick="login()">REGISTER</button>
  `;
}


// ==========================
// BUTTON CLICK ANIMATION
// ==========================
const allButtons = document.querySelectorAll("button");

allButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.9)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 150);
  });
});


// SEND MESSAGE
function sendMessage() {
  const inputs = document.querySelectorAll("input, textarea");
  let valid = true;

  inputs.forEach(input => {
    if (input.value.trim() === "") {
      input.style.border = "2px solid red";
      valid = false;
    } else {
      input.style.border = "none";
    }
  });

  if (!valid) {
    alert("Please fill all fields");
    return;
  }

  // success animation
  const box = document.querySelector(".contact-box");
  box.style.transform = "scale(0.95)";
  setTimeout(() => {
    box.style.transform = "scale(1)";
    alert("Message sent successfully!");
  }, 200);
}


// INPUT FOCUS ANIMATION
const inputs = document.querySelectorAll("input, textarea");

inputs.forEach(input => {
  input.addEventListener("focus", () => {
    input.style.background = "#eef";
  });

  input.addEventListener("blur", () => {
    input.style.background = "white";
  });
});


// BUTTON CLICK EFFECT
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  btn.style.transform = "scale(0.9)";
  setTimeout(() => {
    btn.style.transform = "scale(1)";
  }, 150);
});