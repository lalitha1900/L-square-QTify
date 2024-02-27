import Card from './Card';
import React,{useState,useEffect} from 'react';

import Carousel from '../Carousel/Carousel';


const CardCategory = ({isShowAll,entireData,typeOfCategory,cardsData}) => {
    const [type ,setType] = useState('');
    
    
   
    
   
   
    function createCardData(value,index,type){
      
     return  <Card key={index} data={value} type={type}/>
    }
    
      
    return (
      <>
        {isShowAll ?
          (<section className="cardSection"> 
              {
                cardsData.map(function(value,index){
                  //console.log(value,type);
                  return(<Card key={index} data={value} type={typeOfCategory}/>)
                })
              }
          </section>)
              
            : <Carousel data={entireData} createComponent={createCardData} type={typeOfCategory}></Carousel>
          
      }
    
    </>
  
    );
}
export default CardCategory;