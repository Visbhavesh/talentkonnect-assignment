
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, TrendingUp, Zap } from 'lucide-react';

const Overview = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          TalentKonnect Pro Push
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Growth Module 4: Comprehensive system for promoting Top216 Pro memberships 
          with personalized outreach, seamless trial activation, and conversion tracking.
        </p>
        <div className="flex justify-center space-x-2">
          <Badge variant="secondary" className="bg-teal-100 text-teal-800">
            Module GB4-A
          </Badge>
          <Badge variant="secondary" className="bg-teal-100 text-teal-800">
            Module GB4-B
          </Badge>
          <Badge variant="secondary" className="bg-teal-100 text-teal-800">
            Module GB4-C
          </Badge>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="text-center">
          <CardHeader className="pb-3">
            <Award className="w-8 h-8 mx-auto text-teal-600" />
            <CardTitle className="text-lg">Skip to Semis</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Fixed banner promoting direct semifinal access for Pro members
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader className="pb-3">
            <Users className="w-8 h-8 mx-auto text-teal-600" />
            <CardTitle className="text-lg">Personalized Outreach</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Dynamic email templates with nominee-specific customization
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader className="pb-3">
            <TrendingUp className="w-8 h-8 mx-auto text-teal-600" />
            <CardTitle className="text-lg">Conversion Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Real-time metrics on email sends, signups, and conversion rates
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader className="pb-3">
            <Zap className="w-8 h-8 mx-auto text-teal-600" />
            <CardTitle className="text-lg">90-Day Trial</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Seamless pro trial activation with automatic benefits unlock
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Implementation Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Module GB4-A: "Skip to Semis" CTA Banner</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>Fixed-top banner visible on all Top216 pages</li>
              <li>CSS variables for consistent brand styling</li>
              <li>POST /api/pro-trial-start endpoint integration</li>
              <li>Dismissible with session persistence</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Module GB4-B: Personalized Outreach API</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>GET /api/outreach-template with nominee-specific content</li>
              <li>Template variable substitution (firstName, category, trialLink)</li>
              <li>Real-time preview with dynamic data binding</li>
              <li>Structured JSON response format</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Module GB4-C: Pro Trial Signup & Tracking</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>POST /api/pro-signup for conversion tracking</li>
              <li>GET /api/pro-push-metrics for performance analytics</li>
              <li>Real-time conversion rate calculations</li>
              <li>Comprehensive signup ID generation and status tracking</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-teal-50 to-blue-50 border-teal-200">
        <CardHeader>
          <CardTitle className="text-teal-800">API Endpoints Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4 text-sm font-mono">
            <div className="space-y-2">
              <div className="font-semibold text-teal-700">POST Endpoints</div>
              <div className="bg-white p-2 rounded border">/api/pro-trial-start</div>
              <div className="bg-white p-2 rounded border">/api/pro-signup</div>
            </div>
            <div className="space-y-2">
              <div className="font-semibold text-teal-700">GET Endpoints</div>
              <div className="bg-white p-2 rounded border">/api/outreach-template</div>
              <div className="bg-white p-2 rounded border">/api/pro-push-metrics</div>
            </div>
            <div className="space-y-2">
              <div className="font-semibold text-teal-700">Features</div>
              <div className="bg-white p-2 rounded border">Template Variables</div>
              <div className="bg-white p-2 rounded border">Conversion Tracking</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Overview;
