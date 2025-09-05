"use client";
import React, { useState, useContext, useEffect } from "react";
import {
  Menu,
  CheckCircle,
  Headphones,
  Brain,
  BarChart3,
  Clock,
  EyeOff,
  UserPlus,
  Smile,
  TrendingUp,
  Globe,
  Twitter,
  Linkedin,
  Zap,
} from "lucide-react";
import { UserDetailContext } from "@/context/UserDetailContext";

const AIInterviewPlatform = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useContext(UserDetailContext);

  // Smooth scroll function
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    {
      icon: <CheckCircle className="text-white text-3xl" />,
      title: "Easy Interview Setup",
      items: ["Enter job details", "Select duration", "AI-generated questions"],
    },
    {
      icon: <Headphones className="text-white text-3xl" />,
      title: "Seamless Candidate Journey",
      items: [
        "Unique interview link",
        "Voice-based interview",
        "AI interviewer asks",
      ],
    },
    {
      icon: <Brain className="text-white text-3xl" />,
      title: "AI-Powered Insights",
      items: [
        "Evaluate responses",
        "Ratings (Skills, etc.)",
        "Hiring recommendations",
      ],
    },
    {
      icon: <BarChart3 className="text-white text-3xl" />,
      title: "Your Hiring Hub",
      items: ["View interviews", "Track statuses", "Access feedback"],
    },
  ];

  const benefits = [
    {
      icon: <Clock className="text-blue-400 text-4xl" />,
      title: "Save Time & Resources",
    },
    {
      icon: <EyeOff className="text-blue-400 text-4xl" />,
      title: "Unbiased Evaluation",
    },
    {
      icon: <UserPlus className="text-blue-400 text-4xl" />,
      title: "Candidate Evaluation",
    },
    {
      icon: <Smile className="text-blue-400 text-4xl" />,
      title: "Enhanced Experience",
    },
    {
      icon: <TrendingUp className="text-blue-400 text-4xl" />,
      title: "Scalable Solutions",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      text: "This AI interview platform has revolutionized our hiring process. The insights are incredibly detailed and accurate.",
    },
    {
      name: "Michael Chen",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      text: "The automated screening saves us countless hours while maintaining high-quality candidate evaluation standards.",
    },
    {
      name: "David Rodriguez",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      text: "This platform is a game-changer! We've cut our screening time by 70% and the quality of candidates has improved significantly.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-2">
            <Zap className="text-white text-3xl" />
            <span className="text-2xl font-bold text-white">LOGO</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              className="text-white hover:text-blue-300 transition-colors"
              onClick={() => scrollToSection("features")}
            >
              Features
            </button>
            <a
              className="text-white hover:text-blue-300 transition-colors"
              href="/billing"
            >
              Pricing
            </a>
            <button
              className="text-white hover:text-blue-300 transition-colors"
              onClick={() => scrollToSection("testimonials")}
            >
              Testimonials
            </button>
          </nav>

          {!user && (
            <a
              className="hidden md:block bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              href="/auth"
            >
              Sign In
            </a>
          )}

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="text-white" />
          </button>
        </header>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 rounded-lg p-4 mb-6">
            <nav className="flex flex-col space-y-4">
              <button
                className="text-white hover:text-blue-300 transition-colors"
                onClick={() => scrollToSection("features")}
              >
                Features
              </button>
              <a
                className="text-white hover:text-blue-300 transition-colors"
                href="/billing"
              >
                Pricing
              </a>
              <button
                className="text-white hover:text-blue-300 transition-colors"
                onClick={() => scrollToSection("testimonials")}
              >
                Testimonials
              </button>
              {!user && (
                <a
                  className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors text-center"
                  href="/auth"
                >
                  Sign In
                </a>
              )}
            </nav>
          </div>
        )}

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 rounded-2xl mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center px-12">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Revolutionize Your Hiring: Intelligent AI Interviews,
                Seamlessly.
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Automate Screening, Find Top Talent Faster.
              </p>
              <a
                className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 text-lg transition-colors inline-block"
                href="/dashboard"
              >
                Get Started Free
              </a>
            </div>

            <div className="relative flex justify-center">
              <img
                alt="Professional woman conducting AI-powered interview"
                className="rounded-lg z-10 w-full max-w-sm shadow-2xl"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop&crop=face"
              />
              <div className="absolute inset-0 bg-blue-500 opacity-20 blur-3xl rounded-lg"></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Effortless Interviewing for Recruiters
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <ul className="list-disc list-inside text-slate-400 space-y-2">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-slate-800 rounded-2xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-12 px-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="bg-slate-700 p-4 rounded-full mb-4 group-hover:bg-slate-600 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-sm md:text-base">
                  {benefit.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div id="testimonials" className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Recruiters Are Saying?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-slate-700 p-6 rounded-xl hover:bg-slate-600 transition-colors"
                >
                  <div className="flex items-center mb-4">
                    <img
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                      src={testimonial.image}
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 text-lg transition-colors inline-block"
              href="/dashboard"
            >
              Get Started Today
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-slate-700 mt-10">
          <div className="flex flex-wrap items-center gap-6 mb-4 md:mb-0">
            <a
              className="text-slate-400 hover:text-white transition-colors"
              href="#"
            >
              About Us
            </a>
            <a
              className="text-slate-400 hover:text-white transition-colors"
              href="#"
            >
              Pricing
            </a>
            <a
              className="text-slate-400 hover:text-white transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-slate-400 hover:text-white transition-colors"
              href="#"
            >
              Terms of Service
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <a
              className="text-slate-400 hover:text-white transition-colors"
              href="#"
              aria-label="Website"
            >
              <Globe className="w-5 h-5" />
            </a>
            <a
              className="text-slate-400 hover:text-white transition-colors"
              href="#"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              className="text-slate-400 hover:text-white transition-colors"
              href="#"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AIInterviewPlatform;
