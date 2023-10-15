import {useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"; 
import './SingleBlog.css'
import Navbar from "../../components/Navbar/Navbar"
import { useNavigate } from 'react-router-dom';


const SingleBlog = () => {
  const navigate=useNavigate();
  const {id} =useParams();
  console.log(id);

  const [blog, setBlog] = useState([]);

  const fetchBlog = async() => {
    const response= await axios.get("https://652924bd55b137ddc83e44d5.mockapi.io/blogs/" + id);
    console.log(response);
    if(response.status==200){
      setBlog(response.data);
      console.log(blog);
    }
  }
     const deleteBlog=async()=>{
      const response= await axios.delete("https://652924bd55b137ddc83e44d5.mockapi.io/blogs/" + id);
      console.log(response)
      if(response.status==200){
        navigate("/")
      }
      else{
        alert(
          "Your blog has not deleted yet!"
        )
      }
    
  }

    useEffect(()=>{
      fetchBlog();
       }, [])
  return (
    <>
    <Navbar/>
    <div className="blog-container">
    <div className="avatar">
      <img src={blog?.avatar} alt="Avatar"/>
    </div>
    <div className="blog-content">
      <h1 className="blog-title">{blog?.title}</h1>
      <p className="blog-description">
        {blog?.description}
      </p>
      <button  class="attractive-button" onClick={deleteBlog}>Delete</button>
      <button  class="attractive-button" onClick={() => navigate("/editblog/"+ blog.id)}>Edit</button>
    </div>
  </div>
  </>
  )
}

export default SingleBlog
