import React from "react";
import BannerStyles from "./Banner.Module.css";

export default function Banner() {
  return (
    <div className={BannerStyles}>
      <section className="Banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="Banner-text">
                <h1>All-in-One Repair Shop Management POS Software</h1>
                <p>
                  #1 Cloud-based Point of Sale Ecosystem to manage and grow your
                  Repair Business
                </p>
                <div className="div-spacer"></div>
                <button className=" hdrbtn btn btn-success">
                  Start My Free Trial
                </button>
                <button className=" hdrbtn1 btn btn-light">See Pricing</button>
              </div>
              <p className="trial-para">
                Fully featured 14-days free trial. No credit card required.
              </p>
            </div>
            <div className="col-md-6">
              <div className="Banner-img">
                <img src="./images//banner.png" alt="/images//banner.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
