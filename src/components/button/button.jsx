export const Button = ({ children, onClick, /*classname*/ disabled }) => {
    
    return (
      <button
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  };