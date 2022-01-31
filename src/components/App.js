import React from "react";
import Header from "./Header";
import KegControl from "./KegControl";
import taproom from './../img/taproom.png'

function App(){
 
  return (
    <React.Fragment>
    <div
        style={{
          backgroundImage: `url(${taproom})`,
          backgroundSize: "cover",
          height: "100vh",
          textAlign:"center",
          color:"#A52A2A"
        }}
      >
      <Header />
      <KegControl />
      </div>
    {/* <img src={taproom} alt="An image of tickets" /> */}
     
    </React.Fragment>
  );
}

export default App;