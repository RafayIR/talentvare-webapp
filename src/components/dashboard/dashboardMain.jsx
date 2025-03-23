'use client'
import { useState } from "react";
import ProfileWrapper from "./ProfileWrapper";
import { jobData } from "@/data/jobsData";
import { JobList } from "./JobList";

const DashboardMain = () => {
  const [bookmarked, setBookmarked] = useState({});

  const toggleBookmark = (id) => {
    setBookmarked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <div className="md:col-span-9 col-span-12">
        <div className="dashboard-wrapper">
          <div className="md:hidden">
            <ProfileWrapper dashboard />
          </div>

          <div className="dashboard-desc md:py-4 py-6">
            <h1 className="text-2xl mb-1">Find your Dream Job, <span className="text-primary">Albert!</span></h1>
            <p className="dasboard-txt md:mb-6">Explore the latest job openings and apply for the best opportunities available today!</p>
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
            <div className="select-wrapper relative w-full lg:w-34">
              <select className="w-full appearance-none px-4 py-2 bg-white font-light">
                <option>Job Type</option>
              </select>
              <svg className="w-4 h-4 text-gray-400 absolute right-3 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="btn-wrapper">
              <button className="bg-primary cursor-pointer text-white font-light px-8 py-2 rounded-lg flex items-center justify-center text-[14px]">
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
          <JobList jobs={jobData.featured} title="Featured Jobs" bookmarked={bookmarked} toggleBookmark={toggleBookmark} />
          <JobList jobs={jobData.recommended} title="Recommended Jobs" bookmarked={bookmarked} toggleBookmark={toggleBookmark} />
          <JobList jobs={jobData.latest} title="Latest Jobs" bookmarked={bookmarked} toggleBookmark={toggleBookmark} />
        </div>
      </div>
    </>
  )
}



export default DashboardMain;