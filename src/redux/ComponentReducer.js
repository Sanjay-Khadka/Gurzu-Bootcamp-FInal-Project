import {getTask, getGrade, getAssignment, getCourse} from './actions';

const initialState = {Assignment: [], Course: [], Task: [], Grade: []};

const ComponentReducer = (state = initialState, action) => {
  switch (action.type) {
    case getTask:
      return {
        ...state,
        Task: action.payload,
      };
    case getGrade:
      return {
        ...state,
        Grade: action.payload,
      };
    case getAssignment:
      return {
        ...state,
        Assignment: action.payload,
      };

    case getCourse:
      return {
        ...state,
        Course: action.payload,
      };

    default:
      return state;
  }
};

export default ComponentReducer;
