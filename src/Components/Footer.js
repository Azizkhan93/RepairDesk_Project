import React from "react";
import FooterStyle from "./Footer.Module.css";
import { faFontAwesome } from "@fortawesome/free-regular-svg-icons";
import { envelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className={FooterStyle}>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <ul>
                <li className="heading-list">Company</li>
                <li>
                  <a className="list-link" href="#">
                    Our Story
                  </a>
                </li>
                <li>
                  <a className="list-link" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="list-link" href="#">
                    Gdpr
                  </a>
                </li>
                <li>
                  <a className="list-link" href="#">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a className="list-link" href="#">
                    Privacy & Policy
                  </a>
                </li>
                <li>
                  <a className="list-link" href="#">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            {/* coloumn end */}
            {/* coloumn end */}
            <div className="col-md-3">
              <ul>
                <li className="heading-list">Features</li>
                <li>
                  <a className="list-link" href="#">
                    Inventory Management
                  </a>
                </li>
                <li>
                  <a className="list-link" href="#">
                    Repair Ticket Management
                  </a>
                </li>
                <li>
                  <a className="list-link" href="#">
                    Marketing
                  </a>
                </li>
                <li>
                  <a className="list-link" href="#">
                    Payments
                  </a>
                </li>
                <li>
                  <a className="list-link" href="#">
                    Integrations
                  </a>
                </li>
                <li>
                  <a className="list-link" href="#">
                    Online Appointments
                  </a>
                </li>
                <li>
                  <a className="list-link" href="#">
                    Loyalty Program
                  </a>
                </li>
                <li>
                  <a className="list-link" href="#">
                    Store Credits
                  </a>
                </li>
                <li>
                  <a className="list-link" href="#">
                    Employee Management
                  </a>
                </li>
                <li>
                  <a className="list-link" href="#">
                    Reporting
                  </a>
                </li>
                <li>
                  <a className="list-link" href="#">
                    Billing & Invoicing
                  </a>
                </li>
              </ul>
            </div>
            {/* coloumn end */}
            {/* coloumn end */}
            <div className="col-md-3">
              <ul>
                <li className="heading-list">Industries we serve</li>
                <li>
                  <a className="list-link" href="#">
                    Cell Phone Repair
                  </a>
                </li>
                <li>
                  <a className="list-link" href="#">
                    Computer Repair
                  </a>
                </li>
                <li>
                  <a className="list-link" href="#">
                    Jewelry Repair
                  </a>
                </li>
                <li>
                  <a className="list-link" href="#">
                    Watch Repair
                  </a>
                </li>
                <li>
                  <a className="list-link" href="#">
                    Drone Repair
                  </a>
                </li>
                <li>
                  <a className="list-link" href="#">
                    Auto Repair
                  </a>
                </li>
              </ul>
            </div>
            {/* coloumn end */}
            {/* coloumn end */}
            <div className="col-md-3">
              <ul>
                <li className="heading-list">Useful Links</li>
                <li>
                  <a className="list-link" href="#">
                    Get In Touch
                  </a>
                </li>
                <li>
                  <a className="list-link" href="#">
                    Partner With Us
                  </a>
                </li>
                <li>
                  <a className="list-link" href="#">
                    RepairDesk Digital
                  </a>
                </li>
                <li>
                  <a className="list-link" href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="list-link" href="#">
                    Events
                  </a>
                </li>
                <li>
                  <a className="list-link" href="#">
                    Podcast
                  </a>
                </li>
                <li>
                  <a className="list-link" href="#">
                    Knowledge Base
                  </a>
                </li>
                <li>
                  <a className="list-link" href="#">
                    Public API
                  </a>
                </li>
                <li>
                  <a className="list-link" href="#">
                    Capital
                  </a>
                </li>
                <li>
                  <a className="list-link" href="#">
                    Recommended Hardware
                  </a>
                </li>
              </ul>
            </div>
            {/* coloumn end */}
            {/* coloumn end */}
          </div>

          {/* bottom footer  */}
          <div className="bottom-footer">
            <div className="row">
              <hr className="hr"></hr>
              <div className="col-md-6 ps-5 mt-5 mb-4">
                <h4>2261 Market Street #4713</h4>
                <h4>San Francisco, CA 94114</h4>
              </div>
              <div className="col-md-6 pe-1">
                <div className="icons">
                  <i className="icons-spacing fa-brands fa-linkedin"></i>
                  <i className="icons-spacing fa-brands fa-facebook"></i>
                  <i className="icons-spacing fa-brands fa-youtube"></i>
                  <i className="icons-spacing fa-brands fa-twitter"></i>
                </div>
              </div>
              <hr className="hr"></hr>
              <p className="p-heading">
                RepairDesk is a cloud based point-of-sale software, engineered
                specifically for small and medium sized computer and cell phone
                repair shops that allows technicians to track & monitor repair
                jobs, stay on top of inventory and manage multiple store
                locations. The software keeps track of inventory levels and
                notifies the business when a phone part is low and needs to be
                replenished so they can order parts.
              </p>
            </div>
          </div>
          {/* bottom footer  */}
        </div>
        <div className="rightsreserved">
          <div className="container">
            {/* Rights&Reserved */}
            <div className="row">
              <div className="col-md-12">
                <div className="copyright">
                  <p>Copyright 2023 RepairDesk INC. All rights Reserved</p>

                  <ul className="">
                    <li>Privacy & GDPR</li>
                    <li>Terms & Conditions</li>
                  </ul>
                </div>
              </div>
              {/* <div className="col-md-6">
                <ul>
                  <li>Privacy & GDPR</li>
                  <li>Terms & Conditions</li>
                </ul>
              </div> */}
            </div>
            {/* Rights&Reserved */}
          </div>
        </div>
        {/* name of the organization */}
        <div className="nameorg">
          <p>Designed & Developed By WebMended </p>
          {/* <a href="#">WebMended</a> */}
        </div>

        {/* name of the organization */}
      </footer>
    </div>
  );
}
