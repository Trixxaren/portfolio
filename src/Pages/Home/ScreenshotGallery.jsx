import { useEffect, useId, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiMaximize2, FiX } from "react-icons/fi";
import "./ScreenshotGallery.css";

export default function ScreenshotGallery({ images, language, projectTitle }) {
  const [selected, setSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const dialog = useRef(null);
  const titleId = useId();
  const captionId = useId();
  const sv = language === "sv";
  const count = images.length;
  const index = count ? selected % count : 0;
  const current = images[index];
  const caption = current?.[language] || projectTitle;
  const counter = sv
    ? `Bild ${index + 1} av ${count}`
    : `Image ${index + 1} of ${count}`;

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!count) return null;

  function move(direction) {
    setSelected((value) => (value + direction + count) % count);
  }

  function handleKeys(event) {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      event.stopPropagation();
      move(event.key === "ArrowLeft" ? -1 : 1);
    }
  }

  function openDialog() {
    dialog.current.showModal();
    setIsOpen(true);
  }

  function closeDialog() {
    dialog.current.close();
  }

  function closeOnBackdrop(event) {
    if (event.target !== event.currentTarget) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    ) {
      closeDialog();
    }
  }

  const arrows = (
    <div className="shot-gallery__arrows">
      <button
        type="button"
        onClick={() => move(-1)}
        aria-label={sv ? "Föregående bild" : "Previous image"}
      >
        <FiArrowLeft aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => move(1)}
        aria-label={sv ? "Nästa bild" : "Next image"}
      >
        <FiArrowRight aria-hidden="true" />
      </button>
    </div>
  );

  return (
    <section
      className="shot-gallery"
      aria-label={
        sv ? `Skärmbilder från ${projectTitle}` : `${projectTitle} screenshots`
      }
      onKeyDown={handleKeys}
    >
      <figure className="shot-gallery__figure">
        <div className="shot-gallery__chrome" aria-hidden="true">
          <span className="shot-gallery__dots">
            <i />
            <i />
            <i />
          </span>
          <span>{projectTitle}</span>
          <span>{String(index + 1).padStart(2, "0")}</span>
        </div>
        <button
          type="button"
          className="shot-gallery__open"
          onClick={openDialog}
          aria-label={`${sv ? "Förstora bilden" : "Enlarge image"}: ${caption}`}
        >
          <img
            key={current.src}
            src={current.src}
            alt={caption}
            loading="lazy"
          />
          <span className="shot-gallery__enlarge">
            <FiMaximize2 aria-hidden="true" />
            {sv ? "Visa större" : "View larger"}
          </span>
        </button>
        <figcaption className="shot-gallery__caption">
          <div aria-live="polite" aria-atomic="true">
            <span className="shot-gallery__counter">{counter}</span>
            <p>{caption}</p>
          </div>
          {count > 1 && arrows}
        </figcaption>
      </figure>

      {count > 1 && (
        <div
          className="shot-gallery__thumbs"
          aria-label={sv ? "Välj bild" : "Choose image"}
        >
          {images.map((image, imageIndex) => (
            <button
              type="button"
              className="shot-gallery__thumb"
              key={image.src}
              aria-label={`${sv ? "Visa bild" : "Show image"} ${imageIndex + 1}: ${image[language] || projectTitle}`}
              aria-pressed={index === imageIndex}
              onClick={() => setSelected(imageIndex)}
            >
              <img src={image.src} alt="" loading="lazy" />
              <span>{String(imageIndex + 1).padStart(2, "0")}</span>
            </button>
          ))}
        </div>
      )}

      <dialog
        className="shot-gallery__dialog"
        ref={dialog}
        aria-labelledby={titleId}
        aria-describedby={captionId}
        onClose={() => setIsOpen(false)}
        onClick={closeOnBackdrop}
        onKeyDown={handleKeys}
      >
        <div className="shot-gallery__dialog-header">
          <h2 id={titleId}>{projectTitle}</h2>
          <button
            type="button"
            className="shot-gallery__close"
            onClick={closeDialog}
            aria-label={sv ? "Stäng bildvisaren" : "Close image viewer"}
            autoFocus
          >
            <FiX aria-hidden="true" />
          </button>
        </div>
        <div className="shot-gallery__dialog-image">
          {isOpen && <img src={current.src} alt={caption} />}
        </div>
        <div className="shot-gallery__caption">
          <div id={captionId} aria-live="polite" aria-atomic="true">
            <span className="shot-gallery__counter">{counter}</span>
            <p>{caption}</p>
          </div>
          {count > 1 && arrows}
        </div>
      </dialog>
    </section>
  );
}
