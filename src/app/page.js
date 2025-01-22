import Blogs from "@/app/blogs/Blogs";
import Image from "next/image";

export default async function Home() {

  return (
    <div>
      <div className="grid grid-cols-4 gap-5">
      <Blogs></Blogs>
      </div>
    </div>
  );
}
