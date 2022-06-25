import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( categoria ) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImagen = async() => {
        const newImagen = await getGifs( categoria );
        setImages( newImagen );
        setIsLoading ( false );
    }

    useEffect( () => { 
        getImagen();
    }, []);
    
    return {
        images,
        isLoading
    }
}
