import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import AllBlogs from './pages/AllBlogs/AllBlogs'
import SingleBlog from './pages/SingleBlog/SingleBlog'
import CreateBlog from './pages/CreateBlog/CreateBlog'
import EditBlog from './pages/EditBlog/EditBlog'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path= '/' element={<AllBlogs/>}/>
      <Route path= '/singleblog/:id' element={<SingleBlog/>}/>
      <Route path= '/createblog' element={<CreateBlog/>}/>
      <Route path= '/editblog/:id' element={<EditBlog/>}/>

      
      
      </Routes></BrowserRouter>
  )
}

export default App
