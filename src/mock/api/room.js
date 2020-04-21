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
    state: '可用',
    forbidRemove: false,
    showRemoveButton: true
  },
  {
    roomid: '2',
    address: '1-102',
    table: '10',
    chair: '10',
    project: '1',
    microphone: '1',
    computer: '1',
    number: '10',
    state: '可用',
    forbidRemove: false,
    showRemoveButton: true
  },
  {
    roomid: '3',
    address: '1-103',
    table: '20',
    chair: '20',
    project: '1',
    microphone: '1',
    computer: '1',
    number: '30',
    state: '可用',
    forbidRemove: false,
    showRemoveButton: true
  },
  {
    roomid: '4',
    address: '2-303',
    table: '20',
    chair: '20',
    project: '1',
    microphone: '1',
    computer: '1',
    number: '30',
    state: '有会议',
    forbidRemove: false,
    showRemoveButton: true
  },
  {
    roomid: '5',
    address: '2-306',
    table: '10',
    chair: '20',
    project: '1',
    microphone: '1',
    computer: '1',
    number: '20',
    state: '可用',
    forbidRemove: false,
    showRemoveButton: true
  },
  {
    roomid: '6',
    address: '2-307',
    table: '10',
    chair: '20',
    project: '1',
    microphone: '1',
    computer: '1',
    number: '20',
    state: '可用',
    forbidRemove: false,
    showRemoveButton: true
  },
  {
    roomid: '7',
    address: '3-301',
    table: '10',
    chair: '15',
    project: '1',
    microphone: '1',
    computer: '1',
    number: '15',
    state: '可用',
    forbidRemove: false,
    showRemoveButton: true
  },
  {
    roomid: '8',
    address: '3-301',
    table: '6',
    chair: '15',
    project: '1',
    microphone: '1',
    computer: '1',
    number: '15',
    state: '维修中',
    forbidRemove: false,
    showRemoveButton: true
  }
]

export default [
  {
    path: '/api/getroom',
    method: 'get',
    getroom () {
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
