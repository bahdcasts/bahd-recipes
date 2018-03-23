import React from 'react';
import ReactDOM from 'react-dom';

class SingleRecipe extends React.Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" style={{ maxHeight: 450 }} src="img/meal-1.jpg" alt="Card image cap" />
        <div className="card-body">
          <h1 className="card-title text-center h4 mb-4">Emergency Jollof and Coconut stew
      <small className="text-muted" style={{ fontSize: 15 }}>
              <i className="ion ion-clock" />
              2 min
      </small>
          </h1>
          <p className="text-center my-4">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga
    </p>
          <hr />
          <div className="media text-center mx-auto my-5" style={{ width: 200 }}>
            <img className="d-flex mr-3" style={{ width: 60, height: 60, borderRadius: '100%' }} src="http://i.pravatar.cc/300" alt="Recipe author avatar" />
            <div className="media-body">
              <h5 className="mt-3">Kati Frantz</h5>
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
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Morbi leo risus</li>
            <li className="list-group-item">Porta ac consectetur ac</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
          {/* End ingredients section */}
          {/* Begin procedures section */}
          <h3 className="mb-3 mt-3 text-muted">Procedure</h3>
          <ul className="list-group my-3">
            <li className="list-group-item"><span className="badge badge-primary">1</span>   Cras justo odio</li>
            <li className="list-group-item"><span className="badge badge-primary">2</span> Dapibus ac facilisis in</li>
            <li className="list-group-item"><span className="badge badge-primary">3</span> Morbi leo risus</li>
            <li className="list-group-item"><span className="badge badge-primary">4</span> Porta ac consectetur ac</li>
            <li className="list-group-item"><span className="badge badge-primary">5</span> Vestibulum at eros</li>
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

if (singleRecipeElement) {
  ReactDOM.render(<SingleRecipe />, singleRecipeElement)
}
