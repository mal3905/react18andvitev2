import React from "react";

interface Props {
  children: string;
  onClick: () => void;
  color?: string;
}

const Button = ({ children, onClick, color = "Primary" }: Props) => {
  return (
    <div className="alert alert-warning alert-dismissible fade show">
      <button className={"btn btn-" + color} onClick={onclick}>
        {children}
      </button>{" "}
    </div>
  );
};

export default Button;
