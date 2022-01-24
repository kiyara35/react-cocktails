import React, {useState, useEffect} from 'react';
import Form from "../../component/Form/Form"
import {GET_ALL_COCKTAILS, SEARCH_COCKTAILS_BY_NAME, FILTER_COCKTAILS_BY_ALCOHOL} from '../../config/config'
import AllCocktails from "../../component/AllCocktails"
import StyledEngineProvider from "@mui/styled-engine-sc/StyledEngineProvider"

const Home = () => {
    const [data, setData] = useState()

    useEffect(() => {
        get_all_cocktails()
    }, [])

    const get_all_cocktails = async () => {
        const req = await fetch(GET_ALL_COCKTAILS)
        const res = await req.json()
        setData(res.drinks)

    }

    const search_cocktails_by_name = async (name) => {
        if (name.length > 2) {
            const req = await fetch(SEARCH_COCKTAILS_BY_NAME + name)
            const res = await req.json()
            setData(res.drinks)
        } else {
            get_all_cocktails()
        }
    }

    const filter_cocktails = async (value) => {
        if (value === 'All') {
            get_all_cocktails()
        } else {
            const req = await fetch(FILTER_COCKTAILS_BY_ALCOHOL + value)
            const res = await req.json()
            console.log(res.drinks)
           setData(res.drinks)
        }


    }


    return (
        <div>
            <Form
                filter={filter_cocktails}
                search={search_cocktails_by_name}
            />
            {data ?
            <StyledEngineProvider injectFirst>

                <AllCocktails data={data}/>
                </StyledEngineProvider>
                : null}
        </div>
    );
};

export default Home;