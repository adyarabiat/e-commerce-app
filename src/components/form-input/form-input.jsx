import React from "react";

import "./form-input.scss";

const FormInput = (props) => {
  return (
    <div className="group">
      <input className="form-input" {...props} />
      <label
        className={`${props.value.length ? "shrink" : ""} form-input-label`}
      >
        {props.label}
      </label>
    </div>
  );
};

export default FormInput;
// So basiclly here we are changing the input that we are going to add to the form
// so wrapeed it all with div = group
// then the input and we add to it all the props that we want to add
// then we pass our logic which means if there is a label we want to add the follwing :
// label tag then we give it className and we check if there is a value in the input if there is we need to add to the class shrink if not we are removing shrink then we keep the main className which is form-input-label then between the the tags we give the label name that we get it from the props
