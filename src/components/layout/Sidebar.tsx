
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  CalendarDays, 
  ClipboardList, 
  Home, 
  Menu, 
  Pill, 
  Settings, 
  User, 
  Activity, 
  X,
  MessageSquare,
  Clock,
  BookOpen
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function Sidebar({ open, setOpen }: SidebarProps) {
  const location = useLocation();
  
  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: CalendarDays, label: 'Appointments', path: '/appointments' },
    { icon: Pill, label: 'Medications', path: '/medications' },
    { icon: ClipboardList, label: 'Records', path: '/records' },
    { icon: Activity, label: 'Vitals', path: '/vitals' },
    { icon: MessageSquare, label: 'Messages', path: '/messages' },
    { icon: Clock, label: 'History', path: '/history' },
    { icon: BookOpen, label: 'Resources', path: '/resources' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-64 bg-sidebar border-r border-border shadow-lg transition-transform duration-300 ease-in-out",
          "transform md:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Activity size={18} className="text-primary-foreground" />
              </div>
              <h1 className="text-xl font-semibold text-sidebar-foreground">MyHealth</h1>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden"
              onClick={() => setOpen(false)}
            >
              <X size={20} />
            </Button>
          </div>
          
          <nav className="flex-1 px-2 py-4 overflow-y-auto">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                      "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                      location.pathname === item.path 
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "text-sidebar-foreground"
                    )}
                  >
                    <item.icon size={18} className="mr-3" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="p-4 border-t border-border">
            <Button 
              variant="outline" 
              className="w-full justify-start text-sidebar-foreground"
            >
              <User size={18} className="mr-2" />
              <span className="truncate">Dr. Appointment</span>
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}
