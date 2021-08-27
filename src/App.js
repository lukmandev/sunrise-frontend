
import PokemonsOutBlock from './components/pokemonsOutBlock';
import FavouritePokemonsBlock from './components/favouritePokemonsBlock';
import AddPokemonForm from './components/addPokemonForm';
import ConfirmDeleteModal from './components/confirmDeleteModal';
import SimpleModal from './components/simpleModal';


const App = () => {
    return (
        <div className="container-fluid">
        	<div className="container">
        		<PokemonsOutBlock />
        		<FavouritePokemonsBlock />
        		<AddPokemonForm />
        		<ConfirmDeleteModal />
                <SimpleModal />
        	</div>
        </div>
    )
}

export default App;