import React from "react";
import { Link } from "react-router-dom";

function DevPrep() {
  return (
    <div className="project-page">
      <div className="project-header">
        <h1 className="project-title">Dev Prep</h1>
        <div className="project-git">
          <p>
            Git:{" "}
            <a
              href="https://github.com/prgrms-be-devcourse/NBE4-5-2-Team07"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dev Prep Repository
            </a>
          </p>
          <p>2025.02-2025.03</p>
        </div>
      </div>

      <div className="project-description">
        <p>
          DevPrep은 개발자에게 <strong>CS 학습과 면접</strong>을 대비할 수 있는{" "}
          <strong>학습 컨텐츠</strong>를 제공하는 플랫폼입니다.
        </p>
        <p>
          <strong>CS 학습 컨텐츠</strong>와{" "}
          <strong>면접 대비 질문 및 AI 챗봇</strong>을 통한{" "}
          <strong>가상 면접</strong>을 제공합니다.
        </p>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">Contribution</h2>
        <ul>
          <li>
            <strong>기여도 : 51 %</strong> (팀원 5명, Github Insights Additions
            기준)
          </li>
          <li>면접 대비를 할 수 있는 학습 컨텐츠 가공 및 DB 저장</li>
          <li>
            학습 컨텐츠를 제공하는 정렬 방법 다양화를 통한 사용자 편의성 향상
            <ul>
              <li>ID 순서대로 질문 리스트 응답</li>
              <li>분야 별 질문 리스트 응답</li>
              <li>키워드 별 질문 리스트 생성 및 응답</li>
              <li>머리 질문에 대해 랜덤한 리스트 생성 및 응답</li>
            </ul>
          </li>
          <li>사용자 별 북마크 기능에 대한 비즈니스 로직 및 API 구현</li>
          <li>
            각 질문에 별 사용자 메모 작성에 대한 비즈니스 로직 및 API 구현
          </li>
          <li>
            모의 면접 Chat Bot 을 위한 Open AI API 사용
            <ul>
              <li>
                잦에 전파 방지를 위한 Circuit Breaker Pattern 적용을 통한 서버
                안정성 확보
              </li>
            </ul>
          </li>
          <li>
            커뮤니티 기능 구현
            <ul>
              <li>게시글 CRUD 로직 및 API 구현</li>
              <li>게시글에 대한 좋아요 기능 구현을 위한 Redis 활용</li>
              <li>게시글에 대한 댓글, 대댓글 CRUD 기능 구현</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">Tech Stack</h2>
        <ul>
          <li>Java</li>
          <li>Spring, JPA</li>
          <li>AWS (EC2), Docker, Nginx</li>
          <li>MySQL</li>
          <li>OAuth 2.0, JWT, Swagger</li>
          <li>Web Socket</li>
          <li>Next.js, Vercel (FE)</li>
        </ul>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">Trouble Shooting</h2>
        <ol>
          <li>
            <h3>OpenAI API 연동 중 요청 폭주로 인한 차단 문제</h3>
            <p>
              ChatGPT 서비스의 <strong>오류</strong>로 인해 저희{" "}
              <strong>서비스의 장애</strong>가 발생하는 상황이 발생했습니다.
              이로 인해{" "}
              <strong>
                사용자 응답이 지연되거나 챗봇이 응답하지 않는 문제
              </strong>
              를 확인하였습니다.
            </p>
            <p>
              이를 해결하기 위해 <strong>Circuit Breaker 패턴</strong>을
              적용하여 API 실패 시 빠르게 예외에 대한 응답을 반환하고, 외부
              장애가 전체 서비스에 영향을 주지 않도록 장애 차단하는 안전장치를
              도입했습니다.
            </p>
          </li>
          <li>
            <h3>질문 검색에 대한 요구사항 변경에 따른 데이터 구조 재설계</h3>
            <p>
              서비스 기획 변경으로 하나의 질문에 다양한 카테고리를 제공해야 하는{" "}
              <strong>요구사항이 추가</strong>되며 구조적 한계가 발생하였습니다.
              기존 구조를 유지하면서도 <strong>유연한 확장</strong>을 위해,
              자기참조 구조의 새로운 DB 테이블과 필드로 데이터를 설계했고, 여러
              질문 간 계층 관계를 표현할 수 있도록 리팩토링했습니다.
            </p>
          </li>
          <li>
            <h3>기존 코드와의 충돌 방지를 위한 추상화 계층 도입</h3>
            <p>
              새로운 데이터 구조에 따른 <strong>충돌을 방지</strong>하기 위해,
              인터페이스 기반 <strong>추상화 계층을 도입</strong>하였습니다.
              기존 구현체를 대체하지 않고도 새로운 기능을 병렬로 동작시킬 수
              있도록 설계했습니다. 이로 인해 코드 변경 없이도 새 기능을 사용할
              수 있는 <strong>유연한 아키텍처</strong>를 완성할 수 있었습니다.
            </p>
          </li>
        </ol>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">서비스 기획</h2>
        <div className="project-content-grid">
          <img
            src="/images/devprep/service1.png"
            alt="기존 학습 방법의 단점"
            className="project-image"
          />
          <img
            src="/images/devprep/service2.png"
            alt="DevPrep 차별화 포인트"
            className="project-image"
          />
        </div>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">Flow Chart, ERD</h2>
        <div className="project-content-grid">
          <img
            src="/images/devprep/flow1.png"
            alt="서비스 플로우"
            className="project-image"
          />
          <img
            src="/images/devprep/erd1.png"
            alt="ERD"
            className="project-image"
          />
        </div>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">개발 과정 및 최종 결과물</h2>
        <div className="project-content-grid">
          <img
            src="/images/devprep/dev1.png"
            alt="시스템 아키텍처"
            className="project-image"
          />
          <img
            src="/images/devprep/dev2.png"
            alt="서비스 페이지 스크린샷 1"
            className="project-image"
          />
          <img
            src="/images/devprep/dev3.png"
            alt="서비스 페이지 스크린샷 2"
            className="project-image"
          />
          <img
            src="/images/devprep/dev4.png"
            alt="서비스 페이지 스크린샷 3"
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

export default DevPrep;
