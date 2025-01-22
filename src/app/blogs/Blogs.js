import Link from 'next/link';
import React from 'react';

const Blogs = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data =await res.json()
    return (
        <>
            {
                data?.slice(0,20).map((item,idx)=><div key={idx} className="card bg-base-100  shadow-xl">
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{item.title}</h2>
                  <p>{item.body}</p>
                  <div className="card-actions">
                    <Link href={`blogs/${item.id}`} className="btn btn-primary">View Details</Link>
                  </div>
                </div>
              </div>)
            }
        </>
    );
};

export default Blogs;