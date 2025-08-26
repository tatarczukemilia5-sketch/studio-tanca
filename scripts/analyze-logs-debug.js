console.log("[v0] Starting log analysis...")

async function analyzeLogs() {
  try {
    console.log("[v0] Fetching CSV data from URL...")
    const response = await fetch(
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/studio_tanca-17b7isn3f-tatarczukemilia5-8190s-projects_vercel_app_logs-bcPntiBflcivroPvcoFIfrmnGK2SRl.csv",
    )

    if (!response.ok) {
      console.log("[v0] Error: Failed to fetch CSV data", response.status, response.statusText)
      return
    }

    const csvText = await response.text()
    console.log("[v0] CSV data fetched successfully, length:", csvText.length)
    console.log("[v0] First 200 characters:", csvText.substring(0, 200))

    // Parse CSV
    const lines = csvText.trim().split("\n")
    console.log("[v0] Total lines in CSV:", lines.length)

    if (lines.length < 2) {
      console.log("[v0] Error: CSV file appears to be empty or has no data rows")
      return
    }

    const headers = lines[0].split(",")
    console.log("[v0] CSV headers:", headers)

    const data = []
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(",")
      if (values.length >= 2) {
        data.push({
          path_name: values[0],
          size: values[1],
        })
      }
    }

    console.log("[v0] Parsed", data.length, "data rows")

    // Analyze the data
    console.log("\n=== ANALIZA LOGÓW VERCEL ===")

    // Count requests by path
    const pathCounts = {}
    const pathSizes = {}

    data.forEach((row) => {
      const path = row.path_name
      const size = Number.parseInt(row.size) || 0

      pathCounts[path] = (pathCounts[path] || 0) + 1
      pathSizes[path] = size
    })

    // Sort by frequency
    const sortedPaths = Object.entries(pathCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 20)

    console.log("\n📊 NAJCZĘŚCIEJ ŻĄDANE PLIKI:")
    sortedPaths.forEach(([path, count]) => {
      const size = pathSizes[path]
      console.log(`${count}x - ${path} (${size} bytes)`)
    })

    // Look for video file specifically
    const videoRequests = data.filter(
      (row) => row.path_name.includes(".mp4") || row.path_name.includes("placeholder.mp4"),
    )

    console.log("\n🎥 ŻĄDANIA PLIKÓW VIDEO:")
    if (videoRequests.length > 0) {
      videoRequests.forEach((req) => {
        console.log(`- ${req.path_name} (${req.size} bytes)`)
      })
    } else {
      console.log("- Brak żądań plików video w logach")
    }

    // Look for 404 patterns
    const smallFiles = data.filter((row) => Number.parseInt(row.size) < 100)
    console.log("\n❌ POTENCJALNE BŁĘDY 404 (małe pliki < 100 bytes):")
    if (smallFiles.length > 0) {
      smallFiles.slice(0, 10).forEach((file) => {
        console.log(`- ${file.path_name} (${file.size} bytes)`)
      })
    } else {
      console.log("- Brak podejrzanych małych plików")
    }

    // Summary
    console.log("\n📋 PODSUMOWANIE:")
    console.log(`- Łącznie żądań: ${data.length}`)
    console.log(`- Unikalnych ścieżek: ${Object.keys(pathCounts).length}`)
    console.log(`- Pliki video: ${videoRequests.length}`)
    console.log(`- Podejrzane małe pliki: ${smallFiles.length}`)
  } catch (error) {
    console.log("[v0] Error during analysis:", error.message)
    console.log("[v0] Error stack:", error.stack)
  }
}

analyzeLogs()
