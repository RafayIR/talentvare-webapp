'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ProfileWrapper from "./ProfileWrapper";

const DashboardMain = () => {
  const [bookmarked, setBookmarked] = useState({});

  const toggleBookmark = (id) => {
    setBookmarked(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <>
      <div className="md:col-span-9 col-span-12">
        <div className="dashboard-wrapper">
          <div className="md:hidden">
            <ProfileWrapper dashboard />
          </div>

          <div className="dashboard-desc py-6">
            <h1 className="text-2xl mb-1">Find your Dream Job, <span className="text-primary">Albert!</span></h1>
            <p className="dasboard-txt mb-6">Explore the latest job openings and apply for the best opportunities available today!</p>
          </div>



          <div className="bg-white rounded-md px-5 py-5 flex lg:flex-row flex-wrap gap-4 mb-6">


            <div className="input-wrapper w-full lg:flex-1">
              <input className="border-none px-4 py-2 font-light" type="text"
                placeholder="Job Title, Company, or Keywords" />
            </div>


            <div className="select-wrapper relative w-full lg:w-42">
              <select className="w-full appearance-none px-4 py-2 bg-white font-light">
                <option>Select Location</option>
              </select>
              <svg className="w-4 h-4 text-gray-400 absolute right-3 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>


            <div className="select-wrapper relative w-full lg:w-42">
              <select className="w-full appearance-none px-4 py-2 bg-white font-light">
                <option>Job Type</option>
              </select>
              <svg className="w-4 h-4 text-gray-400 absolute right-3 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>


            <div className="btn-wrapper">
              <button className="bg-primary text-white font-light px-8 py-2 rounded-lg flex items-center justify-center text-[14px]">
                <svg className="mr-2" width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.25 17L13.6566 14.4066" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                  <path d="M12.8477 7.5487C12.8428 8.96647 12.3401 10.3375 11.4274 11.4224C10.5146 12.5072
                 9.24973 13.237 7.85367 13.4842C6.45762 13.7315 5.01908 13.4805 3.78925 12.775C2.55943
                  12.0696 1.61647 10.9546 1.12504 9.62471C0.63362 8.29482 0.624957 6.83456 1.10057 
                  5.49894C1.57618 4.16331 2.50583 3.0372 3.7272 2.31723C4.94857 1.59726 6.38403 
                  1.32921 7.78292 1.55986C9.18181 1.79051 10.4552 2.50521 11.3808 3.57917"
                    stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                </svg>
                Search
              </button>
            </div>
          </div>


          <div className="similar-jobs">
            <span className="text-gray-600 font-light mr-2">Similar:</span>
            <div className="inline-flex flex-wrap gap-2">
              <button className="px-3 py-2 bg-gray-100 rounded-md text-sm">Frontend</button>
              <button className="px-3 py-2 bg-gray-100 rounded-md text-sm">Backend</button>
              <button className="px-3 py-2 bg-gray-100 rounded-md text-sm">Graphic Designer</button>
            </div>
          </div>
        </div>

        <div className="jobs-wrapper">
          {/* Featured Jobs */}
          <div className="featured-jobs-wrapper mb-8">
            <div className="flex items-center mb-4">
              <h2 className="job-title">Featured Jobs</h2>
              <Link href="#" className="text-primary cursor-pointer">See Featured Jobs</Link>
            </div>

            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 jobs-card">
              {[1, 2, 3, 4, 5].map((id) => (
                <div key={`featured-${id}`} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="px-4 py-2">
                    <span className="promoted-title">Promoted</span>
                    <div className="flex items-start justify-between mt-2">
                      <div className="flex items-start space-x-2">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <Image src='/assets/icons/teams-icon.svg' alt="Teams" width={40} height={40} />
                        </div>

                        <div className="job-info">
                          <h3>UI/UX Designer</h3>
                          <p>Teams</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-2 space-y-2 job-location">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>
                          Seattle, USA (Remote)
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>
                          1 day ago | <label className="text-primary ml-1">22 applicants</label>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4 apply-btn-wrapper">
                      <button className="w-[80%] apply-btn bg-primary text-white py-2 rounded-md">
                        Apply Now
                      </button>
                      <button
                        onClick={() => toggleBookmark(`featured-${id}`)}
                        className="text-gray-400 hover:text-blue-500"
                      >
                        {bookmarked[`featured-${id}`] ? (
                          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
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

          {/* Recommended Jobs */}
          <div className="featured-jobs-wrapper mb-8">
            <div className="flex items-center mb-4">
              <h2 className="job-title">Recommended Jobs</h2>
              <Link href="#" className="text-primary cursor-pointer">See Recommended Jobs</Link>
            </div>

            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 jobs-card">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
                <div key={`featured-${id}`} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="px-4 py-2">
                    <span className="promoted-title">Promoted</span>
                    <div className="flex items-start justify-between mt-2">
                      <div className="flex items-start space-x-2">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <Image src='/assets/icons/teams-icon.svg' alt="Teams" width={40} height={40} />
                        </div>

                        <div className="job-info">
                          <h3>UI/UX Designer</h3>
                          <p>Teams</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-2 space-y-2 job-location">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>
                          Seattle, USA (Remote)
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>
                          1 day ago | <label className="text-primary ml-1">22 applicants</label>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4 apply-btn-wrapper">
                      <button className="w-[80%] apply-btn bg-primary text-white py-2 rounded-md">
                        Apply Now
                      </button>
                      <button
                        onClick={() => toggleBookmark(`featured-${id}`)}
                        className="text-gray-400 hover:text-primary"
                      >
                        {bookmarked[`featured-${id}`] ? (
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

          {/* Latest Jobs */}
          <div className="featured-jobs-wrapper mb-8">
            <div className="flex items-center mb-4">
              <h2 className="job-title">Latest Jobs</h2>
              <Link href="#" className="text-primary cursor-pointer">See Latest Jobs</Link>
            </div>

            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 jobs-card">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
                <div key={`featured-${id}`} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="px-4 py-2">
                    <span className="promoted-title">Promoted</span>
                    <div className="flex items-start justify-between mt-2">
                      <div className="flex items-start space-x-2">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <Image src='/assets/icons/teams-icon.svg' alt="Teams" width={40} height={40} />
                        </div>

                        <div className="job-info">
                          <h3>UI/UX Designer</h3>
                          <p>Teams</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-2 space-y-2 job-location">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>
                          Seattle, USA (Remote)
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>
                          1 day ago | <label className="text-primary ml-1">22 applicants</label>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4 apply-btn-wrapper">
                      <button className="w-[80%] apply-btn bg-primary text-white py-2 rounded-md">
                        Apply Now
                      </button>
                      <button
                        onClick={() => toggleBookmark(`featured-${id}`)}
                        className="text-gray-400 hover:text-primary"
                      >
                        {bookmarked[`featured-${id}`] ? (
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
        </div>
      </div>
    </>
  )
}

export default DashboardMain;