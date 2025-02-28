
import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { 
  Settings, 
  Bell, 
  Shield, 
  Smartphone, 
  Globe,
  Moon,
  Sun,
  Paintbrush,
  Eye,
  EyeOff,
  Save,
  User,
  Lock,
  LogOut,
  HelpCircle,
  FileText,
  Download
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/use-theme";
import { toast } from "@/hooks/use-toast";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("account");
  const { theme, setTheme } = useTheme();
  const [saveLoading, setSaveLoading] = useState(false);

  const handleSaveChanges = () => {
    setSaveLoading(true);
    
    // Simulate saving settings
    setTimeout(() => {
      setSaveLoading(false);
      toast({
        title: "Settings saved",
        description: "Your preferences have been updated successfully.",
      });
    }, 1000);
  };
  
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <div className="inline-flex text-sm font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary w-fit animate-fade-in">
            Settings
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight animate-fade-in">
            Account Settings
          </h1>
          <p className="text-muted-foreground animate-fade-in">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="md:col-span-1 animate-fade-in">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">Settings</CardTitle>
              <CardDescription>Manage your preferences</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1">
                {[
                  { id: "account", label: "Account", icon: User },
                  { id: "security", label: "Security & Privacy", icon: Shield },
                  { id: "notifications", label: "Notifications", icon: Bell },
                  { id: "appearance", label: "Appearance", icon: Paintbrush },
                  { id: "devices", label: "Devices", icon: Smartphone },
                  { id: "language", label: "Language & Region", icon: Globe },
                  { id: "help", label: "Help & Support", icon: HelpCircle },
                ].map((item) => (
                  <button
                    key={item.id}
                    className={cn(
                      "flex items-center gap-3 w-full p-3 text-sm transition-colors",
                      "hover:bg-accent hover:text-accent-foreground",
                      activeTab === item.id
                        ? "bg-accent text-accent-foreground font-medium"
                        : "text-muted-foreground"
                    )}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
              
              <Separator className="my-2" />
              
              <button
                className="flex items-center gap-3 w-full p-3 text-sm transition-colors hover:bg-accent hover:text-accent-foreground text-destructive"
              >
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </button>
            </CardContent>
          </Card>

          <Card className="md:col-span-3 animate-fade-in">
            <CardContent className="p-6">
              {activeTab === "account" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Account Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" defaultValue="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" defaultValue="john.doe@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" defaultValue="(555) 123-4567" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dob">Date of Birth</Label>
                        <Input id="dob" type="date" defaultValue="1985-01-15" />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Profile Settings</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="bio">Short Bio</Label>
                        <textarea
                          id="bio"
                          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          rows={3}
                          placeholder="Tell us about yourself"
                        ></textarea>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="public-profile">Public Profile</Label>
                          <p className="text-sm text-muted-foreground">
                            Allow others to see your basic profile information
                          </p>
                        </div>
                        <Switch id="public-profile" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="show-health-data">Share Health Data with Providers</Label>
                          <p className="text-sm text-muted-foreground">
                            Allow your healthcare providers to access your health data
                          </p>
                        </div>
                        <Switch id="show-health-data" defaultChecked />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Account Actions</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Export Your Data</p>
                          <p className="text-sm text-muted-foreground">
                            Download all your health data and account information
                          </p>
                        </div>
                        <Button variant="outline" className="gap-2">
                          <Download className="h-4 w-4" />
                          Export Data
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Delete Account</p>
                          <p className="text-sm text-muted-foreground">
                            Permanently delete your account and all associated data
                          </p>
                        </div>
                        <Button variant="destructive">Delete Account</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      onClick={handleSaveChanges} 
                      disabled={saveLoading}
                      className="gap-2"
                    >
                      {saveLoading ? (
                        <>Saving...</>
                      ) : (
                        <>
                          <Save className="h-4 w-4" />
                          Save Changes
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}
              
              {activeTab === "security" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Password Settings</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <div className="relative">
                          <Input id="current-password" type="password" />
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="absolute right-0 top-0 h-full aspect-square"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <div className="relative">
                          <Input id="new-password" type="password" />
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="absolute right-0 top-0 h-full aspect-square"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <div className="relative">
                          <Input id="confirm-password" type="password" />
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="absolute right-0 top-0 h-full aspect-square"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <Button>Update Password</Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Two-Factor Authentication</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="tfa">Enable Two-Factor Authentication</Label>
                          <p className="text-sm text-muted-foreground">
                            Add an extra layer of security to your account
                          </p>
                        </div>
                        <Switch id="tfa" />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Privacy Settings</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="data-collection">Data Collection</Label>
                          <p className="text-sm text-muted-foreground">
                            Allow us to collect usage data to improve your experience
                          </p>
                        </div>
                        <Switch id="data-collection" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="research-participation">Research Participation</Label>
                          <p className="text-sm text-muted-foreground">
                            Contribute anonymized data to health research studies
                          </p>
                        </div>
                        <Switch id="research-participation" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="cookie-preferences">Cookie Preferences</Label>
                          <p className="text-sm text-muted-foreground">
                            Manage your cookie settings and preferences
                          </p>
                        </div>
                        <Button variant="outline" size="sm">Manage</Button>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Session Management</h3>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-medium">Current Session</p>
                            <p className="text-sm text-muted-foreground">Chrome • Windows • New York, USA</p>
                          </div>
                          <Badge variant="outline" className="text-primary">Active</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Started 2 hours ago • IP: 192.168.1.1</p>
                      </div>
                      
                      <Button variant="outline">Sign Out of All Sessions</Button>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      onClick={handleSaveChanges} 
                      disabled={saveLoading}
                      className="gap-2"
                    >
                      {saveLoading ? (
                        <>Saving...</>
                      ) : (
                        <>
                          <Save className="h-4 w-4" />
                          Save Changes
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}
              
              {activeTab === "notifications" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Notification Preferences</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="email-notifications">Email Notifications</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive notifications about appointments and updates via email
                          </p>
                        </div>
                        <Switch id="email-notifications" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="sms-notifications">SMS Notifications</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive text message reminders for appointments
                          </p>
                        </div>
                        <Switch id="sms-notifications" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="push-notifications">Push Notifications</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive alerts on your device
                          </p>
                        </div>
                        <Switch id="push-notifications" defaultChecked />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Notification Types</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="appointment-reminders">Appointment Reminders</Label>
                          <p className="text-sm text-muted-foreground">
                            Get notified about upcoming appointments
                          </p>
                        </div>
                        <Switch id="appointment-reminders" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="medication-reminders">Medication Reminders</Label>
                          <p className="text-sm text-muted-foreground">
                            Get alerts when it's time to take your medications
                          </p>
                        </div>
                        <Switch id="medication-reminders" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="lab-results">Lab Results</Label>
                          <p className="text-sm text-muted-foreground">
                            Get notified when new lab results are available
                          </p>
                        </div>
                        <Switch id="lab-results" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="billing-updates">Billing & Insurance</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive updates about billing and insurance changes
                          </p>
                        </div>
                        <Switch id="billing-updates" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="health-tips">Health Tips & Newsletter</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive educational content and health information
                          </p>
                        </div>
                        <Switch id="health-tips" />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Notification Schedule</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="quiet-hours-start">Quiet Hours Start</Label>
                          <Select defaultValue="22:00">
                            <SelectTrigger>
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="20:00">8:00 PM</SelectItem>
                              <SelectItem value="21:00">9:00 PM</SelectItem>
                              <SelectItem value="22:00">10:00 PM</SelectItem>
                              <SelectItem value="23:00">11:00 PM</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="quiet-hours-end">Quiet Hours End</Label>
                          <Select defaultValue="07:00">
                            <SelectTrigger>
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="05:00">5:00 AM</SelectItem>
                              <SelectItem value="06:00">6:00 AM</SelectItem>
                              <SelectItem value="07:00">7:00 AM</SelectItem>
                              <SelectItem value="08:00">8:00 AM</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="enable-quiet-hours">Enable Quiet Hours</Label>
                          <p className="text-sm text-muted-foreground">
                            Don't send notifications during quiet hours
                          </p>
                        </div>
                        <Switch id="enable-quiet-hours" defaultChecked />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      onClick={handleSaveChanges} 
                      disabled={saveLoading}
                      className="gap-2"
                    >
                      {saveLoading ? (
                        <>Saving...</>
                      ) : (
                        <>
                          <Save className="h-4 w-4" />
                          Save Changes
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}
              
              {activeTab === "appearance" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Theme Preferences</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-4">
                        <div
                          className={cn(
                            "border rounded-lg p-4 cursor-pointer hover-lift",
                            theme === "light" && "border-primary"
                          )}
                          onClick={() => setTheme("light")}
                        >
                          <div className="flex items-center justify-center mb-3">
                            <div className="h-20 w-20 bg-white border rounded-full flex items-center justify-center">
                              <Sun className="h-10 w-10 text-amber-500" />
                            </div>
                          </div>
                          <p className="text-center font-medium">Light</p>
                        </div>
                        
                        <div
                          className={cn(
                            "border rounded-lg p-4 cursor-pointer hover-lift",
                            theme === "dark" && "border-primary"
                          )}
                          onClick={() => setTheme("dark")}
                        >
                          <div className="flex items-center justify-center mb-3">
                            <div className="h-20 w-20 bg-slate-900 border rounded-full flex items-center justify-center">
                              <Moon className="h-10 w-10 text-slate-400" />
                            </div>
                          </div>
                          <p className="text-center font-medium">Dark</p>
                        </div>
                        
                        <div
                          className={cn(
                            "border rounded-lg p-4 cursor-pointer hover-lift",
                            theme === "system" && "border-primary"
                          )}
                          onClick={() => setTheme("system")}
                        >
                          <div className="flex items-center justify-center mb-3">
                            <div className="h-20 w-20 bg-gradient-to-b from-white to-slate-900 border rounded-full flex items-center justify-center">
                              <div className="flex">
                                <Sun className="h-8 w-8 text-amber-500" />
                                <Moon className="h-8 w-8 text-slate-400 -ml-2" />
                              </div>
                            </div>
                          </div>
                          <p className="text-center font-medium">System</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Accessibility</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="high-contrast">High Contrast Mode</Label>
                          <p className="text-sm text-muted-foreground">
                            Increase contrast between text and background
                          </p>
                        </div>
                        <Switch id="high-contrast" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="font-size">Font Size</Label>
                        <Select defaultValue="medium">
                          <SelectTrigger>
                            <SelectValue placeholder="Select font size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Small</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="large">Large</SelectItem>
                            <SelectItem value="x-large">Extra Large</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="reduce-motion">Reduce Motion</Label>
                          <p className="text-sm text-muted-foreground">
                            Minimize animations throughout the app
                          </p>
                        </div>
                        <Switch id="reduce-motion" />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Dashboard Preferences</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="show-metrics">Show Health Metrics</Label>
                          <p className="text-sm text-muted-foreground">
                            Display health metrics on your dashboard homepage
                          </p>
                        </div>
                        <Switch id="show-metrics" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="show-appointments">Show Upcoming Appointments</Label>
                          <p className="text-sm text-muted-foreground">
                            Display your upcoming appointments on the dashboard
                          </p>
                        </div>
                        <Switch id="show-appointments" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="show-medications">Show Medication Reminders</Label>
                          <p className="text-sm text-muted-foreground">
                            Display medication reminders on the dashboard
                          </p>
                        </div>
                        <Switch id="show-medications" defaultChecked />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      onClick={handleSaveChanges} 
                      disabled={saveLoading}
                      className="gap-2"
                    >
                      {saveLoading ? (
                        <>Saving...</>
                      ) : (
                        <>
                          <Save className="h-4 w-4" />
                          Save Changes
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}
              
              {activeTab === "devices" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Connected Devices</h3>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className="bg-primary/10 p-2 rounded-full">
                              <Smartphone className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium">iPhone 13 Pro</p>
                              <p className="text-sm text-muted-foreground">iOS 16.5 • Last synced 2 hours ago</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="text-primary">Connected</Badge>
                        </div>
                        <div className="flex justify-end mt-2">
                          <Button variant="outline" size="sm">Disconnect</Button>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className="bg-primary/10 p-2 rounded-full">
                              <Activity className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium">Apple Watch Series 7</p>
                              <p className="text-sm text-muted-foreground">watchOS 9.2 • Last synced 1 hour ago</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="text-primary">Connected</Badge>
                        </div>
                        <div className="flex justify-end mt-2">
                          <Button variant="outline" size="sm">Disconnect</Button>
                        </div>
                      </div>
                      
                      <Button className="gap-2">
                        <Plus className="h-4 w-4" />
                        Connect New Device
                      </Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Connected Services</h3>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className="bg-blue-100 dark:bg-blue-900/20 p-2 rounded-full">
                              <Activity className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                              <p className="font-medium">Apple Health</p>
                              <p className="text-sm text-muted-foreground">Syncing steps, heart rate, and activity data</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="text-green-600 dark:text-green-400">Active</Badge>
                        </div>
                        <div className="flex justify-end mt-2">
                          <Button variant="outline" size="sm">Manage</Button>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className="bg-slate-100 dark:bg-slate-900/70 p-2 rounded-full">
                              <Activity className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                            </div>
                            <div>
                              <p className="font-medium">Fitbit</p>
                              <p className="text-sm text-muted-foreground">Not connected</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="text-muted-foreground">Inactive</Badge>
                        </div>
                        <div className="flex justify-end mt-2">
                          <Button variant="outline" size="sm">Connect</Button>
                        </div>
                      </div>
                      
                      <Button className="gap-2">
                        <Plus className="h-4 w-4" />
                        Connect New Service
                      </Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Device Permissions</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="location-permission">Location Access</Label>
                          <p className="text-sm text-muted-foreground">
                            Allow the app to access your location
                          </p>
                        </div>
                        <Select defaultValue="while-using">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select permission" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="always">Always</SelectItem>
                            <SelectItem value="while-using">While Using App</SelectItem>
                            <SelectItem value="never">Never</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="camera-permission">Camera Access</Label>
                          <p className="text-sm text-muted-foreground">
                            Allow the app to access your camera
                          </p>
                        </div>
                        <Switch id="camera-permission" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="notifications-permission">Notification Access</Label>
                          <p className="text-sm text-muted-foreground">
                            Allow the app to send you notifications
                          </p>
                        </div>
                        <Switch id="notifications-permission" defaultChecked />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      onClick={handleSaveChanges} 
                      disabled={saveLoading}
                      className="gap-2"
                    >
                      {saveLoading ? (
                        <>Saving...</>
                      ) : (
                        <>
                          <Save className="h-4 w-4" />
                          Save Changes
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}
              
              {activeTab === "language" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Language Preferences</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="app-language">App Language</Label>
                        <Select defaultValue="en">
                          <SelectTrigger>
                            <SelectValue placeholder="Select language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="es">Español</SelectItem>
                            <SelectItem value="fr">Français</SelectItem>
                            <SelectItem value="de">Deutsch</SelectItem>
                            <SelectItem value="zh">中文</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Regional Settings</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="timezone">Time Zone</Label>
                        <Select defaultValue="america-new_york">
                          <SelectTrigger>
                            <SelectValue placeholder="Select time zone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="america-new_york">Eastern Time (ET)</SelectItem>
                            <SelectItem value="america-chicago">Central Time (CT)</SelectItem>
                            <SelectItem value="america-denver">Mountain Time (MT)</SelectItem>
                            <SelectItem value="america-los_angeles">Pacific Time (PT)</SelectItem>
                            <SelectItem value="etc-utc">UTC</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="date-format">Date Format</Label>
                        <Select defaultValue="mdy">
                          <SelectTrigger>
                            <SelectValue placeholder="Select date format" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                            <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                            <SelectItem value="ymd">YYYY/MM/DD</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="time-format">Time Format</Label>
                        <Select defaultValue="12h">
                          <SelectTrigger>
                            <SelectValue placeholder="Select time format" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="12h">12-hour (AM/PM)</SelectItem>
                            <SelectItem value="24h">24-hour</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="measurement-system">Measurement System</Label>
                        <Select defaultValue="imperial">
                          <SelectTrigger>
                            <SelectValue placeholder="Select measurement system" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="imperial">Imperial (lbs, ft, °F)</SelectItem>
                            <SelectItem value="metric">Metric (kg, cm, °C)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      onClick={handleSaveChanges} 
                      disabled={saveLoading}
                      className="gap-2"
                    >
                      {saveLoading ? (
                        <>Saving...</>
                      ) : (
                        <>
                          <Save className="h-4 w-4" />
                          Save Changes
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}
              
              {activeTab === "help" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Help & Support</h3>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer">
                        <div className="flex items-center gap-3">
                          <HelpCircle className="h-5 w-5 text-primary" />
                          <div>
                            <p className="font-medium">Frequently Asked Questions</p>
                            <p className="text-sm text-muted-foreground">Find answers to common questions about using the app</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-primary" />
                          <div>
                            <p className="font-medium">User Guide</p>
                            <p className="text-sm text-muted-foreground">Detailed instructions on how to use all features</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer">
                        <div className="flex items-center gap-3">
                          <MessageSquare className="h-5 w-5 text-primary" />
                          <div>
                            <p className="font-medium">Contact Support</p>
                            <p className="text-sm text-muted-foreground">Get in touch with our support team for assistance</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-primary" />
                          <div>
                            <p className="font-medium">Terms of Service</p>
                            <p className="text-sm text-muted-foreground">Read our terms of service agreement</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Shield className="h-5 w-5 text-primary" />
                          <div>
                            <p className="font-medium">Privacy Policy</p>
                            <p className="text-sm text-muted-foreground">Learn how we collect, use, and protect your data</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Send Feedback</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="feedback-type">Feedback Type</Label>
                        <Select defaultValue="suggestion">
                          <SelectTrigger>
                            <SelectValue placeholder="Select feedback type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="suggestion">Suggestion</SelectItem>
                            <SelectItem value="bug">Bug Report</SelectItem>
                            <SelectItem value="question">Question</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="feedback">Your Feedback</Label>
                        <textarea
                          id="feedback"
                          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          rows={5}
                          placeholder="Let us know your thoughts, suggestions, or report any issues you've encountered..."
                        ></textarea>
                      </div>
                      
                      <Button className="gap-2">
                        <Send className="h-4 w-4" />
                        Submit Feedback
                      </Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">About MyHealth</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted rounded-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                            <Activity className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <div>
                            <p className="font-medium">MyHealth</p>
                            <p className="text-sm text-muted-foreground">Version 1.0.0</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          MyHealth is a comprehensive health management platform designed to help you track, monitor, and improve your overall wellness.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}

// For type checking purposes
interface BadgeProps {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  className?: string;
  children: React.ReactNode;
}

function Badge({ variant = 'default', className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variant === 'default' && "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        variant === 'secondary' && "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        variant === 'destructive' && "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        variant === 'outline' && "text-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}

export { Settings };
