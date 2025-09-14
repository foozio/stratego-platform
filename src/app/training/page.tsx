'use client';

import React, { useState } from 'react';

export default function TrainingConsultation() {
  const [activeTab, setActiveTab] = useState('courses');
  
  // Mock data for courses
  const courses = [
    {
      id: 1,
      title: 'Strategic Planning Fundamentals',
      description: 'Learn the core principles of strategic planning and execution',
      duration: '4 hours',
      level: 'Beginner',
      instructor: 'John Smith',
      rating: 4.8,
      enrolled: 1240,
      category: 'Strategy',
      thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 2,
      title: 'Maturity Assessment Mastery',
      description: 'Master the art of conducting maturity assessments',
      duration: '6 hours',
      level: 'Intermediate',
      instructor: 'Sarah Johnson',
      rating: 4.9,
      enrolled: 890,
      category: 'Assessment',
      thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 3,
      title: 'PMO Best Practices',
      description: 'Learn industry best practices for project management offices',
      duration: '8 hours',
      level: 'Advanced',
      instructor: 'Michael Roberts',
      rating: 4.7,
      enrolled: 650,
      category: 'PMO',
      thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 4,
      title: 'Magic Quadrant Analysis',
      description: 'How to create and interpret magic quadrant reports',
      duration: '3 hours',
      level: 'Intermediate',
      instructor: 'Lisa Chen',
      rating: 4.6,
      enrolled: 920,
      category: 'Analysis',
      thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
    }
  ];
  
  // Mock data for consultations
  const consultations = [
    {
      id: 1,
      title: 'Strategic Planning Workshop',
      description: 'Half-day workshop to align your team on strategic goals',
      duration: '4 hours',
      price: 2500,
      type: 'Workshop',
      availability: 'Next 3 weeks'
    },
    {
      id: 2,
      title: 'Maturity Assessment Review',
      description: 'Expert review of your current maturity assessment',
      duration: '2 hours',
      price: 1200,
      type: 'Consultation',
      availability: 'Next 2 weeks'
    },
    {
      id: 3,
      title: 'PMO Setup Advisory',
      description: 'Guidance on establishing a PMO function in your organization',
      duration: '6 hours',
      price: 3500,
      type: 'Advisory',
      availability: 'Next 4 weeks'
    }
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Training & Consultation</h1>
          <p className="mt-2 text-neutral-600">Enhance your strategic capabilities with expert training and guidance</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="btn btn-primary">Request Consultation</button>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="border-b border-neutral-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('courses')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'courses'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
            }`}
          >
            Courses
          </button>
          <button
            onClick={() => setActiveTab('consultations')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'consultations'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
            }`}
          >
            Consultations
          </button>
          <button
            onClick={() => setActiveTab('my-learning')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'my-learning'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
            }`}
          >
            My Learning
          </button>
        </nav>
      </div>
      
      {/* Courses Tab */}
      {activeTab === 'courses' && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="card overflow-hidden">
                <div className="h-40 bg-neutral-200 overflow-hidden">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="badge badge-primary">{course.category}</span>
                    <span className="text-sm text-neutral-500">{course.duration}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-medium text-neutral-900">{course.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{course.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-warning" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-sm text-neutral-600">{course.rating}</span>
                      <span className="mx-2 text-neutral-300">•</span>
                      <span className="text-sm text-neutral-600">{course.enrolled} enrolled</span>
                    </div>
                    <span className="badge badge-neutral">{course.level}</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm text-neutral-600">by {course.instructor}</div>
                    <button className="btn btn-secondary btn-sm">Enroll</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Consultations Tab */}
      {activeTab === 'consultations' && (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {consultations.map((consultation) => (
              <div key={consultation.id} className="card">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="badge badge-warning">{consultation.type}</span>
                    <span className="text-lg font-semibold text-neutral-900">${consultation.price}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-medium text-neutral-900">{consultation.title}</h3>
                  <p className="mt-2 text-neutral-600">{consultation.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="ml-2 text-sm text-neutral-600">{consultation.duration}</span>
                    </div>
                    <span className="text-sm text-neutral-600">{consultation.availability}</span>
                  </div>
                  <div className="mt-6">
                    <button className="btn btn-primary w-full">Book Consultation</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* My Learning Tab */}
      {activeTab === 'my-learning' && (
        <div>
          <div className="card">
            <div className="px-6 py-5 border-b border-neutral-200">
              <h2 className="text-lg font-medium text-neutral-900">My Enrolled Courses</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-neutral-200">
                <thead className="bg-neutral-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Course
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Progress
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Instructor
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Enrolled
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-neutral-900">Strategic Planning Fundamentals</div>
                      <div className="text-sm text-neutral-500">Strategy</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-full bg-neutral-200 rounded-full h-2">
                        <div className="bg-primary-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      <div className="text-sm text-neutral-500 mt-1">65% complete</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                      John Smith
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                      2 weeks ago
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-primary-500 hover:text-primary-700">
                        Continue
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-neutral-900">Maturity Assessment Mastery</div>
                      <div className="text-sm text-neutral-500">Assessment</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-full bg-neutral-200 rounded-full h-2">
                        <div className="bg-success h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                      <div className="text-sm text-neutral-500 mt-1">Completed</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                      Sarah Johnson
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                      1 month ago
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-primary-500 hover:text-primary-700">
                        Review
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="p-3 rounded-lg bg-primary-100">
                    <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-neutral-500">Courses Enrolled</h3>
                    <p className="text-2xl font-semibold text-neutral-900">5</p>
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
                    <h3 className="text-sm font-medium text-neutral-500">Courses Completed</h3>
                    <p className="text-2xl font-semibold text-neutral-900">2</p>
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
                    <h3 className="text-sm font-medium text-neutral-500">Hours Learned</h3>
                    <p className="text-2xl font-semibold text-neutral-900">18</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}