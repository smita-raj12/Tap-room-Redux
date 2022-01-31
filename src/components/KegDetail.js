import React from "react";
import PropTypes from "prop-types";

function getPints(pints) {
    if (pints <= 0) {
        return "Out of stock!";
    }else if(pints <= 10){
        return `${pints}  All most empty`
    }else {
        return pints;
    }
}

function KegDetail(props){
  const { keg, onClickingDelete } = props; 
  return (
    <React.Fragment>
        <h2>Keg Detail</h2>
        <h3>{keg.name}</h3> 
        <p> {keg.brand}</p>
        <p>{keg.price}</p>
        <p>{keg.flavor}</p>
        <p>{getPints(keg.pints)}</p>
        <hr/>
        <button disabled={keg.pints <= 0 ? true : false} onClick={ props.onClickingSell }>Sell</button> <br/>
        <button onClick={ props.onClickingEdit }>Update Keg</button><br/>
        <button onClick={()=> onClickingDelete(keg.id) }>Delete</button><br/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingSell:PropTypes.func,
  onClickingEdit:PropTypes.func,
  onClickingDelete:PropTypes.func
};

export default KegDetail;