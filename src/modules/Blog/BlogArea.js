import SingleBlog from "../../components/Blog";
// import Blogs from "@/data/blogs";
import { useState, useEffect } from "react";
import axios from "axios";

export default function BlogArea() {
  const [Blogs, setBlogs] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:8000/api/v1/news`)
      .then((response) => { setBlogs(response.data)})
  }, [])

  return (
    <div className="it-blog-area pt-120 pb-90">
      <div className="container">
        <div className="row">
          {Blogs.map((blog) => {
            return (
              <div key={blog.id} className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <SingleBlog
                  Slug={blog.slug}
                  Title={blog.title}
                  Img={blog.image}
                  commentsCount={blog.commentsCount}
                  publishedDate={blog.publishedDate}
                  btnText={blog.btnText}
                />
              </div>
            );
          }).slice(0, 6)}
        </div>
      </div>
    </div>
  );
}
