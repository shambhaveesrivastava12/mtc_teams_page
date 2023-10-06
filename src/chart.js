import React, { Fragment } from "react";
import randomcolor from "randomcolor";
import faker from "faker";
import linkedin from "./linked-icon.png";
import data from "./data.json";
import details from "./details.json";
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const detailsArr = details.people
console.log(detailsArr)
const Card = (props) => {
  const levelColor = randomcolor();
  return (
    <ul>
      {props.data.map((item,index) => (
        <Fragment key={item.level}>
          <li>
            {console.log(item.image)}
            <div className="card">
              <div className="image">
                <img
                  src = {item.image}
                  alt="Profile"
                  style={{ borderColor: levelColor }}
                />
              </div>
              <div className="card-body">
              <h4>{item.name}</h4>
                <p>{item.position}</p>
              </div>
              <div className="card-footer" style={{ background: levelColor }}>
              <a href={item.linkedin}>
                <img src={linkedin} alt="linkedin"/>
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
const Chart = () => {
  return (
    <div className="org-tree">
      <Card data={data} />
    </div>
  );
};
export default Chart;