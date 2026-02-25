import React from 'react';
import { Link } from 'react-router-dom';

const HomeHeroButton = ({
  children,
  text = "Get a Quote",
  to = "/contact",
  className = "",
  width = "w-32 sm:w-36 md:w-40",
  bgColor = "bg-black",
  textColor = "text-white",
  hoverBgColor = "hover:bg-neutral-400",
  hoverTextColor = "hover:text-black",
  padding = "py-2 px-4",
  rounded = "rounded-full",
  ...props
}) => {
  return (
    <Link
      to={to}
      {...props}
      className={`
        inline-block ${width} ${padding} ${rounded} 
        ${bgColor} ${textColor} 
        text-center text-sm font-medium
        transition-all duration-300 ease-in-out
        ${hoverBgColor} ${hoverTextColor}
        ${className}
      `}
    >
      {children ?? text}
    </Link>
  );
};

export default HomeHeroButton;