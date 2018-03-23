import React from 'react';


const Review = ({ review }) => ((
  <div className="media">
    <img className="d-flex mr-3" style={{ width: 60, height: 60, borderRadius: '100%' }} src="http://i.pravatar.cc/300" alt="Recipe author avatar" />
    <div className="media-body">
      {review.body}
    </div>
  </div>
));

class Reviews extends React.Component {
  render() {
    const { reviews } = this.props;
    return (
      <div>
        {/* Reviews section */}
        {
          reviews.length > 1 &&
          <div className="container my-4">
            <div className="row justify-content-center">
              <div className="col-10">
                {reviews.map(review => <Review key={review.id} review={review} />)}
              </div>
            </div>
          </div>
        }
        {
          reviews.length < 1 &&
          <h4 className="text-center py-5">No reviews yet.</h4>
        }
        {/* End reviews section */}
        {/* Begin create reviews section */}
        <h3 className="mb-3 mt-3 text-muted">Leave a review</h3>
        <textarea cols={5} rows={5} className="form-control" placeholder="Leave a review for this recipe..." defaultValue={""} />
        <button className="btn btn-primary btn-sm mt-3 float-right">Save review</button>
        {/* End create review section */}
      </div>
    );
  }
}

export default Reviews;
