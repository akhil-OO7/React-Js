import React from "react";

const Item = (props) => {
  return (
    <div className="card badges bg-light m-2" style={{ width: "18rem" }}>
      <img
        src={props.thumbnail}
        className="card-img-top"
        alt="..."
        width="250"
        height="150px"
      />
      <div className="card-body">
        <h6 className="card-title">
          <div className="d-flex justify-content-between">
            <b>Product:</b>
            <i>{props.title}</i>
          </div>
        </h6>
        <div className="">
          <b>Price:</b>
          <i>{props.price}</i>
          <b>Rating:</b>
          <i>{props.rating}</i>
        </div>
        <h6 className="card-text text-start text-wrap">
          <h6 className="card-text d-flex flex-wrap">
            <b>Description</b>
            <i>{props.description}</i>
          </h6>
        </h6>
      </div>
    </div>
  );
};

export default Item;
