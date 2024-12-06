# Tempo Frontend challenge

# Solution Improvement

### Describe what you have improved in the solution

[X] Implement a new filed of search on the screens of teams and users

I've changed all var declarations to const because all declarations were immutable and it's not recommended use var since it's a global scope variable. 

In the `List` file I've replaced the isLoading type from string to boolean. 

In the Card component, I've replaced the **data-testid** from "**cardContainer**" to "**card-container**", because it's common to use _kebab case_ for html attributes.

I've removed Spinner styles from `Spinner/index` file and moved to styles file, to better organize. 

I've changed the names of functions and variables to better understand what they do. 

I've created a helper function called **convertUserToColumns** to use where I need to transform Users Data to Item List data.

In the `TeamOverview` page, I've changed the **for** function where user data was got to **promise.all** to improve search velocity and reduce code complexity. 

I've improved the styles for a better user experience and added an empty state component for when there's no data available. 

## To Run the project you must run:

```
npm install
```

## after the installation finished, you can run:

```
npm start
```

#### The project will open in your browser with the following url http://localhost:3000;

## To run the tests yo must run

```
npm run test
```