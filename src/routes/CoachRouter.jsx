import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Coach from '../pages/coach/CoachDashboard'
import CoachAthletes from '../pages/coach/CoachAthletes'
export default function CoachRouter() {
  return (
    <>
    <Routes>
        <Route path="/coach" element={<Coach />} />
        <Route path="/coach/athletes" element={<CoachAthletes />} />
    </Routes>
    </>
  )
}
