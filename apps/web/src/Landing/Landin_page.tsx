import React, { useState, useEffect } from "react";
import {
  Play,
  Zap,
  Users,
  Shield,
  Star,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

const AiVideoLanding: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI-Powered Enhancement",
      description:
        "Real-time background noise cancellation, auto-framing, and lighting optimization powered by advanced AI.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Smart Meeting Insights",
      description:
        "Get AI-generated meeting summaries, action items, and participant sentiment analysis.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description:
        "End-to-end encryption with AI-driven threat detection and secure cloud infrastructure.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Head of Product, TechCorp",
      content:
        "VisionAI transformed our remote meetings. The AI features are game-changing.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "CEO, StartupHub",
      content:
        "The best video calling experience we've ever had. Seamless and intelligent.",
      rating: 5,
    },
    {
      name: "Lisa Thompson",
      role: "Creative Director",
      content:
        "Finally, a video app that understands what we need. The AI assistance is incredible.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-slate-900/80 border-b border-white/10">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              VisionAI
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="hover:text-purple-400 transition-colors"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="hover:text-purple-400 transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="hover:text-purple-400 transition-colors"
              >
                Pricing
              </a>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10">
              <div className="flex flex-col space-y-4 pt-4">
                <a
                  href="#features"
                  className="hover:text-purple-400 transition-colors"
                >
                  Features
                </a>
                <a
                  href="#testimonials"
                  className="hover:text-purple-400 transition-colors"
                >
                  Testimonials
                </a>
                <a
                  href="#pricing"
                  className="hover:text-purple-400 transition-colors"
                >
                  Pricing
                </a>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 self-start">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <div
            className="transform transition-all duration-1000"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              The Future of
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                Video Calling
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Experience crystal-clear conversations with AI-powered
              enhancements, smart features, and enterprise-grade security.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="group bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/5">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Hero Video Mockup */}
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 shadow-2xl border border-white/10">
                <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></div>
                  <Play className="w-16 h-16 text-white/70 hover:text-white transition-colors cursor-pointer hover:scale-110 transform duration-300" />

                  {/* Floating AI Elements */}
                  <div className="absolute top-4 left-4 bg-green-500/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm border border-green-500/30 animate-bounce">
                    🤖 AI Active
                  </div>
                  <div className="absolute top-4 right-4 bg-blue-500/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm border border-blue-500/30 animate-bounce delay-500">
                    🔊 Noise Cancelled
                  </div>
                  <div className="absolute bottom-4 left-4 bg-purple-500/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm border border-purple-500/30 animate-bounce delay-1000">
                    📝 Auto Summary
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powered by{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Innovation
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the next generation of video communication with
              intelligent features that adapt to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Loved by{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Thousands
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Meetings?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of teams already using VisionAI to create better,
              smarter video experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/5">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            VisionAI
          </div>
          <p className="text-gray-400">
            © 2024 VisionAI. All rights reserved. Building the future of
            communication.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AiVideoLanding;
