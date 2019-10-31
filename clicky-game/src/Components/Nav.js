import React from "react";

const style = {
    navStyle: {
        width: "33%",
        textAlign: "center"
    }
}

function Nav () {
    return(
        <nav className="navbar navbar-light bg-light mb-5">
            <span style={style.navStyle}>Clicky Game</span>
            <span style={style.navStyle}>holder</span>
            <span style={style.navStyle}>Score: | Top Score:</span>
        </nav>
    );
}

export default Nav;