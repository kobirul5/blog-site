import { getKindeServerSession, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from 'next/link';
import React, { use } from 'react';
import { redirect } from "next/navigation";




const Profile = async () => {
    const {getUser} = getKindeServerSession();
    const user = await getUser();
   if(!user) {
    redirect('/api/auth/login?post_login_redirect_url=/dashboard')
   }
  

    return (
        <div>
            Welcome to your profile!
        </div>
    );
};

export default Profile;