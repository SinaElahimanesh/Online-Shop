import styled from "styled-components";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import "./register.css";


const Register = () => {
  return (
    <section className="ftco-section">
                  <Navbar />
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
              <div className="form-group mb-3">
			      			<label className="label" for="name">Name</label>
			      			<input type="text" className="form-control" placeholder="Name" required />
			      		</div>
                <div className="form-group mb-3">
			      			<label className="label" for="name">Email</label>
			      			<input type="email" className="form-control" placeholder="Email" required />
			      		</div>
			      		<div className="form-group mb-3">
			      			<label className="label" for="name">Username</label>
			      			<input type="text" className="form-control" placeholder="Username" required />
			      		</div>
		            <div className="form-group mb-3">
		            	<label className="label" for="password">Password</label>
		              <input type="password" className="form-control" placeholder="Password" required />
		            </div>
                <div className="form-group mb-3">
			      			<label className="label" for="name">Confirm Password</label>
			      			<input type="password" className="form-control" placeholder="Confirm Password" required />
			      		</div>
		            <div className="form-group">
		            	<button type="submit" className="form-control btn rounded submit px-3">Sign In</button>
		            </div>
		          </form>
		          <p className="text-center">Already have an account? <Link to="/login" >Sign Up</Link></p>
		        </div>
		      </div>
				</div>
			</div>
		</div>
	</section>
  );
};

export default Register;
