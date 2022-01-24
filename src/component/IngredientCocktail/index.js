import React from 'react';
import './IngredientCocktail.css'

const IngredientCocktail = ({ingredient}) => {
    return (
        <div
            className='ingredient_inner'
        >
            {
                ingredient ?
                    <>
                        <h1>{ingredient.strIngredient}</h1>
                        {ingredient.strDescription !== null
                            ?
                            <p>{ingredient.strDescription}</p>
                            :
                            <h1>No information </h1>
                        }

                    </>
                    :
                    <h4>No information </h4>


            }
        </div>
    );
};

export default IngredientCocktail;