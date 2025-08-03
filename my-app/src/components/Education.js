import React from "react";

function Education() {
  return (
    <div>
      <section className="section education-section">
        <h2 className="section-title">학력 사항</h2>
        <div className="content-row">
          <div className="date-column">
            2018.03-2025.02
            <br />
            <span className="small-text">(졸업)</span>
          </div>
          <div className="content-column">
            <div className="education-item">
              <h3>단국대학교 컴퓨터공학과 (공학사 / 심화과정)</h3>
              <div className="grades">
                <p>총 학점 : 3.74 / 4.5</p>
                <p>전공 학점 : 3.82 / 4.5</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section education-section">
        <h2 className="section-title">Education</h2>
        <div className="content-row">
          <div className="date-column">
            2024.12-2025.06
            <br />
            <span className="small-text">(진행중)</span>
          </div>
          <div className="content-column">
            <div className="education-item">
              <h3>프로그래머스 백엔드 부트캠프 4기</h3>
              <p>
                Java, Kotlin, Spring Framework 기반의 Web Back-End 교육 및
                프로젝트
              </p>
            </div>
          </div>
        </div>

        <div className="content-row">
          <div className="date-column">
            2023.09-2023.12
            <br />
            <span className="small-text">(수료)</span>
          </div>
          <div className="content-column">
            <div className="education-item">
              <h3>TABA 4기 : 대학 · 기업 협력형 SW 아카데미</h3>
              <p>
                OS, DB(SQL, tibero), AI 교육 및 실무 중심 종합 설계 프로젝트
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;
