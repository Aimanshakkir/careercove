import React from 'react';
import { FileText, MapPin, DollarSign, Clock } from 'lucide-react';
import Sidebar from '../../components/Sidebar';

const AppliedJobsPage = ({
  userRole,
  currentScreen,
  setCurrentScreen,
  getUserApplications,
  jobs
}) => {
    const userApplications = getUserApplications();
  
  return (
    <div className="flex">
      <Sidebar userRole={userRole} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
      <div className="flex-1 p-8 bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Applied Jobs</h1>
        
        {userApplications.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-600 mb-2">No Applications Yet</h2>
            <p className="text-gray-500 mb-4">You haven't applied to any jobs yet.</p>
            <button
              onClick={() => setCurrentScreen('browseJobs')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
            >
              Browse Jobs
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {userApplications.map((app) => {
              const job = jobs.find(j => j.id === app.jobId);
              return (
                <div key={app.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">{app.jobTitle}</h2>
                      <p className="text-gray-600 mb-2 font-medium">{job?.company}</p>
                      <p className="text-gray-700 mb-4">{job?.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-600">{job?.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-600">{job?.salary || 'Not specified'}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-600">Applied: {app.appliedDate}</span>
                        </div>
                      </div>

                      {job?.requirements && (
                        <p className="text-sm text-gray-600 mb-4">
                          <strong>Requirements:</strong> {job.requirements}
                        </p>
                      )}
                    </div>
                    
                    <div className="ml-6">
                      <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        app.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        app.status === 'reviewed' ? 'bg-blue-100 text-blue-800' :
                        app.status === 'rejected' ? 'bg-red-100 text-red-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AppliedJobsPage;