
$(() => {

  const activeSelector = 'ease-active';

  function reanimate(element) {
      let e = $(element);

      if (e.hasClass(activeSelector)) {
          let copy = e.clone(true);
          e.before(copy);
          e.remove();
          return copy;
      }
      else {
          e.addClass(activeSelector);
          return e;
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

  $('.animate-onenter').each(function (i, obj) {
    const jObj = $(obj);
    const top_of_element = jObj.offset().top;
    const bottom_of_element = jObj.offset().top + jObj.outerHeight();
    const bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    const top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
      jObj.attr('data-visible', 'true');
    }
    else {
      jObj.attr('data-visible', 'false');
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

      $('.animate-onenter').each(function (i, obj) {
          let jObj = $(obj);
          const top_of_element = jObj.offset().top;
          const bottom_of_element = jObj.offset().top + jObj.outerHeight();
          const bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
          const top_of_screen = $(window).scrollTop();

          if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
            if (jObj.attr('data-visible') === 'false')
              jObj = reanimate(obj);
            jObj.attr("data-visible", "true");
          }
          else {
            jObj.attr("data-visible", "false");
          }
      });

    });

});
