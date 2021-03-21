import React,{useState,useEffect} from 'react';
import './App.css';



function App() {
  useEffect(() =>{
        fetchItems();
  },[]);


  const[posts,setPosts] = useState([])

  const fetchItems = async () =>{
    const data = await fetch('');
    const posts = await data.json()
    console.log(posts.items)
    setPosts(posts)
   
  }
 

  return (
    <div className="App">
      {posts.map((post) => {<h3>{post.body}</h3>})}
    </div>
  );
}

export default App;
