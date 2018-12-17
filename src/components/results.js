import React from 'react';
import { connect } from 'react-redux';
import { API_BASE_URL } from '../config';
import axios from 'axios';
import { getDiffieHellman } from 'crypto';

export const Results = (props) => {
    const url = `${API_BASE_URL}/dpoa/files/${props.filename}`;    
    return(
        <div>
           {props.message &&
            <div>
                <h3 className="alert-success alert-success-box">{props.message}</h3> 
                <h5><a href={url}>Click here to download your document</a></h5>    
            </div>   
           }
           {props.errorMessage &&
            <h3 className="alert-danger alert-danger-box">{props.errorMessage} </h3>        
           }
        </div>
    );
}

const mapStateToProps = state => ({
    message: state.docx.message,
    filename: state.docx.filename,
    errorMessage: state.docx.errorMessage,
    authenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(Results);