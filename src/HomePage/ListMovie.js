import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { https } from "../api/config";
import { useNavigate } from "react-router-dom";
import moment from "moment";
const { Meta } = Card;

export default function ListMovie() {
  const [movieArr, setmovieArr] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    https
      .get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09")
      .then((res) => {
        console.log(res);
        setmovieArr(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className=" grid grid-cols-5 gap-3">
      {movieArr.splice(0, 10).map((item, index) => {
        return (
          <Card
            key={index}
            hoverable
            style={{
              width: 300,
            }}
            cover={<img alt="example" src={item.hinhAnh} />}
          >
            <Meta
              className="text-center"
              title={item.tenPhim}
              description={moment(item.ngayKhoiChieu).format("DD-MM-YYYY")}
            />
            <button
              onClick={() => {
                navigate(`/detail/${item.maPhim}`);
              }}
              className="btn bg-red-500 px-5 py-2 w-full text-white mt-2"
            >
              Xem chi tiết
            </button>
          </Card>
        );
      })}
    </div>
  );
}
