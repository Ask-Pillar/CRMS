const roomDB = [
  {
    roomid: '1',
    address: '1-101',
    table: '100',
    chair: '100',
    project: '1',
    microphone: '1',
    computer: '1',
    number: '100',
    state: '30',
    forbidRemove: false,
    showRemoveButton: true
  },
  {
    roomid: '1',
    address: '1-101',
    table: '100',
    chair: '100',
    project: '1',
    microphone: '1',
    computer: '1',
    number: '100',
    state: '30',
    forbidRemove: false,
    showRemoveButton: true
  },
  {
    roomid: '1',
    address: '1-101',
    table: '100',
    chair: '100',
    project: '1',
    microphone: '1',
    computer: '1',
    number: '100',
    state: '30',
    forbidRemove: false,
    showRemoveButton: true
  }
]

export default [
  {
    path: '/api/getroom',
    method: 'get',
    handle () {
      return {
        code: 0,
        msg: '获取数据成功',
        data: {
          list: roomDB
        }
      }
    }
  }
]
