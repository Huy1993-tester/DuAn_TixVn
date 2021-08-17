import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BookingChair, getListChair } from "../../store/action/cinema.action";
import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { CHOISE_CHAIR } from "../../store/constant/cinema.constant";
import style from "./chair.module.scss";
import swal from "sweetalert";
import Header from "../../componnet/header/header.component";
import Footer from "../../componnet/footer/footer.component";

const useStyle = makeStyles({
  not_pick: {
    backgroundColor: "#12d",
    "&:hover": "#23dd"
  },
  pick: {
    backgroundColor: "#2ddd",
    "&:hover": "#2dd"
  }
});

function Chairing() {
  const history = useHistory();
  const classes = useStyle();
  const dispatch = useDispatch();
  const { maLichChieu } = useParams();
  useEffect(() => {
    dispatch(getListChair(maLichChieu));
  }, [dispatch, maLichChieu]);
  const listChair = useSelector((state) => {
    return state.booking?.list_chair?.danhSachGhe;
  });
  let count = 0;
  listChair?.map((chair, index) => {
    return count++;
  });
  const list1 = listChair?.slice(0, count / 2);
  const list2 = listChair?.slice(count / 2, count);
  console.log(list1);
  console.log(list2);

  let listChairPick = useSelector((state) => {
    const DSPick = state.booking?.list_chair?.danhSachGhe;
    return DSPick?.filter((chair) => chair.onPick);
  });

  const handleChair = (chair) => {
    dispatch({
      type: CHOISE_CHAIR,
      payload: chair
    });
  };
  let maLoaiNguoiDung = localStorage.getItem("maLoaiNguoiDung");

  const handleBooking = () => {
    if (maLoaiNguoiDung === "KhachHang") {
      dispatch(BookingChair(maLichChieu, listChairPick));
    } else {
      swal({
        title: "Are you sure?",
        text: "Vui lòng đăng nhập",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then((willDelete) => {
        if (willDelete) {
          swal(history.push("/sign-in"));
        } else {
          swal({
            title: "Are you sure?",
            text: "Bạn sẽ không thể đặt vé được nếu chưa đăng nhập"
          });
        }
      });
    }
  };

  useEffect(() => {
    console.log("TEST UPDATE ======");
  });

  const renderListChair1 = () => {
    return list1?.map((chair, index) => {
      return (
        <Button
          key={index}
          className={chair.onPick ? classes.pick : classes.not_pick}
          onClick={() => handleChair(chair)}
          disabled={chair.daDat}
          variant="contained"
          color={chair.daDat ? "" : "primary"}
        >
          {chair.tenGhe}s
        </Button>
      );
    });
  };
  const renderListChair2 = () => {
    return list2?.map((chair, index) => {
      return (
        <Button
          key={index}
          className={chair.onPick ? classes.pick : classes.not_pick}
          onClick={() => handleChair(chair)}
          disabled={chair.daDat}
          variant="contained"
          color={chair.daDat ? "" : "primary"}
        >
          {chair.tenGhe}s
        </Button>
      );
    });
  };
  return (
    <>
      <Header />
      <div className={style.row}>
        <div className="row">
          <div className="col"> {renderListChair1()}</div>
          <div className="col">{renderListChair2()}</div>
        </div>
        <div className={style.StyleTableBooking}>
          <Button
            className={classes.pick}
            variant="contained"
            onClick={() => handleBooking()}
          >
            Booking
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Chairing;
