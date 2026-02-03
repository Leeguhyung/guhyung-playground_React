import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style/MusicPickPage.css";

// 1. 변수명 유지 (Emptyinputs)
const Emptyinputs = {
  title: "",
  artist: "",
  url: "",
  recommender: "",
};

const MusicPickPage = () => {
  const [musicList, setMusicList] = useState([]);
  const [inputs, setInputs] = useState(Emptyinputs);

  // 2. 함수명 유지 (fetchMusic)
  const fetchMusic = () => {
    axios
      .get("/api/musicpick")
      .then((res) => setMusicList(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchMusic();
  }, []);

  // 3. 개별 핸들러 함수명 유지
  const onChangeTitle = (e) => setInputs({ ...inputs, title: e.target.value });
  const onChangeArtist = (e) =>
    setInputs({ ...inputs, artist: e.target.value });
  const onChangeUrl = (e) => setInputs({ ...inputs, url: e.target.value });
  const onChangeRecommender = (e) =>
    setInputs({ ...inputs, recommender: e.target.value });

  // 4. 등록 로직 유지 (handleSubmit)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputs.title || !inputs.artist || !inputs.recommender) {
      alert("내용을 모두 입력해주세요!");
      return;
    }

    axios
      .post("/api/musicpick", {
        title: inputs.title,
        artist: inputs.artist,
        youtubeUrl: inputs.url,
        recommender: inputs.recommender,
      })
      .then(() => {
        setInputs(Emptyinputs);
        fetchMusic();
      })
      .catch((err) => console.log(err));
  };

  // 5. 필터링 로직
  const myPicks = musicList.filter(
    (item) => item.recommender === "이규형" || item.recommender === "규형"
  );
  const friendPicks = musicList.filter(
    (item) => item.recommender !== "이규형" && item.recommender !== "규형"
  );

  return (
    <div className="music-container">
      <div className="fixed-top-section">
        <h1 className="music-title">MUSIC PICK</h1>
        <form className="music-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              placeholder="곡 제목"
              value={inputs.title}
              onChange={onChangeTitle}
            />
            <input
              placeholder="가수"
              value={inputs.artist}
              onChange={onChangeArtist}
            />
          </div>
          <div className="input-group">
            <input
              placeholder="유튜브 링크"
              value={inputs.url}
              onChange={onChangeUrl}
            />
            <input
              placeholder="본인 이름"
              value={inputs.recommender}
              onChange={onChangeRecommender}
            />
          </div>
          <button type="submit" className="submit-btn">
            노래 추천하기
          </button>
        </form>
      </div>

      <div className="scrollable-list-section">
        <h2 className="section-subtitle">🎧 규형's PICK</h2>
        {myPicks.map((item) => (
          <div
            key={item._id}
            className="music-card" // .my-pick 클래스 제거 (CSS에 없음)
            onClick={() => item.youtubeUrl && window.open(item.youtubeUrl)}
          >
            <div className="music-info">
              {/* .music-name 클래스 제거 (CSS에 없음) */}
              <span>
                {item.title} - {item.artist}
              </span>
            </div>
          </div>
        ))}

        <h2 className="section-subtitle">🤝 친구들의 추천</h2>
        {friendPicks.map((item) => (
          <div
            key={item._id}
            className="music-card"
            onClick={() => item.youtubeUrl && window.open(item.youtubeUrl)}
          >
            <div className="music-info">
              <span>
                {item.title} - {item.artist}
              </span>
              <span className="recommender">{item.recommender}</span>
            </div>
            {/* .date 클래스 유지 (CSS에 있음) */}
            {/* <span className="date">{item.date}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicPickPage;
