import PropTypes from "prop-types";
import StaticStarRating from "./StaticStarRating";
import InteractiveStarRating from "./InteractiveStarRating";

const StarRating = ({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  className = "",
  messages = [],
  defaultRating = 0,
  onSetRating,
  selectedWatchedRating = 0,
}) => {
  StarRating.propTypes = {
    maxRating: PropTypes.number,
    defaultRating: PropTypes.number,
    color: PropTypes.string,
    size: PropTypes.number,
    messages: PropTypes.array,
    className: PropTypes.string,
    onSetRating: PropTypes.func,
  };

  return selectedWatchedRating > 0 ? (
    <StaticStarRating
      selectedWatchedRating={selectedWatchedRating}
      className={className}
      maxRating={maxRating}
      color={color}
      size={size}
    />
  ) : (
    <InteractiveStarRating
      defaultRating={defaultRating}
      onSetRating={onSetRating}
      color={color}
      size={size}
      maxRating={maxRating}
      className={className}
      messages={messages}
    />
  );
};

export default StarRating;
