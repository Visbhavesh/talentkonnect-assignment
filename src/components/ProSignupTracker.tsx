
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { UserPlus, TrendingUp, Mail, Users } from 'lucide-react';

const ProSignupTracker = () => {
  const [signupData, setSignupData] = useState({
    email: 'user@example.com',
    nomineeId: 'NM_456'
  });
  const [metrics, setMetrics] = useState(null);
  const [lastSignup, setLastSignup] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleProSignup = async () => {
    setIsLoading(true);
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockResponse = {
        signupId: `SGN_${Math.floor(Math.random() * 1000)}`,
        status: 'pending'
      };
      
      setLastSignup(mockResponse);
      console.log('POST /api/pro-signup', signupData, '→', mockResponse);
      
      toast({
        title: "Signup Recorded!",
        description: `Signup ID: ${mockResponse.signupId}`,
      });
      
      // Refresh metrics after signup
      fetchMetrics();
    } catch (error) {
      console.error('Failed to record signup:', error);
      toast({
        title: "Error",
        description: "Failed to record signup",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  const fetchMetrics = async () => {
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const mockMetrics = {
        emailsSent: Math.floor(Math.random() * 500) + 200,
        signups: Math.floor(Math.random() * 100) + 45,
        conversionRate: 0
      };
      mockMetrics.conversionRate = ((mockMetrics.signups / mockMetrics.emailsSent) * 100);
      
      setMetrics(mockMetrics);
      console.log('GET /api/pro-push-metrics', mockMetrics);
    } catch (error) {
      console.error('Failed to fetch metrics:', error);
    }
  };

  React.useEffect(() => {
    fetchMetrics();
  }, []);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <UserPlus className="w-5 h-5 text-teal-600" />
            <span>Pro Trial Signup</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={signupData.email}
                onChange={(e) => setSignupData({...signupData, email: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="nomineeId">Nominee ID</Label>
              <Input
                id="nomineeId"
                value={signupData.nomineeId}
                onChange={(e) => setSignupData({...signupData, nomineeId: e.target.value})}
              />
            </div>
          </div>
          
          <Button 
            onClick={handleProSignup}
            disabled={isLoading}
            className="w-full bg-teal-600 hover:bg-teal-700"
          >
            {isLoading ? 'Recording...' : 'Record Pro Signup'}
          </Button>

          {lastSignup && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-medium text-green-800">Last Signup Recorded</h4>
              <p className="text-sm text-green-600">
                ID: {lastSignup.signupId} | Status: {lastSignup.status}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {metrics && (
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>Emails Sent</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-teal-600">{metrics.emailsSent}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Signups</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-teal-600">{metrics.signups}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center space-x-2">
                <TrendingUp className="w-4 h-4" />
                <span>Conversion Rate</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-teal-600">{metrics.conversionRate.toFixed(1)}%</div>
            </CardContent>
          </Card>
        </div>
      )}

      <Card>
        <CardHeader>
          <CardTitle>API Endpoints</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm font-mono">
            <div className="p-2 bg-gray-100 rounded">
              POST /api/pro-signup
            </div>
            <div className="p-2 bg-gray-100 rounded">
              GET /api/pro-push-metrics
            </div>
            <Button 
              onClick={fetchMetrics}
              variant="outline"
              size="sm"
              className="mt-2"
            >
              Refresh Metrics
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProSignupTracker;
