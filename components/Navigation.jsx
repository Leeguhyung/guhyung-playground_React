import { Button } from "antd";
import "./style/Navigation.css";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const nav = useNavigate();

  return (
    <div className="Navigation">
      {/* shape="round"를 사용하면 양 끝이 반원형으로 둥글어집니다 */}
      <Button
        className="toss-btn"
        size="large"
        type="primary"
        onClick={() => nav("/")}
      >
        자기소개
      </Button>
      <Button
        className="toss-btn"
        size="large"
        type="primary"
        onClick={() => nav("/GusPick")}
      >
        Gu's Pick
      </Button>
      <Button
        className="toss-btn"
        size="large"
        type="primary"
        onClick={() => nav("/GuestbookPage")}
      >
        방명록
      </Button>
      <Button
        className="toss-btn"
        size="large"
        type="primary"
        onClick={() => nav("/MusicPickPage")}
      >
        MUSIC PICK
      </Button>
    </div>
  );
};

export default Navigation;
