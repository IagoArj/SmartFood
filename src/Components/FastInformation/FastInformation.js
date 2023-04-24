import './FastInformation.css';
import bandeja from '../../Assets/bandeja.png';
import relogio from '../../Assets/despertador.png';

function FastInformation(props) {
    return (
        <div >
            {props.infoType ? 
            <div className='fast-information-card'><img className='fast-information-icon' src={bandeja} /> <p className='fast-information-text'>{props.data} People </p> </div>
             : 
             <div className='fast-information-card'><img className='fast-information-icon' src={relogio} /> <p className='fast-information-text'>{props.data} Min </p> </div>}

        </div>
    );

}
export default FastInformation;