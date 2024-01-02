import React,{useState} from "react";
import ReactDOM from "react-dom";
import {Person} from "./components/Person.js";
import style from "./indexStyle.css";
import {PersonwOnclick} from "./components/PersonwOnClick.js"
import {Success} from "./components/Success.js"
import {Header} from "./components/Header.js"
import {List} from "./components/List.js"

function UserCard() {

  // Question Node.- 01
  const pName= "Sanjeev";
  const age = 20;
  
  // Question Node.- 02
  const[name, setName] = useState("M S Dhoni");
  const[message, setMessage] = useState("");

  const [bg, setBG] = useState(null);

  const onClickHandle = function(){
    setName("Dhoni");
    setMessage("Click Event called")
    setBG("green");
  }

  // Question No.- 03
  const title= "Header File";

  // Question No.-04
  const items = ["HTML", "CSS", "JS", "REACT JS", "NODE JS", "EXPRESS JS", "MONGO DB"];


  return <div>
            <Header title={title}/>
            <Success message={message} />
            <Person name={pName} age={age} />
            <PersonwOnclick name={name} bg= {bg} onclick = {onClickHandle}/>

            {/* list item */}
            <List items = {items}/>


        </div>
}

ReactDOM.render(<UserCard />, document.querySelector("#body"));
