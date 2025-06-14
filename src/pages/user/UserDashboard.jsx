// import React from 'react';
// import { FileText, Briefcase, Clock, Eye } from 'lucide-react';
// import Sidebar from '../../components/Sidebar';

// const UserDashboard = ({ 
//   jobs, 
//   getUserApplications, 
//   getFilteredJobs, 
//   applyForJob, 
//   setCurrentScreen,
//   userRole,
//   currentScreen 
// }) => {
//     const userApplications = getUserApplications();
  
//   return (
//     <div className="flex">
//       <Sidebar userRole={userRole} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
//       <div className="bg-hero h-[400px] min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex-1 p-8 bg-gray-50">
//         <h1 className="text-3xl font-bold text-[#66FCF1] mb-8">Welcome to Your Dashboard</h1>
        
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-600">Applied Jobs</p>
//                 <p className="text-2xl font-bold text-blue-600">{userApplications.length}</p>
//               </div>
//               <FileText className="h-10 w-10 text-blue-600" />
//             </div>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-600">Available Jobs</p>
//                 <p className="text-2xl font-bold text-green-600">{jobs.filter(j => j.isActive).length}</p>
//               </div>
//               <Briefcase className="h-10 w-10 text-green-600" />
//             </div>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-600">Pending Reviews</p>
//                 <p className="text-2xl font-bold text-yellow-600">
//                   {userApplications.filter(app => app.status === 'pending').length}
//                 </p>
//               </div>
//               <Clock className="h-10 w-10 text-yellow-600" />
//             </div>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-600">Profile Views</p>
//                 <p className="text-2xl font-bold text-purple-600">24</p>
//               </div>
//               <Eye className="h-10 w-10 text-purple-600" />
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-semibold mb-4">Recent Applications</h2>
//             {userApplications.length === 0 ? (
//               <div className="text-center py-8">
//                 <FileText className="h-12 w-12 text-gray-400 mx-auto mb-3" />
//                 <p className="text-gray-600 mb-4">No applications yet</p>
//                 <button
//                   onClick={() => setCurrentScreen('browseJobs')}
//                   className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
//                 >
//                   Browse Jobs
//                 </button>
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 {userApplications.slice(0, 5).map((app) => (
//                   <div key={app.id} className="flex justify-between items-center border-b pb-3">
//                     <div>
//                       <h3 className="font-semibold">{app.jobTitle}</h3>
//                       <p className="text-sm text-gray-500">Applied: {app.appliedDate}</p>
//                     </div>
//                     <span className={`px-3 py-1 rounded-full text-sm font-medium ${
//                       app.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
//                       app.status === 'reviewed' ? 'bg-blue-100 text-blue-800' :
//                       app.status === 'rejected' ? 'bg-red-100 text-red-800' :
//                       'bg-green-100 text-green-800'
//                     }`}>
//                       {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-semibold mb-4">Recommended Jobs</h2>
//             <div className="space-y-4">
//               {getFilteredJobs().slice(0, 3).map((job) => (
//                 <div key={job.id} className="border border-gray-200 rounded-lg p-4">
//                   <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
//                   <p className="text-gray-600 mb-2">{job.company}</p>
//                   <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
//                     <span>📍 {job.location}</span>
//                     <span>💰 {job.salary}</span>
//                   </div>
//                   <button
//                     onClick={() => applyForJob(job.id)}
//                     disabled={userApplications.find(app => app.jobId === job.id)}
//                     className={`w-full py-2 rounded-lg font-medium transition duration-200 ${
//                       userApplications.find(app => app.jobId === job.id)
//                         ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
//                         : 'bg-blue-600 hover:bg-blue-700 text-white'
//                     }`}
//                   >
//                     {userApplications.find(app => app.jobId === job.id) ? 'Applied' : 'Apply Now'}
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;

import React from 'react';
import { FileText, Briefcase, Clock, Eye } from 'lucide-react';
import Sidebar from '../../components/Sidebar';

const UserDashboard = ({ 
  jobs, 
  getUserApplications, 
  getFilteredJobs, 
  applyForJob, 
  setCurrentScreen,
  userRole,
  currentScreen 
}) => {
  const userApplications = getUserApplications();

  return (
    <div className="flex bg-[#0B0C10] min-h-screen">
      <Sidebar userRole={userRole} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
      
      <div className="flex-1 p-8 text-white bg-gradient-to-br from-[#1F2833] to-[#0B0C10]">
        <h1 className="text-4xl font-bold text-[#66FCF1] mb-10">Welcome to Your Dashboard</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <Card title="Applied Jobs" value={userApplications.length} icon={FileText} color="text-[#45A29E]" />
          <Card title="Available Jobs" value={jobs.filter(j => j.isActive).length} icon={Briefcase} color="text-green-400" />
          <Card title="Pending Reviews" value={userApplications.filter(app => app.status === 'pending').length} icon={Clock} color="text-yellow-400" />
          <Card title="Profile Views" value={24} icon={Eye} color="text-purple-400" />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Applications */}
          <div className="bg-[#1F2833] p-6 rounded-xl shadow-lg border border-[#45A29E]/20">
            <h2 className="text-2xl font-semibold mb-4 text-[#66FCF1]">Recent Applications</h2>
            {userApplications.length === 0 ? (
              <div className="text-center py-8 text-gray-400">
                <FileText className="h-12 w-12 mx-auto mb-3" />
                <p className="mb-4">No applications yet</p>
                <button
                  onClick={() => setCurrentScreen('browseJobs')}
                  className="bg-[#45A29E] hover:bg-[#66FCF1] text-black px-4 py-2 rounded-lg transition"
                >
                  Browse Jobs
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {userApplications.slice(0, 5).map((app) => (
                  <div key={app.id} className="flex justify-between items-center border-b border-gray-600 pb-3">
                    <div>
                      <h3 className="font-semibold">{app.jobTitle}</h3>
                      <p className="text-sm text-gray-400">Applied: {app.appliedDate}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      app.status === 'pending' ? 'bg-yellow-500/20 text-yellow-300' :
                      app.status === 'reviewed' ? 'bg-blue-500/20 text-blue-300' :
                      app.status === 'rejected' ? 'bg-red-500/20 text-red-300' :
                      'bg-green-500/20 text-green-300'
                    }`}>
                      {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Recommended Jobs */}
          <div className="bg-[#1F2833] p-6 rounded-xl shadow-lg border border-[#45A29E]/20">
            <h2 className="text-2xl font-semibold mb-4 text-[#66FCF1]">Recommended Jobs</h2>
            <div className="space-y-4">
              {getFilteredJobs().slice(0, 3).map((job) => (
                <div key={job.id} className="border border-gray-700 rounded-lg p-4 bg-[#0B0C10]/60">
                  <h3 className="font-semibold text-lg text-white mb-2">{job.title}</h3>
                  <p className="text-gray-400 mb-2">{job.company}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span>📍 {job.location}</span>
                    <span>💰 {job.salary}</span>
                  </div>
                  <button
                    onClick={() => applyForJob(job.id)}
                    disabled={userApplications.find(app => app.jobId === job.id)}
                    className={`w-full py-2 rounded-lg font-medium transition duration-200 ${
                      userApplications.find(app => app.jobId === job.id)
                        ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                        : 'bg-[#45A29E] hover:bg-[#66FCF1] text-black'
                    }`}
                  >
                    {userApplications.find(app => app.jobId === job.id) ? 'Applied' : 'Apply Now'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, value, icon: Icon, color }) => (
  <div className="bg-[#1F2833] p-6 rounded-xl shadow-md border border-[#45A29E]/20">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-400">{title}</p>
        <p className={`text-3xl font-bold ${color}`}>{value}</p>
      </div>
      <Icon className={`h-10 w-10 ${color}`} />
    </div>
  </div>
);

export default UserDashboard;
