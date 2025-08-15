type RecipeCardProps = {
  title: string;
  img: string;
  instructions: string[];
};

export const RecipeCard = ({ title, img, instructions }: RecipeCardProps) => {
  return (
    <>
      <h2>{title}</h2>
      <img src={img} alt={`Picture of ${title}`} />
      <ol>
        {instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </>
  );
};
