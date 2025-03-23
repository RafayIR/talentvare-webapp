import { useEffect } from "react";
const Backdrop = ({ isVisible, onClose }) => {

  
  useEffect(() => {
    if (isVisible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-[1]"
      onClick={onClose}
    ></div>
  );
};

export default Backdrop;