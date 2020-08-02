import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Icon from "@material-ui/core/Icon";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styles from "assets/jss/material-kit-react/components/customTabsStyle.js";
import Avatar from '@material-ui/core/Avatar';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ThumbUp from '@material-ui/icons/ThumbUp';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';


const useStyles = makeStyles(styles);

export default function CustomTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, value) => {
    setValue(value);
  };
  const classes = useStyles();
  const { headerColor, plainTabs, tabs, title, rtlActive } = props;
  const cardTitle = classNames({
    [classes.cardTitle]: true,
    [classes.cardTitleRTL]: rtlActive
  });
  return (
    <Card plain={plainTabs} style={{ marginTop: 0 }}>
      <CardBody>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={6} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={2} sm={2} md={2}>
                <Avatar>A</Avatar>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>Amit</Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={6} md={6} style={{ textAlign: 'Right' }}>
            <Fab size="small" >
              <MoreHoriz />
            </Fab>
          </Grid>
        </Grid>
        {props.tabContent}
        <Grid container spacing={5} >
          <Grid item xs={6} sm={6} md={6}  >
            <Grid container spacing={3}>
              <Grid item xs={2} sm={2} md={2}>
                <Fab size="small" color="primary">
                  <ThumbUp />
                </Fab>
              </Grid>
              <Grid item xs={2} sm={2} md={2}>
                <Fab size="small" color="secondary">
                  <FavoriteIcon />
                </Fab>
              </Grid>
            </Grid>
          </Grid>


          <Grid item xs={6} sm={6} md={6}>

          </Grid>


        </Grid>
      </CardBody>
    </Card>
  );
}

CustomTabs.propTypes = {
  headerColor: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose"
  ]),
  title: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabName: PropTypes.string.isRequired,
      tabIcon: PropTypes.object,
      tabContent: PropTypes.node.isRequired
    })
  ),
  rtlActive: PropTypes.bool,
  plainTabs: PropTypes.bool
};
