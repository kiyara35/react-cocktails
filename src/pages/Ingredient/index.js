import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {GET_INGREDIENT_INFO} from '../../config/config'
import {Link} from "react-router-dom"
import IngredientCocktail from "../../component/IngredientCocktail"
import {Button} from "@mui/material"
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace"

const Ingredient = () => {

    const [ingredient, setIngredient] = useState()
    const param = useParams()

    useEffect(() => {
        get_ingredient_info()
    }, [param.name])

    const get_ingredient_info = async () => {
        const req = await fetch(GET_INGREDIENT_INFO + param.name)
        const res = await req.json()

        setIngredient(res.ingredients[0])
    }


    return (
        <div>
            <Link to={'/'}>
                <Button
                    variant="text" startIcon={<KeyboardBackspaceIcon color="disabled"/>} >

                </Button>
            </Link>
            <IngredientCocktail ingredient={ingredient}/>
        </div>
    );
};

export default Ingredient;