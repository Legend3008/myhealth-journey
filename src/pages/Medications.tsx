
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Pill, Plus, AlertCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MedicationReminders } from "@/components/dashboard/MedicationReminders";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";

export default function Medications() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <div className="inline-flex text-sm font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary w-fit animate-fade-in">
            Medications
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight animate-fade-in">
              Your Medications
            </h1>
            <Button className="flex items-center gap-2 animate-fade-in">
              <Plus size={16} />
              Add Medication
            </Button>
          </div>
          <p className="text-muted-foreground animate-fade-in">
            Track and manage your prescriptions and medication schedule
          </p>
        </div>

        <Alert variant="default" className="bg-amber-50 text-amber-900 dark:bg-amber-900/20 dark:text-amber-200 animate-fade-in">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Medication Refill Needed</AlertTitle>
          <AlertDescription>
            Your Lisinopril prescription needs to be refilled within 5 days.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="animate-fade-in">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">Today's Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Morning medications</span>
                  <span className="font-medium">2/2 taken</span>
                </div>
                <Progress value={100} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Afternoon medications</span>
                  <span className="font-medium">1/1 taken</span>
                </div>
                <Progress value={100} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Evening medications</span>
                  <span className="font-medium">0/3 taken</span>
                </div>
                <Progress value={0} className="h-2" />
              </div>
              <div className="border rounded-lg p-3 flex items-center space-x-3 mt-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Clock size={18} className="text-primary" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Next dose</p>
                  <p className="text-xs text-muted-foreground">Metformin, 7:00 PM</p>
                </div>
                <Button variant="outline" size="sm">Take Now</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-3 animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle>Your Medication List</CardTitle>
                <CardDescription>Current prescriptions and schedules</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <Pill size={14} />
                View History
              </Button>
            </CardHeader>
            <CardContent>
              <MedicationReminders />
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
