import { useEffect, useId, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiMaximize2, FiX } from "react-icons/fi";
import { detailCopy } from "../data/copy";
import "../styles/gallery.css";

export default function ScreenshotGallery({ images, language, projectTitle }) {
  const [selected, setSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const dialog = useRef(null);
  const titleId = useId();
  const captionId = useId();
  const labels = detailCopy[language];
  const count = images.length;
  const index = count ? selected % count : 0;
  const current = images[index];
  const caption = current?.[language] || projectTitle;
  const counter = `${labels.image} ${index + 1} ${labels.of} ${count}`;

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isOpen]);

  if (!count) return null;

  function move(direction) { setSelected((value) => (value + direction + count) % count); }

  function handleKeys(event) {
    if (event.altKey || event.ctrlKey || event.metaKey || count < 2) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      event.stopPropagation();
      move(event.key === "ArrowLeft" ? -1 : 1);
    }
  }

  function openDialog() { dialog.current.showModal(); setIsOpen(true); }
  function closeDialog() { dialog.current.close(); }

  function closeOnBackdrop(event) {
    if (event.target !== event.currentTarget) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeDialog();
  }

  const arrows = <div className="shot-arrows"><button type="button" onClick={() => move(-1)} aria-label={labels.previousImage}><FiArrowLeft aria-hidden="true" /></button><button type="button" onClick={() => move(1)} aria-label={labels.nextImage}><FiArrowRight aria-hidden="true" /></button></div>;

  return (
    <div className="shot-gallery" role="region" aria-label={`${labels.gallery} ${projectTitle}`} onKeyDown={handleKeys}>
      <figure className="shot-figure">
        <div className="shot-chrome" aria-hidden="true"><span className="shot-dots"><i /><i /><i /></span><span>{projectTitle}</span><span>{String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}</span></div>
        <button type="button" className="shot-open" onClick={openDialog} aria-label={`${labels.enlarge}: ${caption}`}>
          <img key={current.src} src={current.src} alt={caption} loading="eager" />
          <span className="shot-enlarge"><FiMaximize2 aria-hidden="true" /><span>{labels.viewLarger}</span></span>
        </button>
        <figcaption className="shot-caption"><div aria-live="polite" aria-atomic="true"><span className="shot-counter">{counter}</span><p>{caption}</p></div>{count > 1 && arrows}</figcaption>
      </figure>
      {count > 1 && <div className="shot-thumbs" role="group" aria-label={labels.chooseImage}>{images.map((image, imageIndex) => <button type="button" className="shot-thumb" key={image.src} aria-label={`${labels.showImage} ${imageIndex + 1}: ${image[language] || projectTitle}`} aria-pressed={index === imageIndex} onClick={() => setSelected(imageIndex)}><img src={image.src} alt="" loading="lazy" /><span>{String(imageIndex + 1).padStart(2, "0")}</span></button>)}</div>}
      <dialog className="shot-dialog" ref={dialog} aria-labelledby={titleId} aria-describedby={captionId} onClose={() => setIsOpen(false)} onClick={closeOnBackdrop} onKeyDown={handleKeys}>
        <div className="shot-dialog-header"><h2 id={titleId}>{projectTitle}</h2><button type="button" className="shot-close" onClick={closeDialog} aria-label={labels.closeViewer} autoFocus><FiX aria-hidden="true" /></button></div>
        <div className="shot-dialog-image">{isOpen && <img src={current.src} alt={caption} />}</div>
        <div className="shot-caption"><div id={captionId} aria-live="polite" aria-atomic="true"><span className="shot-counter">{counter}</span><p>{caption}</p></div>{count > 1 && arrows}</div>
      </dialog>
    </div>
  );
}
