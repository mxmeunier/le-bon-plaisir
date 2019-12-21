import React from "react";

const Thumbnail = props => {
  const { href, classes } = props;
  return (
    <div className={classes.container}>
      <a href={href} className={classes.link}>
        <img
          className={classes.image}
          src="https://picsum.photos/300?grayscale"
          alt=""
        />
      </a>
    </div>
  );
};

export default Thumbnail;
