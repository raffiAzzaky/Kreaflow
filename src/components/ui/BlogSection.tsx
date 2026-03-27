import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

interface Article {
  title: string;
  description: string;
  tag: string;
  image: string;
}

const latestArticles: Article[] = [
  {
    title: "Turning Digital Skills Into Income",
    description: "Learn how students can turn their digital skills into real income opportunities in the growing digital marketplace.",
    tag: "Home.Creative",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    title: "Start Your Digital Career Today",
    description: "Discover how beginners can start building a digital career by selling skills and services online.",
    tag: "Home.Creative",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    title: "Build Your First Creator Store",
    description: "Learn how to create your own digital store and showcase your portfolio to potential clients.",
    tag: "Home.Creative",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=200&h=200",
  }
];

const newArticles: Article[] = [
  {
    title: "Top Digital Skills in Demand",
    description: "Explore the most popular digital skills that are currently in high demand.",
    tag: "Home.Creative",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    title: "How Students Make Money Online",
    description: "Many students are now earning income online by sharing their talents and digital services. This article explains practical ways to start earning while still studying.",
    tag: "Home.Creative",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    title: "Grow in the Creator Economy",
    description: "The creator economy is expanding rapidly, opening opportunities for students and freelancers.",
    tag: "Home.Creative",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=200&h=200",
  }
];

export function BlogSection() {
  return (
    <section id="blog" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto z-10 relative">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog & Article</h2>
        <p className="text-gray-400 text-lg">A platform where students showcase their digital talents and grow in the creator economy.</p>
      </div>

      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-blue-400/80 mb-8 border-b-2 border-white/10 pb-4 inline-block">Latest with the most view</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.map((article, idx) => (
            <BlogCard key={`latest-${idx}`} {...article} />
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-white/90 mb-8 border-b-2 border-white/10 pb-4 inline-block">New article</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newArticles.map((article, idx) => (
            <BlogCard key={`new-${idx}`} {...article} />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button className="text-white/50 hover:text-white transition-colors duration-300" aria-label="Load more articles">
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}

function BlogCard({ title, description, tag, image }: Article) {
  return (
    <div className="group relative glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-blue-500/30 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
      <div className="flex justify-between items-start gap-4 mb-6">
        <div className="flex-1">
          <h4 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-blue-400/70 transition-colors">{title}</h4>
          <a href="#" className="inline-flex items-center text-xs text-blue-400/80 hover:text-blue-400 mb-4 transition-colors">
            <ArrowRight className="w-3 h-3 mr-1" /> Click to learn more
          </a>
        </div>
        <div className="w-24 h-24 shrink-0 overflow-hidden rounded-xl border border-white/10 shadow-lg">
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-400/90 leading-relaxed mb-4 line-clamp-3">{description}</p>
        <div className="text-right">
          <span className="text-[10px] text-gray-500 italic">{tag}</span>
        </div>
      </div>
    </div>
  )
}
