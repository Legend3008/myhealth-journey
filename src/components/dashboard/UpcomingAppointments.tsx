
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Phone, Video } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample data
const appointments = [
  {
    id: 1,
    doctorName: 'Dr. Smith',
    specialty: 'Cardiologist',
    date: 'April 25, 2023',
    time: '10:30 AM',
    location: 'Medical Center',
    type: 'in-person',
    image: '/placeholder.svg',
  },
  {
    id: 2,
    doctorName: 'Dr. Johnson',
    specialty: 'Dermatologist',
    date: 'April 27, 2023',
    time: '2:00 PM',
    location: 'Virtual',
    type: 'video',
    image: '/placeholder.svg',
  },
  {
    id: 3,
    doctorName: 'Dr. Williams',
    specialty: 'Psychiatrist',
    date: 'May 3, 2023',
    time: '11:15 AM',
    location: 'Phone Call',
    type: 'phone',
    image: '/placeholder.svg',
  },
];

export function UpcomingAppointments() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Appointments</CardTitle>
        <CardDescription>Your scheduled appointments with healthcare providers</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <AppointmentCard key={appointment.id} appointment={appointment} />
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 sm:flex-row">
        <Button className="w-full">Schedule New Appointment</Button>
        <Button variant="outline" className="w-full">View All Appointments</Button>
      </CardFooter>
    </Card>
  );
}

function AppointmentCard({ appointment }: { appointment: typeof appointments[0] }) {
  return (
    <div className="border rounded-lg p-4 hover-lift">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <img 
            src={appointment.image} 
            alt={appointment.doctorName} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 space-y-2">
          <div>
            <h3 className="font-medium leading-none">{appointment.doctorName}</h3>
            <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="flex items-center text-sm">
              <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>{appointment.date}</span>
            </div>
            <div className="flex items-center text-sm">
              <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>{appointment.time}</span>
            </div>
            <div className="flex items-center text-sm">
              {appointment.type === 'in-person' && (
                <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
              )}
              {appointment.type === 'video' && (
                <Video className="mr-2 h-4 w-4 text-muted-foreground" />
              )}
              {appointment.type === 'phone' && (
                <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
              )}
              <span>{appointment.location}</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <AppointmentTypeTag type={appointment.type} />
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t flex justify-end gap-2">
        <Button variant="outline" size="sm">Reschedule</Button>
        <Button variant="outline" size="sm" className="text-destructive">Cancel</Button>
      </div>
    </div>
  );
}

function AppointmentTypeTag({ type }: { type: string }) {
  return (
    <span className={cn(
      "px-2.5 py-0.5 text-xs font-medium rounded-full",
      type === 'in-person' && "bg-primary/10 text-primary",
      type === 'video' && "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      type === 'phone' && "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
    )}>
      {type === 'in-person' && "In Person"}
      {type === 'video' && "Video Call"}
      {type === 'phone' && "Phone Call"}
    </span>
  );
}
