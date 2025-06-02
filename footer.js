document.getElementById("footer").innerHTML = `
  <footer class="bg-[#1e3a8a] text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Have a Question?</h3>
          <form id="question-form">
            <input
              type="tel"
              name="whatsapp"
              placeholder="Your WhatsApp Number"
              class="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#facc15] mb-4"
              required
            />
            <textarea
              name="question"
              placeholder="Your Question"
              class="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#facc15] mb-4"
              rows="3"
              required
            ></textarea>
            <button
              type="submit"
              class="w-full bg-[#facc15] text-[#1e3a8a] px-4 py-3 rounded-lg font-semibold hover:bg-[#fbbf24] transition-all flex items-center justify-center"
            >
              <span id="question-button-text">Submit Question</span>
              <svg
                class="w-5 h-5 ml-2 hidden animate-spin"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                id="question-spinner"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 12a8 8 0 0116 0A8 8 0 014 12z"
                />
              </svg>
            </button>
          </form>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Follow Us</h3>
          <div class="flex space-x-6">
            <a href="https://www.instagram.com/cueslife/" target="_blank" rel="noopener noreferrer" class="text-xl hover:text-[#facc15] transition-colors transform hover:scale-110">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c-.062-1.366-.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.658.075-3.032.402-4.117 1.487-1.085 1.085-1.412 2.459-1.487 4.117-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.075 1.658.402 3.032 1.487 4.117 1.085 1.085 2.459 1.412 4.117 1.487 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.658-.075 3.032-.402 4.117-1.487 1.085-1.085 1.412-2.459 1.487-4.117.058-1.28-.072 1.688.072 4.947.072s3.667-.014 4.947-.072c1.658-.075 3.032-.402 4.117-1.487 1.085-1.085 1.412-2.459 1.487-4.117.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.075-1.658-.402-3.032-1.487-4.117-1.085-1.085-2.459-1.412-4.117-1.487-1.28-.058-1.688-.072-4.947-.072z" />
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" class="text-xl hover:text-[#facc15] transition-colors transform hover:scale-110">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" class="text-xl hover:text-[#facc15] transition-colors transform hover:scale-110">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.141v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.731 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" class="text-xl hover:text-[#facc15] transition-colors transform hover:scale-110">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="https://www.youtube.com/channel/UC5Kn4gqFcpMFV0PUFgbqV2w" target="_blank" rel="noopener noreferrer" class="text-xl hover:text-[#facc15] transition-colors transform hover:scale-110">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.016 3.016 0 0 0 .502 6.186 31.247 31.247 0 0 0 0 12a31.247 31.247 0 0 0 .502 5.814 3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.016 3.016 0 0 0 2.122-2.136A31.247 31.247 0 0 0 24 12a31.247 31.247 0 0 0-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Contact Info</h3>
          <div class="space-y-2">
            <p class="flex items-center">
              <i class="fas fa-envelope mr-3 text-[#facc15]"></i>
              <a href="mailto:team@cueslife.in" class="hover:text-[#facc15] transition-colors">team@cueslife.in</a>
            </p>
            <p class="flex items-center">
              <i class="fas fa-phone mr-3 text-[#facc15]"></i>
              <a href="tel:8097940240" class="hover:text-[#facc15] transition-colors">8097940240</a>
            </p>
            <p class="flex items-center">
              <i class="fas fa-phone mr-3 text-[#facc15]"></i>
              <a href="tel:9321001814" class="hover:text-[#facc15] transition-colors">9321001814</a>
            </p>
          </div>
        </div>
      </div>
      <div class="mt-12 text-center text-gray-400 border-t border-gray-700 pt-6">
        <p>© 2025 Cueslife. All rights reserved.</p>
      </div>
    </div>
  </footer>
  <div id="question-modal" class="modal">
    <div class="modal-content">
      <h2 id="question-modal-title">Question Sent!</h2>
      <p id="question-modal-message">
        Thank you for your question. We'll respond via WhatsApp soon!
      </p>
      <button onclick="closeModal('question-modal')" class="mt-4">Close</button>
    </div>
  </div>
`;
