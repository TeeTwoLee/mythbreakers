function setupBootstrap() {
  clearInterval(id);
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  })
  // var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
  //   trigger: 'focus'
  // })

  var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
  var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
    return new bootstrap.Dropdown(dropdownToggleEl)
  })
}

if (window.bootstrap || false) {
  setupBootstrap();
} else {
  var id = setInterval(function() {
    console.log("Script loaded before bootstrap");
    if (window.bootstrap) {
      clearInterval(id);
      setupBootstrap();
    }
  }, 500);
}
