import React, { useEffect, useState } from "react";
import { useFormik, Formik, ErrorMessage, Form } from "formik";
import {
  Grid,
  makeStyles,
  IconButton,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Button,
  Backdrop,
  Modal,
  Slide,
  Paper,
  TextField
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DayJsUtils from "@date-io/dayjs";
import * as dayjs from "dayjs";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector } from "react-redux";
import { userValidationSchema } from "../../helper/userValidationSchema";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

const useStyles = makeStyles((theme) => ({
  buttonOutlineNone: {
    "&:focus": {
      outline: "none"
    }
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: "-150px!important"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "40%"
  },
  formControl: {
    width: "100%",
    padding: theme.spacing(0, 1)
  }
}));

const MovieModal = ({ openModal, handleClose, handleAction, isUpdating }) => {
  const classes = useStyles();

  const [dateTime, setDateTime] = useState(new Date());

  const formik = useFormik({
    initialValues: {
      maPhim: "",
      tenPhim: "",
      biDanh: "",
      trailer: "",
      hinhAnh: "",
      moTa: "",
      maNhom: "GP01",
      ngayKhoiChieu: dateTime,
      danhGia: ""
    },
    onSubmit: (values, { resetForm }) => {
      const movieFormData = new FormData();

      for (var key in values) {
        if (key === "ngayKhoiChieu") {
          movieFormData.append(key, dayjs(values[key]).format("DD/MM/YYYY"));
        } else {
          movieFormData.append(key, values[key]);
        }
      }

      handleAction(movieFormData);
    },
    // validationSchema: userValidationSchema,
    enableReinitialize: true
  });

  const handleCloseModal = () => {
    handleClose();
    formik.resetForm();
  };

  const handleChooseDateTime = (dateValue) => {
    formik.setFieldValue("ngayKhoiChieu", dateValue);
  };

  const handleChooseImage = (e) => {
    console.log(e.target.files);
    if (e.target.files[0]) {
      formik.setFieldValue("hinhAnh", e.target.files[0]);
    } else {
      formik.setFieldValue("hinhAnh", "");
    }
  };

  return (
    <Modal
      className={classes.modal}
      open={openModal}
      onClose={handleCloseModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Slide direction="down" in={openModal}>
        <Paper className={classes.paper}>
          <Grid container justify="space-between">
            <h2 id="transition-modal-title" style={{ paddingLeft: "8px" }}>
              {isUpdating ? "Cập nhật" : "Thêm mới"} phim
            </h2>
            <IconButton
              onClick={handleCloseModal}
              className={classes.buttonOutlineNone}
            >
              <CloseIcon />
            </IconButton>
          </Grid>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item container xs={12} justify="space-between">
                <Grid item xs={6}>
                  <FormControl className={classes.formControl}>
                    <TextField
                      label="Mã Phim"
                      name="maPhim"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.maPhim}
                      error={formik.touched.maPhim && formik.errors.maPhim}
                      helperText={
                        formik.touched.maPhim ? formik.errors.maPhim : ""
                      }
                      // disabled={isUpdating}
                      disabled
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl className={classes.formControl}>
                    <TextField
                      label="Tên Phim"
                      name="tenPhim"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.tenPhim}
                      error={formik.touched.tenPhim && formik.errors.tenPhim}
                      helperText={
                        formik.touched.tenPhim ? formik.errors.tenPhim : ""
                      }
                    />
                  </FormControl>
                </Grid>
              </Grid>

              <Grid item container xs={12} justify="space-between">
                <Grid item xs={6}>
                  <FormControl className={classes.formControl}>
                    <TextField
                      label="Bí danh"
                      name="biDanh"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.biDanh}
                      error={formik.touched.biDanh && formik.errors.biDanh}
                      helperText={
                        formik.touched.biDanh ? formik.errors.biDanh : ""
                      }
                      disabled
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl className={classes.formControl}>
                    <TextField
                      label="Đánh giá"
                      name="danhGia"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.danhGia}
                      error={formik.touched.danhGia && formik.errors.danhGia}
                      helperText={
                        formik.touched.danhGia ? formik.errors.danhGia : ""
                      }
                    />
                  </FormControl>
                </Grid>
              </Grid>

              <Grid item container xs={12} justify="space-between">
                <Grid item xs={6}>
                  <MuiPickersUtilsProvider utils={DayJsUtils}>
                    <FormControl className={classes.formControl}>
                      <KeyboardDatePicker
                        label="Ngày khởi chiếu"
                        name="ngayKhoiChieu"
                        format="DD/MM/YYYY"
                        disableToolbar
                        variant="inline"
                        // onBlur={formik.handleBlur}
                        onChange={handleChooseDateTime}
                        value={formik.values.ngayKhoiChieu}
                        error={
                          formik.touched.ngayKhoiChieu &&
                          formik.errors.ngayKhoiChieu
                        }
                        helperText={
                          formik.touched.ngayKhoiChieu
                            ? formik.errors.ngayKhoiChieu
                            : ""
                        }
                      />
                    </FormControl>
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={6}>
                  <FormControl className={classes.formControl}>
                    <TextField
                      label="Hình ảnh"
                      value={
                        formik.values.hinhAnh ? formik.values.hinhAnh.name : ""
                      }
                      InputProps={{
                        endAdornment: (
                          <label htmlFor="select-image" style={{ margin: 0 }}>
                            <IconButton
                              style={{ padding: 0, margin: 0 }}
                              color="primary"
                              aria-label="upload picture"
                              component="span"
                            >
                              <PhotoCamera />
                            </IconButton>
                          </label>
                        )
                        // readOnly: true
                      }}
                    />
                    <input
                      id="select-image"
                      accept="*/*"
                      name="hinhAnh"
                      type="file"
                      hidden
                      onBlur={formik.handleBlur}
                      onChange={handleChooseImage}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <FormControl className={classes.formControl}>
                  <TextField
                    label="Trailer"
                    name="trailer"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.trailer}
                    error={formik.touched.trailer && formik.errors.trailer}
                    helperText={
                      formik.touched.trailer ? formik.errors.trailer : ""
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl className={classes.formControl}>
                  <TextField
                    label="Mô tả"
                    name="moTa"
                    variant="filled"
                    multiline={true}
                    rows={4}
                    rowsMax={6}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.moTa}
                    error={formik.touched.moTa && formik.errors.moTa}
                    helperText={formik.touched.moTa ? formik.errors.moTa : ""}
                  />
                </FormControl>
              </Grid>
              <Grid item container xs={12}>
                <Grid item xs={6}>
                  <FormControl className={classes.formControl}>
                    <Button
                      className={classes.buttonOutlineNone}
                      color="primary"
                      variant="contained"
                      type="submit"
                    >
                      {isUpdating ? "Cập nhật" : "Thêm"}
                    </Button>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl className={classes.formControl}>
                    <Button
                      className={classes.buttonOutlineNone}
                      color="secondary"
                      variant="contained"
                      onClick={handleCloseModal}
                    >
                      Hủy
                    </Button>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Slide>
    </Modal>
  );
};

export default MovieModal;