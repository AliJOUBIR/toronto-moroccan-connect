
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight, MapPin, Clock, Users, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const EventsPage = () => {
  // Sample events
  const events = [
    {
      id: 1,
      title: "Moroccan Cultural Festival",
      description: "Join us for a day celebrating Moroccan culture with food, music, art, and performances.",
      date: "June 15, 2023",
      time: "12:00 PM - 8:00 PM",
      location: "Nathan Phillips Square",
      attendees: 120,
      category: "Festival",
      image: "https://images.unsplash.com/photo-1548199464-33c6c8a2119c?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Community Basketball Tournament",
      description: "Annual basketball tournament bringing together teams from across the Moroccan community.",
      date: "July 8, 2023",
      time: "10:00 AM - 5:00 PM",
      location: "Regent Park Athletic Grounds",
      attendees: 85,
      category: "Sports",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Moroccan Cooking Workshop",
      description: "Learn how to prepare authentic Moroccan dishes with Chef Hassan.",
      date: "May 20, 2023",
      time: "2:00 PM - 5:00 PM",
      location: "Community Kitchen Toronto",
      attendees: 25,
      category: "Workshop",
      image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Newcomers Networking Night",
      description: "Special networking event for newcomers to connect with established community members.",
      date: "May 25, 2023",
      time: "6:30 PM - 9:00 PM",
      location: "Toronto Public Library - North York Branch",
      attendees: 40,
      category: "Networking",
      image: "https://images.unsplash.com/photo-1540304453527-62f979142a17?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Eid al-Adha Community Celebration",
      description: "Community gathering to celebrate Eid al-Adha with prayers, food, and activities for children.",
      date: "June 28, 2023",
      time: "9:00 AM - 2:00 PM",
      location: "Paramount Fine Foods Centre",
      attendees: 250,
      category: "Holiday",
      image: "https://images.unsplash.com/photo-1563313005-035fa666f257?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Arabic Calligraphy Workshop",
      description: "Learn the beautiful art of Arabic calligraphy with master calligrapher Yasmine Benali.",
      date: "July 15, 2023",
      time: "1:00 PM - 4:00 PM",
      location: "Art Gallery of Ontario - Studio",
      attendees: 20,
      category: "Workshop",
      image: "https://images.unsplash.com/photo-1583329550487-0fa300a4cd1a?q=80&w=500&auto=format&fit=crop"
    }
  ];

  const pastEvents = [
    {
      id: 101,
      title: "Moroccan New Year Celebration",
      description: "Ring in the new year with Moroccan traditions, music, and food.",
      date: "January 1, 2023",
      time: "8:00 PM - 1:00 AM",
      location: "The Grand Moroccan Hall",
      attendees: 180,
      category: "Holiday",
      image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 102,
      title: "Moroccan Film Festival",
      description: "A weekend of contemporary and classic Moroccan cinema.",
      date: "February 10-12, 2023",
      time: "Various Times",
      location: "TIFF Bell Lightbox",
      attendees: 300,
      category: "Festival",
      image: "https://images.unsplash.com/photo-1568876694728-451bbf694b83?q=80&w=500&auto=format&fit=crop"
    }
  ];

  // Categories
  const categories = [
    { name: "All", count: events.length },
    { name: "Festival", count: events.filter(e => e.category === "Festival").length },
    { name: "Sports", count: events.filter(e => e.category === "Sports").length },
    { name: "Workshop", count: events.filter(e => e.category === "Workshop").length },
    { name: "Networking", count: events.filter(e => e.category === "Networking").length },
    { name: "Holiday", count: events.filter(e => e.category === "Holiday").length }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-morocco-green to-morocco-green/90 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Community Events</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Discover and participate in upcoming events organized by and for the Moroccan community in Toronto.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Search Events</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input 
                    placeholder="Find events..." 
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
                <h3 className="font-bold text-lg mb-3">Submit an Event</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Know of an event that would interest the community? Submit it for approval.
                </p>
                <Button className="w-full bg-morocco-green hover:bg-morocco-green/90">
                  Submit Event
                </Button>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Upcoming Events</h2>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Calendar className="h-4 w-4" /> Calendar View
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="h-4 w-4" /> Filter
                </Button>
              </div>
            </div>

            <Tabs defaultValue="upcoming" className="mb-8">
              <TabsList>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="past">Past Events</TabsTrigger>
              </TabsList>
              
              <TabsContent value="upcoming" className="mt-4">
                <div className="space-y-6">
                  {events.map(event => (
                    <Card key={event.id} className="overflow-hidden card-hover border-none">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 h-48 md:h-auto">
                          <img 
                            src={event.image} 
                            alt={event.title}
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <CardContent className="p-6 md:w-2/3 flex flex-col">
                          <div className="flex justify-between items-start mb-2">
                            <Badge className="bg-morocco-green hover:bg-morocco-green/90">{event.category}</Badge>
                            <div className="flex items-center text-gray-500 text-sm">
                              <Users className="h-3 w-3 mr-1" />
                              {event.attendees} attending
                            </div>
                          </div>
                          <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                          <p className="text-gray-600 mb-4">{event.description}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                            <div className="flex items-center text-gray-600">
                              <Calendar className="h-4 w-4 mr-2 text-morocco-green" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Clock className="h-4 w-4 mr-2 text-morocco-green" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center text-gray-600 md:col-span-2">
                              <MapPin className="h-4 w-4 mr-2 text-morocco-green" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                          
                          <div className="mt-auto flex items-center justify-between">
                            <div className="flex space-x-2">
                              <Button className="bg-morocco-green hover:bg-morocco-green/90">
                                RSVP
                              </Button>
                              <Button variant="outline">
                                Add to Calendar
                              </Button>
                            </div>
                            <Link to={`/events/${event.id}`} className="text-morocco-green font-medium text-sm flex items-center hover:underline">
                              Details <ChevronRight className="h-3 w-3 ml-1" />
                            </Link>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="past" className="mt-4">
                <div className="space-y-6">
                  {pastEvents.map(event => (
                    <Card key={event.id} className="overflow-hidden border-none opacity-80 hover:opacity-100 transition-opacity">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 h-48 md:h-auto grayscale">
                          <img 
                            src={event.image} 
                            alt={event.title}
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <CardContent className="p-6 md:w-2/3 flex flex-col">
                          <div className="flex justify-between items-start mb-2">
                            <Badge variant="outline">{event.category}</Badge>
                            <div className="flex items-center text-gray-500 text-sm">
                              <Users className="h-3 w-3 mr-1" />
                              {event.attendees} attended
                            </div>
                          </div>
                          <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                          <p className="text-gray-600 mb-4">{event.description}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                            <div className="flex items-center text-gray-600">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Clock className="h-4 w-4 mr-2" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center text-gray-600 md:col-span-2">
                              <MapPin className="h-4 w-4 mr-2" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                          
                          <div className="mt-auto flex items-center justify-between">
                            <Button variant="outline">
                              View Photos
                            </Button>
                            <Link to={`/events/${event.id}`} className="text-gray-600 font-medium text-sm flex items-center hover:underline">
                              Details <ChevronRight className="h-3 w-3 ml-1" />
                            </Link>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
