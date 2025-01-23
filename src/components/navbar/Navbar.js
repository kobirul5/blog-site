import Link from 'next/link';
import React from 'react';
import { RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


export default async function Navbar(props) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className='bg-black  backdrop-blur-lg bg-opacity-10 sticky top-0 z-10'>
      <div className="navbar w-full">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Blog Site</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/profile">Profile</Link></li>
            {
              user ? <li><LogoutLink>Log out</LogoutLink></li> : <>
                <li>
                  <LoginLink postLoginRedirectURL="/">Sign in</LoginLink>
                </li>
                <li>
                  <RegisterLink postLoginRedirectURL="/">Sign up</RegisterLink>
                </li>
              </>
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

