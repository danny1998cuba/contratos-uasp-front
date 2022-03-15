function resizeFormContainer() {
  var form = document.querySelector('.form-container form.showing');
  var formContainer = document.querySelector('.form-container');

  if (form != null) {
    formContainer.style.height = form.scrollHeight + 'px';
  }
}

var common = {
  add: function () {

    var form1 = document.getElementById('form1');
    var form2 = document.getElementById('form2');
    var btn_1 = document.getElementById('btn_1');
    var btn_2 = document.getElementById('btn_2');

    form1.style.transform = "translateX(0px)";
    form2.style.transform = "translateX(0px)";

    btn_1.classList.add('form-selected');
    btn_2.classList.remove('form-selected');

    form1.classList.add('showing');
    form2.classList.remove('showing');

    resizeFormContainer();
  },

  mod: function () {

    var form1 = document.getElementById('form1');
    var form2 = document.getElementById('form2');
    var btn_1 = document.getElementById('btn_1');
    var btn_2 = document.getElementById('btn_2');

    form1.style.transform = "translateX(-110%)";
    form2.style.transform = "translateX(-110%)";

    btn_1.classList.remove('form-selected');
    btn_2.classList.add('form-selected');

    form1.classList.remove('showing');
    form2.classList.add('showing');

    resizeFormContainer();
  }
};
