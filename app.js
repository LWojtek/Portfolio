const me = document.querySelector('#Vector_4');
const leftArm = document.querySelector('.left-arm');
const rightArm = document.querySelector('.right-arm');
const head = document.querySelector('.head');
const leftPlant = document.querySelector('.left-plant');
const rightPlant = document.querySelector('.right-plant');
const clockArrow = document.querySelector('.clock-arrow')






me.addEventListener('mouseover', () => {
      if (leftArm.classList.contains('left-arm-stop')) {
            leftArm.classList.remove('left-arm-stop')

      } else {
            leftArm.classList.add('left-arm-stop')

      }

      if (rightArm.classList.contains('right-arm-stop')) {
            rightArm.classList.remove('right-arm-stop')

      } else {
            rightArm.classList.add('right-arm-stop')

      }


})

// navigation physX

const {
      styler,
      spring,
      listen,
      pointer,
      value
} = window.popmotion;

const ball = document.querySelector('.brand');
const divStyler = styler(ball);
const ballXY = value({
      x: 0,
      y: 0
}, divStyler.set);

listen(ball, 'mousedown touchstart')
      .start((e) => {
            e.preventDefault();
            pointer(ballXY.get()).start(ballXY);
      });

listen(document, 'mouseup touchend')
      .start(() => {
            spring({
                  from: ballXY.get(),
                  velocity: ballXY.getVelocity(),
                  to: {
                        x: 0,
                        y: 0
                  },
                  stiffness: 200,
                  mass: 1,
                  damping: 10,
            }).start(ballXY);
      });