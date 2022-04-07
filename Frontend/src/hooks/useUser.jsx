import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export const useData = ({ reducer }) => {
  const data = useSelector((state) => state[reducer]);

  return { ...data };
};

useData.propTypes = {
  reducer: PropTypes.string.isRequired,
};
