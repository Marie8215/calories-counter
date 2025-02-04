import { useState } from "react";

const mockData = {
  3: {
    underCalories: 1,
    overCalories: 2,
    overProteins: 1,
    overFats: 0,
    overCarbohydrates: 2,
  },
  7: {
    underCalories: 2,
    overCalories: 3,
    overProteins: 2,
    overFats: 1,
    overCarbohydrates: 3,
  },
  30: {
    underCalories: 5,
    overCalories: 7,
    overProteins: 4,
    overFats: 3,
    overCarbohydrates: 6,
  },
};

export const Statistics = () => {
  const [period, setPeriod] = useState(3);

  const getDayWord = (count) => {
    let lastDigit = count % 10;
    return lastDigit === 1 ? 'день' : lastDigit >= 2 && lastDigit <= 4 ? 'дня' : 'дней';
  };


  let data = mockData[period];

  return (
    <div>
      <div>
      <button onClick={() => setPeriod(3)}>3 дня</button>
        <button onClick={() => setPeriod(7)}>7 дней</button>
        <button onClick={() => setPeriod(30)}>30 дней</button>
      </div>
      <div>
        <p>За последние {period} {getDayWord(period)} вы:</p>
        <p>Не добирали калории: {data.underCalories} {getDayWord(data.underCalories)}</p>
        <p>Перебирали калории: {data.overCalories} {getDayWord(data.overCalories)}</p>
        <p>Перебор по белкам: {data.overProteins} {getDayWord(data.overProteins)}</p>
        <p>Перебор по жирам: {data.overFats} {getDayWord(data.overFats)}</p>
        <p>Перебор по углеводам: {data.overCarbohydrates} {getDayWord(data.overCarbohydrates)}</p>
      </div>
    </div>
  );
};
