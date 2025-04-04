import React from "react";
import { Link } from "react-router-dom";

function CodeBrew() {
  return (
    <div className="project-page">
      <div className="project-header">
        <h1 className="project-title">CODE-Brew</h1>
        <div className="project-git">
          <p>
            Git:{" "}
            <a
              href="https://github.com/prgrms-be-devcourse/NBE4-5-1-Team09"
              target="_blank"
              rel="noopener noreferrer"
            >
              CODE-Brew Repository
            </a>
          </p>
          <p>2025.02</p>
        </div>
      </div>

      <div className="project-description">
        <p>
          CODE-Brew는 <strong>실시간 주문·결제부터재고 관리</strong>까지
          아우르는 온라인 카페 통합 관리 서비스입니다.
        </p>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">Contribution</h2>
        <ul>
          <li>
            <strong>기여도 : 45 %</strong> (팀원 4명, Github Insights Additions
            기준)
          </li>
          <li>
            상품 주문 프로세스의 비즈니스 로직 구현
            <ul>
              <li>
                [장바구니 - 주문 - 결제 - 판매 승인 - 배송] 프로세스 별 API 구현
              </li>
              <li>주문 상태에 따른 상태 변경</li>
            </ul>
          </li>
          <li>
            PG 사 (PortOne) 을 통한 결제 로직 구현
            <ul>
              <li>결제 전 결제 정보 사전 등록</li>
              <li>Web Hook 을 통한 결제 검증</li>
              <li>주문 취소에 따른 결제 취소 및 재고 상태 변경</li>
            </ul>
          </li>
          <li>
            주문 상황에서 상품 재고의 동시성 이슈 해결
            <ul>
              <li>Redis 의 Redisson 분산락을 사용하여 동시성 이슈 해결</li>
              <li>
                DB 비관적 락과 분산락의 Apache AB 테스트 진행을 통한 성능 비교
                분석
              </li>
            </ul>
          </li>
          <li>
            매일 14시 배송 준비 상품에 대해 배송 대기 상태로 전환
            <ul>
              <li>Spring Scheduler 를 사용하여 UPDATE 자동화</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">Tech Stack</h2>
        <ul>
          <li>Java</li>
          <li>Spring, JPA</li>
          <li>OAuth 2.0, JWT, Swagger</li>
          <li>MySQL, Redis - Lock</li>
          <li>AWS (EC2)</li>
        </ul>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">Trouble Shooting</h2>
        <ol>
          <li>
            <h3>재고 관리에서의 동시성 문제</h3>
            <p>
              여러 사용자가 동시에 주문을 시도하는 상황에서, 재고 수량보다 많은
              주문이 처리되는 문제가 발생했습니다. 재고 확인과 차감 로직을{" "}
              <strong>별도 트랜잭션</strong>으로 처리했기 때문에, 동시 접근 시
              Race Condition이 발생 하였습니다.
            </p>
            <p>
              이 문제를 해결하기 위해{" "}
              <strong>DB 비관적 락, Redis 분산 락</strong>을 구현하고{" "}
              <strong>Apache AB 성능 테스트</strong>를 진행했습니다. 그 결과,{" "}
              <strong>Redis 분산 락 방식이 97TPS</strong>로 가장 안정적이고
              효율적인 처리 속도를 보여 적용하게 되었습니다.
            </p>
          </li>
          <li>
            <h3>외부 결제 API 연동 중 예외 처리 누락</h3>
            <p>
              결제 실패 시에도 주문 상태가 '성공'으로 처리되는{" "}
              <strong>데이터 무결성 오류</strong>가 발생했습니다. 이는 API 호출
              결과에 대한 예외 처리 및 롤백 로직이 부족했던 것이 원인이었습니다.
            </p>
            <p>
              이후 결제 성공 여부에 따라 주문 상태를 명확히 분리하고,{" "}
              <strong>실패 시 재고를 복구</strong>하도록 로직을 수정하여
              안정적인 결제 흐름을 완성했습니다.
            </p>
          </li>
        </ol>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">서비스 기획</h2>
        <div className="project-content-grid">
          <img
            src="/images/codebrew/service1.png"
            alt="서비스 플로우"
            className="project-image"
          />
          <img
            src="/images/codebrew/service2.png"
            alt="시스템 IA"
            className="project-image"
          />
        </div>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">Flow Chart, ERD</h2>
        <div className="project-content-grid">
          <img
            src="/images/codebrew/flow1.png"
            alt="시스템 플로우"
            className="project-image"
          />
          <img
            src="/images/codebrew/erd1.png"
            alt="ERD"
            className="project-image"
          />
        </div>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">개발 과정 및 최종 결과물</h2>
        <div className="project-content-grid">
          <img
            src="/images/codebrew/dev1.png"
            alt="시스템 아키텍처"
            className="project-image"
          />
          <img
            src="/images/codebrew/dev2.png"
            alt="메인 페이지"
            className="project-image"
          />
          <img
            src="/images/codebrew/dev3.png"
            alt="사용자 트리플 구매"
            className="project-image"
          />
          <img
            src="/images/codebrew/dev4.png"
            alt="관리자 페이지"
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

export default CodeBrew;
