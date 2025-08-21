import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import SearchSection from "@/components/SearchSection";
import TrendingExams from "@/components/TrendingExams";
import Navigation from "@/components/Navigation";
import ExamCategories from "@/components/ExamCategories";
import ScholarshipsSection from "@/components/ScholarshipsSection";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Create intersection observer for smooth transition
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Navigation is visible, start transition
            const progress = 1 - entry.intersectionRatio;
            setScrollProgress(progress);
            window.dispatchEvent(new CustomEvent('scrollProgress', { detail: progress }));
          } else {
            // Navigation is not visible, complete transition
            setScrollProgress(1);
            window.dispatchEvent(new CustomEvent('scrollProgress', { detail: 1 }));
          }
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: '-100px 0px 0px 0px' // Start transition 100px before navigation reaches top
      }
    );

    // Observe the navigation element
    const navigationElement = document.querySelector('.navigation-section');
    if (navigationElement) {
      observer.observe(navigationElement);
    }

    return () => {
      if (navigationElement) {
        observer.unobserve(navigationElement);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroCarousel />
      <SearchSection />
      <TrendingExams />
      
      {/* Navigation component that smoothly moves into header */}
      <div 
        className="navigation-section transition-all duration-500 ease-out"
        style={{
          transform: `translateY(-${scrollProgress * 80}px)`,
          opacity: 1 - scrollProgress,
          marginBottom: `${scrollProgress * 10}px`
        }}
      >
        <Navigation />
      </div>
      
      <ExamCategories />
      <ScholarshipsSection />
      <AboutSection />
    </div>
  );
};

export default Index;
