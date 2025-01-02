import '../style/CardList.css'

function List () {

    const Chiffre = [2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    const Couleur = [...Chiffre," ", ...Chiffre," ", ...Chiffre, " ",...Chiffre]
    const Tete = ["Roi"," ", "Dame"," ", "Valet"]
    const CouleurTete = [...Tete," ", ...Tete," ", ...Tete, " ",...Tete]
    const symbols = ['♠', '♥', '♣', '♦'];

    return (
        <div>
            <h1>Packet de carte</h1>
            <div>
                {symbols}
            </div>
            <div>
                {Couleur}
            </div>
            <div>
                {CouleurTete}
            </div>   
        </div>
    )  
}

export default List