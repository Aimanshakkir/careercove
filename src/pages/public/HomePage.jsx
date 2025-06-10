import React from 'react';
import { Search, FileText, Users } from 'lucide-react';

const HomePage = ({ 
  jobs, 
  applications, 
  users, 
  setCurrentScreen, 
  searchTerm, 
  setSearchTerm, 
  locationFilter, 
  setLocationFilter, 
  locations 
}) => {
    return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-6">
            Find Your Dream Job
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Connect with top employers and discover exciting career opportunities 
            that match your skills and aspirations.
          </p>
          
          {/* Quick job search */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Search jobs, companies, keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Locations</option>
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
                <button
                  onClick={() => setCurrentScreen('browseJobs')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center space-x-2"
                >
                  <Search className="h-5 w-5" />
                  <span>Search Jobs</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <button 
              onClick={() => setCurrentScreen('signup')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-200 shadow-lg"
            >
              Get Started
            </button>
            <button 
              onClick={() => setCurrentScreen('login')}
              className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-blue-600 transition duration-200 shadow-lg"
            >
              Login
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{jobs.filter(j => j.isActive).length}</div>
              <div className="text-gray-600">Active Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{applications.length}</div>
              <div className="text-gray-600">Applications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">{[...new Set(jobs.map(j => j.company))].length}</div>
              <div className="text-gray-600">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">{users.length}</div>
              <div className="text-gray-600">Job Seekers</div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Advanced Search</h3>
            <p className="text-gray-600">Filter jobs by location, salary, type, and more to find perfect matches.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">One-Click Apply</h3>
            <p className="text-gray-600">Apply to multiple jobs quickly and track all your applications in one place.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Direct Contact</h3>
            <p className="text-gray-600">Connect directly with recruiters and get faster responses to your applications.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;