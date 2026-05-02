"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BiSolidCircle } from "react-icons/bi";
import { HiOutlineMenu } from "react-icons/hi";
import { FaHome, FaProductHunt, FaUserCircle } from "react-icons/fa";
import { authClient } from "../../lib/auth-client";
import NavLink from "../NavLink";

const NavPage = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const isLoggedIn = Boolean(user);

  const handleLogout = async () => {
    await authClient.signOut();
    router.refresh();
  };

  const userInitial =
    user?.name?.trim()?.[0] || user?.email?.trim()?.[0] || "U";

  const menuItems = (
    <>
      <NavLink href="/" className="flex items-center gap-2">
        <FaHome /> Home
      </NavLink>
      <NavLink href="/Product" className="flex items-center gap-2">
        <FaProductHunt /> Products
      </NavLink>
      <NavLink href="/MyProfile" className="flex items-center gap-2">
        <FaUserCircle /> My Profile
      </NavLink>
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
            {isLoggedIn ? (
              <>
                <Link
                  href="/MyProfile"
                  className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-orange-200 bg-orange-50 overflow-hidden shadow-sm"
                  title={user?.name || "My Profile"}
                >
                  <FaUserCircle className="w-5 h-5 text-gray-700" />
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="hidden sm:inline-flex px-4 sm:px-5 py-2 sm:py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold rounded-lg transition shadow-md hover:shadow-lg"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/LogIn"
                  className="hidden sm:block px-4 sm:px-5 py-2 sm:py-2.5 border border-orange-200 text-orange-700 hover:bg-orange-50 text-sm font-semibold rounded-lg transition"
                >
                  Log In
                </Link>

                <Link
                  href="/Registration"
                  className="hidden sm:block px-4 sm:px-5 py-2 sm:py-2.5 bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-sm font-semibold rounded-lg transition shadow-md hover:shadow-lg"
                >
                  Register
                </Link>
              </>
            )}

            <details className="md:hidden">
              <summary className="p-2 hover:bg-gray-100 rounded-lg transition text-gray-700 cursor-pointer list-none">
                <HiOutlineMenu className="w-6 h-6" />
              </summary>
              <div className="absolute right-3 sm:right-4 md:right-6 top-16 sm:top-20 bg-white border border-gray-200 rounded-lg shadow-lg mt-2 min-w-48 z-50">
                <div className="flex flex-col text-sm font-medium text-gray-700">
                  <Link
                    href="/"
                    className="px-4 py-3 hover:bg-orange-50 hover:text-orange-600 transition border-b border-gray-100 flex items-center gap-2"
                  >
                    Home
                  </Link>
                  <Link
                    href="/Product"
                    className="px-4 py-3 hover:bg-orange-50 hover:text-orange-600 transition border-b border-gray-100 flex items-center gap-2"
                  >
                    Products
                  </Link>
                  {isLoggedIn ? (
                    <>
                      <Link
                        href="/MyProfile"
                        className="px-4 py-3 hover:bg-orange-50 hover:text-orange-600 transition border-b border-gray-100 flex items-center gap-3"
                      >
                        {user?.image ? (
                          <Image
                            src={user.image}
                            alt={user?.name || "User avatar"}
                            width={28}
                            height={28}
                            className="w-7 h-7 rounded-full object-cover border border-orange-200"
                          />
                        ) : (
                          <span className="w-7 h-7 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-sm font-semibold border border-orange-200">
                            {userInitial}
                          </span>
                        )}
                        My Profile
                      </Link>
                      <button
                        type="button"
                        onClick={handleLogout}
                        className="sm:hidden block w-full px-4 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold transition text-center rounded-b-lg"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/LogIn"
                        className="sm:hidden block px-4 py-3 border-t border-gray-100 hover:bg-orange-50 hover:text-orange-600 transition text-center font-semibold"
                      >
                        Log In
                      </Link>
                      <Link
                        href="/Registration"
                        className="sm:hidden block px-4 py-3 bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold transition text-center rounded-b-lg"
                      >
                        Register
                      </Link>
                    </>
                  )}
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
