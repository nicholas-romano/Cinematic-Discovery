import Star from "./Star";
const StaticStarRating = ({
  selectedWatchedRating,
  className,
  maxRating,
  color,
  size,
}) => {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  };

  const starContainerStyle = {
    display: "flex",
  };

  return (
    <>
      <p>Your Rating: {selectedWatchedRating} Stars</p>
      <div style={containerStyle} className={className}>
        <div style={starContainerStyle}>
          {Array.from({ length: maxRating }, (_, i) => (
            <Star
              full={i < selectedWatchedRating}
              key={i}
              color={color}
              size={size}
              type="static"
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default StaticStarRating;
