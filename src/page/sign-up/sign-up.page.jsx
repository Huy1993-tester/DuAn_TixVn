import React from "react";
import style from "./sign-up.module.scss";
import logo from "../../asset/image/group@2x.png";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <div className={style.signIn__section}>
      <div className={style.signIn__container}>
        <div className={style.signUp__content}>
          <div className={style.esc__button}></div>
          <div className={style.content__header}>
            <NavLink to="/home">
              <img className={style.content__image} src={logo} alt="" />
            </NavLink>
          </div>
          <div className={style.content__body}>
            <p className="text-white text-center">
              Đăng ký để được nhiều ưu đãi, mua vé và bảo mật thông tin!
            </p>
            <form>
              <div className={style.form__content}>
                <div className={style.formField}>
                  <input
                    className={style.formInput}
                    type="text"
                    placeholder=" "
                  ></input>
                  <label className={style.formLabel}>Tài Khoản</label>
                </div>
                <div className={style.formField}>
                  <input
                    className={style.formInput}
                    type="text"
                    placeholder=" "
                  ></input>
                  <label className={style.formLabel}>Mật Khẩu</label>
                </div>
                <div className={style.formField}>
                  <input
                    className={style.formInput}
                    type="text"
                    placeholder=" "
                  ></input>
                  <label className={style.formLabel}>Họ và tên</label>
                </div>
                <div className={style.formField}>
                  <input
                    className={style.formInput}
                    type="text"
                    placeholder=" "
                  ></input>
                  <label className={style.formLabel}>Số điện thoại</label>
                </div>
                <div className={`${style.formField} ${style.w100}`}>
                  <input
                    className={style.formInput}
                    type="text"
                    placeholder=" "
                  ></input>
                  <label className={style.formLabel}>Địa chỉ Email</label>
                </div>
                <div className={`${style.formField} ${style.w100}`}>
                  <button className={style.formButton}>Đăng ký</button>
                </div>
              </div>
            </form>
            <div style={{ textAlign: "center" }}>
              <NavLink to="/sign-in" className={style.signUp__link}>
                Bạn đã có tài khoản?
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
