import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Customization from "./components/Customization";
import Templates from "./components/Templates";
import Pricing from "./components/Pricing";
import ReviewForm from "./components/ReviewForm";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";

const initialReviews = [
  {
    name: "John Doe",
    rating: 5,
    comment: "These templates are amazing! They've saved me so much time.",
  },
  {
    name: "Jane Smith",
    rating: 4,
    comment: "Great variety of designs. Highly recommended!",
  },
  {
    name: "Mike Johnson",
    rating: 5,
    comment:
      "The quality of these templates is outstanding. Worth every penny!",
  },
  {
    name: "Sarah Brown",
    rating: 4,
    comment: "Easy to use and customize. Perfect for my small business.",
  },
  {
    name: "Chris Lee",
    rating: 5,
    comment: "I've tried many template packs, but this one is by far the best.",
  },
];

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <Customization />
                <Templates />
                <Pricing />
                <Reviews reviews={initialReviews} />
                <ReviewForm />
              </>
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
