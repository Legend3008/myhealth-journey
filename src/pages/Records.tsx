
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardList, Download, FileText, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function Records() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <div className="inline-flex text-sm font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary w-fit animate-fade-in">
            Medical Records
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight animate-fade-in">
              Your Health Records
            </h1>
            <Button className="flex items-center gap-2 animate-fade-in">
              <Plus size={16} />
              Upload Records
            </Button>
          </div>
          <p className="text-muted-foreground animate-fade-in">
            Access and manage your complete medical history and documents
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 animate-fade-in">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search"
              placeholder="Search records..." 
              className="pl-8 w-full"
            />
          </div>
          <Button variant="outline">
            <FileText className="mr-2 h-4 w-4" />
            Request Records
          </Button>
        </div>

        <Tabs defaultValue="documents" className="animate-fade-in">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="lab-results">Lab Results</TabsTrigger>
            <TabsTrigger value="imaging">Imaging</TabsTrigger>
            <TabsTrigger value="visit-notes">Visit Notes</TabsTrigger>
          </TabsList>
          
          <TabsContent value="documents" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Medical Documents</CardTitle>
                <CardDescription>Records, reports, and other medical documentation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "Annual Physical Report", date: "Mar 15, 2023", provider: "Dr. Smith", type: "report" },
                  { name: "Cardiology Consultation", date: "Jan 8, 2023", provider: "Dr. Johnson", type: "report" },
                  { name: "Vaccination Record", date: "Nov 5, 2022", provider: "City Medical Center", type: "record" }
                ].map((doc, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg hover-lift">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">{doc.name}</h3>
                        <p className="text-sm text-muted-foreground">{doc.date} • {doc.provider}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{doc.type}</Badge>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                
                <div className="flex justify-center mt-4">
                  <Button variant="outline">Load More Records</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="lab-results" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Lab Results</CardTitle>
                <CardDescription>Blood work, urine tests, and other laboratory results</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center p-12">
                <div className="text-center">
                  <ClipboardList className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No lab results yet</h3>
                  <p className="text-muted-foreground max-w-md mb-4">Lab results will appear here when your healthcare provider shares them with you.</p>
                  <Button>Request Lab Results</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="imaging" className="mt-4">
            <Card>
              <CardContent className="flex items-center justify-center p-12">
                <div className="text-center">
                  <ClipboardList className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No imaging records yet</h3>
                  <p className="text-muted-foreground max-w-md mb-4">X-rays, MRIs, CT scans and other imaging results will appear here.</p>
                  <Button>Request Imaging Records</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="visit-notes" className="mt-4">
            <Card>
              <CardContent className="flex items-center justify-center p-12">
                <div className="text-center">
                  <ClipboardList className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No visit notes yet</h3>
                  <p className="text-muted-foreground max-w-md mb-4">Notes from your doctor visits will appear here when they become available.</p>
                  <Button>Request Visit Notes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
