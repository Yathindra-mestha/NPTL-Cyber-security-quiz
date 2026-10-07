import { useState, useMemo } from 'react';
import { questions } from './data/questions';
import type { Question } from './data/questions';

type Screen = 'start' | 'quiz' | 'result';
type Answers = Record<number, string[]>;
type ReviewFilter = 'all' | 'correct' | 'wrong' | 'unanswered';

export default function App() {
  const [screen, setScreen] = useState<Screen>('start');
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answers>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showConfirm, setShowConfirm] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<ReviewFilter>('all');

  const startTest = (mode: 'week1' | 'week2' | 'week3' | 'week4' | 'week5' | 'week6' | 'full' | 'wrong') => {
    let selected: Question[] = [];
    if (mode === 'week1') selected = questions.filter(q => q.week === 1);
    if (mode === 'week2') selected = questions.filter(q => q.week === 2);
    if (mode === 'week3') selected = questions.filter(q => q.week === 3);
    if (mode === 'week4') selected = questions.filter(q => q.week === 4);
    if (mode === 'week5') selected = questions.filter(q => q.week === 5);
    if (mode === 'week6') selected = questions.filter(q => q.week === 6);
    if (mode === 'full') selected = [...questions];
    if (mode === 'wrong') {
      const wrongIds = quizQuestions.filter(q => getStatus(q, answers) === 'wrong').map(q => q.id);
      selected = questions.filter(q => wrongIds.includes(q.id));
    }
    
    setQuizQuestions(selected);
    setAnswers({});
    setCurrentIndex(0);
    setScreen('quiz');
    setShowConfirm(false);
    setReviewFilter('all');
  };

  const getStatus = (question: Question, currentAnswers: Answers) => {
    const uAns = currentAnswers[question.id] || [];
    const cAns = question.correctAnswer;
    if (uAns.length === 0) return 'unanswered';
    
    if (question.type === 'multiple') {
      if (uAns.length !== cAns.length) return 'wrong';
      const isAllCorrect = cAns.every(c => uAns.includes(c));
      return isAllCorrect ? 'correct' : 'wrong';
    } else {
      return uAns[0] === cAns[0] ? 'correct' : 'wrong';
    }
  };

  const handleOptionToggle = (qId: number, option: string, isMulti: boolean) => {
    setAnswers(prev => {
      const current = prev[qId] || [];
      if (isMulti) {
        if (current.includes(option)) {
          return { ...prev, [qId]: current.filter(o => o !== option) };
        } else {
          return { ...prev, [qId]: [...current, option] };
        }
      } else {
        return { ...prev, [qId]: [option] };
      }
    });
  };

  const answeredCount = Object.keys(answers).filter(k => answers[Number(k)]?.length > 0).length;

  const handleSubmit = () => {
    setShowConfirm(false);
    setScreen('result');
  };

  const resultStats = useMemo(() => {
    let correct = 0, wrong = 0, unanswered = 0;
    quizQuestions.forEach(q => {
      const status = getStatus(q, answers);
      if (status === 'correct') correct++;
      else if (status === 'wrong') wrong++;
      else unanswered++;
    });
    return { correct, wrong, unanswered, total: quizQuestions.length };
  }, [quizQuestions, answers]);

  const percentage = resultStats.total > 0 ? Math.round((resultStats.correct / resultStats.total) * 100) : 0;

  return (
    <div className="min-h-screen bg-navy-900 text-white font-sans p-4 md:p-8">
      {screen === 'start' && (
        <div className="max-w-3xl mx-auto text-center mt-12 space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-accent mb-2">NPTEL Cyber Security</h1>
          <h2 className="text-2xl text-gray-300 mb-8">Practice Tests</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <button className="card hover:border-cyan-accent transition-colors flex flex-col items-center justify-center p-8 space-y-2 group cursor-pointer" onClick={() => startTest('week1')}>
              <span className="text-xl font-semibold group-hover:text-cyan-accent transition-colors">Week 1 Practice</span>
              <span className="text-sm text-gray-400">10 Questions</span>
            </button>
            <button className="card hover:border-cyan-accent transition-colors flex flex-col items-center justify-center p-8 space-y-2 group cursor-pointer" onClick={() => startTest('week2')}>
              <span className="text-xl font-semibold group-hover:text-cyan-accent transition-colors">Week 2 Practice</span>
              <span className="text-sm text-gray-400">10 Questions</span>
            </button>
            <button className="card hover:border-cyan-accent transition-colors flex flex-col items-center justify-center p-8 space-y-2 group cursor-pointer" onClick={() => startTest('week3')}>
              <span className="text-xl font-semibold group-hover:text-cyan-accent transition-colors">Week 3 Practice</span>
              <span className="text-sm text-gray-400">10 Questions</span>
            </button>
            <button className="card hover:border-cyan-accent transition-colors flex flex-col items-center justify-center p-8 space-y-2 group cursor-pointer" onClick={() => startTest('week4')}>
              <span className="text-xl font-semibold group-hover:text-cyan-accent transition-colors">Week 4 Practice</span>
              <span className="text-sm text-gray-400">10 Questions</span>
            </button>
            <button className="card hover:border-cyan-accent transition-colors flex flex-col items-center justify-center p-8 space-y-2 group cursor-pointer" onClick={() => startTest('week5')}>
              <span className="text-xl font-semibold group-hover:text-cyan-accent transition-colors">Week 5 Practice</span>
              <span className="text-sm text-gray-400">10 Questions</span>
            </button>
            <button className="card hover:border-cyan-accent transition-colors flex flex-col items-center justify-center p-8 space-y-2 group cursor-pointer" onClick={() => startTest('week6')}>
              <span className="text-xl font-semibold group-hover:text-cyan-accent transition-colors">Week 6 Practice</span>
              <span className="text-sm text-gray-400">10 Questions</span>
            </button>
            <button className="card hover:border-cyan-accent transition-colors flex flex-col items-center justify-center p-8 space-y-2 group md:col-span-2 bg-navy-800 cursor-pointer" onClick={() => startTest('full')}>
              <span className="text-xl font-semibold group-hover:text-cyan-accent transition-colors">Full Week 1–6 Test</span>
              <span className="text-sm text-gray-400">60 Questions</span>
            </button>
          </div>
        </div>
      )}

      {screen === 'quiz' && quizQuestions.length > 0 && (
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex justify-between items-end mb-2">
            <div>
              <h2 className="text-xl font-semibold text-gray-300">Practice Test</h2>
              <p className="text-cyan-accent font-medium">Question {currentIndex + 1} of {quizQuestions.length}</p>
            </div>
            <div className="text-sm text-gray-400">Answered: {answeredCount} / {quizQuestions.length}</div>
          </div>
          
          <div className="w-full bg-navy-700 h-2 rounded-full overflow-hidden">
            <div className="bg-cyan-accent h-full transition-all duration-300" style={{ width: `${((currentIndex) / quizQuestions.length) * 100}%` }}></div>
          </div>

          <div className="card min-h-[300px]">
            <h3 className="text-lg md:text-xl font-medium mb-6 leading-relaxed whitespace-pre-wrap">{quizQuestions[currentIndex].question}</h3>
            <div className="space-y-3">
              {quizQuestions[currentIndex].options.map((opt, i) => {
                const qId = quizQuestions[currentIndex].id;
                const isMulti = quizQuestions[currentIndex].type === 'multiple';
                const isSelected = (answers[qId] || []).includes(opt);
                
                return (
                  <label key={i} className={`flex items-start p-4 rounded-lg border cursor-pointer transition-colors duration-200 ${isSelected ? 'border-cyan-accent bg-navy-700' : 'border-navy-600 hover:bg-navy-700'}`}>
                    <input 
                      type={isMulti ? "checkbox" : "radio"} 
                      name={`q-${qId}`}
                      checked={isSelected}
                      onChange={() => handleOptionToggle(qId, opt, isMulti)}
                      className="mt-1 mr-4 w-5 h-5 accent-cyan-accent flex-shrink-0"
                    />
                    <span className="text-gray-200">{opt}</span>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button 
              className="btn-secondary px-8" 
              disabled={currentIndex === 0} 
              onClick={() => setCurrentIndex(c => c - 1)}
            >
              Previous
            </button>
            {currentIndex === quizQuestions.length - 1 ? (
              <button className="btn-primary bg-emerald-600 hover:bg-emerald-700 px-8" onClick={() => setShowConfirm(true)}>
                SUBMIT TEST
              </button>
            ) : (
              <button className="btn-primary px-8" onClick={() => setCurrentIndex(c => c + 1)}>
                Next
              </button>
            )}
          </div>

          <div className="card mt-8 p-6">
            <h4 className="text-sm text-gray-400 mb-4 uppercase tracking-wider">Question Navigator</h4>
            <div className="flex flex-wrap gap-2">
              {quizQuestions.map((q, idx) => {
                const isAns = (answers[q.id] || []).length > 0;
                const isCurrent = idx === currentIndex;
                
                let btnClass = "nav-btn ";
                if (isCurrent) btnClass += "ring-2 ring-cyan-accent ring-offset-2 ring-offset-navy-900 ";
                
                if (isAns) {
                  btnClass += "bg-cyan-accent text-white";
                } else {
                  btnClass += "bg-navy-700 text-gray-300 hover:bg-navy-600";
                }
                
                return (
                  <button key={idx} className={btnClass} onClick={() => setCurrentIndex(idx)}>
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {showConfirm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="card max-w-md w-full p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Submit Test?</h3>
            <p className="text-gray-300 mb-8">You answered {answeredCount} of {quizQuestions.length} questions.</p>
            <div className="flex justify-center gap-4">
              <button className="btn-secondary" onClick={() => setShowConfirm(false)}>Cancel</button>
              <button className="btn-primary bg-emerald-600 hover:bg-emerald-700" onClick={handleSubmit}>Submit Test</button>
            </div>
          </div>
        </div>
      )}

      {screen === 'result' && (
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="card text-center py-10 px-4 space-y-6">
            <h2 className="text-3xl font-bold tracking-wider text-gray-100">TEST COMPLETED</h2>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 my-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-cyan-accent mb-2">{resultStats.correct} <span className="text-3xl text-gray-500">/ {resultStats.total}</span></div>
                <div className="text-gray-400 uppercase tracking-widest text-sm">Score</div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-emerald-400 mb-2">{percentage}%</div>
                <div className="text-gray-400 uppercase tracking-widest text-sm">Percentage</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base font-medium">
              <div className="bg-navy-900 px-6 py-3 rounded-lg border border-navy-700 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                Correct: {resultStats.correct}
              </div>
              <div className="bg-navy-900 px-6 py-3 rounded-lg border border-navy-700 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                Wrong: {resultStats.wrong}
              </div>
              <div className="bg-navy-900 px-6 py-3 rounded-lg border border-navy-700 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-gray-500"></span>
                Unanswered: {resultStats.unanswered}
              </div>
            </div>

            <div className="w-full max-w-2xl mx-auto bg-navy-700 h-4 rounded-full overflow-hidden flex">
              <div className="bg-emerald-500 h-full" style={{ width: `${(resultStats.correct / resultStats.total) * 100}%` }}></div>
              <div className="bg-red-500 h-full" style={{ width: `${(resultStats.wrong / resultStats.total) * 100}%` }}></div>
              <div className="bg-gray-500 h-full" style={{ width: `${(resultStats.unanswered / resultStats.total) * 100}%` }}></div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8 pt-6 border-t border-navy-700">
              <button className="btn-secondary" onClick={() => setScreen('start')}>Home</button>
              <button className="btn-primary" onClick={() => startTest('full')}>Retry Full Test</button>
              {resultStats.wrong > 0 && (
                <button className="btn-primary bg-amber-600 hover:bg-amber-700" onClick={() => startTest('wrong')}>
                  Retry Wrong Questions
                </button>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold border-b border-navy-700 pb-4">Question Review</h3>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {(['all', 'correct', 'wrong', 'unanswered'] as ReviewFilter[]).map(f => (
                <button 
                  key={f} 
                  onClick={() => setReviewFilter(f)}
                  className={`px-4 py-2 rounded font-medium capitalize text-sm transition-colors ${reviewFilter === f ? 'bg-cyan-accent text-white' : 'bg-navy-800 text-gray-400 hover:bg-navy-700'}`}
                >
                  {f} Questions
                </button>
              ))}
            </div>

            <div className="space-y-6">
              {quizQuestions.map((q, idx) => {
                const status = getStatus(q, answers);
                if (reviewFilter !== 'all' && status !== reviewFilter) return null;

                const uAns = answers[q.id] || [];
                const cAns = q.correctAnswer;
                
                let statusHeader = "";
                let statusColor = "";
                
                if (status === 'correct') {
                  statusHeader = "✓ CORRECT";
                  statusColor = "text-emerald-400";
                } else if (status === 'wrong') {
                  statusHeader = "✗ WRONG";
                  statusColor = "text-red-400";
                } else {
                  statusHeader = "— UNANSWERED";
                  statusColor = "text-gray-400";
                }

                return (
                  <div key={q.id} className="card p-6 border-l-4" style={{ borderLeftColor: status === 'correct' ? '#10b981' : status === 'wrong' ? '#ef4444' : '#6b7280' }}>
                    <div className="flex justify-between items-start mb-4 pb-4 border-b border-navy-700">
                      <div className="font-semibold text-gray-300">Question {idx + 1}</div>
                      <div className={`font-bold ${statusColor}`}>{statusHeader}</div>
                    </div>
                    
                    <p className="mb-6 whitespace-pre-wrap">{q.question}</p>
                    
                    <div className="space-y-4">
                      <div className="bg-navy-900/50 p-4 rounded-lg">
                        <div className="text-sm text-gray-500 mb-1">Your Answer:</div>
                        <div className="font-medium">{uAns.length > 0 ? uAns.join(" | ") : "Not answered"}</div>
                      </div>
                      
                      {status !== 'correct' && (
                        <div className="bg-emerald-900/20 p-4 rounded-lg border border-emerald-900/50">
                          <div className="text-sm text-emerald-500 mb-1">Correct Answer:</div>
                          <div className="font-medium text-emerald-400">{cAns.join(" | ")}</div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
