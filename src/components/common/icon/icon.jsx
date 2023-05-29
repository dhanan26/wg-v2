import "./icon.css";

export const Icon = ({ src, className, onClick }) => {
  return <img src={src} className={className} onClick={onClick} />;
};
