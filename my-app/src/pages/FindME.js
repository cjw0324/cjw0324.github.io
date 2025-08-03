import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageModal from "../components/common/ImageModal";

function FindME() {
  const [modalImage, setModalImage] = useState(null);

  const images = [
    {
      src: "/images/findme/architecture.png",
      alt: "시스템 아키텍처",
    },
    {
      src: "/images/findme/1.png",
      alt: "검색 필터1",
    },
    {
      src: "/images/findme/2.png",
      alt: "검색 필터2",
    },
    {
      src: "/images/findme/3.png",
      alt: "검색 필터3",
    },
    {
      src: "/images/findme/4.png",
      alt: "검색 필터4",
    },
    {
      src: "/images/findme/5.png",
      alt: "검색 필터5",
    },
  ];

  return (
    <div className="project-page">
      <div className="project-header">
        <h1 className="project-title">Find ME</h1>
        <div className="project-git">
          <p>
            Git:{" "}
            <a
              href="https://github.com/FindME-CapstoneDesign1/FindMe_Backend"
              target="_blank"
              rel="noopener noreferrer"
            >
              Back-End Repository
            </a>
          </p>
          <p>2024.02-2024.07</p>
        </div>
      </div>

      <div className="project-description">
        <p>
          FindME는 기존 'LOST 112'의 <strong>검색 불편함</strong>과{" "}
          <strong>낮은 접근성</strong>을 개선하여,
        </p>
        <p>
          <strong>유실물 검색 속도를 50% 이상 향상</strong>시킨 서비스입니다.
        </p>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">Contribution</h2>
        <ul>
          <li>
            <strong>기여도 : 60 %</strong> (BE 팀원 3명, Github Insights Commit
            기준)
          </li>
          <li>팀장을 맡아 개발 일정 및 협업 컨벤션 수립</li>
          <li>
            Lost112 공공데이터 API를 활용하여 전국 유실물 데이터를
            수집·가공하고, 효율적인 DB 설계와 저장 로직을 구현했습니다.
          </li>
          <li>
            검색 알고리즘을 최적화하여 기존 LOST112 대비 검색 속도를 50% 이상
            단축하는 성과를 냈습니다.
          </li>
          <li>
            YoloV5 모델을 활용한 이미지 기반 카테고리 자동 분류 기능을
            도입하였습니다.
          </li>
        </ul>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">Tech Stack</h2>
        <ul>
          <li>Java</li>
          <li>Spring, JPA</li>
          <li>MySQL</li>
          <li>JWT, Swagger</li>
          <li>Python, YoloV5, Flask</li>
        </ul>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">Trouble Shooting</h2>
        <ol>
          <li>
            <h3>@Transactional이 적용되지 않는 문제</h3>
            <p>
              FindME에서 유실물 데이터를 주기적으로 수집해 DB에 저장하는 기능을
              구현한 중,{" "}
              <strong>예외가 발생해도 데이터가 롤백되지 않는 문제</strong>가
              발생했습니다. <strong>@Transactional</strong>을 붙인 메서드를 같은
              클래스 내의 <strong>다른 메서드에서 직접 호출</strong>하고 있었고,
              이로 인해 <strong>Spring AOP 프록시</strong>가 적용되지 않아
              트랜잭션이 무시되고 있던 상황이었습니다.
            </p>
            <p>
              문제 해결을 위해 트랜잭션이 필요한 로직을 별도의{" "}
              <strong>서비스 클래스로 분리</strong>하고,{" "}
              <strong>외부에서 주입받아 호출</strong>하는 방식으로 구조를
              개선했습니다. 이 경험을 통해{" "}
              <strong>Spring의 AOP 기반 트랜잭션 처리 방식</strong>과{" "}
              <strong>프록시의 동작 원리</strong>를 명확히 이해하게 되었고,
              트랜잭션을 안정적으로 적용하기 위한 <strong>설계 습관</strong>도
              갖추게 되었습니다.
            </p>
          </li>
        </ol>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">최종 결과물</h2>
        <div className="project-content-grid">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={img.alt}
              className="project-image"
              style={{ cursor: "pointer" }}
              onClick={() => setModalImage(img.src)}
            />
          ))}
        </div>
      </div>

      {/* 공통 이미지 모달 */}
      <ImageModal imageSrc={modalImage} onClose={() => setModalImage(null)} />

      <Link to="/" className="back-link">
        메인으로 돌아가기
      </Link>
    </div>
  );
}

export default FindME;
