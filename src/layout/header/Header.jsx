import Image from "next/image";
import Navbar from "./Navbar";

const Header = () => {

  return (

    <>
      <header className="bg-white py-4 header">
        <div className="container">
          <div className=" flex items-center justify-between">
            <div className="logo-wrapper flex items-center">
              <div className="logo">
                <Image src='/assets/images/logo/logo.svg' alt="Logo" width={40} height={40} />
              </div>
            </div>

            <div className="navbar-wrapper">
              <Navbar />
            </div>

            <div className="search-wrapper">
              <div className="flex items-center space-x-4">
                <div className="relative">
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
                    className="bg-[#F6F9FF] py-2 pl-10 pr-4 font-light rounded-lg w-68"
                  />
                </div>
                <button className="bg-primary text-white px-6 py-2 rounded-md font-light" type="button">Resume Builder</button>
                <div className="w-8 h-8 bg-blue-100 rounded-full overflow-hidden">
                  <Image src="/assets/images/user/user-img.png" width={38} height={38} alt="User Image"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}


export default Header;