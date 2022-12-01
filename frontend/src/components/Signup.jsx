import { useState } from 'react';
export function Signup() {
 
  // States for registration
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };
 
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h2 style={{color: "green"}}>User successfully registered!!</h2>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h2 style={{color: "red"}}>Please enter all the fields</h2>
      </div>
    );
  };
  document.body.style = 'background: #b5edf5;';
    return(
        <div className="form" style={{ backgroundImage: 'sather', textAlign: "center", justifyContent: "center", verticalAlign: "baseline", verticalAlign: "middle"}}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        <div>
            <h1 style={{fontSize: "28px", fontStyle: "italic"}}>User Registration</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div >
            <form onSubmit={handleSubmit}> {/*Connect handleSubmit to form using onSubmit*/}
                <label for="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="studentname@berkeley.edu" id="email" name="email" />
                <br />
                <br />
                <label for="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)}type="password" placeholder="******" id="password" name="password" />
                <br />
                <br />
                <button type="submit">Sign Up</button> {/*triggers handleSubmit function when user presses on the submit button*/}

                </form>
                <br />
                <a href="http://127.0.0.1:5173/">
                    <button>Click here if you have created an account</button>
                 </a>
        </div>
    )
}