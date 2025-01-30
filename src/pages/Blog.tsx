import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Die wichtigsten Werkzeuge für die Möbelmontage",
    excerpt: "Erfahren Sie, welche Werkzeuge für eine professionelle Möbelmontage unerlässlich sind und wie Sie diese richtig einsetzen.",
    date: "15. März 2024",
    author: "Nick Neumann",
    image: "https://images.unsplash.com/photo-1581683705068-ca8f49fc7f45?auto=format&fit=crop&q=80",
    category: "Werkzeuge"
  },
  {
    title: "Tipps zur Pflege Ihrer Holzmöbel",
    excerpt: "Lernen Sie die besten Methoden kennen, um Ihre Holzmöbel langfristig in einem optimalen Zustand zu erhalten.",
    date: "10. März 2024",
    author: "Nick Neumann",
    image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80",
    category: "Pflege"
  },
  {
    title: "Moderne Trends im Möbeldesign 2024",
    excerpt: "Entdecken Sie die aktuellen Trends in der Möbelbranche und erfahren Sie, wie Sie diese in Ihr Zuhause integrieren können.",
    date: "5. März 2024",
    author: "Nick Neumann",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80",
    category: "Trends"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Unser Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Entdecken Sie spannende Artikel rund um Möbel, Montage und Handwerk
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="group relative">
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#92400e]/35 to-[#92400e]/35 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
              
              <div className="relative bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-[#92400e] bg-[#92400e]/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-[#92400e] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button className="text-[#92400e] hover:text-[#92400e]/80 inline-flex items-center">
                      Weiterlesen
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}