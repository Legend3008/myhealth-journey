
import { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera, Edit, Mail, Phone, User, MapPin, Calendar, Save, Plus, LucideProps } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';

export default function Profile() {
  const [editing, setEditing] = useState(false);
  
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <div className="inline-flex text-sm font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary w-fit animate-fade-in">
            User Profile
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight animate-fade-in">
            Your Profile
          </h1>
          <p className="text-muted-foreground animate-fade-in">
            Manage your personal information and preferences
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="animate-fade-in">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative inline-block">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg" alt="Profile" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Button 
                    variant="secondary" 
                    size="icon" 
                    className="absolute bottom-0 right-0 h-8 w-8 rounded-full"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                
                <h2 className="mt-4 text-xl font-semibold">John Doe</h2>
                <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                
                <div className="mt-6 flex items-center justify-center space-x-2">
                  <Button 
                    variant={editing ? "secondary" : "default"} 
                    onClick={() => setEditing(!editing)}
                  >
                    {editing ? (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </>
                    ) : (
                      <>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Profile
                      </>
                    )}
                  </Button>
                </div>
                
                <div className="mt-6 w-full space-y-2">
                  <ContactInfo icon={Mail} label="Email" value="john.doe@example.com" />
                  <ContactInfo icon={Phone} label="Phone" value="(555) 123-4567" />
                  <ContactInfo icon={MapPin} label="Location" value="New York, NY" />
                  <ContactInfo icon={Calendar} label="Date of Birth" value="Jan 15, 1985" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="lg:col-span-2 space-y-6">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="w-full grid grid-cols-3">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="medical">Medical History</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
              </TabsList>
              
              <TabsContent value="personal">
                <Card className="hover-lift animate-fade-in">
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details and contact information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input 
                          id="first-name" 
                          defaultValue="John" 
                          readOnly={!editing}
                          className={cn(!editing && "opacity-70")}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input 
                          id="last-name" 
                          defaultValue="Doe" 
                          readOnly={!editing}
                          className={cn(!editing && "opacity-70")}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        defaultValue="john.doe@example.com" 
                        readOnly={!editing}
                        className={cn(!editing && "opacity-70")}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        defaultValue="(555) 123-4567" 
                        readOnly={!editing}
                        className={cn(!editing && "opacity-70")}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="dob">Date of Birth</Label>
                        <Input 
                          id="dob" 
                          type="date" 
                          defaultValue="1985-01-15" 
                          readOnly={!editing}
                          className={cn(!editing && "opacity-70")}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender</Label>
                        <select 
                          id="gender" 
                          className={cn(
                            "w-full rounded-md border border-input bg-background px-3 py-2",
                            !editing && "opacity-70"
                          )}
                          disabled={!editing}
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                          <option value="prefer-not-to-say">Prefer not to say</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input 
                        id="address" 
                        defaultValue="123 Health Street" 
                        readOnly={!editing}
                        className={cn(!editing && "opacity-70")}
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input 
                          id="city" 
                          defaultValue="New York" 
                          readOnly={!editing}
                          className={cn(!editing && "opacity-70")}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input 
                          id="state" 
                          defaultValue="NY" 
                          readOnly={!editing}
                          className={cn(!editing && "opacity-70")}
                        />
                      </div>
                      <div className="space-y-2 col-span-2 sm:col-span-1">
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input 
                          id="zip" 
                          defaultValue="10001" 
                          readOnly={!editing}
                          className={cn(!editing && "opacity-70")}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="emergency-contact">Emergency Contact</Label>
                      <Input 
                        id="emergency-contact" 
                        defaultValue="Jane Doe (555) 987-6543" 
                        readOnly={!editing}
                        className={cn(!editing && "opacity-70")}
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="justify-end">
                    {editing && (
                      <Button 
                        variant="default" 
                        onClick={() => setEditing(false)}
                      >
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="medical">
                <Card className="hover-lift animate-fade-in">
                  <CardHeader>
                    <CardTitle>Medical History</CardTitle>
                    <CardDescription>Your health information and medical history</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Conditions</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 rounded-lg border">
                          <div>
                            <p className="font-medium">Hypertension</p>
                            <p className="text-sm text-muted-foreground">Diagnosed: Jan 2018</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg border">
                          <div>
                            <p className="font-medium">Type 2 Diabetes</p>
                            <p className="text-sm text-muted-foreground">Diagnosed: Mar 2020</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                          <Plus className="h-4 w-4" />
                          Add Condition
                        </Button>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Allergies</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 rounded-lg border">
                          <div>
                            <p className="font-medium">Penicillin</p>
                            <p className="text-sm text-muted-foreground">Severity: Moderate</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg border">
                          <div>
                            <p className="font-medium">Peanuts</p>
                            <p className="text-sm text-muted-foreground">Severity: Severe</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                          <Plus className="h-4 w-4" />
                          Add Allergy
                        </Button>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Procedures</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 rounded-lg border">
                          <div>
                            <p className="font-medium">Appendectomy</p>
                            <p className="text-sm text-muted-foreground">Date: Sep 2015</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                          <Plus className="h-4 w-4" />
                          Add Procedure
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="preferences">
                <Card className="hover-lift animate-fade-in">
                  <CardHeader>
                    <CardTitle>Account Preferences</CardTitle>
                    <CardDescription>Manage your account settings and notifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Notifications</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="appointment-notifications">Appointment Reminders</Label>
                            <p className="text-sm text-muted-foreground">
                              Receive notifications about upcoming appointments
                            </p>
                          </div>
                          <Switch id="appointment-notifications" defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="medication-notifications">Medication Reminders</Label>
                            <p className="text-sm text-muted-foreground">
                              Get alerts when it's time to take your medications
                            </p>
                          </div>
                          <Switch id="medication-notifications" defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="lab-notifications">Lab Results</Label>
                            <p className="text-sm text-muted-foreground">
                              Be notified when new lab results are available
                            </p>
                          </div>
                          <Switch id="lab-notifications" defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="newsletter">Health Tips & Newsletter</Label>
                            <p className="text-sm text-muted-foreground">
                              Receive periodic health information and tips
                            </p>
                          </div>
                          <Switch id="newsletter" />
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4">Privacy Settings</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="data-sharing">Data Sharing with Providers</Label>
                            <p className="text-sm text-muted-foreground">
                              Allow your healthcare providers to access your health data
                            </p>
                          </div>
                          <Switch id="data-sharing" defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="anonymous-research">Anonymous Research Contribution</Label>
                            <p className="text-sm text-muted-foreground">
                              Allow anonymized data to be used for medical research
                            </p>
                          </div>
                          <Switch id="anonymous-research" />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="activity-tracking">Activity Tracking</Label>
                            <p className="text-sm text-muted-foreground">
                              Allow the app to track your physical activity data
                            </p>
                          </div>
                          <Switch id="activity-tracking" defaultChecked />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Save Preferences</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
            
            <Card className="hover-lift animate-fade-in">
              <CardHeader>
                <CardTitle>Family Members</CardTitle>
                <CardDescription>Manage family members connected to your account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Jane Doe</p>
                      <p className="text-sm text-muted-foreground">Spouse • 38 years old</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Manage</Button>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarFallback>SD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Sarah Doe</p>
                      <p className="text-sm text-muted-foreground">Daughter • 12 years old</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Manage</Button>
                </div>
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Family Member
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

interface ContactInfoProps {
  icon: React.ComponentType<LucideProps>;
  label: string;
  value: string;
}

function ContactInfo({ icon: Icon, label, value }: ContactInfoProps) {
  return (
    <div className="flex items-center space-x-2">
      <Icon className="h-4 w-4 text-muted-foreground" />
      <div className="text-sm">
        <span className="text-muted-foreground">{label}:</span>{" "}
        <span>{value}</span>
      </div>
    </div>
  );
}
