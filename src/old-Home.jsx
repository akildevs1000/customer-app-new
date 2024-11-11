import React from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function RoomDetails() {
  const query = useQuery();
  const companyId = query.get("company_id");
  const roomId = query.get("room_id");
  const roomNo = query.get("room_no");

  return (
    <div>
      <h1>Room Details</h1>
      <p>Company ID: {companyId}</p>
      <p>Room ID: {roomId}</p>
      <p>Room Number: {roomNo}</p>
    </div>
  );
}

export default RoomDetails;
