import { useState } from "react";

import slotCSS from './slotsmachine.module.css';

export const Slot = ({ value }: { value: number }) => {

    return (
      <div className={slotCSS.slot}>
        <img src={`/images/${value}.png`} width="80px"/>
      </div>
    );
  };
  
  const getSlots = (slots: number) => {
    let slotNumbers: number[] = Array.from(Array(slots).keys()).map(() =>
      Math.floor(Math.random() * 5)
    );
    return slotNumbers;
  }
  
  
  export const SlotMachine = ({ slots }: { slots: number }) => {
    const [slotNumbers, setSlotNumbers] = useState(getSlots(slots));
    const [money, setMoney] = useState(100);
  
    const isWinning = () => {
      let winning = slotNumbers.every((slot) => slot === slotNumbers[0]);
      return winning;
    }
  
    const pullLever : React.MouseEventHandler<HTMLButtonElement> = () => {
      setSlotNumbers(getSlots(slots));
      if (isWinning()) {
        setMoney(money + 20);
      } else {
        setMoney(money => money - 1);
      }
    }
  
  
    return (
      <div className={slotCSS.slotMachineContainer}>
        {money > 0 && <div>Saldo: €{money}</div>}
        <div className={slotCSS.slotMachineSubContainer}>
          <button className={slotCSS.lever} onClick={pullLever} disabled={money > 0 ? false : true}>Pull Lever</button>
          {slotNumbers.map((slot, i) => (
            <Slot value={slot} key={i} />
          ))}
        </div>
        {money == 0 && <p className={slotCSS.linearWipe}>Je bent bankroet!</p>}
   
      </div>
    );
  };

export default SlotMachine;