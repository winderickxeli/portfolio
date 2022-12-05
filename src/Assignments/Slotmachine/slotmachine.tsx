import { useState } from "react";

const Play = ():number[] => {
    let slotnummers: number[] = [];
    
    
    for (let i: number = 0; i < 3; i++) {
        slotnummers.push(Math.floor(Math.random() * 5 + 1) - 1);
    }
    return slotnummers;
}

const PullLever:React.MouseEventHandler<HTMLButtonElement> = () => {
    
}

const SlotMachine = () => {
    const [money,setMoney] = useState<number>(100);
    const slotnummers = Play();
    let winningnumber: number = slotnummers.reduce((oldslot: number, slot: number) => slot === oldslot ? slot : -1, slotnummers[0])

    if(winningnumber > -1){
        setMoney(money + 20);
    } else{
        setMoney(money -1);
    }

    return (
        <div>
            <div>Saldo: {money}</div>
            <div>
                <button id="pull" onClick={PullLever} style={{width:"64px", height:"64px"}}>Pull lever</button>
                {slotnummers.map((slot:number, index:number) => <img src={`/images/${slot}.png`} alt='slotimage' height="64" width="64"/>)}
            </div>
        </div>
    )
}

export default SlotMachine;