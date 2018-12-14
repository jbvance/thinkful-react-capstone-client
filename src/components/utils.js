import React from 'react';

export const renderField = ({   
    id,     
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => {                   
      return (    
        <div>       
            <div className="row">
                <div className="col-3 form-label">
                    <label htmlFor={id}>{label}</label>
                </div>
                <div className="col-9">
                    <input {...input } placeholder={label} type={type} />  
                </div>
            </div>                
            {touched &&
                (error && 
                    <div className="row">                                                       
                        <div className="alert alert-danger alert-center"><span className="fas fa-exclamation-circle"></span> {error}</div>
                    </div>)}            

        </div>                                                   
    )};     