import React from 'react';
import { Plus, Briefcase, FileText, Eye, Clock, Edit2 } from 'lucide-react';
import Sidebar from '../../components/Sidebar';

const AdminDashboard = ({
  userRole,
  currentScreen,
  setCurrentScreen,
  jobs,
  applications
}) => {
     return (
    <div className="flex">
      <Sidebar userRole={userRole} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
      <div className="flex-1 p-8 bg-gray-50">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Recruiter Dashboard</h1>
          <button
            onClick={() => setCurrentScreen('manageJobs')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2"
          >
            <Plus className="h-4 w-4" />
            <span>Add New Job</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">Total Jobs</p>
                <p className="text-2xl font-bold text-blue-600">{jobs.length}</p>
              </div>
              <Briefcase className="h-10 w-10 text-blue-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">Active Jobs</p>
                <p className="text-2xl font-bold text-green-600">{jobs.filter(j => j.isActive).length}</p>
              </div>
              <Eye className="h-10 w-10 text-green-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">Applications</p>
                <p className="text-2xl font-bold text-purple-600">{applications.length}</p>
              </div>
              <FileText className="h-10 w-10 text-purple-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">Pending Reviews</p>
                <p className="text-2xl font-bold text-orange-600">
                  {applications.filter(app => app.status === 'pending').length}
                </p>
              </div>
              <Clock className="h-10 w-10 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Job Postings</h2>
            <div className="space-y-4">
              {jobs.slice(0, 5).map((job) => (
                <div key={job.id} className="flex justify-between items-center border-b pb-3">
                  <div>
                    <h3 className="font-semibold">{job.title}</h3>
                    <p className="text-gray-600 text-sm">{job.company} • {job.location}</p>
                    <p className="text-xs text-gray-500">Posted: {job.postedDate}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      job.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {job.isActive ? 'Active' : 'Inactive'}
                    </span>
                    <button
                      onClick={() => setCurrentScreen('manageJobs')}
                      className="p-1 text-blue-600 hover:bg-blue-50 rounded"
                    >
                      <Edit2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Applications</h2>
            <div className="space-y-4">
              {applications.slice(0, 5).map((app) => (
                <div key={app.id} className="flex justify-between items-center border-b pb-3">
                  <div>
                    <h3 className="font-semibold">{app.userName}</h3>
                    <p className="text-gray-600 text-sm">{app.jobTitle}</p>
                    <p className="text-xs text-gray-500">Applied: {app.appliedDate}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    app.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    app.status === 'reviewed' ? 'bg-blue-100 text-blue-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;