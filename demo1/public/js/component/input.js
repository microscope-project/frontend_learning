(function () {
  var Input = {
    template: '#input-bind-template',
    data() {
      return {
        message: 'Hello World'
      }
    }
  };
  if (typeof Demo === 'undefined') window.Demo = {};
  Demo.InputComponent = Input;
})();