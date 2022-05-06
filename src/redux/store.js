import { createStore } from "redux";
import reducers from "./reducers";
// import { saveState } from "./saveState";
const store = createStore (
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// store.subscribe( function () {
//     saveState(store.getState())
//   })
export default store