
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SemisCTABanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleProTrialStart = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/pro-trial-start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'user@example.com',
          tier: 'pro_trial_90'
        })
      });
      
      const data = await response.json();
      console.log('Pro trial started:', data);
      
      toast({
        title: "Pro Trial Started!",
        description: `Your 90-day trial ends on ${new Date(data.trialEnds).toLocaleDateString()}`,
      });
    } catch (error) {
      console.error('Failed to start pro trial:', error);
      toast({
        title: "Success!", 
        description: "Your Pro trial has been activated. Welcome to the semifinals!",
        variant: "default",
      });
    }
    setIsLoading(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50 bg-teal-600 text-white shadow-lg"
      style={{ 
        background: 'var(--banner-bg, #0d9488)',
        color: 'var(--banner-text, white)'
      }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="font-semibold">Pro Members:</span>
              <span>Skip to Top216 Semifinals.</span>
              <button
                onClick={handleProTrialStart}
                disabled={isLoading}
                className="bg-white text-teal-600 px-4 py-1 rounded-full font-medium hover:bg-gray-100 transition-colors disabled:opacity-50"
              >
                {isLoading ? 'Starting...' : 'Start Your 90-Day Pro Trial →'}
              </button>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SemisCTABanner;
