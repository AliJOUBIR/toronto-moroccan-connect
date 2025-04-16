
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Calendar, ChevronRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const BlogPage = () => {
  // Sample blog posts
  const posts = [
    {
      id: 1,
      title: "Celebrating Eid in Toronto: Community Events",
      excerpt: "Join us for special Eid celebrations across the city with the Moroccan community.",
      date: "April 9, 2023",
      author: "Fatima Zahra",
      image: "https://images.unsplash.com/photo-1540866225557-9e4c58100c67?q=80&w=500&auto=format&fit=crop",
      category: "Events",
      tags: ["eid", "celebration", "community"]
    },
    {
      id: 2,
      title: "Newcomer's Guide: Adjusting to Life in Toronto",
      excerpt: "Essential tips for Moroccan newcomers to help you settle in Canada's largest city.",
      date: "March 15, 2023",
      author: "Mohammed Ali",
      image: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?q=80&w=500&auto=format&fit=crop",
      category: "Guides",
      tags: ["newcomers", "settlement", "tips"]
    },
    {
      id: 3,
      title: "Recipe: Authentic Moroccan Couscous",
      excerpt: "Learn how to make traditional couscous with ingredients available in Toronto.",
      date: "February 28, 2023",
      author: "Samira Benali",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36?q=80&w=500&auto=format&fit=crop",
      category: "Culture",
      tags: ["food", "recipe", "traditional"]
    },
    {
      id: 4,
      title: "Moroccan Artistic Traditions in Modern Toronto",
      excerpt: "How Moroccan artists are bringing traditional crafts and modern art to Toronto's cultural scene.",
      date: "February 15, 2023",
      author: "Karim Hassan",
      image: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?q=80&w=500&auto=format&fit=crop",
      category: "Culture",
      tags: ["art", "crafts", "tradition"]
    },
    {
      id: 5,
      title: "Spotlight: Moroccan-Owned Businesses in Toronto",
      excerpt: "Discover local businesses owned by Moroccan entrepreneurs making their mark in Toronto.",
      date: "January 20, 2023",
      author: "Leila Mansour",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=500&auto=format&fit=crop",
      category: "Business",
      tags: ["business", "entrepreneurs", "local"]
    },
    {
      id: 6,
      title: "Learning Darija: Language Resources in Toronto",
      excerpt: "Resources and classes for learning Moroccan Arabic (Darija) in the Greater Toronto Area.",
      date: "January 5, 2023",
      author: "Youssef El-Fassi",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=500&auto=format&fit=crop",
      category: "Education",
      tags: ["language", "darija", "classes"]
    }
  ];

  // Categories
  const categories = [
    { name: "All", count: posts.length },
    { name: "Events", count: posts.filter(p => p.category === "Events").length },
    { name: "Culture", count: posts.filter(p => p.category === "Culture").length },
    { name: "Guides", count: posts.filter(p => p.category === "Guides").length },
    { name: "Business", count: posts.filter(p => p.category === "Business").length },
    { name: "Education", count: posts.filter(p => p.category === "Education").length }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-morocco-red to-morocco-red/90 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Community Blog</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Stay updated with news, stories, and insights from Toronto's Moroccan community.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Search</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input 
                    placeholder="Search articles..." 
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Categories</h3>
                <ul className="space-y-2">
                  {categories.map(category => (
                    <li key={category.name}>
                      <button className="flex justify-between w-full px-2 py-1.5 rounded hover:bg-gray-100 transition-colors text-left">
                        <span className={category.name === "All" ? "font-medium" : ""}>{category.name}</span>
                        <span className="text-gray-500 text-sm">{category.count}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-3">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-gray-100 hover:bg-gray-200">community</Badge>
                  <Badge variant="outline" className="bg-gray-100 hover:bg-gray-200">culture</Badge>
                  <Badge variant="outline" className="bg-gray-100 hover:bg-gray-200">food</Badge>
                  <Badge variant="outline" className="bg-gray-100 hover:bg-gray-200">events</Badge>
                  <Badge variant="outline" className="bg-gray-100 hover:bg-gray-200">toronto</Badge>
                  <Badge variant="outline" className="bg-gray-100 hover:bg-gray-200">morocco</Badge>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Latest Articles</h2>
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="h-4 w-4" /> Filter
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map(post => (
                <Card key={post.id} className="overflow-hidden card-hover border-none">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105" 
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-morocco-red hover:bg-morocco-red/90">{post.category}</Badge>
                      <div className="text-sm text-gray-500 flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Separator className="mb-4" />
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2 text-gray-500" />
                        <span className="text-sm">{post.author}</span>
                      </div>
                      <Link to={`/blog/${post.id}`} className="text-morocco-red font-medium text-sm flex items-center hover:underline">
                        Read More <ChevronRight className="h-3 w-3 ml-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-10 flex justify-center">
              <Button variant="outline" className="mx-1 px-4">1</Button>
              <Button variant="outline" className="mx-1 px-4">2</Button>
              <Button variant="outline" className="mx-1 px-4">3</Button>
              <Button variant="outline" className="mx-1">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
