"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
// import { authClient } from "@/lib/auth-client"; // BetterAuth client import

const Navbar = () => {
  // Replace this null with your actual session logic later
  // const { data: session } = authClient.useSession();

  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user, "user")

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log(data, "data")
  }

  const navLinks = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/products">Products</Link>
      </li>
      {session && (
        <li>
          <Link href="/profile">My Profile</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          {/* Brand Logo */}
          <Link
            href="/"
            className="btn btn-ghost text-xl font-bold text-orange-500 uppercase tracking-tighter"
          >
            Summer<span className="text-blue-500">Cart</span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium">{navLinks}</ul>
        </div>

        <div className="navbar-end gap-3">
          {session ? (
            <div className="flex justify-between items-center gap-3">
              
                <div className="">
                  <Image
                    alt="User Avatar"
                    width={50}
                    height={50}
                    src={
                      user?.image ||
                      "https://ui-avatars.com/api/?name=User"
                    }
                  />
                </div>
              
              <button className="text-error font-semibold" onClick={async()=> await authClient.signOut()}>Logout</button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login" className="btn btn-ghost btn-sm">
                Login
              </Link>
              <Link href="/register" className="btn btn-primary btn-sm px-6">
                Register
              </Link>
              <button className="btn border-blue-500 text-blue-500" onClick={handleGoogleSignIn}><FaGoogle /> LogIn with google</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
