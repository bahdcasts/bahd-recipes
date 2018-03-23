import React from 'react';
import ReactDOM from 'react-dom';
import Gravatar from 'react-gravatar';

class SingleRecipe extends React.Component {
  render() {
    const { recipe } = this.props;
    return (
      <div className="card">
        <img className="card-img-top" style={{ maxHeight: 450 }} src={recipe.image} alt="Card image cap" />
        <div className="card-body">
          <h1 className="card-title text-center h4 mb-4">{recipe.title}
      <small className="text-muted" style={{ fontSize: 15 }}>
              <i className="ion ion-clock" />
             {recipe.timeToCook}
      </small>
          </h1>
          <p className="text-center my-4">
            {recipe.description}
    </p>
          <hr />
          <div className="media text-center mx-auto my-5" style={{ width: 200 }}>
            <Gravatar className="d-flex mr-3" style={{ width: 60, height: 60, borderRadius: '100%' }} src="http://i.pravatar.cc/300" email={recipe.user.email} />
            <div className="media-body">
              <h5 className="mt-3">{recipe.user.name}</h5>
            </div>
          </div>
          <p className="text-muted h6 text-center my-4">
            <span className="mr-3 h3"><i className="ion ion-happy-outline" /> 531,233 </span>
            <span className="mr-3 h3"><i className="ion ion-sad-outline" /> 0</span>
            <span className="mr-3 h3"><i className="ion ion-ios-heart" /> 33</span>
          </p>
          <hr />
          {/* Begin ingredients section */}
          <h3 className="mb-3 text-muted">Ingredients</h3>
          <ul className="list-group mt-3">
            {recipe.ingredients.map(ingredient =>
                 <li key={ingredient.id} className="list-group-item">{ingredient.text}</li>)}
          </ul>
          {/* End ingredients section */}
          {/* Begin procedures section */}
          <h3 className="mb-3 mt-3 text-muted">Procedure</h3>
          <ul className="list-group my-3">
          {recipe.steps.map((step, index) =>
                 <li className="list-group-item">
                  <span className="badge badge-primary">{index + 1}</span>
                  {step.text}
                </li>)}
          </ul>
          <h3 className="my-3 text-muted">Reviews</h3>
          {/* End procedures section */}
          {/* Reviews section */}
          <div className="container my-4">
            <div className="row justify-content-center">
              <div className="col-10">
                <div className="media">
                  <img className="d-flex mr-3" style={{ width: 60, height: 60, borderRadius: '100%' }} src="http://i.pravatar.cc/300" alt="Recipe author avatar" />
                  <div className="media-body">
                    I have just one thing to tell you. Please go to medical school, you have no hope in cooking.
            </div>
                </div>
                <hr />
                <div className="media">
                  <img className="d-flex mr-3" style={{ width: 60, height: 60, borderRadius: '100%' }} src="http://i.pravatar.cc/300" alt="Recipe author avatar" />
                  <div className="media-body">
                    If not that am a christian ehn, I would just pray juju for your head now. Wetin be this ???!😨😨
            </div>
                </div>
              </div>
            </div>
          </div>
          {/* End reviews section */}
          {/* Begin create reviews section */}
          <h3 className="mb-3 mt-3 text-muted">Leave a review</h3>
          <textarea cols={5} rows={5} className="form-control" placeholder="Leave a review for this recipe..." defaultValue={""} />
          <button className="btn btn-primary btn-sm mt-3 float-right">Save review</button>
          {/* End create review section */}
        </div>
      </div>
    );
  }
}

const singleRecipeElement = document.getElementById('singleRecipe')

const getRecipe = () => window.SINGLE_RECIPE;

if (singleRecipeElement) {
  ReactDOM.render(<SingleRecipe recipe={getRecipe()} />, singleRecipeElement)
}
