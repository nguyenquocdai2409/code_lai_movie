import moment from "moment";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function ItemMovie({ data }) {
  let navigate = useNavigate();
  console.log(data.lstLichChieuTheoPhim);
  return (
    <div className="flex container space-x-5">
      <img className="w-40 h-48 object-cover" src={data.hinhAnh} />
      <div>
        <h2 className="font-medium mb-5" style={{ fontSize: "15px" }}>
          {data.tenPhim}
        </h2>
        <div className="grid grid-cols-3 gap-5">
          {data.lstLichChieuTheoPhim.splice(0, 15).map((lstPhim, index) => {
            return (
              <div key={lstPhim.maLichChieu}>
                <NavLink
                  to={`/booking/${lstPhim.maLichChieu}`}
                  className="border border-gray-200 bg-gray-100 rounded p-1"
                >
                  <span
                    className="font-medium text-green-600"
                    key={lstPhim.maLichChieu}
                  >
                    {moment(lstPhim.maLichChieu).format("DD-MMM-YYYY")}
                  </span>
                  <span>~</span>
                  <span
                    className="font-medium text-red-600"
                    key={lstPhim.maLichChieu}
                  >
                    {moment(lstPhim.maLichChieu).format("hh:mm")}
                  </span>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
