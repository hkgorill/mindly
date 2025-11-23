import os

output_dir = "mindly-web/public/images"
os.makedirs(output_dir, exist_ok=True)

# (Filename, [Colors], Emoji/Symbol)
configs = [
    ("mbti-lite", ["#818cf8", "#c084fc"], "🧩"), # Indigo-Purple / Puzzle
    ("social-energy", ["#fbbf24", "#f87171"], "⚡"), # Amber-Red / Energy
    ("emotional-processing", ["#f472b6", "#a78bfa"], "💭"), # Pink-Violet / Thought
    ("love-tension", ["#f87171", "#ec4899"], "💖"), # Red-Pink / Heart
    ("match-analysis", ["#fb7185", "#2dd4bf"], "💞"), # Rose-Teal / Match
    ("work-style", ["#60a5fa", "#1e40af"], "💼"), # Blue / Briefcase
    ("stress-coping", ["#34d399", "#059669"], "🛡️"), # Emerald / Shield
    ("job-character", ["#a78bfa", "#fbbf24"], "🔮"), # Violet-Amber / Magic
    ("emotional-temp", ["#38bdf8", "#facc15"], "🌡️"), # Sky-Yellow / Temp
    ("resilience", ["#a3e635", "#10b981"], "🌱"), # Lime-Emerald / Sprout
    ("self-understanding", ["#94a3b8", "#64748b"], "🪞"), # Slate / Mirror
    ("color-preference", ["#f43f5e", "#3b82f6"], "🎨"), # Rose-Blue / Palette
    ("culture-taste", ["#c084fc", "#db2777"], "🎵"), # Purple-Pink / Music
    ("life-pattern", ["#1e293b", "#f59e0b"], "🌗"), # Dark-Amber / DayNight
]

def create_svg(filename, colors, emoji):
    gradient_id = f"grad-{filename}"
    
    # Gradient stops
    stops = ""
    if len(colors) > 1:
        stops = f'<stop offset="0%" stop-color="{colors[0]}" /><stop offset="100%" stop-color="{colors[1]}" />'
    else:
        stops = f'<stop offset="0%" stop-color="{colors[0]}" /><stop offset="100%" stop-color="{colors[0]}" />'

    svg_content = f'''<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="{gradient_id}" x1="0%" y1="0%" x2="100%" y2="100%">
      {stops}
    </linearGradient>
    <filter id="glass" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
    </filter>
    <filter id="shadow">
      <feDropShadow dx="0" dy="10" stdDeviation="20" flood-color="{colors[0]}" flood-opacity="0.3"/>
    </filter>
  </defs>
  
  <!-- Background -->
  <rect width="100%" height="100%" fill="#f8fafc" />
  
  <!-- Decorative Blobs -->
  <circle cx="20%" cy="20%" r="200" fill="url(#{gradient_id})" opacity="0.1" />
  <circle cx="80%" cy="80%" r="150" fill="url(#{gradient_id})" opacity="0.2" />
  
  <!-- Glass Card Shape -->
  <g filter="url(#shadow)">
    <rect x="200" y="100" width="400" height="400" rx="60" fill="white" fill-opacity="0.4" />
    <rect x="200" y="100" width="400" height="400" rx="60" stroke="url(#{gradient_id})" stroke-width="2" fill="none" opacity="0.5"/>
  </g>
  
  <!-- Central Element -->
  <circle cx="400" cy="300" r="120" fill="url(#{gradient_id})" opacity="0.1" />
  <text x="50%" y="50%" font-family="Segoe UI, Apple Color Emoji, sans-serif" font-size="140" text-anchor="middle" dy=".35em">{emoji}</text>
</svg>'''
    
    with open(f"{output_dir}/{filename}.svg", "w", encoding="utf-8") as f:
        f.write(svg_content)

for name, colors, emoji in configs:
    create_svg(name, colors, emoji)

print("Successfully generated 14 theme SVGs.")

