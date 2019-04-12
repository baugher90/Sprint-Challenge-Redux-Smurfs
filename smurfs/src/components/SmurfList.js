
import React from 'react'
import { connect } from 'react-redux';
import Smurf from './Smurf';


class SmurfList extends React.Component{
    state ={
        smurfs: []
    }
    render(){
        console.log("props ", this.props.smurfs)
        return(
            <div>
               {this.props.smurfs.map((props, index) =>{
                   return (
                      <Smurf
                        props={props}
                        key={index}
                        /> 
                   )
               })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
      smurfs: state.smurfs
    };
  };
  
  export default connect(
    mapStateToProps,
    {}
  )(SmurfList);