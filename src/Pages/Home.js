import React, { Component } from 'react';
import './Home.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from '../Components/RecipeCard/Recipe';
function Home() {


    const [recipes, setRecipes] = useState();
    const baseurl = 'https://api.spoonacular.com';
    const apiKey = '4d29cc01829749d08783cec3575e0c28';
    const cardsQuant = '10';
    const authAxios = axios.create({
        baseURL: baseurl,
        headers: {
            'x-api-key': apiKey
        }
    });


    const getRecipes = async () => {
        try {
            const response = await authAxios.get('/recipes/random?number=' + cardsQuant)
            console.log(response.data.recipes)

            setRecipes(response.data.recipes)


        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getRecipes()
    }, [])
    return (
        <div className='teste' >
            <h1>Home</h1>
            <div className='teste2-home'>
                {recipes?.map((recipe) => {

                    return <RecipeCard data={recipe} key={recipe.id} />

                })}
            </div>
        </div>

    );
}


export default Home;