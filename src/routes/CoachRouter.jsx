import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Coach from '../pages/coach/CoachDashboard'
import CoachAthletes from '../pages/coach/CoachAthletes'
import ReportPage from '../pages/coach/ReportPage'
export default function CoachRouter() {
  return (
    <>
    <Routes>
        <Route path="/coach/dashboard" element={<Coach />} />
        <Route path="/coach/athletes" element={<CoachAthletes />} />
        {/* <Route path="/coach/programs" element={<CoachPrograms />} /> */}
        <Route path="/coach/report" element={<ReportPage />} />
    </Routes>
    </>
  )
}
