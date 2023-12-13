import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ItemMovie({ data }) {
  let navigate = useNavigate()
  console.log(data.lstLichChieuTheoPhim);
  return (
    <div className="flex container space-x-5">
      <img className="w-40 h-48 object-cover" src={data.hinhAnh} />
      <div>
        <h2 className="font-medium mb-5" style={{ fontSize: "15px" }}>
          {data.tenPhim}
        </h2>
        <div className="grid grid-cols-3 gap-5">
          {data.lstLichChieuTheoPhim.splice(0, 15).map((lstPhim) => {
            return (
              <button
              onClick={() => { 
                navigate(`/booking/${lstPhim.maLichChieu}`)
               }}
                className="time-movie text-red-500"
                // className=" px-2 py-2 shadow-sm border-solid border-2 border-indigo-600 cursor-pointer rounded text-red-500"
                key={lstPhim.maLichChieu}
              >
                {moment(lstPhim.ngayChieuGioChieu).format(`DD/MM/YYYY ~ hh:mm`)}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
