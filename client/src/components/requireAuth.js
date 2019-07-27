import React, { useEffect } from "react";
import { connect } from "react-redux";

// do you even HOC bro ?
export default ChildComponent => {
  const ComposedComponent = props => {
    useEffect(() => {
      shouldNavigateAway();
    });

    const shouldNavigateAway = () => {
      if (!props.auth) {
        props.history.push("/");
      }
    };
    return <ChildComponent {...props} />;
  };

  const mapStateToProps = state => {
    return { auth: state.auth.authenticated };
  };

  return connect(mapStateToProps)(ComposedComponent);
};
