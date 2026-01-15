import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function AboutUs() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

 
  //1. fetch posts
  useEffect(() => {
    console.log("AboutUs mounted");

    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://dummyjson.co/posts?limit=6");
        const data = await res.json();
        setPosts(data.posts);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();

    //3. ummount clean up
    return () => {
      console.log("AboutUs unmounted");
    };
  }, []);

  //2. respond to errpor
  useEffect(() => {
    if (error) {
      console.log("Error changed -> navigating");
      navigate("/error");
    }
  }, [error, navigate]);

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
              goals.
            </p>
            <p>
              We believe in the power of technology to transform workflows and
              drive productivity.
            </p>
          </div>

          <div className="about-features">
            {loading && <p>Loading posts...</p>}

            {!loading &&
              posts.map((post) => (
                <div className="feature-icon" key={post.id}>
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
