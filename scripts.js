anime({
    targets: '.box .block',
   translateY: 250,
   direction: 'alternate',
    scale:[
        {value: .1, easing:'easeOutSine',  duration: 1800},
        {value: 1, easing: 'easeInOutQuad', duration: 1800}
    ],
    delay: anime.stagger(300, {grid: [14, 6], from:'center'}),
    loop: true
})