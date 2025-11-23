const fs = require('fs');
const path = require('path');

const outputDir = path.join('mindly-web', 'public', 'images');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const configs = [
    { name: "mbti-lite", colors: ["#818cf8", "#c084fc"], emoji: "🧩" },
    { name: "social-energy", colors: ["#fbbf24", "#f87171"], emoji: "⚡" },
    { name: "emotional-processing", colors: ["#f472b6", "#a78bfa"], emoji: "💭" },
    { name: "love-tension", colors: ["#f87171", "#ec4899"], emoji: "💖" },
    { name: "match-analysis", colors: ["#fb7185", "#2dd4bf"], emoji: "💞" },
    { name: "work-style", colors: ["#60a5fa", "#1e40af"], emoji: "💼" },
    { name: "stress-coping", colors: ["#34d399", "#059669"], emoji: "🛡️" },
    { name: "job-character", colors: ["#a78bfa", "#fbbf24"], emoji: "🔮" },
    { name: "emotional-temp", colors: ["#38bdf8", "#facc15"], emoji: "🌡️" },
    { name: "resilience", colors: ["#a3e635", "#10b981"], emoji: "🌱" },
    { name: "self-understanding", colors: ["#94a3b8", "#64748b"], emoji: "🪞" },
    { name: "color-preference", colors: ["#f43f5e", "#3b82f6"], emoji: "🎨" },
    { name: "culture-taste", colors: ["#c084fc", "#db2777"], emoji: "🎵" },
    { name: "life-pattern", colors: ["#1e293b", "#f59e0b"], emoji: "🌗" },
];

configs.forEach(({ name, colors, emoji }) => {
    const gradientId = `grad-${name}`;
    const stops = colors.length > 1
        ? `<stop offset="0%" stop-color="${colors[0]}" /><stop offset="100%" stop-color="${colors[1]}" />`
        : `<stop offset="0%" stop-color="${colors[0]}" /><stop offset="100%" stop-color="${colors[0]}" />`;

    const svgContent = `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
      ${stops}
    </linearGradient>
    <filter id="shadow">
      <feDropShadow dx="0" dy="10" stdDeviation="20" flood-color="${colors[0]}" flood-opacity="0.2"/>
    </filter>
  </defs>
  
  <rect width="100%" height="100%" fill="#f8fafc" />
  
  <circle cx="20%" cy="20%" r="200" fill="url(#${gradientId})" opacity="0.1" />
  <circle cx="80%" cy="80%" r="150" fill="url(#${gradientId})" opacity="0.15" />
  
  <g filter="url(#shadow)">
    <rect x="200" y="100" width="400" height="400" rx="60" fill="white" fill-opacity="0.6" />
    <rect x="200" y="100" width="400" height="400" rx="60" stroke="url(#${gradientId})" stroke-width="2" fill="none" opacity="0.3"/>
  </g>
  
  <circle cx="400" cy="300" r="120" fill="url(#${gradientId})" opacity="0.1" />
  <text x="50%" y="50%" font-family="Segoe UI, Arial, sans-serif" font-size="140" text-anchor="middle" dy=".35em">${emoji}</text>
</svg>`;

    fs.writeFileSync(path.join(outputDir, `${name}.svg`), svgContent);
});

console.log("Successfully generated 14 theme SVGs.");


