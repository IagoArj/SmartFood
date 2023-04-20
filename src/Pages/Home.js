import React, { Component } from 'react';
import './Home.css'
import RecipeCard from '../Components/RecipeCard/Recipe';
class Home extends Component {
    state = {}
    render() {
        return (
            <div className='teste' >
                <h1>Home</h1>
                <RecipeCard/>
                <RecipeCard/>
            </div>

        );
    }
}

export default Home;