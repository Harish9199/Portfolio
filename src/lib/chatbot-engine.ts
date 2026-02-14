import { chatPatterns, defaultResponse } from "@/data/chatbot-knowledge";

export function getChatResponse(message: string): string {
  const lowerMessage = message.toLowerCase().trim();

  if (!lowerMessage || lowerMessage.length < 2) {
    return "Please type a question! I can help with Harish's skills, projects, experience, or contact info.";
  }

  // Find best matching pattern
  let bestMatch = { score: 0, response: defaultResponse };

  for (const pattern of chatPatterns) {
    let score = 0;
    for (const keyword of pattern.keywords) {
      if (lowerMessage.includes(keyword.toLowerCase())) {
        score += keyword.length; // Longer keyword matches score higher
      }
    }
    if (score > bestMatch.score) {
      bestMatch = { score, response: pattern.response };
    }
  }

  return bestMatch.response;
}
