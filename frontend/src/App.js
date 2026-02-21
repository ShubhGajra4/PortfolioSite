import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExpertiseSection from "./components/ExpertiseSection";
import ResultsSection from "./components/ResultsSection";
import ClientsSection from "./components/ClientsSection";
import IndustriesSection from "./components/IndustriesSection";
import SkillsToolsSection from "./components/SkillsToolsSection";
import CTASection from "./components/CTASection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import CaseStudiesSection from "./components/CaseStudiesSection";

// Main Home Page
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <ResultsSection />
      <ClientsSection />
      <IndustriesSection />
      <SkillsToolsSection />
      <CTASection />
      <ContactForm />
    </>
  );
};

// Case Studies Page
const CaseStudiesPage = () => {
  return (
    <div className="pt-20">
      <CaseStudiesSection />
      <CTASection />
      <ContactForm />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
