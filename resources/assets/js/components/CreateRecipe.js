import ReactDOM from 'react-dom';
import Dropzone from 'react-dropzone';
import React, { Component } from 'react';

import RenderArrayInput from './RenderArrayInput';

import ValidationErrors from './ValidationErrors';
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
    procedure: [''],
    errors: {}
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
      this.setState({ errors: validator.errors });
      return false;
    }

    return true;
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

  handleSubmit = () => {
    if (!this.validateInput()) {
      return;
    }
    
    const data = new FormData();
    data.append('image', this.state.uploadedImage);
    data.append('title', this.state.title);
    data.append('timeToCook', this.state.timeToCook);
    data.append('description', this.state.description);
    data.append('ingredients', JSON.stringify(this.state.ingredients));
    data.append('procedure', JSON.stringify(this.state.procedure));
    
    axios.post('/recipes', data)
      .then(response => {
        console.log(response);
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
              <div className="text-center">
                <ValidationErrors errors={this.state.errors.uploadedImage} />
              </div>
              <div className="card-body">
                <div className="form-group row">
                  <div className="col-sm-8">
                    <input type="text" name="title" onChange={this.handleInputChange} className="form-control" placeholder="Recipe title ..." />
                    <ValidationErrors errors={this.state.errors.title} />
                  </div>
                  <div className="col-sm-4">
                    <input type="text" name="timeToCook" onChange={this.handleInputChange} className="form-control" placeholder="How long to cook ?" />
                    <ValidationErrors errors={this.state.errors.timeToCook} />
                  </div>
                </div>
                <textarea name="description" onChange={this.handleInputChange} placeholder="Tell the world about your recipe ..." cols={3} rows={3} className="form-control" defaultValue={""} />
                <ValidationErrors errors={this.state.errors.description} />
                <hr />
                <h3 className="text-muted mb-3 mt-3">
                  <span className="mr-2">Ingredients</span>
                </h3>
                <ValidationErrors errors={this.state.errors.ingredients} />
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
                <ValidationErrors errors={this.state.errors.procedure} />
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
                  <button className="btn btn-primary" onClick={this.handleSubmit}>
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
