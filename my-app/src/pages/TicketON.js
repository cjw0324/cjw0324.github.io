import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageModal from "../components/common/ImageModal";

function TicketON() {
  const [modalImage, setModalImage] = useState(null);

  const images = [
    { src: "/images/ticketon/architecture.png", alt: "시스템 아키텍처" },
    { src: "/images/ticketon/k6.png", alt: "k6 테스트 결과" },
    { src: "/images/ticketon/wait.png", alt: "대기 중 화면" },
    { src: "/images/ticketon/seat.png", alt: "좌석 선택 화면" },
  ];

  return (
    <div className="project-page">
      <div className="project-header">
        <h1 className="project-title">TicketON</h1>
        <div className="project-git">
          <p>
            Git:{" "}
            <a
              href="https://github.com/prgrms-web-devcourse-final-project/WEB4_5_CodeNBug_BE"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project Repository
            </a>
          </p>
          <p>2025.04-2025.06</p>
        </div>
      </div>

      <div className="project-description">
        <p>
          행사 기획사에게 행사 관리 및 티켓팅에 대한 서비스를 제공하는{" "}
          <strong>B2B SaaS 형태의 티켓팅 플랫폼</strong>입니다.
        </p>
        <p>
          메인 서버와, 대기열 기능만을 담당하는 서버를 모듈로 분리한{" "}
          <strong>멀티 모듈 프로젝트</strong>입니다.
        </p>
        <p>
          이를 통해 트래픽 증가에 따른 부하 감소와, 티켓팅 서버 인스턴스의{" "}
          <strong>유연한 확장</strong>이 가능합니다.
        </p>
        <p>
          k6 부하테스트를 통해 <strong>scale out 지점을 판단</strong>하고,{" "}
          <strong>Grafana 를 통한 observability를 구축</strong>하였습니다.
        </p>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">Contribution</h2>
        <ul>
          <li>
            <strong>기여도 : 30 %</strong> (BE 팀원 5명)
          </li>
          <li>
            다양한 권한(User/Manager/Admin)에 따른 예매/관리 기능 설계 및 API
            구현
          </li>
          <li>
            Redis 기반 대기열 시스템에서 트래픽 폭증 시 대기 순서 일관성 유지
            <ul>
              <li>
                Stream과 ZSet 방식으로 구현 후 성능 테스트를 통한 대기열 로직
                최적화 진행
              </li>
              <li>
                대기열 입장, 탈출 <strong>실패율 0% 달성</strong>
              </li>
            </ul>
          </li>
          <li>
            트래픽 과부하에 유연하게 대응하기 위해 멀티 모듈 아키텍처를 도입
            <ul>
              <li>
                대기열 모듈을 별도 인스턴스로 분리하여 독립된 인스턴스 단위로
                배포하는 멀티 모듈 프로젝트 설계
              </li>
            </ul>
          </li>
          <li>
            Grafana 모니터링과 k6 테스트를 통한 트래픽 병목 지점 계측
            <ul>
              <strong>동시 요청 400명</strong>이 scale-out 임계점임을 확인, 서버
              인스턴스 확장 전략 수립
            </ul>
          </li>
          <li>
            결제 결과에 따른 예매 상태 자동 반영
            <ul>
              <li>Spring Batch를 사용한 사용자 구독 상태 업데이트 구현</li>
              <li>
                Toss Payments 결제 API 연동 및 Webhook을 통한 결제 무결성 검증
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">Tech Stack</h2>
        <ul>
          <li>Java</li>
          <li>Spring, JPA</li>
          <li>AWS (EC2, RDS, S3), Docker</li>
          <li>MySQL, Redis</li>
          <li>SSE</li>
          <li>Grafana, Prometheus</li>
        </ul>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">Trouble Shooting</h2>
        <ol>
          <li>
            <h3>Redis Stream 기반 대기열 구조에서 발생한 순번 불일치 문제</h3>
            <p>
              초기에는 <strong>Redis Stream</strong>을 활용하여 예매 대기열을
              구현하고, <strong>메시지의 처리 순서(idx)</strong>를 기반으로
              순번을 판단했습니다. 그러나 Stream 구조의 특성상 메시지 소비
              순서가 일관되지 않아, 특정 사용자의 순번이 꼬이거나, 중복/누락
              처리의 위험성이 발생하는 문제가 확인되었습니다.{" "}
            </p>
            <p>
              이를 해결하기 위해 <strong>Redis의 ZSet(Sorted Set)</strong>{" "}
              자료구조를 적용하여,
              <strong>사용자별 score를 대기 순번</strong>으로 명시하고, 예매
              순서를 명확히 보장할 수 있도록 구조를 개편하였습니다. ZSet 도입
              이후에는 사용자 위치 조회, 예매 우선 순위 판단, 대기열 탈퇴 처리
              등 다양한 연산을 Redis 명령어로 간단히 처리할 수 있게 되어{" "}
              <strong>예매 순서의 일관성 및 유지 보수성이 크게 향상</strong>
              되었습니다.
            </p>
            <br />
          </li>
          <li>
            <h3>
              예매 대기열 SSE 연결 시 Tomcat 쓰레드 고갈로 인한 확장성 문제
            </h3>
            <p>
              대기열 정보를 실시간으로 전달하기 위해{" "}
              <strong>SSE(Server-Sent Events)</strong>를 사용했지만, SSE 특성상
              사용자당 연결이 지속되며{" "}
              <strong>Tomcat 쓰레드를 장시간 점유합니다.</strong> 이로 인해,
              동시 접속자가 많아질 경우 쓰레드가 고갈되어{" "}
              <strong>서버 응답이 멈추는 문제</strong>가 발생하였습니다.{" "}
            </p>
            <p>
              이 문제를 해결하기 위해 대기열 서버를{" "}
              <strong>멀티 모듈 구조로 분리</strong>하고, 대기열 전용 모듈은{" "}
              <strong>별도 인스턴스로 배포</strong> 가능하도록 설계하여 대기열
              응답 트래픽을 분리 처리할 수 있도록 하였습니다. 또한 k6 기반 부하
              테스트를 직접 설계하고 수행하여, 약 400명 동시 접속 시점이
              Scale-out 기준이 됨을 수치 기반으로 확인하였습니다.
            </p>
            <p>
              이를 통해 SSE의 구조적 제약에 대응할 수 있는 인프라 확장 전략을
              수립하고, 서비스 안정성을 확보할 수 있었습니다.
            </p>
            <br />
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

export default TicketON;
