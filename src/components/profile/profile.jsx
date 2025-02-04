import { UseProfile } from "./useProfile";

export const Profile = () => {
  const { profile, setHeight, setWeight, setAge, setGender } = UseProfile();
  const { height, weight, age, gender } = profile;


  return (
    <>
      <label>
        Рост
        <input
          value={height}
          onChange={(event) => setHeight(event.target.value)}
        />
      </label>
      <label>
        Вес
        <input
          value={weight}
          onChange={(event) => setWeight(event.target.value)}
        />
      </label>
      <label>
        Возраст
        <input value={age} onChange={(event) => setAge(event.target.value)} />
      </label>
      <label>
        <input type="radio" checked={gender === "male"} onChange={() => setGender("male")} />
      </label>
      <label>
        Мужской
      </label>
      <label>
        <input type="radio" checked={gender === "female"} onChange={() => setGender("female")} />
        Женский
      </label>
      <button>Сохранить</button>
    </>
  );
};
