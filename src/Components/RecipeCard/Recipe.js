import React, { Component } from 'react';
import ButtonRecipeCard from '../Buttons/buttonRecipeCard/buttonRecipeCard';
import './Recipe.css'
class RecipeCard extends Component {

    render() {
        return (
            <div className='recipe-box'>
                <div className='recipe-image'></div>
                <div className='card-information-box'>
                    <div className='card-information'>
                        <p className='recipe-card-title'>Macarronada Irada</p>
                        <h2>testes e mais testes</h2>
                        <ButtonRecipeCard title = "Read More"  />
                    </div>
                   
                </div>
            </div>
            
            



        );
    }
}

export default RecipeCard;