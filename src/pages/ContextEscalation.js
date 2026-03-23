export default function ContextEscalation() {
  const [expandedMessage, setExpandedMessage] = useState<number | null>(null);

  const conversation = [
    {
      id: 1,
      user: 'User A',
      message: 'I think we should consider the alternative approach.',
      toxicity: 0,
      timestamp: '10:30 AM',
      emotion: 'Neutral',
    },
    {
      id: 2,
      user: 'User B',
      message: "I don't think that makes any sense.",
      toxicity: 15,
      timestamp: '10:32 AM',
      emotion: 'Slight Disagreement',
    },
    {
      id: 3,
      user: 'User A',
      message: 'Can you explain why you feel that way?',
      toxicity: 0,
      timestamp: '10:33 AM',
      emotion: 'Neutral',
    },
    {
      id: 4,
      user: 'User B',
      message: "Because your idea is completely stupid and won't work.",
      toxicity: 68,
      timestamp: '10:35 AM',
      emotion: 'Anger',
    },
    {
      id: 5,
      user: 'User A',
      message: "That's unnecessarily harsh. Can we discuss this professionally?",
      toxicity: 12,
      timestamp: '10:36 AM',
      emotion: 'Defensive',
    },
    {
      id: 6,
      user: 'User B',
      message: "You're always wrong and never listen. This is pointless.",
      toxicity: 72,
      timestamp: '10:38 AM',
      emotion: 'Anger',
    },
  ];

  const riskLevel = 'High';
  const riskScore = 75;
  const escalationPoints = [
    { timestamp: '10:35 AM', event: 'Toxicity spike detected (68%)', severity: 'warning' },
    { timestamp: '10:38 AM', event: 'Continued pattern of toxic behavior', severity: 'danger' },
  ];

  const contextFactors = [
    {
      factor: 'Conversation Length',
      value: '6 messages',
      impact: 'Medium',
      description: 'Moderate conversation with escalating tension',
    },
    {
      factor: 'Toxicity Trend',
      value: 'Increasing',
      impact: 'High',
      description: 'Toxicity levels rising over time',
    },
    {
      factor: 'Response Time',
      value: 'Fast',
      impact: 'Medium',
      description: 'Quick responses may indicate heated exchange',
    },
    {
      factor: 'Personal Attacks',
      value: '3 instances',
      impact: 'High',
      description: 'Multiple direct personal attacks detected',
    },
  ];

  const recommendations = [
    {
      priority: 'Critical',
      action: 'Immediate Moderator Review',
      description: 'Flag conversation for human moderator intervention',
      color: 'bg-red-500',
    },
    {
      priority: 'High',
      action: 'Send Warning to User B',
      description: 'Notify user about community guidelines violation',
      color: 'bg-orange-500',
    },
    {
      priority: 'Medium',
      action: 'Temporary Cooldown',
      description: 'Consider temporary muting or time-out for both users',
      color: 'bg-yellow-500',
    },
  ];

  const getToxicityColor = (level: number) => {
    if (level >= 60) return 'bg-red-500';
    if (level >= 30) return 'bg-orange-500';
    if (level >= 10) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getToxicityBorderColor = (level: number) => {
    if (level >= 60) return 'border-red-300';
    if (level >= 30) return 'border-orange-300';
    if (level >= 10) return 'border-yellow-300';
    return 'border-green-300';
  };

  const getToxicityBgColor = (level: number) => {
    if (level >= 60) return 'bg-red-50';
    if (level >= 30) return 'bg-orange-50';
    if (level >= 10) return 'bg-yellow-50';
    return 'bg-green-50';
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">Context & Escalation Analysis</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Conversation Context Tracking
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Monitor conversation history and detect escalation patterns in real-time
          </p>
        </div>

        {/* Risk Level Indicator */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Overall Risk Assessment</h2>
            <Shield className="w-6 h-6 text-gray-400" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="col-span-2">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700">Risk Level</span>
                <span className={`px-4 py-1 rounded-full text-sm font-semibold ${
                  riskLevel === 'High' ? 'bg-red-100 text-red-700' :
                  riskLevel === 'Medium' ? 'bg-orange-100 text-orange-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {riskLevel}
                </span>
              </div>
              <div className="bg-gray-100 rounded-full h-4 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    riskScore >= 70 ? 'bg-red-500' :
                    riskScore >= 40 ? 'bg-orange-500' :
                    'bg-green-500'
                  }`}
                  style={{ width: `${riskScore}%` }}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>0</span>
                <span className="font-semibold">{riskScore}</span>
                <span>100</span>
              </div>
            </div>

            <div className={`p-6 rounded-xl ${
              riskLevel === 'High' ? 'bg-red-50 border-2 border-red-300' :
              riskLevel === 'Medium' ? 'bg-orange-50 border-2 border-orange-300' :
              'bg-green-50 border-2 border-green-300'
            }`}>
              <AlertTriangle className={`w-8 h-8 mb-2 ${
                riskLevel === 'High' ? 'text-red-600' :
                riskLevel === 'Medium' ? 'text-orange-600' :
                'text-green-600'
              }`} />
              <p className="text-sm font-semibold text-gray-900">
                {riskLevel === 'High' ? 'Immediate Action Required' :
                 riskLevel === 'Medium' ? 'Monitor Closely' :
                 'Low Risk'}
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Conversation History */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <MessageSquare className="w-6 h-6 mr-2 text-blue-600" />
              Conversation Timeline
            </h2>

            <div className="space-y-4">
              {conversation.map((msg, index) => (
                <div
                  key={msg.id}
                  className={`p-4 rounded-xl border-2 transition-all ${getToxicityBorderColor(msg.toxicity)} ${getToxicityBgColor(msg.toxicity)}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{msg.user}</p>
                        <p className="text-xs text-gray-500 flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {msg.timestamp}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs px-2 py-1 bg-white rounded-full font-medium text-gray-700">
                        {msg.toxicity}% toxic
                      </span>
                      <div className={`w-3 h-3 rounded-full ${getToxicityColor(msg.toxicity)}`} />
                    </div>
                  </div>
                  
                  <p className="text-gray-900 mb-2">{msg.message}</p>
                  
                  <button
                    onClick={() => setExpandedMessage(expandedMessage === msg.id ? null : msg.id)}
                    className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700"
                  >
                    {expandedMessage === msg.id ? (
                      <>
                        <ChevronUp className="w-4 h-4" />
                        <span>Hide details</span>
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4" />
                        <span>Show details</span>
                      </>
                    )}
                  </button>
                  
                  {expandedMessage === msg.id && (
                    <div className="mt-3 pt-3 border-t border-gray-200 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Emotion:</span>
                        <span className="font-medium text-gray-900">{msg.emotion}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Message #{index + 1} in thread</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Context Factors */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Context Factors</h3>
              <div className="space-y-4">
                {contextFactors.map((factor, index) => (
                  <div key={index} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-medium text-gray-900 text-sm">{factor.factor}</p>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        factor.impact === 'High' ? 'bg-red-100 text-red-700' :
                        factor.impact === 'Medium' ? 'bg-orange-100 text-orange-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {factor.impact}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">{factor.value}</p>
                    <p className="text-xs text-gray-600">{factor.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-2 mb-4">
                <AlertTriangle className="w-6 h-6" />
                <h3 className="text-lg font-semibold">Escalation Events</h3>
              </div>
              <div className="space-y-3">
                {escalationPoints.map((point, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <p className="text-xs opacity-90 mb-1">{point.timestamp}</p>
                    <p className="text-sm font-medium">{point.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Recommended Actions</h2>
          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                <div className={`w-10 h-10 rounded-lg ${rec.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-semibold text-sm">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-semibold text-gray-900">{rec.action}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      rec.priority === 'Critical' ? 'bg-red-100 text-red-700' :
                      rec.priority === 'High' ? 'bg-orange-100 text-orange-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {rec.priority}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{rec.description}</p>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  Take Action
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
