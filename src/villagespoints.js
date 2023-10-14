import React from 'react';
import './App.css'
import map from './map.jpg'
import {villages} from './villages.js'


export function VillagesPoints({setShow, setCurrentId}){
    

    const currentInfo = (id) => {
        setCurrentId(id);
        setShow(true);
      }

    
  return <div className="map">
    <img src={map}  alt="noMap" ></img>
    <Village typeOfMarker='yellow' top={8} left={4} currentInfo={currentInfo} id={1}/>
    <Village typeOfMarker='yellow' top={10} left={21} currentInfo={currentInfo} id={2}/>
    <Village typeOfMarker='black' top={19} left={68.5} currentInfo={currentInfo} id={3}/>
    <Village typeOfMarker='blue' top={21} left={72} currentInfo={currentInfo} id={4}/>
    <Village typeOfMarker='yellow' top={18} left={30} currentInfo={currentInfo} id={5}/>
    
    <Village typeOfMarker='blue' top={22} left={61} currentInfo={currentInfo} id={6}/>
    <Village typeOfMarker='red' top={22} left={15} currentInfo={currentInfo} id={7}/>
    <Village typeOfMarker='yellow' top={22} left={22} currentInfo={currentInfo} id={8}/>
    <Village typeOfMarker='yellow' top={23} left={28} currentInfo={currentInfo} id={9}/>
    <Village typeOfMarker='blue' top={27} left={53} currentInfo={currentInfo} id={10}/>
   
    <Village typeOfMarker='blue' top={25} left={63} currentInfo={currentInfo} id={11}/>
    <Village typeOfMarker='blue' top={27} left={73} currentInfo={currentInfo} id={12}/>
    <Village typeOfMarker='red' top={29} left={9} currentInfo={currentInfo} id={13}/>
    <Village typeOfMarker='blue' top={31} left={29} currentInfo={currentInfo} id={14}/>
    <Village /*    */ typeOfMarker='blue' top={35} left={62} currentInfo={currentInfo} id={15}/>

    <Village typeOfMarker='yellow' top={33} left={15} currentInfo={currentInfo} id={16}/>
    <Village typeOfMarker='blue' top={39} left={78} currentInfo={currentInfo} id={17}/>
    <Village typeOfMarker='red' top={37} left={10} currentInfo={currentInfo} id={18}/>
    <Village typeOfMarker='yellow' top={40} left={6} currentInfo={currentInfo} id={19}/>
    <Village /*  */ typeOfMarker='yellow' top={39} left={21} currentInfo={currentInfo} id={20}/>

    <Village /* 21*/ typeOfMarker='yellow' top={39} left={38} currentInfo={currentInfo} id={21}/>
    <Village typeOfMarker='green' top={38} left={55} currentInfo={currentInfo} id={22}/>
    <Village typeOfMarker='red' top={45} left={14} currentInfo={currentInfo} id={23}/>
    <Village typeOfMarker='yellow' top={45} left={26} currentInfo={currentInfo} id={24}/>
    <Village /*      */ typeOfMarker='yellow' top={46} left={32} currentInfo={currentInfo} id={25}/>

    <Village /* 25*/ typeOfMarker='blue' top={47} left={64} currentInfo={currentInfo} id={26}/>
    <Village typeOfMarker='yellow' top={50} left={14} currentInfo={currentInfo} id={27}/>
    <Village typeOfMarker='yellow' top={51} left={32} currentInfo={currentInfo} id={28}/>
    <Village typeOfMarker='blue' top={54} left={45} currentInfo={currentInfo} id={29}/>
    <Village /*        */ typeOfMarker='yellow' top={57} left={50} currentInfo={currentInfo} id={30}/>

    <Village /* 31*/ typeOfMarker='yellow' top={58} left={70} currentInfo={currentInfo} id={31}/>
    <Village typeOfMarker='red' top={55} left={7} currentInfo={currentInfo} id={32}/>
    <Village typeOfMarker='yellow' top={54} left={17} currentInfo={currentInfo} id={33}/>
    <Village typeOfMarker='yellow' top={55} left={25} currentInfo={currentInfo} id={34}/>
    <Village /*   */ typeOfMarker='yellow' top={55} left={32} currentInfo={currentInfo} id={35}/>

    <Village /* 36*/ typeOfMarker='yellow' top={60} left={48} currentInfo={currentInfo} id={36}/>
    <Village typeOfMarker='blue' top={62} left={69} currentInfo={currentInfo} id={37}/>
    <Village typeOfMarker='yellow' top={60} left={13} currentInfo={currentInfo} id={38}/>
    <Village typeOfMarker='red' top={62} left={18} currentInfo={currentInfo} id={39}/>
    <Village /*       */ typeOfMarker='blue' top={62} left={25} currentInfo={currentInfo} id={40}/>

    <Village /* 41*/ typeOfMarker='blue' top={64} left={33} currentInfo={currentInfo} id={41}/>
    <Village typeOfMarker='blue' top={64} left={43} currentInfo={currentInfo} id={42}/>
    <Village typeOfMarker='red' top={63} left={53} currentInfo={currentInfo} id={43}/>
    <Village typeOfMarker='green' top={69} left={64} currentInfo={currentInfo} id={44}/>
    <Village /*    */ typeOfMarker='yellow' top={65} left={4} currentInfo={currentInfo} id={45}/>

    <Village /* 46*/ typeOfMarker='yellow' top={65} left={12} currentInfo={currentInfo} id={46}/>
    <Village typeOfMarker='red' top={67} left={17} currentInfo={currentInfo} id={47}/>
    <Village typeOfMarker='yellow' top={69} left={45} currentInfo={currentInfo} id={48}/>
    <Village typeOfMarker='yellow' top={72} left={36} currentInfo={currentInfo} id={49}/>
    <Village /*     */ typeOfMarker='red' top={76} left={8} currentInfo={currentInfo} id={50}/>

    <Village /* 51*/ typeOfMarker='yellow' top={78} left={13} currentInfo={currentInfo} id={51}/>
    <Village typeOfMarker='red' top={79.5} left={19} currentInfo={currentInfo} id={52}/>
    <Village typeOfMarker='yellow' top={75} left={26} currentInfo={currentInfo} id={53}/>
    <Village typeOfMarker='blue' top={77.5} left={34} currentInfo={currentInfo} id={54}/>
    <Village /*   */ typeOfMarker='yellow' top={82.5} left={22} currentInfo={currentInfo} id={55}/>

    <Village /* 56*/ typeOfMarker='yellow' top={84} left={60} currentInfo={currentInfo} id={56}/>
    <Village typeOfMarker='red' top={90.5} left={31} currentInfo={currentInfo} id={57}/>
    <Village typeOfMarker='red' top={86} left={44} currentInfo={currentInfo} id={58}/>
    <Village /*   220 231 232 239*/typeOfMarker='red' top={90} left={44} currentInfo={currentInfo} id={59}/>
    <Village /*   220 231 232 239*/typeOfMarker='blue' top={44} left={42} currentInfo={currentInfo} id={60}/>
    
    
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
