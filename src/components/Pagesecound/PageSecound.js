import React from "react";
import { Link } from "react-router-dom";

const PageSecound = () => {
  return (
    <div className='pageone container'>
      <div>
        <h4>I WANT MY BUILD</h4>
        <div class='card w-75 my-2 home selected'>
          <div class='card-body'>
            <h5 class='card-title'>An ecommerce site</h5>
            <p class='card-text'>
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>
        <div class='card w-75 my-2 home selected'>
          <div class='card-body'>
            <h5 class='card-title'>An online course platform</h5>
            <p class='card-text'>
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>
        <div class='card w-75 my-2 home selected'>
          <div class='card-body'>
            <h5 class='card-title'>A blog site</h5>
            <p class='card-text'>
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>
        <div class='card w-75 my-2 home selected'>
          <div class='card-body'>
            <h5 class='card-title'>My company website with pice calculators</h5>
            <p class='card-text'>
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>

        <div className='d-flex'>
          <Link className='navigation' to='/'>
            Prev
          </Link>

          <div class='progress mx-3 my-1' style={{ width: "50% " }}>
            <div
              class='progress-bar'
              role='progressbar'
              style={{ width: "75% ", background: "#13a2e2" }}
              aria-valuenow='75'
              aria-valuemin='0'
              aria-valuemax='100'
            ></div>
          </div>
          <Link className='navigation' to='/third'>
            Next
          </Link>
        </div>
      </div>
      <div>
        <p>PLEASE INPUT ALL THE FIELDS TO SHOW ESTIMATED PRICE</p>
      </div>
    </div>
  );
};

export default PageSecound;
