const Backdrop = ({ isVisible, onClose }) => {
  if (!isVisible) return null; // Don't render if not visible

  return (
    <div
      className="fixed inset-0 bg-black/50 z-[1]"
      onClick={onClose}
    ></div>
  );
};

export default Backdrop;