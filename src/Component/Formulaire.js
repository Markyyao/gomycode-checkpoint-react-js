import React from 'react';

const Formulaire = () => {
    return (
        <div className= "container">
            <h1 className = "text-center">FORMULAIRE D'INSCRIPTION</h1>
            <form action="#" className ="form-group">
                <div>
                    <label htmlFor="name">NOM</label>
                    <input type="text" id="name" className ="form-control"/>
                </div>
                <div>
                    <label htmlFor="prenom">Prenom</label>
                    <input type="text" id="prenom" className ="form-control"/>
                </div>
                <div>
                    <label htmlFor="sexe">Sexe</label>
                    <input type="text" id="sexe" className ="form-control"/>
                </div>
                <div>
                    <label htmlFor="commentaire">Commentaire</label>
                    <textarea className="form-control" name="" id="" cols="15" rows="5"></textarea>
                </div>

                <button type = "button" className = "btn btn-info mt-2">Valider</button>
            </form>
        </div>
    );
};

export default Formulaire;