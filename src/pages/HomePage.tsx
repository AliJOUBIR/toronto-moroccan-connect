
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Map, Briefcase, Users, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Logo from '@/components/Logo';

const HomePage = () => {
  // Sample blog posts
  const featuredPosts = [
    {
      id: 1,
      title: "Celebrating Eid in Toronto: Community Events",
      excerpt: "Join us for special Eid celebrations across the city with the Moroccan community.",
      date: "April 9, 2023",
      image: "https://images.unsplash.com/photo-1540866225557-9e4c58100c67?q=80&w=500&auto=format&fit=crop",
      category: "Events"
    },
    {
      id: 2,
      title: "Newcomer's Guide: Adjusting to Life in Toronto",
      excerpt: "Essential tips for Moroccan newcomers to help you settle in Canada's largest city.",
      date: "March 15, 2023",
      image: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?q=80&w=500&auto=format&fit=crop",
      category: "Guides"
    },
    {
      id: 3,
      title: "Recipe: Authentic Moroccan Couscous",
      excerpt: "Learn how to make traditional couscous with ingredients available in Toronto.",
      date: "February 28, 2023",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36?q=80&w=500&auto=format&fit=crop",
      category: "Culture"
    }
  ];

  // Upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Moroccan Cultural Festival",
      date: "June 15, 2023",
      time: "12:00 PM - 8:00 PM",
      location: "Nathan Phillips Square",
      image: "https://images.unsplash.com/photo-1548199464-33c6c8a2119c?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Community Basketball Tournament",
      date: "July 8, 2023",
      time: "10:00 AM - 5:00 PM",
      location: "Regent Park Athletic Grounds",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=500&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-morocco-red to-morocco-red/80 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute right-0 bottom-0 w-32 h-64 bg-morocco-green transform rotate-45 translate-x-16 translate-y-16"></div>
          <div className="absolute left-0 top-0 w-32 h-64 bg-morocco-green transform -rotate-45 -translate-x-16 -translate-y-16"></div>
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Welcome to the Moroccan Community in Toronto
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Connect with fellow Moroccans, discover events, share resources, and build lifelong friendships in the heart of Toronto.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-morocco-red hover:bg-white/90">
                  Join Our Community
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Explore Events
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <Logo size="lg" className="w-40 h-40 md:w-56 md:h-56" />
                <div className="absolute -right-8 top-0 w-16 h-12 bg-morocco-green">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="text-morocco-red text-2xl">★</div>
                  </div>
                </div>
                {/* Stylized CN Tower */}
                <div className="absolute -left-12 bottom-0 w-4 h-32 bg-toronto-blue"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 card-hover">
              <div className="rounded-full bg-morocco-red/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Calendar className="text-morocco-red" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Events</h3>
              <p className="text-gray-600 mb-4">
                Discover upcoming Moroccan cultural celebrations, social gatherings, and networking opportunities.
              </p>
              <Link to="/events" className="text-morocco-red font-medium flex items-center hover:underline">
                View Events <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 card-hover">
              <div className="rounded-full bg-morocco-green/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Map className="text-morocco-green" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Map</h3>
              <p className="text-gray-600 mb-4">
                Find Moroccan restaurants, halal markets, mosques, and other community spots around Toronto.
              </p>
              <Link to="/map" className="text-morocco-green font-medium flex items-center hover:underline">
                Explore Map <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 card-hover">
              <div className="rounded-full bg-morocco-orange/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Briefcase className="text-morocco-orange" />
              </div>
              <h3 className="text-xl font-bold mb-2">Job Board</h3>
              <p className="text-gray-600 mb-4">
                Browse community-sourced job listings, perfect for newcomers, students, and professionals.
              </p>
              <Link to="/jobs" className="text-morocco-orange font-medium flex items-center hover:underline">
                Find Jobs <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="section-heading">Latest From Our Blog</h2>
            <Link to="/blog" className="text-morocco-red font-medium flex items-center hover:underline">
              View All Posts <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map(post => (
              <Card key={post.id} className="overflow-hidden card-hover border-none">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105" 
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-morocco-red font-medium mb-2">{post.category}</div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Link to={`/blog/${post.id}`} className="text-morocco-red font-medium text-sm hover:underline">
                      Read More
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="py-16 bg-gradient-to-r from-morocco-green/5 to-morocco-red/5">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="section-heading">Upcoming Events</h2>
            <Link to="/events" className="text-morocco-red font-medium flex items-center hover:underline">
              View All Events <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map(event => (
              <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row card-hover">
                <div className="md:w-1/3 h-48 md:h-auto">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6 md:w-2/3 flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <div className="text-gray-600 mb-2">
                    <div className="flex items-center mb-1">
                      <Calendar className="h-4 w-4 mr-2 text-morocco-red" />
                      <span>{event.date} • {event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <Map className="h-4 w-4 mr-2 text-morocco-red" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 flex items-center">
                    <Button variant="outline" className="mr-2">
                      RSVP
                    </Button>
                    <Button variant="ghost" size="icon" className="text-morocco-red" title="Add to Calendar">
                      <Calendar className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-morocco-red text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1,200+</div>
              <div className="text-white/80">Community Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">45+</div>
              <div className="text-white/80">Events Per Year</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">80+</div>
              <div className="text-white/80">Blog Articles</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">120+</div>
              <div className="text-white/80">Local Businesses</div>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Vibrant Moroccan Community in Toronto
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Connect with fellow Moroccans, participate in cultural events, and contribute to our growing community.
            </p>
            <Button size="lg" className="bg-morocco-red hover:bg-morocco-red/90">
              Become a Member
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
