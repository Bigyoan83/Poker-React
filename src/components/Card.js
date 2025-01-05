import List from './CardList';
import '../style/Card.css'

function Card() {
  return (
    <div>
      <h2>Paquet</h2>
      <div className='card'>
        <div>
            <h3>Coeur (♥)</h3>
            <List suite="♥" />
        </div>
        <div>
            <h3>Carreau (♦)</h3>
            <List suite="♦" />
        </div>
        <div>
            <h3>Pique (♠)</h3>
            <List suite="♠" />
        </div>
        <div>
            <h3>Trèfle (♣)</h3>
            <List suite="♣" />
        </div>
      </div>
      
    </div>
  );
}

export default Card;
