import { combineReducers } from 'redux';

function dogs(state = [], action) {
  switch (action.type) {
    case 'DOG@FINDALL_COMPLETE':
      return action.data;
    default:
      return state;
  }
}

function cats(state = [], action) {
  switch (action.type) {
    case 'CAT@FINDALL_COMPLETE':
      return action.data;
    default:
      return state;
  }
}

function detail(state = null, action) {
  switch (action.type) {
    case 'DETAIL@SET':
      return action.data;
    default:
      return state;
  }
}

function filter(state = 'all', action) {
  switch (action.type) {
    case 'FILTER@SET':
      return action.filter;
    default:
      return state;
  }
}

export default combineReducers({
  dogs,
  cats,
  filter,
  detail,
});
