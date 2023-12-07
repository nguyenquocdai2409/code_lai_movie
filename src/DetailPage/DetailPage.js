import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { https } from "../api/config";
import { Rate } from "antd";
import moment from "moment";

export default function DetailPage() {
  let params = useParams();
  console.log(params);
  const [detail, setdetail] = useState({});
  useEffect(() => {
    https
      .get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${params.idPhim}`)
      .then((res) => {
        console.log(res.data.content);
        setdetail(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div
      style={{
        backgroundColor: `rgb(10, 32, 41)`,
        width: "100%",
        height: "100%",
        position: "fixed",
      }}
    >
      <div className="mt-40">
        <div className="flex items-center container justify-between">
          <div className="flex items-center ml-20">
            <img
              src={detail.hinhAnh}
              style={{ width: "200px", borderRadius: "3%" }}
            />
            <div className="ml-10 space-y-5 text-white">
              <span>
                {moment(detail.ngayKhoiChieu).format("DD-MM-YYYY ~ hh:mm:ss")}
              </span>{" "}
              <br></br>
              <span className="" style={{ fontSize: "20px" }}>
                {detail.tenPhim}
              </span>{" "}
              <br></br>
              <button
                className="bg-red-600 px-5 py-2 text-white"
                style={{ borderRadius: "7%" }}
              >
                Mua vé
              </button>
            </div>
          </div>

          <div className="mr-20">
            <div
              className="bg-black"
              style={{ width: 200, height: 200, borderRadius: "50%" }}
            >
              <span
                style={{
                  fontSize: "130px",
                }}
                className=" flex justify-center items-center text-white"
              >
                {detail.danhGia}
              </span>
            </div>
            <Rate
              className="flex justify-center mt-5"
              style={{ color: "red" }}
              disabled
              allowHalf
              value={detail.danhGia}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
