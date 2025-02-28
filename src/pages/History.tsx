
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Filter, Calendar, Search, CalendarDays, Pill, ClipboardList, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function History() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <div className="inline-flex text-sm font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary w-fit animate-fade-in">
            Health History
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight animate-fade-in">
              Medical History
            </h1>
            <Button variant="outline" className="flex items-center gap-2 animate-fade-in">
              <Filter size={16} />
              Filter
            </Button>
          </div>
          <p className="text-muted-foreground animate-fade-in">
            View your complete medical timeline and health events
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 animate-fade-in">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search"
              placeholder="Search medical history..." 
              className="pl-8 w-full"
            />
          </div>
          <div className="flex gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Events</SelectItem>
                <SelectItem value="appointments">Appointments</SelectItem>
                <SelectItem value="medications">Medications</SelectItem>
                <SelectItem value="procedures">Procedures</SelectItem>
                <SelectItem value="tests">Lab Tests</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2">
              <Calendar className="h-4 w-4" />
              Date Range
            </Button>
          </div>
        </div>

        <Tabs defaultValue="timeline" className="animate-fade-in">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="visits">Visits</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="timeline" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Health Timeline</CardTitle>
                <CardDescription>All your medical events in chronological order</CardDescription>
              </CardHeader>
              <CardContent className="relative pl-8 border-l-2 border-dashed border-muted">
                <div className="space-y-8">
                  <TimelineHeader date="April 2023" />
                  
                  <TimelineEvent
                    date="April 20, 2023"
                    title="Primary Care Visit" 
                    provider="Dr. Michael Johnson"
                    type="appointment"
                    details="Annual physical examination, reviewed current medications and ordered routine blood work."
                  />

                  <TimelineEvent
                    date="April 15, 2023"
                    title="Prescription Refill" 
                    provider="PharmacyDirect"
                    type="medication"
                    details="Refilled Lisinopril (10mg, 30-day supply)"
                  />
                  
                  <TimelineHeader date="March 2023" />
                  
                  <TimelineEvent
                    date="March 28, 2023"
                    title="Blood Test Results" 
                    provider="City Medical Laboratory"
                    type="lab"
                    details="Comprehensive metabolic panel and lipid profile. All results within normal range."
                  />
                  
                  <TimelineEvent
                    date="March 15, 2023"
                    title="Cardiology Consultation" 
                    provider="Dr. Sarah Smith"
                    type="appointment"
                    details="Follow-up visit to review heart function and medication efficacy. Cardiac function improved."
                  />
                  
                  <TimelineHeader date="February 2023" />
                  
                  <TimelineEvent
                    date="February 10, 2023"
                    title="Flu Vaccination" 
                    provider="Urgent Care Clinic"
                    type="immunization"
                    details="Seasonal influenza vaccine administered"
                  />
                  
                  <div className="absolute h-full w-[1px] bg-border left-8 top-0 z-[-1]"></div>
                </div>
                
                <div className="flex justify-center mt-8">
                  <Button variant="outline">Load More History</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="visits" className="mt-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle>Healthcare Visits</CardTitle>
                  <CardDescription>Your appointments and consultations history</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { date: "Apr 20, 2023", doctor: "Dr. Michael Johnson", type: "Primary Care", reason: "Annual physical examination", notes: true },
                    { date: "Mar 15, 2023", doctor: "Dr. Sarah Smith", type: "Cardiology", reason: "Follow-up consultation", notes: true },
                    { date: "Jan 8, 2023", doctor: "Dr. Emily Davis", type: "Dermatology", reason: "Skin rash evaluation", notes: true },
                    { date: "Dec 5, 2022", doctor: "Dr. Robert Williams", type: "Orthopedics", reason: "Knee pain assessment", notes: false }
                  ].map((visit, i) => (
                    <div key={i} className="border rounded-lg p-4 hover-lift">
                      <div className="flex justify-between items-start">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-2 rounded-full mt-1">
                            <CalendarDays className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium">{visit.doctor}</h3>
                            <p className="text-sm text-muted-foreground">{visit.date} • {visit.type}</p>
                            <p className="text-sm mt-1">Reason: {visit.reason}</p>
                          </div>
                        </div>
                        <div>
                          <Button variant="outline" size="sm" className="flex items-center gap-1">
                            <ClipboardList className="h-3.5 w-3.5" />
                            {visit.notes ? "View Notes" : "No Notes"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-4">
                  <Button variant="outline">View All Visits</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Health Analytics</CardTitle>
                <CardDescription>Insights based on your medical history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Appointment Frequency</h3>
                    <div className="flex items-end gap-2">
                      <div className="bg-primary/10 h-28 w-full rounded-md flex items-center justify-center">
                        <p className="text-sm text-muted-foreground">Chart Placeholder</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">You had 12 medical appointments in the past year.</p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Medication History</h3>
                    <div className="flex items-end gap-2">
                      <div className="bg-primary/10 h-28 w-full rounded-md flex items-center justify-center">
                        <p className="text-sm text-muted-foreground">Chart Placeholder</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">You've been consistently taking 2 medications in the past 6 months.</p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Preventive Care</h3>
                    <div className="flex items-end gap-2">
                      <div className="bg-primary/10 h-28 w-full rounded-md flex items-center justify-center">
                        <p className="text-sm text-muted-foreground">Chart Placeholder</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">You've completed 80% of recommended preventive care services.</p>
                  </div>
                </div>
                
                <div className="mt-6 border rounded-lg p-4">
                  <h3 className="font-medium mb-3">Health Recommendations</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Schedule Annual Eye Exam</p>
                        <p className="text-xs text-muted-foreground">Your last eye examination was over 14 months ago</p>
                      </div>
                      <div className="ml-auto">
                        <Button variant="outline" size="sm">Schedule</Button>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Pill className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Medication Review Due</p>
                        <p className="text-xs text-muted-foreground">It's been 6 months since your last medication review</p>
                      </div>
                      <div className="ml-auto">
                        <Button variant="outline" size="sm">Request</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}

function TimelineHeader({ date }: { date: string }) {
  return (
    <div className="flex items-center mb-6">
      <div className="absolute -left-[18px] w-9 h-9 rounded-full bg-primary flex items-center justify-center">
        <Clock className="h-5 w-5 text-primary-foreground" />
      </div>
      <h3 className="font-medium text-lg">{date}</h3>
    </div>
  );
}

interface TimelineEventProps {
  date: string;
  title: string;
  provider: string;
  type: 'appointment' | 'medication' | 'lab' | 'procedure' | 'immunization';
  details: string;
}

function TimelineEvent({ date, title, provider, type, details }: TimelineEventProps) {
  const getIcon = () => {
    switch (type) {
      case 'appointment':
        return CalendarDays;
      case 'medication':
        return Pill;
      case 'lab':
        return ClipboardList;
      default:
        return Clock;
    }
  };
  
  const Icon = getIcon();
  
  return (
    <div className="relative mb-8">
      <div className="absolute -left-[13px] w-6 h-6 rounded-full bg-background border-2 border-muted flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-primary"></div>
      </div>
      <div className="pt-1">
        <div className="text-sm text-muted-foreground mb-1">{date}</div>
        <div className="border rounded-lg p-4 hover-lift">
          <div className="flex justify-between items-start">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">{title}</h3>
                <p className="text-sm text-muted-foreground">{provider}</p>
                <p className="text-sm mt-2">{details}</p>
              </div>
            </div>
            <Badge variant="outline" className="capitalize">{type}</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
