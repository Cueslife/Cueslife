document.getElementById("hero-section").innerHTML = `
    <!-- Animated Background Image Slideshow -->
    <div class="absolute inset-0 pointer-events-none z-0">
      <div class="slideshow">
        <div class="slide slide-1" style="background-image: url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80');"></div>
        <div class="slide slide-2" style="background-image: url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80');"></div>
        <div class="slide slide-3" style="background-image: url('https://images.unsplash.com/photo-1544367567-0f2fcb009655?auto=format&fit=crop&w=1200&q=80');"></div>
        <div class="slide slide-4" style="background-image: url('https://images.unsplash.com/photo-1506126611913-1f72576a5461?auto=format&fit=crop&w=1200&q=80');"></div>
        <div class="slide slide-5" style="background-image: url('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80');"></div>
        <div class="slide slide-6" style="background-image: url('https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1200&q=80');"></div>
        <div class="slide slide-7" style="background-image: url('https://images.unsplash.com/photo-1557330359-0c0f5ed0a3ac?auto=format&fit=crop&w=1200&q=80');"></div>
        <div class="slide slide-8" style="background-image: url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80');"></div>
        <div class="slide slide-9" style="background-image: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80');"></div>
        <div class="slide slide-10" style="background-image: url('https://images.unsplash.com/photo-1545205596-7849323779a9?auto=format&fit=crop&w=1200&q=80');"></div>
      </div>
    </div>

    <!-- Water Wave Animation -->
    <div class="absolute inset-x-0 bottom-0 h-40 pointer-events-none z-0">
      <div class="water-wave"></div>
      <div class="water-wave wave-2"></div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 sm:px-6 text-center relative z-10">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 animate-bounce-in text-white drop-shadow-lg">
        Transform with <span class="bg-gradient-to-r from-yellow-300 to-pink-500 text-transparent bg-clip-text animate-glow">Cueslife</span>
      </h1>
      <p class="text-base sm:text-lg md:text-xl mb-8 max-w-xl sm:max-w-2xl mx-auto text-white drop-shadow-md animate-slide-in">
        Elevate your fitness, find balance, and ignite your energy—start your journey now!
      </p>
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
`;

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
    animation: slideShow 40s infinite;
  }
  .slide-1 { opacity: 1; animation-delay: 0s; }
  .slide-2 { animation-delay: 4s; }
  .slide-3 { animation-delay: 8s; }
  .slide-4 { animation-delay: 12s; }
  .slide-5 { animation-delay: 16s; }
  .slide-6 { animation-delay: 20s; }
  .slide-7 { animation-delay: 24s; }
  .slide-8 { animation-delay: 28s; }
  .slide-9 { animation-delay: 32s; }
  .slide-10 { animation-delay: 36s; }

  @keyframes slideShow {
    0%, 10% { opacity: 1; transform: scale(1); }
    12%, 20% { opacity: 1; transform: scale(1.03); }
    22%, 100% { opacity: 0; transform: scale(1.05); }
  }

  /* Water Wave Animation */
  .water-wave {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0));
    animation: waterWave 4s infinite linear;
  }
  .wave-2 {
    animation-delay: 2s;
    opacity: 0.5;
  }

  @keyframes waterWave {
    0% { transform: translateX(0) scaleY(1); }
    50% { transform: translateX(-100px) scaleY(1.2); }
    100% { transform: translateX(-200px) scaleY(1); }
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
  .animate-glow {
    animation: glow 2.5s infinite ease-in-out;
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
  @keyframes glow {
    0%, 100% { text-shadow: 0 0 12px rgba(255, 255, 255, 0.7); }
    50% { text-shadow: 0 0 24px rgba(255, 255, 255, 1); }
  }

  /* Mobile Optimizations */
  @media (max-width: 640px) {
    #hero-section {
      height: auto;
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
    .water-wave {
      height: 60px;
    }
    .grid {
      gap: 0.75rem;
    }
    a > div > p {
      font-size: 0.6875rem;
    }
  }
`;
document.head.appendChild(style);
