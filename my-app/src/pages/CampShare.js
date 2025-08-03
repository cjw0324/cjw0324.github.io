import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageModal from "../components/common/ImageModal";

function CampShare() {
  const [modalImage, setModalImage] = useState(null);

  const images = [
    {
      src: "/images/campshare/architecture.png",
      alt: "시스템 아키텍처",
    },
    {
      src: "/images/campshare/1.png",
      alt: "하이브리드 추천 시스템",
    },
    {
      src: "/images/campshare/2.png",
      alt: "상품 상세 페이지 서비스 화면",
    },
  ];

  return (
    <div className="project-page">
      <div className="project-header">
        <h1 className="project-title">CampShare</h1>
        <div className="project-git">
          <p>
            Git:{" "}
            <a
              href="https://github.com/TABA4-9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project Repository
            </a>
          </p>
          <p>2023.09-2023.12</p>
        </div>
      </div>

      <div className="project-description">
        <p>
          CampShare는 캠핑용품 <strong>제공자</strong>와 <strong>대여자</strong>
          를 연결하는 서비스입니다.
        </p>
        <p>
          제공자는 캠핑용품을 빌려주고 <strong>수익</strong>을 얻을 수 있으며,
        </p>
        <p>
          대여자는 고가의 장비를 <strong>부담 없이 체험</strong>하거나{" "}
          <strong>구매 전 사용</strong>해볼 수 있습니다.
        </p>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">Contribution</h2>
        <ul>
          <li>
            <strong>기여도 : 30 %</strong> (BE 팀원 2명, Github Insights Commit
            기준)
          </li>
          <li>
            RestTemplate 을 통한 Flask 서버와 통신 구현
            <ul>
              <li>크롤링을 통한 품품 대여 적정 시세 시스템 구축</li>
              <li>
                AI (협업 필터링, 상품명 기반 추천) 을 통한 캠핑 용품 추천 시스템
                구축
              </li>
            </ul>
          </li>
          <li>
            판매자의 <strong>상품 관리 CRUD</strong> 기능을 위한{" "}
            <strong>Rest API</strong> 구현
          </li>
        </ul>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">Tech Stack</h2>
        <ul>
          <li>Java</li>
          <li>Spring, JPA</li>
        </ul>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">Trouble Shooting</h2>
        <ol>
          <li>
            <h3>Spring Framework 에 대한 학습의 부족</h3>
            <p>
              Campshare는 저의 첫 백엔드 프로젝트였습니다. Spring boot를 제대로
              배우기도 전에 바로 실전 팀 프로젝트에 투입되었고, 당시에는 DI, MVC
              구조, Bean의 생명주기 등 기본 개념조차도 제대로 이해하지 못한 채
              시작했습니다.
            </p>
            <p>
              당담함과 위축감을 느꼈고, 무지로 인해 팀에 피해를 끼치고 싶지
              않다는 생각이 걱정됐습니다.
            </p>
            <p>
              그래서 수업 외 시간과 주말을 활용해 매일 학습했고, 적게라도 기능을
              맡아 구현해보며 체득해 나갔습니다.
            </p>
            <p>
              결과적으로 프로젝트 후반에는 컨트롤러-서비스-레포지토리 구조의
              흐름, DTO와 Entity 분리, 의존성 주입 방식을 이해하게 되었고, 이
              경험은 이후의 프로젝트들에서 기술적 의사결정에 도움이 되는 발판이
              되었습니다.
            </p>
          </li>

          <li>
            <h3>API 응답 과정에서 순환 참조 문제가 발생</h3>
            <p>
              Entity를 그대로 JSON 응답에 활용하며 순환 참조 문제가
              발생했습니다. 이를 해결하기 위해 응답 객체를 DTO로 분리하였습니다.
            </p>
            <p>
              이 경험을 통해 저는 무작정 구현하는 것이 아니라 데이터 흐름과 객체
              관계를 구조적으로 이해하는 것의 중요성을 배웠습니다.
            </p>
          </li>

          <li>
            <h3>협업을 위한 Github 에서 코드 충돌 및 PR 실수</h3>
            <p>
              협업 도구인 GitHub 사용 역시 이 프로젝트에서 처음 경험했습니다.
              충돌 없이 Pull Request(PR)를 올리는 과정이 익숙하지 않아 초반에는
              팀원의 작업 내용을 덮어쓰거나, 깊은 파일을 수정해 충돌을 야기하는
              실수를 자주 했습니다.
            </p>
            <p>
              실수 이후 다양한 명령어를 실습하며 Git의 동작 원리를 몸으로 익히게
              되었습니다.
            </p>
            <p>
              이 경험을 통해 협업에서는 기술만큼이나 커뮤니케이션과 도구 활용
              능력의 중요성을 느꼈고, 이후 프로젝트에서는 PR 템플릿 활용, 이슈
              트래킹, 커밋 메시지 컨벤션 적용 등 협업 프로세스를 보다 적극적으로
              이끌 수 있는 능력을 기르게 되었습니다.
            </p>
          </li>
        </ol>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">회고</h2>
        <p>
          Campshare 프로젝트는 제가 무지에서 출발해{" "}
          <strong>소통 부족함을 자각</strong>하고, 혼자일 때보다 함께일 때 더
          많이 배울 수 있다는 것을 깨닫게 해준 소중한 첫 경험입니다.
        </p>
        <p>
          기술적 부족함을 겪었지만, 그 과정에서{" "}
          <strong>기초의 중요성과 협업에서의 책임감</strong>, 그리고 학습을{" "}
          <strong>지속할 수 있는 태도</strong>를 얻었습니다.
        </p>
        <p>
          이후의 프로젝트에서 점점 더 많은 역할을 맡을 수 있었던 것도 이
          프로젝트 덕분이었습니다.
        </p>
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

export default CampShare;
