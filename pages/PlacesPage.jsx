import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./style/PlacesPage.css";

// 1. 데이터 영역 (순서 상관없이 추가해도 됩니다)
// PlacesPage.jsx 상단 데이터

const PlacesPage = () => {
  const mapElement = useRef(null);
  const [placesData, setPlacesData] = useState([]);

  // [추가] Axios로 서버 데이터 가져오기
  useEffect(() => {
    axios
      .get("https://localhost:5000/api/guspick")
      .then((res) => setPlacesData(res.data))
      .catch((err) => console.error(err));
  }, []);
  // 2. 날짜 기준 내림차순 정렬 로직 (최신순)
  const sortedPlaces = [...placesData].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver || placesData.length == 0) return;

    const mapOptions = {
      center: new naver.maps.LatLng(37.5492699, 127.0741029),
      zoom: 14,
    };

    const map = new naver.maps.Map(mapElement.current, mapOptions);

    // 마커는 모든 데이터를 표시
    placesData.forEach((loc) => {
      new naver.maps.Marker({
        position: new naver.maps.LatLng(loc.lat, loc.lng),
        map: map,
        title: loc.title,
        animation: naver.maps.Animation.DROP,
      });
    });
  }, [placesData]);

  return (
    <div className="places-container">
      <div className="places-header">
        <h3 className="places-title">내가 가본 곳들</h3>
      </div>

      <div ref={mapElement} className="map-display" />

      {/* 3. 정렬된 데이터를 .map()으로 렌더링 */}
      <div className="places-list-section">
        {sortedPlaces.map((place) => (
          <div key={place.id} className="place-item">
            <span className="emoji">{place.emoji}</span>
            <div className="text-group">
              <strong className="name">{place.title}</strong>
              <span className="date">{place.date} 방문</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesPage;
