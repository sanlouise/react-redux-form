//Form component reducer
const initialState = {
  name: '',
  email: '',
  message: ''
};

const formReducer = (state = initialState, action) => {
  switch (action.type){

    default: {
      return state;
    }
  }
}

export default formReducer;
