import React from "react";

const Item = (props) => {
  return (
    <div
      className="card badges bg-light m-2"
      style={{ width: "400px", height: "400px" }}
    >
      <img
        src={props.thumbnail}
        className="card-img-top image-fluid"
        style={{ width: "auto", height: "200px", objectFit: "cover" }}
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
        <div className="d-flex justify-content-between align-items-center mb-2">
          <b>
            Price:
            <i>{props.price}</i>
          </b>
          <b>
            Rating:
            <i>{props.rating}</i>
          </b>
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
