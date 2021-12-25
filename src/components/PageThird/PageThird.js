import React from "react";
import { Link } from "react-router-dom";

const PageThird = () => {
  return (
    <div className='pageone container'>
      <div>
        <div class=' w-75 my-4  selected'>
          <h5>DO YOU HAVE UX DESIGN READY?</h5>
          <div>
            <button className='btn home mx-2 '>Yes</button>
            <button className='btn home'>No</button>
          </div>
        </div>
        <div class=' w-75 my-4  selected'>
          <h5>HOW MANY WEBPAGES DO YOU WANT FOR YOUR PUBLIC WEBSITE?</h5>

          <input
            type='range'
            class='form-range'
            min='0'
            max='5'
            id='customRange2'
          ></input>
        </div>
        <div class=' w-75 my-4  selected'>
          <h5>DO YOU HAVE UX DESIGN READY?</h5>
          <div>
            <button className='btn home mx-2'>Stripe</button>
            <button className='btn home mx-2'>Paypal</button>
            <button className='btn home mx-2'>Both</button>
            <button className='btn home mx-2'>None</button>
          </div>
        </div>

        <div className='d-flex'>
          <Link className='navigation' to='/second'>
            Prev
          </Link>
          <div class='progress mx-3 my-1' style={{ width: "50% " }}>
            <div
              class='progress-bar'
              role='progressbar'
              style={{ width: "100% ", background: "#13a2e2" }}
              aria-valuenow='100'
              aria-valuemin='0'
              aria-valuemax='100'
            ></div>
          </div>
          Next
        </div>
      </div>
      <div class='card w-25 my-4'>
        <div class='card-body'>
          <p>Est Cost</p>
          <h5 class='card-title'>$3,000 - $3,500</h5>
          <p class='card-text navigation'>
            "This cost will include 2 rounds of corrections at UI design stage,
            and once the design is finalized, we will proceed to development.
            Project will be divided into 2 - 3 milestone payments."
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageThird;
