import React, { ReactNode } from 'react';
import Link from 'next/link';
import { FiHome, FiBarChart2, FiGrid, FiUsers, FiSettings, FiHelpCircle, FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-supabase-gray-light">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-neutral-900 bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:static md:translate-x-0 md:shadow-none flex flex-col sidebar`}>
        <div className="flex items-center justify-between p-4 border-b border-neutral-200">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-md bg-supabase-green flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </div>
            <span className="text-xl font-semibold text-supabase-gray-dark">Stratego</span>
          </Link>
          <button 
            className="md:hidden text-neutral-500"
            onClick={() => setSidebarOpen(false)}
          >
            <FiX className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="flex-1 px-2 py-4 overflow-y-auto">
          <div className="space-y-1">
            <Link 
              href="/" 
              className="flex items-center px-4 py-2 text-sm font-medium text-neutral-700 rounded-md hover:bg-supabase-green-light hover:bg-opacity-20 hover:text-supabase-green"
              onClick={() => setSidebarOpen(false)}
            >
              <FiHome className="mr-3 h-5 w-5 text-neutral-500" />
              Dashboard
            </Link>
            
            <Link 
              href="/strategy" 
              className="flex items-center px-4 py-2 text-sm font-medium text-neutral-700 rounded-md hover:bg-supabase-green-light hover:bg-opacity-20 hover:text-supabase-green"
              onClick={() => setSidebarOpen(false)}
            >
              <FiBarChart2 className="mr-3 h-5 w-5 text-neutral-500" />
              Strategy Assessment
            </Link>
            
            <Link 
              href="/maturity" 
              className="flex items-center px-4 py-2 text-sm font-medium text-neutral-700 rounded-md hover:bg-supabase-green-light hover:bg-opacity-20 hover:text-supabase-green"
              onClick={() => setSidebarOpen(false)}
            >
              <FiGrid className="mr-3 h-5 w-5 text-neutral-500" />
              Maturity Index
            </Link>
            
            <Link 
              href="/quadrant" 
              className="flex items-center px-4 py-2 text-sm font-medium text-neutral-700 rounded-md hover:bg-supabase-green-light hover:bg-opacity-20 hover:text-supabase-green"
              onClick={() => setSidebarOpen(false)}
            >
              <FiGrid className="mr-3 h-5 w-5 text-neutral-500" />
              Magic Quadrant
            </Link>
            
            <Link 
              href="/pmo" 
              className="flex items-center px-4 py-2 text-sm font-medium text-neutral-700 rounded-md hover:bg-supabase-green-light hover:bg-opacity-20 hover:text-supabase-green"
              onClick={() => setSidebarOpen(false)}
            >
              <FiUsers className="mr-3 h-5 w-5 text-neutral-500" />
              PMO Services
            </Link>
          </div>
          
          <div className="mt-8 pt-8 border-t border-neutral-200">
            <div className="space-y-1">
              <Link 
                href="/training" 
                className="flex items-center px-4 py-2 text-sm font-medium text-neutral-700 rounded-md hover:bg-supabase-green-light hover:bg-opacity-20 hover:text-supabase-green"
                onClick={() => setSidebarOpen(false)}
              >
                <FiHelpCircle className="mr-3 h-5 w-5 text-neutral-500" />
                Training & Support
              </Link>
              
              <Link 
                href="/settings" 
                className="flex items-center px-4 py-2 text-sm font-medium text-neutral-700 rounded-md hover:bg-supabase-green-light hover:bg-opacity-20 hover:text-supabase-green"
                onClick={() => setSidebarOpen(false)}
              >
                <FiSettings className="mr-3 h-5 w-5 text-neutral-500" />
                Settings
              </Link>
            </div>
          </div>
        </nav>
        
        <div className="p-4 border-t border-neutral-200">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-supabase-green-light bg-opacity-20 flex items-center justify-center">
              <span className="text-supabase-green text-sm font-medium">U</span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-supabase-gray-dark">User Name</p>
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
            <button 
              className="text-neutral-500"
              onClick={() => setSidebarOpen(true)}
            >
              <FiMenu className="h-6 w-6" />
            </button>
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-md bg-supabase-green flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="text-xl font-semibold text-supabase-gray-dark">Stratego</span>
            </Link>
            <div className="w-6"></div> {/* Spacer for alignment */}
          </div>
        </header>
        
        {/* Desktop header */}
        <header className="hidden md:flex items-center justify-between p-4 navbar shadow-sm">
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold text-supabase-gray-dark">Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-md text-neutral-500 hover:text-supabase-green hover:bg-supabase-green-light hover:bg-opacity-20">
              <FiHelpCircle className="h-5 w-5" />
            </button>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-supabase-green-light bg-opacity-20 flex items-center justify-center">
                <span className="text-supabase-green text-sm font-medium">U</span>
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