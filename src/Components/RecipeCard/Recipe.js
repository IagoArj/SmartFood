import ButtonRecipeCard from '../Buttons/buttonRecipeCard/buttonRecipeCard';
import FastInformation from '../FastInformation/FastInformation';
import './Recipe.css'
function RecipeCard(props) {

    function changeTextSize(text, size) {
        if (text.length >= size) {
            return <p className='recipe-card-title-big'>{text}</p>
        }
        else {
            return <p className='recipe-card-title-normal'>{text}</p>
        }
    }
    function normalizeText(text, maxChar) {
        let normalize = text.replace(/<[^>]*>/g, '');
        if (normalize.length > maxChar) {
            normalize = normalize.slice(0, maxChar) + '...';
        }


        return normalize

    }

    return (
        <div className='recipe-box'>
            <img className='recipe-image' src={props.data.image}></img>
            <div className='card-information-box'>
                <div className='card-information'>
                    <div>
                        {changeTextSize(props.data.title, 30)}
                    </div>
                    <div className='fast-information-box'>
                        <FastInformation data={props.data.servings} infoType={true} />
                        <FastInformation data={props.data.readyInMinutes} infoType={false} />
                    </div>
                    <div className='summary-box'>
                        <p className='summary-text'>{normalizeText(props.data.summary, 100)}</p>
                    </div>

                    <ButtonRecipeCard title="Read More" />
                </div>

            </div>
        </div>





    );
}


export default RecipeCard;