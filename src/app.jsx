import { Layout } from "./components/layout/layout";
import { NormPerDay } from "./components/norm-per-day/NormPerDay";
import { Profile } from "./components/profile/profile";

function countDailyNorm(profile) {
  let calories =
    profile.gender === "male"
      ? 88.36 + 13.4 * profile.weight + 4.8 * profile.height - 5.7 * profile.age
      : 447.6 + 9.2 * profile.weight + 3.1 * profile.height - 4.3 * profile.age;

  let dailyNorm = {
    proteins: Math.floor((calories * 0.25) / 4),
    fats: Math.floor((calories * 0.25) / 9),
    carbohydrates: Math.floor((calories * 0.5) / 4),
    calories: Math.floor(calories),
  };

  return dailyNorm;
}

function onProfileChanged(profile) {
  let dailyNorm = countDailyNorm(profile);

  setEatenCalories((oldState) => {
    let newState = { ...oldState };

    newState.dailyNorm = dailyNorm;

    return newState;
  });
}

export const App = () => {
  return (
    <Layout>
      <Profile onProfileChanged={onProfileChanged} />
      <NormPerDay />
    </Layout>
  );
};
