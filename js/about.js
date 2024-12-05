const mobileMenu = document.getElementById("mobile-menu");
const themeToggle = document.getElementById("theme-toggle");
const hamburgerMenu = document.getElementById("hamburger-menu");
const body = document.body;

// Apply the saved theme on load
if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "light");
}
body.classList.add(localStorage.getItem("theme"));

// Update button icon based on the current theme
themeToggle.textContent = localStorage.getItem("theme") === "light" ? "🌙" : "☀️";

themeToggle.addEventListener("click", () => {
    if (body.classList.contains("light")) {
        body.classList.replace("light", "dark");
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️";
    } else {
        body.classList.replace("dark", "light");
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙";
    }
});

// Hamburger menu functionality
hamburgerMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
    if (hamburgerMenu.classList.contains("active")) {
        hamburgerMenu.textContent = "X";  
    } else {
        hamburgerMenu.textContent = "☰";  
    }
});




const experiences = [
    { date: "2017 - 2018", title: "internship", description: "Shakti Hotel" },
    { date: "2022 - 2024", title: "TPA TEACHER", description: "Mosque Nurul Haq" },
    { date: "2022 - 2024", title: "Food Business", description: "Parent" },
    { date: "Juli 2024", title: "Brand Ambassador", description: "PT Key Groove Direct Indonesia" },
    { date: "2024", title: "Freelance", description: "Work At Home" },
    { date: "2024", title: "Leader Of Risnha", description: "Mosque Nurul Haq" },
  ];
  
  const timeline = document.getElementById('timeline');
  
  experiences.forEach((exp) => {
    const divItem = document.createElement('div');
    divItem.className = 'timeline-item';
  
    divItem.innerHTML = `
      <p class="date">${exp.date}</p>
      <h3 class="title">${exp.title}</h3>
      <p class="description">${exp.description}</p>
    `;
  
    timeline.appendChild(divItem);
  });
  

//SECTION BUTTON NAVIGASI START
const files = ["index.html", "service.html", "contact.html"];
let currentIndexx = 0;

// Get elements
const button = document.getElementById('navigate-button');
const leftArrow = document.getElementById('arrow-left');
const rightArrow = document.getElementById('arrow-right');

// Function to update the button text based on the current index
function updateButtonText() {
    const fileName = files[currentIndexx].replace('.html', '');
    button.textContent = fileName.charAt(0).toUpperCase() + fileName.slice(1);
}

// Function to handle left arrow click
leftArrow.addEventListener('click', () => {
    currentIndexx = (currentIndexx - 1 + files.length) % files.length;
    updateButtonText();
});

// Function to handle right arrow click
rightArrow.addEventListener('click', () => {
    currentIndexx = (currentIndexx + 1) % files.length;
    updateButtonText();
});

// Open the current file when the button is clicked
button.addEventListener('click', () => {
    window.location.href = files[currentIndexx];
});

// Initialize the button text on page load
updateButtonText();
// SECTION BUTTON NAVIGASI END
