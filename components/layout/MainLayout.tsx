import React, { ReactNode } from 'react';
import Link from 'next/link';
import { FiHome, FiBarChart2, FiGrid, FiUsers, FiSettings, FiHelpCircle, FiMenu } from 'react-icons/fi';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex h-screen bg-neutral-50">
      {/* Sidebar */}
      <div className="hidden md:flex md:w-64 lg:w-72 flex-col sidebar">
        <div className="flex items-center justify-between p-4 border-b border-neutral-200">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-md bg-primary-500 flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </div>
            <span className="text-xl font-semibold text-neutral-900">Stratego</span>
          </Link>
        </div>
        
        <nav className="flex-1 px-2 py-4">
          <div className="space-y-1">
            <Link href="/" className="flex items-center px-4 py-2 text-sm font-medium text-neutral-700 rounded-md hover:bg-neutral-100">
              <FiHome className="mr-3 h-5 w-5 text-neutral-500" />
              Dashboard
            </Link>
            
            <Link href="/strategy" className="flex items-center px-4 py-2 text-sm font-medium text-neutral-700 rounded-md hover:bg-neutral-100">
              <FiBarChart2 className="mr-3 h-5 w-5 text-neutral-500" />
              Strategy Assessment
            </Link>
            
            <Link href="/maturity" className="flex items-center px-4 py-2 text-sm font-medium text-neutral-700 rounded-md hover:bg-neutral-100">
              <FiGrid className="mr-3 h-5 w-5 text-neutral-500" />
              Maturity Index
            </Link>
            
            <Link href="/quadrant" className="flex items-center px-4 py-2 text-sm font-medium text-neutral-700 rounded-md hover:bg-neutral-100">
              <FiGrid className="mr-3 h-5 w-5 text-neutral-500" />
              Magic Quadrant
            </Link>
            
            <Link href="/pmo" className="flex items-center px-4 py-2 text-sm font-medium text-neutral-700 rounded-md hover:bg-neutral-100">
              <FiUsers className="mr-3 h-5 w-5 text-neutral-500" />
              PMO Services
            </Link>
          </div>
          
          <div className="mt-8 pt-8 border-t border-neutral-200">
            <div className="space-y-1">
              <Link href="/training" className="flex items-center px-4 py-2 text-sm font-medium text-neutral-700 rounded-md hover:bg-neutral-100">
                <FiHelpCircle className="mr-3 h-5 w-5 text-neutral-500" />
                Training & Support
              </Link>
              
              <Link href="/settings" className="flex items-center px-4 py-2 text-sm font-medium text-neutral-700 rounded-md hover:bg-neutral-100">
                <FiSettings className="mr-3 h-5 w-5 text-neutral-500" />
                Settings
              </Link>
            </div>
          </div>
        </nav>
        
        <div className="p-4 border-t border-neutral-200">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center">
              <span className="text-neutral-700 text-sm font-medium">U</span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-neutral-900">User Name</p>
              <p className="text-xs text-neutral-500">user@company.com</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile header */}
        <header className="md:hidden navbar">
          <div className="flex items-center justify-between p-4">
            <button className="text-neutral-500">
              <FiMenu className="h-6 w-6" />
            </button>
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-md bg-primary-500 flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="text-xl font-semibold text-neutral-900">Stratego</span>
            </Link>
            <div className="w-6"></div> {/* Spacer for alignment */}
          </div>
        </header>
        
        {/* Desktop header */}
        <header className="hidden md:flex items-center justify-between p-4 navbar">
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold text-neutral-900">Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-md text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100">
              <FiHelpCircle className="h-5 w-5" />
            </button>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center">
                <span className="text-neutral-700 text-sm font-medium">U</span>
              </div>
            </div>
          </div>
        </header>
        
        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}