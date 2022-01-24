// // import React, {useState, useEffect} from 'react'
// // import './AllCocktail.css';
// //
// // function App() {
// //     const [value, setValue] = useState('')
// //     const [words, setWords] = useState(['hello', 'World'])
// //
// //     const addWord = () => {
// //         if (value.length) {
// //             setWords([...words, value])
// //             setValue('')
// //         } else {
// //             alert('enter word')
// //         }
// //
// //     }
// //
// //
// //     useEffect(() => {
// //         console.log(value)
// //         console.log(words)
// //     }, [value])
// //
// //
// //     return (
// //         <div>
// //             <input
// //                 type="text"
// //                 value={value}
// //                 onChange={(e) => setValue(e.target.value)}
// //             />
// //             <button
// //                 onClick={addWord}
// //             >
// //                 Add
// //             </button>
// //             {words.map((el, index) => <h3 key={index}>{el}</h3>)}
// //         </div>
// //     )
// // }
// //
// // export default App;
//
// import React, {useState, useEffect} from 'react';
// import './AllCocktail.css'
// import {GET_ALL_COCKTAILS, SEARCH_COCKTAILS_BY_NAME} from './config/config'
// import Form from "./component/Form/Form"
//
//
// const App = () => {
//
//     const [cocktails, setCocktails] = useState([])
//
//     const getAllCocktails = async () => {
//         const req = await fetch(GET_ALL_COCKTAILS)
//         const res = await req.json()
//         setCocktails(res.drinks)
//     }
//
//     const searchCocktailsByName = async (name) => {
//         if (name.length ) {
//             const req = await fetch(SEARCH_COCKTAILS_BY_NAME + name)
//             const res = await req.json()
//             setCocktails(res.drinks)
//         } else {
//             getAllCocktails()
//         }
//
//     }
//
//     useEffect(() => {
//         getAllCocktails()
//     }, [])
//
//
//     return (
//         <div>
//             <Form
//                 searchCocktailsByName={searchCocktailsByName}
//             />
//             <div className="output">
//                 {cocktails?.map((el) => {
//                     return (
//                         <div
//                             className='cocktail_item'
//                             key={el.idDrink}>
//                             <img
//                                 className='cocktail_img'
//                                 src={el.strDrinkThumb} alt=""/>
//                             <h3
//                                 className='cocktail_name'
//                             >{el.strDrink}</h3>
//                         </div>
//                     )
//                 })}
//             </div>
//
//         </div>
//     );
// };
//
// export default App;

import React from 'react';
import Main from "./pages/Main"

const App = () => {
    return (
        <Main/>
    );
};

export default App;
