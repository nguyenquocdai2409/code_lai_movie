import { message } from "antd";
import { https } from "../../api/config";
import { USER_LOGIN } from "../constant/constant";

export let loginAction = (values, onNavigate) => {
  return (dispatch) => {
    console.log("Success:", values);
    https
      .post("/api/QuanLyNguoiDung/DangNhap", values)
      .then((res) => {
        console.log(res.data.content);
        let dataJson = JSON.stringify(res.data.content);
        localStorage.setItem("USER_LOGIN", dataJson);
        message.success("đăng nhập thành công");
        dispatch({
          type: USER_LOGIN,
          payload: res.data.content,
        });
        onNavigate("/");
      })
      .catch((err) => {
        console.log(err);
        message.error("đăng nhập thất bại");
      });
  };
};
