import React from "react";

const Form = ({ q, handleInputChange, handleFormSubmit }) => {
  return (
    <form>
      <div className="form">
        <input
          id="title"
          type="text"
          value={q}
          name="q"
          onChange={handleInputChange}
        />
      </div>
      <div className="formSection">
          <button 
          onClick={handleFormSubmit}
          type="submit"
          className="submitBtn"
          > Search Books</button>
      </div>
    </form>

  )
}

export default Form;

// This file exports the Input, TextArea, and FormBtn components

// export function Input(props) {
//   return (
//     <div className="form-group">
//       <input className="form-control" {...props} />
//     </div>
//   );
// }

// export function TextArea(props) {
//   return (
//     <div className="form-group">
//       <textarea className="form-control" rows="20" {...props} />
//     </div>
//   );
// }

// export function FormBtn(props) {
//   return (
//     <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
//       {props.children}
//     </button>
//   );
// }
