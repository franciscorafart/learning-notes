# Lesson 1

## What is Machine Learning?

Machine learning is a discipline where we create a program not by writing it entirely ourselves, but by learning from data.
Deep Learning is a specialty of Machine Learning where we use Neural Networks with multiple layers as models.

Regular program
`Input => Program => Results`

Regular programs aren't good at some tasks (human) because we don't really understand how we do things. Some tasks are too complex for use to write fixed instructions for the computer to perform them.

Arthur Samuel in 1962 proposed that we could show a computer examples of what we wanted, and we could let the computer teach itself how to perform the task.
This program or Model, would take weights besides regular program inputs. At the end of the process we would evaluate the Result, and adjust the weights to re-run the progam. Weights are another kind of input. These days weights are refered as model parameters.

`Input + Weights => Model (Program) => Results => Performance => Adjusted Weights`

Once the training process is done and the weights are adjusted, the model behaves as a regular program, and we can use it as such.

`Inputs => Model (Program) => Results`

## What is a Neural Network?
A model (program) to solve all these different types of problems would be a flexible function that we could adjust weights for. 
A model like this exists, and it's a Neural Network.
It's a mathematical function that it's extremely flexible.

The universal mechanism to adjust the weights of a Neural Network for any kind of problem also exists, it's called Stochastic Gradient Descent (SGD)

## Notes on cat classifier (in notebooks folder)
- In a notbook we import all of the fastai library, instead of the standard practice of importing only the necessary functions.
- Validation Set.
`valid_pct` is the parameter that determines the percentage of the data that will be used for validation of the model (vs training). FastAi will show the model's accuracy showing only the validation set, never the training set.

- Overfitting
A model will improve it's prediction on the training set the longer we train it, but at a certain point it will memorize the training data instead of extracting general rules out of it. When this happens the model will get worse, and it's called overfitting.

- Vision learner
Vision learner is a Convolutional Neural Network, a model that is very good at image classification. It has a parameter `pretrained` that defaults to `True`that starts the model with weights assigned by experts to classify thousands of categories out of the box.

- Pre-Trained model
A model with preassigned weights trained on a dataset is called a pre-trained model. We always want to start from a pre-trained model, because it willmake ur overall training process faster.

- Transfer learning: 
Using a pretrained model for a task different that it was originally intended to.

- Fiting a model
Training or fitting a model is the process by which we find a set of parameters (weights) that specialize a general architecture (model) into a model that fits our particular data. To Fit a model we need to tell FastAi how many times to look at an image (Epochs). 

- Fine tuning
Since we are starting with a pretrained model we are going to fine tune instead.
With fine_tuning we can fine tune a pre-trained model without throwing away it capabilities.

- Head of Model
Part that is added to be specific to a new dataset

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