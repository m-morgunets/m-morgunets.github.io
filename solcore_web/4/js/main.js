$('.bell__btn').click(sendRequest);

function sendRequest() {
  const server = "34.107.23.251:80"
  var name = document.getElementById("name").value;
  var contactData = document.getElementById("contact").value;

  if (name == "" || contactData == "") {
    return;
  }

  try {

    var http = new XMLHttpRequest();
    http.open("GET", "https://" + server + "/incoming?name=" + name + "&contact=" + contactData);
    http.send();

  } catch (error) {

    alert("Произошла ошибка: " + error)

  }
}


$(function () {

  $('input#contact').mask("+7(999)999-99-99");

  $('.burger-btn').click(function () {
    $(this).toggleClass('active');
    $('.menu').toggleClass('active');
  })

  function PopUp(btn, popup) {
    $(btn).click(function () {
      $(popup).fadeIn();
      return false;
    });

    $('.popup-close').click(function () {
      $(this).parents(popup).fadeOut();
      return false;
    });

    $(document).keydown(function (e) {
      if (e.keyCode === 27) {
        e.stopPropagation();
        $(popup).fadeOut();
      }
    });

    $(popup).click(function (e) {
      if ($(e.target).closest('.bell-inner').length == 0) {
        $(this).fadeOut();
      }
    });
  }
  PopUp('.orderbutton', '.popup');


});
