export type QuestionType = 'mcq' | 'input' | 'input-sentence';

export interface Question {
  id: number;
  text: string;
  type: QuestionType;
  options?: Record<string, string>;
  answer: string;
  answerAlt?: string; // Alternative correct answer
  highlight?: string; // For pronunciation questions
  prefix?: string; // For sentence transformation prompts
  explanation?: string;
}

export interface SectionContent {
  text: string;
  questions: Question[];
}

export interface Section {
  id: string;
  title: string;
  desc: string;
  questions?: Question[]; // For standard sections
  contentA?: SectionContent; // Specific to Reading section
  contentB?: SectionContent; // Specific to Reading section
}

export interface ExamData {
  sections: Section[];
}

export interface SectionScore {
  id: string;
  label: string;
  correct: number;
  total: number;
  score: number; // percentage
}