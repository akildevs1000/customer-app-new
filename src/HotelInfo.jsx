import React from "react";
import "./HotelInfo.css";
// import hotelImage from './assets/hotel-room.jpg'; // Replace with your actual image path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

function HotelInfo() {
  return (
    <div className="hotel-info">
      {/* Header */}
      <header className="hotel-header">
        {/* <div className="date-time">
          <p>07 Nov 2024</p>
          <p>13:25:47</p>
        </div> */}
        <img
          src="https://customer.myhotel2cloud.com/login/login-logo.png"
          alt="Hotel Room"
          className="hotel-logo"
        />
        <p className="hotel-subtitle">A & Co</p>
      </header>

      {/* Image */}
      <img
        src="https://hyderspark.com/wp-content/uploads/2023/12/00.jpg"
        alt="Hotel Room"
        className="hotel-image"
      />

      {/* Hotel Details */}
      <section className="hotel-details">
        <h2>HYDERSPARK LUXURY HOTEL</h2>
        <div className="contact-info">
          <p>
            <FontAwesomeIcon icon={faPhoneAlt} /> +91 84894 60006
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> hyderskodai@gmail.com
          </p>
          <p>
            <div style={{ display: "flex" }}>
              <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
              <span style={{ padding: "0 6px" }}>
                298/A2, M.M Street, Near German Eye Hospital, Kodaikanal-624101,
                Dindugal District.
              </span>
            </div>
          </p>
        </div>
        <p className="description">
          Welcome to Hyderspark Hotel in Kodaikanal, Tamilnadu! Our 32 luxurious
          rooms boast 3-star amenities for a comfortable stay. Host your events
          in Jasmin, our meeting hall for up to 90 members. Enjoy a delectable
        </p>
      </section>

      <section className="hotel-details">
        <h2>For A Holiday Beyond Your Expectations
        </h2>
      </section>
    </div>
  );
}

export default HotelInfo;
