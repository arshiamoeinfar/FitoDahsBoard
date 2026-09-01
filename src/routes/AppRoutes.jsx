import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardAthlete from "../pages/Dashboard-Athlete/DashboardAthlete";
import Home from "../pages/Home/Home";
import StartTrain from "../pages/StartTrain/StartTrain";
import DashBoardNutrition from "../pages/DashBoardNutrition/DashBoardNutrition";
import AnalysisPage from "../pages/AnalysisPage/AnalysisPage";
import TrainingPage from "../pages/TrainingPage/TrainingPage";
import Settings from "../pages/Setting/SettingsPage";

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
    </Routes>
  );
}
