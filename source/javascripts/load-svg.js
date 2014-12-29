(function() {

  function init() {

    $('[data-load-svg]').each(function() {
      var el = $(this),
          src = $(this).data('load-svg');

      $.get(src, function(data) {
        el.append(data.documentElement);
      });

    });
  }

  $(document).ready(init);

})();