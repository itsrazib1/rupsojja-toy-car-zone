


const CartRow = ({cart,hendleDelete}) => {
    const {customerName,address,img,date,email,price,_id} = cart;



    return (
        <div>
            <tr>
        <th>
          <label>
          <button onClick={()=>hendleDelete(_id)} className="btn btn-circle btn-outline btn-secondary btn-sm">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className=" rounded- w-24 h-24">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{customerName}</div>
            </div>
          </div>
        </td>
        <td>
          {address}
          <br/>
        </td>
        <td>{price}৳</td>
        <td>{date}</td>
        <td>{email}</td>
        <th>
          <button className="btn btn-ghost btn-xs">Plece Order</button>
        </th>
      </tr>
        </div>
    );
};

export default CartRow;