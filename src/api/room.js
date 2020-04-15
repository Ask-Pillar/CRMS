import request from '@/plugin/axios'

export function getroom (data) {
  return request({
    url: '/getroom',
    method: 'get',
    data
  })
}
