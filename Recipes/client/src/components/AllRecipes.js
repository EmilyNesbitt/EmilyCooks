import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';



const AllRecipes=(props)=>{

    const [recipes, setRecipes] = useState();

    const navigate = useNavigate();

    useEffect(() =>{
        axios.get('http://localhost:8000/api/recipes')
        .then(res=>{
            console.log('get request worked')
            setRecipes(res.data)
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [setRecipes])

    return(
        <div>
             <div>
             {recipes?.map((recipe, index) =>( 
             <div key={index}>
                <Link to={`/showOne/${recipe._id}`}>{recipe.name}</Link> <br/>
            </div>
            ))}
            </div>
            <div>
                <Link to={`/list/Appetizer`}>Appetizers</Link>
                <Link to={`/list/Entree`}>Entrees</Link>
                <Link to={`/list/Dessert`}>Desserts</Link>
                <Link to={`/list/Drink`}>Drinks</Link>
            </div>

            <button onClick={()=>navigate('/')}>Home</button>

        </div>
    )
}

export default AllRecipes;