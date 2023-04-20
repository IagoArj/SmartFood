import React, { Component } from 'react';

import './buttonRecipeCard.css'

class ButtonRecipeCard extends Component {
    constructor(props){
        super(props);
    }
    
    render() { 
        return (
            <div className='button-recipe-box' >
                <p className='button-recipe-text'>{this.props.title}</p>
                
            </div>
        );
    }
}
 
export default ButtonRecipeCard;