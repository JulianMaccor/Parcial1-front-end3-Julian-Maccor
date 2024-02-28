import React, { useState } from 'react';
import styles from '../Styles/Card.module.css';

const Form = () => {
    const [encuestado, setEncuestado] = useState({
        name: '',
        genre: '',
        song: '', 
    })
    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(encuestado.name.trim() !== '' && encuestado.name.length > 3 && encuestado.genre.length > 6 && encuestado.song.length > 3){
            setShow(true);
            setErr(false)
        }else{
            setShow(false)
            setErr(true)
        }
    }

    return (
        <div className={styles.formContainer}>
            <h2>Rellena el siguiente formulario con tus gustos musicales!</h2>
            <form onSubmit={handleSubmit}>
                <label>Ingresa tu nombre: </label>
                <input 
                    type="text" 
                    onChange={(event)=> setEncuestado({...encuestado, name: event.target.value})}
                    value={encuestado.name}
                />
                <label>Genero musical de preferencia: </label>
                <input 
                    type="text" 
                    onChange={(event)=> setEncuestado({...encuestado, genre: event.target.value})}
                    value={encuestado.genre}
                />
                <label>Cancion favorita: </label>
                <input 
                    type="text" 
                    onChange={(event)=> setEncuestado({...encuestado, song: event.target.value})}
                    value={encuestado.song}
                />
                <button type="submit">Enviar</button>
            </form>
            {show && 
                <h4>Muchas gracias, {encuestado.name}! La encuesta ha sido completada con éxito!</h4>
            }
            {err && 
                <p>Por favor, verifica que la información sea correcta.</p>
            }
        </div>
    );
}

export default Form;
