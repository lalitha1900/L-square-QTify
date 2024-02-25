import Card from './Card';
import React,{useState,useEffect} from 'react';
import Styles from "./Card.module.css";

const CardCategory = ({category,header}) => {
    const [type ,setType] = useState('');
    const [entireData,setEntireData] = useState([]);
    const [btnLabel,setBtnLabel] = useState("collapse");
    const [isShowAll,setIsShowAll] = useState(true);
    const [cardsData,setCardsData] = useState([]);
    const  toggleShowAll =()=> {
        if(isShowAll){
          setBtnLabel("show All");
          var tempArr = [];
          for(var i=0;i<6;i++)
            tempArr.push(entireData[i]);
          setCardsData(tempArr)
        }
        else{
            setCardsData(entireData);
          setBtnLabel("Collapse");
        }
        setIsShowAll(!isShowAll);
    }
    useEffect(()=>{
        async function  getData(){
            console.log(category);
            var data = await fetch('https://qtify-backend-labs.crio.do/albums/'+category);
            if(data.ok){
                var jsonData = await data.json();
                if(jsonData.length>0){
                    setCardsData(jsonData);
                    setEntireData(jsonData);
                }
            }
        }
        getData();
      },[]);
      
    return (
    <section className={`${category} ${Styles.backgroundBlack} ${Styles.borderGreen}`}>
      <div>
        <h1 className="albumHeading">{header}</h1>
        <button onClick={toggleShowAll} className="showAll">{btnLabel}</button>
      </div>
    <section className="cardSection"> 
   
        {cardsData.map(function(value,index){
              console.log(value,type);
              return(<Card key={index} data={value} type={'album'}/>)
        })}
    
    </section>
  </section>
    );
}
export default CardCategory;