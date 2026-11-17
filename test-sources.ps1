# Test which image sources are reachable
$tests = @(
  @{ name = "commons-api"; url = "https://commons.wikimedia.org/w/api.php?action=query&format=json&list=search&srsearch=construction&srnamespace=6&srlimit=1" },
  @{ name = "openverse-api"; url = "https://api.openverse.org/v1/images/?q=construction&page_size=1" },
  @{ name = "unsplash-1"; url = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400" },
  @{ name = "unsplash-2"; url = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400" },
  @{ name = "unsplash-3"; url = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400" },
  @{ name = "unsplash-4"; url = "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400" },
  @{ name = "unsplash-5"; url = "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400" },
  @{ name = "unsplash-6"; url = "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400" },
  @{ name = "unsplash-7"; url = "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=400" },
  @{ name = "unsplash-8"; url = "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=400" },
  @{ name = "unsplash-9"; url = "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400" },
  @{ name = "unsplash-10"; url = "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400" },
  @{ name = "unsplash-11"; url = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400" },
  @{ name = "unsplash-12"; url = "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400" },
  @{ name = "unsplash-13"; url = "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=400" },
  @{ name = "unsplash-14"; url = "https://images.unsplash.com/photo-1503198515495-d58a5f3d3d0c?w=400" },
  @{ name = "unsplash-15"; url = "https://images.unsplash.com/photo-1516972810927-80185027ca84?w=400" },
  @{ name = "unsplash-16"; url = "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=400" },
  @{ name = "unsplash-17"; url = "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400" },
  @{ name = "unsplash-18"; url = "https://images.unsplash.com/photo-1542013936693-884638332954?w=400" },
  @{ name = "unsplash-19"; url = "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400" },
  @{ name = "unsplash-20"; url = "https://images.unsplash.com/photo-1590496793929-36417d3117de?w=400" }
)
foreach ($t in $tests) {
  try {
    $r = Invoke-WebRequest -Uri $t.url -Headers @{ "User-Agent" = "Mozilla/5.0" } -TimeoutSec 20 -Method Head -ErrorAction Stop
    Write-Host "$($t.name): $($r.StatusCode) $($r.Headers['Content-Type'])"
  } catch {
    Write-Host "$($t.name): FAIL $($_.Exception.Message)"
  }
}
