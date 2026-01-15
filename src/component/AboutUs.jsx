// About Us Section
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function AboutUs() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const fetchPosts = async () => {
    setLoader(true);
    try {
      // api call
      const res = await fetch("https://dummyjson.com/posts?limit=6");
      const data = await res.json();
      console.log(data);
      setPosts(data.posts);
      setLoader(false);
    } catch (err) {
      console.log(err);
      setLoader(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (error) navigate("/error");
  }, [error]);
  // fetch data from api
  // update the data in state

  return (
    <section id="about" className="about-us-section">
      <div className="section-container">
        <h2 className="section-title">About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Who We Are</h3>
            <p>
              We are a cutting-edge SaaS company dedicated to providing
              innovative solutions that empower businesses to achieve their
              goals. Our platform combines the power of artificial intelligence
              with intuitive design to deliver exceptional results.
            </p>
            <p>
              Since our founding, we've been committed to helping teams work
              smarter, not harder. We believe in the power of technology to
              transform workflows and drive productivity to new heights.
            </p>
          </div>
          <div className="about-features">
            {posts &&
              posts.length > 0 &&
              posts.map((post, index) => (
                <div className="feature-icon" key={index}>
                  🚀
                  <p style={{ fontSize: 12 }}>{post.title}</p>
                  <p style={{ fontSize: 9 }}>{post.body}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
