export default class CreateRecipeValidator {
  constructor(data) {
    this.data = data;

    this.errors = {
      title: [],
      timeToCook: [],
      description: [],
      uploadedImage: [],
      ingredients: [],
      procedure: []
    };
  }

  isValid() {
    this.validateField('title');
    this.validateField('timeToCook');
    this.validateField('description');
    this.validateField('uploadedImage');

    return this.errors.title.length < 1 &&
      this.errors.description.length < 1 &&
      this.errors.timeToCook.length < 1 &&
      this.errors.uploadedImage.length < 1;
  }

  validateField(field) {
    if (!this.data[field]) {
      this.errors[field].push(`The ${field} is required.`);
    }
  }
}
