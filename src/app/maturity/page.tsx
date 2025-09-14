'use client';

import React, { useState } from 'react';

export default function MaturityIndex() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock data for maturity assessment
  const maturityData = [
    {
      id: 1,
      category: 'Strategic Planning',
      score: 85,
      level: 'Advanced',
      color: 'success',
      description: 'Well-defined strategic planning processes with regular reviews and updates.'
    },
    {
      id: 2,
      category: 'Execution & Delivery',
      score: 72,
      level: 'Intermediate',
      color: 'warning',
      description: 'Good execution capabilities with some room for improvement in delivery speed.'
    },
    {
      id: 3,
      category: 'Performance Measurement',
      score: 68,
      level: 'Intermediate',
      color: 'warning',
      description: 'Basic KPI tracking in place but needs more sophisticated analytics.'
    },
    {
      id: 4,
      category: 'Organizational Alignment',
      score: 92,
      level: 'Advanced',
      color: 'success',
      description: 'Strong alignment between strategic objectives and team goals.'
    },
    {
      id: 5,
      category: 'Change Management',
      score: 55,
      level: 'Beginner',
      color: 'danger',
      description: 'Reactive approach to change; needs proactive change management framework.'
    }
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Maturity Index</h1>
          <p className="mt-2 text-neutral-600">Assess and improve your strategic capabilities</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <button className="btn btn-secondary">Export Report</button>
          <button className="btn btn-primary">New Assessment</button>
        </div>
      </div>
      
      {/* Overall Score */}
      <div className="card">
        <div className="px-6 py-5 border-b border-neutral-200">
          <h2 className="text-lg font-medium text-neutral-900">Overall Maturity Score</h2>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="relative w-48 h-48">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#E5E5EA"
                  strokeWidth="8"
                />
                {/* Progress circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#007AFF"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray="283"
                  strokeDashoffset={283 - (283 * 74) / 100}
                  transform="rotate(-90 50 50)"
                />
                {/* Center text */}
                <text
                  x="50"
                  y="50"
                  textAnchor="middle"
                  dy="7"
                  fontSize="20"
                  fontWeight="bold"
                  fill="#007AFF"
                >
                  74%
                </text>
              </svg>
            </div>
            <div className="mt-6 md:mt-0 md:ml-8">
              <div className="text-3xl font-bold text-neutral-900">Intermediate</div>
              <p className="mt-2 text-neutral-600 max-w-md">
                Your organization demonstrates solid strategic capabilities with opportunities 
                for advancement to the Advanced level across several key areas.
              </p>
              <div className="mt-4">
                <button className="btn btn-secondary">View Detailed Report</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Maturity Categories */}
      <div className="card">
        <div className="px-6 py-5 border-b border-neutral-200 flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-lg font-medium text-neutral-900">Maturity Categories</h2>
          <div className="mt-2 md:mt-0 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-neutral-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              className="input pl-10"
              placeholder="Search categories..."
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200">
            <thead className="bg-neutral-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Score
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Level
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              {maturityData.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-neutral-900">{item.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-neutral-900">{item.score}%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`badge badge-${item.color}`}>{item.level}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-neutral-600 max-w-md">{item.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-primary-500 hover:text-primary-700">
                      Improve
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Improvement Recommendations */}
      <div className="card">
        <div className="px-6 py-5 border-b border-neutral-200">
          <h2 className="text-lg font-medium text-neutral-900">Improvement Recommendations</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-neutral-200 rounded-lg p-5">
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-danger bg-opacity-10">
                  <svg className="w-5 h-5 text-danger" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-neutral-900">Change Management</h3>
              </div>
              <p className="mt-3 text-neutral-600">
                Implement a structured change management framework to improve adoption rates 
                and reduce resistance to strategic initiatives.
              </p>
              <div className="mt-4">
                <button className="text-primary-500 text-sm font-medium hover:text-primary-700">
                  View Action Plan →
                </button>
              </div>
            </div>
            
            <div className="border border-neutral-200 rounded-lg p-5">
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-warning bg-opacity-10">
                  <svg className="w-5 h-5 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-neutral-900">Performance Measurement</h3>
              </div>
              <p className="mt-3 text-neutral-600">
                Enhance your KPI tracking with real-time dashboards and predictive analytics 
                to improve decision-making.
              </p>
              <div className="mt-4">
                <button className="text-primary-500 text-sm font-medium hover:text-primary-700">
                  View Action Plan →
                </button>
              </div>
            </div>
            
            <div className="border border-neutral-200 rounded-lg p-5">
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-primary-100">
                  <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-neutral-900">Team Alignment</h3>
              </div>
              <p className="mt-3 text-neutral-600">
                Conduct quarterly alignment workshops to ensure all teams understand how their 
                work contributes to strategic objectives.
              </p>
              <div className="mt-4">
                <button className="text-primary-500 text-sm font-medium hover:text-primary-700">
                  View Action Plan →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}