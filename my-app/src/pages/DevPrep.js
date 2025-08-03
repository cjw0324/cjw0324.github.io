import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageModal from "../components/common/ImageModal";

function DevPrep() {
  const [modalImage, setModalImage] = useState(null);

  const images = [
    {
      src: "/images/devprep/architecture.png",
      alt: "시스템 아키텍처",
    },
    {
      src: "/images/devprep/1.png",
      alt: "서비스 페이지 스크린샷 1",
    },
    {
      src: "/images/devprep/2.png",
      alt: "서비스 페이지 스크린샷 2",
    },
  ];

  return (
    <div className="project-page">
      <div className="project-header">
        <h1 className="project-title">DevPrep</h1>
        <div className="project-git">
          <p>
            Git:{" "}
            <a
              href="https://github.com/prgrms-be-devcourse/NBE4-5-2-Team07"
              target="_blank"
              rel="noopener noreferrer"
            >
              DevPrep Repository
            </a>
          </p>
          <p>2025.02-2025.04</p>
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
            <strong>기여도 : 30 %</strong> (팀원 5명, Github Insights Additions
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
          <li>
            결제 비즈니스 로직에서{" "}
            <strong>30가지 경우에 대한 테스트 코드</strong> 작성
            <ul>
              <li>
                결제 과정에서 <strong>내부 비즈니스 로직</strong>과{" "}
                <strong>외부 결제 모듈의 장애</strong> 모두에 대응하여 결제
                데이터의 <strong>무결성</strong>을 보장하는 설계 진행
              </li>
            </ul>
          </li>
          <li>
            모의 면접 Chat Bot 을 위한 Open AI API 사용
            <ul>
              <li>
                외부 API의 장애가 서비스 내부로 전파되는 것을 방지하기 위한{" "}
                <strong>
                  Circuit Breaker Pattern 적용을 통한 서버 안정성 확보
                </strong>
              </li>
            </ul>
          </li>
          <li>
            Github Action을 통한 CI/CD 자동화 파이프라인 구축
            <ul>
              <li>배포 시간 기존 대비 80% 이상 단축 (As Is:20m, To be:3m)</li>
              <li>배포 실패율 82% 감소 (As Is:21%, To be:4%)</li>
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
            <h3>질문 목록 조회 API의 과도한 요청으로 인한 응답 지연 문제</h3>
            <p>
              서비스 운영 중 사용자로부터 <strong>페이지 응답이 느리다</strong>
              는 피드백이 접수되었습니다. 이에 Prometheus와 Grafana를 활용해
              요청량을 <strong>모니터링</strong>한 결과, 질문 ID 리스트를
              반환하는 API에서 전체 트래픽의 상당 부분이 집중되고 있었으며, 매
              요청마다 DB 조회가 발생해 <strong>성능 병목</strong>의 원인이 되고
              있음을 확인했습니다.
            </p>
            <p>
              이 문제를 해결하기 위해 <strong>Redis 기반의 캐싱 전략</strong>을
              도입하여, 자주 호출되는 응답 데이터를 캐시에 저장하고, 캐시 미스
              시에만 DB를 조회하도록 수정하였습니다.
            </p>
            <p>
              이후 Apache AB 테스트 결과,{" "}
              <strong>동일 API의 평균 응답 속도가 약 70% 이상 개선</strong>
              되었으며, 전체 서비스의 응답 안정성 또한 향상되었습니다.
            </p>
          </li>

          <li>
            <h3>AWS EC2 인스턴스 메모리 부족으로 인한 서버 중단 문제</h3>
            <p>
              초기에는 EC2 인스턴스에 Spring Boot와 Next.js 컨테이너만 배포한
              상태로 부하 테스트를 진행해도 문제가 발생하지 않았습니다.
            </p>

            <p>
              하지만, 모니터링을 위해 Prometheus와 Grafana를 추가로 컨테이너로
              구성한 뒤부터, 동일한 테스트 중에{" "}
              <strong>서버가 중단되는 현상</strong>이 발생했습니다.
            </p>

            <p>
              문제 확인을 위해 EC2 인스턴스를 더 높은 사양으로 일시적으로 확장한
              뒤 테스트를 반복한 결과, Grafana 대시보드를 통해{" "}
              <strong>메모리 사용량이 2GB를 초과</strong>하는 것을 확인할 수
              있었습니다.
            </p>

            <p>
              이를 통해 원인을 메모리 부족으로 판단했지만, 장기적으로 인스턴스
              사양을 계속 상향하는 것은 비용 측면에서 부담이 컸습니다.
            </p>

            <p>
              이에 대응책으로 4GB의 스왑 공간을 추가로 설정하여, 요청이 집중되는
              상황에서 RAM이 부족하더라도 디스크 기반 메모리를 활용해 서버가
              중단되지 않도록 조치했습니다.
            </p>

            <p>
              스왑 사용 시 응답 속도가 일시적으로 느려질 수는 있지만, 서버
              다운을 방지하는 데에는 효과적이었습니다.
            </p>

            <p>
              또한, 메모리 사용량이 80%를 초과한 상태가 3분 이상 지속될 경우,
              Grafana를 통해 <strong>Slack으로 경고 알림이 전송</strong>되도록
              설정해 장애 발생 이전에 <strong>선제적으로 대응</strong>할 수 있는
              모니터링 체계도 함께 마련했습니다.
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

export default DevPrep;
