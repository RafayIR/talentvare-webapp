import Link from "next/link";
import Image from "next/image";


export const JobList = ({ jobs, title, bookmarked, toggleBookmark }) => (
  <div className="featured-jobs-wrapper mb-8">
    <div className="flex items-center mb-4">
      <h2 className="job-title">{title}</h2>
      <Link href="#" className="text-primary cursor-pointer">See {title}</Link>
    </div>
    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 jobs-card">
      {jobs.map((job) => (
        <div key={job.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-4 py-2">
            <span className="promoted-title">Promoted</span>
            <div className="flex items-start justify-between mt-2">
              <div className="flex items-start space-x-2">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image src='/assets/icons/teams-icon.svg' alt="Teams" width={40} height={40} />
                </div>
                <div className="job-info">
                  <h3>{job.title}</h3>
                  <p>{job.company}</p>
                </div>
              </div>
            </div>
            <div className="job-location">
              <div className="flex items-center">
                <span>{job.location}</span>
              </div>
              <div className="flex items-center">
                <span>{job.date} | <label className="text-primary ml-1">{job.applicants} applicants</label></span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4 apply-btn-wrapper">
              <button className="md:w-[80%] w-[90%] apply-btn bg-primary text-white py-2 rounded-md cursor-pointer">
                Apply Now
              </button>
              <button
                onClick={() => toggleBookmark(`${job.id}`)}
                className="text-gray-400 hover:text-primary cursor-pointer"
              >
                {bookmarked[`${job.id}`] ? (
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);