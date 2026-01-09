import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './Layout';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import PredictionForm from './pages/prediction/PredictionForm';
import PredictionResult from './pages/prediction/PredictionResult';

function App() {
  return (
    <Layout>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/predict" element={<PredictionForm />} />
        <Route path="/result" element={<PredictionResult />} />
      </Routes>
    </Layout>
  );
}

export default App;
