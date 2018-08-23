Budget Tracker - Lab 1 "Categories"
===

Budget tracking app with budget categories and expenses (today just categories)
 
## Category 

In this app a category should contain at least the following properties:

* `id` a uuid (`shortid` or other npm)
* `timestamp` a date from when the category was created (`new Date()`)
* `name` a string that is the name of the category
* `budget` a number that is the total amount of $ in the category 

Create a few dummy categories so your app initializes with some data.

### Redux

#### reducer

This reducer should support the following interactions 

* `CATEGORY_LOAD`
* `CATEGORY_ADD`
* `CATEGORY_REMOVE`
* BONUS: `CATEGORY_UPDATE`

#### action creators

Create an action creator for each interaction supported by your category reducer

#### store

In `src/store.js` export a function  that will return a new redux store from your category reducer

### Components

Create the following components and structure them according to the following diagram.  

``` 
Provider
  App
    Dashboard
      CategoryForm -- for creating categories
      Categories -- list of categories
        Category
          CategoryItem -- display of category
          BONUS: CategoryForm -- edit a category
        
```

#### Provider/App 

The Provider should wrap App component in `index.js`

#### Dashboard Component 

* should use react-redux's `connect` to map state and dispatchable methods to props
* should display a `CategoryForm` for adding categories to the app state
* should display a `Categories` component that displays `Category` for each category in the app state
* should display a `Category` component that displays `CategoryItem` for each category in the app state
* BONUS: `Category` switches to editable `CategoryForm`

#### CategoryForm Component

* should expect an `onComplete` prop to be a function
  * that function should be invoked with the CategoryForm state when the form is submitted
* BONUS: offer an edit more if `category` prop is passed

#### CategoryItem Component
* should display the category's name and budget
* should display a delete button
  * `onClick` the category should be removed from the application state
* BONUS: should display a CategoryForm
  * `onComplete` the form should update the component in the application state
  * Provide an edit button to toggle editing state

#### Test

* Test each reducer and action
* BONUS: test components

####  Documentation  

Write a description of the project in your README.md

## Rubric

* Tested reducer(s) **3pts**
* Tested actions **1pts**
* Init store and Provider **1pt**
* Use of `connect` **2pts**
* React Components **3pts**
