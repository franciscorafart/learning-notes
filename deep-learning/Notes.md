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

# Lesson 3 - Neural Net Foundations

### What models are best
There's three criteria to evaluate a neural network model (architecture)
https://www.kaggle.com/code/jhoward/which-image-models-are-best/

- Speed
- Accuracy
- How much memory they use

#### Pytorch Image models (timm)
Library with pre-trained computer vision models.

#### What is a .pkl file?
It's an object type called a learner, that has two main components.
1. Learner => Pre-processing steps you did to build your model, the data loader and its params (DataBlocks, ImageDataBloks,)
2. Trained model (`m.model`)
    A lot of layers in a tree-like structure.

### ML Models
https://www.kaggle.com/code/franciscorafart/how-does-a-neural-net-really-work/edit

Practical Definition: ML models are things that fit functions to data.

This concept can be visualized as the process of adjusting the parameters of a math function (3 parameters in a quadratic function as a simple example) until it gets close to our data. A function will never match perfectly the data, there's always noise in data. 

This process can be applied to more complex functions such as a neural network which can have millions of parameters, not only the 3 of a quadratic equation.

### Loss calculation
Instead of adjusting the parameters manually, which would be impossible for the millions of parameters of a Neural Network, we can use a **loss function** to inform us of how good an adjustment to parameters is.

#### MSE (Mean Square Error)
For loss calculation we use the Mean Square Error MSE, that goes:
 
`(predictions - actual_values)^2 / number_of_values` The mean of the squared prediction and value difference

### Gradient decent
We can automate the process of adjusting parameters in our function. By using the derivative of a los calculation, we can figure out the gradient of each parameter without the need to actually try it. This means we can know what next modifications to them will make the loss score improve. This process is call Gradient Decent: Calculate the gardient and reduce (decent) the loss.

### Rectified linear unit
We can figure out most problems from a quadratic equation, we need more complex ones.

#### Tensor
An x dimension data structure that can store scalars (0-d), vectors (1D), matrixes (2D), and n-dimension matrixes. Tensors only store homogenous numeric data types (int64, float32) and are designed for numerical computations.

### Pandas
Pandas is useful for storing and manipulating table like data stuctures called dataframes. It's based on numpy. Data frames can store all sorts of data types.



