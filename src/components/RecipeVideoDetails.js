import React from 'react';
import PropTypes from 'prop-types';

function RecipeVideoDetails({ recipeDetails }) {
  const { strYoutube = '' } = recipeDetails;
  const youtubeUrl = strYoutube.replace('watch?v=', 'embed/');
  return (
    <section>
      <h2>Video</h2>
      <iframe
        data-testid="video"
        src={ youtubeUrl }
        allowFullScreen
        title="recipeVideo"
        width="100%"
      />
    </section>
  );
}
RecipeVideoDetails.propTypes = {
  recipeDetails: PropTypes.objectOf().isRequired,
};
export default RecipeVideoDetails;
