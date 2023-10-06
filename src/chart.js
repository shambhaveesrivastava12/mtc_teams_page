import React, { Fragment } from "react";
import randomcolor from "randomcolor";
import faker from "faker";
import PropTypes from "prop-types";
import details from "./details.json"; 
import { useState } from "react";
// import call from "./icons8-call-50.png";
// import video from "./icons8-video-24.png";
// import chat from "./icons8-chat-50.png";
import linkedin from "./linked-icon.png";
// import data from "./details.json";
import data from "./data.json";
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const findDetailsById = (id) => {
  return details.people.find((person) => person.id === id);
};
const Card = (props) => {
  const levelColor = randomcolor();

  return (
    <ul>
      {props.data.map((item) => (
        <Fragment key={item.name}>
          <li>
            <div className="card">
              <div className="image">
                <img
                  alt="Profile"
                  style={{ borderColor: levelColor }}
                  src={findDetailsById(item.id).image}
                />
              </div>
              <div className="card-body">
                <h4>{findDetailsById(item.id).name}</h4>
                <p>{findDetailsById(item.id).position}</p>
              </div>
              <div className="card-footer" style={{ background: levelColor }}>
                <a
                  href={findDetailsById(item.id).linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="linkedin" />
                </a>
              </div>
            </div>
            {item.children?.length && <Card data={item.children} />}
          </li>
        </Fragment>
      ))}
    </ul>
  );
};
Card.propTypes = {
  data: PropTypes.array.isRequired,
};
const Chart = () => {
  return (
    <div className="org-tree">
      <Card data={data.people} />
    </div>
  );
};

export default Chart;
