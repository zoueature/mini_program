let mileStoneDomain =  'http://192.168.8.202:8080'
let ucDomain = 'http://127.0.0.1:9090'

//mileStoneDomain = 'http://127.0.0.1:8080'

module.exports = {
  //user
  wxLogin: ucDomain + '/Login/thirdLogin',
  getUserInfo: mileStoneDomain + '/user/info',
  //flag
  flagList: mileStoneDomain + '/flag/list',
  addFlag: mileStoneDomain + '/flag/add',
  taskCheckIn: mileStoneDomain + '/flag/checkIn',
  //task
  taskList: mileStoneDomain + '/task/all',
  cateRemove: mileStoneDomain + '/category/remove'
}
