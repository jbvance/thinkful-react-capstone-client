import React from 'react';

export const renderField = ({   
    id,     
    input,
    label,
    type,
    placeholder,
    meta: { touched, error, warning }
  }) => {                   
      return (    
        <div>       
            <div className="row">
                <div className="col-3 form-label">
                    <label htmlFor={id}>{label}</label>
                </div>
                <div className="col-9">
                    <input {...input } placeholder={placeholder || label} type={type} />  
                </div>
            </div>                
            {touched &&
                (error && 
                    <div className="row">                                                       
                        <div className="alert alert-danger alert-center"> {error}</div>
                    </div>)}            

        </div>                                                   
    )};

export const renderSelect = (
    {
        input,
        label,
        meta: {touched, error},
        children
    }) => (
  <div className="field">
    <label className="label">{label}</label>
    <div className="control">
      <div className={
        'select ' + (touched ? (error ? 'is-danger' : 'is-success') : '')
      }>
        <select {...input} >
          {children}
        </select>
        {touched && (error && <div className="alert alert-danger alert-center"> {error}</div>)}
      </div>
    </div>
  </div>
);

export  const parseJwt =  token => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
};