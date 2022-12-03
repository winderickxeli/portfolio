import { useState } from 'react';
import styled from 'styled-components';


const ColorSelect = () => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const colorList:string[] = ["red", "green", "blue", "yellow", "orange", "purple", "black", "white"]
  let color = "";
  let ColorDiv = styled.div``;

  const SelectColors: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setSelectedColors([...Array.from(event.target.selectedOptions)].map(item => item.value));
  }



  const ShowColors:React.MouseEventHandler<HTMLInputElement> = () => {
    setColors([]);
    setColors([...selectedColors]);
  }

  return(
    <article>
      <select title='Colors' id='colors' name='colors' onChange={SelectColors} multiple>
        <option disabled value="">Kies een kleur</option>
        {colorList.map((color) => <option style={{backgroundColor:`${color}`,color:`${color === 'white' || color === 'yellow' ? "black" : "white"}`}} key={color} value={color}>{color}</option>)}
      </select>
      <input type='button' value="Show your true colors" onClick={ShowColors}/>
      <div style={{display:"grid",gridAutoColumns:"minmax(0,1fr)",gridAutoFlow:"column"}}>
        {colors.map((color) => <div style={{backgroundColor:`${color}`, width:`100px`,height:`100px`, borderStyle:'solid'}}/>)}
      </div>
    </article>
  )
}



export default ColorSelect;
