import { useDispatch, useSelector } from "react-redux";
import { UseProfile } from "./useProfile";
import { selectProfile } from "../../redux/entities/profile/profile-slice";
import { useEffect } from "react";
import { getProfile } from "../../redux/entities/profile/get-profile";
import { updateProfile } from "../../redux/entities/profile/update-profile";
import { Button, Form, Input, Radio, Col, Row } from "antd";

export const Profile = () => {
  const profileData = useSelector(selectProfile);

  const { profile, setHeight, setWeight, setAge, setGender, setProfile } =
    UseProfile(profileData);
  const { height, weight, age, gender, goal } = profile;

  const dispatch = useDispatch();

  const saveProfile = () => {
    // dispatch(updateProfile(profile))
    dispatch(updateProfile(profile));
  };

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  useEffect(() => {
    setProfile(profileData);
  }, [profileData]);

  return (
    <>
      <Form
        layout="horizontal"
        size="default"
        labelAlign="left"
        labelCol={{
          span: 6,
        }}
      >
        <Row gutter={40}>
          <Col span={12}>
            <Form.Item label="Рост">
              <Input
                placeholder="input placeholder"
                onChange={(event) => setHeight(event.target.value)}
                value={height}
              />
            </Form.Item>
            <Form.Item label="Вес">
              <Input
                placeholder="input placeholder"
                onChange={(event) => setWeight(event.target.value)}
                value={weight}
              />
            </Form.Item>
            <Form.Item label="Возраст">
              <Input
                placeholder="input placeholder"
                onChange={(event) => setAge(event.target.value)}
                value={age}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Пол">
              <Radio.Group value={gender}>
                <Radio.Button value="male" onChange={() => setGender("male")}>
                  Мужской
                </Radio.Button>
                <Radio.Button
                  value="female"
                  onChange={() => setGender("female")}
                >
                  Женский
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Цель">
              <Radio.Group value={goal}>
                <Radio.Button value="loose">Сбросить</Radio.Button>
                <Radio.Button value="gain">Набрать</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Button onClick={saveProfile} type="primary">Сохранить</Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};
