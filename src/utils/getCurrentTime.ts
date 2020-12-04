
export default function getCurrentTime() {
  const dateTime = new Date()
  const h = dateTime.getHours() < 10 ? `0${dateTime.getHours()}` : dateTime.getHours(); // 0 - 23
  const m = dateTime.getMinutes() < 10 ? `0${dateTime.getMinutes()}` : dateTime.getMinutes(); // 0 - 59

  return `${h}:${m}`
}