import { useState } from "react";

const usePagination = (items, length) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [visiblePages, setVisiblePages] = useState([1, 2, 3, 4, 5]);
  const pageItems = items;
  const lastIndex = Math.ceil(length / pageItems);

  function prevArticles() {
    setCurrentIndex((prev) => {
      const newIndex = prev === 1 ? 1 : prev - 1;
      updateVisiblePages(newIndex);
      return newIndex;
    });
  }

  function nextArticles() {
    setCurrentIndex((prev) => {
      const newIndex = prev === lastIndex ? lastIndex : prev + 1;
      updateVisiblePages(newIndex);
      return newIndex;
    });
  }

  function updateVisiblePages(index) {
    if (index <= 3) {
      setVisiblePages([1, 2, 3, 4, 5]);
    } else if (index >= lastIndex - 1) {
      setVisiblePages([lastIndex - 4, lastIndex - 3, lastIndex - 2, lastIndex - 1, lastIndex]);
    } else {
      setVisiblePages([index - 2, index - 1, index, index + 1, index + 2]);
    }
  }

  function handlePrevDisabled() {
    setCurrentIndex(1);
    setVisiblePages([1, 2, 3, 4, 5]);
  }

  function handleNextDisabled() {
    setCurrentIndex(lastIndex);
    setVisiblePages([lastIndex - 4, lastIndex - 3, lastIndex - 2, lastIndex - 1, lastIndex]);
  }

  function handleCurrentArticle(index) {
    setCurrentIndex(index);
    updateVisiblePages(index);
  }

  return [currentIndex, visiblePages, pageItems, lastIndex, prevArticles, nextArticles, handlePrevDisabled, handleNextDisabled, handleCurrentArticle];
};

export default usePagination;
