'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import Link from "next/link";
import useSidebarStore from "@/lib/stores/sidebarStore";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isActiveSearch, setIsActiveSearch] = useState(false)
  const openSidebar = useSidebarStore((state) => state.openSidebar);
  const { isSidebarOpen, closeSidebar } = useSidebarStore();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup function to remove the class when component unmounts
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (

    <>
      <header className="bg-white py-4 header ">
        <div className="container relative">
          <div className="lg:flex grid md:grid-cols-3 grid-cols-2 items-center justify-between">
            <div className="logo-wrapper flex items-center">
              <Link href="/" className="logo">
                <Image src='/assets/images/logo/logo.svg' alt="Logo" width={40} height={40} />
              </Link>
            </div>

            <div className={`navbar-wrapper ${isOpen ? 'active' : ''}`}>
              <button className="crossbtn lg:hidden" onClick={() => { setIsOpen(false) }} >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="4" x2="20" y2="20" />
                  <line x1="20" y1="4" x2="4" y2="20" />
                </svg>
              </button>
              <button className="bg-primary resume-builder-btn text-white py-2 rounded-md font-light md:hidden" type="button">Resume Builder</button>
              <Navbar />
            </div>

            <div className={`search-wrapper ${isActiveSearch ? 'active' : ''}`}>
              <div className="flex items-center space-x-3">
                <div className="relative input-wrapper">
                  <span className="search-icon absolute top-2.5 left-2.5">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.4999 17.024L13.9065 14.4306" stroke="#737A91" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                      <path d="M13.0976 7.57274C13.0928 8.99051 12.5901 10.3615 11.6773 11.4464C10.7645 12.5313 9.49967 13.261 8.10361 
                      13.5083C6.70756 13.7555 5.26902 13.5045 4.03919 12.7991C2.80936 12.0936 1.86641 10.9786 1.37498 9.64874C0.883559 
                      8.31886 0.874896 6.85859 1.35051 5.52297C1.82611 4.18735 2.75577 3.06123 3.97714 2.34126C5.19851 1.62129 6.63397 1.35324
                       8.03286 1.58389C9.43175 1.81454 10.7052 2.52924 11.6308 3.6032"
                        stroke="#737A91" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-[#F6F9FF] py-2 pl-10 pr-4 font-light rounded-lg"
                  />
                </div>
                <button className="bg-primary resume-builder-btn text-white py-2 rounded-md font-light hidden lg:block" type="button">Resume Builder</button>
                <div className="w-8 h-8 rounded-full overflow-hidden  hidden lg:block">
                  <Image src="/assets/images/user/user-img.png" width={38} height={38} alt="User Image" />
                </div>
              </div>
            </div>

            <div className="menu-toggle-btn lg:hidden flex items-center justify-end">
              <button className="bg-primary resume-builder-btn text-white py-2 rounded-md font-light md:block hidden" type="button">Resume Builder</button>

              <button className="search-icon mr-2 md:hidden" onClick={() => { setIsActiveSearch(!isActiveSearch) }}>
                <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.4999 17.024L13.9065 14.4306" stroke="#737A91" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                  <path d="M13.0976 7.57274C13.0928 8.99051 12.5901 10.3615 11.6773 11.4464C10.7645 12.5313 9.49967 13.261 8.10361 
                      13.5083C6.70756 13.7555 5.26902 13.5045 4.03919 12.7991C2.80936 12.0936 1.86641 10.9786 1.37498 9.64874C0.883559 
                      8.31886 0.874896 6.85859 1.35051 5.52297C1.82611 4.18735 2.75577 3.06123 3.97714 2.34126C5.19851 1.62129 6.63397 1.35324
                       8.03286 1.58389C9.43175 1.81454 10.7052 2.52924 11.6308 3.6032"
                    stroke="#737A91" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                </svg>
              </button>

              <button onClick={openSidebar} className="w-6 h-6 rounded-full overflow-hidden md:block lg:hidden mr-2">
                <Image src="/assets/images/user/user-img.png" width={38} height={38} alt="User Image" />
              </button>



              <button className="pointer" onClick={() => { setIsOpen(!isOpen) }}>
                <svg width="24" height="24" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>


        {/* Backdrop */}
        {(isOpen || isActiveSearch || isSidebarOpen) && (
          <div
            className="backdrop fixed inset-0 bg-black/50 z-[1]"
            onClick={() => {
              setIsOpen(false);
              setIsActiveSearch(false);
              closeSidebar()
            }}
          ></div>
        )}
      </header>
    </>
  )
}


export default Header;