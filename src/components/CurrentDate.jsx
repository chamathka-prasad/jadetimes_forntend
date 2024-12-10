const CurrentDate = ({ className }) => {
  function getCurrentDate() {
    const date = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }
  return <div className={className}>{getCurrentDate()}</div>;
};

export default CurrentDate;
