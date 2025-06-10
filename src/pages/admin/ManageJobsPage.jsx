import React, { useState, useCallback } from 'react';
import { Plus, Edit2, Trash2, Eye, X, AlertCircle } from 'lucide-react';
import Sidebar from '../../components/Sidebar';
import FormInput from '../../components/FormInput';
import FormSelect from '../../components/FormSelect';
import FormTextarea from '../../components/FormTextarea';
import { validateJobForm } from '../../utils/validation';

const ManageJobsPage = ({
  userRole,
  currentScreen,
  setCurrentScreen,
  jobs,
  addJob,
  updateJob,
  deleteJob,
  toggleJobStatus,
//   jobTypes
}) => {
    const [showJobForm, setShowJobForm] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [jobForm, setJobForm] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    jobType: '',
    requirements: '',
    description: ''
  });
  const [jobFormErrors, setJobFormErrors] = useState({});
  const [isJobFormSubmitting, setIsJobFormSubmitting] = useState(false);

  // Individual form handlers
  const handleJobTitleChange = useCallback((value) => {
    setJobForm(prev => ({ ...prev, title: value }));
    setJobFormErrors(prev => prev.title ? { ...prev, title: '' } : prev);
  }, []);

  const handleJobCompanyChange = useCallback((value) => {
    setJobForm(prev => ({ ...prev, company: value }));
    setJobFormErrors(prev => prev.company ? { ...prev, company: '' } : prev);
  }, []);

  const handleJobLocationChange = useCallback((value) => {
    setJobForm(prev => ({ ...prev, location: value }));
    setJobFormErrors(prev => prev.location ? { ...prev, location: '' } : prev);
  }, []);

  const handleJobSalaryChange = useCallback((value) => {
    setJobForm(prev => ({ ...prev, salary: value }));
    setJobFormErrors(prev => prev.salary ? { ...prev, salary: '' } : prev);
  }, []);

  const handleJobTypeChange = useCallback((value) => {
    setJobForm(prev => ({ ...prev, jobType: value }));
    setJobFormErrors(prev => prev.jobType ? { ...prev, jobType: '' } : prev);
  }, []);

  const handleJobRequirementsChange = useCallback((value) => {
    setJobForm(prev => ({ ...prev, requirements: value }));
    setJobFormErrors(prev => prev.requirements ? { ...prev, requirements: '' } : prev);
  }, []);

  const handleJobDescriptionChange = useCallback((value) => {
    setJobForm(prev => ({ ...prev, description: value }));
    setJobFormErrors(prev => prev.description ? { ...prev, description: '' } : prev);
  }, []);

  const resetJobForm = () => {
    setEditingJob(null);
    setJobForm({
      title: '',
      company: '',
      location: '',
      salary: '',
      jobType: '',
      requirements: '',
      description: ''
    });
    setJobFormErrors({});
    setShowJobForm(false);
  };

  const editJobHandler = (job) => {
    setEditingJob(job);
    setJobForm(job);
    setJobFormErrors({});
    setShowJobForm(true);
  };

  const submitJobForm = async () => {
    setIsJobFormSubmitting(true);
    const errors = validateJobForm(jobForm);
    setJobFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      setIsJobFormSubmitting(false);
      return;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      if (editingJob) {
        updateJob(editingJob.id, jobForm);
        alert('Job updated successfully!');
      } else {
        addJob(jobForm);
        alert('Job added successfully!');
      }
      
      resetJobForm();
    } catch (error) {
      setJobFormErrors({ general: 'Failed to save job. Please try again.' });
    } finally {
      setIsJobFormSubmitting(false);
    }
  };

  const JobFormModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-4xl w-full mx-4 max-h-96 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {editingJob ? 'Edit Job' : 'Add New Job'}
          </h2>
          <button
            onClick={resetJobForm}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {jobFormErrors.general && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center space-x-2">
              <AlertCircle className="h-5 w-5 text-red-600" />
              <span className="text-red-700">{jobFormErrors.general}</span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <FormInput
            label="Job Title"
            value={jobForm.title}
            onChange={handleJobTitleChange}
            error={jobFormErrors.title}
            placeholder="e.g. Frontend Developer"
            required
          />
          
          <FormInput
            label="Company Name"
            value={jobForm.company}
            onChange={handleJobCompanyChange}
            error={jobFormErrors.company}
            placeholder="e.g. Tech Solutions Inc."
            required
          />
          
          <FormInput
            label="Location"
            value={jobForm.location}
            onChange={handleJobLocationChange}
            error={jobFormErrors.location}
            placeholder="e.g. Kochi, Kerala"
            required
          />
          
          <FormInput
            label="Salary Range"
            value={jobForm.salary}
            onChange={handleJobSalaryChange}
            error={jobFormErrors.salary}
            placeholder="e.g. ₹5,00,000 - ₹8,00,000"
          />
          
          <FormSelect
            label="Job Type"
            value={jobForm.jobType}
            onChange={handleJobTypeChange}
            error={jobFormErrors.jobType}
            placeholder="Select Job Type"
            options={[
              { value: 'Full-time', label: 'Full-time' },
              { value: 'Part-time', label: 'Part-time' },
              { value: 'Contract', label: 'Contract' },
              { value: 'Internship', label: 'Internship' }
            ]}
            required
          />
          
          <FormInput
            label="Requirements"
            value={jobForm.requirements}
            onChange={handleJobRequirementsChange}
            error={jobFormErrors.requirements}
            placeholder="e.g. React, JavaScript, CSS"
            maxLength={500}
          />
        </div>

        <div className="mb-6">
          <FormTextarea
            label="Job Description"
            value={jobForm.description}
            onChange={handleJobDescriptionChange}
            error={jobFormErrors.description}
            placeholder="Detailed job description..."
            rows={6}
            maxLength={2000}
            required
          />
        </div>

        <div className="flex space-x-4">
          <button
            onClick={submitJobForm}
            disabled={isJobFormSubmitting}
            className={`px-6 py-3 rounded-lg font-semibold transition duration-200 ${
              isJobFormSubmitting
                ? 'bg-gray-400 cursor-not-allowed text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {isJobFormSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>{editingJob ? 'Updating...' : 'Adding...'}</span>
              </div>
            ) : (
              editingJob ? 'Update Job' : 'Add Job'
            )}
          </button>
          <button
            onClick={resetJobForm}
            disabled={isJobFormSubmitting}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-3 rounded-lg disabled:cursor-not-allowed"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex">
      <Sidebar userRole={userRole} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
      <div className="flex-1 p-8 bg-gray-50">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Manage Jobs</h1>
          <button
            onClick={() => setShowJobForm(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2"
          >
            <Plus className="h-4 w-4" />
            <span>Add New Job</span>
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">All Job Listings</h2>
          </div>

          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job.id} className="border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-lg">{job.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        job.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {job.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2 font-medium">{job.company}</p>
                    <p className="text-gray-700 mb-3">{job.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-3">
                      <span>📍 {job.location}</span>
                      <span>💰 {job.salary || 'Not specified'}</span>
                      <span>⏰ {job.jobType}</span>
                      <span>📅 Posted: {job.postedDate}</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      <strong>Requirements:</strong> {job.requirements || 'Not specified'}
                    </p>
                  </div>
                  <div className="ml-6 flex flex-col space-y-2">
                    <button
                      onClick={() => editJobHandler(job)}
                      className="bg-blue-100 text-blue-600 hover:bg-blue-200 px-4 py-2 rounded-lg flex items-center space-x-1"
                    >
                      <Edit2 className="h-4 w-4" />
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => toggleJobStatus(job.id)}
                      className={`px-4 py-2 rounded-lg flex items-center space-x-1 ${
                        job.isActive 
                          ? 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200'
                          : 'bg-green-100 text-green-600 hover:bg-green-200'
                      }`}
                    >
                      <Eye className="h-4 w-4" />
                      <span>{job.isActive ? 'Deactivate' : 'Activate'}</span>
                    </button>
                    <button
                      onClick={() => {
                        if (window.confirm('Are you sure you want to delete this job?')) {
                          deleteJob(job.id);
                        }
                      }}
                      className="bg-red-100 text-red-600 hover:bg-red-200 px-4 py-2 rounded-lg flex items-center space-x-1"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showJobForm && <JobFormModal />}
    </div>
  );
};

export default ManageJobsPage;