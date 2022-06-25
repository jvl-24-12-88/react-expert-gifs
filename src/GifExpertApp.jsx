import { useState } from 'react';
import { AddCategoria, GifGrid } from './components';

export const GifExpertApp = () => {

    const [ categorias, setCategorias ] = useState(['One Punch']);

    const onAddCategoria = (newCategoria) => {
        //setCategorias([...categorias, 'Valorant']);
        //setCategorias( categoria => categoria.concat('Pokemon'));
        //setCategorias( categorias.concat('Valorant'));
        if( categorias.includes(newCategoria) ) return;
        setCategorias( cat => [newCategoria, ...cat]);
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategoria 
                // categorias={ setCategorias }
                onNewCategoria={ value => onAddCategoria(value) }
            />

            { 
                categorias.map( (categoria, i) => (
                    <GifGrid categoria={ categoria } key={ categoria }/>
                ))
            }
        </>
    )
}
