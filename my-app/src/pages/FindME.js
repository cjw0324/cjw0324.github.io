import React from "react";
import { Link } from "react-router-dom";

function FindME() {
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
          <li>Spring, JPA, QueryDSL</li>
          <li>AWS (EC2, RDS, S3), Docker, Nginx</li>
          <li>MySQL</li>
          <li>JWT, Swagger</li>
          <li>Python, YoloV5, Flask</li>
        </ul>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">Trouble Shooting</h2>
        <ol>
          <li>
            <h3>비효율적인 검색 로직으로 인한 성능 저하</h3>
            <p>
              FindME의 검색 기능은 사용자로부터 최대 10개의 조건을 선택 또는
              입력받아 유실물 데이터를 조회합니다. 하지만 초기에 구현한 방식은{" "}
              <strong>모든 데이터를</strong> 조회한 뒤, 자바 코드에서 조건을
              걸어 <strong>필터링하는</strong> 구조였고, 이는 데이터량이
              많아질수록 <strong>심각한 속도 저하</strong>를 일으켰습니다.
            </p>
            <br />
            <p>
              이 문제를 해결하기 위해 조건을 쿼리로에 직접 적용하려 했으나, 조합
              가능한 검색 조건이 너무 많아 각각에 대해 쿼리를 작성하기엔
              현실적이지 않았습니다. 그래서 <strong>QueryDSL</strong>을 도입해{" "}
              <strong>동적 쿼리</strong>를 구성하는 방식으로 전환했고, 사용자
              입력에 따라 <strong>필요한 조건</strong>만 쿼리에 적용되도록
              설계함으로써 성능 문제를 효과적으로 해결할 수 있었습니다.
            </p>
            <br />
            <p>
              이 경험을 통해,{" "}
              <strong>
                사용자의 선택 옵션이 유연한 시스템일수록 동적 쿼리와 같은 유연한
                기술 도입
              </strong>
              이 중요하다는 것을 깨달았고, 단순한 기능 구현보다{" "}
              <strong>효율성과 확장성을 고려한 설계의 필요성</strong>을
              실감했습니다.
            </p>
            <br />
          </li>
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
            <br />
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
            <br />
          </li>
        </ol>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">서비스 기획</h2>
        <div className="project-content-grid">
          <img
            src="/images/findme/service1.png"
            alt="서비스 문제 분석"
            className="project-image"
          />
          <img
            src="/images/findme/service2.png"
            alt="FindME 차별화 포인트"
            className="project-image"
          />
        </div>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">Flow Chart</h2>
        <div className="project-content-grid">
          <img
            src="/images/findme/flow1.png"
            alt="개발 프로세스 - 유스케이스"
            className="project-image"
          />
          <img
            src="/images/findme/flow2.png"
            alt="개발 프로세스 - 플로우차트"
            className="project-image"
          />
        </div>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">개발 과정 및 최종 결과물</h2>
        <div className="project-content-grid">
          <img
            src="/images/findme/development1.png"
            alt="시스템 아키텍처"
            className="project-image"
          />
          <img
            src="/images/findme/development2.png"
            alt="검색 필터"
            className="project-image"
          />
          <img
            src="/images/findme/development3.png"
            alt="검색 페이지"
            className="project-image"
          />
          <img
            src="/images/findme/development4.png"
            alt="상세 정보 페이지"
            className="project-image"
          />
        </div>
      </div>

      <Link to="/" className="back-link">
        메인으로 돌아가기
      </Link>
    </div>
  );
}

export default FindME;
