import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const useStyles = makeStyles(styles);

const useStyless = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));


const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

export default function SectionTabs() {
  const classes = useStyles();
  return (

    <div className={classes.container} style={{ marginTop: "5%" }}>

      <div id="nav-tabs">
        <GridContainer>
          <GridItem xs={4} sm={4} md={3}>
            <Paper className={classes.paper}>
              <MenuList >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Paper>
          </GridItem>

          <GridItem xs={8} sm={8} md={8}>
            <GridContainer>
              <GridItem>
                <CustomTabs tabContent="He was good in various fields including study and sports, he even taught some of his classmates.He was good in various fields including study and sports, he even taught some of his classmates.He was good in various fields including study and sports, he even taught some of his classmates.He was good in various fields including study and sports, he even taught some of his classmates.He was good in various fields including study and sports, he even taught some of his classmates.He was good in various fields including study and sports, he even taught some of his classmates." />
                <CustomTabs tabContent="He was good in various fields including study and sports, he even taught some of his classmates.He was good in various fields including study and sports, he even taught some of his classmates.He was good in various fields including study and sports, he even taught some of his classmates.He was good in various fields including study and sports, he even taught some of his classmates.He was good in various fields including study and sports, he even taught some of his classmates.He was good in various fields including study and sports, he even taught some of his classmates." />
                <CustomTabs tabContent="He was good in various fields including study and sports, he even taught some of his classmates.He was good in various fields including study and sports, he even taught some of his classmates.He was good in various fields including study and sports, he even taught some of his classmates.He was good in various fields including study and sports, he even taught some of his classmates.He was good in various fields including study and sports, he even taught some of his classmates.He was good in various fields including study and sports, he even taught some of his classmates." />
                <CustomTabs tabContent="He was good in various fields including study and sports, he even taught some of his classmates.He was good in various fields including study and sports, he even taught some of his classmates.He was good in various fields including study and sports, he even taught some of his classmates.He was good in various fields including study and sports, he even taught some of his classmates.He was good in various fields including study and sports, he even taught some of his classmates.He was good in various fields including study and sports, he even taught some of his classmates." />
                <CustomTabs tabContent="He was good in various fields including study and sports, he even taught some of his classmates.He was good in various fields including study and sports, he even taught some of his classmates.He was good in various fields including study and sports, he even taught some of his classmates.He was good in various fields including study and sports, he even taught some of his classmates.He was good in various fields including study and sports, he even taught some of his classmates.He was good in various fields including study and sports, he even taught some of his classmates." />


                <div className={classes.root}>

                  <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={2}>
                      <Grid item>
                        <Avatar>W</Avatar>
                      </Grid>
                      <Grid item xs>
                        <Typography>{message}</Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </div>

              </GridItem>
            </GridContainer>
          </GridItem>

        </GridContainer>
      </div>
    </div>
  );
}
