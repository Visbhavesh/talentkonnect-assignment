
import React from 'react';
import { Award, Mail, BarChart3, Users, TrendingUp, Target } from 'lucide-react';

const Overview = () => {
  const modules = [
    {
      id: 'GB4-A',
      title: 'Skip to Semis CTA Banner',
      description: 'Fixed-top banner promoting Pro trial signups with CSS variables for brand consistency',
      icon: Award,
      features: [
        'Fixed positioning across all pages',
        'Brand-consistent styling with CSS variables',
        'Dismissible with smooth animations',
        'Loading states and error handling',
        'Responsive design for all devices'
      ],
      status: 'Live'
    },
    {
      id: 'GB4-B',
      title: 'Personalized Outreach API',
      description: 'Dynamic email template generation with variable substitution for targeted nominee outreach',
      icon: Mail,
      features: [
        'Template generation with dynamic variables',
        'Support for firstName, category, trialLink substitution',
        'RESTful API endpoint structure',
        'Real-time preview functionality',
        'Customizable email templates'
      ],
      status: 'Live'
    },
    {
      id: 'GB4-C',
      title: 'Pro Trial Signup & Tracking',
      description: 'Comprehensive tracking system for Pro trial conversions and metrics analysis',
      icon: BarChart3,
      features: [
        'Real-time signup tracking',
        'Conversion rate analytics',
        'Metrics dashboard with live data',
        'Export capabilities for reporting',
        'Performance monitoring'
      ],
      status: 'Live'
    }
  ];

  const stats = [
    { label: 'Total Signups', value: '1,247', icon: Users, trend: '+12%' },
    { label: 'Conversion Rate', value: '24.3%', icon: TrendingUp, trend: '+3.2%' },
    { label: 'Active Trials', value: '892', icon: Target, trend: '+18%' },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          TalentKonnect Pro Push Dashboard
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Growth Module 4 implementation featuring automated CTA banners, personalized outreach campaigns, 
          and comprehensive conversion tracking for Top216 Pro membership promotions.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon className="w-8 h-8 text-teal-600" />
                  <span className="text-sm font-medium text-green-600">{stat.trend}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Module Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {modules.map((module) => {
          const Icon = module.icon;
          return (
            <div key={module.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{module.title}</h3>
                    <p className="text-sm text-gray-500">{module.id}</p>
                  </div>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                  {module.status}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4 text-sm">{module.description}</p>
              
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900 text-sm">Key Features:</h4>
                <ul className="space-y-1">
                  {module.features.map((feature, index) => (
                    <li key={index} className="text-xs text-gray-600 flex items-center">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* System Architecture */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">System Architecture</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Frontend Components</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• React 18 with TypeScript for type safety</li>
              <li>• Tailwind CSS for responsive styling</li>
              <li>• Shadcn/UI components for consistent design</li>
              <li>• React Query for state management</li>
              <li>• Custom hooks for business logic</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-3">API Endpoints</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• POST /api/pro-trial-start - Initialize Pro trials</li>
              <li>• GET /api/outreach-template - Generate email templates</li>
              <li>• POST /api/pro-signup - Track signup conversions</li>
              <li>• GET /api/pro-push-metrics - Analytics dashboard</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Development Info */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Development Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Environment:</strong> Production Ready
            </p>
            <p className="text-sm text-gray-600">
              <strong>Performance:</strong> Optimized for scale
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Browser Support:</strong> Modern browsers (ES2020+)
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Mobile:</strong> Fully responsive design
            </p>
            <p className="text-sm text-gray-600">
              <strong>Accessibility:</strong> WCAG 2.1 compliant
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
