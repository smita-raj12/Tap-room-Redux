import React from "react";

function Header(){
    const headerStyle = {
        fontFamily: 'sans-serif',
        paddingTop: '30px'
      }
    return (
        <div style={headerStyle}>    
        <hr/>  
            <h1>Tap Room</h1>
        </div>
    );
}

export default Header;