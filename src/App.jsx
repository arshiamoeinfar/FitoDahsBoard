import React from 'react'
import "./App.css"
import AppRoutes from "./routes/AppRoutes"
import CoachRouter from "./routes/CoachRouter"

export default function App() {
  return (
    <div>
      <AppRoutes/>
      <CoachRouter/>
    </div>
  )
}
