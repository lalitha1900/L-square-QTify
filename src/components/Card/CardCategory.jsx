import Card from './Card';
import React,{useState,useEffect} from 'react';
import Styles from "./Card.module.css";
import Carousel from '../Carousel/Carousel';

const CardCategory = ({category,header}) => {
    const [type ,setType] = useState('');
    const [entireData,setEntireData] = useState([]);
    const [btnLabel,setBtnLabel] = useState("show all");
    const [isShowAll,setIsShowAll] = useState(false);
    const [cardsData,setCardsData] = useState([]);
    const [categoryType,setcategoryType] = useState(category);
    function createCardData(value,index,type){
      
     return  <Card key={index} data={value} type={type}/>
    }
    const  toggleShowAll =()=> {
        if(isShowAll){
          setBtnLabel("show all");
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
            console.log("category :: ",categoryType);
            var data = await fetch('https://qtify-backend-labs.crio.do/albums/'+categoryType);
            if(data.ok){
                var jsonData = await data.json();
                if(jsonData.length>0){
                    setCardsData(jsonData);
                    setEntireData(jsonData);
                }
            }
        }
        setcategoryType(category);  
        getData();
      },[]);
      
    return (
    <section className={`${category} ${Styles.backgroundBlack} ${Styles.borderGreen}`}>
      <div className={Styles.sectionHeaderDiv}>
        <h1 className="albumHeading">{header}</h1>
        <button onClick={toggleShowAll} className={Styles.showAll}>{btnLabel}</button>
      </div>
    
   
        {isShowAll ?
          (<section className="cardSection"> 
              {
                cardsData.map(function(value,index){
                  console.log(value,type);
                  return(<Card key={index} data={value} type={'album'}/>)
                })
              }
          </section>)
              
            : <Carousel data={entireData} createComponent={createCardData} type={"album"}></Carousel>
          
      }
    
   
  </section>
    );
}
export default CardCategory;