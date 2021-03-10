export const initialState = {
  isOpen: false,
  url: '',
};
const print = console.log('inside reducer');

export function reducer(state, { type, url }) {
  switch (type) {
    case 'SET_OPEN':
      return {
        ...state,
        isOpen: true,
        url,
        print
      };
    case 'SET_CLOSE':
      return {
        ...state,
        isOpen: false,
        url: '',
      };
    default: {
      throw new Error(`Unsupported action type: ${type}`);
    }
  }
}
