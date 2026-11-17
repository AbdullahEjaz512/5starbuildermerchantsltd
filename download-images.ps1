# Download premium high-resolution images for 5 Star Builders Merchants Ltd
$images = @(
  @{ out = "public/images/hero-yard.jpg"; url = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=85" },
  @{ out = "public/images/about-yard.jpg"; url = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=85" },
  @{ out = "public/images/delivery-truck.jpg"; url = "https://images.unsplash.com/photo-1779517226273-bcf843b759b9?auto=format&fit=crop&w=1600&q=85" },
  @{ out = "public/images/contact-yard.jpg"; url = "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1600&q=85" },
  @{ out = "public/images/cta-texture.jpg"; url = "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=85" },
  @{ out = "public/images/services/plumbing.jpg"; url = "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=900&q=85" },
  @{ out = "public/images/services/wood.jpg"; url = "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=900&q=85" },
  @{ out = "public/images/services/electric.jpg"; url = "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=85" },
  @{ out = "public/images/services/fascia.jpg"; url = "https://images.unsplash.com/photo-1681049400158-0ff6249ac315?auto=format&fit=crop&w=900&q=85" },
  @{ out = "public/images/services/guttering.jpg"; url = "https://images.unsplash.com/photo-1654531015087-8cc3d04d1b2d?auto=format&fit=crop&w=900&q=85" },
  @{ out = "public/images/services/drainage.jpg"; url = "https://images.unsplash.com/photo-1571171034327-fa82ad7c11c7?auto=format&fit=crop&w=900&q=85" },
  @{ out = "public/images/services/plasterboard.jpg"; url = "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=900&q=85" },
  @{ out = "public/images/services/bonding.jpg"; url = "https://images.unsplash.com/photo-1704005445445-2747074be8ac?auto=format&fit=crop&w=900&q=85" }
)

New-Item -ItemType Directory -Force -Path "public/images/services" | Out-Null

foreach ($img in $images) {
  Write-Host "Downloading $($img.out)..."
  & curl.exe -s -L -o $img.out $img.url
  if (Test-Path $img.out) {
    $bytes = (Get-Item $img.out).Length
    Write-Host "OK: $($img.out) ($bytes bytes)"
  } else {
    Write-Host "FAILED: $($img.out)"
  }
}
