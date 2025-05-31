document.addEventListener("DOMContentLoaded", () => {
  // Preload images
  const images = [
    // Portrait images (800x1200)
    'A.png',
    'B.png',
    'C.png',
    'D.png',
    'E.png',
    // Landscape images (1200x800)
    'A.png',
    'B.png',
    'C.png',
    'D.png',
    'E.png'
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
    <!-- Background Image Slideshow -->
    <div class="absolute inset-0 pointer-events-none z-0">
      <div class="slideshow">
        ${slideshowHTML}
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 sm:px-6 text-center relative z-10">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 animate-bounce-in text-white drop-shadow-lg">
        Welcome to <span class="bg-gradient-to-r from-yellow-300 to-pink-500 text-transparent bg-clip-text">Cueslife</span>
      </h1>
      <div class="max-w-3xl mx-auto mb-8 animate-slide-in">
        <div class="transparent-box bg-white bg-opacity-50 backdrop-blur-md rounded-xl p-6 shadow-lg">
          <p class="text-base sm:text-lg text-gray-800 leading-relaxed">
            At Cueslife, every symptom is a cue to listen and heal. We offer safe, age-friendly fitness, gentle weight loss, and improved mobility for those 50 and beyond to feel their best. 🌿
          </p>
        </div>
      </div>
      <div class="space-y-6 max-w-3xl mx-auto">
        <a href="services.html" class="block bg-gradient-to-r from-indigo-700 to-cyan-500 text-white p-6 sm:p-8 rounded-2xl shadow-2xl group relative overflow-hidden section-item" data-section="services">
          <div class="absolute inset-0 bg-gradient-to-r from-indigo-800 to-cyan-600 opacity-60 transition-opacity duration-300"></div>
          <h3 class="text-lg sm:text-xl font-bold mb-2 relative z-10 drop-shadow">Explore Our Services</h3>
          <p class="text-sm sm:text-base text-white relative z-10 drop-shadow">Custom coaching and dynamic workouts designed around your wellness journey</p>
        </a>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <a href="contact.html" class="bg-white text-gray-900 p-6 sm:p-8 rounded-2xl shadow-2xl group relative overflow-hidden section-item" data-section="contact">
            <div class="absolute inset-0 bg-gradient-to-r from-gray-100 to-indigo-100 opacity-60 transition-opacity duration-300"></div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 relative z-10 drop-shadow">Contact Us</h3>
            <p class="text-sm sm:text-base text-gray-700 relative z-10 drop-shadow">Questions? Let’s connect to fuel your wellness journey.</p>
          </a>
          <a href="booking.html" class="bg-gradient-to-r from-yellow-400 to-pink-500 text-white p-6 sm:p-8 rounded-2xl shadow-2xl group relative overflow-hidden animate-pulse-fast section-item" data-section="booking">
            <div class="absolute inset-0 bg-gradient-to-r from-yellow-500 to-pink-600 opacity-60 transition-opacity duration-200"></div>
            <h3 class="text-lg sm:text-xl font-bold mb-2 relative z-10 drop-shadow">Join the Free Experience</h3>
            <p class="text-sm sm:text-base text-white relative z-10 drop-shadow">Jump in—book your Free session and shine bright!</p>
          </a>
        </div>
      </div>
    </div>
  `;

  // Update slideshow on window resize
  window.addEventListener('resize', () => {
    const newSlideshowHTML = getImageSet().map((src, index) => `
      <div class="slide slide-${index + 1}" style="background-image: url('${src}');"></div>
    `).join('');
    document.querySelector('.slideshow').innerHTML = newSlideshowHTML;
  });

  // IntersectionObserver to detect when section is 50% from top of viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('highlight-link');
          entry.target.classList.remove('exit-link');
        } else {
          entry.target.classList.add('exit-link');
          entry.target.classList.remove('highlight-link');
          // Remove exit-link after animation completes
          setTimeout(() => {
            entry.target.classList.remove('exit-link');
          }, 400);
        }
      });
    },
    {
      rootMargin: '-50% 0px 0px 0px', // Trigger when top of section is 50% from top of viewport
      threshold: 0 // Trigger as soon as any part is in the adjusted viewport
    }
  );

  // Observe each section
  document.querySelectorAll('.section-item').forEach(section => {
    observer.observe(section);
  });

  // Inject CSS dynamically
  const style = document.createElement("style");
  style.textContent = `
    #hero-section {
      position: relative;
      height: 800px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(to bottom right, #7c3aed, #0ea5e9);
      overflow: hidden;
    }

    /* Transparent Box Styling */
    .transparent-box {
      background: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    /* Section Styling */
    .section-item {
      cursor: pointer;
      transform: scale(1.1) translateY(-10px);
      opacity: 1;
      transition: opacity 0.4s ease;
    }
    .section-item.highlight-link {
      animation: enterSection 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 255, 255, 0.3);
    }
    .section-item.exit-link {
      animation: exitSection 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
    .section-item[data-section="services"].highlight-link > div {
      background: linear-gradient(to right, #4b1d95, #06b6d4);
      opacity: 0.9;
    }
    .section-item[data-section="contact"].highlight-link > div {
      background: linear-gradient(to right, #e5e7eb, #818cf8);
      opacity: 0.9;
    }
    .section-item[data-section="booking"].highlight-link > div {
      background: linear-gradient(to right, #facc15, #ec4899);
      opacity: 0.9;
    }

    /* Animation Keyframes for Enter and Exit */
    @keyframes enterSection {
      0% { transform: scale(1.1) translateY(-10px) rotate(2deg); opacity: 1; }
      50% { transform: scale(1) translateY(10px) rotate(-2deg); opacity: 0.9; }
      100% { transform: scale(0.95) translateY(20px) rotate(0); opacity: 0.7; }
    }
    @keyframes exitSection {
      0% { transform: scale(0.95) translateY(20px) rotate(0); opacity: 0.7; }
      50% { transform: scale(1) translateY(0) rotate(2deg); opacity: 0.9; }
      100% { transform: scale(1.1) translateY(-10px) rotate(0); opacity: 1; }
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
      will-change: transform, opacity;
      animation-timing-function: ease-in-out;
    }
    .slide-1 { animation: slideShow1 17.5s infinite; }
    .slide-2 { animation: slideShow2 17.5s infinite; animation-delay: 3.5s; }
    .slide-3 { animation: slideShow3 17.5s infinite; animation-delay: 7s; }
    .slide-4 { animation: slideShow4 17.5s infinite; animation-delay: 10.5s; }
    .slide-5 { animation: slideShow5 17.5s infinite; animation-delay: 14s; }

    /* Animation Keyframes for Slideshow */
    @keyframes slideShow1 {
      0% { opacity: 0; transform: translateX(100%); }
      2.86% { opacity: 1; transform: translateX(0); }
      17.14% { opacity: 1; transform: translateX(0); }
      20% { opacity: 0; transform: translateX(-100%); }
      100% { opacity: 0; transform: translateX(-100%); }
    }
    @keyframes slideShow2 {
      0% { opacity: 0; }
      2.86% { opacity: 1; }
      17.14% { opacity: 1; }
      20% { opacity: 0; }
      100% { opacity: 0; }
    }
    @keyframes slideShow3 {
      0% { opacity: 0; transform: scale(1.5); }
      2.86% { opacity: 1; transform: scale(1); }
      17.14% { opacity: 1; transform: scale(1); }
      20% { opacity: 0; transform: scale(0.8); }
      100% { opacity: 0; transform: scale(0.8); }
    }
    @keyframes slideShow4 {
      0% { opacity: 0; transform: rotate(90deg); }
      2.86% { opacity: 1; transform: rotate(0deg); }
      17.14% { opacity: 1; transform: rotate(0deg); }
      20% { opacity: 0; transform: rotate(-90deg); }
      100% { opacity: 0; transform: rotate(-90deg); }
    }
    @keyframes slideShow5 {
      0% { opacity: 0; transform: translateY(100%); }
      2.86% { opacity: 1; transform: translateY(0); }
      17.14% { opacity: 1; transform: translateY(0); }
      20% { opacity: 0; transform: translateY(-100%); }
      100% { opacity: 0; transform: translateY(-100%); }
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
        height: 100vh;
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
        font-size: 1.125rem;
        line-height: 1.75rem;
      }
    }

    /* Mobile Optimizations */
    @media (max-width: 640px) {
      #hero-section {
        height: auto;
        min-height: 700px;
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
        font-size: 0.75rem;
        line-height: 1.1rem;
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
      .transparent-box {
        padding: 1rem;
      }
      .section-item {
        transform: scale(1.05) translateY(-5px);
        opacity: 1;
      }
      .section-item.highlight-link {
        animation: enterSectionMobile 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25), 0 0 8px rgba(255, 255, 255, 0.2);
      }
      .section-item.exit-link {
        animation: exitSectionMobile 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      }
    }

    /* Mobile Animation Keyframes */
    @keyframes enterSectionMobile {
      0% { transform: scale(1.05) translateY(-5px) rotate(2deg); opacity: 1; }
      50% { transform: scale(1) translateY(10px) rotate(-2deg); opacity: 0.9; }
      100% { transform: scale(0.95) translateY(20px) rotate(0); opacity: 0.7; }
    }
    @keyframes exitSectionMobile {
      0% { transform: scale(0.95) translateY(20px) rotate(0); opacity: 0.7; }
      50% { transform: scale(1) translateY(0) rotate(2deg); opacity: 0.9; }
      100% { transform: scale(1.05) translateY(-5px) rotate(0); opacity: 1; }
    }
  `;
  document.head.appendChild(style);
});
