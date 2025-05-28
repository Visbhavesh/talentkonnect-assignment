
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, User, Award } from 'lucide-react';

const OutreachGenerator = () => {
  const [nomineeId, setNomineeId] = useState('NM_456');
  const [template, setTemplate] = useState(null);
  const [previewData, setPreviewData] = useState({
    firstName: 'Sarah',
    category: 'Technology Innovation',
    trialLink: 'https://talentconnect.pro/trial/start'
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const fetchTemplate = async () => {
    setIsLoading(true);
    try {
      // Mock API call - in real implementation this would be an actual API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockTemplate = {
        subject: "Unlock Semis Today, {{firstName}}!",
        body: "Hi {{firstName}}, as a finalist in {{category}}, skip ahead to the semifinals with TalentKonnect Pro. Start your free 90-day trial here: {{trialLink}}"
      };
      
      setTemplate(mockTemplate);
      console.log(`GET /api/outreach-template?nomineeId=${nomineeId}`, mockTemplate);
      
      toast({
        title: "Template Generated",
        description: "Personalized outreach template ready for use",
      });
    } catch (error) {
      console.error('Failed to fetch template:', error);
      toast({
        title: "Error",
        description: "Failed to generate template",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  const renderTemplate = (text) => {
    if (!text) return '';
    return text
      .replace(/\{\{firstName\}\}/g, previewData.firstName)
      .replace(/\{\{category\}\}/g, previewData.category)
      .replace(/\{\{trialLink\}\}/g, previewData.trialLink);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-teal-600" />
            <span>Personalized Outreach Generator</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="nomineeId">Nominee ID</Label>
            <Input
              id="nomineeId"
              value={nomineeId}
              onChange={(e) => setNomineeId(e.target.value)}
              placeholder="e.g., NM_456"
            />
          </div>
          
          <Button 
            onClick={fetchTemplate}
            disabled={isLoading}
            className="w-full bg-teal-600 hover:bg-teal-700"
          >
            {isLoading ? 'Generating...' : 'Generate Template'}
          </Button>
        </CardContent>
      </Card>

      {template && (
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-gray-600">Template (Raw)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Subject</Label>
                <Input value={template.subject} readOnly />
              </div>
              <div>
                <Label>Body</Label>
                <Textarea value={template.body} readOnly rows={4} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-gray-600">Preview (Rendered)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Subject</Label>
                <div className="p-3 bg-gray-50 rounded-md font-medium">
                  {renderTemplate(template.subject)}
                </div>
              </div>
              <div>
                <Label>Body</Label>
                <div className="p-3 bg-gray-50 rounded-md whitespace-pre-wrap">
                  {renderTemplate(template.body)}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <User className="w-5 h-5 text-teal-600" />
            <span>Preview Data</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              value={previewData.firstName}
              onChange={(e) => setPreviewData({...previewData, firstName: e.target.value})}
            />
          </div>
          <div>
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              value={previewData.category}
              onChange={(e) => setPreviewData({...previewData, category: e.target.value})}
            />
          </div>
          <div>
            <Label htmlFor="trialLink">Trial Link</Label>
            <Input
              id="trialLink"
              value={previewData.trialLink}
              onChange={(e) => setPreviewData({...previewData, trialLink: e.target.value})}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OutreachGenerator;
