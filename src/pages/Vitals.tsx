
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Heart, Thermometer, Droplets, Plus, Calendar, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HealthMetricsChart } from "@/components/dashboard/HealthMetricsChart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

export default function Vitals() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <div className="inline-flex text-sm font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary w-fit animate-fade-in">
            Vital Signs
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight animate-fade-in">
              Your Vital Signs
            </h1>
            <Button className="flex items-center gap-2 animate-fade-in">
              <Plus size={16} />
              Record Vitals
            </Button>
          </div>
          <p className="text-muted-foreground animate-fade-in">
            Track and analyze your health measurements over time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in">
          <VitalCard 
            title="Heart Rate" 
            value="72" 
            unit="bpm" 
            icon={Heart} 
            trend="up" 
            trendValue="3"
            color="text-red-500"
            normal="60-100 bpm"
          />
          <VitalCard 
            title="Blood Pressure" 
            value="120/80" 
            unit="mmHg" 
            icon={Activity} 
            trend="normal"
            color="text-green-500"
            normal="< 130/80 mmHg"
          />
          <VitalCard 
            title="Temperature" 
            value="98.6" 
            unit="°F" 
            icon={Thermometer} 
            trend="normal"
            color="text-amber-500"
            normal="97.7-99.5 °F"
          />
          <VitalCard 
            title="Blood Glucose" 
            value="95" 
            unit="mg/dL" 
            icon={Droplets} 
            trend="down" 
            trendValue="5"
            color="text-blue-500"
            normal="70-99 mg/dL"
          />
        </div>

        <Card className="animate-fade-in">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Health Trends</CardTitle>
              <CardDescription>Track your vital sign changes over time</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue="7days">
                <SelectTrigger className="w-[140px] h-8">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7days">Last 7 days</SelectItem>
                  <SelectItem value="30days">Last 30 days</SelectItem>
                  <SelectItem value="3months">Last 3 months</SelectItem>
                  <SelectItem value="1year">Last year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <HealthMetricsChart />
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Recent Measurements</CardTitle>
              <CardDescription>Your latest recorded vital signs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { date: "Today, 8:30 AM", hr: "72 bpm", bp: "120/80 mmHg", temp: "98.6 °F", glucose: "95 mg/dL" },
                  { date: "Yesterday, 9:15 PM", hr: "68 bpm", bp: "118/78 mmHg", temp: "98.4 °F", glucose: "100 mg/dL" },
                  { date: "Apr 20, 8:45 AM", hr: "74 bpm", bp: "122/82 mmHg", temp: "98.7 °F", glucose: "92 mg/dL" }
                ].map((reading, i) => (
                  <div key={i} className="border rounded-lg p-4 hover-lift">
                    <div className="flex justify-between items-center mb-3">
                      <span className="flex items-center gap-2 text-sm font-medium">
                        <Calendar size={14} className="text-muted-foreground" />
                        {reading.date}
                      </span>
                      <Button variant="ghost" size="sm" className="h-7">
                        View Details
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Heart Rate</p>
                        <p className="font-medium">{reading.hr}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Blood Pressure</p>
                        <p className="font-medium">{reading.bp}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Temperature</p>
                        <p className="font-medium">{reading.temp}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Glucose</p>
                        <p className="font-medium">{reading.glucose}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <Button variant="outline">View All Measurements</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Health Insights</CardTitle>
              <CardDescription>Analysis of your vital signs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Blood Pressure</h3>
                </div>
                <p className="text-sm text-muted-foreground">Your blood pressure readings have been consistently within the normal range.</p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Heart Rate</h3>
                </div>
                <p className="text-sm text-muted-foreground">Your average resting heart rate has decreased by 4 bpm over the past month, indicating improved cardiovascular fitness.</p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Droplets className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Blood Glucose</h3>
                </div>
                <p className="text-sm text-muted-foreground">Your glucose levels are within normal range, but consider testing more consistently throughout the day.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}

interface VitalCardProps {
  title: string;
  value: string;
  unit: string;
  icon: React.ComponentType<any>;
  trend: 'up' | 'down' | 'normal';
  trendValue?: string;
  color?: string;
  normal: string;
}

function VitalCard({ title, value, unit, icon: Icon, trend, trendValue, color, normal }: VitalCardProps) {
  return (
    <Card className="overflow-hidden hover-lift">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
          <Icon className={cn("h-4 w-4", color)} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline mb-1">
          <div className="text-2xl font-bold">{value}</div>
          <div className="ml-1 text-sm text-muted-foreground">{unit}</div>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            {trend === 'up' && (
              <div className="flex items-center text-sm text-rose-500">
                <ArrowUpDown className="h-3 w-3 mr-1" />
                {trendValue && <span>{trendValue}%</span>}
              </div>
            )}
            
            {trend === 'down' && (
              <div className="flex items-center text-sm text-emerald-500">
                <ArrowUpDown className="h-3 w-3 mr-1" />
                {trendValue && <span>{trendValue}%</span>}
              </div>
            )}
            
            {trend === 'normal' && (
              <div className="flex items-center text-sm text-emerald-500">
                <Activity className="h-3 w-3 mr-1" />
                <span>Normal</span>
              </div>
            )}
          </div>
          
          <div className="text-xs text-muted-foreground">
            Normal: {normal}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
