import ReactDOM from 'react-dom';
import Dropzone from 'react-dropzone';
import React, { Component } from 'react';

const dropzoneStyles = {
  border: 'none',
};

export default class CreateRecipe extends Component {

  state = {
    uploadedImage: null
  };

  handleFileDrop = (files) => {
    this.setState({ uploadedImage: files[0] });
  }


  render() {
    return (
      <div className="container my-5">
        <div className="row justify-content-center">
          <h1 className="text-center my-5 header-color">Create a recipe</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-10">
            <div className="card">
              {/* Upload recipe image */}
              {
                !this.state.uploadedImage &&
                <Dropzone style={dropzoneStyles} onDrop={this.handleFileDrop} multiple={false}>
                  <div className="upload-recipe-img">
                    <div className="row justify-content-center">
                      <div className="col-12">
                        <p className="text-center">
                          <span className="h2"><i className="ion ion-camera" /></span>
                          <br />
                          Click to upload image
                    </p>
                      </div>
                    </div>
                  </div>
                </Dropzone>
              }
              {
                this.state.uploadedImage &&
                <Dropzone style={dropzoneStyles} onDrop={this.handleFileDrop} multiple={false}>
                  <img src={this.state.uploadedImage.preview} alt="" className="card-img-top"/>
                </Dropzone>
              }
              {/* End upload recipe image */}
              <hr />
              {/* Create recipe form */}
              <div className="card-body">
                <div className="form-group row">
                  <div className="col-sm-8">
                    <input type="text" className="form-control" placeholder="Recipe title ..." />
                  </div>
                  <div className="col-sm-4">
                    <input type="text" className="form-control" placeholder="How long to cook ?" />
                  </div>
                </div>
                <textarea placeholder="Tell the world about your recipe ..." cols={3} rows={3} className="form-control" defaultValue={""} />
                <hr />
                <h3 className="text-muted mb-3 mt-3">
                  <span className="mr-2">Ingredients</span>
                </h3>
                <ul className="list-group">
                  <li className="list-group-item">
                    <input type="text" className="form-control" placeholder="50 Naira Garri" />
                  </li>
                </ul>
                <button className="btn my-2 btn-primary btn-xs">
                  Add ingredient
          </button>
                <h3 className="text-muted mb-3 mt-3">
                  <span className="mr-1">Procedure</span>
                </h3>
                <ul className="list-group">
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-1 h3">
                        <span className="badge badge-primary">1</span>
                      </div>
                      <div className="col-11">
                        <input type="text" className="form-control" placeholder="Pour the garri inside the cup..." />
                      </div>
                    </div>
                  </li>
                </ul>
                <button className="btn mt-2 btn-primary btn-xs">
                  Add step
          </button>
                <br />
                <br />
                <div className="text-center">
                  <button className="btn btn-primary">
                    Publish Recipe
            </button>
                </div>
              </div>
              {/* End create recipe form */}
            </div>
          </div>
        </div>
      </div>

    );
  }
}

if (document.getElementById('createRecipe')) {
  ReactDOM.render(<CreateRecipe />, document.getElementById('createRecipe'));
}
