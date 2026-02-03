import React, { useState, useEffect } from "react";
import "./style/GuestbookPage.css";
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko"; // 한국어 가져오기
dayjs.extend(relativeTime); // 플러그인 등록
dayjs.locale("ko"); // 전역 한국어 설정

const GuestbookPage = () => {
  const [guestbookData, setGuestbookData] = useState([]);
  const [newNickname, setNewNickname] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [newPassword, setNewPassword] = useState(""); // 1. 비밀번호 상태 추가

  const fetchMessages = () => {
    // 이전과 동일 (단, 배포 시에는 앞에 http://IP:5000 붙는 거 확인!)
    axios
      .get(`/api/guestbook`)
      .then((res) => setGuestbookData(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // 2. 삭제 함수 추가
  const handleDelete = (id) => {
    const inputPassword = prompt("삭제를 원하시면 비밀번호를 입력하세요.");
    if (!inputPassword) return;

    axios
      .delete(`/api/guestbook/${id}`, {
        data: { password: inputPassword }, // 몽고디비는 _id 기준 삭제
      })
      .then(() => {
        alert("삭제되었습니다.");
        fetchMessages();
      })
      .catch((err) => {
        alert(err.response?.data?.message || "삭제 실패");
      });
  };

  const handleAddMessage = (e) => {
    e.preventDefault();
    if (!newNickname || !newMessage || !newPassword) {
      alert("성명, 내용, 비밀번호를 모두 입력해주세요.");
      return;
    }

    axios
      .post(`/api/guestbook`, {
        nickname: newNickname,
        message: newMessage,
        password: newPassword, // 3. 전송 데이터에 비밀번호 포함
        date: dayjs().format("YYYY-MM-DD HH:mm"),
      })
      .then(() => {
        setNewNickname("");
        setNewMessage("");
        setNewPassword(""); // 입력창 초기화
        fetchMessages();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="guestbook-container">
      <div className="fixed-top-section">
        <header className="guestbook-header">
          <h1 className="guestbook-title">방명록</h1>
        </header>

        <form className="guestbook-form" onSubmit={handleAddMessage}>
          <div className="input-group">
            <input
              className="input-nickname"
              placeholder="성명"
              value={newNickname}
              onChange={(e) => setNewNickname(e.target.value)}
            />
            {/* 4. 비밀번호 입력창 추가 */}
            <input
              type="password"
              className="input-password"
              placeholder="비밀번호"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <textarea
            className="input-message"
            placeholder="내용을 입력하세요"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            등록하기
          </button>
        </form>
      </div>

      <div className="scrollable-list-section">
        {guestbookData.map((item) => (
          <div key={item._id} className="guestbook-card">
            {" "}
            {/* 5. item.id 대신 item._id 사용 */}
            <div className="card-top">
              <span className="nickname">{item.nickname}</span>
              <div className="top-right">
                <span className="date">{item.date}</span>
                {/* 6. 삭제 버튼 추가 */}
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(item._id)}
                >
                  삭제
                </button>
              </div>
            </div>
            <p className="message">{item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestbookPage;
