
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Plus, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UpcomingAppointments } from "@/components/dashboard/UpcomingAppointments";

export default function Appointments() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <div className="inline-flex text-sm font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary w-fit animate-fade-in">
            Appointments
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight animate-fade-in">
              Your Appointments
            </h1>
            <Button className="flex items-center gap-2 animate-fade-in">
              <Plus size={16} />
              New Appointment
            </Button>
          </div>
          <p className="text-muted-foreground animate-fade-in">
            View and manage your upcoming and past medical appointments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="animate-fade-in">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center justify-center p-4 bg-primary/5 rounded-lg">
                <CalendarDays className="h-8 w-8 text-primary mb-2" />
                <span className="text-2xl font-bold">3</span>
                <span className="text-sm text-muted-foreground">Upcoming</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                <CalendarDays className="h-8 w-8 text-muted-foreground mb-2" />
                <span className="text-2xl font-bold">12</span>
                <span className="text-sm text-muted-foreground">Past</span>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-3 animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>Your scheduled healthcare visits</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <Filter size={14} />
                Filter
              </Button>
            </CardHeader>
            <CardContent>
              <UpcomingAppointments />
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
