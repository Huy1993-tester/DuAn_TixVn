import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@material-ui/core";
import {
  Divider,
  FormControl,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardDateTimePicker
} from "@material-ui/pickers";
import DayJsUtils from "@date-io/dayjs";
import DataTable from "../../components/data-table/dataTable.component";
import { useDispatch, useSelector } from "react-redux";
import { getDetailMovie } from "../../../store/action/movie.action";
import { DataGrid } from "@material-ui/data-grid";
import * as dayjs from "dayjs";
import {
  getCinemaGroupListAction,
  getCinemaListAction,
  getCinemaSystemListAction
} from "../../../store/action/cinema.action";

const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: "uppercase",
    marginBottom: theme.spacing(2)
  },
  formControl: {
    width: "100%",
    padding: theme.spacing(0, 1)
  }
}));

const Showtime = () => {
  const dispatch = useDispatch();
  const { lichChieu, tenPhim } = useSelector(
    (state) => state.movie.detail_movie
  );
  // const { cinemaSystemList, cinemaGroupList, cinemaList } = useSelector(
  //   (state) => state.cinema
  // );
  const cinemaSystemList = useSelector(
    (state) => state.cinema.cinemaSystemList
  );
  const cinemaGroupList = useSelector((state) => state.cinema.cinemaGroupList);
  const cinemaList = useSelector((state) => state.cinema.cinemaList);

  const classes = useStyles();
  const { maPhim } = useParams();
  const [datetime, setDatetime] = useState(new Date());
  const [cinemaSystemCode, setCinemaSystemCode] = useState();
  const [cinemaGroupCode, setCinemaGroupCode] = useState();

  const columns = [
    { field: "id", headerName: "ID", width: 150, hide: true },
    { field: "maLichChieu", headerName: "Mã lịch chiếu", width: 140 },
    { field: "heThongRap", headerName: "Hệ thống rạp", width: 140 },
    { field: "cumRap", headerName: "Cụm rạp", width: 200 },
    { field: "rap", headerName: "Rạp", width: 90 },
    {
      field: "ngayChieuGioChieu",
      headerName: "Lịch chiếu",
      width: 220,
      valueFormatter: (params) => {
        return dayjs(params.value).format("HH:mm - DD/MM/YYYY");
      }
    },
    { field: "giaVe", headerName: "Giá vé", width: 100 },
    { field: "thoiLuong", headerName: "Thời lượng", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        const onClick = () => {
          console.log(params.getValue(params.id, "maLichChieu"));
        };
        return (
          <Button onClick={onClick} color="secondary" variant="contained">
            Xóa
          </Button>
        );
      }
    }
  ];

  const renderShowtime = () => {
    return lichChieu?.map((l, index) => {
      return {
        id: index,
        maLichChieu: l.maLichChieu,
        heThongRap: l.thongTinRap.tenHeThongRap,
        cumRap: l.thongTinRap.tenCumRap,
        rap: l.thongTinRap.tenRap,
        ngayChieuGioChieu: l.ngayChieuGioChieu,
        giaVe: l.giaVe,
        thoiLuong: l.thoiLuong
      };
    });
  };

  const renderCinemaSystemList = () => {
    return cinemaSystemList?.map((s) => (
      <MenuItem value={s.maHeThongRap}>{s.tenHeThongRap}</MenuItem>
    ));
  };

  const renderCinemaGroupList = () => {
    return cinemaGroupList?.map((g) => (
      <MenuItem value={g.maCumRap}>{g.tenCumRap}</MenuItem>
    ));
  };

  const renderCinemaList = () => {
    return cinemaList?.map((c) => (
      <MenuItem value={c.maRap}>{c.tenRap}</MenuItem>
    ));
  };

  // *** Hanlde event
  const handleChangeCinemaSystemList = (e) => {
    setCinemaSystemCode(e.target.value);
    console.log(e.target.value);
  };

  const handleChangeCinemaGroupList = (e) => {
    setCinemaGroupCode(e.target.value);
  };

  const handleCinemaList = (e) => {
    console.log(e.target.value);
  };

  useEffect(() => {
    dispatch(getDetailMovie(maPhim));
    dispatch(getCinemaSystemListAction());
  }, []);

  useEffect(() => {
    dispatch(getCinemaGroupListAction(cinemaSystemCode));
  }, [cinemaSystemCode]);

  useEffect(() => {
    dispatch(getCinemaListAction(cinemaGroupCode));
  }, [cinemaGroupCode]);

  return (
    <div>
      <Typography
        className={classes.title}
        variant="h4"
        align="center"
        color="secondary"
      >
        Thông tin lịch chiếu của phim {tenPhim}
      </Typography>

      <Divider />

      <form style={{ margin: "16px auto", width: "70%" }}>
        <Grid container spacing={2}>
          <Grid item container xs={12}>
            <Grid item xs={4}>
              <FormControl fullWidth className={classes.formControl}>
                <InputLabel style={{ left: "8px" }} id="cinema-system-list">
                  Chọn hệ thống rạp
                </InputLabel>
                <Select
                  labelId="cinema-system-list"
                  name="cinemaSystemList"
                  onChange={handleChangeCinemaSystemList}
                >
                  {renderCinemaSystemList()}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={4}>
              <FormControl fullWidth className={classes.formControl}>
                <InputLabel style={{ left: "8px" }} id="cinema-group">
                  Chọn cụm rạp
                </InputLabel>
                <Select
                  labelId="cinema-group"
                  name="cinemaGroup"
                  onChange={handleChangeCinemaGroupList}
                >
                  {renderCinemaGroupList()}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <FormControl fullWidth className={classes.formControl}>
                <InputLabel style={{ left: "8px" }} id="cinema">
                  Chọn rạp
                </InputLabel>
                <Select
                  labelId="cinema"
                  name="cinema"
                  onChange={handleCinemaList}
                >
                  {renderCinemaList()}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2} container alignItems="flex-end">
              <FormControl className={classes.formControl}>
                <Button variant="contained" color="primary">
                  Thêm Lịch
                </Button>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={4}>
              <MuiPickersUtilsProvider utils={DayJsUtils}>
                <FormControl fullWidth className={classes.formControl}>
                  <KeyboardDateTimePicker
                    variant="inline"
                    ampm={false}
                    label="Ngày chiếu - Giờ chiếu"
                    format="DD/MM/YYYY HH:mm"
                    value={datetime}
                    onChange={setDatetime}
                  />
                </FormControl>
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth className={classes.formControl}>
                <TextField label="Chọn thời lượng phim" name="soDt" />
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <FormControl fullWidth className={classes.formControl}>
                <TextField label="Giá vé" name="soDt" />
              </FormControl>
            </Grid>
            <Grid item xs={2} container alignItems="flex-end">
              <FormControl fullwidth className={classes.formControl}>
                <Button variant="contained">Hủy</Button>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </form>

      <div style={{ height: 300, width: "100%" }}>
        <DataGrid
          rows={lichChieu ? renderShowtime() : []}
          columns={columns}
          pageSize={5}
          rowHeight={35}
          disableColumnMenu
        />
      </div>
    </div>
  );
};

export default Showtime;
