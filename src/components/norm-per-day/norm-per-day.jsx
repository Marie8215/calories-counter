import { Flex, Progress } from "antd";
import { useSelector } from "react-redux";
import { selectEatenPercent } from "../../redux/entities/eatenFood/eaten-food-slice";

export const NormPerDay = () => {
  const caloriesInPercent = useSelector(selectEatenPercent);

  return (
    <Flex>
      <div>Белки</div>
      <Progress percent={caloriesInPercent.proteinsPercent} />
      <div>Жиры</div>
      <Progress percent={caloriesInPercent.fatsPercent} />
      <div>Углеводы</div>
      <Progress percent={caloriesInPercent.carbohydratesPercent} />
      <div>Калории</div>
      <Progress percent={caloriesInPercent.caloriesPercent} />
    </Flex>
  );
};
