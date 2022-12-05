import { useEffect, useState } from 'react';

const Timer = () => {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    let handle = setInterval(() => {
      setCount(curCount => curCount + 1);
    },1000);

    return () => {
      clearInterval(handle);
    }
  },)

  return <p>Counting: {count}</p>
}

const CurrentTime = () => {
  const [curDate, setCurDate] = useState<Date>(new Date());
  useEffect(() => {
    let handle = setInterval(() => {
      setCurDate(new Date());
    },1000);

    return () => {
      clearInterval(handle);
    };
  });
  let time:string = curDate.toLocaleTimeString();
  return (
    <>
      <p>We zijn nu: {time}</p>
    </>
  )
}

interface minmax {
  min: number,
  max: number
}

const RandomValue = ({min,max}: minmax) => {
  const [randomNumber, setRandomNumber] = useState<number>(0);
  useEffect(() => {
    let handle = setInterval(() => {
      setRandomNumber(Math.round(Math.random() * max - min));
    },1000);

    return () => {
      clearInterval(handle);
    }
  },[min,max])

  return <p>Willekeurig nummer tussen {min} en {max}: {randomNumber ?? 0}</p>
}

const Counter = () => {
  return (
    <>
      <Timer />
      <CurrentTime />
      <RandomValue min={0} max={100}/>
      <RandomValue min={20} max={30}/>
    </>
  );
}

export default Counter;
