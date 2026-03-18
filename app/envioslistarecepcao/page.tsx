"use client";

import { Suspense, type MouseEvent, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  SLIDES,
  Slide8_1,
} from "@/components/enviados";

type SlideName = (typeof SLIDES)[number]["componentName"];

const SLIDE_COMPONENTS: Record<SlideName, React.ComponentType> = {
  Slide8_1,
};

function normalizeImageSrc(src: string) {
  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("/")) {
    return src;
  }
  return `/${src}`;
}

function HomePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [modal, setModal] = useState<{ src: string; alt: string } | null>(null);
  const rawReturnTo = searchParams.get("returnTo") || "/#slide10";
  const returnTo = rawReturnTo.startsWith("#") ? `/${rawReturnTo}` : rawReturnTo;

  useEffect(() => {
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setModal(null);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  const onSlideClick = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target;
    if (!(target instanceof HTMLImageElement)) return;
    const rawSrc = target.getAttribute("src");
    if (!rawSrc) return;
    setModal({ src: normalizeImageSrc(rawSrc), alt: target.getAttribute("alt") || "Imagem" });
  };

  return (
    <main className="main">
      <div className="layout">
        <aside className="sidebar">
          <h1 className="sidebar-title">Tópicos</h1>
          <nav className="topics">
            {SLIDES.map((slide) => (
              <a key={slide.id} className="topic-link" href={`#${slide.id}`}>
                {slide.title}
              </a>
            ))}
          </nav>
        </aside>

        <section className="page-area">
          <div className="content">
            {SLIDES.map((slide) => {
              const SlideComponent = SLIDE_COMPONENTS[slide.componentName];
              return (
                <section key={slide.id} id={slide.id} className="topic-section">
                  <h2 className="topic-title">{slide.title}</h2>
                  <div className="slide-scroll">
                    <div className="slide-content" onClick={onSlideClick}>
                      <SlideComponent />
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </section>
      </div>

      {modal && (
        <div className="modal" onClick={() => setModal(null)}>
          <button className="modal-close" type="button" onClick={() => setModal(null)}>
            ×
          </button>
          <img src={modal.src} alt={modal.alt} onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      {/* Botão flutuante voltar */}
      <button
        onClick={() => router.push(returnTo)}
        style={{
          position: "fixed",
          bottom: "32px",
          right: "32px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "14px 24px",
          backgroundColor: "#003087",
          color: "#ffffff",
          border: "none",
          borderRadius: "999px",
          fontSize: "15px",
          fontFamily: '"Montserrat", sans-serif',
          fontWeight: "700",
          cursor: "pointer",
          boxShadow: "0 8px 24px rgba(0, 48, 135, 0.35)",
          zIndex: 9999,
          letterSpacing: "0.3px",
        }}
        aria-label="Voltar para a apresentação"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        Voltar para Apresentação
      </button>
    </main>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={null}>
      <HomePageContent />
    </Suspense>
  );
}
