
'use client';

import { useState } from 'react';
import { getGuidanceAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { JURISDICTIONS } from '@/lib/constants';

export default function GuidancePage() {
  const [legalQuestion, setLegalQuestion] = useState('');
  const [jurisdiction, setJurisdiction] = useState('Arizona');
  const [guidance, setGuidance] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    const result = await getGuidanceAction({ jurisdiction, legalQuestion });
    if (result.success) {
      setGuidance(result.data.guidance);
      setError('');
    } else {
      setError(result.error);
      setGuidance('');
    }
    setIsLoading(false);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      <div className="w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold text-destructive-foreground">Legal Guidance</h1>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <Select onValueChange={setJurisdiction} defaultValue={jurisdiction}>
            <SelectTrigger>
              <SelectValue placeholder="Select a jurisdiction" />
            </SelectTrigger>
            <SelectContent>
              {JURISDICTIONS.map(j => <SelectItem key={j} value={j}>{j}</SelectItem>)}
            </SelectContent>
          </Select>
          <Textarea
            value={legalQuestion}
            onChange={(e) => setLegalQuestion(e.target.value)}
            placeholder="Ask your legal question here"
            className="bg-white"
          />
          <Button type="submit" disabled={isLoading}>{isLoading ? 'Getting Guidance...' : 'Get Guidance'}</Button>
        </form>
        {guidance && <p className="mt-4 text-white">{guidance}</p>}
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </div>
    </div>
  );
}
