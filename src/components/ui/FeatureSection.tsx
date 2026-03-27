import React from "react";
import { LayoutGrid, Store, ShieldCheck, TrendingUp, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

const topFeatures: FeatureCard[] = [
  {
    title: "Product Catalogue",
    description: "Discover Digital Products and Services Easily",
    icon: <LayoutGrid className="w-12 h-12 text-blue-400 opacity-80" />,
  },
  {
    title: "Creator Store",
    description: "Showcase Your Skills and Digital Portfolio",
    icon: <Store className="w-12 h-12 text-blue-400 opacity-80" />,
  },
  {
    title: "Secure Payment",
    description: "Safe and Transparent Digital Transactions",
    icon: (
      <ShieldCheck className="w-16 h-16 text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,1)] scale-110" />
    ),
    highlight: true,
  },
];

const bottomFeatures: FeatureCard[] = [
  {
    title: "Trending Products",
    description: "Discover What's Popular in the Marketplace",
    icon: <TrendingUp className="w-10 h-10 text-white/50" />,
  },
  {
    title: "Market Insights",
    description: "Understand Market Trends and Opportunities",
    icon: <BarChart3 className="w-10 h-10 text-white/50" />,
  },
];

export const FeatureSection = () => {
  return (
    <section id="feature" className="relative w-full min-h-screen py-24 px-6 md:px-12 flex flex-col items-center z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Feature <span className="text-gradient-a">Kreaflow?</span>
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed font-light">
          KreaFlow is a digital marketplace designed to help students monetize their digital skills by connecting creators with a growing demand for digital services and products.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto w-full flex flex-col gap-6">
        {/* Top Row: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`group relative glass-card rounded-3xl p-8 flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-blue-500/30 ${
                feature.highlight ? "border-blue-500/30" : ""
              }`}
            >
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="mb-6 z-10">{feature.icon}</div>
              <h3 className="text-xl font-medium text-white mb-2 z-10">{feature.title}</h3>
              <p className="text-sm text-gray-400 z-10">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row: 2 Wide Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bottomFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative glass-card rounded-3xl p-8 min-h-[200px] flex flex-col justify-end overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-blue-500/30"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-blue-500/10 transition-colors duration-300" />
              <div className="absolute top-8 right-8 z-10 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                {feature.icon}
              </div>
              <div className="z-10 mt-auto">
                <h3 className="text-2xl font-medium text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 max-w-xs">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
