import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/route";
import { useEffect, useState } from "react";
import AOS from "aos";
import SplashScreen from "./components/shared/SplashScreen";

function App() {
  const [splashFinished, setSplashFinished] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, [])
 
  return (
    <>
      {!splashFinished && <SplashScreen onComplete={() => setSplashFinished(true)} />}
      <div className={!splashFinished ? "h-screen overflow-hidden" : ""}>
        <RouterProvider router={routes} />
      </div>
    </>
  );
}

export default App
