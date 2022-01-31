import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <p>name</p>
        <input
          type='text'
          name='name'
          placeholder='Name' required/><br />
        <p>Brand</p>  
        <input
          type='text'
          name='brand'
          placeholder='Brand' required/><br/>
        <p>Price</p>  
        <input
          type='number'
          name='price'
          defaultValue={124}
          placeholder='Price' required/><br/>
        <p>Flavor</p>  
        <input
          type='text'
          name='flavor'
          placeholder='Flavor' required/><br/>  
        <p>Pints</p>  
        <input
          type='number'
          name='pints'
          defaultValue={124}
          placeholder='Pints' required/><br/>  
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;