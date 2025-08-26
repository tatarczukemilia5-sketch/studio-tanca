// Script to analyze Vercel deployment logs and identify 404 issues
const csvUrl =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/studio_tanca-17b7isn3f-tatarczukemilia5-8190s-projects_vercel_app_logs-bcPntiBflcivroPvcoFIfrmnGK2SRl.csv"

async function analyzeLogs() {
  try {
    console.log("[v0] Fetching deployment logs...")
    const response = await fetch(csvUrl)
    const csvText = await response.text()

    console.log("[v0] Parsing CSV data...")
    const lines = csvText.split("\n")
    const headers = lines[0].split(",")

    console.log("[v0] Headers found:", headers)

    const data = []
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim()) {
        const values = lines[i].split(",")
        const entry = {}
        headers.forEach((header, index) => {
          entry[header.trim()] = values[index]?.trim() || ""
        })
        data.push(entry)
      }
    }

    console.log("[v0] Total log entries:", data.length)

    // Analyze the data
    const pathCounts = {}
    const sizeCounts = {}

    data.forEach((entry) => {
      const path = entry.path_name || entry.pathname || ""
      const size = entry.size || ""

      pathCounts[path] = (pathCounts[path] || 0) + 1
      sizeCounts[size] = (sizeCounts[size] || 0) + 1
    })

    console.log("[v0] Most requested paths:")
    Object.entries(pathCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .forEach(([path, count]) => {
        console.log(`  ${path}: ${count} requests`)
      })

    console.log("[v0] File sizes distribution:")
    Object.entries(sizeCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .forEach(([size, count]) => {
        console.log(`  ${size} bytes: ${count} files`)
      })

    // Look for potential issues
    const potentialIssues = data.filter((entry) => {
      const path = entry.path_name || entry.pathname || ""
      const size = entry.size || ""

      // Check for common 404 patterns
      return (
        path.includes("404") ||
        path.includes("error") ||
        size === "0" ||
        path.includes(".mp4") ||
        path.includes("placeholder")
      )
    })

    if (potentialIssues.length > 0) {
      console.log("[v0] Potential issues found:")
      potentialIssues.forEach((issue) => {
        console.log(`  Path: ${issue.path_name || issue.pathname}, Size: ${issue.size}`)
      })
    } else {
      console.log("[v0] No obvious issues found in the logs")
    }

    // Check for video file requests
    const videoRequests = data.filter((entry) => {
      const path = entry.path_name || entry.pathname || ""
      return path.includes(".mp4") || path.includes("video") || path.includes("placeholder.mp4")
    })

    if (videoRequests.length > 0) {
      console.log("[v0] Video file requests found:")
      videoRequests.forEach((req) => {
        console.log(`  ${req.path_name || req.pathname}: ${req.size} bytes`)
      })
    }
  } catch (error) {
    console.error("[v0] Error analyzing logs:", error)
  }
}

analyzeLogs()
