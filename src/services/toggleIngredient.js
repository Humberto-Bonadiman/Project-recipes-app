export default function toggleIngredient(type, id, target) {
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'))
    || { cocktails: {}, meals: {} };
  if (!inProgressRecipes[type][id]) {
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      ...inProgressRecipes,
      [type]: {
        ...inProgressRecipes[type],
        [id]: [],
      },
    }));
  }
  const ingredientsUsed = JSON.parse(localStorage.getItem('inProgressRecipes'));
  return ingredientsUsed[type][id].includes(target.id)
    ? localStorage.setItem('inProgressRecipes', JSON.stringify({
      ...inProgressRecipes,
      [type]: {
        ...ingredientsUsed[type],
        [id]: ingredientsUsed[type][id]
          .filter((ingredient) => ingredient !== target.id),
      },
    }))
    : localStorage.setItem('inProgressRecipes', JSON.stringify({
      ...ingredientsUsed,
      [type]: {
        ...ingredientsUsed[type],
        [id]: [...ingredientsUsed[type][id], target.id],
      },
    }));
}
