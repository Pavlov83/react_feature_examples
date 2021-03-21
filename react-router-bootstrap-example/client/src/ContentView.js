
import './App.css';
import Nav from './Nav'
import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import './App.css';


function ContentView(){

  const[foodName,setFoodName] = useState('');
  const[days,setDays] = useState(0)
  const [foodList,setFoodList] = useState([])
  const [newFoodName,setNewFoodName] = useState('')

  const submit = () => {
    Axios.post('/insert',{
      foodName:foodName,
      days: days
    })
    
  }

  useEffect(() =>{
      Axios.get('/read')
           .then((response) => {
             setFoodList(response.data)
            
           })            
  });

  const updateFood = (id) =>{
    Axios.put('/update',{
  
    id:id,
    newFoodName:newFoodName})

  }

  const deleteFood = (id) =>{
    Axios.delete(`/delete/${id}`)
  }




  return (
    
    <div className="App">
    <h3>Resolver Software</h3>
    <h4>Title</h4>   
    {
      
      foodList.map((val,key) =>{
        return(
        <div key={key} className='tutorial'>
        <h3>{val.foodName}</h3>
        <h2>{val.days}</h2>
        </div>
        )
      })}
    </div>
    );
  }




export default ContentView;
