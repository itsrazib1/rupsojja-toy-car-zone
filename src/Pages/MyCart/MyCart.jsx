import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/Authprovider";
import CartRow from "./CartRow";
import Swal from "sweetalert2";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const [carts, setCarts] = useState([]);

  const url = `http://localhost:5000/cart?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, [url]);

  const hendleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        fetch(`http://localhost:5000/cart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-center font-bold text-red-600">
        MY CART : {carts.length} Iteam
      </h2>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <tbody>
            {carts.map((cart) => (
              <CartRow
                key={cart._id}
                hendleDelete={hendleDelete}
                cart={cart}
              ></CartRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
