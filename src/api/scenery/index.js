import request from '../../utils/http';

export function queryAllScenery() {
  return request('/scenery');
}
