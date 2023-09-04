import {Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';


function App() {
  return (
    <FeedbackProvider>
      <Header />
      <div className="container">
      <Routes>
        <Route exact path='/' element = {
          <>
          <FeedbackForm />
          <FeedbackStats />
          <FeedbackList />
          </>
        } />
        <Route path = '/about' element = {<AboutPage />}/>
      </Routes>
        <AboutIconLink />
      </div>
    </FeedbackProvider>
  );
}

export default App;
