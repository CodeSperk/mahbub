import React from "react";

type TProps = {
  bg: string,
  title: string
}

const PageTitle: React.FC<TProps> = ({bg, title}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{bg}</p>
    </div>
  );
};

export default PageTitle;