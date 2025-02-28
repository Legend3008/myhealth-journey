
import { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { 
  Activity, 
  Calendar, 
  Heart, 
  MessageSquare, 
  Pill,
  Thermometer,
  Droplets,
  ArrowRight,
  BarChart3,
  Scale,
  Clock,
  LucideProps
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { HealthMetricsChart } from '@/components/dashboard/HealthMetricsChart';
import { UpcomingAppointments } from '@/components/dashboard/UpcomingAppointments';
import { MedicationReminders } from '@/components/dashboard/MedicationReminders';
import { HealthTips } from '@/components/dashboard/HealthTips';
import { cn } from '@/lib/utils';

export default function Index() {
  const [selectedTab, setSelectedTab] = useState('overview');
  
  return (
    <MainLayout>
      <section className="space-y-6">
        <div className="flex flex-col space-y-2">
          <div className="inline-flex text-sm font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary w-fit animate-fade-in">
            Your Health Dashboard
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight animate-fade-in">
            Welcome back, John
          </h1>
          <p className="text-muted-foreground animate-fade-in">
            Here's an overview of your health metrics and upcoming activities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <HealthStat 
            title="Heart Rate" 
            value="72" 
            unit="bpm" 
            icon={Heart} 
            trend="up" 
            trendValue="3"
            color="text-red-500"
            delay={100}
          />
          <HealthStat 
            title="Blood Pressure" 
            value="120/80" 
            unit="mmHg" 
            icon={Activity} 
            trend="normal"
            color="text-green-500"
            delay={200}
          />
          <HealthStat 
            title="Temperature" 
            value="98.6" 
            unit="°F" 
            icon={Thermometer} 
            trend="normal"
            color="text-amber-500"
            delay={300}
          />
          <HealthStat 
            title="Blood Glucose" 
            value="95" 
            unit="mg/dL" 
            icon={Droplets} 
            trend="down" 
            trendValue="5"
            color="text-blue-500"
            delay={400}
          />
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 border-b overflow-x-auto pb-1 animate-fade-in">
          <TabButton 
            active={selectedTab === 'overview'} 
            onClick={() => setSelectedTab('overview')}
          >
            Overview
          </TabButton>
          <TabButton 
            active={selectedTab === 'metrics'} 
            onClick={() => setSelectedTab('metrics')}
          >
            Health Metrics
          </TabButton>
          <TabButton 
            active={selectedTab === 'appointments'} 
            onClick={() => setSelectedTab('appointments')}
          >
            Appointments
          </TabButton>
          <TabButton 
            active={selectedTab === 'medications'} 
            onClick={() => setSelectedTab('medications')}
          >
            Medications
          </TabButton>
        </div>

        {selectedTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2 hover-lift animate-fade-in">
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Health Metrics</span>
                  <Button variant="ghost" size="sm" className="text-sm gap-1">
                    Last 7 Days <ArrowRight size={14} />
                  </Button>
                </CardTitle>
                <CardDescription>Track your vital signs over time</CardDescription>
              </CardHeader>
              <CardContent>
                <HealthMetricsChart />
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="hover-lift animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>Today's Plan</span>
                    <Calendar size={18} />
                  </CardTitle>
                  <CardDescription>April 23, 2023</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Daily goals</span>
                      <span className="font-medium">3/5 completed</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  
                  <div className="rounded-lg border p-3 flex items-center space-x-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Pill size={18} className="text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Medication</p>
                      <p className="text-xs text-muted-foreground">Aspirin, 10:00 AM</p>
                    </div>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Clock size={16} />
                    </Button>
                  </div>
                  
                  <div className="rounded-lg border p-3 flex items-center space-x-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <MessageSquare size={18} className="text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Appointment</p>
                      <p className="text-xs text-muted-foreground">Dr. Smith, 2:30 PM</p>
                    </div>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Clock size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>Health Score</span>
                    <BarChart3 size={18} />
                  </CardTitle>
                  <CardDescription>Based on your data</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <div className="relative flex items-center justify-center h-32 w-32">
                      <svg className="h-32 w-32 -rotate-90">
                        <circle
                          cx="64"
                          cy="64"
                          r="54"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="12"
                          className="text-border"
                        />
                        <circle
                          cx="64"
                          cy="64"
                          r="54"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="12"
                          strokeDasharray={2 * Math.PI * 54}
                          strokeDashoffset={2 * Math.PI * 54 * (1 - 0.85)}
                          className="text-primary"
                        />
                      </svg>
                      <div className="absolute text-2xl font-bold">85%</div>
                    </div>
                    <p className="text-sm text-center text-muted-foreground">
                      Your health score is great! Keep up the good work.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {selectedTab === 'metrics' && (
          <div className="grid grid-cols-1 gap-6">
            <Card className="hover-lift animate-fade-in">
              <CardHeader>
                <CardTitle>Detailed Health Metrics</CardTitle>
                <CardDescription>Monitor all your vital signs and measurements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <MetricCard 
                    title="Weight Tracking" 
                    value="165" 
                    unit="lbs" 
                    change="-2.5 lbs"
                    trend="down"
                    icon={Scale}
                  />
                  <MetricCard 
                    title="Average Sleep" 
                    value="7.5" 
                    unit="hours" 
                    change="+0.5 hrs"
                    trend="up"
                    icon={Clock}
                  />
                  <MetricCard 
                    title="Resting Heart Rate" 
                    value="68" 
                    unit="bpm" 
                    change="-4 bpm"
                    trend="down"
                    icon={Heart}
                  />
                  <MetricCard 
                    title="Blood Oxygen" 
                    value="98" 
                    unit="%" 
                    change="Normal"
                    trend="normal"
                    icon={Droplets}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View All Metrics</Button>
              </CardFooter>
            </Card>
          </div>
        )}

        {selectedTab === 'appointments' && (
          <div className="animate-fade-in">
            <UpcomingAppointments />
          </div>
        )}

        {selectedTab === 'medications' && (
          <div className="animate-fade-in">
            <MedicationReminders />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="hover-lift animate-fade-in">
            <CardHeader>
              <CardTitle>Health Tips & Articles</CardTitle>
              <CardDescription>Stay informed with the latest health information</CardDescription>
            </CardHeader>
            <CardContent>
              <HealthTips />
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View All Articles</Button>
            </CardFooter>
          </Card>

          <Card className="hover-lift animate-fade-in">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks and activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <ActionButton icon={Calendar} label="Book Appointment" />
                <ActionButton icon={MessageSquare} label="Message Doctor" />
                <ActionButton icon={Pill} label="Refill Prescription" />
                <ActionButton icon={Activity} label="Log Vital Signs" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </MainLayout>
  );
}

interface HealthStatProps {
  title: string;
  value: string;
  unit: string;
  icon: React.ComponentType<LucideProps>;
  trend: 'up' | 'down' | 'normal';
  trendValue?: string;
  color?: string;
  delay?: number;
}

function HealthStat({ title, value, unit, icon: Icon, trend, trendValue, color, delay = 0 }: HealthStatProps) {
  return (
    <Card 
      className={cn(
        "overflow-hidden hover-lift", 
        "animate-fade-in"
      )} 
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
          <Icon className={cn("h-4 w-4", color)} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline">
          <div className="text-2xl font-bold">{value}</div>
          <div className="ml-1 text-sm text-muted-foreground">{unit}</div>
        </div>
        
        {trend === 'up' && (
          <div className="flex items-center mt-1 text-sm text-rose-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 mr-1"
            >
              <path
                fillRule="evenodd"
                d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                clipRule="evenodd"
              />
            </svg>
            {trendValue && <span>{trendValue}% from yesterday</span>}
          </div>
        )}
        
        {trend === 'down' && (
          <div className="flex items-center mt-1 text-sm text-emerald-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 mr-1"
            >
              <path
                fillRule="evenodd"
                d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                clipRule="evenodd"
              />
            </svg>
            {trendValue && <span>{trendValue}% from yesterday</span>}
          </div>
        )}
        
        {trend === 'normal' && (
          <div className="flex items-center mt-1 text-sm text-emerald-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 mr-1"
            >
              <path
                fillRule="evenodd"
                d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                clipRule="evenodd"
              />
            </svg>
            <span>Normal</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

interface TabButtonProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

function TabButton({ children, active, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 text-sm font-medium rounded-lg transition-all",
        active
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:text-foreground hover:bg-secondary"
      )}
    >
      {children}
    </button>
  );
}

interface MetricCardProps {
  title: string;
  value: string;
  unit: string;
  change: string;
  trend: 'up' | 'down' | 'normal';
  icon: React.ComponentType<LucideProps>;
}

function MetricCard({ title, value, unit, change, trend, icon: Icon }: MetricCardProps) {
  return (
    <div className="rounded-lg border p-4 hover-lift">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="flex items-baseline space-x-1">
            <p className="text-2xl font-bold">{value}</p>
            <span className="text-sm text-muted-foreground">{unit}</span>
          </div>
        </div>
        <div className="rounded-full bg-primary/10 p-2">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </div>
      
      <div className="mt-3 flex items-center text-sm">
        {trend === 'up' && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 mr-1 text-emerald-500"
          >
            <path
              fillRule="evenodd"
              d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
              clipRule="evenodd"
            />
          </svg>
        )}
        
        {trend === 'down' && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 mr-1 text-rose-500"
          >
            <path
              fillRule="evenodd"
              d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
              clipRule="evenodd"
            />
          </svg>
        )}
        
        {trend === 'normal' && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 mr-1 text-emerald-500"
          >
            <path
              fillRule="evenodd"
              d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
              clipRule="evenodd"
            />
          </svg>
        )}
        
        <span className={cn(
          trend === 'up' && "text-emerald-500",
          trend === 'down' && "text-rose-500",
          trend === 'normal' && "text-emerald-500"
        )}>
          {change}
        </span>
      </div>
    </div>
  );
}

interface ActionButtonProps {
  icon: React.ComponentType<LucideProps>;
  label: string;
}

function ActionButton({ icon: Icon, label }: ActionButtonProps) {
  return (
    <Button 
      variant="outline" 
      className="h-auto py-4 flex flex-col items-center justify-center space-y-2 hover-lift"
    >
      <div className="rounded-full bg-primary/10 p-3">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <span className="text-sm">{label}</span>
    </Button>
  );
}
