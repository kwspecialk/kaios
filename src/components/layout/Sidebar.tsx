import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Activity, 
  Brain, 
  Users, 
  DollarSign,
  Settings,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Activity, label: 'Health', path: '/health' },
  { icon: Brain, label: 'Productivity', path: '/productivity' },
  { icon: Users, label: 'Social', path: '/social' },
  { icon: DollarSign, label: 'Financial', path: '/financial' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside 
      className={cn(
        "border-r bg-card transition-all duration-300 flex flex-col",
        collapsed ? "w-16" : "w-64",
        "hidden md:block"
      )}
    >
      <div className="p-4 flex justify-between items-center border-b">
        {!collapsed && <span className="font-bold text-xl text-foreground">KaiOS</span>}
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-accent text-foreground"
        >
          <ChevronRight className={cn(
            "h-5 w-5 transition-transform",
            collapsed ? "rotate-0" : "rotate-180"
          )} />
        </button>
      </div>
      
      <nav className="flex-1 px-2 py-4">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg mb-1 transition-colors",
                "text-foreground/70 hover:text-foreground",
                "hover:bg-accent",
                isActive && "bg-primary/10 text-primary",
                collapsed && "justify-center"
              )}
            >
              <item.icon className="h-5 w-5" />
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};