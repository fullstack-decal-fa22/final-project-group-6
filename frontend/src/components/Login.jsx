import { useState } from 'react';
import sather from "../sathergate.jpeg";
export function Login() {
 
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
        <h1>User successfully registered!!</h1>
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
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

    return(
        <div className="form" style={{ background: "blue", backgroundImage: 'sather', textAlign: "center", justifyContent: "center", verticalAlign: "baseline", verticalAlign: "middle"}}>
            
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
            <h1 style={{ textAlign: "center" }} >User Registration</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
 
      {/* Calling to the methods */}
      <div style={{ textAlign: "center"}} className="messages">
        {errorMessage()}
        {successMessage()}
      </div >
            <form style={{ background: "blue", textAlign: "center" }} onSubmit={handleSubmit}> {/*Connect handleSubmit to form using onSubmit*/}
                <label for="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="studentname@berkeley.edu" id="email" name="email" />
                <br />
                <br />
                <label for="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)}type="password" placeholder="******" id="password" name="password" />
                <br />
                <br />
                <button type="submit">Log In</button> {/*triggers handleSubmit function when user presses on the submit button*/}

                </form>
                <br />
                <a style={{ textAlign: "center" }} href="http://127.0.0.1:5173/signup">
                    <button style={{ textAlign: "center" }}>Click here if you have created an account</button>
                 </a>
        </div>
    )
}