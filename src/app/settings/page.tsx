'use client';

import React, { useState } from 'react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@company.com',
    role: 'Administrator',
    timezone: 'America/New_York',
    notifications: {
      email: true,
      push: false,
      sms: false
    }
  });
  
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value
    });
  };
  
  const handleNotificationChange = (notificationType: string) => {
    setProfile({
      ...profile,
      notifications: {
        ...profile.notifications,
        [notificationType]: !profile.notifications[notificationType as keyof typeof profile.notifications]
      }
    });
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-neutral-900">Settings</h1>
        <p className="mt-2 text-neutral-600">Manage your account settings and preferences</p>
      </div>
      
      <div className="flex flex-col md:flex-row">
        {/* Sidebar Navigation */}
        <div className="md:w-64 md:pr-8">
          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md ${
                activeTab === 'profile'
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab('organization')}
              className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md ${
                activeTab === 'organization'
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              Organization
            </button>
            <button
              onClick={() => setActiveTab('notifications')}
              className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md ${
                activeTab === 'notifications'
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              Notifications
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md ${
                activeTab === 'security'
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              Security
            </button>
            <button
              onClick={() => setActiveTab('integrations')}
              className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md ${
                activeTab === 'integrations'
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              Integrations
            </button>
          </nav>
        </div>
        
        {/* Main Content */}
        <div className="flex-1">
          <div className="card">
            <div className="px-6 py-5 border-b border-neutral-200">
              <h2 className="text-lg font-medium text-neutral-900">
                {activeTab === 'profile' && 'Profile Settings'}
                {activeTab === 'organization' && 'Organization Settings'}
                {activeTab === 'notifications' && 'Notification Preferences'}
                {activeTab === 'security' && 'Security Settings'}
                {activeTab === 'integrations' && 'Integration Settings'}
              </h2>
            </div>
            <div className="p-6">
              {/* Profile Settings */}
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-neutral-200 flex items-center justify-center">
                        <span className="text-neutral-700 text-xl font-medium">JD</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <button className="btn btn-secondary btn-sm">
                        Change Avatar
                      </button>
                      <p className="mt-2 text-sm text-neutral-500">
                        JPG, GIF or PNG. Max size of 2MB
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="label">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={profile.name}
                        onChange={handleProfileChange}
                        className="input w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="label">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={profile.email}
                        onChange={handleProfileChange}
                        className="input w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="role" className="label">Role</label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        value={profile.role}
                        readOnly
                        className="input w-full bg-neutral-100"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="timezone" className="label">Timezone</label>
                      <select
                        id="timezone"
                        name="timezone"
                        value={profile.timezone}
                        onChange={handleProfileChange}
                        className="input w-full"
                      >
                        <option value="America/New_York">Eastern Time (US & Canada)</option>
                        <option value="America/Chicago">Central Time (US & Canada)</option>
                        <option value="America/Denver">Mountain Time (US & Canada)</option>
                        <option value="America/Los_Angeles">Pacific Time (US & Canada)</option>
                        <option value="Europe/London">London</option>
                        <option value="Europe/Paris">Paris</option>
                        <option value="Asia/Tokyo">Tokyo</option>
                        <option value="Asia/Singapore">Singapore</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button className="btn btn-primary">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}
              
              {/* Organization Settings */}
              {activeTab === 'organization' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="org-name" className="label">Organization Name</label>
                      <input
                        type="text"
                        id="org-name"
                        name="org-name"
                        defaultValue="Acme Corporation"
                        className="input w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="org-slug" className="label">Organization Slug</label>
                      <input
                        type="text"
                        id="org-slug"
                        name="org-slug"
                        defaultValue="acme-corp"
                        className="input w-full"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="org-description" className="label">Description</label>
                      <textarea
                        id="org-description"
                        name="org-description"
                        rows={3}
                        defaultValue="Leading provider of innovative solutions for enterprise clients."
                        className="input w-full"
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button className="btn btn-primary">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}
              
              {/* Notification Settings */}
              {activeTab === 'notifications' && (
                <div className="space-y-6">
                  <div className="border-b border-neutral-200 pb-5">
                    <h3 className="text-lg font-medium text-neutral-900">Communication Preferences</h3>
                    <p className="mt-1 text-sm text-neutral-500">
                      Select how you want to be notified about important events.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-neutral-900">Email Notifications</h4>
                        <p className="text-sm text-neutral-500">
                          Receive notifications via email
                        </p>
                      </div>
                      <button
                        onClick={() => handleNotificationChange('email')}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                          profile.notifications.email ? 'bg-primary-500' : 'bg-neutral-200'
                        }`}
                      >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                          profile.notifications.email ? 'translate-x-6' : 'translate-x-1'
                        }`} />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-neutral-900">Push Notifications</h4>
                        <p className="text-sm text-neutral-500">
                          Receive push notifications on your devices
                        </p>
                      </div>
                      <button
                        onClick={() => handleNotificationChange('push')}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                          profile.notifications.push ? 'bg-primary-500' : 'bg-neutral-200'
                        }`}
                      >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                          profile.notifications.push ? 'translate-x-6' : 'translate-x-1'
                        }`} />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-neutral-900">SMS Notifications</h4>
                        <p className="text-sm text-neutral-500">
                          Receive text messages for urgent notifications
                        </p>
                      </div>
                      <button
                        onClick={() => handleNotificationChange('sms')}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                          profile.notifications.sms ? 'bg-primary-500' : 'bg-neutral-200'
                        }`}
                      >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                          profile.notifications.sms ? 'translate-x-6' : 'translate-x-1'
                        }`} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="border-t border-neutral-200 pt-5">
                    <h3 className="text-lg font-medium text-neutral-900">Notification Events</h3>
                    <p className="mt-1 text-sm text-neutral-500">
                      Choose which events trigger notifications.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-neutral-200 rounded-lg p-4">
                      <h4 className="font-medium text-neutral-900">Strategy Updates</h4>
                      <p className="mt-1 text-sm text-neutral-500">
                        Changes to strategic plans and initiatives
                      </p>
                    </div>
                    
                    <div className="border border-neutral-200 rounded-lg p-4">
                      <h4 className="font-medium text-neutral-900">Project Milestones</h4>
                      <p className="mt-1 text-sm text-neutral-500">
                        Upcoming and completed project milestones
                      </p>
                    </div>
                    
                    <div className="border border-neutral-200 rounded-lg p-4">
                      <h4 className="font-medium text-neutral-900">Assessment Results</h4>
                      <p className="mt-1 text-sm text-neutral-500">
                        New maturity assessments and quadrant results
                      </p>
                    </div>
                    
                    <div className="border border-neutral-200 rounded-lg p-4">
                      <h4 className="font-medium text-neutral-900">Training Updates</h4>
                      <p className="mt-1 text-sm text-neutral-500">
                        Course recommendations and progress updates
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Security Settings */}
              {activeTab === 'security' && (
                <div className="space-y-6">
                  <div className="border-b border-neutral-200 pb-5">
                    <h3 className="text-lg font-medium text-neutral-900">Authentication</h3>
                    <p className="mt-1 text-sm text-neutral-500">
                      Manage your authentication methods and security settings.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-neutral-900">Password</h4>
                        <p className="text-sm text-neutral-500">
                          Last changed 3 months ago
                        </p>
                      </div>
                      <button className="btn btn-secondary">
                        Change Password
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-neutral-900">Two-Factor Authentication</h4>
                        <p className="text-sm text-neutral-500">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <button className="btn btn-secondary">
                        Enable
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-neutral-900">Active Sessions</h4>
                        <p className="text-sm text-neutral-500">
                          Manage devices that are currently signed in
                        </p>
                      </div>
                      <button className="btn btn-secondary">
                        View
                      </button>
                    </div>
                  </div>
                  
                  <div className="border-t border-neutral-200 pt-5">
                    <h3 className="text-lg font-medium text-neutral-900">Connected Accounts</h3>
                    <p className="mt-1 text-sm text-neutral-500">
                      Manage accounts connected to your profile.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-md bg-neutral-200 flex items-center justify-center">
                          <svg className="w-5 h-5 text-neutral-700" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium text-neutral-900">GitHub</h4>
                          <p className="text-sm text-neutral-500">
                            Connected
                          </p>
                        </div>
                      </div>
                      <button className="btn btn-danger">
                        Disconnect
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-md bg-neutral-200 flex items-center justify-center">
                          <svg className="w-5 h-5 text-neutral-700" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium text-neutral-900">Google</h4>
                          <p className="text-sm text-neutral-500">
                            Not connected
                          </p>
                        </div>
                      </div>
                      <button className="btn btn-secondary">
                        Connect
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Integration Settings */}
              {activeTab === 'integrations' && (
                <div className="space-y-6">
                  <div className="border-b border-neutral-200 pb-5">
                    <h3 className="text-lg font-medium text-neutral-900">Third-Party Integrations</h3>
                    <p className="mt-1 text-sm text-neutral-500">
                      Connect your favorite tools and services to enhance your workflow.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-neutral-200 rounded-lg p-5">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center">
                          <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-neutral-900">LinkedIn</h4>
                          <p className="text-sm text-neutral-500">
                            Sync your professional network
                          </p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <button className="btn btn-secondary w-full">
                          Connect
                        </button>
                      </div>
                    </div>
                    
                    <div className="border border-neutral-200 rounded-lg p-5">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-md bg-blue-500 flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-neutral-900">Twitter</h4>
                          <p className="text-sm text-neutral-500">
                            Share updates and insights
                          </p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <button className="btn btn-secondary w-full">
                          Connect
                        </button>
                      </div>
                    </div>
                    
                    <div className="border border-neutral-200 rounded-lg p-5">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-md bg-green-500 flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-neutral-900">Slack</h4>
                          <p className="text-sm text-neutral-500">
                            Get notified in your workspace
                          </p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <button className="btn btn-secondary w-full">
                          Connect
                        </button>
                      </div>
                    </div>
                    
                    <div className="border border-neutral-200 rounded-lg p-5">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-md bg-red-500 flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-neutral-900">YouTube</h4>
                          <p className="text-sm text-neutral-500">
                            Access training videos
                          </p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <button className="btn btn-secondary w-full">
                          Connect
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-neutral-200 pt-5">
                    <h3 className="text-lg font-medium text-neutral-900">API Access</h3>
                    <p className="mt-1 text-sm text-neutral-500">
                      Generate API keys to integrate with custom applications.
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-neutral-200 rounded-lg">
                    <div>
                      <h4 className="font-medium text-neutral-900">API Key</h4>
                      <p className="text-sm text-neutral-500">
                        Use this key to authenticate API requests
                      </p>
                    </div>
                    <button className="btn btn-secondary">
                      Generate New Key
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}