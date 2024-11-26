import React from 'react';
import { Bell, User } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

export const Header = () => {
  return (
    <header className="border-b bg-card">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <h2 className="text-xl font-semibold text-foreground">KaiOS</h2>
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          <button className="relative">
            <Bell className="h-5 w-5 text-foreground" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
              3
            </span>
          </button>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-4 w-4 text-foreground" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};