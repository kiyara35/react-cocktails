import React from 'react';
import {Link} from "react-router-dom"
import './DetailCocktail.css'
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import CardActions from "@mui/material/CardActions"


const DetailCocktail = ({drink}) => {
    return (
        <div>
            {
                drink ?
                    <Card
                        className='detail_card'
                        sx={{maxWidth: 600}}>
                        <img
                            className='detail_img'
                            src={drink.strDrinkThumb}
                            alt=""/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {drink.strDrink}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {drink.strInstructions}
                            </Typography>
                        </CardContent>
                        <CardActions
                            className='detail_list'
                        >
                            <Link
                                className='detail_link'
                                to={`/ingredient/${drink.strIngredient1}`}>
                                <li>{drink.strIngredient1}</li>
                            </Link>

                            <Link
                                className='detail_link'
                                to={`/ingredient/${drink.strIngredient2}`}>
                                <li>{drink.strIngredient2}</li>
                            </Link>

                            {
                                drink.strIngredient3 !== null &&
                                <Link
                                    className='detail_link'
                                    to={`/ingredient/${drink.strIngredient3}`}>
                                    <li>{drink.strIngredient3}</li>
                                </Link>
                            }


                            {
                                drink.strIngredient4 !== null &&
                                <Link
                                    className='detail_link'
                                    to={`/ingredient/${drink.strIngredient4}`}>
                                    <li>{drink.strIngredient4}</li>
                                </Link>

                            }

                        </CardActions>
                        {/*<CardActions*/}
                        {/*    className='detail_list'*/}
                        {/*>*/}
                        {/*    <li>{drink.strMeasure1}</li>*/}
                        {/*    <li>{drink.strMeasure2}</li>*/}
                        {/*    {*/}
                        {/*        drink.strMeasure3 !== null && <li>{drink.strMeasure3}</li>*/}
                        {/*    }*/}
                        {/*    {*/}
                        {/*        drink.strMeasure4 !== null && <li>{drink.strMeasure4}</li>*/}
                        {/*    }*/}
                        {/*</CardActions>*/}
                    </Card>


                    :
                    <h1>Loaded...</h1>
            }
        </div>
    );
};

export default DetailCocktail;