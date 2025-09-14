import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-neutral-900">Dashboard</h1>
        <button className="btn btn-primary">Create New Strategy</button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Strategy Overview Card */}
        <div className="card">
          <div className="p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-primary-100">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-neutral-900">Strategies</h3>
                <p className="text-2xl font-semibold text-neutral-900">12</p>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/strategy" className="text-primary-500 text-sm font-medium hover:text-primary-600">
                View all strategies →
              </Link>
            </div>
          </div>
        </div>
        
        {/* Maturity Index Card */}
        <div className="card">
          <div className="p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-success bg-opacity-10">
                <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-neutral-900">Avg. Maturity</h3>
                <p className="text-2xl font-semibold text-neutral-900">72%</p>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/maturity" className="text-primary-500 text-sm font-medium hover:text-primary-600">
                View maturity report →
              </Link>
            </div>
          </div>
        </div>
        
        {/* PMO Services Card */}
        <div className="card">
          <div className="p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-warning bg-opacity-10">
                <svg className="w-6 h-6 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-neutral-900">Active Projects</h3>
                <p className="text-2xl font-semibold text-neutral-900">8</p>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/pmo" className="text-primary-500 text-sm font-medium hover:text-primary-600">
                Manage projects →
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent Activity */}
      <div className="card">
        <div className="px-6 py-5 border-b border-neutral-200">
          <h2 className="text-lg font-medium text-neutral-900">Recent Activity</h2>
        </div>
        <div className="p-6">
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-primary-500 text-xs font-medium">JD</span>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm text-neutral-900">
                  <span className="font-medium">John Doe</span> updated the Q3 strategy plan
                </p>
                <p className="text-xs text-neutral-500">2 hours ago</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-success bg-opacity-10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm text-neutral-900">
                  <span className="font-medium">Marketing Team</span> completed the brand maturity assessment
                </p>
                <p className="text-xs text-neutral-500">5 hours ago</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-warning bg-opacity-10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm text-neutral-900">
                  <span className="font-medium">Project Alpha</span> timeline updated
                </p>
                <p className="text-xs text-neutral-500">Yesterday</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}