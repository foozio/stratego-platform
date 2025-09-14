'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function StrategyAssessment() {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Strategy Assessment</h1>
          <p className="mt-2 text-neutral-600">Track and measure your strategic initiatives</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="btn btn-primary">New Assessment</button>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="border-b border-neutral-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'overview'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('initiatives')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'initiatives'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
            }`}
          >
            Initiatives
          </button>
          <button
            onClick={() => setActiveTab('kpis')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'kpis'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
            }`}
          >
            KPIs
          </button>
          <button
            onClick={() => setActiveTab('reports')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'reports'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
            }`}
          >
            Reports
          </button>
        </nav>
      </div>
      
      {/* Content based on active tab */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Progress Summary */}
          <div className="lg:col-span-2 card">
            <div className="px-6 py-5 border-b border-neutral-200">
              <h2 className="text-lg font-medium text-neutral-900">Progress Summary</h2>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-neutral-900">Q3 Strategic Plan</h3>
                    <span className="text-sm font-medium text-neutral-900">75%</span>
                  </div>
                  <div className="mt-2 w-full bg-neutral-200 rounded-full h-2">
                    <div className="bg-primary-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-neutral-900">Digital Transformation</h3>
                    <span className="text-sm font-medium text-neutral-900">42%</span>
                  </div>
                  <div className="mt-2 w-full bg-neutral-200 rounded-full h-2">
                    <div className="bg-warning h-2 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-neutral-900">Market Expansion</h3>
                    <span className="text-sm font-medium text-neutral-900">90%</span>
                  </div>
                  <div className="mt-2 w-full bg-neutral-200 rounded-full h-2">
                    <div className="bg-success h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Key Metrics */}
          <div className="card">
            <div className="px-6 py-5 border-b border-neutral-200">
              <h2 className="text-lg font-medium text-neutral-900">Key Metrics</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-600">Active Strategies</p>
                    <p className="text-2xl font-semibold text-neutral-900">12</p>
                  </div>
                  <div className="p-2 rounded-lg bg-primary-100">
                    <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-600">On Track</p>
                    <p className="text-2xl font-semibold text-neutral-900">8</p>
                  </div>
                  <div className="p-2 rounded-lg bg-success bg-opacity-10">
                    <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-600">At Risk</p>
                    <p className="text-2xl font-semibold text-neutral-900">3</p>
                  </div>
                  <div className="p-2 rounded-lg bg-warning bg-opacity-10">
                    <svg className="w-5 h-5 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-600">Delayed</p>
                    <p className="text-2xl font-semibold text-neutral-900">1</p>
                  </div>
                  <div className="p-2 rounded-lg bg-danger bg-opacity-10">
                    <svg className="w-5 h-5 text-danger" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'initiatives' && (
        <div className="card">
          <div className="px-6 py-5 border-b border-neutral-200 flex flex-col md:flex-row md:items-center md:justify-between">
            <h2 className="text-lg font-medium text-neutral-900">Strategic Initiatives</h2>
            <div className="mt-2 md:mt-0">
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-neutral-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="text"
                  className="input pl-10"
                  placeholder="Search initiatives..."
                />
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-200">
              <thead className="bg-neutral-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Initiative
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Owner
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Progress
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Due Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-neutral-900">Customer Experience Enhancement</div>
                    <div className="text-sm text-neutral-500">Q3 Priority Initiative</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                        <span className="text-primary-500 text-xs font-medium">JD</span>
                      </div>
                      <div className="ml-2">
                        <div className="text-sm font-medium text-neutral-900">John Doe</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <div className="bg-primary-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <div className="text-sm text-neutral-500 mt-1">65%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="badge badge-success">On Track</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                    Sep 30, 2023
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-neutral-900">Digital Platform Migration</div>
                    <div className="text-sm text-neutral-500">Infrastructure Modernization</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-success bg-opacity-10 flex items-center justify-center">
                        <span className="text-success text-xs font-medium">SJ</span>
                      </div>
                      <div className="ml-2">
                        <div className="text-sm font-medium text-neutral-900">Sarah Johnson</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <div className="bg-warning h-2 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                    <div className="text-sm text-neutral-500 mt-1">40%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="badge badge-warning">At Risk</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                    Oct 15, 2023
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-neutral-900">Market Expansion - APAC</div>
                    <div className="text-sm text-neutral-500">Geographic Growth</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-danger bg-opacity-10 flex items-center justify-center">
                        <span className="text-danger text-xs font-medium">MR</span>
                      </div>
                      <div className="ml-2">
                        <div className="text-sm font-medium text-neutral-900">Mike Roberts</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <div className="bg-success h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <div className="text-sm text-neutral-500 mt-1">85%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="badge badge-success">On Track</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                    Nov 30, 2023
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}