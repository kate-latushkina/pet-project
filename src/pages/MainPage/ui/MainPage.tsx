import { Counter } from "entities/Counter";
import { useTranslation } from "react-i18next";

const MainPage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
      <div>
          {t("Main")}
          <Counter/>
      </div>
  );
};

export default MainPage;
