import Blogs from "@/app/blogs/Blogs";


export default async function Home() {

  return (
    <div>
      <div className="grid grid-cols-1 px-5 md:grid-cols-2 gap-5">
        <Blogs></Blogs>
      </div>
    </div>
  );
}
