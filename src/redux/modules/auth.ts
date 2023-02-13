//인증을 관리하는곳
import {createActions,handleActions} from 'redux-actions';
//import {handleActions} from 'redux-actions';

interface AuthState{
    token:string|null;
    loading:boolean;
    error:Error|null;
}

const initialState:AuthState={//초기값
    token:null,
    loading:false,
    error:null,
};

const prefix = 'my-books/auth';

export const {pending,success,fail}= createActions(
    'PENDING',
    'SUCCESS',
    'FAIL',
    {prefix}
    );

const reducer = handleActions<AuthState,string>(
   {
    PENDING:(state)=>({
        ...state,
        loading:true,
        error:null,
    }),
    SUCCESS:(state,action)=>({
        token: action.payload,
        loading:false,
        error:null,
    }),
    FAIL:(state,action:any)=>({
        ...state,
        loading:false,
        error:action.payload
    }),
},
initialState,
{prefix}
)

export default reducer;

//saga
export function* authSaga(){
    //auth sideEffect이 일어나는 여러로직
}

