import { useEffect, useState } from 'react'

function useRepositories () {
  const [repositories, setRepositories] = useState(null)
  const fetchRepositories = async () => {
    const response = await global.fetch('http://192.168.1.105/__HTDOCS/EJERCICIOS/JSON_EXAMPLE/repositories.json')
    const data = await response.json()
    setRepositories(data)
  }

  useEffect(() => {
    fetchRepositories()
  }, [])

  return { repositories }
}

export default useRepositories
