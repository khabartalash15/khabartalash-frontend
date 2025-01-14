import React, { ReactNode } from "react";

// Define types for the props
interface ContainerProps {
  children: ReactNode; // ReactNode is a type that represents any valid React child (string, number, JSX, etc.)
  className?: string; // className is optional, hence the `?`
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
