import { Flex, Progress } from "antd";
import { useSelector } from "react-redux";
import styles from "./norm-per-day.module.css";
import { selectTotalEnergy } from "../../redux/entities/eatenFood/eaten-food-slice";
import { selectEnergyDailyNorm } from "../../redux/entities/profile/profile-slice";

export const NormPerDay = () => {
  let totalEnergy = useSelector(selectTotalEnergy);
  let energyNorm = useSelector(selectEnergyDailyNorm);

  let caloriesInPercent;
  if (!totalEnergy || !energyNorm) {
    caloriesInPercent = {
      caloriesPercent: 0,
      proteinsPercent: 0,
      fatsPercent: 0,
      carbohydratesPercent: 0,
    };
  } else {
    console.log("total Energy", totalEnergy, "energy norm", energyNorm);

    caloriesInPercent = {
      caloriesPercent: totalEnergy.calories / (energyNorm.calories / 100),
      proteinsPercent: totalEnergy.proteins / (energyNorm.proteins / 100),
      fatsPercent: totalEnergy.fats / (energyNorm.fats / 100),
      carbohydratesPercent:
        totalEnergy.carbohydrates / (energyNorm.carbohydrates / 100),
    };
  }

  return (
    <Flex>
      <div className={styles.progressNorm}>
        <div>
          Белки {Math.floor(totalEnergy?.proteins ?? 0)}/
          {Math.floor(energyNorm?.proteins ?? 0)} г
        </div>
        <Progress
          percent={Math.floor(caloriesInPercent.proteinsPercent)}
          showInfo={false}
        />
        <div>
          Жиры {Math.floor(totalEnergy?.fats ?? 0)}/
          {Math.floor(energyNorm?.fats ?? 0)} г
        </div>
        <Progress
          percent={Math.floor(caloriesInPercent.fatsPercent)}
          showInfo={false}
        />
        <div>
          Углеводы {Math.floor(totalEnergy?.carbohydrates ?? 0)}/
          {Math.floor(energyNorm?.carbohydrates ?? 0)} г
        </div>
        <Progress
          percent={Math.floor(caloriesInPercent.carbohydratesPercent)}
          showInfo={false}
        />
        <div>
          Калории {Math.floor(totalEnergy?.calories ?? 0)}/
          {Math.floor(energyNorm?.calories ?? 0)} ККал
        </div>
        <Progress
          percent={Math.floor(caloriesInPercent.caloriesPercent)}
          showInfo={false}
        />
      </div>
    </Flex>
  );
};
