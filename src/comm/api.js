let mileStoneDomain =  'http://192.168.8.202:8080'
let ucDomain = 'http://127.0.0.1:9090'

module.exports = {
  wxLogin: ucDomain + '/Login/thirdLogin',
  flagList: mileStoneDomain + '/flag/list',
  addFlag: mileStoneDomain + '/flag/add',
  taskList: mileStoneDomain + '/task/all',
  taskCheckIn: mileStoneDomain + '/flag/checkIn'
}
