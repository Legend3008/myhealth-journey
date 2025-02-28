
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Pill, PlusCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

// Sample data
const medications = [
  {
    id: 1,
    name: 'Aspirin',
    dosage: '100mg',
    instructions: 'Take with food',
    times: [
      { time: '8:00 AM', taken: true },
      { time: '8:00 PM', taken: false },
    ],
    refill: '12 days left',
  },
  {
    id: 2,
    name: 'Lisinopril',
    dosage: '10mg',
    instructions: 'Take once daily',
    times: [
      { time: '9:00 AM', taken: true },
    ],
    refill: '5 days left',
  },
  {
    id: 3,
    name: 'Metformin',
    dosage: '500mg',
    instructions: 'Take with meals',
    times: [
      { time: '8:00 AM', taken: true },
      { time: '1:00 PM', taken: false },
      { time: '7:00 PM', taken: false },
    ],
    refill: '20 days left',
  },
];

export function MedicationReminders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Medication Reminders</span>
          <Button variant="outline" size="icon" className="rounded-full">
            <PlusCircle size={18} />
          </Button>
        </CardTitle>
        <CardDescription>Track your medications and dosages</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {medications.map((medication) => (
            <MedicationCard key={medication.id} medication={medication} />
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">View Medication History</Button>
      </CardFooter>
    </Card>
  );
}

function MedicationCard({ medication }: { medication: typeof medications[0] }) {
  // Calculate how many doses have been taken
  const totalDoses = medication.times.length;
  const takenDoses = medication.times.filter(t => t.taken).length;
  const progress = (takenDoses / totalDoses) * 100;

  return (
    <div className="border rounded-lg p-4 hover-lift">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div className="bg-primary/10 p-2 rounded-full">
            <Pill className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">{medication.name}</h3>
            <p className="text-sm text-muted-foreground">{medication.dosage} - {medication.instructions}</p>
          </div>
        </div>
        <span className="text-xs bg-secondary px-2 py-1 rounded-full">
          {medication.refill}
        </span>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span>Today's doses</span>
          <span>{takenDoses}/{totalDoses} taken</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        {medication.times.map((time, idx) => (
          <div 
            key={idx}
            className={cn(
              "border rounded-lg p-2 flex items-center justify-between",
              time.taken && "bg-primary/5 border-primary/20",
            )}
          >
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{time.time}</span>
            </div>
            {time.taken ? (
              <CheckCircle className="h-5 w-5 text-primary" />
            ) : (
              <Button variant="ghost" size="sm" className="h-7 text-xs">
                Mark Taken
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
