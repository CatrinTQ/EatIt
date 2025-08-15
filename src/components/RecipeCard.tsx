type RecipeCardProps = {
  title: string;
  description: string;
  img: string;
  ingredients: string[];
  instructions: string[];
};

export const RecipeCard = ({ title, description, img, ingredients, instructions }: RecipeCardProps) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={img} alt={`Picture of ${title}`} />
      <ul>
        {ingredients.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
      <ol>
        {instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </>
  );
};
