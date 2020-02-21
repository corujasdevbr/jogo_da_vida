import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Posicao from './posicaoMapa';

const useStyles = makeStyles(theme => ({
    container: {
        position: 'relative',
        textAlign: 'center',
        color: 'white',
    },
    posicao: {
        position: 'absolute',
        top: '8px',
        right: '16px',
        borderRadius: '10px',
        backgroundColor: 'red',
    }
}));


function Mapa(props) {
    const classes = useStyles(props);

    return (
        <div className={classes.container}>
            <img src={props.url} alt="Snow" style={{ width: '100%' }} />
            <Posicao top={props.top} left={props.left} />
        </div>
    )
}

export default Mapa;