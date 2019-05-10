$('.ml6 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    
    targets: '.ml6 .letter',
    translateY: ["3.1em", 0],
    translateZ: 0,
     easing: "easeOutExpo",
    duration: 500,
    delay: function(el, i) {
      return 50 * i;
    }
  })
    .add({
    targets: '.ml6',
    opacity: 0,
    duration: 100,
    easing: "easeOutExpo",
    delay: 1000
  });