import Link from 'next/link';
import React from 'react';

export default function Navbar(props) {
    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Blog Site</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/profile">Profile</Link></li>
      
    </ul>
  </div>
</div>
    );
}

