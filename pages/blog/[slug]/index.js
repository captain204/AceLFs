import Footer from "../../../src/components/Footer";
import HeaderTwo from "../../../src/components/Header/HeaderTwo";
// import Blogs from "@/data/blogs";
import { useRouter } from "next/router";
import Preloader from "../../../src/components/Preloader";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import axios from "axios";

const BlogDetailsModules = dynamic(() => import("../../../src/modules/BlogDetails"), {
  loading: () => <Preloader />,
});


export default function BlogDetails() {
  const router = useRouter();
  const { asPath } = router;
  const blogSlug = asPath.split("/")[2];
  const [Blogs, setBlogs] = useState([])
  
  useEffect(() => {
    axios.get(`http://localhost:8000/api/v1/news`)
      .then((response) => { setBlogs(response.data)})
  }, [])

  const singleBlog = Blogs.filter((blog) => {
    return blog.slug === blogSlug;
  });

  return (
    <main>
      <HeaderTwo />

      <BlogDetailsModules item={singleBlog[0]} />

      <Footer />
    </main>
  );
}
