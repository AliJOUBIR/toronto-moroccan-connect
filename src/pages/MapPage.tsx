
import React, { useState } from 'react';
import { Search, Map as MapIcon, Star, MapPin, Phone, ExternalLink, ThumbsUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const MapPage = () => {
  const [selectedPlace, setSelectedPlace] = useState<any>(null);

  // Sample places data
  const places = [
    {
      id: 1,
      name: "Marrakesh Restaurant",
      type: "Restaurant",
      address: "123 Yonge Street, Toronto, ON",
      phone: "(416) 555-1234",
      website: "https://marrakesh-restaurant.com",
      rating: 4.8,
      reviews: 156,
      likes: 89,
      description: "Authentic Moroccan cuisine in the heart of downtown Toronto.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=500&auto=format&fit=crop",
      tags: ["food", "tagine", "couscous"]
    },
    {
      id: 2,
      name: "Casablanca Market",
      type: "Grocery",
      address: "456 Bloor Street, Toronto, ON",
      phone: "(416) 555-5678",
      website: "https://casablanca-market.ca",
      rating: 4.5,
      reviews: 78,
      likes: 42,
      description: "Imported Moroccan ingredients, spices, and specialty foods.",
      image: "https://images.unsplash.com/photo-1519740283027-af9626ad8fe6?q=80&w=500&auto=format&fit=crop",
      tags: ["grocery", "spices", "imports"]
    },
    {
      id: 3,
      name: "Masjid Toronto",
      type: "Mosque",
      address: "789 Dundas Street West, Toronto, ON",
      phone: "(416) 555-9012",
      website: "https://masjidtoronto.com",
      rating: 4.9,
      reviews: 210,
      likes: 120,
      description: "Main mosque serving the downtown Muslim community.",
      image: "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=80&w=500&auto=format&fit=crop",
      tags: ["worship", "community", "prayer"]
    },
    {
      id: 4,
      name: "Fez Café",
      type: "Cafe",
      address: "321 College Street, Toronto, ON",
      phone: "(416) 555-3456",
      website: "https://fez-cafe.ca",
      rating: 4.7,
      reviews: 92,
      likes: 63,
      description: "Moroccan coffee, mint tea, and pastries in a cozy atmosphere.",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=500&auto=format&fit=crop",
      tags: ["cafe", "tea", "pastries"]
    },
    {
      id: 5,
      name: "Atlas Cultural Center",
      type: "Cultural",
      address: "654 Bathurst Street, Toronto, ON",
      phone: "(416) 555-7890",
      website: "https://atlas-center.org",
      rating: 4.6,
      reviews: 45,
      likes: 37,
      description: "Promoting Moroccan culture through events, classes, and exhibitions.",
      image: "https://images.unsplash.com/photo-1551634979-2b11f8c218c7?q=80&w=500&auto=format&fit=crop",
      tags: ["culture", "events", "education"]
    },
    {
      id: 6,
      name: "Moroccan Carpet Gallery",
      type: "Shop",
      address: "987 Queen Street West, Toronto, ON",
      phone: "(416) 555-0123",
      website: "https://moroccan-carpets.ca",
      rating: 4.4,
      reviews: 36,
      likes: 28,
      description: "Authentic Moroccan rugs, carpets, and home decor.",
      image: "https://images.unsplash.com/photo-1576188973526-0e5d7047b0cf?q=80&w=500&auto=format&fit=crop",
      tags: ["shopping", "decor", "artisan"]
    }
  ];

  // Categories
  const categories = [
    { name: "All", count: places.length },
    { name: "Restaurant", count: places.filter(p => p.type === "Restaurant").length },
    { name: "Grocery", count: places.filter(p => p.type === "Grocery").length },
    { name: "Mosque", count: places.filter(p => p.type === "Mosque").length },
    { name: "Cafe", count: places.filter(p => p.type === "Cafe").length },
    { name: "Cultural", count: places.filter(p => p.type === "Cultural").length },
    { name: "Shop", count: places.filter(p => p.type === "Shop").length }
  ];

  const handlePlaceSelect = (place: any) => {
    setSelectedPlace(place);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-toronto-blue to-toronto-blue/90 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Community Map</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Discover Moroccan restaurants, grocery stores, mosques, and community spaces across Toronto.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Find Places</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input 
                    placeholder="Search places..." 
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
                <h3 className="font-bold text-lg mb-3">Add a Place</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Know a great Moroccan spot that's not on our map? Help the community by adding it.
                </p>
                <Button className="w-full bg-toronto-blue hover:bg-toronto-blue/90">
                  Suggest a Place
                </Button>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            <div className="mb-8">
              <div className="bg-white rounded-lg shadow-md p-6 relative h-[500px] overflow-hidden">
                {/* This would be replaced by an actual map component */}
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapIcon className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-500 text-lg font-medium">Interactive Map</p>
                    <p className="text-gray-400 text-sm max-w-md mx-auto mt-2">
                      In a real implementation, this would be an interactive map showing all the locations. 
                      For now, please use the list view below.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              {/* Places List */}
              <div className={`w-full ${selectedPlace ? 'md:w-1/2' : 'md:w-full'}`}>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold">Places</h2>
                </div>
                
                <Tabs defaultValue="all">
                  <TabsList>
                    <TabsTrigger value="all">All Places</TabsTrigger>
                    <TabsTrigger value="trending">Trending</TabsTrigger>
                    <TabsTrigger value="new">New Additions</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="all" className="mt-4">
                    <div className="space-y-4">
                      {places.map(place => (
                        <Card 
                          key={place.id} 
                          className={`overflow-hidden card-hover border-none cursor-pointer ${
                            selectedPlace?.id === place.id ? 'ring-2 ring-toronto-blue' : ''
                          }`}
                          onClick={() => handlePlaceSelect(place)}
                        >
                          <div className="flex flex-row h-32">
                            <div className="w-1/3 h-full">
                              <img 
                                src={place.image} 
                                alt={place.name}
                                className="w-full h-full object-cover" 
                              />
                            </div>
                            <CardContent className="p-4 w-2/3 flex flex-col">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-bold mb-1 line-clamp-1">{place.name}</h3>
                                  <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300">{place.type}</Badge>
                                </div>
                                <div className="flex items-center">
                                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                                  <span className="text-sm font-medium">{place.rating}</span>
                                </div>
                              </div>
                              <p className="text-gray-600 text-sm line-clamp-2 mt-2">{place.description}</p>
                              <div className="flex items-center mt-auto">
                                <ThumbsUp className="h-3 w-3 mr-1 text-toronto-blue" />
                                <span className="text-xs text-gray-500">{place.likes} community recommendations</span>
                              </div>
                            </CardContent>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="trending" className="mt-4">
                    <div className="p-8 text-center">
                      <p className="text-gray-500">Trending places will appear here.</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="new" className="mt-4">
                    <div className="p-8 text-center">
                      <p className="text-gray-500">New additions will appear here.</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              {/* Place Details */}
              {selectedPlace && (
                <div className="w-full md:w-1/2">
                  <div className="sticky top-24">
                    <Card className="overflow-hidden border-none">
                      <div className="h-48 relative">
                        <img 
                          src={selectedPlace.image} 
                          alt={selectedPlace.name}
                          className="w-full h-full object-cover" 
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-white text-gray-800">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                            {selectedPlace.rating} ({selectedPlace.reviews} reviews)
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h2 className="text-2xl font-bold">{selectedPlace.name}</h2>
                            <Badge className="mt-1 bg-gray-200 text-gray-700">{selectedPlace.type}</Badge>
                          </div>
                          <Button variant="outline" size="sm" className="gap-1">
                            <ThumbsUp className="h-3 w-3" /> Like
                          </Button>
                        </div>
                        
                        <p className="text-gray-600 mb-4">{selectedPlace.description}</p>
                        
                        <div className="space-y-3 mb-6">
                          <div className="flex items-start">
                            <MapPin className="h-4 w-4 mr-2 text-toronto-blue shrink-0 mt-0.5" />
                            <span>{selectedPlace.address}</span>
                          </div>
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-2 text-toronto-blue" />
                            <span>{selectedPlace.phone}</span>
                          </div>
                          <div className="flex items-center">
                            <ExternalLink className="h-4 w-4 mr-2 text-toronto-blue" />
                            <a 
                              href={selectedPlace.website} 
                              className="text-toronto-blue hover:underline"
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              Visit Website
                            </a>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h3 className="font-medium mb-2">Tags</h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedPlace.tags.map((tag: string) => (
                              <Badge key={tag} variant="outline">{tag}</Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button className="flex-1 bg-toronto-blue hover:bg-toronto-blue/90">
                            Get Directions
                          </Button>
                          <Button variant="outline" size="icon">
                            <Star className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
