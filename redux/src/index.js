import {createStore} from "redux"

const ad = document.querySelector(".add")
const minus = document.querySelector(".minus")
const cnt = document.querySelector("h1")

const ADD = "ADD";
const MINUS = "MINUS"

const countModifier = (count = 0,action) =>{
  switch(action.type){
    case ADD:
      return count+1;
    case MINUS:
      return count-1;
    default:
      return count;
  }
}

const countStore = createStore(countModifier);

const onChange = () =>{
  cnt.innerText = countStore.getState();
}
countStore.subscribe(onChange)


const plus = () =>{
  countStore.dispatch({type:ADD});
}

const subtract = () =>{
  countStore.dispatch({type:MINUS});
}

ad.addEventListener("click",plus)
minus.addEventListener("click",subtract)

