import { Button } from "antd";
import "./style/Navigation.css";
import { useNavigate } from "react-router-dom";
const Navigation = () => {
  const nav = useNavigate();
  return (
    <div className="Navigation">
      <Button size="large" type="primary" onClick={() => nav("/")}>
        자기소개
      </Button>
      <Button size="large" type="primary" onClick={() => nav("/Places")}>
        내가 가본곳들
      </Button>
      <Button size="large" type="primary" onClick={() => nav("/Food")}>
        맛집리스트
      </Button>
      <Button size="large" type="primary" onClick={() => nav("/Diary")}>
        일기장
      </Button>
    </div>
  );
};

export default Navigation;
