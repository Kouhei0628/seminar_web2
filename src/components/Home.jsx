import { useEffect, useRef, useState } from "react";
import FixNavigation from "./FixNavigation";
import Header from "./Header";
import Loading from "./Loading";
import Main from "./Main";

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
    <>
      <Loading isLoaded={isLoaded} />
      <FixNavigation style={fixStyle} variableRef={ref} setRef={setRef} />
      <Header className='header' />
      <Main className='main' variableRef={ref} setRef={setRef} />
    </>
  );
};
export default Home;

const fixStyle = {
  transform: "translateZ(1000px)",
};
