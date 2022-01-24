import React from 'react';
import './AllCocktail.css'
import {Link} from "react-router-dom"
import ImageListItem from "@mui/material/ImageListItem"
import ImageList from "@mui/material/ImageList"
import ImageListItemBar from "@mui/material/ImageListItemBar"
import IconButton from "@mui/material/IconButton"

const AllCocktails = ({data}) => {
    return (

        <ImageList
            className="output"
            sx={{width: 1200, height: 450}} cols={6} rowHeight={200}>
            {data.map((el) => (
                <Link
                    to={`detail/${el.idDrink}`}
                    key={el.idDrink}
                >
                    <ImageListItem key={el.strDrinkThumb}>
                        <img
                            src={`${el.strDrinkThumb}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${el.strDrinkThumb}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            loading="lazy"
                        />

                        <ImageListItemBar
                            className='title'
                            title={el.strDrink}
                            actionIcon={
                                <IconButton
                                    sx={{color: 'rgba(255, 255, 255, 0.54)'}}
                                    aria-label={`info about ${el.strDrink}`}
                                >

                                </IconButton>
                            }
                        />

                    </ImageListItem>

                </Link>
            ))}
        </ImageList>
    )
}
export default AllCocktails;

