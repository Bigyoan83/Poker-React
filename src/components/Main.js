import '../style/Main.css';
import { toutesLesCartes } from './CardList';
import { useState } from 'react';

function Main() {
    const [cartesRestantes, setCartesRestantes] = useState(toutesLesCartes);
    const [main, setMain] = useState([]);

    const tirerUneCarte = () => {
        if (cartesRestantes.length > 0) {
            const indexAleatoire = Math.floor(Math.random() * cartesRestantes.length);
            const nouvelleCarte = cartesRestantes[indexAleatoire];

            
            if (main.length < 5) {
                setMain([...main, nouvelleCarte]);
                setCartesRestantes(cartesRestantes.filter((_, index) => index !== indexAleatoire));
            } else {
                alert("Main pleine");
            }
        } else {
            alert("Toutes les cartes ont été tirées !");
        }
    };

    return (
        <div className='main'>
            <h2>Main du joueur 1</h2>
            <p className='carte-main'>
                {main.length > 0 ? main.join('/') : "Aucune carte tirée pour l'instant"}
            </p>
            <button onClick={tirerUneCarte}>Tirer une autre carte</button>
        </div>
    );
}

export default Main;

