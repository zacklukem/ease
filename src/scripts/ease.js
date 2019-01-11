
$(() => {

  let n = 0;

  const activeSelector = 'ease-active';

  function reanimate(element) {
      let e = $(element);
      if (e.hasClass(activeSelector)) {
        let copy = e.clone(true);
        e.before(copy);
        e.remove();
      }
      else {
        e.addClass(activeSelector);
      }
  }

  function animate(element) {
    let e = $(element);
    e.addClass(activeSelector);
  }

  $('.animate-onclick').click(function () {
      reanimate(this);
  });

  $('.animate-onvisible').each(function (i, obj) {
    const jObj = $(obj);
    const top_of_element = jObj.offset().top;
    const bottom_of_element = jObj.offset().top + jObj.outerHeight();
    const bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    const top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
      animate(obj);
    }
  });

  $(window).scroll(function() {
    $('.animate-onvisible').each(function (i, obj) {
      const jObj = $(obj);
      const top_of_element = jObj.offset().top;
      const bottom_of_element = jObj.offset().top + jObj.outerHeight();
      const bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
      const top_of_screen = $(window).scrollTop();

      if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        animate(obj);
      }
    });
  });

});
