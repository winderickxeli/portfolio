import { useState } from 'react';
import styled from 'styled-components';

interface CounterInterface {
  count: number,
  index: number
  countList: number[],
  setCountList: React.Dispatch<React.SetStateAction<number[]>>
}

const CounterList = () => {
  const [countList, setCountList] = useState<number[]>([]);
  const AddCounter : React.MouseEventHandler<HTMLButtonElement> = () => {
    setCountList([...countList,0]);
  }

  return(
    <>
      <div style={{flex:"1 1 0%",display:"flex",justifyContent:"center"}}>
        {countList.map((value, index) => <Counter count={value} index={index} countList={countList} setCountList={setCountList}/>)}<br />
      </div>
      <label>Som van de tellers:</label> {countList.reduce((sum:number, value:number) =>  sum += value,0)} <br />
      <button onClick={AddCounter}>Voeg teller toe</button>
    </>
  )
}

const Counter = ({count, index, countList, setCountList}: CounterInterface) => {
  const opTellen : React.MouseEventHandler<HTMLButtonElement> = () => {
    let cpyList:number[] = countList.map((count, indexinArray) => {
      if(index === indexinArray)
        count++;
      return count;
    })
    setCountList([...cpyList]);
  }
  const afTrekken : React.MouseEventHandler<HTMLButtonElement> = () => {
    let cpyList:number[] = countList.map((count, indexinArray) => {
      if(index === indexinArray)
        count--;
      return count;
    })
    setCountList([...cpyList]);
  }
  let Color;

  if(count > 0) {
    Color = styled.div`
      color: green;
    `
  } else if (count < 0) {
    Color = styled.div`
    color: red;
  `
  } else {
    Color = styled.div`
    color: #5F93FC;
  `
  }
  return (
    <div><Color><button onClick={opTellen}>Omhoog</button> Count: {count} <button onClick={afTrekken}>Omlaag</button></Color><br /></div>
  )
}

export default CounterList;
