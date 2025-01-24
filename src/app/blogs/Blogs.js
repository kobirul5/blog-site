import Link from 'next/link';
import React from 'react';

const Blogs = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data =await res.json()
    return (
        <>
            {
                data?.map((item,idx)=><Link href={`blogs/${item.id}`} key={idx} className=" mt-2 hover:text-blue-500">
                <div className="">
                  <h2 className="card-title">{item.id}. {item.title}</h2>
                </div>
              </Link>)
            }
        </>
    );
};

export default Blogs;