
import React, { useState } from 'react';
import SemisCTABanner from '@/components/SemisCTABanner';
import Navigation from '@/components/Navigation';
import Overview from '@/components/Overview';
import OutreachGenerator from '@/components/OutreachGenerator';
import ProSignupTracker from '@/components/ProSignupTracker';

const Index = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'banner':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Module GB4-A: "Skip to Semis" CTA Banner
              </h2>
              <p className="text-gray-600 mb-6">
                The banner above demonstrates the fixed-top CTA that promotes Pro trial signups.
                Click the button to test the /api/pro-trial-start endpoint.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3">Banner Features:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Fixed positioning at top of all pages</li>
                <li>CSS variables for brand-consistent styling</li>
                <li>Dismissible with X button</li>
                <li>Loading states during API calls</li>
                <li>Toast notifications for user feedback</li>
                <li>Responsive design for all screen sizes</li>
              </ul>
            </div>
          </div>
        );
      case 'outreach':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Module GB4-B: Personalized Outreach API
              </h2>
              <p className="text-gray-600 mb-6">
                Generate personalized email templates for nominees with dynamic variable substitution.
              </p>
            </div>
            <OutreachGenerator />
          </div>
        );
      case 'tracking':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Module GB4-C: Pro Trial Signup & Tracking
              </h2>
              <p className="text-gray-600 mb-6">
                Track Pro trial signups and monitor conversion metrics in real-time.
              </p>
            </div>
            <ProSignupTracker />
          </div>
        );
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SemisCTABanner />
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>

      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>TalentKonnect Pro Push System - Growth Module 4</p>
          <p className="text-sm mt-2">Implementation of modules GB4-A, GB4-B, and GB4-C</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
