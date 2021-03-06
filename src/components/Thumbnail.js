import React from "react";

const Thumbnail = props => {
  const { href, classes, url } = props;
  return (
    <div className={classes.container}>
      <a href={href} className={classes.link}>
        <img className={classes.image} src={url} alt="" />
      </a>
    </div>
  );
};

export default Thumbnail;
