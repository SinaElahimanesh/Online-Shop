import styled from "styled-components";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import "./register.css";


const Error = styled.span`
  color: red;
`;

const Register = () => {

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const dispatch = useDispatch();
	const { isFetching, error } = useSelector((state) => state.user);
	
	const handleClick = (e) => {
		e.preventDefault();
		login(dispatch, { username, password, email}, "/auth/register");
	  };
	  
  return (
    <section className="ftco-section">
		<div classNameName="container">
			<div className="row justify-content-center">
				<div className="col-lg-4 col-md-3">
					<div className="wrap">
						<div className="img" >
			      </div>
						<div className="login-wrap p-4 p-lg-5">
			      	<div className="d-flex">
			      		<div className="w-100">
			      			<h3 className="mb-8">Sign Up</h3>
			      		</div>
			      	</div>
							<form action="#" className="signin-form">
              {/* <div className="form-group mb-3">
			      			<label className="label" for="name">Name</label>
			      			<input type="text" className="form-control" placeholder="Name" required />
			      		</div> */}
			      	<div className="form-group mb-3">
			      			<label className="label" for="name">Username</label>
			      			<input type="text" className="form-control" placeholder="Username" required   onChange={(e) => setUsername(e.target.value)} />
			      		</div>
		            <div className="form-group mb-3">
		            	<label className="label" for="password">Password</label>
		              <input type="password" className="form-control" placeholder="Password" required  onChange={(e) => setPassword(e.target.value)} />
		            </div>
                <div className="form-group mb-3">
			      			<label className="label" for="name">Email</label>
			      			<input type="email" className="form-control" placeholder="Email" required  onChange={(e) => setEmail(e.target.value)}  />
			      		</div>
                {/* <div className="form-group mb-3">
			      			<label className="label" for="name">Confirm Password</label>
			      			<input type="password" className="form-control" placeholder="Confirm Password" required />
			      		</div> */}
		            {/* <div className="form-group">
		            	<button type="submit" className="form-control btn rounded submit px-3">Sign Up</button>
		            </div> */}
		             <div className="form-group">
		            	<button type="submit" className="form-control btn rounded submit px-3" 
                   onClick={handleClick} disabled={isFetching}>Sign Up</button>
                   {error && <Error>Something went wrong...</Error>}
		            </div>
		          </form>
		          <p className="text-center">Already have an account? <Link to="/login" >Sign In</Link></p>
		        </div>
		      </div>
				</div>
			</div>
		</div>
	</section>
  );
};

export default Register;
