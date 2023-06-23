import { useState } from "react"
import "./App.css"

function App() {
  // Initialize form state
  const initialState = {
    issueType: "",
    subject: "",
    message: "",
  }

  // Using the useState hook to declare formState variable and a method to update it
  const [formState, setFormState] = useState(initialState)

  // Event handler for form submission
  const handleSubmit = (event) => {
    // Prevent default form submission behavior which would refresh the page
    event.preventDefault()

    // Output formState (current form data) to the console
    console.log(formState)

    // Reset formState back to initialState after form data is used
    setFormState(initialState)
  }

  // Event handler for changes in form fields
  // This function is run each time a user types or makes a selection in a form field
  const handleChange = (event) => {
    // This will set the formState to a new object with all current formState properties
    // but will replace the value of the property that matches the form field's id with the current input value
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  // Render a form with labels, select, text and textarea fields, and a button

  // onChange event listeners call the handleChange function each time a
  // user types in an input field // value attributes of the fields are set to
  // the corresponding formState property, which makes this a controlled
  // component

  // Render a form with labels, select, text and textarea fields, and a button
  return (
    // The form element serves as the container for our form fields and button.
    <form onSubmit={handleSubmit}>
      {/* // The label describes the purpose of the associated dropdown. 'htmlFor' links this label to the dropdown with the same ID. */}
      <label htmlFor="issueType">Type of Issue:</label>

      {/* // A dropdown menu where the user can choose the type of issue. The selected value and the function called when the value changes are tracked in our state. */}
      <select
        id="issueType" // This 'id' is necessary for accessibility and to associate this dropdown with its label.
        onChange={handleChange} // Calls 'handleChange' function every time a change event occurs.
        value={formState.issueType} // This is a controlled component, meaning React is in control of its value and updates it.
      >
        {/* // Each option element represents a choice in the dropdown menu. */}
        <option value="default">Select Issue</option>
        <option value="outage">Service Outage</option>
        <option value="billing">Billing</option>
        <option value="cancel">Cancel Service</option>
      </select>

      {/* // Similar to above, a label and input for the subject of the issue. */}
      <label htmlFor="subject">Subject:</label>
      <input
        type="text" // Specifies that this is a text input field.
        id="subject"
        onChange={handleChange}
        value={formState.subject}
      />

      {/* // A label and textarea for the user to type their message. */}
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        cols="30" // Defines the width of the textarea.
        rows="10" // Defines the height of the textarea.
        onChange={handleChange}
        value={formState.message}
      ></textarea>

      {/* // A submit button. Clicking this will submit the form, triggering the 'onSubmit' event in the form element and calling the 'handleSubmit' function. */}
      <button type="submit">Send</button>
    </form>
  )
}

export default App
