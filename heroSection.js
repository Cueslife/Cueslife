document.addEventListener("DOMContentLoaded", () => {
  // Preload images
  const images = [
    // Portrait images (800x1200)
    '3.gif',
    '4.gif',
    '5.gif',
    '2.gif',
    '1.gif',
    // Landscape images (1200x800)
    '3.gif',
    '4.gif',
    '5.gif',
    '2.gif',
    '1.gif'
  ];

  // Preload images to ensure instant loading
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  // Detect device type based on window width
  const isMobile = () => window.innerWidth <= 640;
  const getImageSet = () => isMobile() ? images.slice(0, 5) : images.slice(5, 10);

  // Generate slideshow HTML dynamically
  const slideshowImages = getImageSet();
  const slideshowHTML = slideshowImages.map((src, index) => `
    <div class="slide slide-${index + 1}" style="background-image: url('${src}');"></div>
  `).join('');

  document.getElementById("hero-section").innerHTML = `
    <section class="relative min-h-[800px] flex items-center justify-center bg-gradient-to-br from-[#7c3aed] to-[#0ea5e9] overflow-hidden isolate">
      <!-- Background Image Slideshow -->
      <div class="absolute inset-0 pointer-events-none z-0">
        <div class="slideshow">
          ${slideshowHTML}
        </div>
      </div>

      <!-- Main Content -->
      <div class="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 animate-bounce-in text-blue-700 drop-shadow-lg">
          Transform with <span class="bg-gradient-to-r from-yellow-300 to-pink-500 text-transparent bg-clip-text">Cueslife</span>
        </h1>

        <div class="space-y-6 max-w-3xl mx-auto">
          <a href="services.html" class="block bg-gradient-to-r from-indigo-700 to-cyan-500 text-white p-6 sm:p-8 rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-200 group relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-indigo-800 to-cyan-600 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
            <h3 class="text-lg sm:text-xl font-bold mb-2 relative z-10 drop-shadow">Explore Our Services</h3>
            <p class="text-sm sm:text-base text-white relative z-10 drop-shadow">Tailored coaching and vibrant workouts to power your goals.</p>
          </a>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <a href="contact.html" class="bg-white text-gray-900 p-6 sm:p-8 rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-200 group relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-r from-gray-100 to-indigo-100 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 relative z-10 drop-shadow">Talk to Us</h3>
              <p class="text-sm sm:text-base text-gray-700 relative z-10 drop-shadow">Questions? Let’s connect to fuel your wellness journey.</p>
            </a>
            <a href="booking.html" class="bg-gradient-to-r from-yellow-400 to-pink-500 text-white p-6 sm:p-8 rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-200 group relative overflow-hidden animate-pulse-fast">
              <div class="absolute inset-0 bg-gradient-to-r from-yellow-500 to-pink-600 opacity-60 group-hover:opacity-80 transition-opacity duration-200"></div>
              <h3 class="text-lg sm:text-xl font-bold mb-2 relative z-10 drop-shadow">Join Now</h3>
              <p class="text-sm sm:text-base text-white relative z-10 drop-shadow">Jump in—book your first session and shine bright!</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;

  // Update slideshow on window resize
  window.addEventListener('resize', () => {
    const newSlideshowHTML = getImageSet().map((src, index) => `
      <div class="slide slide-${index + 1}" style="background-image: url('${src}');"></div>
    `).join('');
    document.querySelector('.slideshow').innerHTML = newSlideshowHTML;
  });
});

// Inject CSS dynamically
const style = document.createElement("style");
style.textContent = `
  #hero-section {
    position: relative;
    min-height: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom right, #7c3aed, #0ea5e9);
    overflow: hidden;
    isolation: isolate;
  }

  /* Slideshow Animation */
  .slideshow {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }
  .slide {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    opacity: 0;
  }
  .slide-1 { animation: slideRight 17.5s infinite; }
  .slide-2 { animation: slideLeft 17.5s infinite 3.5s; }
  .slide-3 { animation: zoomIn 17.5s infinite 7s; }
  .slide-4 { animation: fadeIn 17.5s infinite 10.5s; }
  .slide-5 { animation: rotateIn 17.5s infinite 14s; }

  @keyframes slideRight {
    0% { opacity: 0; transform: translateX(100%); }
    2.86% { opacity: 1; transform: translateX(0); }
    20% { opacity: 1; transform: translateX(0); }
    22.86% { opacity: 0; transform: translateX(-100%); }
    100% { opacity: 0; transform: translateX(-100%); }
  }
  @keyframes slideLeft {
    0% { opacity: 0; transform: translateX(-100%); }
    2.86% { opacity: 1; transform: translateX(0); }
    20% { opacity: 1; transform: translateX(0); }
    22.86% { opacity: 0; transform: translateX(100%); }
    100% { opacity: 0; transform: translateX(100%); }
  }
  @keyframes zoomIn {
    0% { opacity: 0; transform: scale(1.5); }
    2.86% { opacity: 1; transform: scale(1); }
    20% { opacity: 1; transform: scale(1); }
    22.86% { opacity: 0; transform: scale(0.8); }
    100% { opacity: 0; transform: scale(0.8); }
  }
  @keyframes fadeIn {
    0% { opacity: 0; }
    2.86% { opacity: 1; }
    20% { opacity: 1; }
    22.86% { opacity: 0; }
    100% { opacity: 0; }
  }
  @keyframes rotateIn {
    0% { opacity: 0; transform: rotate(15deg); }
    2.86% { opacity: 1; transform: rotate(0deg); }
    20% { opacity: 1; transform: rotate(0deg); }
    22.86% { opacity: 0; transform: rotate(-15deg); }
    100% { opacity: 0; transform: rotate(-15deg); }
  }

  /* Content Animations */
  .animate-bounce-in {
    opacity: 0;
    transform: scale(0.7);
    animation: bounceIn 0.4s ease-out forwards;
  }
  .animate-slide-in {
    opacity: 0;
    transform: translateY(20px);
    animation: slideIn 0.4s ease-out forwards;
  }
  .animate-pulse-fast {
    animation: pulse 2s infinite ease-in-out;
  }

  @keyframes bounceIn {
    0% { opacity: 0; transform: scale(0.7); }
    60% { opacity: 0.7; transform: scale(1.1); }
    100% { opacity: 1; transform: scale(1); }
  }
  @keyframes slideIn {
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.75; }
  }

  /* Desktop/Laptop Optimizations */
  @media (min-width: 1024px) {
    #hero-section {
      min-height: 100vh;
      max-height: 900px;
    }
    .slide {
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
    .container {
      max-width: 1200px;
    }
    h1 {
      font-size: 4rem;
      line-height: 4.5rem;
    }
    p {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
  }

  /* Mobile Optimizations */
  @media (max-width: 640px) {
    #hero-section {
      min-height: 800px;
      padding: 2rem 0;
    }
    .container {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    h1 {
      font-size: 1.875rem;
      line-height: 2rem;
    }
    p {
      font-size: 0.8125rem;
      line-height: 1.2rem;
    }
    .slide {
      background-size: cover;
      background-position: center;
    }
    .grid {
      gap: 0.75rem;
    }
    a > div > p {
      font-size: 0.6875rem;
    }
  }

  /* Ensure subsequent sections are not overlapped */
  #pillars-section, #calculator-link, #footer {
    position: relative;
    z-index: 10;
  }
`;
document.head.appendChild(style);
