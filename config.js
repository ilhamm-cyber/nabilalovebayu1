// Preloader
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  }, 1000);
});

// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("-translate-y-full");
  document.body.style.overflow = "hidden";
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("-translate-y-full");
  document.body.style.overflow = "";
});

// Close mobile menu when clicking links
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("-translate-y-full");
    document.body.style.overflow = "";
  });
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("bg-white", "shadow-lg", "py-3");
    navbar.classList.remove("py-4");
  } else {
    navbar.classList.remove("bg-white", "shadow-lg", "py-3");
    navbar.classList.add("py-4");
  }
});

// Form submission
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Show loading state
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
  submitBtn.disabled = true;

  // Simulate API call
  setTimeout(() => {
    alert("Thank you for your message! I will get back to you soon.");
    contactForm.reset();
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
  }, 1500);
});

// Skill bars animation on scroll
const observerOptions = {
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const skillBars = entry.target.querySelectorAll(".skill-progress");
      skillBars.forEach((bar) => {
        const width = bar.style.width;
        bar.style.width = "0";
        setTimeout(() => {
          bar.style.width = width;
        }, 300);
      });
    }
  });
}, observerOptions);

// Observe skills section
const skillsSection = document.getElementById("skills");
if (skillsSection) {
  observer.observe(skillsSection);
}

// Portfolio filter
const filterButtons = document.querySelectorAll("#portfolio button");
filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => {
      btn.classList.remove("bg-primary", "text-white");
      btn.classList.add("bg-gray-100", "text-gray-600");
    });

    // Add active class to clicked button
    this.classList.remove("bg-gray-100", "text-gray-600");
    this.classList.add("bg-primary", "text-white");

    // Here you would filter the portfolio items
    // This is a simplified version
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href === "#") return;

    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Typing effect for hero text
const texts = [
  "Web Developer",
  "UI/UX Designer",
  "Mobile Developer",
  "Problem Solver",
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;

function typeEffect() {
  const typingElement = document.querySelector(".gradient-text");
  if (!typingElement) return;

  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];

  if (isDeleting) {
    letter = currentText.substring(0, index - 1);
    index--;
  } else {
    letter = currentText.substring(0, index + 1);
    index++;
  }

  typingElement.textContent = letter;

  if (!isDeleting && index === currentText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 2000);
  } else if (isDeleting && index === 0) {
    isDeleting = false;
    count++;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 100 : 150);
  }
}

// Start typing effect after page load
setTimeout(typeEffect, 1000);
