import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Styles from "./Section.module.css";
import CardCategory from '../Card/CardCategory'

const Section = ({category,header,hideCollapse,tabsRequired,tabValues,callBack,url,typeOfCategory}) =>{
    const [value, setValue] = React.useState("All");
    const [categoryType,setcategoryType] = useState(category);
    const [genres, setGenres] = useState(tabValues);
    const [btnLabel,setBtnLabel] = useState("show all");
    const [isShowAll,setIsShowAll] = useState(false);
    const [cardsData,setCardsData] = useState([]);
    const [entireData,setEntireData] = useState([]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function getDataByValue(entireData,value){
        if(value=="All")
            return entireData;
        else{
            var tempArr = [];
            for(var i=0;i<entireData.length;i++){
                //console.log("comp ::" +entireData[i].genre.label+" :: "+value)
                if(entireData[i].genre.label == value){
                    tempArr.push(entireData[i]);
                }
            }
            return tempArr;
        }
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
       /// console.log("category :: ",categoryType);
        var data = await fetch('https://qtify-backend-labs.crio.do/'+url);
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
        {!hideCollapse?<button onClick={toggleShowAll} className={Styles.showAll}>{btnLabel}</button>:<></>}
      </div>
      {tabsRequired?
       <Box sx={{ width: '100%', typography: 'body1' }}>
       <TabContext value={value}>
         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
           <TabList onChange={handleChange} aria-label="Songs">
            {
              genres.map(function(value,index){
                return <Tab className={Styles.colorWhite} label={value} value={value} />
              })
                
            } 
             
           </TabList>
         </Box>
         {
              genres.map(function(value,index){
                var tempEntireData = getDataByValue(entireData,value);
                console.log(tempEntireData,value,entireData);
                return  <TabPanel value={value}>{
                           
                            <CardCategory entireData={tempEntireData} cardsData={cardsData} isShowAll={isShowAll} typeOfCategory={typeOfCategory}>
                
                             </CardCategory>}</TabPanel>
              })
                
            }
        
       </TabContext>
     </Box>
        :
        <CardCategory entireData={entireData} cardsData={cardsData} isShowAll={isShowAll} typeOfCategory={typeOfCategory}>

         </CardCategory>
      }
   </section>
    );

}
export default Section;
