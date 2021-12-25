import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const [borders, setborders] = useState([]);
  const myFunction = () => {
    setborders("1px", "solid", "#13a2e2");
    console.log(borders);
  };
  const color = {
    border: `${borders}`,
  };

  return (
    <div className='pageone container'>
      <div style={color} className='my-5'>
        <h4>I WANT MY SITE TO BE BUILT ON (CHOOSE FRAMEWORK)</h4>
        <div onclick={() => myFunction()} class='card w-75 my-4  home selected'>
          <div className='card-body btn'>
            <h5 class='card-title'>Python</h5>
            <p class='card-text'>
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>
        <div class='card w-75 my-2 home selected'>
          <div class='card-body'>
            <h5 class='card-title'>Wordpress</h5>
            <p class='card-text'>
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>
        <div class='card w-75 my-2 home selected'>
          <div class='card-body'>
            <h5 class='card-title'>Php laravel</h5>
            <p class='card-text'>
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>
        <div class='card w-75 my-2 home selected'>
          <div class='card-body'>
            <h5 class='card-title'>Php (From Scratch)</h5>
            <p class='card-text'>
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>
        <div class='card w-75 my-2 home selected'>
          <div class='card-body'>
            <h5 class='card-title'>Kajabi</h5>
            <p class='card-text'>
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>
        <div className='d-flex'>
          Prev
          <div class='progress mx-3 my-1' style={{ width: "50% " }}>
            <div
              class='progress-bar '
              role='progressbar'
              style={{ width: "25% ", background: "#13a2e2" }}
              aria-valuenow='25'
              aria-valuemin='0'
              aria-valuemax='100'
            ></div>
          </div>
          <Link className='navigation' to='/second'>
            Next
          </Link>
        </div>
      </div>
      <div className='my-5'>
        <p>PLEASE INPUT ALL THE FIELDS TO SHOW ESTIMATED PRICE</p>
      </div>
    </div>
  );
};

export default Home;
