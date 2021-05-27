import search from './search.jpeg';
import './SearchBox.css';

const SearchBox = () => {
    return (
        <div class="search-box">
            <div class="container">
                <img class="logo"
                    src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.5/mercadolibre/logo__large_plus.png" />
                <div class="search-component">
                    <input class="search-field" type="text" placeholder="Ingrese la búsqueda" />
                    <button class="search-icon-button" onClick="javascript:alert('boton clickeado')">
                        <img class="search-icon" src={search} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SearchBox;