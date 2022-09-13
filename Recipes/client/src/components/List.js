import React,{useEffect, useState} from 'react';
import {useNavigate, useParams, Link} from 'react-router-dom';
import axios from 'axios';

const List=(props)=>{

    const navigate = useNavigate();

    const [recipes, setRecipes] = useState();

    const {type} = useParams();

    console.log(type)

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/recipes_by_type/${type}`)
        .then(res=>{
            console.log('get request worked')
            setRecipes(res.data)
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [type])

    return(
        <div>
            <div className="container">
            {recipes?.map((recipe, index) =>(
                <Link key = {index} to={`/ShowOne/${recipe._id}`}>{recipe.name}</Link>
            ))}
            </div>
            <button onClick={()=>navigate('/')}>Home</button>
        </div>
    )
}

export default List;