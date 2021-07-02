function loadPopover() {
  clearInterval(id);
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  })
  // var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
  //   trigger: 'focus'
  // })
}

if (window.bootstrap || false) {
  loadPopover();
} else {
  var id = setInterval(function() {
    console.log("Script loaded before bootstrap");
    if (window.bootstrap) {
      clearInterval(id);
      loadPopover();
    }
  }, 500);
}
