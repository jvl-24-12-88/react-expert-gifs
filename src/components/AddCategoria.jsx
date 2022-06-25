import { useState } from 'react';

export const AddCategoria = ({ onNewCategoria }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        const inputLimp = inputValue.trim();
        if( inputLimp.length <= 1) return;
        //categorias( data => [...data, inputValue]);
        onNewCategoria(inputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange } />
        </form>
    )
}
