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
          <div class="flex space-x-4">
            <a href="https://instagram.com" target="_blank" class="text-xl hover:text-[#facc15] transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c-.062-1.366-.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.658.075-3.032.402-4.117 1.487-1.085 1.085-1.412 2.459-1.487 4.117-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.075 1.658.402 3.032 1.487 4.117 1.085 1.085 2.459 1.412 4.117 1.487 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.658-.075 3.032-.402 4.117-1.487 1.085-1.085 1.412-2.459 1.487-4.117.058-1.28-.072 1.688.072 4.947.072s3.667-.014 4.947-.072c1.658-.075 3.032-.402 4.117-1.487 1.085-1.085 1.412-2.459 1.487-4.117.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.075-1.658-.402-3.032-1.487-4.117-1.085-1.085-2.459-1.412-4.117-1.487-1.28-.058-1.688-.072-4.947-.072z" />
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" class="text-xl hover:text-[#facc15] transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.141v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.731 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" class="text-xl hover:text-[#facc15] transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="https://wa.me/1234567890" target="_blank" class="text-xl hover:text-[#facc15] transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.77.46 3.48 1.33 4.98L2 22l5.25-1.38c1.45.85 3.08 1.3 4.79 1.3 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.18c-1.5 0-2.97-.39-4.26-1.13l-.3-.18-3.11.82.84-3.03-.2-.31c-.79-1.27-1.21-2.72-1.21-4.23 0-4.52 3.69-8.21 8.21-8.21s8.21 3.69 8.21 8.21-3.69 8.21-8.21 8.21zm4.88-5.98c-.27-.14-1.61-.8-1.86-.89-.24-.09-.42-.14-.59.14-.18.28-.69.89-.80.89-.11 0-.22-.03-.33-.11-.11-.08-.86-.42-1.67-1.34-.63-.72-1.06-1.61-1.19-1.88-.13-.28-.03-.42.12-.56.13-.12.28-.33.42-.50.14-.17.18-.28.27-.47.09-.19.05-.36-.03-.50-.08-.14-.74-1.77-.74-1.77-.36-.36-.72-.36-.95-.36-.24 0-.53.08-.80.39-.27.31-1.03 1.01-1.03 2.47 0 1.45 1.06 2.86 1.21 3.05.14.19 2.09 3.17 5.06 4.45.71.31 1.27.5 1.7.64.71.24 1.36.21 1.86.13.57-.09 1.61-.66 1.84-1.3.22-.64.22-1.19.16-1.3-.05-.11-.30-.17-.57-.31z" />
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

document.addEventListener("DOMContentLoaded", () => {
  const questionForm = document.getElementById("question-form");
  const questionSpinner = document.getElementById("question-spinner");
  const questionButtonText = document.getElementById("question-button-text");

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwnKmoXP1tJE-SLd9Rro85JnuapcjDbENCfByha6xZEfR1SLk2V4_57J4Vwioid2MmQiQ/exec";

  if (questionForm) {
    questionForm.addEventListener("submit", (e) => {
      e.preventDefault();
      questionSpinner.classList.remove("hidden");
      questionButtonText.textContent = "Submitting...";
      questionForm.querySelector('button[type="submit"]').disabled = true;
      const formData = new FormData(questionForm);
      formData.append("formType", "question");
      fetch(scriptURL, { method: "POST", body: formData })
        .then((response) => response.json())
        .then((data) => {
          questionSpinner.classList.add("hidden");
          questionButtonText.textContent = "Submit Question";
          questionForm.querySelector('button[type="submit"]').disabled = false;
          if (data.result === "success") {
            const modal = document.getElementById("question-modal");
            if (modal) {
              modal.style.display = "flex";
              questionForm.reset();
            }
          } else {
            alert("Error: " + data.error);
          }
        })
        .catch((error) => {
          questionSpinner.classList.add("hidden");
          questionButtonText.textContent = "Submit Question";
          questionForm.querySelector('button[type="submit"]').disabled = false;
          alert("Error: " + error.message);
        });
    });
  }

  window.closeModal = function (modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "none";
  };
});