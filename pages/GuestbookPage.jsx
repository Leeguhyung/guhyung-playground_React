import React, { useState, useEffect } from "react";
import "./style/GuestbookPage.css";
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko"; // 한국어 가져오기
dayjs.extend(relativeTime); // 플러그인 등록
dayjs.locale("ko"); // 전역 한국어 설정

const GuestbookPage = () => {
  // 1. mockData 대신 빈 배열로 시작
  const [guestbookData, setGuestbookData] = useState([]);
  const [newNickname, setNewNickname] = useState("");
  const [newMessage, setNewMessage] = useState("");

  // 2. [GET] 서버에서 목록 불러오기 (규스픽과 동일한 방식)
  const fetchMessages = () => {
    axios
      .get(
        "https://5000-firebase-guhyung-playground-1769828944144.cluster-va5f6x3wzzh4stde63ddr3qgge.cloudworkstations.dev/api/guestbook"
      )
      .then((res) => setGuestbookData(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const onChangeNickname = (e) => setNewNickname(e.target.value);
  const onChangeMessage = (e) => setNewMessage(e.target.value);

  // 3. [POST] 서버에 저장하기 (.then 방식)
  const handleAddMessage = (e) => {
    e.preventDefault();
    if (!newNickname || !newMessage) return;

    axios
      .post(
        "https://5000-firebase-guhyung-playground-1769828944144.cluster-va5f6x3wzzh4stde63ddr3qgge.cloudworkstations.dev/api/guestbook",
        {
          nickname: newNickname,
          message: newMessage,
          date: dayjs().format("YYYY-MM-DD HH:mm"),
        }
      )
      .then(() => {
        setNewNickname("");
        setNewMessage("");
        fetchMessages(); // 저장 후 목록 새로고침
      })
      .catch((err) => {
        console.error(err);
        alert("저장에 실패했습니다.");
      });
  };

  return (
    <div className="guestbook-container">
      {/* 1. 고정 헤더 영역 */}

      <div className="fixed-top-section">
        <header className="guestbook-header">
          <h1 className="guestbook-title">방명록</h1>
          <p className="guestbook-subtitle">따뜻한 한마디를 남겨주세요</p>
        </header>

        {/* 2. 입력 폼 영역 */}
        <form className="guestbook-form" onSubmit={handleAddMessage}>
          <input
            className="input-nickname"
            placeholder="성명"
            value={newNickname}
            onChange={onChangeNickname}
          />
          <textarea
            className="input-message"
            placeholder="내용을 입력하세요"
            value={newMessage}
            onChange={onChangeMessage}
          />
          <button type="submit" className="submit-btn">
            등록하기
          </button>
        </form>
      </div>

      {/* 3. 스크롤 가능한 리스트 영역 */}
      <div className="scrollable-list-section">
        {guestbookData.map((item) => (
          <div key={item.id} className="guestbook-card">
            <div className="card-top">
              <span className="nickname">{item.nickname}</span>
              <span className="date">{item.date}</span>
            </div>
            <p className="message">{item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestbookPage;
