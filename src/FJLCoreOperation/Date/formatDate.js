/**
 * 格式化时间
 * @param time 时间戳、时间字符串或者时间对象
 * @param format 时间格式
 */
export default function (time, format) {
  // 默认传入的是字符串格式
  let date = new Date(time)
  // 如果传入的日期对象
  if (time instanceof Date) {
    date = time
  }
  let Y = date.getFullYear().toString()
  let M = (date.getMonth() + 1).toString().padStart(2, 0)
  let D = date.getDate().toString().padStart(2, 0)
  let h = date.getHours().toString().padStart(2, 0)
  let m = date.getMinutes().toString().padStart(2, 0)
  let s = date.getSeconds().toString().padStart(2, 0)
  let ms = date.getMilliseconds().toString().padStart(3, 0)
  let dateStr = format.replace(/[A-Za-z]{2}/g, '{}')
  dateStr = dateStr.replace('{}{}', Y)
  dateStr = dateStr.replace('{}', M)
  dateStr = dateStr.replace('{}', D)
  dateStr = dateStr.replace('{}', h)
  dateStr = dateStr.replace('{}', m)
  dateStr = dateStr.replace('{}', s)
  dateStr = dateStr.replace('{}', ms)
  return dateStr
}
