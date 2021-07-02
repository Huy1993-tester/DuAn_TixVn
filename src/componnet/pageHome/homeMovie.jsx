import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListMovie } from "../../store/action/movie.action";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Slider from "react-slick";
import { Container } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding: 10
  },
  media: {
    height: 140
  }
});
function HomeMovie() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListMovie());
  }, [dispatch]);

  const list_movie = useSelector((state) => {
    return state.movie.list_movie;
  });
  const renderListCardMovie = () => {
    return list_movie.map((movie, index) => {
      return (
        <Card className={classes.root} key={index}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={movie.hinhAnh}
              title="Click me"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h4">
                {movie.tenPhim}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      );
    });
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2
  };
  return (
    <div className="HomeMovie">
      <Container>
        <Slider {...settings}>{renderListCardMovie()}</Slider>
      </Container>
    </div>
  );
}

export default HomeMovie;
