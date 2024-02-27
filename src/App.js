
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HeroSection from './components/HeroSection/HeroSection';
import Section from './components/Section/Section';

import React,{useState,useEffect} from 'react';

function App() {
  const [tabValues ,setTabValues] = useState([]);
  useEffect(()=>{
    async function  getTabValues(){
      
        var data = await fetch('https://qtify-backend-labs.crio.do/genres');
        //console.log("data ",data);
        if(data.ok){
            var jsonData = await data.json();
            //console.log("tab values",jsonData);
            var arr = jsonData.data;
            if(arr.length>0){
              var tempArr = [];
              for(var i in arr){
                tempArr.push(arr[i].label);
              }
             // console.log("tab values1",tempArr);
              setTabValues(tempArr);  
                
            }
        }
    }
    
    getTabValues();
  },[]);
  
 
  return (
    <>
    <NavBar/>
   <HeroSection/>
   <Section category="top" header="Top Albums" url={"albums/top"} typeOfCategory={"album"}></Section>
   <Section category="new" header="New Albums" url={"albums/new"} typeOfCategory={"album"}></Section>
   <Section category="songs" header="Songs" hideCollapse={true} tabsRequired={true} url={"songs"} 
        typeOfCategory={"songs"} tabValues={["All","Rock","Pop","Jazz","Blues"]}>
        
    </Section>
   </>
   
  );
}

export default App;
