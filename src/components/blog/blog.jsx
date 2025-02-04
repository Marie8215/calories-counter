import { article } from "../../constants/mock-data";
import { Article } from "../article/article";

export const Blog = () => {
  return (
    <div>
      <h1>Здоровое похудение и правильное питание</h1>
      <Article  title={article.title} content={article.content} />
    </div>
  );
};
