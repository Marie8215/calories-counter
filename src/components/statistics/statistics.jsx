import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectStatistics } from "../../redux/entities/statistics/statistics-slice";
import { getStatistics } from "../../redux/entities/statistics/get-statistics";
import { Button, Col, Row, Statistic, Tag, Typography } from "antd";

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

  const periodButtons = [
    { days: 3, label: "3 дня" },
    { days: 7, label: "7 дней" },
    { days: 30, label: "30 дней" },
  ];

  return (
    <div>
      <Typography.Title level={4}>Статистика питания</Typography.Title>
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        {periodButtons.map(({ days, label }) => (
          <Col key={days}>
            <Button
              type={period === days ? "primary" : "default"}
              onClick={() => setPeriod(days)}
            >
              {label}
            </Button>
          </Col>
        ))}
      </Row>
      <div>
      <Typography.Text strong>Показатели за период</Typography.Text>
      <Row gutter={[16, 16]} style={{ marginBottom: 20}}>
        <Col>
          <Statistic
            title="Дней с недобором калорий"
            value={statistics.underCalories}
            suffix={getDayWord(statistics.underCalories)}
            valueStyle={{ fontSize: 20 }}
          />
        </Col>
        
        <Col>
          <Statistic
            title="Дней с перебором калорий"
            value={statistics.overCalories}
            suffix={getDayWord(statistics.overCalories)}
            valueStyle={{ fontSize: 20 }}
          />
        </Col>
        
        <Col>
          <Statistic
            title="Дней с перебором белков"
            value={statistics.overProteins}
            suffix={getDayWord(statistics.overProteins)}
            valueStyle={{ fontSize: 20 }}
          />
        </Col>
        
        <Col>
          <Statistic
            title="Дней с перебором жиров"
            value={statistics.overFats}
            suffix={getDayWord(statistics.overFats)}
            valueStyle={{ fontSize: 20 }}
          />
        </Col>
        
        <Col>
          <Statistic
            title="Дней с перебором углеводов"
            value={statistics.overCarbohydrates}
            suffix={getDayWord(statistics.overCarbohydrates)}
            valueStyle={{ fontSize: 20 }}
          />
        </Col>
      </Row>
        <div>
          <Typography.Text strong>Самое частое блюдо: </Typography.Text>
            {statistics.mostCommonlyConsumedProduct?.productName 
            ? (
          <Tag color="blue" style={{ fontSize: 14 }}>
            {statistics.mostCommonlyConsumedProduct.productName}
          </Tag>)
            : <Typography.Text>нет данных</Typography.Text>
            }
        </div>
      </div>
    </div>
  );
};
