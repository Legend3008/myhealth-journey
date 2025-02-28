
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  ArrowRight, 
  Check, 
  Lock, 
  Mail, 
  User, 
  Heart, 
  Shield,
  AlertCircle,
  LucideProps 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { cn } from '@/lib/utils';

export default function Auth() {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic would go here
    console.log('Login submitted');
  };
  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Registration logic would go here
    console.log('Registration submitted');
  };
  
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background px-4 py-8 md:px-0">
      <div className="flex w-full items-center justify-center mb-8 animate-fade-in">
        <div className="flex items-center gap-2">
          <div className="rounded-full w-10 h-10 bg-primary flex items-center justify-center">
            <Activity className="h-5 w-5 text-primary-foreground" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold">MyHealth</h1>
        </div>
      </div>
      
      <div className="mx-auto w-full max-w-md animate-fade-in animate-scale-in">
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'login' | 'register')}>
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Sign In</TabsTrigger>
            <TabsTrigger value="register">Create Account</TabsTrigger>
          </TabsList>
          
          <Card className="border-none shadow-lg">
            <TabsContent value="login" className="m-0">
              <form onSubmit={handleLogin}>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">Welcome back</CardTitle>
                  <CardDescription>
                    Enter your credentials to sign in to your account
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="email" 
                        placeholder="john@example.com" 
                        className="pl-10" 
                        type="email" 
                        autoComplete="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link 
                        to="/forgot-password" 
                        className="text-sm font-medium text-primary"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="password" 
                        placeholder="••••••••" 
                        className="pl-10" 
                        type="password"
                        autoComplete="current-password"
                        required 
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button type="submit" className="w-full">
                    Sign In <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <div className="text-center text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <button 
                      type="button"
                      onClick={() => setActiveTab('register')} 
                      className="font-medium text-primary hover:underline"
                    >
                      Create an account
                    </button>
                  </div>
                </CardFooter>
              </form>
            </TabsContent>
            
            <TabsContent value="register" className="m-0">
              <form onSubmit={handleRegister}>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">Create an account</CardTitle>
                  <CardDescription>
                    Enter your information to create your MyHealth account
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="first-name" 
                          placeholder="John" 
                          className="pl-10" 
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input 
                        id="last-name" 
                        placeholder="Doe" 
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="register-email" 
                        placeholder="john@example.com" 
                        className="pl-10" 
                        type="email" 
                        autoComplete="email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="register-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="register-password" 
                        placeholder="••••••••" 
                        className="pl-10" 
                        type="password"
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="register-confirm-password">Confirm Password</Label>
                    <Input 
                      id="register-confirm-password" 
                      placeholder="••••••••" 
                      type="password"
                      required 
                    />
                  </div>
                  
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Important</AlertTitle>
                    <AlertDescription>
                      Your health data is encrypted and protected. We comply with all healthcare privacy regulations.
                    </AlertDescription>
                  </Alert>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button type="submit" className="w-full">
                    Create Account <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <div className="text-center text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <button 
                      type="button"
                      onClick={() => setActiveTab('login')} 
                      className="font-medium text-primary hover:underline"
                    >
                      Sign in
                    </button>
                  </div>
                </CardFooter>
              </form>
            </TabsContent>
          </Card>
        </Tabs>
      </div>
      
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-3xl animate-fade-in" style={{ animationDelay: '200ms' }}>
        <FeatureCard 
          icon={Heart} 
          title="Health First"
          description="Your health data is used to provide personalized care recommendations"
        />
        <FeatureCard 
          icon={Shield} 
          title="Secure & Private"
          description="End-to-end encryption keeps your sensitive health information safe"
        />
        <FeatureCard 
          icon={Activity} 
          title="Complete Care"
          description="Connect with providers, track medications, and manage appointments"
        />
      </div>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ComponentType<LucideProps>;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-xl border bg-card p-4 hover-lift">
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="mb-2 font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
