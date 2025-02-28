
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Search, Send, User, Phone, Video, PaperclipIcon, Image, Plus, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export default function Messages() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <div className="inline-flex text-sm font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary w-fit animate-fade-in">
            Messages
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight animate-fade-in">
              Healthcare Messages
            </h1>
            <Button className="flex items-center gap-2 animate-fade-in">
              <Plus size={16} />
              New Message
            </Button>
          </div>
          <p className="text-muted-foreground animate-fade-in">
            Securely communicate with your healthcare providers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-240px)] min-h-[500px]">
          <Card className="animate-fade-in">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <CardTitle>Conversations</CardTitle>
                <Badge variant="outline" className="ml-2">3 Unread</Badge>
              </div>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                <Input placeholder="Search messages..." className="pl-8" />
              </div>
            </CardHeader>
            <CardContent className="p-0 overflow-y-auto h-[calc(100vh-360px)] min-h-[300px]">
              <div className="space-y-1">
                {[
                  { name: "Dr. Sarah Smith", role: "Cardiologist", time: "10:30 AM", preview: "Your latest test results look good. Your heart function has...", unread: true, selected: true },
                  { name: "Dr. Michael Johnson", role: "Primary Care", time: "Yesterday", preview: "Please schedule a follow-up appointment in the next two weeks." },
                  { name: "Nurse Williams", role: "Diabetes Care", time: "Apr 20", preview: "Here's the information about your new medication regimen." },
                  { name: "Dr. Emily Davis", role: "Dermatologist", time: "Apr 18", preview: "The rash appears to be clearing up nicely. Continue with the..." },
                  { name: "PharmacyDirect", role: "Pharmacy", time: "Apr 15", preview: "Your prescription refill is ready for pickup or delivery." }
                ].map((convo, i) => (
                  <div 
                    key={i}
                    className={cn(
                      "p-3 flex gap-3 border-b cursor-pointer",
                      convo.selected && "bg-accent",
                      i === 0 && "border-l-4 border-l-primary"
                    )}
                  >
                    <Avatar>
                      <AvatarFallback>{convo.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <div className="font-medium truncate">{convo.name}</div>
                        <div className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                          {convo.time}
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground mb-1">{convo.role}</div>
                      <div className="text-sm truncate">
                        {convo.unread && (
                          <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                        )}
                        {convo.preview}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2 flex flex-col animate-fade-in">
            <CardHeader className="pb-3 border-b">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>SS</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>Dr. Sarah Smith</CardTitle>
                    <CardDescription>Cardiologist • Online now</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Video className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <User className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 p-4 overflow-y-auto space-y-4 h-[calc(100vh-460px)] min-h-[200px]">
              <div className="flex items-center justify-center">
                <Badge variant="outline" className="text-xs text-muted-foreground">Today, April 22</Badge>
              </div>

              <div className="flex items-end gap-2 max-w-[80%]">
                <Avatar className="w-8 h-8">
                  <AvatarFallback>SS</AvatarFallback>
                </Avatar>
                <div>
                  <div className="bg-muted p-3 rounded-lg rounded-bl-none">
                    <p className="text-sm">Hello John, I've reviewed your recent test results and I'm pleased to say that everything looks good. Your heart function has improved since our last visit.</p>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">10:30 AM</div>
                </div>
              </div>

              <div className="flex items-end gap-2 max-w-[80%] self-end ml-auto">
                <div className="text-right">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg rounded-br-none">
                    <p className="text-sm">That's great news! I've been following the exercise plan and taking my medication as prescribed.</p>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">10:32 AM</div>
                </div>
              </div>

              <div className="flex items-end gap-2 max-w-[80%]">
                <Avatar className="w-8 h-8">
                  <AvatarFallback>SS</AvatarFallback>
                </Avatar>
                <div>
                  <div className="bg-muted p-3 rounded-lg rounded-bl-none">
                    <p className="text-sm">I can see that your efforts are paying off. I'd like to schedule a follow-up appointment in 3 months to monitor your progress. Does that work for you?</p>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">10:35 AM</div>
                </div>
              </div>

              <div className="flex items-end gap-2 max-w-[80%] self-end ml-auto">
                <div className="text-right">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg rounded-br-none">
                    <p className="text-sm">Yes, that works for me. Should I schedule it through the app or with your receptionist?</p>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">10:36 AM</div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <Badge variant="outline" className="text-xs flex items-center gap-1">
                  <Clock size={12} />
                  Dr. Smith is typing...
                </Badge>
              </div>
            </CardContent>
            <div className="p-4 border-t">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <PaperclipIcon className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Image className="h-4 w-4" />
                </Button>
                <Input placeholder="Type a message..." className="flex-1" />
                <Button size="icon" className="rounded-full">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
