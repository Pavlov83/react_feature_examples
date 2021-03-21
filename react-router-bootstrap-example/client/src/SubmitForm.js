
import './App.css';
import Nav from './Nav'

import React,{useState,useEffect} from 'react'

import Axios from 'axios'
import './App.css';


function SubmitForm(){

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
    <input type='text' onChange={event => setFoodName(event.target.value)}></input>
    <h4>Content</h4>
    <textarea type='text' rows='30' cols='80' onChange={event => setDays(event.target.value)}></textarea>
    <button onClick={submit}>Submit</button>
    {
      

      foodList.map((val,key) =>{
        return(
        <div key={key} className='tutorial'>
        <h3>{val.foodName}</h3>
        <h2>{val.days}</h2>
        <input placeholder='update value...'
        onChange={ (event) =>{
            setNewFoodName(event.target.value)
        }}

        ></input>
        <button onClick={() =>deleteFood(val._id)}>delete</button>
        <button onClick={() => updateFood(val._id)}>update</button>
        </div>
        )
      })

    }
    </div>
    );
  }




export default SubmitForm;
