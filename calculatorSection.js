document.getElementById("calculator-section").innerHTML = `
  <section id="calculator-section" class="py-16 bg-white">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold mb-8 text-[#1e3a8a]">Health Metrics Calculator</h2>
      <div class="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <div class="space-y-6">
          <div class="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div class="w-full sm:w-1/2">
              <label for="height" class="block text-sm font-medium text-gray-700 mb-2">
                <i class="fas fa-ruler-vertical mr-2 text-[#1e3a8a]"></i>Height (cm)
              </label>
              <input
                type="number"
                id="height"
                placeholder="Enter height"
                class="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition-all"
              />
            </div>
            <div class="w-full sm:w-1/2">
              <label for="weight" class="block text-sm font-medium text-gray-700 mb-2">
                <i class="fas fa-weight mr-2 text-[#1e3a8a]"></i>Weight (kg)
              </label>
              <input
                type="number"
                id="weight"
                placeholder="Enter weight"
                class="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition-all"
              />
            </div>
          </div>
          <div class="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div class="w-full sm:w-1/2">
              <label for="waist" class="block text-sm font-medium text-gray-700 mb-2">
                <i class="fas fa-ruler-horizontal mr-2 text-[#1e3a8a]"></i>Waist (cm)
              </label>
              <input
                type="number"
                id="waist"
                placeholder="Enter waist"
                class="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition-all"
              />
            </div>
            <div class="w-full sm:w-1/2">
              <label for="hip" class="block text-sm font-medium text-gray-700 mb-2">
                <i class="fas fa-ruler-horizontal mr-2 text-[#1e3a8a]"></i>Hip (cm)
              </label>
              <input
                type="number"
                id="hip"
                placeholder="Enter hip"
                class="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition-all"
              />
            </div>
          </div>
          <div class="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div class="w-full sm:w-1/2">
              <label for="age" class="block text-sm font-medium text-gray-700 mb-2">
                <i class="fas fa-user mr-2 text-[#1e3a8a]"></i>Age
              </label>
              <input
                type="number"
                id="age"
                placeholder="Enter age"
                class="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition-all"
              />
            </div>
            <div class="w-full sm:w-1/2">
              <label for="gender" class="block text-sm font-medium text-gray-700 mb-2">
                <i class="fas fa-venus-mars mr-2 text-[#1e3a8a]"></i>Gender
              </label>
              <select
                id="gender"
                class="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] transition-all"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <button
            id="calculate-metrics"
            class="w-full bg-[#1e3a8a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1e40af] transition-all transform hover:scale-105"
          >
            Calculate Metrics
          </button>
        </div>
      </div>
    </div>
    <div id="metrics-modal" class="modal">
      <div class="modal-content">
        <h2 id="metrics-modal-title">Your Health Metrics</h2>
        <p id="metrics-modal-bmi"></p>
        <p id="metrics-modal-bmi-issues"></p>
        <p id="metrics-modal-bmi-symptoms"></p>
        <p id="metrics-modal-bf"></p>
        <p id="metrics-modal-bf-issues"></p>
        <p id="metrics-modal-lbm"></p>
        <p id="metrics-modal-whr"></p>
        <p id="metrics-modal-whr-issues"></p>
        <p id="metrics-modal-bmr"></p>
        <button onclick="closeModal('metrics-modal')">Close</button>
      </div>
    </div>
  </section>
`;

document.addEventListener("DOMContentLoaded", () => {
  const calculateMetricsButton = document.getElementById("calculate-metrics");

  if (calculateMetricsButton) {
    calculateMetricsButton.addEventListener("click", () => {
      const height = parseFloat(document.getElementById("height").value) / 100;
      const weight = parseFloat(document.getElementById("weight").value);
      const waist = parseFloat(document.getElementById("waist").value);
      const hip = parseFloat(document.getElementById("hip").value);
      const age = parseFloat(document.getElementById("age").value);
      const gender = document.getElementById("gender").value;
      const modal = document.getElementById("metrics-modal");
      const modalTitle = document.getElementById("metrics-modal-title");
      const modalBmi = document.getElementById("metrics-modal-bmi");
      const modalBmiIssues = document.getElementById("metrics-modal-bmi-issues");
      const modalBmiSymptoms = document.getElementById("metrics-modal-bmi-symptoms");
      const modalBf = document.getElementById("metrics-modal-bf");
      const modalBfIssues = document.getElementById("metrics-modal-bf-issues");
      const modalLbm = document.getElementById("metrics-modal-lbm");
      const modalWhr = document.getElementById("metrics-modal-whr");
      const modalWhrIssues = document.getElementById("metrics-modal-whr-issues");
      const modalBmr = document.getElementById("metrics-modal-bmr");

      if (height && weight && waist && hip && age) {
        // Calculate BMI
        const bmi = (weight / (height * height)).toFixed(1);
        let bmiCategory, bmiIssues, bmiSymptoms;

        if (bmi < 18.5) {
          bmiCategory = "Underweight";
          bmiIssues = "Potential health issues: Malnutrition, weakened immune system, fertility issues, osteoporosis.";
          bmiSymptoms = "Symptoms: Fatigue, dizziness, hair loss, irregular menstrual cycles.";
        } else if (bmi < 25) {
          bmiCategory = "Normal";
          bmiIssues = "You're in a healthy range! Maintain a balanced diet and regular exercise.";
          bmiSymptoms = "No significant symptoms associated with this range.";
        } else if (bmi < 30) {
          bmiCategory = "Overweight";
          bmiIssues = "Potential health issues: Increased risk of heart disease, type 2 diabetes, high blood pressure.";
          bmiSymptoms = "Symptoms: Shortness of breath, fatigue, joint pain.";
        } else {
          bmiCategory = "Obese";
          bmiIssues = "Potential health issues: Higher risk of heart disease, stroke, diabetes, certain cancers.";
          bmiSymptoms = "Symptoms: Excessive sweating, snoring, sleep apnea, severe joint pain.";
        }

        // Calculate Body Fat Percentage (Simplified formula for estimation)
        const bodyFatPercentage = gender === "male"
          ? (1.2 * bmi + 0.23 * age - 16.2).toFixed(1)
          : (1.2 * bmi + 0.23 * age - 5.4).toFixed(1);
        let bfIssues;
        if (gender === "male") {
          if (bodyFatPercentage < 8) bfIssues = "Too low: Risk of organ dysfunction, hormonal imbalance.";
          else if (bodyFatPercentage <= 20) bfIssues = "Healthy range for men.";
          else bfIssues = "Too high: Risk of obesity-related diseases, cardiovascular issues.";
        } else {
          if (bodyFatPercentage < 21) bfIssues = "Too low: Risk of hormonal imbalance, reproductive issues.";
          else if (bodyFatPercentage <= 33) bfIssues = "Healthy range for women.";
          else bfIssues = "Too high: Risk of obesity-related diseases, cardiovascular issues.";
        }

        // Calculate Lean Body Mass
        const fatMass = weight * (bodyFatPercentage / 100);
        const lbm = (weight - fatMass).toFixed(1);

        // Calculate Waist-to-Hip Ratio
        const whr = (waist / hip).toFixed(2);
        let whrIssues;
        if (gender === "male") {
          if (whr > 0.9) whrIssues = "High: Increased risk of cardiovascular diseases, diabetes.";
          else whrIssues = "Healthy range for men.";
        } else {
          if (whr > 0.85) whrIssues = "High: Increased risk of cardiovascular diseases, diabetes.";
          else whrIssues = "Healthy range for women.";
        }

        // Calculate Basal Metabolic Rate (Harris-Benedict Equation)
        const bmr = gender === "male"
          ? (10 * weight + 6.25 * (height * 100) - 5 * age + 5).toFixed(0)
          : (10 * weight + 6.25 * (height * 100) - 5 * age - 161).toFixed(0);

        modalTitle.textContent = "Your Health Metrics";
        modalBmi.textContent = `BMI: ${bmi} (${bmiCategory})`;
        modalBmiIssues.textContent = bmiIssues;
        modalBmiSymptoms.textContent = bmiSymptoms;
        modalBf.textContent = `Body Fat Percentage: ${bodyFatPercentage}%`;
        modalBfIssues.textContent = bfIssues;
        modalLbm.textContent = `Lean Body Mass: ${lbm} kg`;
        modalWhr.textContent = `Waist-to-Hip Ratio: ${whr}`;
        modalWhrIssues.textContent = whrIssues;
        modalBmr.textContent = `Basal Metabolic Rate: ${bmr} calories/day`;
        modal.style.display = "flex";
      } else {
        modalTitle.textContent = "Error";
        modalBmi.textContent = "Please enter all required fields.";
        modalBmiIssues.textContent = "";
        modalBmiSymptoms.textContent = "";
        modalBf.textContent = "";
        modalBfIssues.textContent = "";
        modalLbm.textContent = "";
        modalWhr.textContent = "";
        modalWhrIssues.textContent = "";
        modalBmr.textContent = "";
        modal.style.display = "flex";
      }
    });
  }

  window.closeModal = function (modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "none";
  };
});