import React, { useEffect, useState } from "react";
import { USER_LOGIN } from "../redux/constant/constant";
import { useSelector } from "react-redux";
import { https } from "../api/config";
import { useNavigate, useParams } from "react-router-dom";
import clsx from "clsx";
import { message } from "antd";
import { ToastContainer, toast } from "react-toastify";

export default function BookingTicket() {
  let params = useParams();
  // console.log(params);
  const [thongTinDatVe, setthongTinDatVe] = useState({});
  const [gheDuocChon, setgheDuocChon] = useState([]);
  console.log(">>>>>detail booking", thongTinDatVe, gheDuocChon);
  //

  const fetchAPI = () => {
    https
      .get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${params.id}`)
      .then((res) => {
        setthongTinDatVe(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  //===> process booking <===//
  const handleBooking = async (payload) => {
    try {
      const response = await https.post("/api/QuanLyDatVe/DatVe", payload);
      if (response.status === 200) {
        message.success("booking successfully!");
        //** do some thing else here EXAMPLE: navigate to thank you page or home blabla .... */

        setgheDuocChon([]);
        fetchAPI();
      }
    } catch (err) {
      message.error("booking faild please try again!");
    }
  };

  const handleSelected = (chair) => {
    const findChair = gheDuocChon.find((ele) => ele.maGhe === chair.maGhe);
    console.log(findChair);
    if (findChair) {
      const filterData = gheDuocChon.filter((ele) => ele.maGhe !== chair.maGhe);
      setgheDuocChon(filterData);
    } else {
      setgheDuocChon([...gheDuocChon, chair]);
    }
  };
  let renderGhe = () => {
    return thongTinDatVe.danhSachGhe?.map((ghe, index) => {
      // console.log(ghe);
      return (
        <button
          onClick={() => {
            handleSelected(ghe);
          }}
          key={index}
          className={clsx("ghe", {
            gheVip: ghe.loaiGhe === "Vip",
            gheDuocChon: ghe.daDat,
            gheDangChon: gheDuocChon.some((ele) => ele.maGhe === ghe.maGhe),
          })}
        >
          {" "}
          {ghe.tenGhe}{" "}
        </button>
      );
    });
  };
  let user = useSelector((state) => state.reducer.userLogin);
  if (!localStorage.getItem(USER_LOGIN)) {
    return (window.location.href = "/login");
  }
  return (
    <div className="container">
      <div className="grid grid-cols-12 ">
        <div
          className=" col-span-8"
          style={{
            width: "90%",
            boxSizing: "border-box",
            display: "block",
          }}
        >
          <div
            style={{
              width: "79.9%",
              boxSizing: "border-box",
              margin: "auto",
              display: "block",
            }}
          >
            {renderGhe()}
          </div>
        </div>
        <div className=" col-span-4 space-y-5">
          <h3 className="text-center text-green-500 text-2xl">
            {" "}
            {gheDuocChon
              .reduce((tongTien, ghe, index) => {
                return (tongTien += ghe.giaVe);
              }, 0)
              .toLocaleString()}{" "}
            đồng
          </h3>
          <hr />
          <div className="flex justify-between">
            <h3 className="text-xl">Cụm Rạp</h3>
            <h3 className="text-xl text-green-500">
              {thongTinDatVe.thongTinPhim?.tenCumRap}
            </h3>
          </div>
          <hr />
          <div className="flex justify-between">
            <h3 className="text-xl">Địa chỉ</h3>
            <h3 className="text-xl text-green-500">
              {thongTinDatVe.thongTinPhim?.diaChi}
            </h3>
          </div>
          <hr />
          <div className="flex justify-between">
            <h3 className="text-xl">Rạp</h3>
            <h3 className="text-xl text-green-500">
              {thongTinDatVe.thongTinPhim?.tenRap}
            </h3>
          </div>
          <hr />
          <div className="flex justify-between">
            <h3 className="text-xl">Ngày giờ chiếu: </h3>
            <h3 className="text-xl text-green-500">
              {thongTinDatVe.thongTinPhim?.ngayChieu} ~{" "}
              <span className="text-red-500">
                {thongTinDatVe.thongTinPhim?.gioChieu}
              </span>
            </h3>
          </div>
          <hr />
          <div className="flex justify-between">
            <h3 className="text-xl">Tên phim: </h3>
            <h3 className="text-xl text-green-500">
              {thongTinDatVe.thongTinPhim?.tenPhim}
            </h3>
          </div>
          <hr />
          <div className="flex justify-between">
            <h3 className="text-xl">Chọn: </h3>
            <div className="text-xl">
              {gheDuocChon.map((item, index) => {
                return (
                  <span
                    style={{ fontSize: "20px" }}
                    key={index}
                    className={`ghe gheDangChon `}
                  >
                    {" "}
                    Ghế {item.tenGhe}{" "}
                  </span>
                );
              })}
            </div>
          </div>
          <hr />
          <div>
            <i>Email : </i>
            {user.email}
          </div>
          <div>
            <i>Phone : </i>
            {user.soDT}
          </div>
          <div>
            <button
              onClick={() => {
                const payload = {
                  maLichChieu: thongTinDatVe?.thongTinPhim?.maLichChieu,
                  danhSachVe: gheDuocChon.map((chair) => ({
                    maGhe: chair.maGhe,
                    giaVe: chair.giaVe,
                  })),
                };

                handleBooking(payload);
              }}
              className="bg-red-500 hover:bg-red-900 text-white py-5 w-full"
            >
              ĐẶT VÉ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
