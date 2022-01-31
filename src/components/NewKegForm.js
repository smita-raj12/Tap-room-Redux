import React from "react";
import { v4 } from 'uuid'; 
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewKegForm(props){
      function handleNewKegFormSubmission(event) {
        event.preventDefault();
        props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, price: parseInt(event.target.price.value), flavor: event.target.flavor.value, pints: parseInt(event.target.pints.value), id: v4()});
      }
      
      return (
        <React.Fragment>
          <ReusableForm 
            formSubmissionHandler={handleNewKegFormSubmission}
            buttonText="Click!" />
        </React.Fragment>
      );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func,
};

export default NewKegForm;