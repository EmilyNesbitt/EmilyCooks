import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
const ShowOne = (props)=>{

    const {id} =useParams();

    const navigate = useNavigate();

    const [oneFood, setOneFood]=useState({});

    console.log({id})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/recipes/${id}`)
        .then((res) => {
            console.log(res.data.image)
            console.log(res.data);
            setOneFood(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [id]);

    const deleteHandler = (Id) =>{
        axios.delete(`http://localhost:8000/api/recipes/${Id}`)
        .then((res) => {
            console.log(res.data);
            navigate('/')
        })
        .catch((err) => {
            console.log(err);
        })
    };

      const updateRecipe = (Id) =>{
        navigate(`/UpdateRecipe/${Id}`);
      };

    return(
        <div>
             <div>
                <h1>{oneFood.name}</h1>
            </div>
            <div>
                <img src={oneFood.image} alt={oneFood.name}/>
            </div>
            <div>
                <p>{oneFood.ingredients}</p>
            </div>
            <div>
                <p>{oneFood.directions}</p>
            </div> 
            <button onClick={()=>navigate('/')}>Home</button>
            <button onClick={()=>deleteHandler(oneFood._id)}>delete</button>
            <button onClick={()=>updateRecipe(oneFood._id)}>edit</button>
        </div>
    )
}

export default ShowOne;