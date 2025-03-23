import Link from "next/link";

const Navbar = () => {

  return (
    <>
      <nav className="navbar">
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-6 text-gray-600">
            <span className="ml-2 font-medium text-primary">Find Jobs</span>
            <Link href="#" className="font-light hover:text-primary">Top Companies</Link>
            <Link href="#" className="font-light hover:text-primary">Job Tracker</Link>
            <Link href="#" className="font-light hover:text-primary">My Calendar</Link>
            <Link href="#" className="font-light hover:text-primary">Documents</Link>
            <Link href="#" className="font-light hover:text-primary">Messages</Link>
            <Link href="#" className="font-light hover:text-primary">Notifications</Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;