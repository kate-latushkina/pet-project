import { render } from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import "shared/config/i18n/i18n";
import "./app/styles/index.scss";
import { StoreProvider } from "app/providers/StoreProvider";

render(
    <BrowserRouter>
        <StoreProvider>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById("root")
);
