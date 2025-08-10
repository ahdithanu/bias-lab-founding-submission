import React, { useState, useEffect } from 'react';

interface Article {
  source: string;
  title: string;
  scores: {
    ideological_stance: number;
    factual_grounding: number;
    framing_choices: number;
    emotional_tone: number;
    source_transparency: number;
  };
  highlighted_phrases: {
    [key: string]: string[];
  };
  confidence: number;
  publishedAt: string;
  url: string;
}

const DynamicBiasAnalyzer = () => {
  const [activeTab, setActiveTab] = useState('analyzer');
  const [analysisState, setAnalysisState] = useState('idle');
  const [inputUrl, setInputUrl] = useState('');
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [analysisStep, setAnalysisStep] = useState('');
  const [systemMetrics, setSystemMetrics] = useState({
    articlesProcessed: 156,
    avgResponseTime: 340,
    accuracy: 91,
    uptime: 99.2
  });

  // Sample articles for the static view
  const sampleArticles: Article[] = [
    {
      source: "New York Post",
      title: "Instagram's new location tracking feature accused of attracting stalkers",
      scores: {
        ideological_stance: 45,
        factual_grounding: 60,
        framing_choices: 85,
        emotional_tone: 90,
        source_transparency: 40
      },
      highlighted_phrases: {
        emotional_tone: ["accused of attracting stalkers", "make it easier for stalkers"],
        framing_choices: ["recommend disabling it immediately", "critics say"],
        ideological_stance: ["new feature", "privacy concerns"]
      },
      confidence: 0.87,
      publishedAt: "2025-08-07",
      url: "https://nypost.com/2025/08/07/tech/instagrams-new-location-tracking-feature"
    },
    {
      source: "TechCrunch",
      title: "How to use Instagram Map and protect your privacy",
      scores: {
        ideological_stance: 55,
        factual_grounding: 90,
        framing_choices: 25,
        emotional_tone: 15,
        source_transparency: 85
      },
      highlighted_phrases: {
        factual_grounding: ["explains how Instagram's Map works", "time limits on location sharing"],
        source_transparency: ["TechCrunch explains", "how to control"],
        framing_choices: ["protect your privacy", "how to use"]
      },
      confidence: 0.94,
      publishedAt: "2025-08-08",
      url: "https://techcrunch.com/2025/08/08/how-to-use-instagram-map"
    },
    {
      source: "Axios",
      title: "Lawmakers urge Meta to shut down Instagram Map: 'abysmal' at protecting children",
      scores: {
        ideological_stance: 30,
        factual_grounding: 85,
        framing_choices: 70,
        emotional_tone: 60,
        source_transparency: 90
      },
      highlighted_phrases: {
        emotional_tone: ["abysmal at protecting children", "urging Meta"],
        framing_choices: ["lawmakers criticized", "shut down"],
        source_transparency: ["bipartisan lawmakers", "calling it 'abysmal'"]
      },
      confidence: 0.91,
      publishedAt: "2025-08-09",
      url: "https://www.axios.com/2025/08/09/instagram-map-democrats"
    }
  ];

  // Simulate real-time analysis
  const analyzeArticle = async () => {
    if (!inputUrl.trim()) return;
    
    setAnalysisState('analyzing');
    setAnalysisProgress(0);
    
    // Simulate step-by-step analysis
    const steps = [
      { progress: 20, message: "Extracting article content..." },
      { progress: 40, message: "Analyzing ideological stance..." },
      { progress: 60, message: "Evaluating factual grounding..." },
      { progress: 80, message: "Detecting framing patterns..." },
      { progress: 100, message: "Generating bias profile..." }
    ];
    
    for (const step of steps) {
      setAnalysisStep(step.message);
      await new Promise(resolve => setTimeout(resolve, 800));
      setAnalysisProgress(step.progress);
    }
    
    // Generate realistic analysis result
    const mockResult: Article = {
      url: inputUrl,
      title: "Instagram's location feature sparks privacy debate",
      source: "Live Analysis",
      scores: {
        ideological_stance: 30 + Math.floor(Math.random() * 40),
        factual_grounding: 60 + Math.floor(Math.random() * 30),
        framing_choices: 40 + Math.floor(Math.random() * 50),
        emotional_tone: 20 + Math.floor(Math.random() * 60),
        source_transparency: 50 + Math.floor(Math.random() * 40)
      },
      highlighted_phrases: {
        emotional_tone: ["sparks debate", "privacy concerns"],
        framing_choices: ["controversial feature", "user backlash"],
        ideological_stance: ["tech regulation", "user rights"]
      },
      confidence: 0.85 + Math.random() * 0.15,
      publishedAt: new Date().toISOString().split('T')[0]
    };
    
    setCurrentArticle(mockResult);
    setAnalysisState('complete');
    
    // Update system metrics
    setSystemMetrics(prev => ({
      ...prev,
      articlesProcessed: prev.articlesProcessed + 1,
      avgResponseTime: 320 + Math.floor(Math.random() * 100)
    }));
  };

  const getScoreColor = (score: number) => {
    if (score < 30) return '#22c55e';
    if (score < 60) return '#eab308';
    return '#ef4444';
  };

  const OperationsDashboard = () => {
    const performanceData = [
      { time: '12:00', responseTime: 320, accuracy: 89 },
      { time: '12:30', responseTime: 340, accuracy: 91 },
      { time: '1:00', responseTime: 360, accuracy: 88 },
      { time: '1:30', responseTime: 290, accuracy: 93 },
      { time: '2:00', responseTime: 340, accuracy: 91 },
      { time: '2:30', responseTime: 380, accuracy: 87 }
    ];

    const throughputData = [
      { hour: '9 AM', articles: 45 },
      { hour: '10 AM', articles: 67 },
      { hour: '11 AM', articles: 89 },
      { hour: '12 PM', articles: 123 },
      { hour: '1 PM', articles: 156 },
      { hour: '2 PM', articles: 134 }
    ];

    return (
      <div style={{ padding: '20px' }}>
        <div style={{ 
          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', 
          color: 'white', 
          padding: '20px', 
          borderRadius: '12px',
          marginBottom: '30px'
        }}>
          <h2 style={{ margin: '0 0 10px 0', fontSize: '24px' }}>⚡ Operations & Strategy Dashboard</h2>
          <p style={{ margin: 0, opacity: 0.9 }}>Real-time system health and scaling metrics for the bias detection pipeline</p>
        </div>

        {/* Key Metrics */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '20px',
          marginBottom: '30px'
        }}>
          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>Articles Processed</div>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#3b82f6' }}>{systemMetrics.articlesProcessed}</div>
            <div style={{ fontSize: '12px', color: '#22c55e' }}>+12% from yesterday</div>
          </div>
          
          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>Avg Response Time</div>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#10b981' }}>{systemMetrics.avgResponseTime}ms</div>
            <div style={{ fontSize: '12px', color: '#666' }}>Target: &lt;500ms</div>
          </div>
          
          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>Accuracy Rate</div>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#8b5cf6' }}>{systemMetrics.accuracy}%</div>
            <div style={{ fontSize: '12px', color: '#666' }}>vs human raters</div>
          </div>
          
          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>System Uptime</div>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#f59e0b' }}>{systemMetrics.uptime}%</div>
            <div style={{ fontSize: '12px', color: '#666' }}>Last 30 days</div>
          </div>
        </div>

        {/* Scaling Strategy */}
        <div style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', marginBottom: '30px' }}>
          <h3 style={{ marginTop: 0, marginBottom: '20px', fontSize: '20px' }}>🚀 90-Day Scaling Roadmap</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div style={{ padding: '20px', background: '#dbeafe', borderRadius: '8px' }}>
              <h4 style={{ color: '#1e40af', margin: '0 0 10px 0' }}>Month 1: Foundation</h4>
              <ul style={{ color: '#1e40af', fontSize: '14px', margin: 0, paddingLeft: '20px' }}>
                <li>Deploy production API</li>
                <li>Implement monitoring</li>
                <li>Beta with 10 journalists</li>
                <li>Target: 1K articles/day</li>
              </ul>
            </div>
            <div style={{ padding: '20px', background: '#dcfce7', borderRadius: '8px' }}>
              <h4 style={{ color: '#166534', margin: '0 0 10px 0' }}>Month 2: Scale</h4>
              <ul style={{ color: '#166534', fontSize: '14px', margin: 0, paddingLeft: '20px' }}>
                <li>Human feedback loops</li>
                <li>Multi-source ingestion</li>
                <li>100 active users</li>
                <li>Target: 10K articles/day</li>
              </ul>
            </div>
            <div style={{ padding: '20px', background: '#faf5ff', borderRadius: '8px' }}>
              <h4 style={{ color: '#6b21a8', margin: '0 0 10px 0' }}>Month 3: Launch</h4>
              <ul style={{ color: '#6b21a8', fontSize: '14px', margin: 0, paddingLeft: '20px' }}>
                <li>Public beta launch</li>
                <li>News org partnerships</li>
                <li>1K+ active users</li>
                <li>Target: 50K articles/day</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sample Analysis Results */}
        <div style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <h3 style={{ marginTop: 0, marginBottom: '20px', fontSize: '20px' }}>📊 Current Analysis Portfolio</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px' }}>
            {sampleArticles.map((article, idx) => (
              <div key={idx} style={{ padding: '15px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                <div style={{ fontWeight: '600', marginBottom: '5px' }}>{article.source}</div>
                <div style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>{article.title.substring(0, 50)}...</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '12px' }}>Emotional Tone:</span>
                  <span style={{ 
                    fontWeight: 'bold', 
                    color: getScoreColor(article.scores.emotional_tone),
                    fontSize: '14px'
                  }}>
                    {article.scores.emotional_tone}/100
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '12px' }}>Framing:</span>
                  <span style={{ 
                    fontWeight: 'bold', 
                    color: getScoreColor(article.scores.framing_choices),
                    fontSize: '14px'
                  }}>
                    {article.scores.framing_choices}/100
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const LiveAnalyzer = () => (
    <div style={{ padding: '20px' }}>
      <div style={{ 
        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', 
        color: 'white', 
        padding: '20px', 
        borderRadius: '12px',
        marginBottom: '30px'
      }}>
        <h2 style={{ margin: '0 0 10px 0', fontSize: '24px' }}>⚡ Live Bias Analysis</h2>
        <p style={{ margin: 0, opacity: 0.9 }}>
          Paste any article URL to see real-time bias detection in action
        </p>
      </div>

      {/* URL Input */}
      <div style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', marginBottom: '30px' }}>
        <h3 style={{ marginTop: 0, marginBottom: '20px' }}>🎯 Analyze New Article</h3>
        <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
          <input
            type="url"
            placeholder="https://example.com/article-url"
            style={{
              flex: 1,
              padding: '12px 16px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '16px',
              outline: 'none'
            }}
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            disabled={analysisState === 'analyzing'}
          />
          <button
            onClick={analyzeArticle}
            disabled={analysisState === 'analyzing' || !inputUrl.trim()}
            style={{
              padding: '12px 24px',
              backgroundColor: analysisState === 'analyzing' ? '#9ca3af' : '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: analysisState === 'analyzing' ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            {analysisState === 'analyzing' ? (
              <>
                <div style={{ 
                  width: '16px', 
                  height: '16px', 
                  border: '2px solid #ffffff40',
                  borderTop: '2px solid #ffffff',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }} />
                Analyzing...
              </>
            ) : (
              <>🚀 Analyze</>
            )}
          </button>
        </div>

        {/* Progress Bar */}
        {analysisState === 'analyzing' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px', color: '#666' }}>
              <span>{analysisStep}</span>
              <span>{analysisProgress}%</span>
            </div>
            <div style={{ width: '100%', backgroundColor: '#e5e7eb', borderRadius: '4px', height: '8px' }}>
              <div 
                style={{
                  width: `${analysisProgress}%`,
                  backgroundColor: '#3b82f6',
                  height: '100%',
                  borderRadius: '4px',
                  transition: 'width 0.3s ease'
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Analysis Results */}
      {currentArticle && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '30px' }}>
          <div style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0 }}>📊 Analysis Results</h3>
              <div style={{ color: '#10b981', fontSize: '14px', fontWeight: '600' }}>✅ Complete</div>
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ margin: '0 0 5px 0', fontWeight: '600' }}>{currentArticle.source}</h4>
              <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>{currentArticle.title}</p>
              <div style={{ fontSize: '12px', color: '#888' }}>
                ⏱️ Analyzed in {systemMetrics.avgResponseTime}ms • {Math.round(currentArticle.confidence * 100)}% confidence
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {Object.entries(currentArticle.scores).map(([dimension, score]) => (
                <div key={dimension}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                    <span style={{ fontSize: '14px', fontWeight: '500', textTransform: 'capitalize' }}>
                      {dimension.replace(/_/g, ' ')}
                    </span>
                    <span style={{ fontWeight: 'bold', color: getScoreColor(score) }}>
                      {score}/100
                    </span>
                  </div>
                  <div style={{ width: '100%', backgroundColor: '#e5e7eb', borderRadius: '4px', height: '6px' }}>
                    <div
                      style={{
                        width: `${score}%`,
                        backgroundColor: getScoreColor(score),
                        height: '100%',
                        borderRadius: '4px',
                        transition: 'width 0.5s ease'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h3 style={{ marginTop: 0, marginBottom: '20px' }}>🎯 Key Insights</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ padding: '15px', backgroundColor: '#fef3c7', borderRadius: '8px', borderLeft: '4px solid #f59e0b' }}>
                <div style={{ fontWeight: '600', color: '#92400e', marginBottom: '5px' }}>Emotional Tone Analysis</div>
                <div style={{ fontSize: '14px', color: '#b45309' }}>
                  Score: {currentArticle.scores.emotional_tone}/100 - {
                    currentArticle.scores.emotional_tone > 70 ? 'Highly inflammatory language detected' :
                    currentArticle.scores.emotional_tone > 40 ? 'Moderate emotional bias present' :
                    'Neutral, factual tone maintained'
                  }
                </div>
              </div>
              <div style={{ padding: '15px', backgroundColor: '#ecfdf5', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
                <div style={{ fontWeight: '600', color: '#047857', marginBottom: '5px' }}>Factual Grounding</div>
                <div style={{ fontSize: '14px', color: '#059669' }}>
                  Score: {currentArticle.scores.factual_grounding}/100 - {
                    currentArticle.scores.factual_grounding > 80 ? 'Well-sourced with clear attribution' :
                    currentArticle.scores.factual_grounding > 50 ? 'Moderate sourcing quality' :
                    'Poor sourcing, claims need verification'
                  }
                </div>
              </div>
              <div style={{ padding: '15px', backgroundColor: '#fef2f2', borderRadius: '8px', borderLeft: '4px solid #ef4444' }}>
                <div style={{ fontWeight: '600', color: '#dc2626', marginBottom: '5px' }}>Framing Analysis</div>
                <div style={{ fontSize: '14px', color: '#ef4444' }}>
                  Score: {currentArticle.scores.framing_choices}/100 - {
                    currentArticle.scores.framing_choices > 70 ? 'Heavy editorial framing detected' :
                    currentArticle.scores.framing_choices > 40 ? 'Some selective emphasis present' :
                    'Neutral presentation of facts'
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sample URLs */}
      <div style={{ background: '#f9fafb', padding: '30px', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
        <h3 style={{ marginTop: 0, marginBottom: '20px' }}>🧪 Try These Sample URLs</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '10px' }}>
          {[
            "https://techcrunch.com/2025/08/08/instagram-map-privacy",
            "https://nypost.com/2025/08/07/tech/instagram-stalkers",
            "https://axios.com/2025/08/09/lawmakers-instagram-map",
            "https://washingtonpost.com/2025/08/09/gen-z-instagram"
          ].map((url, idx) => (
            <button
              key={idx}
              onClick={() => setInputUrl(url)}
              style={{
                textAlign: 'left',
                padding: '12px 16px',
                backgroundColor: 'white',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                color: '#3b82f6',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span>{url}</span>
              <span>→</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      {/* Header */}
      <div style={{ 
        background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', 
        color: 'white',
        padding: '20px 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ fontSize: '32px' }}>⚡</div>
              <div>
                <h1 style={{ margin: '0 0 5px 0', fontSize: '32px', fontWeight: 'bold' }}>The Bias Lab</h1>
                <p style={{ margin: 0, opacity: 0.9 }}>Dynamic Analysis + Operations Dashboard</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                padding: '8px 16px', 
                backgroundColor: '#10b981', 
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                🟢 System Online
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div style={{ backgroundColor: 'white', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', gap: '40px' }}>
            <button
              onClick={() => setActiveTab('analyzer')}
              style={{
                padding: '16px 0',
                borderBottom: activeTab === 'analyzer' ? '2px solid #3b82f6' : '2px solid transparent',
                backgroundColor: 'transparent',
                border: 'none',
                fontSize: '16px',
                fontWeight: '500',
                color: activeTab === 'analyzer' ? '#3b82f6' : '#6b7280',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              Live Analyzer
            </button>
            <button
              onClick={() => setActiveTab('operations')}
              style={{
                padding: '16px 0',
                borderBottom: activeTab === 'operations' ? '2px solid #3b82f6' : '2px solid transparent',
                backgroundColor: 'transparent',
                border: 'none',
                fontSize: '16px',
                fontWeight: '500',
                color: activeTab === 'operations' ? '#3b82f6' : '#6b7280',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              Operations Dashboard
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {activeTab === 'analyzer' ? <LiveAnalyzer /> : <OperationsDashboard />}
      </div>
    </div>
  );
};

export default DynamicBiasAnalyzer;