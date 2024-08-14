const TrendPostCard = ({ imgUrl, tPostText }) => {
  return (
    <div
      className="relative rounded-xl w-[370px] h-[320px] bg-blend-darken gradient"
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute bottom-7 left-7">
        <p className="mt-4 font-semibold text-lg text-white">{tPostText}</p>
      </div>
    </div>
  );
};
export default TrendPostCard;
