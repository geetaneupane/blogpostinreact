import {useEffect, useState } from 'react'
import Navbar from "../../components/Navbar/Navbar"
import "./EditBlog.css"
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const EditBlog = () => {
  const navigate=useNavigate();
  const{id}=useParams();
  console.log(id);
  const [blog, setBlog] = useState([]);

  const editblog= async(e)=>{
    e.preventDefault()
    const response=await axios.put("https://652924bd55b137ddc83e44d5.mockapi.io/blogs/" +id, blog);
    if(response.status==200){
      navigate("/singleBlog/" + id);
    }
    else{
      alert(
        "Your blog has not deleted yet!"
      )
    }
  }


   console.log(blog);
  const fetchBlog = async() => {
    const response= await axios.get("https://652924bd55b137ddc83e44d5.mockapi.io/blogs/" + id);
    console.log(response);
    if(response.status==200){
      setBlog(response.data);
      console.log(blog);
    }
  }
  useEffect(()=>{
    fetchBlog();
     }, [])
  return (
<div className="container text-center">
        <Navbar/>
    <h1>Edit Blog</h1>
    <form  onSubmit={editblog} >
      <div className="form-group">
      </div>
      <div className="form-group">
        <label htmlFor="title"></label>
        <input type="text" id="title" name="title"  onChange={(e)=>setBlog({...blog, title:e.target.value})} value={blog.title}  placeholder="title" required   />
      </div>
      <div className="form-group">
        <label htmlFor="description"></label>
        <textarea id="description" name="description" value={blog.description}   onChange={(e)=>setBlog({...blog, description:e.target.value})} placeholder="description" rows="4" required  ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="image"></label>
        <textarea id="image" name="image" placeholder="image" value={blog.avatar} rows="4" required    onChange={(e)=>setBlog({...blog, avatar:e.target.value})}></textarea>  
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>


  )
}

export default EditBlog
