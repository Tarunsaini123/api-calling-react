import { useEffect,useState } from 'react';
import './App.css';

const URL = 'https://jsonplaceholder.typicode.com/comments';
function App() {

  const [temp,setTemp]= useState([])

  useEffect(()=>{
    const fetchData =async () =>{
      const result = await fetch(URL)
      result.json().then(json => {
        console.log(json);
      })
    }
    fetchData();

  },[]);
  return (
   <>
   <h1>Go to console log <span>And check you Api data</span></h1>
      {
        
        temp.map((item)=>(
          <div>
          {item.name}
          </div>
          
        ))
      }
   </>
  );
}

export default App;
