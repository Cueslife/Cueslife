document.getElementById("hero-section").innerHTML = `
  <section id="hero-section" class="relative h-[600px] bg-gradient-to-r from-[#1e3a8a] to-[#0d9488] flex items-center justify-center overflow-hidden">
    <!-- Floating particles -->
    <div class="absolute inset-0 particles pointer-events-none">
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 text-center text-white relative z-10">
      <h1 class="text-4xl sm:text-5xl font-extrabold mb-6 animate-fade-in">
        Start Your Wellness Journey with <span class="text-yellow-300">Cueslife</span>
      </h1>
      <p class="text-lg sm:text-xl mb-10 max-w-2xl mx-auto animate-fade-in delay-100">
        We're here to help you get fit, feel great, and live a balanced life—one step at a time.
      </p>
      <div class="space-y-6 max-w-4xl mx-auto">
        <a href="services.html" class="block bg-white text-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:bg-blue-50 transition-all">
          <h3 class="text-xl font-semibold text-[#1e3a8a] mb-2">Explore Our Services</h3>
          <p class="text-gray-600">From personal coaching to group workouts, we’ve got your goals covered.</p>
        </a>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a href="contact.html" class="bg-white text-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform hover:scale-105">
            <h3 class="text-xl font-semibold text-[#1e3a8a] mb-2">Talk to Us</h3>
            <p class="text-gray-600">Have questions? Reach out and let's chat about your goals.</p>
          </a>
          <a href="booking.html" class="bg-yellow-400 text-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:bg-yellow-300 transition-transform hover:scale-105 font-semibold animate-pulse">
            <h3 class="text-xl font-semibold mb-2">Join Now</h3>
            <p class="text-gray-800">Ready to start? Book your first session today.</p>
          </a>
        </div>
      </div>
    </div>

    <!-- Custom styles for particles -->
    <style>
      .particles {
        backdrop-filter: blur(1px);
        -webkit-backdrop-filter: blur(1px);
      }
      .particle {
        position: absolute;
        border-radius: 50%;
        opacity: 0.4;
        animation: float 12s infinite ease-in-out;
        mix-blend-mode: screen;
      }
      .particle:nth-child(1) { width: 20px; height: 20px; top: 10%; left: 15%; background: #facc15; animation-delay: 0s; }
      .particle:nth-child(2) { width: 18px; height: 18px; top: 45%; left: 35%; background: #38bdf8; animation-delay: 2s; }
      .particle:nth-child(3) { width: 25px; height: 25px; top: 65%; left: 55%; background: #f472b6; animation-delay: 4s; }
      .particle:nth-child(4) { width: 15px; height: 15px; top: 25%; left: 75%; background: #34d399; animation-delay: 6s; }
      .particle:nth-child(5) { width: 22px; height: 22px; top: 85%; left: 85%; background: #c084fc; animation-delay: 8s; }

      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-50px); }
      }

      .delay-100 {
        animation-delay: 0.2s;
      }
    </style>
  </section>
`;
