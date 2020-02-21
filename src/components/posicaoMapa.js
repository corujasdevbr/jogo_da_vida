import React from 'react';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    posicao: props => ({
        position: 'absolute',
        top: props.top,
        left: props.left,
        borderRadius: '10px',
        backgroundColor: 'red',
    })
}));


function PosicaoMapa(props) {
    const classes = useStyles(props);

    return (
        <div className={classes.posicao}>Você esta aqui</div>
    )
}

export default PosicaoMapa;