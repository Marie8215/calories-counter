import { Flex, Progress } from "antd";
import { useSelector } from "react-redux";
import { selectEatenPercent } from "../../redux/entities/eatenFood/eaten-food-slice";
import styles from "./norm-per-day.module.css"

export const NormPerDay = () => {
  const caloriesInPercent = useSelector(selectEatenPercent);

  return (
   
    <Flex>
       <div className={styles.progressNorm}>
      <div>Белки</div>
      <Progress percent={Math.floor(caloriesInPercent.proteinsPercent)} />
      <div>Жиры</div>
      <Progress percent={Math.floor(caloriesInPercent.fatsPercent)} />
      <div>Углеводы</div>
      <Progress percent={Math.floor(caloriesInPercent.carbohydratesPercent)} />
      <div>Калории</div>
      <Progress percent={Math.floor(caloriesInPercent.caloriesPercent)} />
      </div>
    </Flex>
    
  );
};
