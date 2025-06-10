import React from 'react';
import { User, Search, FileText, Briefcase, Users } from 'lucide-react';

const Sidebar = ({ userRole, currentScreen, setCurrentScreen }) => {
     const userMenuItems = [
    { key: 'userDashboard', label: 'Dashboard', icon: User },
    { key: 'browseJobs', label: 'Browse Jobs', icon: Search },
    { key: 'appliedJobs', label: 'Applied Jobs', icon: FileText }
  ];

  const adminMenuItems = [
    { key: 'adminDashboard', label: 'Dashboard', icon: User },
    { key: 'manageJobs', label: 'Manage Jobs', icon: Briefcase },
    { key: 'viewApplications', label: 'Applications', icon: Users }
  ];

  const menuItems = userRole === 'admin' ? adminMenuItems : userMenuItems;

  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-6">
      <div className="space-y-4">
        {menuItems.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setCurrentScreen(key)}
            className={`w-full flex items-center space-x-3 p-3 rounded-lg transition duration-200 ${
              currentScreen === key ? 'bg-blue-600' : 'hover:bg-gray-700'
            }`}
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;