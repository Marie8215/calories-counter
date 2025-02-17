import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectStatistics } from "../../redux/entities/statistics/statistics-slice";
import { getStatistics } from "../../redux/entities/statistics/get-statistics";

export const Statistics = () => {
  const [period, setPeriod] = useState(3);
  const dispatch = useDispatch();
  const statistics = useSelector(selectStatistics);
  console.log(statistics)

  useEffect(() => {
    dispatch(getStatistics(period));
  }, [dispatch, period]);

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
        <p>
           Самое частое блюдо: {statistics.mostCommonlyConsumedProduct?.productName}
        </p> 
      </div>
    </div>
  );
};
