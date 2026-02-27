import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  Map,
  ShieldAlert,
  BarChart3,
  BookOpen,
  LogOut,
  Settings,
  User,
} from "lucide-react";

export function Sidebar() {
  const location = useLocation();

  const navItems = [
    { name: "Executive Dashboard", path: "/executive", icon: BarChart3 },
    { name: "Officer Portal", path: "/officer", icon: ShieldAlert },
    { name: "Citizen Portal", path: "/citizen", icon: User },
    { name: "GIS Mapping", path: "/gis", icon: Map },
    { name: "System Blueprint", path: "/blueprint", icon: BookOpen },
  ];

  return (
    <div className="flex h-screen w-64 flex-col border-r border-slate-200 bg-slate-50">
      <div className="flex h-16 items-center border-b border-slate-200 px-6">
        <div className="flex items-center gap-2 font-bold text-slate-900">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <ShieldAlert size={18} />
          </div>
          <span className="text-sm leading-tight">
            Ministry of Waterfront
            <br />& Infrastructure
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-3">
          {navItems.map((item) => {
            const isActive =
              location.pathname === item.path ||
              location.pathname.startsWith(item.path + "/");
            return (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
                )}
              >
                <item.icon
                  size={18}
                  className={cn(
                    isActive ? "text-indigo-700" : "text-slate-400",
                  )}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-slate-200 p-4">
        <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 cursor-pointer">
          <LogOut size={18} className="text-slate-400" />
          Logout
        </div>
      </div>
    </div>
  );
}
