import {getMyCourse, getAllCourse, enrollment} from '../actions/CourseActions';
import {getGrade, getAssignment} from '../actions/assignmentGrades';
const initialState = {
  Assignment: [],
  MyCourse: {},
  enrolled: {},
  AllCourse: {},
  Task: [],
  Grade: [],
};

const ComponentReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case enrollment:
      return {
        ...state,
        enrolled: action.payload,
      };
    case getMyCourse:
      return {
        ...state,
        MyCourse: action.payload,
      };
    case getAllCourse:
      return {
        ...state,
        AllCourse: action.payload,
      };

    default:
      return state;
  }
};

export default ComponentReducer;
