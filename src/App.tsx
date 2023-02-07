import { Routes, Route, Navigate, BrowserRouter as Router } from 'react-router-dom'

import { Dashboard } from 'pages/dashboard/Dashboard'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
