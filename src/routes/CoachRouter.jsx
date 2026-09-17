import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Coach from '../pages/coach/CoachDashboard'
import CoachAthletes from '../pages/coach/CoachAthletes'
import ReportPage from '../pages/coach/ReportPage'
import MessageCoach from '../pages/coach/MessageCoach'
import ApplyWorkout from '../pages/coach/ApplyWorkout'

export default function CoachRouter() {
  return (
    <>
    <Routes>
        <Route path="/coach/dashboard" element={<Coach />} />
        <Route path="/coach/athletes" element={<CoachAthletes />} />
        <Route path="/coach/report" element={<ReportPage />} />
        <Route path="/coach/message" element={<MessageCoach />} />
        <Route path="/coach/programs" element={<ApplyWorkout />} />
    </Routes>
    </>
  )
}
