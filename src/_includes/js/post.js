window.copyUrl = function () {
  window.navigator.clipboard.writeText(window.location.href);
  alert('Copied to clipboard');
};
