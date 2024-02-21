import React from 'react';

// don't change the Component name "App"
function App() {
    
  const [feedback, setFeedBack] = React.useState("");
  const [name, setName] = React.useState("");
  
  const[feedbackPart, setFeedbackPart] = React.useState(<Review/>);
  
  function handleClick(){
      setFeedbackPart(<Review feedback={feedback} name={name} />);
  }
  
  function handleChangeInput(event){
      setFeedBack(event.target.value);
  }
  
  
  function handleChangeTArea(event){
      setName(event.target.value);
  }
  
  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea onChange={handleChangeTArea}>{feedback}</textarea>
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" defaultValue={name} onChange={handleChangeInput}/>
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        {feedbackPart}

        <p>
          <button onClick={handleClick}>Save</button>
        </p>
      </section>
    </>
  );
}

export default App;