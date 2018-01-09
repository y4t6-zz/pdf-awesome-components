function initCounter() {
  var items = document.querySelectorAll('.c-counter');
  if(items.length) {

    items.forEach(function(el, index, arr) {
      var item = {};
      item.$button = $(el).find('button');
      item.$input = $(el).find('input');

      item.$button.on('click', function(e) {
        e.preventDefault();

        item.count = +item.$input.val();
        item.newCount = item.count;
        var role = $(this).data('role');

        if(role == 'minus') {
          if(item.count > 1) {
            item.newCount = item.count - 1;
          }
        } else if(role == 'plus') {
          item.newCount = item.count + 1;
        }
        item.$input.val(item.newCount);
      })
    });

  }
}
