export type ToolCategory =
  | 'Crop prediction'
  | 'Livestock prediction'
  | 'Input demand prediction'
  | 'Price movement prediction'
  | 'Yield risk prediction'
  | 'Weather-linked prediction'
  | 'Disease / pest risk prediction';

export type ConfidenceLevel = 'High' | 'Medium' | 'Low';

export interface PredictorTool {
  id: string;
  title: string;
  description: string;
  category: ToolCategory;
  predictionType: string;
  horizon: string;
  confidence: ConfidenceLevel;
  featured: boolean;
  newest: boolean;
  mostUsed?: boolean;
  // Detail page specifics
  inputsUsed: string[];
  predictionOutput: string;
  modelExplanation: string;
  assumptions: string[];
  relatedToolIds: string[];
}
