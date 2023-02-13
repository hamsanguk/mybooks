//여러개의 reducer module을 합칠수 있는 루트 reducer

import {combineReducers} from 'redux'; //정확한 이름으로 부른다 {여기는}
import auth from './auth'; //export default 로 하나밖에 없어 내맘대로 이름정함 원래는 reducer

const reducer = combineReducers({
    auth,
});

export default reducer; 



