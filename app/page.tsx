"use client";

import { type MouseEvent, useEffect, useState } from "react";
import {
  SLIDES,
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  //Slide11,
  Slide12,
  Slide13,
  //Slide14,
  Slide15,
} from "@/components/slides";

type SlideName = (typeof SLIDES)[number]["componentName"];

const SLIDE_COMPONENTS: Record<SlideName, React.ComponentType> = {
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  //Slide11,
  Slide12,
  Slide13,
  //Slide14,
  Slide15,
};

function normalizeImageSrc(src: string) {
  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("/")) {
    return src;
  }
  return `/${src}`;
}

export default function HomePage() {
  const [modal, setModal] = useState<{ src: string; alt: string } | null>(null);

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
    </main>
  );
}
