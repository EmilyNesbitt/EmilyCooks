const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema(
{
    name:{
        type: String, 
        required: [true, 'Please give your recipe a title']
    },

    description:{
        type: String
    },

    ingredients:{
        type: String, 
        required: [true, 'Please list ingredients']
    },

    directions:{
        type: String,
        required: [true, 'You must provide recipe instructions']
    },

    image:{
        type: String,
        required: [true, 'You must provide an image URL']
    },

    type:{
        type: String, 
        required:[true, "You must select a type"],
        enum: [
            'Drink',
            'Appetizer',
            'Entree',
            'Dessert'
        ]
    }
},

{ timestamps: true}

);

const Recipe = mongoose.model('Recipe', RecipeSchema)

module.exports = Recipe;