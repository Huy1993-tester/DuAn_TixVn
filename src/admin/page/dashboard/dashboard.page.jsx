import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Redirect } from "react-router-dom";
import Header from "../../components/header/header.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import Content from "../../components/content/content.component";
import { featureList } from "../../helper/featureList";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  }
}));

function Dashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Dashboard");
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  let featureParam = props.match.params.feature;

  const index = featureList.findIndex((feature) => feature.id === featureParam);

  useEffect(() => {
    if (index === -1) return;
    setTitle(featureList.find((feature) => feature.id === featureParam).title);
  }, [featureParam]);

  const renderFeature = () => {
    return index === -1 ? (
      <Redirect to="/admin" />
    ) : (
      featureList.find((feature) => feature.id === featureParam).component
    );
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header handleDrawerOpen={handleDrawerOpen} title={title} open={open} />
      <Sidebar handleDrawerClose={handleDrawerClose} open={open} />
      <Content renderFeature={renderFeature} />
    </div>
  );
}
export default Dashboard;
