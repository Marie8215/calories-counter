export const Button = ({ children, onClick, classname, disabled }) => {
  return (
    <button className={classname} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
