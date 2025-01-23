import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";import Link from 'next/link';
import React from 'react';


const Profile = async () => {
    const {getUser} = getKindeServerSession();
    const user = await getUser();
   
    if(!user){

    }

    return (
        <div>
            profile
        </div>
    );
};

export default Profile;