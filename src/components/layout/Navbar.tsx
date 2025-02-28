
import { Bell, Menu, Moon, Search, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/hooks/use-theme';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface NavbarProps {
  onMenuClick: () => void;
}

export function Navbar({ onMenuClick }: NavbarProps) {
  const { theme, setTheme } = useTheme();

  return (
    <header className="h-16 border-b border-border sticky top-0 z-30 bg-background/80 backdrop-blur-lg flex items-center px-4 md:px-6">
      <div className="flex items-center gap-3 md:gap-4 w-full">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onMenuClick}
          className="md:hidden"
        >
          <Menu size={20} />
        </Button>

        <div className="relative w-full max-w-md hidden md:flex">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-8 bg-background w-full"
          />
        </div>

        <div className="flex items-center ml-auto gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell size={20} />
                <Badge className="absolute -top-1 -right-1 px-1.5 min-w-0 h-5">3</Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="p-2">
                <h3 className="text-lg font-semibold">Notifications</h3>
                <p className="text-sm text-muted-foreground">You have 3 unread messages</p>
              </div>
              <div className="divide-y divide-border">
                <DropdownMenuItem className="cursor-pointer p-3 focus:bg-accent">
                  <div className="flex flex-col gap-1">
                    <p className="font-medium">Appointment Reminder</p>
                    <p className="text-sm text-muted-foreground">Dr. Smith tomorrow at 10:00 AM</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer p-3 focus:bg-accent">
                  <div className="flex flex-col gap-1">
                    <p className="font-medium">Medication Reminder</p>
                    <p className="text-sm text-muted-foreground">Take Aspirin with meal</p>
                    <p className="text-xs text-muted-foreground">5 hours ago</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer p-3 focus:bg-accent">
                  <div className="flex flex-col gap-1">
                    <p className="font-medium">Lab Results Available</p>
                    <p className="text-sm text-muted-foreground">Your recent lab results are ready</p>
                    <p className="text-xs text-muted-foreground">Yesterday</p>
                  </div>
                </DropdownMenuItem>
              </div>
              <div className="p-2 text-center border-t border-border">
                <Button variant="link" className="w-full">View All Notifications</Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme('light')}>
                <Sun className="mr-2 h-4 w-4" />
                <span>Light</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                <Moon className="mr-2 h-4 w-4" />
                <span>Dark</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" alt="Profile" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>My Profile</DropdownMenuItem>
              <DropdownMenuItem>Account Settings</DropdownMenuItem>
              <DropdownMenuItem>Help Center</DropdownMenuItem>
              <DropdownMenuItem>Sign Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
