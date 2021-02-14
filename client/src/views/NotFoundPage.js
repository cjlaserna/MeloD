
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

import developmentimg from "../assets/img/development.svg";
import "../assets/css/landingpage.css";


// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

import Home from "views/Home.js";

function NotFoundPage(){
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL
  } = process.env;
  
  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };
  return(
    <div className = "contentwrapper">
      <div className ="content">
        <h1>Error<span>404</span></h1>
        <h2>this<span> page</span> doesn't <span>exist</span>...</h2>
        <Button size='lg'  href="/">Back to Home</Button>
        </div>
    </div>
  )
}

export default NotFoundPage;
