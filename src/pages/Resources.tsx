
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Search, ArrowRight, Heart, Brain, Salad, Dumbbell, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { HealthTips } from "@/components/dashboard/HealthTips";

export default function Resources() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <div className="inline-flex text-sm font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary w-fit animate-fade-in">
            Health Resources
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight animate-fade-in">
              Health Education
            </h1>
          </div>
          <p className="text-muted-foreground animate-fade-in">
            Learn about health conditions, treatments, and wellness topics
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 animate-fade-in">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search"
              placeholder="Search for health topics..." 
              className="pl-8 w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in">
          <ResourceCategory
            icon={Heart}
            title="Heart Health"
            description="Cardiovascular health resources"
            color="bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400"
          />
          <ResourceCategory
            icon={Brain}
            title="Mental Health"
            description="Mental wellness resources"
            color="bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400"
          />
          <ResourceCategory
            icon={Salad}
            title="Nutrition"
            description="Dietary information and advice"
            color="bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400"
          />
          <ResourceCategory
            icon={Dumbbell}
            title="Fitness"
            description="Exercise and activity guides"
            color="bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400"
          />
        </div>

        <Tabs defaultValue="featured" className="animate-fade-in">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="saved">Saved</TabsTrigger>
          </TabsList>
          
          <TabsContent value="featured" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="col-span-full">
                <div className="md:flex">
                  <div className="md:w-1/3 h-48 md:h-auto">
                    <div className="h-full w-full bg-primary/10 flex items-center justify-center">
                      <p className="text-sm text-muted-foreground">Featured Image</p>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Featured</Badge>
                        <Badge variant="secondary">Mental Health</Badge>
                      </div>
                      <CardTitle className="mt-2 text-xl">Understanding Stress and Its Impact on Your Health</CardTitle>
                      <CardDescription>Learn how chronic stress affects your body and mind, and discover effective stress management techniques.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Chronic stress can have serious effects on your physical and mental health, including increased risk of heart disease, depression, and other conditions. This comprehensive guide provides science-backed strategies to identify and manage stress in your daily life.</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="gap-2">
                        Read Full Article <ArrowRight size={16} />
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
              
              <HealthTips />
              
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Health Videos</CardTitle>
                  <CardDescription>Visual guides and educational content</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 gap-4">
                  {[
                    { title: "Heart-Healthy Exercise Routines", duration: "15:30", views: "12K" },
                    { title: "Understanding Blood Pressure Readings", duration: "8:45", views: "23K" },
                    { title: "Meal Prep for Diabetes Management", duration: "20:10", views: "9K" }
                  ].map((video, i) => (
                    <div key={i} className="border rounded-lg p-3 hover-lift flex items-center gap-4">
                      <div className="w-32 h-20 bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <p className="text-xs text-muted-foreground">Video Thumbnail</p>
                      </div>
                      <div>
                        <h3 className="font-medium">{video.title}</h3>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                          <span>{video.duration}</span>
                          <span>•</span>
                          <span>{video.views} views</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View All Videos</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>External Resources</CardTitle>
                  <CardDescription>Trusted health information sources</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: "Centers for Disease Control", url: "#" },
                    { name: "National Institutes of Health", url: "#" },
                    { name: "American Heart Association", url: "#" },
                    { name: "Mayo Clinic", url: "#" }
                  ].map((resource, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm">{resource.name}</span>
                      <Button variant="ghost" size="sm" className="h-8 gap-1">
                        Visit <ExternalLink size={14} />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="articles" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Health Articles</CardTitle>
                <CardDescription>Informative articles on various health topics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { title: "10 Ways to Improve Your Heart Health", category: "Heart Health", date: "Apr 15, 2023", read: "8 min read", rating: 4.7 },
                  { title: "Understanding Diabetes: Symptoms, Causes, and Management", category: "Chronic Conditions", date: "Apr 12, 2023", read: "12 min read", rating: 4.9 },
                  { title: "The Science of Sleep: Why It Matters and How to Get More", category: "Wellness", date: "Apr 8, 2023", read: "10 min read", rating: 4.8 },
                  { title: "Nutrition Basics: Building a Balanced Diet", category: "Nutrition", date: "Apr 5, 2023", read: "9 min read", rating: 4.6 }
                ].map((article, i) => (
                  <div key={i} className="border rounded-lg p-4 hover-lift">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="text-xs">{article.category}</Badge>
                          <span className="text-xs text-muted-foreground">{article.date}</span>
                        </div>
                        <h3 className="font-medium story-link">{article.title}</h3>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs text-muted-foreground">{article.read}</span>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                            <span className="text-xs ml-1">{article.rating}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="gap-1">
                        Read <ArrowRight size={14} />
                      </Button>
                    </div>
                  </div>
                ))}
                
                <div className="flex justify-center">
                  <Button variant="outline">Load More Articles</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="videos" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Educational Videos</CardTitle>
                <CardDescription>Visual health and wellness content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "How to Take Your Blood Pressure at Home", duration: "5:23", category: "Self-Care" },
                    { title: "Beginner-Friendly Exercises for Heart Health", duration: "18:45", category: "Fitness" },
                    { title: "Understanding Your Lab Test Results", duration: "12:10", category: "Medical" },
                    { title: "Mindfulness Meditation for Stress Relief", duration: "15:30", category: "Mental Health" }
                  ].map((video, i) => (
                    <div key={i} className="border rounded-lg hover-lift">
                      <div className="h-40 bg-primary/10 flex items-center justify-center">
                        <p className="text-sm text-muted-foreground">Video Placeholder</p>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="text-xs">{video.category}</Badge>
                          <span className="text-xs text-muted-foreground">{video.duration}</span>
                        </div>
                        <h3 className="font-medium">{video.title}</h3>
                        <Button variant="ghost" size="sm" className="mt-2 w-full justify-center gap-1">
                          Watch Now <ArrowRight size={14} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center mt-6">
                  <Button variant="outline">View All Videos</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="saved" className="mt-4">
            <Card>
              <CardContent className="flex items-center justify-center p-12">
                <div className="text-center">
                  <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No saved resources yet</h3>
                  <p className="text-muted-foreground max-w-md mb-4">Save articles, videos, and resources to access them quickly later.</p>
                  <Button>Browse Resources</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}

interface ResourceCategoryProps {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  color: string;
}

function ResourceCategory({ icon: Icon, title, description, color }: ResourceCategoryProps) {
  return (
    <Card className="hover-lift overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className={cn("mb-4 p-3 rounded-full", color)}>
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="font-medium mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          <Button variant="outline" size="sm" className="w-full gap-1">
            Explore <ArrowRight size={14} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
