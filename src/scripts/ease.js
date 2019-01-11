
$(() => {

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

  $('.animate-onclick').click(function () {
      reanimate(this);
  })
});
