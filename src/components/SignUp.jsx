import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

import Swal from 'sweetalert2'

const SignUp = () => {
  const { createUser, manageProfile } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
  
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const password = form.password.value;
  
    // Validation checks
    if (password.length < 6) {
      setError("Password is too short. Use 6 or more characters");
      Swal.fire("Error", "Password is too short. Use 6 or more characters.", "error");
      return;
    }
  
    if (!/[a-z]/.test(password)) {
      setError("Password is risky. Use at least one lowercase.");
      Swal.fire("Error", "Password is risky. Use at least one lowercase.", "error");
      return;
    }
  
    if (!/[A-Z]/.test(password)) {
      setError("Password is risky. Use at least one uppercase.");
      Swal.fire("Error", "Password is risky. Use at least one uppercase.", "error");
      return;
    }
  
    createUser(email, password, name, image)
      .then((res) => {
        console.log("User created successfully:", res.user);
        manageProfile(name, image);
  
        const newUser = { name, email, image };
  
        // Save user data to backend
        fetch("https://sportdox-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        }).then(() => {
          // Show success alert
          Swal.fire({
            title: "Success!",
            text: "Your account has been created successfully!",
            icon: "success",
          }).then(() => {
            // Navigate after user clicks "OK"
            navigate("/");
          });
        });
      })
      .catch((error) => {
        console.error("Error creating user:", error.message);
        setError(error.message);
  
        // Show error alert
        Swal.fire("Error", error.message, "error");
      });
  };
  
  const handleGoogleSignUp = () => {
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        const { displayName, email, photoURL } = user;
  
        if (!photoURL) {
          setError("Google account does not have a profile picture.");
          Swal.fire("Error", "Google account does not have a profile picture.", "error");
          return;
        }
  
        const newUser = { name: displayName, email, image: photoURL };
  
       
        fetch("https://sportdox-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then(() => {
            console.log("User data saved successfully.");
  
            
            Swal.fire({
              title: "Success!",
              text: "Logged in with Google successfully!",
              icon: "success",
            }).then(() => {
            
              navigate("/");
            });
          })
          .catch((error) => {
            console.error("Error saving user to database:", error.message);
            setError("Failed to save user data. Please try again.");
  
            
            Swal.fire("Error", "Failed to save user data. Please try again.", "error");
          });
  
        console.log("Google Sign-Up Success:", user);
      })
      .catch((error) => {
        console.error("Google Sign-Up Error:", error.message);
        setError(error.message);
  
        
        Swal.fire("Error", error.message, "error");
      });
  };
  
  

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                placeholder="Image URL"
                className="input input-bordered"
                name="image"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              {error && <p className="text-red-500">{error}</p>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
            <NavLink to="/signIn">
              <label className="label">
                <span className="text-sm">Already Have an Account?</span>
                <a
                  href="#"
                  className="label-text-alt link link-hover font-semibold text-blue-500"
                >
                  Sign In
                </a>
              </label>
            </NavLink>
            <hr />
            <div className="form-control mt-6">
              <button onClick={handleGoogleSignUp} className="btn ">
                <i className="fa-brands fa-google text-red-600"></i> Sign Up
                With Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
