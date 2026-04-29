import Link from "next/link";
import { BiSolidCircle } from "react-icons/bi";
import { HiOutlineMenu } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import NavLink from "../NavLink";

const NavPage = () => {
  const menuItems = (
    <>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/Product">Products</NavLink>
      <NavLink href="/MyProfile">My Profile</NavLink>
    </>
  );

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 bg-linear-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center">
              <BiSolidCircle className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-lg sm:text-xl text-gray-900">
              SunCart
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            {menuItems}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/contact"
              className="p-2 hover:bg-orange-50 rounded-full transition"
              title="Profile"
            >
              <FaUserCircle className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 hover:text-orange-600" />
            </Link>
            
            <Link
              href="/LogIn"
              className="hidden sm:block px-4 sm:px-5 py-2 sm:py-2.5 bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-sm font-semibold rounded-lg transition shadow-md hover:shadow-lg"
            >
              Log In
            </Link>

            <details className="md:hidden">
              <summary className="p-2 hover:bg-gray-100 rounded-lg transition text-gray-700 cursor-pointer list-none">
                <HiOutlineMenu className="w-6 h-6" />
              </summary>
              <div className="absolute right-3 sm:right-4 md:right-6 top-16 sm:top-20 bg-white border border-gray-200 rounded-lg shadow-lg mt-2 min-w-48 z-50">
                <div className="flex flex-col text-sm font-medium text-gray-700">
                  <Link href="/" className="px-4 py-3 hover:bg-orange-50 hover:text-orange-600 transition border-b border-gray-100 flex items-center gap-2">
                    Home
                  </Link>
                  <Link href="/Product" className="px-4 py-3 hover:bg-orange-50 hover:text-orange-600 transition border-b border-gray-100 flex items-center gap-2">
                    Products
                  </Link>
                  <Link href="/contact" className="px-4 py-3 hover:bg-orange-50 hover:text-orange-600 transition border-b border-gray-100 flex items-center gap-2">
                    <FaUserCircle className="w-4 h-4" />
                    My Profile
                  </Link>
                  <Link
                    href="/LogIn"
                    className="sm:hidden block px-4 py-3 bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold transition text-center rounded-b-lg"
                  >
                    Log In
                  </Link>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavPage;
