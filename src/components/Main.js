import '../style/Main.css'
import {toutesLesCartes} from './CardList'

function Main () {

    const carteAleatoire = toutesLesCartes[Math.floor(Math.random() * toutesLesCartes.length)];
    console.log(carteAleatoire);

    return (
    <div className='main'>
        <h2>Main du joueur 1</h2>
        <p>{carteAleatoire}</p>
    </div>
    )
}

export default Main;