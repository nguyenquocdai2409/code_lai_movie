import React from "react";
import { useSelector } from "react-redux";
import { FadeLoader } from "react-spinners";
export default function Spinner() {
  let isLoading = useSelector((state) => state.spinnerReducer.isLoading);
  console.log("😃 - Spinner - isLoading:", isLoading);
  return isLoading ? (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "black",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FadeLoader size={150} color="#36d7b7" speedMultiplier={3} />
    </div>
  ) : (
    <></>
  );
}
