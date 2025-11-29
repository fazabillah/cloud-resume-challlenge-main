import { useState, useEffect } from 'react'

/**
 * Custom hook for fetching data from either API endpoints or static JSON files
 *
 * Usage:
 * const { data, loading, error } = useDataSource('projects') // From API or JSON
 *
 * Current behavior:
 * - Checks for API_URL environment variable
 * - If API_URL is set, fetches from {API_URL}/api/{endpoint}
 * - If API_URL is not set, imports static JSON from data folder
 *
 * Future migration path:
 * 1. Set VITE_API_URL in .env.local file
 * 2. No code changes needed - hook will automatically use API
 * 3. API should return same data structure as static JSON files
 */

const staticDataCache = {}

async function loadStaticData(endpoint) {
  // Cache to avoid re-importing
  if (staticDataCache[endpoint]) {
    return staticDataCache[endpoint]
  }

  try {
    // Import static JSON data
    const data = await import(`../data/${endpoint}.json`, {
      assert: { type: 'json' }
    })
    staticDataCache[endpoint] = data.default
    return data.default
  } catch {
    throw new Error(`Failed to load static data for endpoint: ${endpoint}`)
  }
}

export function useDataSource(endpoint) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)

        const apiUrl = import.meta.env.VITE_API_URL

        let result
        if (apiUrl) {
          // Fetch from API
          const response = await fetch(`${apiUrl}/api/${endpoint}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          })

          if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`)
          }

          result = await response.json()
        } else {
          // Use static data
          result = await loadStaticData(endpoint)
        }

        setData(result)
      } catch (err) {
        setError(err.message || 'Failed to fetch data')
        console.error(`Error fetching ${endpoint}:`, err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [endpoint])

  return { data, loading, error }
}

export default useDataSource
