import { createContext, useContext, useState, useCallback } from 'react';
import { slides } from '../data/slides';

const DeckContext = createContext();

export const DeckProvider = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [inquiryModal, setInquiryModal] = useState({
    open: false,
    action: null,
  });
  const total = slides.length;

  const next = useCallback(() => {
    setCurrentSlide(i => Math.min(i + 1, total - 1));
  }, [total]);

  const prev = useCallback(() => {
    setCurrentSlide(i => Math.max(i - 1, 0));
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const goToChapter = useCallback((chapterKey) => {
    const index = slides.findIndex(s => s.chapter === chapterKey);
    if (index !== -1) setCurrentSlide(index);
  }, []);

  const openInquiryModal = useCallback((action) => {
    setInquiryModal({
      open: true,
      action,
    });
  }, []);

  const closeInquiryModal = useCallback(() => {
    setInquiryModal({
      open: false,
      action: null,
    });
  }, []);

  return (
    <DeckContext.Provider
      value={{
        currentSlide,
        total,
        next,
        prev,
        goToSlide,
        goToChapter,
        slides,
        inquiryModal,
        openInquiryModal,
        closeInquiryModal,
      }}
    >
      {children}
    </DeckContext.Provider>
  );
};

export const useDeck = () => useContext(DeckContext);