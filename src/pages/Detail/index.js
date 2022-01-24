import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom"
import {GET_DETAIL_BY_ID} from '../../config/config'
import DetailCocktail from "../../component/DetailCocktail"
import {Button} from "@mui/material"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {Link} from "react-router-dom"

const Detail = () => {
    const [drink, setDrink] = useState()
    const param = useParams()

    useEffect(() => {
        get_detail_cocktail()
    }, [param.id])

    const get_detail_cocktail = async () => {
        const req = await fetch(GET_DETAIL_BY_ID + param.id)
        const res = await req.json()
        setDrink(res.drinks[0])
        console.log(res.drinks[0])

    }

    return (
        <div>
            <Link to={'/'}>
                <Button
                    variant="text" startIcon={<KeyboardBackspaceIcon color="disabled"/>} >

                </Button>
            </Link>


            <DetailCocktail drink={drink}/>
        </div>
    );
};

export default Detail;