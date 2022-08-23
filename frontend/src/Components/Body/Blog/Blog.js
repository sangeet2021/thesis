import React, { useEffect, useState } from "react";
import "./Blog.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");

  //   Send data
  const sendData = (e) => {
    e.preventDefault();
    const blogData = {
      title,
      author,
      body,
    };
    axios.post(`http://localhost:4000/api/blogs`, blogData).then((result) => {
      toast.success("Blog Added!");
      window.setTimeout(function () {
        window.location.reload();
      }, 2000);
    });
  };

  useEffect(() => {
    axios.get(`http://localhost:4000/api/blogs`).then((result) => {
      setBlogs(result.data.blog);
      console.log(result.data.blog);
    });
  }, []);
  return (
    <div>
      <div class="main-container">
        <div class="main-side-1">
          <form>
            <div class="form-outline mb-4">
              <input
                type="text"
                id="form4Example1"
                class="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label class="form-label" for="form4Example1">
                Name
              </label>
            </div>

            <div class="form-outline mb-4">
              <input
                type="text"
                id="form4Example1"
                class="form-control"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
              <label class="form-label" for="form4Example1">
                Author
              </label>
            </div>

            <div class="form-outline mb-4">
              <textarea
                class="form-control"
                id="form4Example3"
                rows="4"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
              <label class="form-label" for="form4Example3">
                Message
              </label>
            </div>

            <button
              type="submit"
              class="btn btn-primary btn-block mb-4"
              onClick={sendData}
            >
              Send
            </button>
          </form>
        </div>
        <div class="main-side-2">
          <div class="header-container">
            <div class="header-image"></div>
            <div class="header-text-container">
              <h1 class="text-white">E-Agro</h1>
            </div>
            
          </div>

          <div class="main2-down-container">
            <div class="main2-left-container">
              <div className="row">
                {blogs.map((data) => {
                  return (
                    <>
                      <div class="card" style={{ width: "18rem" }}>
                        <div class="card-body">
                          <h5 class="card-title">{data.title}</h5>
                          <small>By: {data.author}</small>
                          <p class="card-text">{data.body}</p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Blog;
