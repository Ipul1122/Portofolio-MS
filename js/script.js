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


// SECTION PROFILE START
const descriptions = [
    'Web develop',
    'Web design',
    'Programmer'
  ];
  
  let currentIndex = 0;
  const dynamicText = document.getElementById('dynamic-text');
  
  function changeText() {
    // Hapus teks dengan animasi delete
    dynamicText.style.animation = 'delete 1s steps(10) forwards, blink 0.75s step-end infinite';
    
    // Tunggu beberapa detik sebelum mengganti teks
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % descriptions.length;
      dynamicText.textContent = descriptions[currentIndex]; // Ganti teks
  
      // Mulai animasi ketik setelah teks diganti
      dynamicText.style.animation = 'typing 2s steps(20) forwards, blink 0.75s step-end infinite';
    }, 1000); // Tunggu 1 detik sebelum mengganti teks
  }
  
  // Ganti teks setiap 3 detik
  setInterval(changeText, 3000);
  


//SECTION BUTTON NAVIGASI START
const files = ["about.html", "service.html", "contact.html"];
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
    window.location.href = files[currentIndex];
});

// Initialize the button text on page load
updateButtonText();
// SECTION BUTTON NAVIGASI END
