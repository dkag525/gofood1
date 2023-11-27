import React from "react";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div>
      <div className="card" style={{ width: "18rem", maxHeight: "360px" }}>
        <img
          src="https://source.unsplash.com/random/200×200/?elephant"
          className="card-img-top"
          alt="Card image top"
        />
        <div className="card-body">
          <h5 className="card-title">Card titles</h5>
          <p className="card-text">This is some important text</p>
          <div>
            <select className="m-2 h-100 bg-success rounded">
              {Array.from(Array(6), (item, index) => {
                return (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded">
              <option value={"half"}>Half</option>
              <option value={"full"}>Full</option>
            </select>
            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
