import "./index.scss";

function Button({
  children,
  as = "btn",
  size = "lg",
  dark = false,
  variant = "ghost",
  className = "",
  onClick,
  ...props
}) {

  return (
    <>
      <button
        onClick={onClick}
        className={`${as} ${size} ${variant} ${dark ? "dark" : "light"} ${className}`}
        {...props}
      >
        {children}
      </button>

    </>);
}

export default Button;