import React, { useState, useEffect, useCallback } from 'react';
import { examData } from './data';
import { QuestionCard } from './components/QuestionCard';
import { Results } from './components/Results';
import { SectionScore, Section, Question } from './types';
import { Timer, CheckCircle2, AlertCircle } from 'lucide-react';

const App: React.FC = () => {
  const [currentTabId, setCurrentTabId] = useState<string>(examData.sections[0].id);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(3600); // 60 minutes
  const [showResults, setShowResults] = useState<boolean>(false);

  // Timer Logic
  useEffect(() => {
    if (isSubmitted) return;
    
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isSubmitted]);

  // Format Time
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleAnswer = (questionId: number, value: string) => {
    if (isSubmitted) return;
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateResults = (): SectionScore[] => {
    return examData.sections.map(section => {
      let questions: Question[] = [];
      if (section.id === 'reading') {
        if (section.contentA) questions = [...questions, ...section.contentA.questions];
        if (section.contentB) questions = [...questions, ...section.contentB.questions];
      } else {
        questions = section.questions || [];
      }

      let correctCount = 0;
      questions.forEach(q => {
        const userAns = (answers[q.id] || '').toLowerCase().replace(/\s+/g, ' ').trim();
        const correctAns = q.answer.toLowerCase().trim();
        const correctAlt = q.answerAlt ? q.answerAlt.toLowerCase().trim() : null;
        
        if ((userAns === correctAns) || (correctAlt && userAns === correctAlt)) {
          correctCount++;
        }
      });

      return {
        id: section.id,
        label: section.title.split('. ')[1] || section.title,
        correct: correctCount,
        total: questions.length,
        score: questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0
      };
    });
  };

  const handleSubmit = () => {
    if (isSubmitted) return;
    if (timeLeft > 0 && !window.confirm("Bạn có chắc chắn muốn nộp bài?")) return;
    setIsSubmitted(true);
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestart = () => {
    if (window.confirm("Làm lại bài thi sẽ xóa hết kết quả hiện tại. Bạn có chắc không?")) {
      setAnswers({});
      setIsSubmitted(false);
      setTimeLeft(3600);
      setShowResults(false);
      setCurrentTabId(examData.sections[0].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Renderers for Reading Section Layout
  const renderReadingSection = (section: Section) => (
    <>
      {/* Part A: Guided Cloze */}
      {section.contentA && (
        <div className="mb-10">
           <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-blue-50/80 p-6 rounded-xl border border-blue-100 text-stone-700 leading-loose h-fit lg:sticky lg:top-24">
                <h4 className="font-bold text-blue-800 mb-3 border-b border-blue-200 pb-2">Part A: Guided Cloze</h4>
                <div dangerouslySetInnerHTML={{
                  __html: section.contentA.text.replace(/\(\d+\)______/g, (match) => 
                    `<span class="bg-white px-2 py-0.5 rounded border border-blue-200 font-bold text-blue-600 mx-1 shadow-sm text-sm">${match}</span>`
                  )
                }} />
              </div>
              <div className="space-y-4">
                {section.contentA.questions.map(q => (
                  <QuestionCard 
                    key={q.id} 
                    question={q} 
                    userAnswer={answers[q.id]}
                    isSubmitted={isSubmitted}
                    onAnswer={handleAnswer}
                  />
                ))}
              </div>
           </div>
        </div>
      )}
      
      {/* Part B: Reading Comprehension */}
      {section.contentB && (
        <div>
           <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-emerald-50/80 p-6 rounded-xl border border-emerald-100 text-stone-700 leading-loose h-fit lg:sticky lg:top-24">
                <h4 className="font-bold text-emerald-800 mb-3 border-b border-emerald-200 pb-2">Part B: Reading Comprehension</h4>
                <div>{section.contentB.text}</div>
              </div>
              <div className="space-y-4">
                {section.contentB.questions.map(q => (
                  <QuestionCard 
                    key={q.id} 
                    question={q} 
                    userAnswer={answers[q.id]}
                    isSubmitted={isSubmitted}
                    onAnswer={handleAnswer}
                  />
                ))}
              </div>
           </div>
        </div>
      )}
    </>
  );

  const renderStandardSection = (section: Section) => (
    <div className="space-y-6">
      {section.questions?.map(q => (
         <QuestionCard 
           key={q.id} 
           question={q} 
           userAnswer={answers[q.id]}
           isSubmitted={isSubmitted}
           onAnswer={handleAnswer}
         />
      ))}
    </div>
  );

  // Calculate stats for passing to Results
  const sectionScores = calculateResults();
  const totalCorrect = sectionScores.reduce((acc, curr) => acc + curr.correct, 0);
  const totalQuestions = sectionScores.reduce((acc, curr) => acc + curr.total, 0);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans">
      
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-stone-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-blue-800">Luyện Thi Tiếng Anh Vào 10</h1>
            <div className="flex items-center text-sm text-stone-500 gap-4 mt-1">
               <span className="flex items-center gap-1"><AlertCircle size={14} /> 50 Câu Hỏi Tổng Hợp</span>
               <span className={`flex items-center gap-1 font-mono font-bold text-lg ${timeLeft < 300 ? 'text-red-600 animate-pulse' : 'text-blue-600'}`}>
                 <Timer size={16} /> {formatTime(timeLeft)}
               </span>
            </div>
          </div>
          
          <div className="flex gap-3 w-full md:w-auto">
             {!isSubmitted && (
               <button 
                onClick={() => handleSubmit()}
                className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <CheckCircle2 size={18} /> Nộp Bài
              </button>
             )}
          </div>
        </div>

        {/* Navigation Tabs (Only visible if not viewing results) */}
        {!showResults && (
          <div className="container mx-auto px-4 mt-2 overflow-x-auto no-scrollbar">
            <nav className="flex space-x-6 min-w-max border-b border-stone-100">
              {examData.sections.map(sec => (
                <button
                  key={sec.id}
                  onClick={() => setCurrentTabId(sec.id)}
                  className={`pb-3 px-1 text-sm md:text-base font-medium transition-colors whitespace-nowrap relative
                    ${currentTabId === sec.id ? 'text-blue-600' : 'text-stone-500 hover:text-stone-800'}
                  `}
                >
                  {sec.title}
                  {currentTabId === sec.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-t-full"></span>
                  )}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 max-w-5xl">
        
        {/* Intro Box */}
        {!showResults && (
           <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border-l-4 border-blue-500 animate-in fade-in slide-in-from-top-4 duration-500">
              <h2 className="text-lg font-bold text-stone-800 mb-2">Hướng Dẫn Làm Bài</h2>
              <p className="text-stone-600 leading-relaxed text-sm md:text-base">
                  Chào mừng bạn đến với bài thi thử tổng hợp. Hệ thống bài tập bao gồm 6 phần chính: 
                  <strong> Ngữ âm, Ngữ pháp, Tìm lỗi sai, Cấu tạo từ, Đọc hiểu</strong> và <strong>Viết lại câu</strong>. 
                  Bạn có thể làm bài theo thứ tự bất kỳ. Hãy nhấn "Nộp Bài" khi hoàn thành.
              </p>
          </div>
        )}

        {/* Quiz View */}
        {!showResults ? (
          <div className="animate-in fade-in duration-300">
            {examData.sections.map(section => (
              <div key={section.id} className={currentTabId === section.id ? 'block' : 'hidden'}>
                 <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
                    <div className="bg-stone-50 px-6 py-4 border-b border-stone-200">
                      <h3 className="font-bold text-lg text-stone-800">{section.title}</h3>
                      <p className="text-stone-500 text-sm">{section.desc}</p>
                    </div>
                    <div className="p-4 md:p-8">
                       {section.id === 'reading' 
                          ? renderReadingSection(section) 
                          : renderStandardSection(section)
                       }
                    </div>
                 </div>
              </div>
            ))}
          </div>
        ) : (
          <Results 
             totalScore={totalCorrect} 
             maxScore={totalQuestions} 
             sectionScores={sectionScores}
             onRestart={handleRestart}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-stone-100 border-t border-stone-200 py-6 mt-auto">
        <div className="container mx-auto px-4 text-center text-stone-500 text-sm">
          <p>© 2024 English Grade 10 Entrance Exam Practice.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;