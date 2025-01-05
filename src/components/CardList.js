
function List({ suite }) {
    const chiffres = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    const têtes = ["Valet", "Dame", "Roi"];
    const cartes = [...chiffres, ...têtes].map((valeur) => `${valeur} ${suite}`);

    return (
      <div>
        <div>
          <ul>
            {cartes.map((carte, index) => (
              <li key={index}>{carte}</li>
            ))}
          </ul>
        </div>
          
      </div>
    );
  }
  
  export default List;
  