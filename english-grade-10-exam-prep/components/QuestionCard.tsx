import React from 'react';
import { Question } from '../types';
import { Check, X } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  userAnswer?: string;
  isSubmitted: boolean;
  onAnswer: (qId: number, value: string) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, userAnswer, isSubmitted, onAnswer }) => {
  const isCorrect = React.useMemo(() => {
    if (!isSubmitted) return false;
    const standardUser = (userAnswer || '').toLowerCase().replace(/\s+/g, ' ').trim();
    const standardKey = question.answer.toLowerCase().trim();
    const standardAlt = question.answerAlt ? question.answerAlt.toLowerCase().trim() : null;
    return (standardUser === standardKey) || (standardAlt !== null && standardUser === standardAlt);
  }, [userAnswer, question.answer, question.answerAlt, isSubmitted]);

  return (
    <div className={`p-4 rounded-xl border transition-colors duration-200 bg-white shadow-sm ${
      isSubmitted 
        ? isCorrect 
          ? 'border-green-200 bg-green-50/30' 
          : 'border-red-200 bg-red-50/30' 
        : 'border-stone-200 hover:border-blue-200'
    }`}>
      <div className="mb-3 font-medium text-stone-800">
        <span className="inline-block bg-stone-100 text-stone-600 text-xs px-2 py-1 rounded mr-2 font-bold">
          Q{question.id}
        </span>
        <span dangerouslySetInnerHTML={{ __html: question.text }} />
      </div>

      {/* MCQ Renderer */}
      {question.type === 'mcq' && question.options && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {Object.entries(question.options).map(([key, val]) => (
            <label 
              key={key} 
              className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all relative group
                ${userAnswer === key ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500' : 'border-stone-200 hover:bg-stone-50'}
                ${isSubmitted && question.answer === key ? 'bg-green-100 border-green-500' : ''}
                ${isSubmitted && userAnswer === key && userAnswer !== question.answer ? 'bg-red-100 border-red-500' : ''}
              `}
            >
              <input 
                type="radio" 
                name={`q${question.id}`} 
                value={key} 
                checked={userAnswer === key}
                disabled={isSubmitted}
                onChange={() => onAnswer(question.id, key)}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500 disabled:cursor-not-allowed" 
              />
              <span className="ml-2 text-stone-700">
                <span className="font-bold text-stone-400 mr-1">{key}.</span> {val}
              </span>
            </label>
          ))}
        </div>
      )}

      {/* Word Form Renderer */}
      {question.type === 'input' && (
        <div className="max-w-md">
           <input 
              type="text" 
              value={userAnswer || ''}
              disabled={isSubmitted}
              onChange={(e) => onAnswer(question.id, e.target.value)}
              placeholder="Type your answer..."
              className={`w-full p-2 border rounded-lg outline-none transition-all
                ${isSubmitted 
                  ? isCorrect 
                    ? 'border-green-500 bg-white text-green-700 font-medium' 
                    : 'border-red-500 bg-white text-red-700' 
                  : 'border-stone-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'}
              `}
            />
        </div>
      )}

      {/* Sentence Transformation Renderer */}
      {question.type === 'input-sentence' && (
        <div className="flex items-center flex-wrap gap-2">
           <span className="text-stone-500 font-serif italic whitespace-nowrap">{question.prefix}</span>
           <input 
              type="text" 
              value={userAnswer || ''}
              disabled={isSubmitted}
              onChange={(e) => onAnswer(question.id, e.target.value)}
              placeholder="..."
              className={`flex-grow min-w-[200px] p-2 border rounded-lg outline-none transition-all
                ${isSubmitted 
                  ? isCorrect 
                    ? 'border-green-500 bg-white text-green-700 font-medium' 
                    : 'border-red-500 bg-white text-red-700' 
                  : 'border-stone-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'}
              `}
            />
        </div>
      )}

      {/* Feedback Section (Visible only after submission) */}
      {isSubmitted && (
        <div className="mt-3 text-sm animate-in fade-in duration-300">
          {!isCorrect && (
            <div className="text-blue-700 bg-blue-50 p-2 rounded flex items-start gap-2">
              <span className="font-bold">Đáp án đúng:</span> 
              <span>
                {question.prefix ? `${question.prefix} ` : ''}
                {question.answer} 
                {question.type === 'mcq' && question.options ? `. ${question.options[question.answer]}` : ''}
              </span>
              {question.explanation && <span className="block mt-1 text-stone-600 italic">({question.explanation})</span>}
            </div>
          )}
          {isCorrect && (
             <div className="text-green-700 flex items-center gap-1 font-medium">
               <Check size={16} /> Chính xác
             </div>
          )}
        </div>
      )}
    </div>
  );
};