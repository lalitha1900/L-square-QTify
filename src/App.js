
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HeroSection from './components/HeroSection/HeroSection';
import Card from './components/Card/Card';
import React,{useState,useEffect} from 'react';

function App() {
  const [cardsData,setCardsData] = useState([]);
  const [cardsCompArr,setCardsCompArr] = useState([]);
  const [type ,setType] = useState('');
  useEffect(()=>{
    async function  getData(){
      var data = await fetch('https://qtify-backend-labs.crio.do/albums/top');
      if(data.ok){
      var jsonData = await data.json();
      if(jsonData.length>0){
        setCardsData(jsonData);
        setType('album');
        var arr = []
        jsonData.map(function(value,index){
          console.log(value,type);
          arr.push(<Card data={value} type={'album'}/>)
        })
        setCardsCompArr(arr);
      }
    }
    }
    getData();
  },[]);
  return (
    <>
    <NavBar/>
   <HeroSection/>
   <section class="cardSection">  {cardsCompArr}</section>
 
    
   
   
   </>
   
  );
}

export default App;
