const circle = document.querySelector('#circle')

window.addEventListener('mousemove', (e) => {
  let xPos = e.pageX
  let yPos = e.pageY

  setTimeout(() => {
    circle.style.top = `${yPos}px`
    circle.style.left = `${xPos}px`
  }, 100);

})

$('#hero h1').textillate({
  in: {
    effect: 'fadeInUp'
  },
  out: {
    effect: 'fadeOutRight'
  },
  loop: true
})

$('#down #text h3').textillate({
  autoStart: false,
  in: {
    effect: 'fadeInUp',
    delay: 5,
  },
  callback: function() {
    gsap.fromTo('#down #text img', {
      opacity: 0,
      y: -30,
      duration: 2,
      ease: 'Expo.easeInOut'
    }, {
      opacity: 1,
      y: 0
    })
  }
})

gsap.to('.fader', {
  scrollTrigger: {
    trigger: '#down',
    start: 'top 5%',
    toggleActions: 'play pause resume reverse'
  },
  opacity: 0,
  y: -100,
  stagger: .3,
  duration: 2, 
  onComplete: function() {
    $('#down #text h3').textillate('start')
  }
})

