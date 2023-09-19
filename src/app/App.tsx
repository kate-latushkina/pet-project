import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";

const App = (): JSX.Element => {
  const { theme } = useTheme();
  return (
      <div className={classNames("app", {}, [theme as string])}>
          <Suspense fallback="">
              <Navbar></Navbar>
              <div className="content-page">
                  <Sidebar/>
                  <AppRouter />
              </div>
          </Suspense>
      </div>
  );
};

export default App;
