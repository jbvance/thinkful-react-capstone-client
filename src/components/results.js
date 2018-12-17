import React from 'react';
import { connect } from 'react-redux';

export const Results = (props) => {
    return(
        <div>
           {props.status &&
            <h3 className="alert-success alert-success-box">{props.status} </h3>        
           }
           {props.errorMessage &&
            <h3 className="alert-danger alert-danger-box">{props.errorMessage} </h3>        
           }
        </div>
    );
}

const mapStateToProps = state => ({
    status: state.docx.status,
    errorMessage: state.docx.errorMessage
});

export default connect(mapStateToProps)(Results);