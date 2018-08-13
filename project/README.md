# Selko.io Project Documentation:

The project has been setup by `create-react-app`.
Find more in the [documentation](https://github.com/facebook/create-react-app).

Front-End Stack consists of:

- React 16.x.x
- Redux
- React-Router 4.x.x
- Redux-thunk
- Reselect
- Flow
- Axios
- Lodash
- Moment

Backend API documentation can be found [here](https://api.selko.io/31e1cfebebefba3679345eae398ef856ea060552343bcad808310525368f6d0d530ae1d9ffaf511b61e1b2a3fb62eda71a5f3557150999156406fd5438ed395c23d668bbb8bca571f837676e057720e74947a448e85ad337e4b29e0472bfbc243956404e9bb18ab857e5b3d0fa54d8de379b3e6aed232dcfae81849343de91b1/#/)

## Structure

All main files lie in `src`.
Here you can find the following folders:

### actions
- All `redux` actions are placed here in separate folders.
- A folder name should reflect the feature, like `auth`, `projects`, `models`, etc.
- In an action folder the following files should be created: `index.js`, `index.js`, `[folder-name].spec.js`.
- All actions should be flow-typed. Tests are desired, but not required.

### reducers
- All `redux` reducers are placed here in separate folders.
- A folder name should reflect the feature, like `auth`, `projects`, `models`, etc.
- In a reducer folder the following files should be created: `index.js`, `[folder-name].spec.js`.
- All reducers should be flow-typed. Tests are desired, but not required.

### services
- All async requests are placed here in separate files.
- A file name should reflect the feature, like `auth`, `projects`, `models`, etc.

### components
- All `react` components are placed here in separate folders.
- A folder name should start with a capital letter, like `App`.
- Every component should have the following files: `index.js`, `[folder-name].spec.js`.
- If a component has private components, they go in `components` folder inside of a component folder.
- Every component should be exported by name (no default exports).
- Prefer state functional components over class components.
- Every component's props and state should be flow-typed.
- Write tests only when it's necessary.
- Shared reusable components should go into Shared folder.
- Render-prop components and HOCs should go into Enhancers folder.


How to use `Flow` with `React`: [React-Flow documentation](https://flow.org/en/docs/react/components/)

Documentation will be more detailed later on...
