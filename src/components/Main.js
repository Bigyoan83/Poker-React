import '../style/Main.css'
import List from './CardList'

function Main ({List}) {

    const carteAleatoire = Main[Math.floor(Math.random() * Main.length)];
    console.log(carteAleatoire);

    return (
        <div>
            <List/>
        </div>
    )
}

export default Main;