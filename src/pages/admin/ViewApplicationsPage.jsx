import React from 'react';
import { Users } from 'lucide-react';
import Sidebar from '../../components/Sidebar';

const ViewApplicationsPage = ({
  userRole,
  currentScreen,
  setCurrentScreen,
  applications,
  updateApplicationStatus
}) => {
    return (
    <div className="flex">
      <Sidebar userRole={userRole} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
      <div className="flex-1 p-8 bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Job Applications</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">All Applications</h2>
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="reviewed">Reviewed</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>

          <div className="space-y-6">
            {applications.length === 0 ? (
              <div className="text-center py-8">
                <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">No Applications Yet</h3>
                <p className="text-gray-500">Applications will appear here once job seekers start applying.</p>
              </div>
            ) : (
              applications.map((application) => (
                <div key={application.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {application.jobTitle}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Applicant Name</p>
                          <p className="font-medium">{application.userName}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Email</p>
                          <p className="font-medium">{application.userEmail}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Applied Date</p>
                          <p className="font-medium">{application.appliedDate}</p>
                        </div>
                      </div>
                    </div>
                    <div className="ml-6 flex flex-col space-y-2">
                      <span className={`px-4 py-2 rounded-full text-sm font-semibold text-center ${
                        application.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        application.status === 'reviewed' ? 'bg-blue-100 text-blue-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                      </span>
                      {application.status === 'pending' && (
                        <>
                          <button
                            onClick={() => updateApplicationStatus(application.id, 'reviewed')}
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm"
                          >
                            Accept & Review
                          </button>
                          <button
                            onClick={() => updateApplicationStatus(application.id, 'rejected')}
                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm"
                          >
                            Reject
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewApplicationsPage;