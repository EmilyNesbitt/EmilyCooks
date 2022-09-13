import React from 'react';
import {useNavigate} from 'react-router-dom';

const Home=() =>{

    const navigate = useNavigate();
    // const [recipes, setRecipes]=useState();

    const goList =(type)=>{
        navigate(`/List/${type}`)
    };

    return(
        <div>
            <div className='navbar col col-1'>
                <button onClick={()=>navigate('/AllRecipes')}>All Recipes</button> 
                <button onClick={()=>goList('Appetizer')}>Appetizers</button>
                <button onClick={()=>goList('Entree')}>Entrees</button>
                <button onClick={()=>goList('Dessert')}>Desserts</button>
                <button onClick={()=>goList('Drink')}>Drinks</button>
                <button onClick={()=>navigate('/form')}>Add Recipe</button> 
            </div>
            <div className='container row col-3'>
            <p>
                This is where all the text about the website will go. 
                How I'm doing this because of my passion for creating delicious food and nourishing and entertaining my friends and family.
                This will be written in the JSX and not come from the DB.
            </p>
            </div>
            <div className='container row col-6'>
                <h1>Emily Cooks</h1>
                <img src="https://all-youcan-eat.com/wp-content/uploads/2020/08/board-amidst-cooking-ingredients_23-2147749529.jpg"/>
            </div>
        </div>
    )

}

export default Home;