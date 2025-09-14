'use client';

import React, { useState } from 'react';

export default function PMO() {
  const [activeTab, setActiveTab] = useState('projects');
  
  // Mock data for projects
  const projects = [
    {
      id: 1,
      name: 'Digital Transformation',
      description: 'Complete overhaul of legacy systems',
      status: 'In Progress',
      progress: 65,
      startDate: '2023-01-15',
      endDate: '2023-12-31',
      owner: 'John Doe',
      budget: 1250000,
      spent: 780000,
    },
    {
      id: 2,
      name: 'Market Expansion - APAC',
      description: 'Entering new markets in Asia Pacific',
      status: 'Planned',
      progress: 0,
      startDate: '2023-10-01',
      endDate: '2024-06-30',
      owner: 'Sarah Johnson',
      budget: 2500000,
      spent: 0,
    },
    {
      id: 3,
      name: 'Customer Experience Platform',
      description: 'New platform for customer interactions',
      status: 'Completed',
      progress: 100,
      startDate: '2022-09-01',
      endDate: '2023-06-30',
      owner: 'Mike Roberts',
      budget: 850000,
      spent: 850000,
    },
    {
      id: 4,
      name: 'Cloud Migration',
      description: 'Migrating infrastructure to cloud',
      status: 'In Progress',
      progress: 42,
      startDate: '2023-03-01',
      endDate: '2023-11-30',
      owner: 'Lisa Chen',
      budget: 1750000,
      spent: 920000,
    },
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">PMO Services</h1>
          <p className="mt-2 text-neutral-600">Manage projects and resources effectively</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="btn btn-primary">New Project</button>
        </div>
      </div>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card">
          <div className="p-5">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-primary-100">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-neutral-500">Total Projects</h3>
                <p className="text-2xl font-semibold text-neutral-900">24</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="p-5">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-warning bg-opacity-10">
                <svg className="w-6 h-6 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-neutral-500">In Progress</h3>
                <p className="text-2xl font-semibold text-neutral-900">14</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="p-5">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-success bg-opacity-10">
                <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-neutral-500">Completed</h3>
                <p className="text-2xl font-semibold text-neutral-900">8</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="p-5">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-danger bg-opacity-10">
                <svg className="w-6 h-6 text-danger" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-neutral-500">At Risk</h3>
                <p className="text-2xl font-semibold text-neutral-900">3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Projects Table */}
      <div className="card">
        <div className="px-6 py-5 border-b border-neutral-200 flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-lg font-medium text-neutral-900">Projects</h2>
          <div className="mt-2 md:mt-0 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-neutral-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              className="input pl-10"
              placeholder="Search projects..."
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200">
            <thead className="bg-neutral-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Project
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Progress
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Owner
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Timeline
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Budget
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-neutral-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-neutral-900">{project.name}</div>
                    <div className="text-sm text-neutral-500 max-w-xs truncate">{project.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`badge ${
                      project.status === 'Completed' ? 'badge-success' :
                      project.status === 'In Progress' ? 'badge-warning' :
                      'badge-neutral'
                    }`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          project.progress === 100 ? 'bg-success' :
                          project.progress >= 50 ? 'bg-warning' :
                          'bg-primary-500'
                        }`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-neutral-500 mt-1">{project.progress}%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-neutral-900">{project.owner}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-neutral-900">{project.startDate}</div>
                    <div className="text-sm text-neutral-500">to {project.endDate}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-neutral-900">${project.budget.toLocaleString()}</div>
                    <div className="text-sm text-neutral-500">${project.spent.toLocaleString()} spent</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Resource Allocation */}
      <div className="card">
        <div className="px-6 py-5 border-b border-neutral-200">
          <h2 className="text-lg font-medium text-neutral-900">Resource Allocation</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-neutral-200 rounded-lg p-5">
              <h3 className="text-lg font-medium text-neutral-900">Team Capacity</h3>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600">Development</span>
                  <span className="text-sm font-medium text-neutral-900">85%</span>
                </div>
                <div className="mt-1 w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-primary-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600">Design</span>
                  <span className="text-sm font-medium text-neutral-900">70%</span>
                </div>
                <div className="mt-1 w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-warning h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600">QA</span>
                  <span className="text-sm font-medium text-neutral-900">60%</span>
                </div>
                <div className="mt-1 w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="border border-neutral-200 rounded-lg p-5">
              <h3 className="text-lg font-medium text-neutral-900">Budget Utilization</h3>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600">Q3 2023</span>
                  <span className="text-sm font-medium text-neutral-900">72%</span>
                </div>
                <div className="mt-1 w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-primary-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                </div>
                <div className="mt-2 text-xs text-neutral-500">Used: $2.1M / $2.9M</div>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600">Q4 2023</span>
                  <span className="text-sm font-medium text-neutral-900">15%</span>
                </div>
                <div className="mt-1 w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{ width: '15%' }}></div>
                </div>
                <div className="mt-2 text-xs text-neutral-500">Used: $0.4M / $2.7M</div>
              </div>
            </div>
            
            <div className="border border-neutral-200 rounded-lg p-5">
              <h3 className="text-lg font-medium text-neutral-900">Upcoming Milestones</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-neutral-900">Cloud Migration Phase 2</p>
                    <p className="text-xs text-neutral-500">Sep 15, 2023</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-warning"></div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-neutral-900">APAC Market Launch</p>
                    <p className="text-xs text-neutral-500">Oct 1, 2023</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-success"></div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-neutral-900">Customer Platform Beta</p>
                    <p className="text-xs text-neutral-500">Oct 30, 2023</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}