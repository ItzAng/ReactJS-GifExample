import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



const GifExpertApp = () => {
    // const categories = ["One punch", "Samurai", "Dragon"];
    const [categories, setCategories] = useState(["One punch"])
    // const handleAdd = () => {
    //     setCategories([...categories,"HunterXHunter"]);
    // }
    return <>
        <h2>GifExpertApp</h2>
        <AddCategory
            setCategories={setCategories}
        ></AddCategory>
        <hr />
        <ol>
            {
                categories.map(cat => {
                    // return <li key={el}>{el}</li>
                    return <GifGrid
                        key={cat}
                        category={cat}></GifGrid>;
                })
            }
        </ol>

    </>;
}


export default GifExpertApp;

