
import { PropsWithChildren, useState } from 'react';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import { cn } from '@/lib/utils';

export function MainLayout({ children }: PropsWithChildren) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background flex w-full">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className={cn(
        "flex-1 flex flex-col transition-all duration-300",
        sidebarOpen ? "md:ml-64" : "ml-0"
      )}>
        <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 p-4 md:p-6 animate-fade-in overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
