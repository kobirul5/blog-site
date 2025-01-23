"use client"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const BlogDetails =  () => {
    const {id} = useParams()
    const [blogData, setBlogData] = useState()

    useEffect(()=>{
       fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
       .then((res)=> res.json())
       .then((data)=> setBlogData(data))

    },[id])
    
    return (
        <div>
            <p>Title: {blogData?.title}</p>
            <p>Title: {blogData?.body}</p>
        </div>
    );
};

export default BlogDetails;