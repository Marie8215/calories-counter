import { useState } from "react";
import { useSelector } from "react-redux";
import { selectStatistics } from "../../redux/entities/statistics/statistics-slice";

export const Statistics = () => {
  const [period, setPeriod] = useState(3);
  const statistics = useSelector((state) => selectStatistics(state, period));

  const getDayWord = (count) => {
    let lastDigit = count % 10;
    return lastDigit === 1
      ? "день"
      : lastDigit >= 2 && lastDigit <= 4
      ? "дня"
      : "дней";
  };

  return (
    <div>
      <div>
        <button onClick={() => setPeriod(3)}>3 дня</button>
        <button onClick={() => setPeriod(7)}>7 дней</button>
        <button onClick={() => setPeriod(30)}>30 дней</button>
      </div>
      <div>
        <p>
          За последние {period} {getDayWord(period)} вы:
        </p>
        <p>
          Не добирали калории: {statistics.underCalories}{" "}
          {getDayWord(statistics.underCalories)}
        </p>
        <p>
          Перебирали калории: {statistics.overCalories}{" "}
          {getDayWord(statistics.overCalories)}
        </p>
        <p>
          Перебор по белкам: {statistics.overProteins}{" "}
          {getDayWord(statistics.overProteins)}
        </p>
        <p>
          Перебор по жирам: {statistics.overFats}{" "}
          {getDayWord(statistics.overFats)}
        </p>
        <p>
          Перебор по углеводам: {statistics.overCarbohydrates}{" "}
          {getDayWord(statistics.overCarbohydrates)}
        </p>
      </div>
    </div>
  );
};
