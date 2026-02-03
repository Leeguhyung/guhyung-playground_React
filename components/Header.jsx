import "./style/Header.css";
import { InstagramOutlined } from "@ant-design/icons";

const Header = () => {
  const handleInstagramClick = () => {
    window.open(
      "https://www.instagram.com/guehyung5645",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="Header">
      <div className="Header_title">이규형의 놀이터</div>
      <InstagramOutlined onClick={handleInstagramClick} />
    </div>
  );
};

export default Header;
