import { Container } from "@material-ui/core";
import React from "react";
import logo1 from "../asset/image/logo-1.png";
import logo2 from "../asset/image/logo-2.png";

function Footer() {
  return (
    <div>
      <div className="backgroundColor">
        <Container>
          <div className="item">
            <div className="hideText">
              <h5>TIX</h5>
              <h5>FAQ</h5>
              <h3>Brand Guidelines</h3>
            </div>
            <div className="oneLine">
              <br />
              <h3>Thỏa thuận sử dụng</h3>
              <h3>Chính sách bảo mật</h3>
            </div>

            <div>
              <div className="hideText">
                <h3>ĐỐI TÁC</h3>
              </div>
              <div className="itemChild hideText">
                <div>
                  <img src={logo1}></img>
                  <br />
                  <img src={logo2}></img>
                  <br />
                  <img src="./asset/image/logo-1.png"></img>
                  <br />
                  <img src="./asset/img/logo-1.png"></img>
                </div>
                <div>
                  {/* <img  src="../asset/img/logo-1.png"></img>

                  <br />
                  <img  src="../asset/img/logo-1.png"></img>

                  <br />
                  <img  src="../asset/img/logo-1.png"></img>

                  <br />
                  <img  src="../asset/img/logo-1.png"></img> */}
                </div>
                <div>
                  {/* <img  src="../asset/img/logo-1.png"></img>

                  <br />
                  <img  src="../asset/img/logo-1.png"></img>

                  <br />
                  <img  src="../asset/img/logo-1.png"></img>

                  <br />
                  <img  src="../asset/img/logo-1.png"></img> */}
                </div>
                <div>
                  {/* <img  src="../asset/img/logo-1.png"></img>

                  <br />
                  <img  src="../asset/img/logo-1.png"></img>

                  <br />
                  <img  src="../asset/img/logo-1.png"></img>

                  <br />
                  <img  src="../asset/img/logo-1.png"></img> */}
                </div>
                <div>
                  {/* <img  src="../asset/img/logo-1.png"></img>
                  <br />
                  <img  src="../asset/img/logo-1.png"></img>
                  <br />
                  <img  src="../asset/img/logo-1.png"></img>
                  <br />
                  <img  src="../asset/img/logo-1.png"></img> */}
                </div>
              </div>
            </div>

            <div className="itemChi hideText">
              <h5>MOBILE APP</h5>
              <img
                src="https://tix.vn/app/assets/img/icons/apple-logo.png"
                alt=""
              />
              <img
                src="https://tix.vn/app/assets/img/icons/android-logo.png"
                alt=""
              />
            </div>
            <div className="itemChi">
              <h5 className="hideText">SOCIAL</h5>
              <img
                className="face"
                src="https://tix.vn/app/assets/img/icons/facebook-logo.png"
                alt=""
              />
              <img
                className="zalo"
                src="https://tix.vn/app/assets/img/icons/zalo-logo.png"
                alt=""
              />
            </div>
          </div>
          <hr />
          <div className="infoitem">
            <div>
              <img
                src="https://tix.vn/app/assets/img/icons/zion-logo.jpg"
                alt=""
              />
            </div>
            <div className="textInfo">
              <span>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</span>
              <br />
              <span>
                Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
                Chí Minh, Việt Nam.
              </span>
              <br />
              <span>
                Giấy chứng nhận đăng ký kinh doanh số: 0101659783, <br />
                đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
                hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
              </span>
              <br />
              <span>
                Số Điện Thoại (Hotline): 1900 545 436 <br />
                Email:
              </span>
              <span>
                <a href="/home"> support@tix.vn</a>
              </span>
            </div>
            <div>
              <img
                src="https://s3img.vcdn.vn/123phim/2020/03/d1e6bd560daa9e20131ea8a0f62e87f8.png"
                alt=""
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
