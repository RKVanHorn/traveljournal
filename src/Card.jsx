import React from "react";

export default function Card(props) {
  return (
    <div className="whole-card">
      <section className="info-cards">
        <img src={props.image} alt="" className="card-img" />
        <div className="card-info">
          <span className="info-span">
            <img src="../images/Fill219.png" alt="" className="pin-img" />
            <p className="location">{props.location}</p>
            <a href={props.googleMapsUrl} className="map">
              View on Google Maps
            </a>
          </span>
          <h1 className="name">{props.title}</h1>
          <h5 className="dates">
            {props.startDate} - {props.endDate}
          </h5>
          <p className="info-text">{props.description}</p>
        </div>
      </section>
      <hr />
    </div>
  );
}
