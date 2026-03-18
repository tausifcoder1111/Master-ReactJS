Q1. What Problem does Redux Solve?
-> Redux Solve the state management problems in large application. In large application, multiple components need the same data, passing data through many component levels(props drilling) becomes difficult. 
-> Redux provides the centralized global store where all application state is stored.
-> Benefits :- Avoids Prop drilling & Better state management.
               
Redux and Redux toolkit
---------------------------------
- Both has same purpose and use
- We need to write more code in Redux
- Complexity is more in Redux than Redux Toolkit
- Redux Toolkit is a wrapper of Redux
- In Redux we need to Define Action and Reducer but In Redux toolkit no need to define both comes under the slice

*** Redux & RTK(Redux Toolkit) Architecture
-> Redux Main Components or Parts
    1. Action
    2. Reducer
    3. Store
    4. Dispatcher, Selector

-> View/UI(React Application) -> Dispatch (send data)  -> Action (Data which needs to store in Redux) -> Reducer (Store the data in the Redux Store) -> Store 
-> Action & Reducer = Slice 

-> App Setup
    1. Store
    2. Provider - with the help of provider we can fetch or get the data in multiple components from redux-store
    3. Slice - Combination of Action(Get the data from our application to store in the redux-store) and Reducer(update the redux-store with the updated data basically perform the redux store update and add)

-> 1. Create folder redux inside src folder
   2. Create two files in redux folder
        1. slice.js
        2. store.js
    
    