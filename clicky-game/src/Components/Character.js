import React from "react";

const styles = {
    
}

function Character (props) {
    return(
            <img className="img-responsive pic m-2" width="200" height="200" alt={props.name} src={props.image} />
    );
}

export default Character;
