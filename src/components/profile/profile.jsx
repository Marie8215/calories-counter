import { useDispatch, useSelector } from "react-redux";
import { UseProfile } from "./useProfile";
import { selectProfile } from "../../redux/entities/profile/profile-slice";
import { useEffect } from "react";
import { getProfile } from "../../redux/entities/profile/get-profile";
import { updateProfile } from "../../redux/entities/profile/update-profile";

export const Profile = () => {

  const profileData = useSelector(selectProfile)
  
  const { profile, setHeight, setWeight, setAge, setGender, setProfile } = UseProfile(profileData);
  const { height, weight, age, gender } = profile;

  const dispatch = useDispatch()

  const saveProfile = () => {
    // dispatch(updateProfile(profile))
    dispatch(updateProfile(profile))
  }

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  useEffect(() => {
    setProfile(profileData)
  }, [profileData]);
  
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
      <button onClick={saveProfile}>Сохранить</button>
    </>
  );
};
