import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [health, setHealth] = useState('unknown')
  const [apps, setApps] = useState<{ id: string; name: string; description: string }[]>([])

  useEffect(() => {
    fetch('/health')
      .then((r) => r.json())
      .then((d) => setHealth(d.status ?? 'unknown'))
      .catch(() => setHealth('error'))

    fetch('/api/apps')
      .then((r) => r.json())
      .then((d) => setApps(Array.isArray(d) ? d : []))
      .catch(() => setApps([]))
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>App Hoster</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Backend health: {health}</p>
        <div>
          <strong>Apps</strong>
          <ul>
            {apps.map((app) => (
              <li key={app.id}>
                {app.name} – {app.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
