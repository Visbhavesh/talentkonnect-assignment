
import React from 'react';
import { Award, Mail, BarChart3, Home } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const tabs = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'banner', label: 'CTA Banner', icon: Award },
    { id: 'outreach', label: 'Outreach', icon: Mail },
    { id: 'tracking', label: 'Tracking', icon: BarChart3 },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex space-x-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-teal-500 text-teal-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
