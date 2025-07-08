import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Dashbaord from './pages/Admin/Dashboard';
import Layout from './pages/Admin/Layout';
import AddBlog from './pages/Admin/AddBlog';
import ListBlog from './pages/Admin/ListBlog';
import Comments from './pages/Admin/Comments';
const App = () => {
  return(
    <div>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/blog/:id' element={<Blog />} />
<Route path='/admin' element={<Layout/>}>
<Route index element={<Dashbaord />} />
<Route path='AddBlog' element={<AddBlog />} />
<Route path='comments' element={<Comments />} />
<Route path='ListBlog' element={<ListBlog/>} />
</Route>

</Routes>
    </div>
  )
}

export default App

;
