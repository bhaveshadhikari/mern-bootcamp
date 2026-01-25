// About Us Section
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function AboutUs() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState(null)


  const fetchPostData = async () => {
    try {
      // API call
      let res = await fetch("https://dummyjson.com/posts")

      const data = await res.json()
      console.log("data", data)
      setPosts(data.posts)
    } catch (err) {
      console.error("err", err)
    }
  }

  useEffect(() => {
    fetchPostData()

    return (() => {
      // step 4 section
    })
  }, [])
  useEffect(() => {
    // some change listener
  }, [posts])

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
            {posts && posts.length > 0 && posts.map((post, key) => (
              <div className="feature-icon" style={{ height: 250, width: 400, backgroundColor: 'gray' }} >

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
