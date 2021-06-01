import React from 'react';
import { Field, reduxForm } from 'redux-form';
import submit from '../app/submitValidation';

// const renderField = ({ input, label, type, meta: { touched, error } }) => (
//     <div>
//       <label>{label}</label>
//       <div>
//         <input {...input} placeholder={label} type={type} />
//         {touched && error && <span>{error}</span>}
//       </div>
//     </div>
//   )

let EventForm = props => {
  const { handleSubmit } = props;
  
  
  return (
        <form onSubmit={handleSubmit(submit)}>
            <div className="formDiv">
                <Field name="firstName" component="input" type="text" placeHolder="First Name" required/>
            </div>
            <div className="formDiv">
                <Field name="lastName" component="input" type="text" placeHolder="Last Name" required/>
            </div>
            <div className="formDiv">
                <Field name="email" component="input" type="email"  placeHolder="Email" required/>
            </div>
            <div className="formDiv">
                <label id="eventDate" htmlFor="eventDate">Event Date</label>
                <Field name="eventDate" component="input" type="date" required/>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

EventForm = reduxForm({
  form: 'event'
})(EventForm);

export default EventForm;