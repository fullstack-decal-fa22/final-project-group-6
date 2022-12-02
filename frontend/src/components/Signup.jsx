import { useState } from 'react';
import Background from '../utils/pokemon.png'
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

    axios.post('/signup', { email, password })
    .then ((response) => console.log(response))
    .catch((error) => console.log(error));

    setSubmitted(true);
    login();
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

  const login = () => {
    myWindow = window.open ('/login');
  }

  document.body.style = 'background: #b5edf5;';
    return(
      <div className="form" style={{height: 750, backgroundImage: `url(${Background})`,textAlign: "center", justifyContent: "center", verticalAlign: "baseline", verticalAlign: "middle"}}>
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
      <h1 style={{ fontSize: "28px", fontStyle: "italic"}}>User Registration</h1>
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div >
            <form onSubmit={handleSubmit} style={{ fontSize: "15px", textAlign: "center", justifyContent: "center", verticalAlign: "baseline", verticalAlign: "middle", marginLeft: "10"}} onSubmit={handleSubmit}> {/*Connect handleSubmit to form using onSubmit*/}
                <label for="email">Edu Email:   </label>
                <input color='blue' value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="studentname@berkeley.edu" id="email" name="email" />
                <br />
                <br />
                <label for="password">Password: </label>
                <input value={password} onChange={(e) => setPassword(e.target.value)}type="password" placeholder="******" id="password" name="password" />
                <br />
                <br />
                <button type="submit" onClick={handleSubmit}>
                  Sign Up
                </button> {/*triggers handleSubmit function when user presses on the submit button*/}

                </form>
                <br />
                <a href="http://127.0.0.1:5173/">
                    <button onClick={login}>Click here if you have created an account</button>
                 </a>
        </div>
    )
}