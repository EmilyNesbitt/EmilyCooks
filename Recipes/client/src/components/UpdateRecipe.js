import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

const UpdateRecipe=()=>{

    const {id} = useParams();

    const navigate=useNavigate();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [directions, setDirections] = useState('');
    const [image, setImage] = useState('');
    const [type, setType] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/recipes/${id}`)
        .then((res) => {
            console.log(res.data);
            setName(res.data.name);
            setDescription(res.data.description);
            setIngredients(res.data.ingredients);
            setDirections(res.data.directions);
            setImage(res.data.imageURL);
            setType(res.data.type);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [id]);

    const onSubmitHandler = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/recipes/${id}`, {
            name: name,
            description: description,
            ingredients: ingredients,
            directions: directions,
            image:image,
            type: type
        })
        .then(res=>{
            console.log('form submitted successfully')
            console.log(res)
            console.log(res.data)
            navigate('/')
        })
        .catch(err=>{
            console.log(err)
            setErrors(err.response.data.error);
        })
    }

    return(
        <div>
            <button onClick={()=>navigate('/')}>Home</button>
            <form onSubmit={onSubmitHandler}>
                <h1>Update Recipe</h1>
                <p>
                    <label>Recipe Name</label>
                    <input className='form-control' value={name} type='text' onChange = {(e)=>setName(e.target.value)}/>
                    {/* {errors.name && <span>{errors.name.message}</span>} */}
                </p>
                <p>
                    <label>Recipe Description</label>
                    < input className='form-control' value={description} type='text' onChange = {(e)=>setDescription(e.target.value)}/>
                    {/* {errors.description && <span>{errors.description.message}</span>} */}
                </p>
                <p>
                    <label>Ingredients</label>
                    < input className='form-control' value={ingredients} type='text' onChange = {(e)=>setIngredients(e.target.value)}/>
                    {/* {errors.ingredients && <span>{errors.ingredients.message}</span>} */}
                </p>
                <p>
                    <label>Recipe Directions</label>
                    < input className='form-control' value={directions} type='text' onChange = {(e)=>setDirections(e.target.value)}/>
                    {/* {errors.directions && <span>{errors.directions.message}</span>} */}
                </p>
                <p>
                    <label>Recipe Image URL</label>
                    < input className='form-control' value={image} type='text' onChange = {(e)=>setImage(e.target.value)}/>
                    {/* {errors.imageURL && <span>{errors.imageURL.message}</span>} */}
                </p>
                <br/>
                <p>Select Category</p>
                <p>
                    <label>Appetizer</label>
                    <input type='radio' value = 'Appetizer' onChange = {(e)=>setType(e.target.value)}/><br/>
                    {/* {errors.type && <span>{errors.type.message}</span>} */}
                    <label>Entree</label>
                    <input  type='radio' value = 'Entree' onChange = {(e)=>setType(e.target.value)}/><br/>
                    {/* {errors.type && <span>{errors.type.message}</span>} */}
                    <label>Dessert</label>
                    <input type='radio' value = 'Dessert' onChange = {(e)=>setType(e.target.value)}/><br/>
                    {/* {errors.type && <span>{errors.type.message}</span>} */}
                    <label>Drink</label>
                    <input  type='radio' value = 'Drink' onChange = {(e)=>setType(e.target.value)}/><br/>
                    {/* {errors.type && <span>{errors.type.message}</span>} */}
                </p>
                <button type='submit'>Update Recipe</button>
            </form>
        </div>
    )
}

export default UpdateRecipe;