import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DashboardLayoutProps {
  children: React.ReactNode;
  userType: "business" | "user";
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  userType,
}) => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const userMenuItems = [
    { name: "Dashboard", path: "/" },
    { name: "My XP", path: "/xp" },
    { name: "Rewards", path: "/rewards" },
    { name: "Leaderboard", path: "/leaderboard" },
    { name: "Activities", path: "/activities" },
    { name: "Profile", path: "/profile" },
  ];

  const businessMenuItems = [
    { name: "Dashboard", path: "/business" },
    { name: "Analytics", path: "/business/analytics" },
    { name: "User Management", path: "/business/users" },
    { name: "Rewards", path: "/business/rewards" },
    { name: "Settings", path: "/business/settings" },
  ];

  const menuItems = userType === "business" ? businessMenuItems : userMenuItems;

  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-4 shadow-lg">
        <div className="flex flex-col h-full">
          {/* Logo and Title */}
          <div className="mb-8">
            <h1 className="text-xl font-bold text-white">Gami Protocol</h1>
            <p className="text-sm text-gray-400">
              {userType === "business"
                ? "Business Dashboard"
                : "User Dashboard"}
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`flex items-center px-4 py-2 rounded transition-colors ${
                      isActive(item.path)
                        ? "bg-purple-600 text-white"
                        : "text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom Section */}
          <div className="mt-auto pt-4 border-t border-gray-700">
            {userType === "business" ? (
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700 rounded transition-colors">
                  Support
                </button>
                <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700 rounded transition-colors">
                  Documentation
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700 rounded transition-colors">
                  Help Center
                </button>
                <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700 rounded transition-colors">
                  Community
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">{children}</div>
    </div>
  );
};
