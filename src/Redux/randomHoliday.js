const initialState = {};

const randomHolidayReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_RANDOM_HOLIDAY':
      return {
        ...state,
        holiday: action.holiday,
      };
    default:
      return { ...state };
  }
};

export default randomHolidayReducer;

const randomHolidayAC = () => ({
  type: 'GET_RANDOM_HOLIDAY',
  holiday: Math.floor(Math.random() * 10),
});

export {
  randomHolidayAC,
};
