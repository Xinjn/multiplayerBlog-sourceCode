function friendlyDate(dateStr) {
  let dateObj = typeof dateStr === 'object' ? dateStr : new Date(dateStr) //dateStr必须是对象
  //参数转换成毫秒
  let time = dateObj.getTime()
  //当前时间转换成毫秒
  let now = new Date().getTime() //new Date().getTime() === Date.now()
  //计算两者时间间隔
  let space = now - time
  //最终显示
  let str = ''
  switch (true) {
    case space < 60000 : //小于1分钟
        str = '刚刚'
      break;
    case space < 3600*1000 : //小于1小时
        str = Math.floor(space/60000)+'分钟前'
      break;
    case space < 24*3600*1000 : //小于1天
        str = Math.floor(space/(3600*1000))+'小时前'
      break;
    default: //其他情况
        str = Math.floor(space/(24*3600*1000))+'天前'
      break;
  }
  return str

}
export default {
  install(Vue, options) {
    Vue.prototype.friendlyDate = friendlyDate
  }
}