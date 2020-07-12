import React from 'react'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    // const [images, setimages] = useState([])
    // useEffect(() => {
    //     getGifs(category).then(img => {
    //         setimages(img);
    //     });
    // }, [category])
    const { data, loading } = useFetchGifs(category);


    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Cargando ...  </p>}
            <div className="card-grid">
                {
                    data.map(el => <GifGridItem
                        key={el.id}
                        // img={el}
                        {...el}
                    ></GifGridItem>)
                }

            </div >
        </>
    )
}
