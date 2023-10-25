import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { useTranslation } from "react-i18next";

export const Counter = (): JSX.Element => {
  const dispach = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const { t } = useTranslation();

  const increment = (): void => {
    dispach(counterActions.increment());
  };

  const decrement = (): void => {
    dispach(counterActions.decrement());
  };

  return (
      <div >
          <h1 data-testid="value-title">{t("Value")} = {counterValue}</h1>
          <Button
              data-testid="increment-btn"
              onClick={increment}
          >
              {t("Increment")}
          </Button>
          <Button
              data-testid="decrement-btn"
              onClick={decrement}
          >
              {t("Decrement")}
          </Button>
      </div>
  );
};
