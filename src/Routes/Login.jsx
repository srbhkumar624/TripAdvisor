import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../ContextApi/AppContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { auth, userLogin } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email,
      password
    };
    axios
      .post("https://reqres.in/api/login", payload)
      .then((res) => {
        console.log(res.data.token);
        userLogin(res.data.token);
        navigate("/findyourwayabudhabi");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
export default Login
