
import React from 'react';
import { Search, Filter, Briefcase, Building, MapPin, Clock, DollarSign, ExternalLink } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';

const JobsPage = () => {
  // Sample job listings
  const jobs = [
    {
      id: 1,
      title: "Bilingual Customer Service Representative",
      company: "TD Bank",
      location: "Downtown Toronto",
      type: "Full-time",
      salary: "$45,000 - $55,000",
      postedDate: "3 days ago",
      description: "Looking for a bilingual (English/French/Arabic) customer service representative to join our diverse team.",
      requirements: [
        "Fluent in English and French or Arabic",
        "1+ years of customer service experience",
        "Strong communication skills",
        "Banking experience preferred but not required"
      ],
      logo: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Arabic Interpreter (Part-time)",
      company: "Toronto Public Health",
      location: "North York",
      type: "Part-time",
      salary: "$30-35/hour",
      postedDate: "1 week ago",
      description: "We're seeking Arabic interpreters to assist with healthcare communications in various community settings.",
      requirements: [
        "Fluent in English and Arabic (Moroccan dialect a plus)",
        "Healthcare terminology knowledge preferred",
        "Excellent interpersonal skills",
        "Available weekends"
      ],
      logo: "https://images.unsplash.com/photo-1635016288720-c52507b9a717?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Restaurant Manager - Moroccan Cuisine",
      company: "Casablanca Dining",
      location: "Scarborough",
      type: "Full-time",
      salary: "$60,000 - $70,000",
      postedDate: "2 weeks ago",
      description: "Authentic Moroccan restaurant seeking an experienced manager to oversee daily operations.",
      requirements: [
        "3+ years restaurant management experience",
        "Knowledge of Moroccan cuisine and culture",
        "Staff management and scheduling expertise",
        "Food safety certification"
      ],
      logo: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "International Student Advisor",
      company: "University of Toronto",
      location: "St. George Campus",
      type: "Full-time",
      salary: "$55,000 - $65,000",
      postedDate: "5 days ago",
      description: "Provide academic and cultural support to international students, with focus on North African students.",
      requirements: [
        "Master's degree in education or related field",
        "Experience working with international students",
        "Knowledge of immigration processes",
        "Cultural sensitivity and awareness"
      ],
      logo: "https://images.unsplash.com/photo-1584697964358-3e14ca23fec4?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Administrative Assistant (Student Position)",
      company: "Morocco-Canada Chamber of Commerce",
      location: "Remote",
      type: "Part-time",
      salary: "$20-25/hour",
      postedDate: "2 days ago",
      description: "Student position supporting administrative functions for a business networking organization.",
      requirements: [
        "Currently enrolled in post-secondary education",
        "Strong organizational skills",
        "Proficient in Microsoft Office",
        "Available 15-20 hours per week"
      ],
      logo: "https://images.unsplash.com/photo-1601581975053-7c899da7347e?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Tour Guide - Moroccan Cultural Specialist",
      company: "Toronto Cultural Tours",
      location: "Flexible",
      type: "Seasonal",
      salary: "Contract based",
      postedDate: "3 weeks ago",
      description: "Lead specialized tours highlighting Moroccan cultural sites and businesses across Toronto.",
      requirements: [
        "Deep knowledge of Moroccan culture and history",
        "Excellent presentation and people skills",
        "Availability on weekends during summer months",
        "Driver's license preferred"
      ],
      logo: "https://images.unsplash.com/photo-1612387605325-583d8a7cb1b1?q=80&w=500&auto=format&fit=crop"
    }
  ];

  // Job types and locations for filtering
  const jobTypes = [
    { name: "All Types", count: jobs.length },
    { name: "Full-time", count: jobs.filter(j => j.type === "Full-time").length },
    { name: "Part-time", count: jobs.filter(j => j.type === "Part-time").length },
    { name: "Contract", count: jobs.filter(j => j.type === "Contract").length },
    { name: "Seasonal", count: jobs.filter(j => j.type === "Seasonal").length }
  ];

  const locations = [
    { name: "All Locations", count: jobs.length },
    { name: "Downtown Toronto", count: jobs.filter(j => j.location.includes("Downtown")).length },
    { name: "North York", count: jobs.filter(j => j.location.includes("North York")).length },
    { name: "Scarborough", count: jobs.filter(j => j.location.includes("Scarborough")).length },
    { name: "Remote", count: jobs.filter(j => j.location.includes("Remote")).length }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-morocco-orange to-morocco-orange/90 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Community Job Board</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Find employment opportunities shared by community members and businesses supporting the Moroccan community.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Search Jobs</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input 
                    placeholder="Job title, skills, etc." 
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Job Type</h3>
                <ul className="space-y-2">
                  {jobTypes.map(type => (
                    <li key={type.name}>
                      <button className="flex justify-between w-full px-2 py-1.5 rounded hover:bg-gray-100 transition-colors text-left">
                        <span className={type.name === "All Types" ? "font-medium" : ""}>{type.name}</span>
                        <span className="text-gray-500 text-sm">{type.count}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Location</h3>
                <ul className="space-y-2">
                  {locations.map(location => (
                    <li key={location.name}>
                      <button className="flex justify-between w-full px-2 py-1.5 rounded hover:bg-gray-100 transition-colors text-left">
                        <span className={location.name === "All Locations" ? "font-medium" : ""}>{location.name}</span>
                        <span className="text-gray-500 text-sm">{location.count}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-3">Post a Job</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Are you hiring? Share job opportunities with our community.
                </p>
                <Button className="w-full bg-morocco-orange hover:bg-morocco-orange/90">
                  Post a Job
                </Button>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Available Jobs</h2>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="h-4 w-4" /> Filter
                </Button>
              </div>
            </div>

            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All Jobs</TabsTrigger>
                <TabsTrigger value="newcomer">Newcomer Friendly</TabsTrigger>
                <TabsTrigger value="student">Student Jobs</TabsTrigger>
                <TabsTrigger value="recent">Recently Posted</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-4">
                <div className="space-y-6">
                  {jobs.map(job => (
                    <Card key={job.id} className="overflow-hidden card-hover border-none">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-white rounded-md overflow-hidden w-16 h-16 flex items-center justify-center border">
                            <img 
                              src={job.logo} 
                              alt={job.company}
                              className="w-full h-full object-cover" 
                            />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                                <div className="flex items-center text-gray-600 mb-2">
                                  <Building className="h-4 w-4 mr-2 text-gray-400" />
                                  <span>{job.company}</span>
                                </div>
                              </div>
                              <Badge className="bg-morocco-orange hover:bg-morocco-orange/90">{job.type}</Badge>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-600 mb-4">
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                                <span>{job.location}</span>
                              </div>
                              <div className="flex items-center">
                                <DollarSign className="h-4 w-4 mr-2 text-gray-400" />
                                <span>{job.salary}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2 text-gray-400" />
                                <span>Posted {job.postedDate}</span>
                              </div>
                            </div>
                            
                            <p className="text-gray-600 mb-4">{job.description}</p>
                            
                            <Separator className="my-4" />
                            
                            <div className="flex justify-between items-center">
                              <div className="flex space-x-2">
                                <Button className="bg-morocco-orange hover:bg-morocco-orange/90">
                                  Apply Now
                                </Button>
                                <Button variant="outline">
                                  Save Job
                                </Button>
                              </div>
                              <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-500">
                                <ExternalLink className="h-3 w-3" /> Share
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="newcomer" className="mt-4">
                <div className="p-8 text-center">
                  <p className="text-gray-500">Newcomer-friendly jobs will appear here.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="student" className="mt-4">
                <div className="p-8 text-center">
                  <p className="text-gray-500">Student jobs will appear here.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="recent" className="mt-4">
                <div className="p-8 text-center">
                  <p className="text-gray-500">Recently posted jobs will appear here.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
