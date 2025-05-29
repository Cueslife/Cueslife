document.getElementById("pillars-section").innerHTML = `
  <section id="pillars-section" class="py-16 bg-gray-100">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl font-extrabold mb-4 text-[#1e3a8a] animate-fade-in">Our Core Pillars</h2>
      <p class="text-lg mb-12 text-gray-600 animate-fade-in">
        The program is built around four core pillars, each essential for overall health and performance.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200">
          <i class="fas fa-dumbbell text-4xl text-[#1e3a8a] mb-4"></i>
          <h3 class="text-xl font-semibold text-[#1e3a8a] mb-2">Workout</h3>
          <p class="text-gray-600">
            Emphasizes the importance of regular physical activity. Fitness is non-negotiable for trainers and should be a core part of life.
          </p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200">
          <i class="fas fa-tint text-4xl text-[#1e3a8a] mb-4"></i>
          <h3 class="text-xl font-semibold text-[#1e3a8a] mb-2">Hydration</h3>
          <p class="text-gray-600">
            Crucial for temperature regulation, joint lubrication, nutrient transport, and overall organ function. Prevents infections and improves bodily functions.
          </p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200">
          <i class="fas fa-apple-alt text-4xl text-[#1e3a8a] mb-4"></i>
          <h3 class="text-xl font-semibold text-[#1e3a8a] mb-2">Nutrition</h3>
          <p class="text-gray-600">
            Fuels growth, healing, and energy production. Vital for disease prevention and overall well-being.
          </p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200">
          <i class="fas fa-bed text-4xl text-[#1e3a8a] mb-4"></i>
          <h3 class="text-xl font-semibold text-[#1e3a8a] mb-2">Sleep</h3>
          <p class="text-gray-600">
            Affects brain function, athletic performance, and recovery. Lack of sleep can lead to serious health issues like heart disease, weight gain, and inflammation.
          </p>
        </div>
      </div>
    </div>
  </section>
`;