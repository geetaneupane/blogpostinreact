
import React, { useState } from 'react';

import './CreateBlog.css'
import  Navbar from '../../components/Navbar/Navbar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const CreateBlog = () => {
     const navigate= useNavigate()

    const [title, setTitle]= useState("");
    const [description , setDescription]= useState("");
    const [image, setImage]=useState("");
  

    const createBlog= async(e)=>{
      e.preventDefault()
      const data={
        title:title,
        description: description,
        avatar:image
      }
      const response= await axios.post('https://652924bd55b137ddc83e44d5.mockapi.io/blogs', data)
      if(response.status==201){
        navigate('/')
      }
      else{
        alert("Error!")
      }
      
      console.log(response);
    }



  return (
    <div className="container text-center">
        <Navbar/>
    <h1>Add Blog</h1>
    <form   onSubmit={createBlog} >
      <div className="form-group">
      </div>
      <div className="form-group">
        <label htmlFor="title"></label>
        <input type="text" id="title" name="title"  placeholder="title" required  onChange={(e)=>setTitle(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="description"></label>
        <textarea id="description" name="description" placeholder="description" rows="4" required onChange={(e)=>setDescription(e.target.value)} ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="image"></label>
        <textarea id="image" name="image" placeholder="image" rows="4" required   onChange={(e)=>setImage(e.target.value)}></textarea>  
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>

  )
  }

export default CreateBlog
