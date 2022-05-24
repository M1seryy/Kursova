import "./App.css";
import { connect, useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { cashReducers } from "./store/cashReducer";
import { customerReducers } from "./store/customerReducer";

function App(store) {
  const dispatch = useDispatch();
  let cash = useSelector((state) => state.cashReducers.cash);
  let customer = useSelector((state) => state.customerReducers.customer);
  console.log(cash);
  let input = useRef();
  let ADD_CASH = () => {
    dispatch({ type: "ADD_CASH", payload: Number(input.current.value) });
  };

  let GET_CASH = () => {
    dispatch({ type: "GET_CASH", payload: Number(input.current.value) });
  };
  let ADD_CUSTOMER = () => {
    const customer = {
      name: input.current.value,
      id: Date.now(),
    };
    dispatch({ type: "ADD_CUSTOMER", payload: customer });
  };
  let REMOVE_CUSTOMER = () => {
    dispatch({ type: "REMOVE_CUSTOMER", payload: customer.id });
  };
  return (
    <div>
      <div>
        <h1>{cash}</h1>
      </div>
      <button onClick={ADD_CASH}>Add</button>
      <button onClick={GET_CASH}>Get</button>
      <button onClick={() => ADD_CUSTOMER}>Add customer</button>
      <button onClick={() => REMOVE_CUSTOMER}>Remove customer</button>
      <input ref={input} />
      {customer.length > 0 ? (
        <div>
          {customer.map((customer) => (
            <div>{customer.name}</div>
          ))}
        </div>
      ) : (
        <div>Error</div>
      )}
    </div>
  );
}

export default App;
