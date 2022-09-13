const Recipe = require("../models/recipes.model");

const getAllRecipes = (req, res) =>{
    console.log('inside getAllRecipes')
    Recipe.find({})
        .then((allRecipes) =>{
            console.log('successfully found all recipes')
            res.json(allRecipes)
        })
        .catch((err) => console.log(err));
};

const getRecipeById = (req, res) => {
    Recipe.findOne({_id: req.params._id})
        .then((recipe) => res.json(recipe))
        .catch((err) => console.log(err));
};

const getRecipesByType = (req, res) =>{
    Recipe.find({type: req.params.type})
        .then((allType) =>{
            console.log('successfully got some recipes')
            res.json(allType)
        }) 
        .catch((err) => console.log(err));
};

const addRecipe = (req, res) =>{
    // const { body } = req;
    // const newRecipe = new Recipe(req.body)
    // newRecipe.save()
    //     .then((newRecipe) => {
    //         console.log('SUCCESS')
    //         console.log(newRecipe)
    //         res.json({message:"ok"})
    //     })
    //     .catch(err => console.log(err))
    Recipe.create(req.body)
        .then((newRecipe) => res.json(newRecipe))
        .catch((err) => res.status(400).json({message:'there was a problem submitting the recipe', error:err.errors}));
};

const updateRecipe = (req, res) =>{
    Recipe.findOneAndUpdate({_id: req.params._id}, req.body, {
        new: true,
        runValidators: true,
    })
    .then((updatedRecipe) => res.json(updateRecipe))
    .catch((err) => console.log(err));
};

const deleteRecipe = (req, res) => {
    Recipe.deleteOne({_id: req.params._id})
        .then((result) => res.json(result))
        .catch((err) => console.log(err));
};

module.exports = {
    getAllRecipes, 
    getRecipeById,
    getRecipesByType,
    addRecipe,
    updateRecipe,
    deleteRecipe,
};