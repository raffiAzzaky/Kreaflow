"use client";

import dynamic from "next/dynamic";
import { Header } from "@/components/ui/Header";
import { HeroSection } from "@/components/ui/HeroSection";
import { AboutSection } from "@/components/ui/AboutSection";
import { FeatureSection } from "@/components/ui/FeatureSection";
import { BlogSection } from "@/components/ui/BlogSection";
import { ContactSection } from "@/components/ui/ContactSection";
import { Footer } from "@/components/ui/Footer";

// Load 3D Background hanya di client-side untuk menghindari error Hydration
const HeroBackground3D = dynamic(() => import("@/components/3d/HeroBackground3D"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#05070A]" />
});

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#05070A] overflow-x-hidden">
      {/* Layer 0: Animasi 3D Anti-Gravity */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <HeroBackground3D />
      </div>

      {/* Layer 1: Konten UI Utama */}
      <div className="relative z-10 flex flex-col">
        <Header />
        <HeroSection />
        <AboutSection />
        <FeatureSection />
        <BlogSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}