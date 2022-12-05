import styled from 'styled-components';
import { useState } from 'react';

interface shoppingItem {
  item:string,
  quantity: number
}

const GridStyle = styled.div`
  display:grid;
  grid-template-columns:100px 1fr;
  width: 500px;
`;

const BannerMessage = styled.div`
  background-color:green;
  color:black;
  width: 500px;
`;

const ShoppingList = () => {
  const [shoppingList, setShoppingList] = useState<shoppingItem[]>([]);
  const [item, setItem] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  
  const addItem: React.MouseEventHandler<HTMLInputElement> = (event) => {
    setShoppingList([...shoppingList,{item: item, quantity: quantity}]);
    setShowBanner(true);
    setMessage(`${item} toegevoegd aan shopping list.`);
    setTimeout(() => {
      setShowBanner(false);
    },3000)
  }

  const RemoveItemAt = (i: number) => {
    let copyShoppingList = shoppingList.filter((number,index) => index !== i);
    setShowBanner(true);
    setShoppingList(copyShoppingList);
    setMessage(`Item verwijderd van shopping list.`);
    setTimeout(() => {
      setShowBanner(false);
    }, 3000);
  }


  return(
    <>
    {showBanner?<BannerMessage>{message}</BannerMessage>:""}
    <GridStyle>
      <label id='lName'>Name:</label><input placeholder="Name" type='text' name='item' value={item} onChange={(event) => setItem(event.target.value)}/>
      <label id='lQuantity'>Quantity:</label><input type='number' name='quantity' value={quantity} onChange={(event) => setQuantity(parseInt(event.target.value))}/>
      <input type='button' id='AddShoppingItem' value='Add' onClick={addItem}/>
    </GridStyle>
    <table>
      <tr><th>Name</th><th>Quantity</th></tr>
        {shoppingList.map((item, index) => <tr><td>{item.item}</td><td>{item.quantity}</td><td><input type='button' value="X" onClick={()=>{RemoveItemAt(index);}} /></td></tr>)}
    </table>
    </>
  )
}


export default ShoppingList;
