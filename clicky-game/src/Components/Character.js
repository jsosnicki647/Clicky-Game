import React from "react";


function Character (props) {
    return(
        <img className="img-responsive m-3" width="150" height="150" alt={props.name} src={props.image} />
    );
}

export default Character;
