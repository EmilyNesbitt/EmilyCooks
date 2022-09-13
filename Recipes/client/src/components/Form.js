import axios from 'axios';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Form=()=>{

    const navigate=useNavigate();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [directions, setDirections] = useState('');
    const [image, setImage] = useState('');
    const [type, setType] = useState('');
    const [errors, setErrors] = useState({});

    const onSubmitHandler = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/recipes', {
            name: name,
            description: description,
            ingredients: ingredients,
            directions: directions,
            image: image,
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
                <h1>Add New Recipe</h1>
                <p>
                    <label>Recipe Name</label>
                    <input className='form-control' type='text' onChange = {(e)=>setName(e.target.value)}/>
                    {errors.name && <span>{errors.name.message}</span>}
                </p>
                <p>
                    <label>Recipe Description</label>
                    < input className='form-control' type='text' onChange = {(e)=>setDescription(e.target.value)}/>
                    {errors.description && <span>{errors.description.message}</span>}
                </p>
                <p>
                    <label>Ingredients</label>
                    < input className='form-control' type='text' onChange = {(e)=>setIngredients(e.target.value)}/>
                    {errors.ingredients && <span>{errors.ingredients.message}</span>}
                </p>
                <p>
                    <label>Recipe Directions</label>
                    < input className='form-control' type='text' onChange = {(e)=>setDirections(e.target.value)}/>
                    {errors.directions && <span>{errors.directions.message}</span>}
                </p>
                <p>
                    <label>Recipe Image URL</label>
                    < input className='form-control' type='text' onChange = {(e)=>setImage(e.target.value)}/>
                    {errors.imageURL && <span>{errors.imageURL.message}</span>}
                </p>
                <br/>
                <p>Select Category</p>
                <p>
                    <label>Appetizer</label>
                    <input className='form-control' type='radio' value = 'Appetizer' onChange = {(e)=>setType(e.target.value)}/>
                    {errors.type && <span>{errors.type.message}</span>}
                    <label>Entree</label>
                    <input className='form-control' type='radio' value = 'Entree' onChange = {(e)=>setType(e.target.value)}/>
                    {errors.type && <span>{errors.type.message}</span>}
                    <label>Dessert</label>
                    <input className='form-control' type='radio' value = 'Dessert' onChange = {(e)=>setType(e.target.value)}/>
                    {errors.type && <span>{errors.type.message}</span>}
                    <label>Drink</label>
                    <input className='form-control' type='radio' value = 'Drink' onChange = {(e)=>setType(e.target.value)}/>
                    {errors.type && <span>{errors.type.message}</span>}
                </p>
                <button type='submit'>Add Recipe</button>
            </form>
        </div>
    )
}

export default Form;