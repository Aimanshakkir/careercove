import React from 'react';
import { Search, FileText, BrainCog, BarChart3, Sparkles } from 'lucide-react';

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
      <div>
    <div className="bg-hero h-[400px] min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="font-mono font-bold text-6xl  text-[#66FCF1] mb-6">
            Get free. Get hired
          </h1>
          <p className=" font-mono text-xl text-[#45A29E]  mb-12 max-w-2xl mx-auto ">
            Looking for the right job? Let top employers find you — with roles that suit your skills and dreams
          </p>

          {/* Quick job search */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-[#1F2833] p-6 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Search jobs, companies, keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-600 rounded-lg bg-[#0B0C10] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#66FCF1]"
                />
                <select
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="px-4 py-3 border border-gray-600 rounded-lg bg-[#0B0C10] text-white focus:outline-none focus:ring-2 focus:ring-[#66FCF1]"
                >
                  <option value="">All Locations</option>
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
                <button
                  onClick={() => setCurrentScreen('browseJobs')}
                  className="bg-[#66FCF1] hover:bg-[#45A29E] text-black px-8 py-3 rounded-lg flex items-center space-x-2"
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
              className="bg-[#66FCF1] hover:bg-[#45A29E] text-black px-8 py-4 rounded-lg text-lg font-semibold transition duration-200 shadow-lg"
            >
              Get Started
            </button>
            <button 
              onClick={() => setCurrentScreen('login')}
              className="bg-[#0B0C10] hover:bg-[#1F2833] text-[#66FCF1] px-8 py-4 rounded-lg text-lg font-semibold border-2 border-[#66FCF1] transition duration-200 shadow-lg"
            >
              Login
            </button>
          </div>

          {/* Stats */}
          <div className=" grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#66FCF1]">{jobs.filter(j => j.isActive).length}</div>
              <div className="text-gray-300">Active Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#66FCF1]">{applications.length}</div>
              <div className="text-gray-300">Applications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#66FCF1]">{[...new Set(jobs.map(j => j.company))].length}</div>
              <div className="text-gray-300">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#66FCF1]">{users.length}</div>
              <div className="text-gray-300">Job Seekers</div>
            </div>
          </div>
        </div>

        {/* New Bottom Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-[#1F2833] p-8 rounded-xl shadow-lg text-center">
            <Sparkles className="h-12 w-12 text-[#66FCF1] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-white">Smart Job Matching</h3>
            <p className="text-gray-400">Let AI recommend jobs that fit your profile, skills, and goals.</p>
          </div>
          <div className="bg-[#1F2833] p-8 rounded-xl shadow-lg text-center">
            <FileText className="h-12 w-12 text-[#66FCF1] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-white">Resume Builder</h3>
            <p className="text-gray-400">Create professional resumes and cover letters directly from your profile.</p>
          </div>
          <div className="bg-[#1F2833] p-8 rounded-xl shadow-lg text-center">
            <BarChart3 className="h-12 w-12 text-[#66FCF1] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-white">Real-Time Insights</h3>
            <p className="text-gray-400">Track application views and know your shortlist chances.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
