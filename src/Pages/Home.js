import React, { Component } from 'react';

import RecipeCard from '../Components/RecipeCard/Recipe';
class Home extends Component {
    state = {}
    render() {
        return (
            <div  >
                <h1>Home</h1>
                <RecipeCard/>
                
            </div>

        );
    }
}

export default Home;