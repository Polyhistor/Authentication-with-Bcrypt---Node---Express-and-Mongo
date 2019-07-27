import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

const Signout = props => {
  useEffect(() => {
    props.signout();
  });

  return <div>Sorry to see you go mate!</div>;
};

export default connect(
  null,
  actions
)(Signout);
