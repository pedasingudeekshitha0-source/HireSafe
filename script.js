function analyzeJob() {

  const input =
    document.getElementById("jobInput").value.toLowerCase();

  const resultTitle =
    document.getElementById("resultTitle");

  const resultText =
    document.getElementById("resultText");

  const score =
    document.getElementById("score");

  const scamKeywords = [
    "pay registration fee",
    "urgent hiring",
    "work from home no skills",
    "send otp",
    "investment required",
    "easy money",
    "limited slots",
    "whatsapp only",
    "telegram",
    "processing fee",
    "pay first"
  ];

  let dangerScore = 0;

  scamKeywords.forEach((word) => {
    if (input.includes(word)) {
      dangerScore += 10;
    }
  });

  if (dangerScore >= 40) {

    resultTitle.innerHTML = "⚠ High Scam Risk";

    resultText.innerHTML =
      "This job description contains multiple suspicious scam patterns.";

    score.innerHTML =
      "Trust Score: " + (100 - dangerScore) + "%";

    score.style.color = "red";

  }

  else if (dangerScore >= 20) {

    resultTitle.innerHTML = "⚠ Medium Risk";

    resultText.innerHTML =
      "This job description has some suspicious elements.";

    score.innerHTML =
      "Trust Score: " + (100 - dangerScore) + "%";

    score.style.color = "orange";

  }

  else {

    resultTitle.innerHTML = "✅ Looks Safer";

    resultText.innerHTML =
      "No major scam indicators detected.";

    score.innerHTML =
      "Trust Score: " + (100 - dangerScore) + "%";

    score.style.color = "#22c55e";

  }

}
