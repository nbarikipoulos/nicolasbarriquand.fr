// The following code is based off modal selector by @airblade
// extended to multi modal from a given section
// source: https://github.com/jgthms/bulma/issues/683

(function() {

  var html = document.querySelector('html');
  var section = html.querySelector('section#projects');
  var nodes = section.querySelectorAll('[modal-button],[target]')
  ;

  var targetIds = Array.from(nodes).map( function(elt) {
    return elt.getAttribute('target');
  });

  var f = function(modalId) {
    //var selector = `div[target=\'${modalId}\']`;
    var selector = 'div[target=\'' + modalId + '\']';
    section.querySelector(selector).addEventListener(
      'click',
      function(event) {
        event.preventDefault();
        var modal = document.querySelector(
          /*`#${modalId}`*/
          '#' + modalId
        );

        modal.classList.add('is-active');
        html.classList.add('is-clipped');
        
        ['.modal-background', 'button.delete'].forEach( function(tgt) {
          modal.querySelector(tgt).addEventListener('click', function(e) {
            e.preventDefault();
            modal.classList.remove('is-active');
            html.classList.remove('is-clipped');
          });
        })
    });
  };

  targetIds.forEach(f);

})();

// The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
(function() {
  var burger = document.querySelector('.burger');

  var menu = document.querySelector('#' + burger.dataset.target);
  burger.addEventListener('click', function() {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
  });
})();

function closeBurger() {
  var burger = document.querySelector('.burger');
  var isOpen = burger.classList.contains('is-active');
  if (isOpen) {
    var menu = document.querySelector('#' + burger.dataset.target);
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  }

}