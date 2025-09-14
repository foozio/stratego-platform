'use client';

import React, { useState } from 'react';

export default function MagicQuadrant() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock data for quadrant visualization
  const vendors = [
    { id: 1, name: 'Vendor A', x: 80, y: 75, category: 'Leader', description: 'Strong performance across all criteria' },
    { id: 2, name: 'Vendor B', x: 70, y: 85, category: 'Leader', description: 'Excellent completeness of vision' },
    { id: 3, name: 'Vendor C', x: 85, y: 60, category: 'Challenger', description: 'Strong ability to execute' },
    { id: 4, name: 'Vendor D', x: 65, y: 65, category: 'Niche Player', description: 'Focused on specific market segments' },
    { id: 5, name: 'Vendor E', x: 45, y: 80, category: 'Visionary', description: 'Innovative but limited execution' },
    { id: 6, name: 'Vendor F', x: 55, y: 45, category: 'Niche Player', description: 'Specialized capabilities' },
    { id: 7, name: 'Vendor G', x: 35, y: 70, category: 'Visionary', description: 'Forward-thinking approach' },
    { id: 8, name: 'Vendor H', x: 40, y: 30, category: 'Challenger', description: 'Emerging player with potential' },
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Magic Quadrant</h1>
          <p className="mt-2 text-neutral-600">Visualize and compare vendors in your market</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="btn btn-primary">New Quadrant</button>
        </div>
      </div>
      
      {/* Quadrant Visualization */}
      <div className="card">
        <div className="px-6 py-5 border-b border-neutral-200">
          <h2 className="text-lg font-medium text-neutral-900">Market Analysis - Q3 2023</h2>
        </div>
        <div className="p-6">
          <div className="relative bg-neutral-50 rounded-lg border border-neutral-200" style={{ height: '500px' }}>
            {/* Grid lines */}
            <div className="absolute inset-0">
              {/* Vertical center line */}
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-neutral-300"></div>
              {/* Horizontal center line */}
              <div className="absolute left-0 right-0 top-1/2 h-px bg-neutral-300"></div>
              
              {/* Quadrant labels */}
              <div className="absolute top-4 left-4 text-neutral-500 font-medium">
                Niche Players
              </div>
              <div className="absolute top-4 right-4 text-neutral-500 font-medium text-right">
                Visionaries
              </div>
              <div className="absolute bottom-4 left-4 text-neutral-500 font-medium">
                Challengers
              </div>
              <div className="absolute bottom-4 right-4 text-neutral-500 font-medium text-right">
                Leaders
              </div>
              
              {/* Axis labels */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-neutral-500 text-sm">
                Low Ability to Execute
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-neutral-500 text-sm text-right">
                High Ability to Execute
              </div>
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-neutral-500 text-sm">
                Low Completeness of Vision
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-neutral-500 text-sm">
                High Completeness of Vision
              </div>
            </div>
            
            {/* Vendor points */}
            {vendors.map((vendor) => (
              <div
                key={vendor.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{
                  left: `${vendor.x}%`,
                  top: `${100 - vendor.y}%`,
                }}
              >
                <div className="relative group">
                  <div className={`w-4 h-4 rounded-full ${
                    vendor.category === 'Leader' ? 'bg-success' :
                    vendor.category === 'Challenger' ? 'bg-primary-500' :
                    vendor.category === 'Visionary' ? 'bg-warning' :
                    'bg-neutral-500'
                  }`}></div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block w-48 p-3 bg-white rounded-lg shadow-lg border border-neutral-200 z-10">
                    <div className="font-medium text-neutral-900">{vendor.name}</div>
                    <div className="text-xs text-neutral-500 mt-1">{vendor.category}</div>
                    <div className="text-xs text-neutral-600 mt-2">{vendor.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Legend */}
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-success"></div>
              <span className="ml-2 text-sm text-neutral-700">Leaders</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-primary-500"></div>
              <span className="ml-2 text-sm text-neutral-700">Challengers</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-warning"></div>
              <span className="ml-2 text-sm text-neutral-700">Visionaries</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-neutral-500"></div>
              <span className="ml-2 text-sm text-neutral-700">Niche Players</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Vendor Comparison Table */}
      <div className="card">
        <div className="px-6 py-5 border-b border-neutral-200">
          <h2 className="text-lg font-medium text-neutral-900">Vendor Comparison</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200">
            <thead className="bg-neutral-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Vendor
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Ability to Execute
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Completeness of Vision
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Strengths
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Concerns
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              {vendors.map((vendor) => (
                <tr key={vendor.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-neutral-900">{vendor.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`badge ${
                      vendor.category === 'Leader' ? 'badge-success' :
                      vendor.category === 'Challenger' ? 'badge-primary' :
                      vendor.category === 'Visionary' ? 'badge-warning' :
                      'badge-neutral'
                    }`}>
                      {vendor.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-neutral-900">{vendor.y}%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-neutral-900">{vendor.x}%</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-neutral-600 max-w-xs">
                      Strong performance in key areas
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-neutral-600 max-w-xs">
                      Limited global presence
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}