import { getKindeServerSession, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from 'next/link';
import React, { use } from 'react';
import { redirect } from "next/navigation";




const Profile = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if (!user) {
        redirect('/api/auth/login?post_login_redirect_url=/dashboard')
    }

    return (
        <div>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                    {/* Welcome Message */}
                    <div className="mb-6 text-center">
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Welcome to My Profile!
                        </h2>
                        <p className="text-gray-600 mt-2">
                            Explore and get to know a little more about me.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        {/* Profile Picture */}
                        {/* <div className="relative w-24 h-24 mb-4">
                            <Image
                                src="/profile-pic.jpg" // Replace with your image path
                                alt="Profile Picture"
                                className="rounded-full"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div> */}

                        {/* Name */}
                        <h1 className="text-xl font-bold text-gray-800">John Doe</h1>

                        {/* Job Title */}
                        <p className="text-gray-600">Software Engineer</p>

                        {/* Bio */}
                        <p className="text-center text-gray-600 mt-4">
                            Passionate about building scalable web applications and exploring
                            new technologies. Avid learner and problem-solver.
                        </p>

                        {/* Social Links */}
                        <div className="mt-6 flex space-x-4">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-gray-800"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6"
                                >
                                    <path d="M12 .5C5.7.5.5 5.7.5 12 .5 17.3 4 21.8 9 23.3c.6.1.8-.3.8-.6v-2.3c-3.6.8-4.3-1.6-4.3-1.6-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.9-.1 1.2-.5-.9-.1-2-.4-2.3-1.5-.3-.5-.6-1.6 0-2 .4-.4 1.1-.1 2.2.6.7.4 1.5.6 2.3.6.8 0 1.6-.2 2.3-.6 1.1-.7 1.8-1 2.2-.6.6.4.4 1.5.1 2-.3 1.1-1.5 1.4-2.3 1.5.3.4.5 1 .5 2v2.7c0 .3.2.7.8.6 5-.5 8.5-5 8.5-10.3C23.5 5.7 18.3.5 12 .5z" />
                                </svg>
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-gray-800"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6"
                                >
                                    <path d="M23 5.6c-.8.4-1.6.6-2.4.8 1-.6 1.6-1.4 2-2.4-.8.6-1.8 1-2.8 1.2a4.4 4.4 0 0 0-7.6 4c-3.6-.2-6.8-1.8-9-4.4-.4.8-.6 1.6-.6 2.6 0 1.8.8 3.4 2 4.4-.8 0-1.4-.2-2-.6 0 2.4 1.6 4.4 3.8 5-.6.2-1.2.2-2 .2-.4 0-.8 0-1.2-.2.8 2.6 3.4 4.4 6.2 4.4a9 9 0 0 1-5.4 1.8c-.4 0-.8 0-1.2-.2 2 1.4 4.4 2.2 7 2.2 8.4 0 13-7 13-13v-.6c.8-.6 1.6-1.2 2-2z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;