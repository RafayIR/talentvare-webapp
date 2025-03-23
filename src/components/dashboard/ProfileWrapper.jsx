import { useState } from "react";
import Image from "next/image";
import { useSidebarStore, usePopoverStore } from "@/lib/stores/sidebarStore";
import Backdrop from "../ui/Backfrop";



const ProfileWrapper = ({ dashboard }) => {
  const { togglePopover, isPopoverOpen, closePopover } = usePopoverStore()
  const { toggleSidebar, isSidebarOpen, closeSidebar } = useSidebarStore()

  return (
    <>
      <div className={`profile-wrapper bg-white ${dashboard ? 'dashboard-profile-wrapper' : 'rounded-lg overflow-hidden mb-3'}`}>
        <div className="relative">
          <div className="h-32 bg-gray-300">
            <Image src="/assets/images/sidebar/cover.png" alt="Cover" width={346} height={100} className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="w-22 h-22 rounded-full border-3 border-white overflow-hidden">
              <Image src="/assets/images/sidebar/profile.png" alt="Profile" width={90} height={90} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="profile-icon absolute right-2 top-35" onClick={togglePopover}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="5" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="12" cy="19" r="2" />
            </svg>
          </div>
          {/* Popover Menu */}
          {isPopoverOpen && (
            <div className="absolute right-6 top-36 bg-white shadow-lg rounded-md p-1 w-40 z-0">
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={toggleSidebar}>View Insights</button>
            </div>
          )}
        </div>

        <div className="profile-title pt-12 pb-4 text-center">
          <h3>Albert Flores</h3>
          <p>Senior Product Designer | UI/UX Designer | Graphic Designer | Web Designer</p>
          <span className="text-xs mt-1">Clinton, Maryland</span>
        </div>
      </div>

      <Backdrop
        isVisible={isSidebarOpen}
        onClose={() => {
          closePopover();
          closeSidebar();
        }}
      />

    </>
  )
}

export default ProfileWrapper;