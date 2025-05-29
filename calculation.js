document.addEventListener("DOMContentLoaded", () => {
  // BMI Calculator
  const calculateBmiButton = document.getElementById("calculate-bmi");
  if (calculateBmiButton) {
    calculateBmiButton.addEventListener("click", () => {
      const height = parseFloat(document.getElementById("bmi-height").value) / 100;
      const weight = parseFloat(document.getElementById("bmi-weight").value);
      const modal = document.getElementById("bmi-modal");
      const modalTitle = document.getElementById("bmi-modal-title");
      const modalResult = document.getElementById("bmi-modal-result");
      const modalDisadvantages = document.getElementById("bmi-modal-disadvantages");
      const modalLongterm = document.getElementById("bmi-modal-longterm");
      const modalSymptoms = document.getElementById("bmi-modal-symptoms");

      if (height && weight) {
        const bmi = (weight / (height * height)).toFixed(1);
        let category, disadvantages, longterm, symptoms;

        if (bmi < 18.5) {
          category = "Underweight";
          disadvantages = "Disadvantages: Reduced energy, weakened immune system, nutrient deficiencies.";
          longterm = "Long-term Problems: Osteoporosis, fertility issues, increased risk of infections.";
          symptoms = "Symptoms: Fatigue, dizziness, hair loss, irregular menstrual cycles.";
        } else if (bmi < 25) {
          category = "Normal";
          disadvantages = "You're in a healthy range! No significant disadvantages.";
          longterm = "Long-term: Maintain this range to prevent future health issues.";
          symptoms = "No significant symptoms.";
        } else if (bmi < 30) {
          category = "Overweight";
          disadvantages = "Disadvantages: Increased strain on joints, reduced stamina.";
          longterm = "Long-term Problems: Higher risk of heart disease, type 2 diabetes, hypertension.";
          symptoms = "Symptoms: Shortness of breath, fatigue, joint pain.";
        } else {
          category = "Obese";
          disadvantages = "Disadvantages: Limited mobility, higher fatigue, social stigma.";
          longterm = "Long-term Problems: Heart disease, stroke, diabetes, certain cancers.";
          symptoms = "Symptoms: Excessive sweating, snoring, sleep apnea, severe joint pain.";
        }

        modalTitle.innerHTML = `<i class="fas fa-weight-scale mr-3 text-[#0d9488]"></i>BMI Result`;
        modalResult.textContent = `BMI: ${bmi} (${category})`;
        modalDisadvantages.textContent = disadvantages;
        modalLongterm.textContent = longterm;
        modalSymptoms.textContent = bmi < 25 && bmi >= 18.5 ? "" : symptoms;
        modal.style.display = "flex";
      } else {
        modalTitle.innerHTML = `<i class="fas fa-weight-scale mr-3 text-[#0d9488]"></i>Error`;
        modalResult.textContent = "Please enter valid height and weight.";
        modalDisadvantages.textContent = "";
        modalLongterm.textContent = "";
        modalSymptoms.textContent = "";
        modal.style.display = "flex";
      }
    });
  }

  // Body Fat Percentage Calculator
  const calculateBfButton = document.getElementById("calculate-bf");
  if (calculateBfButton) {
    calculateBfButton.addEventListener("click", () => {
      const height = parseFloat(document.getElementById("bf-height").value) / 100;
      const weight = parseFloat(document.getElementById("bf-weight").value);
      const age = parseFloat(document.getElementById("bf-age").value);
      const gender = document.getElementById("bf-gender").value;
      const modal = document.getElementById("bf-modal");
      const modalTitle = document.getElementById("bf-modal-title");
      const modalResult = document.getElementById("bf-modal-result");
      const modalDisadvantages = document.getElementById("bf-modal-disadvantages");
      const modalLongterm = document.getElementById("bf-modal-longterm");
      const modalSymptoms = document.getElementById("bf-modal-symptoms");

      if (height && weight && age) {
        const bmi = (weight / (height * height)).toFixed(1);
        const bodyFatPercentage = gender === "male"
          ? (1.2 * bmi + 0.23 * age - 16.2).toFixed(1)
          : (1.2 * bmi + 0.23 * age - 5.4).toFixed(1);
        let disadvantages, longterm, symptoms;

        if (gender === "male") {
          if (bodyFatPercentage < 8) {
            disadvantages = "Disadvantages: Reduced energy, hormonal imbalance.";
            longterm = "Long-term Problems: Organ dysfunction, fertility issues.";
            symptoms = "Symptoms: Fatigue, low libido, muscle weakness.";
          } else if (bodyFatPercentage <= 20) {
            disadvantages = "You're in a healthy range! No significant disadvantages.";
            longterm = "Long-term: Maintain this range for optimal health.";
            symptoms = "No significant symptoms.";
          } else {
            disadvantages = "Disadvantages: Increased strain on organs, reduced mobility.";
            longterm = "Long-term Problems: Obesity-related diseases, cardiovascular issues.";
            symptoms = "Symptoms: Fatigue, shortness of breath, joint pain.";
          }
        } else {
          if (bodyFatPercentage < 21) {
            disadvantages = "Disadvantages: Hormonal imbalance, reduced energy.";
            longterm = "Long-term Problems: Reproductive issues, osteoporosis.";
            symptoms = "Symptoms: Irregular periods, fatigue, hair loss.";
          } else if (bodyFatPercentage <= 33) {
            disadvantages = "You're in a healthy range! No significant disadvantages.";
            longterm = "Long-term: Maintain this range for optimal health.";
            symptoms = "No significant symptoms.";
          } else {
            disadvantages = "Disadvantages: Increased strain on organs, reduced mobility.";
            longterm = "Long-term Problems: Obesity-related diseases, cardiovascular issues.";
            symptoms = "Symptoms: Fatigue, shortness of breath, joint pain.";
          }
        }

        modalTitle.innerHTML = `<i class="fas fa-percentage mr-3 text-[#0d9488]"></i>Body Fat Percentage Result`;
        modalResult.textContent = `Body Fat Percentage: ${bodyFatPercentage}%`;
        modalDisadvantages.textContent = disadvantages;
        modalLongterm.textContent = longterm;
        modalSymptoms.textContent = (gender === "male" && bodyFatPercentage <= 20 && bodyFatPercentage >= 8) ||
                                   (gender === "female" && bodyFatPercentage <= 33 && bodyFatPercentage >= 21)
                                   ? ""
                                   : symptoms;
        modal.style.display = "flex";
      } else {
        modalTitle.innerHTML = `<i class="fas fa-percentage mr-3 text-[#0d9488]"></i>Error`;
        modalResult.textContent = "Please enter all required fields.";
        modalDisadvantages.textContent = "";
        modalLongterm.textContent = "";
        modalSymptoms.textContent = "";
        modal.style.display = "flex";
      }
    });
  }

  // Lean Body Mass Calculator
  const calculateLbmButton = document.getElementById("calculate-lbm");
  if (calculateLbmButton) {
    calculateLbmButton.addEventListener("click", () => {
      const height = parseFloat(document.getElementById("lbm-height").value) / 100;
      const weight = parseFloat(document.getElementById("lbm-weight").value);
      const age = parseFloat(document.getElementById("lbm-age").value);
      const gender = document.getElementById("lbm-gender").value;
      const modal = document.getElementById("lbm-modal");
      const modalTitle = document.getElementById("lbm-modal-title");
      const modalResult = document.getElementById("lbm-modal-result");
      const modalDisadvantages = document.getElementById("lbm-modal-disadvantages");
      const modalLongterm = document.getElementById("lbm-modal-longterm");
      const modalSymptoms = document.getElementById("lbm-modal-symptoms");

      if (height && weight && age) {
        const bmi = (weight / (height * height)).toFixed(1);
        const bodyFatPercentage = gender === "male"
          ? (1.2 * bmi + 0.23 * age - 16.2).toFixed(1)
          : (1.2 * bmi + 0.23 * age - 5.4).toFixed(1);
        const fatMass = weight * (bodyFatPercentage / 100);
        const lbm = (weight - fatMass).toFixed(1);
        let disadvantages, longterm, symptoms;

        // Rough estimation of healthy LBM range based on weight (not exact, for illustrative purposes)
        const expectedLbmRangeMin = weight * 0.65; // Assuming 65% of weight as minimum healthy LBM
        const expectedLbmRangeMax = weight * 0.85; // Assuming 85% of weight as maximum healthy LBM

        if (lbm < expectedLbmRangeMin) {
          disadvantages = "Disadvantages: Reduced muscle strength, lower metabolism.";
          longterm = "Long-term Problems: Increased risk of frailty, osteoporosis.";
          symptoms = "Symptoms: Weakness, fatigue, difficulty performing physical tasks.";
        } else if (lbm <= expectedLbmRangeMax) {
          disadvantages = "You're in a healthy range! No significant disadvantages.";
          longterm = "Long-term: Maintain this range for optimal physical performance.";
          symptoms = "No significant symptoms.";
        } else {
          disadvantages = "Disadvantages: Possible excess muscle mass, strain on joints.";
          longterm = "Long-term Problems: Potential joint issues, higher caloric needs.";
          symptoms = "Symptoms: Joint discomfort, increased appetite.";
        }

        modalTitle.innerHTML = `<i class="fas fa-dumbbell mr-3 text-[#0d9488]"></i>Lean Body Mass Result`;
        modalResult.textContent = `Lean Body Mass: ${lbm} kg`;
        modalDisadvantages.textContent = disadvantages;
        modalLongterm.textContent = longterm;
        modalSymptoms.textContent = lbm <= expectedLbmRangeMax && lbm >= expectedLbmRangeMin ? "" : symptoms;
        modal.style.display = "flex";
      } else {
        modalTitle.innerHTML = `<i class="fas fa-dumbbell mr-3 text-[#0d9488]"></i>Error`;
        modalResult.textContent = "Please enter all required fields.";
        modalDisadvantages.textContent = "";
        modalLongterm.textContent = "";
        modalSymptoms.textContent = "";
        modal.style.display = "flex";
      }
    });
  }

  // Waist-to-Hip Ratio Calculator
  const calculateWhrButton = document.getElementById("calculate-whr");
  if (calculateWhrButton) {
    calculateWhrButton.addEventListener("click", () => {
      const waist = parseFloat(document.getElementById("whr-waist").value);
      const hip = parseFloat(document.getElementById("whr-hip").value);
      const gender = document.getElementById("whr-gender").value;
      const modal = document.getElementById("whr-modal");
      const modalTitle = document.getElementById("whr-modal-title");
      const modalResult = document.getElementById("whr-modal-result");
      const modalDisadvantages = document.getElementById("whr-modal-disadvantages");
      const modalLongterm = document.getElementById("whr-modal-longterm");
      const modalSymptoms = document.getElementById("whr-modal-symptoms");

      if (waist && hip) {
        const whr = (waist / hip).toFixed(2);
        let disadvantages, longterm, symptoms;

        if (gender === "male") {
          if (whr > 0.9) {
            disadvantages = "Disadvantages: Higher visceral fat, increased metabolic strain.";
            longterm = "Long-term Problems: Cardiovascular diseases, type 2 diabetes.";
            symptoms = "Symptoms: Abdominal discomfort, fatigue, high blood pressure.";
          } else {
            disadvantages = "You're in a healthy range! No significant disadvantages.";
            longterm = "Long-term: Maintain this range to reduce health risks.";
            symptoms = "No significant symptoms.";
          }
        } else {
          if (whr > 0.85) {
            disadvantages = "Disadvantages: Higher visceral fat, increased metabolic strain.";
            longterm = "Long-term Problems: Cardiovascular diseases, type 2 diabetes.";
            symptoms = "Symptoms: Abdominal discomfort, fatigue, high blood pressure.";
          } else {
            disadvantages = "You're in a healthy range! No significant disadvantages.";
            longterm = "Long-term: Maintain this range to reduce health risks.";
            symptoms = "No significant symptoms.";
          }
        }

        modalTitle.innerHTML = `<i class="fas fa-ruler-horizontal mr-3 text-[#0d9488]"></i>Waist-to-Hip Ratio Result`;
        modalResult.textContent = `Waist-to-Hip Ratio: ${whr}`;
        modalDisadvantages.textContent = disadvantages;
        modalLongterm.textContent = longterm;
        modalSymptoms.textContent = (gender === "male" && whr <= 0.9) || (gender === "female" && whr <= 0.85)
                                   ? ""
                                   : symptoms;
        modal.style.display = "flex";
      } else {
        modalTitle.innerHTML = `<i class="fas fa-ruler-horizontal mr-3 text-[#0d9488]"></i>Error`;
        modalResult.textContent = "Please enter all required fields.";
        modalDisadvantages.textContent = "";
        modalLongterm.textContent = "";
        modalSymptoms.textContent = "";
        modal.style.display = "flex";
      }
    });
  }

  // Basal Metabolic Rate Calculator
  const calculateBmrButton = document.getElementById("calculate-bmr");
  if (calculateBmrButton) {
    calculateBmrButton.addEventListener("click", () => {
      const height = parseFloat(document.getElementById("bmr-height").value) / 100;
      const weight = parseFloat(document.getElementById("bmr-weight").value);
      const age = parseFloat(document.getElementById("bmr-age").value);
      const gender = document.getElementById("bmr-gender").value;
      const modal = document.getElementById("bmr-modal");
      const modalTitle = document.getElementById("bmr-modal-title");
      const modalResult = document.getElementById("bmr-modal-result");
      const modalDisadvantages = document.getElementById("bmr-modal-disadvantages");
      const modalLongterm = document.getElementById("bmr-modal-longterm");
      const modalSymptoms = document.getElementById("bmr-modal-symptoms");

      if (height && weight && age) {
        const bmr = gender === "male"
          ? (10 * weight + 6.25 * (height * 100) - 5 * age + 5).toFixed(0)
          : (10 * weight + 6.25 * (height * 100) - 5 * age - 161).toFixed(0);
        let disadvantages, longterm, symptoms;

        // Rough estimation of healthy BMR range based on age and gender (not exact, for illustrative purposes)
        const expectedBmrRangeMin = gender === "male" ? 1400 : 1200;
        const expectedBmrRangeMax = gender === "male" ? 2000 : 1800;

        if (bmr < expectedBmrRangeMin) {
          disadvantages = "Disadvantages: Slow metabolism, difficulty maintaining weight.";
          longterm = "Long-term Problems: Increased risk of weight gain, nutrient deficiencies.";
          symptoms = "Symptoms: Fatigue, cold intolerance, hair loss.";
        } else if (bmr <= expectedBmrRangeMax) {
          disadvantages = "You're in a healthy range! No significant disadvantages.";
          longterm = "Long-term: Maintain this range for optimal energy balance.";
          symptoms = "No significant symptoms.";
        } else {
          disadvantages = "Disadvantages: High caloric needs, potential overeating.";
          longterm = "Long-term Problems: Risk of obesity, metabolic strain.";
          symptoms = "Symptoms: Increased appetite, excessive sweating, fatigue.";
        }

        modalTitle.innerHTML = `<i class="fas fa-heartbeat mr-3 text-[#0d9488]"></i>Basal Metabolic Rate Result`;
        modalResult.textContent = `Basal Metabolic Rate: ${bmr} calories/day`;
        modalDisadvantages.textContent = disadvantages;
        modalLongterm.textContent = longterm;
        modalSymptoms.textContent = bmr <= expectedBmrRangeMax && bmr >= expectedBmrRangeMin ? "" : symptoms;
        modal.style.display = "flex";
      } else {
        modalTitle.innerHTML = `<i class="fas fa-heartbeat mr-3 text-[#0d9488]"></i>Error`;
        modalResult.textContent = "Please enter all required fields.";
        modalDisadvantages.textContent = "";
        modalLongterm.textContent = "";
        modalSymptoms.textContent = "";
        modal.style.display = "flex";
      }
    });
  }

  window.closeModal = function (modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "none";
  };
});