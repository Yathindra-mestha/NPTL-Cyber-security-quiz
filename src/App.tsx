import { useState, useMemo, useEffect } from 'react';
import { questions } from './data/questions';
import type { Question } from './data/questions';

type Screen = 'start' | 'quiz' | 'result';
type Answers = Record<number, string[]>;
type ReviewFilter = 'all' | 'correct' | 'wrong' | 'unanswered';

const weekLabels: Record<number, string> = {
  1: "Week 1 Practice",
  2: "Week 2 Practice",
  3: "Week 3 Practice",
  4: "Week 4 Practice",
  5: "Week 5 Practice",
  6: "Week 6 Practice",
  7: "Week 7 Practice",
  8: "Week 8 Practice",
  9: "Week 9 — Assignment 9",
  10: "Week 10 — Assignment 10",
  11: "Week 11 — Assignment 11",
};

export default function App() {
  const [screen, setScreen] = useState<Screen>('start');
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answers>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showConfirm, setShowConfirm] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<ReviewFilter>('all');

  // Answer-Only / Revision Mode State
  const [homeMode, setHomeMode] = useState<'test' | 'study'>('test');
  const [studyWeek, setStudyWeek] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [hiddenAnswerIds, setHiddenAnswerIds] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (!window.history.state || !window.history.state.screen) {
      window.history.replaceState({ screen: 'start' }, '', '');
    }

    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.screen) {
        setScreen(event.state.screen);
      } else {
        setScreen('start');
      }
      setShowConfirm(false);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const goHome = () => {
    setScreen('start');
    window.history.pushState({ screen: 'start' }, '', '');
  };

  const startTest = (mode: 'week1' | 'week2' | 'week3' | 'week4' | 'week5' | 'week6' | 'week7' | 'week8' | 'week9' | 'week10' | 'week11' | 'full' | 'wrong') => {
    let selected: Question[] = [];
    if (mode === 'week1') selected = questions.filter(q => q.week === 1);
    if (mode === 'week2') selected = questions.filter(q => q.week === 2);
    if (mode === 'week3') selected = questions.filter(q => q.week === 3);
    if (mode === 'week4') selected = questions.filter(q => q.week === 4);
    if (mode === 'week5') selected = questions.filter(q => q.week === 5);
    if (mode === 'week6') selected = questions.filter(q => q.week === 6);
    if (mode === 'week7') selected = questions.filter(q => q.week === 7);
    if (mode === 'week8') selected = questions.filter(q => q.week === 8);
    if (mode === 'week9') selected = questions.filter(q => q.week === 9);
    if (mode === 'week10') selected = questions.filter(q => q.week === 10);
    if (mode === 'week11') selected = questions.filter(q => q.week === 11);
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
    window.history.pushState({ screen: 'quiz' }, '', '');
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
    window.history.pushState({ screen: 'result' }, '', '');
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

  const filteredStudyQuestions = useMemo(() => {
    return questions.filter(q => {
      const matchesWeek = studyWeek === 'all' || q.week === studyWeek;
      if (!matchesWeek) return false;
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      const inQuestion = q.question.toLowerCase().includes(query);
      const inOptions = q.options.some(opt => opt.toLowerCase().includes(query));
      const inAnswers = q.correctAnswer.some(ans => ans.toLowerCase().includes(query));
      return inQuestion || inOptions || inAnswers;
    });
  }, [studyWeek, searchQuery]);

  return (
    <div className="min-h-screen bg-navy-900 text-white font-sans p-4 md:p-8">
      {screen === 'start' && (
        <div className="max-w-4xl mx-auto text-center mt-6 space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-accent mb-2 tracking-tight">NPTEL Cyber Security</h1>
            <p className="text-gray-400 text-sm md:text-base">Comprehensive practice and revision portal for Weeks 1 to 11 (110 Questions)</p>
          </div>

          {/* Mode Selector Tabs */}
          <div className="max-w-md mx-auto">
            <div className="flex p-1.5 bg-navy-800 rounded-xl border border-navy-700 shadow-inner">
              <button
                onClick={() => setHomeMode('test')}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                  homeMode === 'test'
                    ? 'bg-cyan-accent text-navy-900 shadow-md shadow-cyan-accent/20 font-bold'
                    : 'text-gray-300 hover:text-white hover:bg-navy-700/60'
                }`}
              >
                <span>🎯</span>
                <span>Test Mode</span>
              </button>
              <button
                onClick={() => setHomeMode('study')}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                  homeMode === 'study'
                    ? 'bg-cyan-accent text-navy-900 shadow-md shadow-cyan-accent/20 font-bold'
                    : 'text-gray-300 hover:text-white hover:bg-navy-700/60'
                }`}
              >
                <span>📖</span>
                <span>Answer-Only Mode</span>
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2.5">
              {homeMode === 'test'
                ? "Practice quizzes by answering questions and checking your performance."
                : "Read all questions and their correct answers for quick revision and exam preparation."}
            </p>
          </div>

          {/* MODE 1: TEST MODE */}
          {homeMode === 'test' && (
            <div className="space-y-6">
              <h2 className="text-2xl text-gray-300">Select a Practice Test</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
                <button className="card hover:border-cyan-accent transition-colors flex flex-col items-center justify-center p-8 space-y-2 group cursor-pointer" onClick={() => startTest('week7')}>
                  <span className="text-xl font-semibold group-hover:text-cyan-accent transition-colors">Week 7 Practice</span>
                  <span className="text-sm text-gray-400">10 Questions</span>
                </button>
                <button className="card hover:border-cyan-accent transition-colors flex flex-col items-center justify-center p-8 space-y-2 group cursor-pointer" onClick={() => startTest('week8')}>
                  <span className="text-xl font-semibold group-hover:text-cyan-accent transition-colors">Week 8 Practice</span>
                  <span className="text-sm text-gray-400">10 Questions</span>
                </button>
                <button className="card hover:border-cyan-accent transition-colors flex flex-col items-center justify-center p-8 space-y-2 group cursor-pointer" onClick={() => startTest('week9')}>
                  <span className="text-xl font-semibold group-hover:text-cyan-accent transition-colors">Week 9 Practice</span>
                  <span className="text-sm text-gray-400">10 Questions</span>
                </button>
                <button className="card hover:border-cyan-accent transition-colors flex flex-col items-center justify-center p-8 space-y-2 group cursor-pointer" onClick={() => startTest('week10')}>
                  <span className="text-xl font-semibold group-hover:text-cyan-accent transition-colors">Week 10 — Assignment 10</span>
                  <span className="text-sm text-gray-400">10 Questions</span>
                </button>
                <button className="card hover:border-cyan-accent transition-colors flex flex-col items-center justify-center p-8 space-y-2 group cursor-pointer" onClick={() => startTest('week11')}>
                  <span className="text-xl font-semibold group-hover:text-cyan-accent transition-colors">Week 11 — Assignment 11</span>
                  <span className="text-sm text-gray-400">10 Questions</span>
                </button>
                <button className="card hover:border-cyan-accent transition-colors flex flex-col items-center justify-center p-8 space-y-2 group md:col-span-2 bg-navy-800 cursor-pointer" onClick={() => startTest('full')}>
                  <span className="text-xl font-semibold group-hover:text-cyan-accent transition-colors">Full Week 1–11 Test</span>
                  <span className="text-sm text-gray-400">110 Questions</span>
                </button>
              </div>
            </div>
          )}

          {/* MODE 2: ANSWER-ONLY / REVISION MODE */}
          {homeMode === 'study' && (
            <div className="space-y-6 text-left">
              {/* Week Navigation Pills */}
              <div className="flex flex-wrap gap-2 justify-center pb-2">
                <button
                  onClick={() => setStudyWeek('all')}
                  className={`px-3.5 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                    studyWeek === 'all'
                      ? 'bg-cyan-accent text-navy-900 shadow-md shadow-cyan-accent/20 font-bold'
                      : 'bg-navy-800 text-gray-300 hover:bg-navy-700 hover:text-white border border-navy-700'
                  }`}
                >
                  All Weeks (110)
                </button>
                {Array.from({ length: 11 }, (_, i) => i + 1).map((w) => (
                  <button
                    key={w}
                    onClick={() => setStudyWeek(w)}
                    className={`px-3 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                      studyWeek === w
                        ? 'bg-cyan-accent text-navy-900 shadow-md shadow-cyan-accent/20 font-bold'
                        : 'bg-navy-800 text-gray-300 hover:bg-navy-700 hover:text-white border border-navy-700'
                    }`}
                  >
                    Week {w}
                  </button>
                ))}
              </div>

              {/* Week Header & Prev/Next Controls */}
              <div className="card p-4 md:p-6 flex flex-col sm:flex-row justify-between items-center gap-4 bg-navy-800/90 border border-navy-700">
                {studyWeek !== 'all' ? (
                  <>
                    <button
                      disabled={studyWeek === 1}
                      onClick={() => setStudyWeek((prev) => (typeof prev === 'number' && prev > 1 ? prev - 1 : prev))}
                      className="btn-secondary text-xs md:text-sm px-4 py-2 w-full sm:w-auto disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                    >
                      ← Previous Week
                    </button>
                    <div className="text-center">
                      <h3 className="font-bold text-lg md:text-xl text-cyan-accent">{weekLabels[studyWeek]}</h3>
                      <p className="text-xs text-gray-400">10 Questions • Quick Revision</p>
                    </div>
                    <button
                      disabled={studyWeek === 11}
                      onClick={() => setStudyWeek((prev) => (typeof prev === 'number' && prev < 11 ? prev + 1 : prev))}
                      className="btn-secondary text-xs md:text-sm px-4 py-2 w-full sm:w-auto disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                    >
                      Next Week →
                    </button>
                  </>
                ) : (
                  <div className="text-center w-full py-1">
                    <h3 className="font-bold text-lg md:text-xl text-cyan-accent">All Weeks (Weeks 1–11)</h3>
                    <p className="text-xs text-gray-400">110 Questions • Continuous Scroll & Complete Study Guide</p>
                  </div>
                )}
              </div>

              {/* Toolbar: Search & Global Expand/Collapse */}
              <div className="flex flex-col md:flex-row items-center gap-3">
                <div className="relative flex-1 w-full">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400 text-sm">
                    🔍
                  </span>
                  <input
                    type="text"
                    placeholder="Search questions, options, or keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-10 py-2.5 bg-navy-800 border border-navy-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-accent text-sm"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-white cursor-pointer"
                    >
                      ✕
                    </button>
                  )}
                </div>
                <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                  <button
                    onClick={() => setHiddenAnswerIds(new Set())}
                    className="btn-secondary text-xs px-3.5 py-2.5 flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
                    title="Reveal all answers"
                  >
                    <span>👁️</span> Show All Answers
                  </button>
                  <button
                    onClick={() => setHiddenAnswerIds(new Set(filteredStudyQuestions.map((q) => q.id)))}
                    className="btn-secondary text-xs px-3.5 py-2.5 flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
                    title="Hide all answers"
                  >
                    <span>🙈</span> Hide All Answers
                  </button>
                </div>
              </div>

              {/* Question Count Status */}
              <div className="flex justify-between items-center text-xs text-gray-400 px-1">
                <span>
                  Showing <strong className="text-gray-200">{filteredStudyQuestions.length}</strong> of{' '}
                  {studyWeek === 'all' ? 110 : 10} questions
                </span>
                {searchQuery && (
                  <span className="text-cyan-accent font-medium">Filtered by: "{searchQuery}"</span>
                )}
              </div>

              {/* Questions List */}
              {filteredStudyQuestions.length > 0 ? (
                <div className="space-y-6">
                  {filteredStudyQuestions.map((q, idx) => {
                    const isHidden = hiddenAnswerIds.has(q.id);
                    const isMulti = q.type === 'multiple';
                    const isTF = q.options.length === 2 && q.options.includes('True') && q.options.includes('False');
                    const showWeekDivider =
                      studyWeek === 'all' &&
                      !searchQuery &&
                      (idx === 0 || filteredStudyQuestions[idx - 1].week !== q.week);

                    return (
                      <div key={q.id}>
                        {showWeekDivider && (
                          <div className="flex items-center gap-3 my-8 pt-4">
                            <div className="h-px bg-cyan-accent/40 flex-1"></div>
                            <span className="text-sm font-bold text-cyan-accent uppercase tracking-wider px-3 py-1 bg-navy-800 rounded-full border border-cyan-accent/30">
                              {weekLabels[q.week]}
                            </span>
                            <div className="h-px bg-cyan-accent/40 flex-1"></div>
                          </div>
                        )}

                        <div className="card p-6 border-l-4 border-l-cyan-accent text-left space-y-4 shadow-lg">
                          {/* Card Header */}
                          <div className="flex flex-wrap justify-between items-center gap-2 pb-3 border-b border-navy-700">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="font-bold text-cyan-accent text-base">Question {q.id}</span>
                              <span className="text-xs px-2.5 py-0.5 rounded-full bg-navy-700 text-gray-300 font-medium">
                                {weekLabels[q.week]}
                              </span>
                              <span className="text-xs px-2.5 py-0.5 rounded-full bg-navy-900 border border-navy-700 text-gray-400">
                                {isMulti ? 'Multiple Select' : isTF ? 'True / False' : 'Single Choice'}
                              </span>
                            </div>
                            <button
                              onClick={() => {
                                setHiddenAnswerIds((prev) => {
                                  const next = new Set(prev);
                                  if (next.has(q.id)) {
                                    next.delete(q.id);
                                  } else {
                                    next.add(q.id);
                                  }
                                  return next;
                                });
                              }}
                              className="text-xs px-3 py-1.5 rounded bg-navy-700 hover:bg-navy-600 text-gray-300 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                            >
                              {isHidden ? '👁️ Show Answer' : '🙈 Hide Answer'}
                            </button>
                          </div>

                          {/* Question Text */}
                          <p className="text-base md:text-lg font-medium leading-relaxed whitespace-pre-wrap text-gray-100">
                            {q.question}
                          </p>

                          {/* Diagram / Image */}
                          {q.imageUrl && (
                            <div className="my-4 flex justify-center">
                              <img
                                src={q.imageUrl}
                                alt="Question Diagram"
                                className="max-h-72 w-full max-w-xl rounded-lg border border-navy-700 bg-navy-900/60 p-2 shadow-md object-contain"
                              />
                            </div>
                          )}

                          {/* Options */}
                          <div className="space-y-2.5 pt-1">
                            {q.options.map((opt, i) => {
                              const isCorrect = q.correctAnswer.includes(opt);
                              const showHighlight = !isHidden && isCorrect;

                              let optionStyle = 'border-navy-700 bg-navy-900/60 text-gray-300';
                              if (showHighlight) {
                                optionStyle =
                                  'border-emerald-500 bg-emerald-950/40 text-emerald-200 font-medium shadow-sm shadow-emerald-950/50';
                              }

                              return (
                                <div
                                  key={i}
                                  className={`p-3.5 rounded-lg border text-sm flex items-start gap-3 transition-colors ${optionStyle}`}
                                >
                                  <span
                                    className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold shrink-0 mt-0.5 ${
                                      showHighlight
                                        ? 'bg-emerald-500 text-navy-900'
                                        : 'bg-navy-700 text-gray-300'
                                    }`}
                                  >
                                    {showHighlight ? '✓' : String.fromCharCode(65 + i)}
                                  </span>
                                  <span className="flex-1 leading-relaxed">{opt}</span>
                                  {showHighlight && (
                                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 shrink-0 border border-emerald-500/30">
                                      Correct
                                    </span>
                                  )}
                                </div>
                              );
                            })}
                          </div>

                          {/* Solution Box */}
                          {!isHidden ? (
                            <div className="mt-4 p-4 rounded-lg bg-emerald-950/30 border border-emerald-500/50 text-emerald-300">
                              <div className="text-xs uppercase tracking-wider font-bold text-emerald-400 mb-1 flex items-center gap-1.5">
                                <span>✓</span> Correct Answer:
                              </div>
                              <div className="font-semibold text-sm md:text-base text-emerald-100">
                                {isMulti ? (
                                  <ul className="list-disc list-inside space-y-1 mt-1">
                                    {q.correctAnswer.map((ans, idxAns) => (
                                      <li key={idxAns} className="leading-snug">
                                        {ans}
                                      </li>
                                    ))}
                                  </ul>
                                ) : (
                                  <span>{q.correctAnswer.join(' | ')}</span>
                                )}
                              </div>
                            </div>
                          ) : (
                            <div className="mt-4 p-3 rounded-lg bg-navy-900/40 border border-navy-700 text-gray-400 text-xs flex justify-between items-center">
                              <span>Answer is hidden</span>
                              <button
                                onClick={() =>
                                  setHiddenAnswerIds((prev) => {
                                    const next = new Set(prev);
                                    next.delete(q.id);
                                    return next;
                                  })
                                }
                                className="text-cyan-accent hover:underline font-semibold cursor-pointer"
                              >
                                Show Answer
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="card py-16 text-center space-y-4">
                  <span className="text-4xl">🔍</span>
                  <h3 className="text-xl font-bold text-gray-200">No questions found</h3>
                  <p className="text-sm text-gray-400">
                    No questions matched "{searchQuery}" in{' '}
                    {studyWeek === 'all' ? 'All Weeks' : weekLabels[studyWeek]}.
                  </p>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="btn-secondary text-sm px-4 py-2 cursor-pointer"
                  >
                    Clear Search
                  </button>
                </div>
              )}
            </div>
          )}
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
            {quizQuestions[currentIndex].imageUrl && (
              <div className="mb-6 flex justify-center">
                <img 
                  src={quizQuestions[currentIndex].imageUrl} 
                  alt="Question Diagram" 
                  className="max-h-72 w-full max-w-xl rounded-lg border border-navy-700 bg-navy-900/60 p-2 shadow-md object-contain"
                />
              </div>
            )}
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
              <button className="btn-secondary" onClick={goHome}>Home</button>
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
                    {q.imageUrl && (
                      <div className="mb-6 flex justify-center">
                        <img 
                          src={q.imageUrl} 
                          alt="Question Diagram" 
                          className="max-h-60 w-full max-w-lg rounded-lg border border-navy-700 bg-navy-900/60 p-2 shadow-md object-contain"
                        />
                      </div>
                    )}
                    
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
