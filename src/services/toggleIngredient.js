export default function toggleIngredient(inProgressRecipes, type, id, target) {
  if (inProgressRecipes[type][id]
    .some((ingredient) => ingredient === target.id)) {
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      ...inProgressRecipes,
      [type]: {
        ...inProgressRecipes[type],
        [id]: inProgressRecipes[type][id]
          .filter((ingredient) => ingredient !== target.id),
      },
    }));
  } else {
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      ...inProgressRecipes,
      [type]: {
        ...inProgressRecipes[type],
        [id]: [...inProgressRecipes[type][id], target.id],
      },
    }));
  }
}
