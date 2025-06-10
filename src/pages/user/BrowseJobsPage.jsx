import React from 'react';
import { Search, MapPin, DollarSign, Clock } from 'lucide-react';
import Sidebar from '../../components/Sidebar';

const BrowseJobsPage = ({
  userRole,
  currentScreen,
  setCurrentScreen,
  getFilteredJobs,
  getUserApplications,
  applyForJob,
  searchTerm,
  setSearchTerm,
  locationFilter,
  setLocationFilter,
  jobTypeFilter,
  setJobTypeFilter,
  sortBy,
  setSortBy,
  locations,
  jobTypes,
  jobs
}) => {
    const filteredJobs = getFilteredJobs();
  
  return (
    <div className="flex">
      <Sidebar userRole={userRole} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
      <div className="flex-1 p-8 bg-gray-50">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Browse Jobs</h1>
          
          {/* Enhanced Search and Filters */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <input
                type="text"
                placeholder="Search jobs, companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="col-span-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Locations</option>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
              <select
                value={jobTypeFilter}
                onChange={(e) => setJobTypeFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Job Types</option>
                {jobTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="title">By Title</option>
              </select>
            </div>
            
            <div className="mt-4 flex justify-between items-center">
              <p className="text-gray-600">
                Showing {filteredJobs.length} of {jobs.filter(j => j.isActive).length} jobs
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setLocationFilter('');
                  setJobTypeFilter('');
                  setSortBy('newest');
                }}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {filteredJobs.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-600 mb-2">No jobs found</h2>
              <p className="text-gray-500">Try adjusting your search criteria</p>
            </div>
          ) : (
            filteredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        New
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3 font-medium">{job.company}</p>
                    <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{job.salary || 'Not specified'}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{job.jobType}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm text-gray-600">
                        <strong>Requirements:</strong> {job.requirements || 'Not specified'}
                      </p>
                      <p className="text-xs text-gray-500 mt-2">Posted: {job.postedDate}</p>
                    </div>
                  </div>
                  
                  <div className="ml-6 flex flex-col space-y-2">
                    <button
                      onClick={() => applyForJob(job.id)}
                      disabled={getUserApplications().find(app => app.jobId === job.id)}
                      className={`px-6 py-2 rounded-lg font-semibold transition duration-200 ${
                        getUserApplications().find(app => app.jobId === job.id)
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}
                    >
                      {getUserApplications().find(app => app.jobId === job.id) ? 'Applied' : 'Apply Now'}
                    </button>
                    <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition duration-200">
                      Save Job
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BrowseJobsPage;