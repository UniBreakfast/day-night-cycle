const numberOfStars = 900
const maxDayNightCycleDuration = 600 //seconds

for (let i = 0; i < numberOfStars; i++) addStar()

dayNightScene.onmousemove = ({y, movementX, movementY}) => {
  if (movementX**2 > movementY**2) return

  clearTimeout(dayNightScene.timer)

  if (y < innerHeight / 8) {
    dayNightScene.timer =
      setTimeout(changeCycleDuration, 500, y / innerHeight)
  } else {
    changeCycleDuration(y / innerHeight)
  }
}

function changeCycleDuration(multiplier) {
  dayNightScene.style.setProperty('--day-duration', (multiplier * maxDayNightCycleDuration || 1) +'s')
}

function addStar() {
  const star = document.createElement('div')
  const size = rnd(0.03, 0.2)
  const left = rnd(0, 100) + 'vmax'
  const top = rnd(0, 100) + 'vmax'
  const boxShadow = `white 0 0 ${size*30}vw ${size*1.4}vw`
  star.className = 'star'
  Object.assign(star.style, {width: size+'vw', height: size+'vw', left, top, boxShadow})
  stars.append(star)
}

function rnd(min, max) {
  return Math.random() * (max - min) + min
}
