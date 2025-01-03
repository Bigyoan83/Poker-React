import List from './CardList';
import '../style/Card.css'

function Card() {
  return (
    <div>
      <h1>Paquet</h1>
      <div className='card'>
        <div>
            <h2>Coeur (♥)</h2>
            <List suite="♥" />
        </div>
        <div>
            <h2>Carreau (♦)</h2>
            <List suite="♦" />
        </div>
        <div>
            <h2>Pique (♠)</h2>
            <List suite="♠" />
        </div>
        <div>
            <h2>Trèfle (♣)</h2>
            <List suite="♣" />
        </div>
      </div>
      
    </div>
  );
}

export default Card;
