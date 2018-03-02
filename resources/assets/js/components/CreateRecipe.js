import ReactDOM from 'react-dom';
import Dropzone from 'react-dropzone';
import React, { Component } from 'react';

import RenderArrayInput from './RenderArrayInput';

import CreateRecipeValidator from '../validators/CreateRecipeValidator';

const dropzoneStyles = {
  border: 'none',
};

export default class CreateRecipe extends Component {

  state = {
    uploadedImage: null,
    title: '',
    description: '',
    timeToCook: 0,
    ingredients: ['', ''],
    procedure: ['']
  };

  handleFileDrop = (files) => {
    this.setState({ uploadedImage: files[0] }, () => {
      this.validateInput();
    });
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  validateInput = () => {
    const validator = new CreateRecipeValidator(this.state);

    if (!validator.isValid()) {
      console.log(validator.errors);
    } else {
      console.log('validator passed: ', validator.errors);
    }
  }

  handleIngredientChange = (event, index) => {
    const { ingredients } = this.state;

    ingredients[index] = event.target.value;

    this.setState({ ingredients });
  }

  handleProcedureChange = (event, index) => {
    const { procedure } = this.state;

    procedure[index] = event.target.value;

    this.setState({ procedure });
  }

  addNewIngredient = () => {
    this.setState({
      ingredients: [
        ...this.state.ingredients,
        ''
      ]
    });
  }

  addNewProcedure = () => {
    this.setState({
      procedure: [
        ...this.state.procedure,
        ''
      ]
    });
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
                  <img src={this.state.uploadedImage.preview} alt="" className="card-img-top" />
                </Dropzone>
              }
              {/* End upload recipe image */}
              <hr />
              {/* Create recipe form */}
              <div className="card-body">
                <div className="form-group row">
                  <div className="col-sm-8">
                    <input type="text" name="title" onBlur={this.validateInput} onChange={this.handleInputChange} className="form-control" placeholder="Recipe title ..." />
                  </div>
                  <div className="col-sm-4">
                    <input type="text" name="timeToCook" onBlur={this.validateInput} onChange={this.handleInputChange} className="form-control" placeholder="How long to cook ?" />
                  </div>
                </div>
                <textarea name="description" onBlur={this.validateInput} onChange={this.handleInputChange} placeholder="Tell the world about your recipe ..." cols={3} rows={3} className="form-control" defaultValue={""} />
                <hr />
                <h3 className="text-muted mb-3 mt-3">
                  <span className="mr-2">Ingredients</span>
                </h3>
                <RenderArrayInput
                  elements={this.state.ingredients}
                  handleElementChange={this.handleIngredientChange}
                />
                <button className="btn my-2 btn-primary btn-xs" onClick={this.addNewIngredient}>
                  Add ingredient
                </button>
                <h3 className="text-muted mb-3 mt-3">
                  <span className="mr-1">Procedure</span>
                </h3>
                <RenderArrayInput
                  elements={this.state.procedure}
                  handleElementChange={this.handleProcedureChange}
                  isProcedure={true}
                />
                <button className="btn mt-2 btn-primary btn-xs" onClick={this.addNewProcedure}>
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
