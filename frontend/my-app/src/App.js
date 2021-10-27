
import './App.css';
import Card from './Components/Card';
import {useState,useEffect} from 'react';



  //const url = "http://localhost:8080/users";
  /*async function Getdata(){
 
  const response = await fetch(url);
  let data = await response.json();
  let required=JSON.stringify(data);
  let new_req = JSON.parse(required);
  
  console.log(required);
 
  return new_req;

    }  

  Getdata();*/

function App() {

   const [data,setData] = useState([]);
   useEffect(()=>{
     fetch('http://localhost:8080/users').then(
       res=>res.json()
       ).then(data=>{setData(data[0])})
    },[])

  const user_id = data.user_id;
  const user_name = data.name;
  const user_email = data.email;
  const joined_date = data.joined_date;

 
  
  return (
    <div className="App">
      <header className="App-header">
        <Card user_id={user_id} user_name={user_name} user_email={user_email} joined_date={joined_date} />
      </header>
    </div>
  );
}

export default App;
