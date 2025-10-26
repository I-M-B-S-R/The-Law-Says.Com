import { getLegalGuidance, GetLegalGuidanceInput, GetLegalGuidanceOutput } from './get-legal-guidance';
import { ai } from '@/ai/genkit';

const mockPrompt = jest.fn();

jest.mock('@/ai/genkit', () => ({
  ai: {
    definePrompt: jest.fn(() => mockPrompt),
    defineFlow: jest.fn((config, implementation) => implementation),
  },
}));

describe('getLegalGuidance', () => {
  beforeEach(() => {
    mockPrompt.mockClear();
    (ai.definePrompt as jest.Mock).mockClear();
    (ai.defineFlow as jest.Mock).mockClear();
  });

  it('should return legal guidance for a given jurisdiction and question', async () => {
    const input: GetLegalGuidanceInput = {
      jurisdiction: 'Arizona',
      legalQuestion: 'What are the laws regarding fence height?',
    };
    const expectedOutput: GetLegalGuidanceOutput = {
      guidance: 'In Arizona, fence height regulations can vary by city and county. It is important to check with your local municipality for specific requirements.',
    };

    mockPrompt.mockResolvedValue({ output: expectedOutput });

    const result = await getLegalGuidance(input);

    expect(result).toEqual(expectedOutput);
    expect(mockPrompt).toHaveBeenCalledWith(input);
    expect(ai.definePrompt).toHaveBeenCalled();
    expect(ai.defineFlow).toHaveBeenCalled();
  });
});
