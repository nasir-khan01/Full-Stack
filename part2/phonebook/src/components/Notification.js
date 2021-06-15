const Notification = ({ message, classValue }) => {
  if (message === null) {
    return null;
  }

  return <div className={classValue}>{message}</div>;
};

export default Notification;
