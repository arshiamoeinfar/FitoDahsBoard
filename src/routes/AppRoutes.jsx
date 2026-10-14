import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardAthlete from "../pages/athlete/Dashboard-Athlete/DashboardAthlete";
import Home from "../pages/Home/Home";
import StartTrain from "../pages/athlete/StartTrain/StartTrain";
import DashBoardNutrition from "../pages/athlete/DashBoardNutrition/DashBoardNutrition";
import AnalysisPage from "../pages/athlete/AnalysisPage/AnalysisPage";
import TrainingPage from "../pages/athlete/TrainingPage/TrainingPage";
import Settings from "../pages/Setting/SettingsPage";
import Coach from "../pages/coach/CoachDashboard";
import CoachAthletes from "../pages/coach/CoachAthletes";
import ReportPage from "../pages/coach/ReportPage";
import MessageCoach from "../pages/coach/MessageCoach";
import ApplyWorkout from "../pages/coach/ApplyWorkout";
import CoachAthleteProfile from "../pages/coach/CoachAthleteProfile";
import CoachSetting from "../pages/coach/Setting";
import WorkoutProgramBuilder from "../pages/coach/WorkoutProgramBuilder";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboardAthlete" element={<DashboardAthlete />} />
      <Route path="/dashboardnutrition" element={<DashBoardNutrition />} />
      <Route path="/dashboardAthlete/start-training" element={<StartTrain />} />
      <Route path="/AnalysisPage" element={<AnalysisPage />} />
      <Route path="/trainingpage" element={<TrainingPage />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/coach/dashboard" element={<Coach />} />
      <Route path="/coach/athletes" element={<CoachAthletes />} />
      <Route path="/coach/athletes/:id" element={<CoachAthleteProfile />} />
      <Route path="/coach/report" element={<ReportPage />} />
      <Route path="/coach/message" element={<MessageCoach />} />
      <Route path="/coach/programs" element={<ApplyWorkout />} />
      <Route path="/coach/builder" element={<WorkoutProgramBuilder />} />
      <Route path="/coach/settings" element={<CoachSetting />} />
    </Routes>
  );
}
