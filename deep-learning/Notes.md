
# Lesson 2 - How to put model in production (Web app)

Not intuitive: Train the model and THEN clean the data.


### Loss
You can have a bad Loss (How good the model is at predicting), by either"
1. Getting the predictions wrong with high confidence
2. Getting the prediction right with low confidence

### ImageClassifierCleaner
A function we run that allows us to delete or re-classify images with a bad Loss.

### Why clean after building amodel
Cleaning after training a model is a counterintuitive technique that helps figuring out what things are hard to classify in the data, so we can address it from the start => The model can help us find data problems.

### How to put model in production
Huggin face Spaces

### Export trained model
After training our model we run to export a file with our  => You need a GPU for this (Kaggle or Collab)
`learn.export('model.pkl')`

Download from the Data tab in Kaggle.

### How to run predictions with a saved model
* Important: A saved model needs the custom functions we created available in the scope, because it doesn't have access to our source code.

All we do is, instead of training a learner, we load a learner with the `load_learner` methods
`learn = load_learner('model.pkl')`

`learn.predict(image)`