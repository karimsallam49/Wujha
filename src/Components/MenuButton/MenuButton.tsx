// MenuButton.tsx
import "./MenuStyle.css";

type MenuButtonProps = {
  isOpen: boolean;
};

export const MenuButton = ({ isOpen }: MenuButtonProps) => {
  return (
        <div className="menu-btn">
    <div className={`menu-button ${isOpen ? "open" : ""}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    </div>
  );
};
