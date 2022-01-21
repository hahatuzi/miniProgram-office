/*
 * 计算时间差
 * start: String:'yyyy-mm-dd hh:mm:ss'
 * end: String:'yyyy-mm-dd hh:mm:ss'
 */
export const diffTime = function (start,end) {
  const start_time = new Date(start)
  const end_time = new Date(end)
  const difftime = (end_time - start_time)/1000
  const days = parseInt(difftime/86400)
  const hours = parseInt(difftime/3600)-24*days
  const minutes = parseInt(difftime%3600/60)
  const seconds = parseInt(difftime%60)
  let returnStr = ''
  if(minutes>0) {
    returnStr = minutes + "分钟"
  }
  if(hours>0) {
    returnStr = hours + "小时"
  }
  if(days>0) {
    returnStr = days + "天"
  }
  return returnStr
}
export const week = function (day) {
  let res = ''
  switch (day){
    case 1:
      res = '星期一'
      break
    case 2:
      res = '星期二'
      break
    case 3:
      res = '星期三'
      break
    case 4:
      res = '星期四'
      break
    case 5:
      res = '星期五'
      break
    case 6:
      res = '星期六'
      break
    case 7:
      res = '星期日'
  }
  return res
}