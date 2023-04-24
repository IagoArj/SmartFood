import ButtonRecipeCard from '../Buttons/buttonRecipeCard/buttonRecipeCard';
import FastInformation from '../FastInformation/FastInformation';
import './Recipe.css'
function RecipeCard(props) {


    return (
        <div className='recipe-box'>
            <img className='recipe-image' src={props.data.image}></img>
            <div className='card-information-box'>
                <div className='card-information'>
                    <p className='recipe-card-title'>{props.data.title}</p>
                    <div className='fast-information-box'>
                        <FastInformation data={props.data.servings} infoType={true} />
                        <FastInformation data={props.data.readyInMinutes} infoType={false} />
                    </div>

                    <h2>testes e mais testes</h2>
                    <ButtonRecipeCard title="Read More" />
                </div>

            </div>
        </div>





    );
}


export default RecipeCard;