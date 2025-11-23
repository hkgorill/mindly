"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-2" : "py-4"
      )}
    >
      <div
        className={cn(
          "container mx-auto px-4 max-w-5xl transition-all duration-300",
          isScrolled 
            ? "bg-white/70 backdrop-blur-md border border-white/20 rounded-full shadow-sm h-14" 
            : "bg-transparent border-transparent h-16",
          "flex items-center justify-between"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 pl-2 md:pl-4">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white shadow-md">
            <Sparkles size={18} />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">
            Mindly
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 pr-6">
          {["Tests", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Tests" ? "/" : `/${item.toLowerCase()}`}
              className="text-slate-600 hover:text-indigo-600 transition-colors font-medium text-sm"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-600 pr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 p-4 bg-white/90 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl md:hidden flex flex-col gap-4 z-50"
          >
            {["Tests", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Tests" ? "/" : `/${item.toLowerCase()}`}
                className="text-slate-700 hover:text-indigo-600 p-2 font-medium text-center border-b border-slate-100 last:border-none"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

