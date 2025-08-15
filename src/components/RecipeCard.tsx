type RecipeCardProps = {
  name: string;
  image: string;
  instructions: string;
};

export const RecipeCard = ({ name, image, instructions }: RecipeCardProps) => {
  return (
    <>
      <h2>{name}</h2>
      <img src={image} alt={`Picture of ${name}`} />
      <p>{instructions}</p>
    </>
  );
};
