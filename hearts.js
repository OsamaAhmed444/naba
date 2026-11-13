(() => {
  const container = document.getElementById("floating-emojis");
  if (!container || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const symbols = ["💗", "💕", "💖", "💞", "✨", "🌸", "🎀"];

  function addFloatingEmoji() {
    if (container.childElementCount >= 20) return;

    const emoji = document.createElement("span");
    emoji.className = "floating-emoji";
    emoji.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    emoji.style.left = `${Math.random() * 100}%`;
    emoji.style.fontSize = `${18 + Math.random() * 22}px`;
    emoji.style.setProperty("--float-duration", `${7 + Math.random() * 5}s`);
    emoji.style.setProperty("--float-drift", `${Math.round(Math.random() * 120 - 60)}px`);
    emoji.style.setProperty("--float-spin", `${Math.round(Math.random() * 80 - 40)}deg`);
    emoji.style.setProperty("--float-opacity", `${0.45 + Math.random() * 0.4}`);
    emoji.addEventListener("animationend", () => emoji.remove(), { once: true });
    container.appendChild(emoji);
  }

  for (let i = 0; i < 6; i++) {
    window.setTimeout(addFloatingEmoji, i * 350);
  }

  window.setInterval(addFloatingEmoji, 650);
})();
