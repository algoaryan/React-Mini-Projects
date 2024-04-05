import { useState } from "react";
import "./Lottery.css";
import { getTicket, sum } from "./helper";

function Lottery() {
  let [ticket, setTicket] = useState(getTicket(4));
  let isWinning = sum(ticket) === 15;
  let buyTicket = () => {
    setTicket(getTicket(4))
  }
  return (
    <>
      <h1 className="heading" style={{ color: "Red", fontSize: "1.5rem" }}>
        Lottery App!!!
      </h1>
      <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
        <span>{ticket[3]}</span>
      </div>
      <button className="btn" onClick={buyTicket}>Buy New Ticket</button>
      <h3>{isWinning && "Congatulations You Won"}</h3>
    </>
  );
}

export default Lottery;
