import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Appetizer from './Pages/Appetizer';
import Dessert from './Pages/Dessert';
import Home from './Pages/Home';
import Meal from './Pages/Meal';
import Product from './Pages/Product';
import SearchProduct from './Pages/SearchProduct';
import WorldCuisine from './Pages/WorldCuisine';

export default function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/dessert' element={<Dessert/>}/>
                <Route path='/appetizer' element={<Appetizer/>}/>
                <Route path='/meal' element={<Meal/>}/>
                <Route path='/world-cuisine' element={<WorldCuisine/>}/>
                <Route path='/product' element={<Product/>}/>
                <Route path='/search-product' element={<SearchProduct/>}/>
            </Routes>
        </Router>
    );
}