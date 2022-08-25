import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../ContextApi/AppContext";
import { Box,  Input, Text } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { userLogin } = useContext(AppContext);

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
      <br/>
      <br/>
      <Navbar/>
      <Text fontWeight={"bold"} fontSize="large" marginLeft={"550px" } marginTop="-100px">SignIn</Text>
      <Box  marginLeft={"550px"}>
      <form  onSubmit={handleSubmit}>
        <Input isInvalid
    errorBorderColor='red.300' size="lg" width="450px"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <Input isInvalid
    errorBorderColor='red.300' size="lg" width="450px"
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Input isInvalid
    errorBorderColor='black' size="lg" width="450px" type="submit" />
      </form>
      <Link  to="/">Go Back</Link>
      </Box>
      <Footer/>
      
    </div>
  );
};
export default Login
