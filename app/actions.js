export function changeFilter(filter = 'all') {
  return { type: 'FILTER@SET', filter };
}

export function findAllCompleteDogs(data) {
  return { type: 'DOG@FINDALL_COMPLETE', data };
}

export function findAllCompleteCats(data) {
  return { type: 'CAT@FINDALL_COMPLETE', data };
}

export function findAllDogs() {
  /**
   * A thunk that searches for all doggos
   * @param  {Function} next store.dispatch
   * @return {undefined}
   */
  return (next) => {
    fetch('http://tiny-tn.herokuapp.com/collections/cute-doggos')
      .then(r => r.json())
      .then((data) => {
        next(findAllCompleteDogs(data));
      });
  };
}

export function findAllCats() {
  /**
   * A thunk that searches for all cats
   * @param  {Function} next store.dispatch
   * @return {undefined}
   */
  return (next) => {
    fetch('http://tiny-tn.herokuapp.com/collections/cute-cats')
      .then(r => r.json())
      .then((data) => {
        next(findAllCompleteCats(data));
      });
  };
}

export function changeDetail(animal) {
  return { type: 'DETAIL@SET', data: animal };
}
