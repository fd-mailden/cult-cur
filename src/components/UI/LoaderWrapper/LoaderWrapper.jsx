import React from "react";
import PropTypes from "prop-types";
import { Loading } from "../Loader/Loading";

function LoaderWrapper({ children, isLoading = false, height, width }) {
  return (
    <>
      {isLoading ? <Loading height={height} width={width} /> : <>{children}</>}
    </>
  );
}

LoaderWrapper.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
};

export { LoaderWrapper };
