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
});

anime({
    targets: '.block1',
    direction: 'alternate',
    translateX: '900px',
    duration: 2000,
    backgroundColor: '#fff',
    borderRadius:['0%', '50%'],
    easing:'easeInOutQuad',
    loop: true
});

anime({
    targets: '.block2',
    direction: 'alternate',
    duration: 4000,
    translateX: 250,
    scale: 2,
    rotate: '2turn',
    loop: true,
});
