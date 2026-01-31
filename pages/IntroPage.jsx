import React from "react";
import { Card, Row, Col, Typography, Tag, Space } from "antd";

const { Title, Text } = Typography;

const IntroPage = () => {
  return (
    <div style={{ padding: "10px 0" }}>
      {/* 토스풍의 깔끔한 카드 */}
      <Card
        bordered={false}
        style={{
          borderRadius: "24px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        }}
      >
        <Row gutter={[24, 24]} align="middle">
          {/* 1. 증명사진 영역 */}
          <Col xs={24} sm={8} style={{ textAlign: "center" }}>
            <div
              style={{
                width: "100%",
                aspectRatio: "3/4",
                backgroundColor: "#F2F4F6",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                color: "#8B95A1",
              }}
            >
              {/* 실제 이미지를 넣으려면 <img src="..." /> 사용 */}
              증명사진
            </div>
          </Col>

          {/* 2. 이력 정보 영역 */}
          <Col xs={24} sm={16}>
            <Title level={3} style={{ marginBottom: "4px" }}>
              이규형
            </Title>
            <Text
              type="secondary"
              style={{ display: "block", marginBottom: "16px" }}
            >
              컴퓨터공학과 2학년 휴학 중
            </Text>

            <Space direction="vertical" size="small" style={{ width: "100%" }}>
              <Text>📍 현재 군 복무 중 (자기계발 중!)</Text>
              <Text>📚 리눅스마스터 2급 자격증 준비</Text>
              <Text>🏃 러닝과 맛집 탐방이 취미입니다</Text>
            </Space>

            <div style={{ marginTop: "20px" }}>
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
