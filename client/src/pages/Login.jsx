import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import "./register.css";


const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password }, "/auth/login");
  };
  
  return (
    <section className="ftco-section">
		<div classNameName="container">
			<div className="row justify-content-center">
				<div className="col-lg-4 col-md-12">
					<div className="wrap">
						<div className="img" >
			      </div>
						<div className="login-wrap p-4 p-md-5">
			      	<div className="d-flex">
			      		<div className="w-100">
			      			<h3 className="mb-4">ورود</h3>
			      		</div>
			      	</div>
							<form action="#" className="signin-form">
			      		<div className="form-group mb-3">
			      			<label className="label" for="name">نام کاربری</label>
			      			<input type="text" className="form-control" 
                  placeholder="نام کاربری" required 
                  onChange={(e) => setUsername(e.target.value)} />
			      		</div>
		            <div className="form-group mb-3">
		            	<label className="label" for="password">رمزعبور</label>
		              <input type="password" className="form-control" 
                  placeholder="رمزعبور" required
                  onChange={(e) => setPassword(e.target.value)} />
		            </div>
		            <div className="form-group">
		            	<button type="submit" className="form-control btn rounded submit px-3" 
                   onClick={handleClick}>ورود</button>
                   {/* {error && <Error>خطایی رخ داده است...</Error>} */}
		            </div>
		          </form>
		          <p className="text-center">حساب ندارید؟ <Link to="/register">ثبت نام کنید</Link></p>
		        </div>
		      </div>
				</div>
			</div>
		</div>
	</section>
  );
};

export default Login;
