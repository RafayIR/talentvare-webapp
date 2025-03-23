'use client'
import { useState } from "react";
import useSidebarStore from "@/lib/stores/sidebarStore";
import Image from "next/image"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isSidebarOpen, closeSidebar } = useSidebarStore();

  return (
    <>
      {/* Profile Sidebar */}
      <div className={`sidebar-wrapper w-full col-span-3 ${isSidebarOpen ? 'active' : ''}`}>
        <button className="crossbtn mb-4 lg:hidden" onClick={closeSidebar} >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="4" x2="20" y2="20" />
            <line x1="20" y1="4" x2="4" y2="20" />
          </svg>
        </button>
        <div className="profile-wrapper rounded-lg overflow-hidden bg-white mb-3">
          <div className="relative">
            <div className="h-32 bg-gray-300">
              <Image src="/assets/images/sidebar/cover.png" alt="Cover" width={346} height={100} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
              <div className="w-22 h-22 rounded-full border-3 border-white overflow-hidden">
                <Image src="/assets/images/sidebar/profile.png" alt="Profile" width={90} height={90} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="profile-title pt-12 pb-4 text-center">
            <h3>Albert Flores</h3>
            <p>Senior Product Designer | UI/UX Designer | Graphic Designer | Web Designer</p>
            <span className="text-xs mt-1">Clinton, Maryland</span>
          </div>
        </div>

        <div className="stats-wrapper rounded-lg overflow-hidden bg-white mb-3 p-4">
          <div className="stats flex justify-between items-center py-2">
            <span>Profile Visitors</span>
            <span className="text-primary">140</span>
          </div>
          <div className="stats flex justify-between items-center border-t border-gray-200 py-2">
            <span>Resume Viewers</span>
            <span className="text-primary">20</span>
          </div>
          <div className="stats flex justify-between items-center border-t border-gray-200 py-2">
            <span>My Jobs</span>
            <span className="text-primary">88</span>
          </div>
        </div>

        <div className="upcoming-events-wrapper rounded-lg overflow-hidden bg-white mb-3 p-4">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <span className="title">My calendar</span>
            <svg className={`w-4 h-4 text-gray-400 transition-transform duration-300  ${isOpen ? "rotate-180" : "rotate-0"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <p>Upcoming Interviews</p>
          <div
            className={`overflow-hidden event-dropdown transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`} >
            <div className="mt-2">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="flex items-center p-3 rounded-lg">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                    alt="figma-logo"
                    className="w-7 h-7 mr-3"
                  />
                  <div className="flex-1">
                    <p className="job-title">UI UX Designer</p>
                    <p className="job-field">Figma</p>
                    <p className="job-nature">16th Feb | 13:45 | Remote</p>
                  </div>
                  <button className="bg-green-200 text-green-800 px-2 py-1 rounded-lg">
                    Accepted
                  </button>
                  <button className="ml-2 hover:bg-red-400 hover:text-[#fff] rounded-lg px-1 py-1">
                    Deny
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Sidebar