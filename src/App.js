import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import { filterData } from './data';

function App() {

  const [post, setPost] = useState(null);
  const [category, setCategory] = useState(filterData[0].title);
  
  useEffect(() => {
    axios.get("https://codehelp-apis.vercel.app/api/get-top-courses").then((response) => {
      setPost(response.data);
    })
  }, [])

  console.log(post)

  if(!post) return null;

  return (
    <div className='App'>
      <Navbar/>
      <Filters filterData={filterData} category={category} setCategory={setCategory}/>
      <Cards name={post} category={category}/>
    </div>
  )
}

export default App;