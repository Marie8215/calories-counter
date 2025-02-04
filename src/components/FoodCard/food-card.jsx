export const FoodCard = ({ time, dish, weight, calories }) => {
  return (
    <div>
      <span>{time}</span> | <span>{dish}</span> | <span>{weight}</span> |
      <span>{calories}</span>
    </div>
  );
};
