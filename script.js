// Theme toggle
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

// AI Tip Generator
const aiTips = [
  "Use AI to generate quick wireframes for brainstorming.",
  "Leverage AI to analyze user feedback faster.",
  "AI can help automate repetitive design tasks.",
  "Experiment with AI-driven color palette suggestions."
];

document.getElementById('aiTipBtn').addEventListener('click', () => {
  const randomTip = aiTips[Math.floor(Math.random() * aiTips.length)];
  document.getElementById('aiTipText').textContent = randomTip;
});