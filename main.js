

// SmoothScroll Script
const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 750
});

// (function(){

//     var documentElem = $(document),
//         nav = $('.navbar'),
//         lastScrollTop = 0;

//     documentElem.on('scroll', function() {
//       var currentScrollTop = $(this).scrollTop();

//       //scroll down
//       if (currentScrollTop > lastScrollTop) nav.addClass('hidden');
//       //scroll up
//       else nav.removeClass('hidden');

//       lastScrollTop = currentScrollTop;
//     });

// })();