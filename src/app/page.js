import Blogs from "@/app/blogs/Blogs";


export default async function Home() {

  return (
    <div>
      <div className="grid grid-cols-4 gap-5">
        <Blogs></Blogs>
      </div>
    </div>
  );
}
