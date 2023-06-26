import { useState, useEffect } from "react";
import { ReactComponent as ScrollIcon } from "../assets/scroll.svg";

export default function ScrollToTop() {
  const [visibleScrollToTop, setVisibleScrollToTop] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisibleScrollToTop(true);
    } else if (scrolled <= 200) {
      setVisibleScrollToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visibleScrollToTop) return <></>;

  return (
    <button
      onClick={scrollToTop}
      className="hover:text-primary-500 hover:border-primary-500 w-12 h-12 fixed bottom-36 right-24 rounded-full bg-light border border-gray-400 text-gray-400 flex items-center justify-center"
    >
      <ScrollIcon />
    </button>
  );
}
