import { createContext, useEffect, useRef, useState } from "react";
import FixNavigation from "./FixNavigation";
import Loading from "./Loading";
import Main from "./Main";

export const RefContext = createContext(null);
export const SetRefContext = createContext(null);

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [ref, setRef] = useState(null);
  const elmRef = useRef(null);

  elmRef.current = ref;
  const newRef = elmRef.current;

  // ページ内スクロール
  useEffect(() => {
    const newElm = document.getElementById(newRef);
    if (!newElm) return;
    const time = window.setTimeout(() => {
      window.scrollTo({
        top: newElm.offsetTop,
        behavior: "smooth",
        left: 0,
        threshold: 0,
      });
    }, 1);
    return () => window.clearTimeout(time);
  }, [newRef]);
  //ローディング表示
  useEffect(() => {
    //画像が完全に読み込まれたらsetIsLoadedをtrueにする
    const time = () =>
      window.setTimeout(() => {
        if (!isLoaded) setIsLoaded(true);
      }, 1000);
    window.onload = time();
    return () => {
      window.clearTimeout(time);
    };
  }, [isLoaded]);
  return (
    <RefContext.Provider value={newRef}>
      <SetRefContext.Provider value={setRef}>
        <Loading isLoaded={isLoaded} />
        <FixNavigation style={fixStyle} />
        <Main />
      </SetRefContext.Provider>
    </RefContext.Provider>
  );
};
export default Home;

const fixStyle = {
  transform: "translateZ(1000px)",
};
