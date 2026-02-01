import React from "react";
import { Card, Row, Col, Typography, Tag } from "antd";
import "./style/IntroPage.css"; // CSS 파일 임포트

const { Title, Text } = Typography;

const IntroPage = () => {
  return (
    <div className="intro-container">
      <Card variant="none" className="intro-card">
        <Row gutter={[0, 24]} align="middle">
          {/* 1. 증명사진 영역 */}
          <Col span={24}>
            <div className="profile-img-box">
              <img src="/myphoto.jpg" alt="이규형" className="profile-img" />
            </div>
          </Col>

          {/* 2. 이력 정보 영역 */}
          <Col span={24}>
            <Title level={3} className="profile-name">
              이규형
            </Title>
            <Text type="secondary" className="profile-major">
              세종대학교 컴퓨터공학과 2학년 (휴학 중)
            </Text>

            <div className="profile-history-list">
              <Text>📍 정지초등학교 졸업</Text>
              <Text>📍 석수중학교 졸업</Text>
              <Text>📍 선부고등학교 졸업</Text>
              <Text>📍 세종대학교 컴퓨터공학과 휴학</Text>
              <Text>📍 현재 대한민국 공군 복무 중</Text>
              <Text>📚 LP듣는거 좋아합니다.</Text>
              <Text>🏃 개발 새내기입니다.</Text>
            </div>

            <div className="tag-container">
              <Tag color="blue">React</Tag>
              <Tag color="blue">Node.js</Tag>
              <Tag color="cyan">Web Development</Tag>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default IntroPage;
