import React from 'react';
import './App.css'
import map from './map.gif'
import {villages} from './villages.js'


export function VillagesPoints({setShow, setCurrentId}){
    

    const currentInfo = (id) => {
        setCurrentId(id);
        setShow(true);
      }

    
  return <div className="map">
    <img src={map} alt="noMap" ></img>
    <Village typeOfMarker='yellow' top={9.5} left={4} currentInfo={currentInfo} id={1}/>
    <Village typeOfMarker='yellow' top={12} left={21} currentInfo={currentInfo} id={2}/>
    <Village typeOfMarker='black' top={21} left={68.5} currentInfo={currentInfo} id={3}/>
    <Village typeOfMarker='blue' top={22.5} left={72} currentInfo={currentInfo} id={4}/>
    <Village typeOfMarker='yellow' top={20} left={30} currentInfo={currentInfo} id={5}/>
    
    <Village typeOfMarker='blue' top={23} left={61} currentInfo={currentInfo} id={6}/>
    <Village typeOfMarker='red' top={24} left={15} currentInfo={currentInfo} id={7}/>
    <Village typeOfMarker='yellow' top={24} left={22} currentInfo={currentInfo} id={8}/>
    <Village typeOfMarker='yellow' top={25} left={28} currentInfo={currentInfo} id={9}/>
    <Village typeOfMarker='blue' top={29} left={53} currentInfo={currentInfo} id={10}/>
   
    <Village typeOfMarker='blue' top={27} left={63} currentInfo={currentInfo} id={11}/>
    <Village typeOfMarker='blue' top={29} left={73} currentInfo={currentInfo} id={12}/>
    <Village typeOfMarker='red' top={31} left={9} currentInfo={currentInfo} id={13}/>
    <Village typeOfMarker='blue' top={33} left={29} currentInfo={currentInfo} id={14}/>
    <Village /*    */ typeOfMarker='blue' top={36} left={62} currentInfo={currentInfo} id={15}/>

    <Village typeOfMarker='yellow' top={35} left={15} currentInfo={currentInfo} id={16}/>
    <Village typeOfMarker='blue' top={41} left={78} currentInfo={currentInfo} id={17}/>
    <Village typeOfMarker='red' top={38} left={10} currentInfo={currentInfo} id={18}/>
    <Village typeOfMarker='yellow' top={42} left={6} currentInfo={currentInfo} id={19}/>
    <Village /*  */ typeOfMarker='yellow' top={41} left={21} currentInfo={currentInfo} id={20}/>

    <Village /* 21*/ typeOfMarker='yellow' top={41} left={38} currentInfo={currentInfo} id={21}/>
    <Village typeOfMarker='green' top={39} left={55} currentInfo={currentInfo} id={22}/>
    <Village typeOfMarker='red' top={47} left={14} currentInfo={currentInfo} id={23}/>
    <Village typeOfMarker='yellow' top={47} left={26} currentInfo={currentInfo} id={24}/>
    <Village /*      */ typeOfMarker='yellow' top={48} left={32} currentInfo={currentInfo} id={25}/>

    <Village /* 25*/ typeOfMarker='blue' top={49} left={64} currentInfo={currentInfo} id={26}/>
    <Village typeOfMarker='yellow' top={52} left={14} currentInfo={currentInfo} id={27}/>
    <Village typeOfMarker='yellow' top={53} left={32} currentInfo={currentInfo} id={28}/>
    <Village typeOfMarker='blue' top={56} left={45} currentInfo={currentInfo} id={29}/>
    <Village /*        */ typeOfMarker='yellow' top={58.5} left={50} currentInfo={currentInfo} id={30}/>

    <Village /* 31*/ typeOfMarker='yellow' top={59} left={70} currentInfo={currentInfo} id={31}/>
    <Village typeOfMarker='red' top={57} left={7} currentInfo={currentInfo} id={32}/>
    <Village typeOfMarker='yellow' top={56} left={17} currentInfo={currentInfo} id={33}/>
    <Village typeOfMarker='yellow' top={57} left={25} currentInfo={currentInfo} id={34}/>
    <Village /*   */ typeOfMarker='yellow' top={57} left={32} currentInfo={currentInfo} id={35}/>

    <Village /* 36*/ typeOfMarker='yellow' top={62} left={48} currentInfo={currentInfo} id={36}/>
    <Village typeOfMarker='blue' top={64} left={70} currentInfo={currentInfo} id={37}/>
    <Village typeOfMarker='yellow' top={62} left={13} currentInfo={currentInfo} id={38}/>
    <Village typeOfMarker='red' top={63} left={18} currentInfo={currentInfo} id={39}/>
    <Village /*       */ typeOfMarker='blue' top={63} left={25} currentInfo={currentInfo} id={40}/>

    <Village /* 41*/ typeOfMarker='blue' top={66} left={33} currentInfo={currentInfo} id={41}/>
    <Village typeOfMarker='blue' top={66} left={43} currentInfo={currentInfo} id={42}/>
    <Village typeOfMarker='red' top={65} left={53} currentInfo={currentInfo} id={43}/>
    <Village typeOfMarker='green' top={70} left={64} currentInfo={currentInfo} id={44}/>
    <Village /*    */ typeOfMarker='yellow' top={67} left={4} currentInfo={currentInfo} id={45}/>

    <Village /* 46*/ typeOfMarker='yellow' top={67} left={12} currentInfo={currentInfo} id={46}/>
    <Village typeOfMarker='red' top={68} left={17} currentInfo={currentInfo} id={47}/>
    <Village typeOfMarker='yellow' top={71} left={45} currentInfo={currentInfo} id={48}/>
    <Village typeOfMarker='yellow' top={74} left={36} currentInfo={currentInfo} id={49}/>
    <Village /*     */ typeOfMarker='red' top={78} left={8} currentInfo={currentInfo} id={50}/>

    <Village /* 51*/ typeOfMarker='yellow' top={80} left={13} currentInfo={currentInfo} id={51}/>
    <Village typeOfMarker='red' top={80.5} left={19} currentInfo={currentInfo} id={52}/>
    <Village typeOfMarker='yellow' top={77} left={26} currentInfo={currentInfo} id={53}/>
    <Village typeOfMarker='blue' top={78.5} left={34} currentInfo={currentInfo} id={54}/>
    <Village /*   */ typeOfMarker='yellow' top={83.5} left={22} currentInfo={currentInfo} id={55}/>

    <Village /* 56*/ typeOfMarker='yellow' top={86} left={60} currentInfo={currentInfo} id={56}/>
    <Village typeOfMarker='red' top={91.5} left={31} currentInfo={currentInfo} id={57}/>
    <Village typeOfMarker='red' top={88} left={44} currentInfo={currentInfo} id={58}/>
    <Village /*   220 231 232 239*/typeOfMarker='red' top={92} left={44} currentInfo={currentInfo} id={59}/>
    
    
  </div>
}

function Village({top, left, typeOfMarker, currentInfo, id}){
    
    let village = villages.filter(item => item.id === id);
    let name = village[0].name.props.children[0]; 
 
    console.log(name);
    

    return <div style={{top: top + '%', left: left + '%'}}>
      <span className={typeOfMarker + ' villagesSpan'} style={{top: top + '%', left: left + '%'}}  onClick={() => currentInfo(id)}></span>
      <span className="nameOfVillage" style={{top: top - 0.66 + '%', left: left + 1.60 + '%'}}>{name}</span>
    </div>
  }
