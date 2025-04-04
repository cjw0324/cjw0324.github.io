import React from "react";
import { Link } from "react-router-dom";

function ProjectActivity() {
  return (
    <section className="section project-section">
      <h2 className="section-title" style={{ textAlign: "left" }}>
        Project & Activity
      </h2>

      <div
        className="project-info-message"
        style={{
          backgroundColor: "#f8f9fa",
          padding: "12px 15px",
          borderRadius: "5px",
          marginBottom: "20px",
          fontSize: "0.9rem",
          color: "#495057",
          borderLeft: "4px solid #3a8194",
        }}
      >
        💡 프로젝트 제목을 클릭하면 해당 프로젝트의 상세 페이지로 이동합니다.
      </div>

      <div className="content-row">
        <div className="date-column">2023.01-2023.12</div>
        <div className="content-column">
          <div className="project-item">
            <h3>컴퓨터공학과 학생회장</h3>
          </div>
        </div>
      </div>

      <div className="content-row">
        <div className="date-column">2023.09-2023.12</div>
        <div className="content-column">
          <div className="project-item">
            <h3>
              <Link
                to="/campshare"
                style={{
                  textDecoration: "none",
                  borderBottom: "1px dashed #3a8194",
                }}
              >
                CampShare : 캠핑 용품 공유 플랫폼
              </Link>
            </h3>
            <p>Role : Back-End Developer</p>
          </div>
        </div>
      </div>

      <div className="content-row">
        <div className="date-column">2024.02-2024.07</div>
        <div className="content-column">
          <div className="project-item">
            <h3>
              <Link
                to="/findme"
                style={{
                  textDecoration: "none",
                  borderBottom: "1px dashed #3a8194",
                }}
              >
                Find ME : 공공데이터 활용을 통한 분실물 찾기 서비스
              </Link>
            </h3>
            <p>Role : Project Manager / Back-End Developer</p>
          </div>
        </div>
      </div>

      <div className="content-row">
        <div className="date-column">2025.02-2025.02</div>
        <div className="content-column">
          <div className="project-item">
            <h3>
              <Link
                to="/codebrew"
                style={{
                  textDecoration: "none",
                  borderBottom: "1px dashed #3a8194",
                }}
              >
                CODE-Brew : 카페 메뉴 온라인 주문 · 배송 서비스
              </Link>
            </h3>
            <p>Role : Back-End Developer</p>
          </div>
        </div>
      </div>

      <div className="content-row">
        <div className="date-column">2025.02-2025.03</div>
        <div className="content-column">
          <div className="project-item">
            <h3>
              <Link
                to="/devprep"
                style={{
                  textDecoration: "none",
                  borderBottom: "1px dashed #3a8194",
                }}
              >
                Dev Prep : 개발자를 위한 CS 지식 학습 플랫폼
              </Link>
            </h3>
            <p>Role : Back-End Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectActivity;
