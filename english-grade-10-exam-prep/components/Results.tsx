import React from 'react';
import { SectionScore } from '../types';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { RotateCcw } from 'lucide-react';

interface ResultsProps {
  totalScore: number;
  maxScore: number;
  sectionScores: SectionScore[];
  onRestart: () => void;
}

export const Results: React.FC<ResultsProps> = ({ totalScore, maxScore, sectionScores, onRestart }) => {
  const percentage = Math.round((totalScore / maxScore) * 100);
  
  const getMessage = (score: number) => {
    if (score >= 45) return "Xuất sắc! Bạn đã nắm rất chắc kiến thức.";
    if (score >= 35) return "Khá tốt! Hãy ôn lại một số phần chưa chắc chắn.";
    if (score >= 25) return "Trung bình. Bạn cần nỗ lực nhiều hơn.";
    return "Kết quả thấp. Hãy ôn tập lại từ cơ bản nhé.";
  };

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom duration-500">
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100 text-center">
        <h2 className="text-3xl font-bold text-stone-800 mb-2">Kết Quả Bài Thi</h2>
        <div className="flex justify-center items-end gap-2 mb-4">
            <span className="text-6xl font-bold text-blue-600">{totalScore}</span>
            <span className="text-2xl text-stone-400 mb-2">/ {maxScore}</span>
        </div>
        <div className="inline-block px-4 py-2 bg-blue-50 text-blue-800 rounded-full font-medium mb-4">
            {percentage}% Chính xác
        </div>
        <p className="text-stone-500 text-lg">{getMessage(totalScore)}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100">
          <h3 className="text-lg font-bold mb-6 text-stone-700 border-b pb-2">Phân Tích Kỹ Năng</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={sectionScores}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="label" tick={{ fill: '#4b5563', fontSize: 12, fontWeight: 500 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Tỷ lệ đúng (%)"
                  dataKey="score"
                  stroke="#2563eb"
                  strokeWidth={2}
                  fill="#3b82f6"
                  fillOpacity={0.3}
                />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-stone-500 mt-4 italic text-center">
            Biểu đồ thể hiện mức độ thành thạo của bạn ở từng dạng bài.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100">
          <h3 className="text-lg font-bold mb-6 text-stone-700 border-b pb-2">Chi Tiết Từng Phần</h3>
          <div className="space-y-4">
            {sectionScores.map((sec) => (
              <div key={sec.id} className="flex items-center justify-between p-3 rounded-lg bg-stone-50">
                <span className="font-medium text-stone-700">{sec.label}</span>
                <div className="flex items-center gap-3">
                  <div className="w-24 bg-stone-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${sec.score >= 80 ? 'bg-green-500' : sec.score >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`} 
                      style={{ width: `${sec.score}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-bold text-stone-600 w-12 text-right">{sec.correct}/{sec.total}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center pb-12">
        <button 
          onClick={onRestart} 
          className="bg-stone-800 hover:bg-stone-900 text-white px-8 py-3 rounded-xl font-medium transition-colors shadow-lg flex items-center gap-2 mx-auto"
        >
          <RotateCcw size={20} />
          Làm Lại Bài Thi
        </button>
      </div>
    </div>
  );
};