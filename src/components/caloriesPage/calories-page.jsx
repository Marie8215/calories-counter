import { ListOfEaten } from "../listOfEaten/list-of-eaten";
import { NormPerDay } from "../normPerDay/norm-per-day";
import { Profile } from "../profile/profile";
import { Statistics } from "../statistics/statistics";
import styles  from "./caloriesPage.module.css";

export const CaloriesPage = () => {
  return (
    <div className={styles.container}>
        <div className={`${styles.flexItem} ${styles.dailyCalories}`}>
          <NormPerDay />
        </div>
        <div className={styles.flexItem}>
          <Profile />
        </div>
        <div className={styles.flexItem}>
          <ListOfEaten />
        </div>
        <div className={styles.flexItem}>
          <Statistics />
        </div>
    </div>
  );
};
