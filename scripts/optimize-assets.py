import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

os.makedirs('public/images/og', exist_ok=True)

# 1. Optimize Logos
# -------------------------------------------------------------
logo_src = 'public/images/orion-logo.png'
dark_src = 'public/images/orion-logo-dark.png'

# Optimize light logo (used on light backgrounds)
if os.path.exists(logo_src):
    img = Image.open(logo_src)
    # Resize to 500px width (high DPI for 198x64 display size)
    aspect = img.height / img.width
    new_w = 480
    new_h = int(new_w * aspect)
    resized_light = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Save WebP (< 25 KB)
    resized_light.save('public/images/orion-logo.webp', 'WEBP', quality=85, method=6)
    resized_light.save('public/images/orion-logo-light.webp', 'WEBP', quality=85, method=6)
    
    # Overwrite uncompressed 712KB PNGs with optimized versions
    resized_light.save('public/images/orion-logo.png', 'PNG', optimize=True)
    resized_light.save('public/images/orion-logo-light.png', 'PNG', optimize=True)
    print(f"Optimized light logo WebP: {os.path.getsize('public/images/orion-logo.webp')} bytes")
    print(f"Optimized light logo PNG: {os.path.getsize('public/images/orion-logo.png')} bytes")

# Optimize dark logo (used on dark backgrounds)
if os.path.exists(dark_src):
    img_dark = Image.open(dark_src)
    aspect = img_dark.height / img_dark.width
    new_w = 480
    new_h = int(new_w * aspect)
    resized_dark = img_dark.resize((new_w, new_h), Image.Resampling.LANCZOS)
    resized_dark.save('public/images/orion-logo-dark.webp', 'WEBP', quality=85, method=6)
    resized_dark.save('public/images/orion-logo-dark.png', 'PNG', optimize=True)
    print(f"Optimized dark logo WebP: {os.path.getsize('public/images/orion-logo-dark.webp')} bytes")
    print(f"Optimized dark logo PNG: {os.path.getsize('public/images/orion-logo-dark.png')} bytes")

# 2. Multi-Resolution Favicons & App Icons from favicon.svg or logo
# -------------------------------------------------------------
# Generate favicons from the logo mark
icon_sizes = [
    ('favicon-16x16.png', 16),
    ('favicon-32x32.png', 32),
    ('apple-touch-icon.png', 180),
    ('android-chrome-192x192.png', 192),
    ('android-chrome-512x512.png', 512),
]

# Create brand icon base (Emerald background with "O" brand monogram or symbol)
for filename, size in icon_sizes:
    icon_img = Image.new('RGBA', (size, size), (15, 23, 42, 255)) # Dark slate bg
    draw = ImageDraw.Draw(icon_img)
    # Emerald gradient accent
    accent_margin = int(size * 0.08)
    draw.rounded_rectangle(
        [accent_margin, accent_margin, size - accent_margin, size - accent_margin],
        radius=int(size * 0.22),
        fill=(5, 150, 105, 255) # Emerald-600
    )
    # Inner dark disc
    inner_margin = int(size * 0.22)
    draw.rounded_rectangle(
        [inner_margin, inner_margin, size - inner_margin, size - inner_margin],
        radius=int(size * 0.16),
        fill=(11, 15, 25, 255)
    )
    # Bright emerald core star/dot
    dot_margin = int(size * 0.38)
    draw.ellipse(
        [dot_margin, dot_margin, size - dot_margin, size - dot_margin],
        fill=(52, 211, 153, 255) # Emerald-400
    )
    icon_img.save(f'public/images/{filename}', 'PNG', optimize=True)
    print(f"Generated {filename} ({size}x{size}): {os.path.getsize(f'public/images/{filename}')} bytes")

# 3. Dedicated 1200x630 Social Share Cards
# -------------------------------------------------------------
hero_mapping = {
    'og-default.jpg': ('public/images/heroes/home-hero.jpg', 'Orion Software & Trading', 'Complete Technology Solutions | Custom Software, IT Hardware & Infrastructure'),
    'og-home.jpg': ('public/images/heroes/home-hero.jpg', 'Orion Software & Trading', 'Enterprise Software Engineering, Commercial IT Hardware & Technical Support'),
    'og-software.jpg': ('public/images/heroes/software-hero.jpg', 'Custom Software Solutions', 'Enterprise Web Applications, ERP, CRM, AI Automation & Cloud Infrastructure'),
    'og-hardware.jpg': ('public/images/heroes/hardware-hero.jpg', 'IT Hardware Catalog', 'Commercial Servers, Business Laptops, Cisco Switches, CCTV & Power Systems'),
    'og-support.jpg': ('public/images/heroes/support-hero.jpg', 'Technical Support & Installation', 'Server Setup, Structured Cabling, CCTV Installation & Network Configuration'),
}

for og_file, (hero_path, title, subtitle) in hero_mapping.items():
    card = Image.new('RGB', (1200, 630), (11, 15, 25))
    if os.path.exists(hero_path):
        hero = Image.open(hero_path).convert('RGB')
        # Center crop and fit to right half with smooth blending
        hero_aspect = hero.width / hero.height
        target_h = 630
        target_w = int(target_h * hero_aspect)
        hero_resized = hero.resize((target_w, target_h), Image.Resampling.LANCZOS)
        
        # Paste on right
        paste_x = max(0, 1200 - target_w)
        card.paste(hero_resized, (paste_x, 0))
    
    # Overlay dark gradient on left
    overlay = Image.new('RGBA', (1200, 630), (0, 0, 0, 0))
    d_overlay = ImageDraw.Draw(overlay)
    
    # Create smooth gradient overlay from solid dark slate on left to semi-transparent on right
    for x in range(1200):
        if x < 400:
            alpha = 250
        elif x < 850:
            factor = (x - 400) / 450.0
            alpha = int(250 - factor * 110)
        else:
            alpha = 140
        d_overlay.line([(x, 0), (x, 630)], fill=(11, 15, 25, alpha))
    
    card.paste(overlay, (0, 0), overlay)
    
    # Draw branding elements
    d = ImageDraw.Draw(card)
    # Emerald brand pill top left
    d.rounded_rectangle([80, 70, 360, 108], radius=19, fill=(5, 150, 105))
    
    # Logo text / mark in pill
    # Bottom brand signature
    d.rectangle([80, 560, 400, 564], fill=(5, 150, 105)) # Accent bar
    
    # Save high-quality optimized JPG (< 120 KB)
    out_path = f'public/images/og/{og_file}'
    card.save(out_path, 'JPEG', quality=88, optimize=True)
    print(f"Generated {og_file} (1200x630): {os.path.getsize(out_path)} bytes")

