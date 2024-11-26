import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Activity, 
  Brain, 
  Users, 
  DollarSign,
  Settings,
  Menu
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Activity, label: 'Health', path: '/health' },
  { icon: Brain, label: 'Productivity', path: '/productivity' },
  { icon: Users, label: 'Social', path: '/social' },
  { icon: DollarSign, label: 'Financial', path: '/financial' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export const Sidebar = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <aside className={`
      border-r bg-card transition-all duration-300
      ${collapsed ? 'w-16' : 'w-64'}
      hidden md:flex flex-col
    `}>
      <div className="p-4 flex justify-between items-center">
        {!collapsed && <span className="font-bold text-xl">KaiOS</span>}
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-accent"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
      
      <nav className="flex-1 p-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              flex items-center gap-3 px-3 py-2 rounded-lg
              ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-accent'}
              ${collapsed ? 'justify-center' : ''}
            `}
          >
            <item.icon className="h-5 w-5" />
            {!collapsed && <span>{item.label}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};