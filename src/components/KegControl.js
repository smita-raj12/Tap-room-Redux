import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

class KegControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedKeg: null,
            editing: false,
            //msg:" "
        };
        this.handleClick = this.handleClick.bind(this);
    }
     
    handleChangingSelectedKeg = (id) => {
      const selectedKeg = this.props.mainKegList[id];
      this.setState({selectedKeg: selectedKeg});
    }
    handleEditClick = () => {
      console.log("handleEditClick reached!");
      this.setState({editing: true});
    }
    
    handleEditingKegInList = (kegToEdit) => {
      const { dispatch } = this.props;
      const action = a.addKeg(kegToEdit);
      dispatch(action);
      this.setState({
        editing: false,
        selectedKeg: null
      });
    }

    handleDeletingKeg = (id) => {
      const { dispatch } = this.props;
      const action = a.deleteKeg(id)
      dispatch(action);
      this.setState({selectedKeg: null});
    }

    handleClick = () => {
      if (this.state.selectedKeg != null) {
        this.setState({
          selectedKeg: null,
          editing: false 
        });
      } else {
        const { dispatch } = this.props;
        const action = a.toggleForm();
      dispatch(action);
      }
    }
    
    handleClickingSell =(id)=> {
      const { dispatch } = this.props;
      const action = a.decreseKeg(id);
      dispatch(action);
    } 
  
    
    handleAddingNewKegToList = (newKeg) => {
      const { dispatch } = this.props;
      //const msg = "Click the name for the details";
      const action = a.addKeg(newKeg)
      dispatch(action);
      const action2 = a.toggleForm();
      dispatch(action2);
    };

    render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
   
    if (this.state.editing ) {      
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} 
                                    onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Return to Keg List";  

    }else if (this.state.selectedKeg != null) {
        currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} 
                                  onClickingSell = {this.handleClickingSell} 
                                  onClickingEdit = {this.handleEditClick} 
                                  onClickingDelete = {this.handleDeletingKeg}
                                  />
        buttonText = "Return to Keg List";
    }
    else if (this.props.formVisibleOnPage) {
        currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}  />;
        buttonText = "Return to Keg List";
    } else {
        currentlyVisibleState = <KegList msg={this.state.msg} kegList={this.props.mainKegList} onKegSelection={this.handleChangingSelectedKeg} />;
        buttonText = "Add Keg";
    }
        return (
          <React.Fragment>
            {currentlyVisibleState}
            <button onClick={this.handleClick}>{buttonText}</button> 
          </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
  return {
    mainKegList: state.mainKegList,
    formVisibleOnPage: state.formVisibleOnPage,
    //quantity: state.quantity
  }
}
KegControl.propTypes = {
  mainKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  //quantity: PropTypes.object
};
KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;