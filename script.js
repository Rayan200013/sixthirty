function setClock() {
  const hourHand = document.getElementById("hourHand");
  const minuteHand = document.getElementById("minuteHand");
  const secondHand = document.getElementById("secondHand");
  const clockText = document.createElement("div");

  const hours = 6; // Set to 6 for 6:30 PM
  const minutes = 30;

  const hoursDegree = (hours % 12) * 30 + minutes / 2;
  const minutesDegree = minutes * 6;

  hourHand.style.transform = `translate(-50%, -100%) rotate(${hoursDegree}deg)`;
  minuteHand.style.transform = `translate(-50%, -100%) rotate(${minutesDegree}deg)`;

  // Create clock text with heart symbol and display it
  clockText.classList.add("clock-text");
  clockText.innerHTML = '6:30 PM <span class="heart">&hearts;</span>';

  // Append clock text to the clock
  const clockContainer = document.querySelector(".clock");
  clockContainer.appendChild(clockText);
}

setClock(); // Set the clock initially
