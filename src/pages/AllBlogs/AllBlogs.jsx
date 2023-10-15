import Navbar from "../../components/Navbar/Navbar"
import {useEffect, useState } from 'react'
import './AllBlogs.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



const AllBlogs=()=>{
  const navigate= useNavigate();
  const [blogs, setBlogs] = useState([])

const fetchBlogs = async() => {
  const response= await axios.get('https://652924bd55b137ddc83e44d5.mockapi.io/blogs');
  if (response.status== 200){
    console.log(response.data)
    setBlogs(response.data)
    console.log(blogs);
  }
}

  useEffect(()=>{
    fetchBlogs();
     }, [])



  return (
    <div>
      <Navbar/>
      <div style={{display:'flex', justifyContent:'space-evenly', flexWrap:"wrap"}}>
        {
        blogs.map((blog)=>{
          return(
            <div className="card" key={blog.id}>
  <img src={blog.avatar} alt="Avatar" width="50%"/>
  <div class="container">
    <h4><b>{blog.title}</b></h4> 
    <p>{blog.description}</p> 
    <p>{blog.createdAt}</p>
  </div>
  <p onClick={()=> navigate('/singleblog/'+ blog.id)} style={{textAlign:'center'}}>See More</p>
</div>
          )
        })
        }
    </div>
    </div>
  )
}

export default AllBlogs
