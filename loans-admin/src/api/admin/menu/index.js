import fetch from 'utils/fetch';

export function fetchTree(query) {
  return fetch({
    url: '/web/menu/tree',
    method: 'get',
    params: query
  });
}

export function fetchAll() {
  return fetch({
    url: '/web/menu/all',
    method: 'get'
  });
}
export function addObj(obj) {
  return fetch({
    url: '/web/menu',
    method: 'post',
    data: obj
  });
}

export function getObj(id) {
  return fetch({
    url: '/web/menu/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return fetch({
    url: '/web/menu/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return fetch({
    url: '/web/menu',
    method: 'put',
    data: obj
  })
}
