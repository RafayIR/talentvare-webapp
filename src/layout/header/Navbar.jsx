import Link from "next/link";

const Navbar = () => {

  return (
    <>
      <nav className="navbar lg:space-x-6 md:space-x-4">
        <span className="font-medium text-primary find-job">Find Jobs</span>
        <Link href="#" className="font-light hover:text-primary">Top Companies</Link>
        <Link href="#" className="font-light hover:text-primary">Job Tracker</Link>
        <Link href="#" className="font-light hover:text-primary">My Calendar</Link>
        <Link href="#" className="font-light hover:text-primary">Documents</Link>
        <Link href="#" className="font-light hover:text-primary">Messages</Link>
        <Link href="#" className="font-light hover:text-primary">Notifications</Link>
      </nav>
    </>
  )
}

export default Navbar;