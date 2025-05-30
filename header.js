document.getElementById("header").innerHTML = `
  <header class="bg-white text-gray-800 sticky top-0 z-50 shadow-lg">
    <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="flex items-center space-x-3">
        <img src="logo.png" alt="Cueslife Logo" class="h-10 w-10 object-contain" />
        <span class="text-3xl font-extrabold tracking-tight">Cueslife</span>
      </div>
      <button id="menu-toggle" class="sm:hidden text-gray-800 focus:outline-none">
        <i class="fas fa-bars text-2xl"></i>
      </button>
      <ul id="nav-menu" class="hidden sm:flex sm:space-x-8 text-sm sm:text-base">
        <li><a href="index.html" class="nav-link">Home</a></li>
        <li><a href="services.html" class="nav-link">Services</a></li>
        <li><a href="admission.html" class="nav-link">Admission</a></li>
        <li><a href="booking.html" class="nav-link">Booking</a></li>
        <li><a href="contact.html" class="nav-link">Contact</a></li>
        <li><a href="calculation.html" class="nav-link">Health Calculator</a></li>
        <li><a href="faqs.html" class="nav-link">FAQs</a></li>
      </ul>
    </nav>
  </header>
`;

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
