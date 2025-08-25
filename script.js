  document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent page reload

    let total = 0;
    let unanswered = false;

    // Loop through all 6 questions
    for (let i = 1; i <= 6; i++) {
      let selected = document.querySelector('input[name="q' + i + '"]:checked');
      if (selected) {
        total += parseInt(selected.value);
      } else {
        unanswered = true;
      }
    }

    // If not answered all questions, show alert
    if (unanswered) {
      alert("⚠️ Please answer all questions before submitting.");
    } else {
      // Save score in localStorage
      localStorage.setItem("quizScore", total);
      // Redirect to result page
      window.location.href = "result.html";
    }


    
  });
