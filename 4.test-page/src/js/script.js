(function() {
  'use strict';
  $(document).ready(function() {

    /* Дата рождения */

    /* Дни */
    var birthplaceInput, checkInput, dayOutput, daysInMonth, fifthDivision, firstDivision, fourthDivision, genderNo, genderYes, i, month, monthOutput, nameInput, navigation, patt, secondDivision, surnameInput, surnameNo, surnameYes, thirdDivision, yearOutput;
    i = 1;
    dayOutput = [];
    while (i <= 30) {
      dayOutput.push("<option>" + i + "</option>");
      i++;
    }
    $('#day').html(dayOutput);
    i = 0;
    month = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
    monthOutput = [];
    while (i < month.length) {
      monthOutput.push("<option>" + month[i] + "</option>");
      i++;
    }
    $('#month').html(monthOutput);

    /* Года */
    i = 1930;

    /*Минимальный год */
    yearOutput = [];

    /*Подразумевается, что на сайте не смогут зарегестировать дети младше 14 лет */
    while (i <= (new Date).getFullYear() - 14) {
      yearOutput.push("<option>" + i + "</option>");
      i++;
    }
    $("#year").html(yearOutput);

    /*Selected год */
    $("#year>option:contains('1970')").prop('selected', true);

    /*Изменение кол-ва дней в зависимости от выбранного месяца */

    /*Функция устанавливающая дни в зависимости от переданного аргумента */
    daysInMonth = function(days) {
      i = 1;
      $("#day").empty();
      dayOutput = [];
      while (i <= days) {
        dayOutput.push("<option>" + i + "</option>");
        i++;
      }
      return $('#day').html(dayOutput);
    };

    /*Кол-во дней в зависимости от выбранного месяца */
    $("#month").change(function() {
      var valSelectedYear;
      switch ($("#month>option:selected").val()) {
        case 'февраль':
          valSelectedYear = $("#year>option:selected").val();
          if (!(valSelectedYear % 4 || valSelectedYear % 100 || valSelectedYear % 400)) {
            return daysInMonth(29);
          } else if (!(valSelectedYear % 4 || valSelectedYear % 100)) {
            return daysInMonth(28);
          } else if (!(valSelectedYear % 4)) {
            return daysInMonth(29);
          } else {
            return daysInMonth(28);
          }
          break;
        case 'январь':
        case 'апрель':
        case 'июнь':
        case 'сентябрь':
        case 'ноябрь':
          return daysInMonth(30);
        default:
          return daysInMonth(31);
      }
    });

    /*Кол-во дней в феврале в зависимости от выбранного года */
    $("#year").change(function() {
      var valSelectedYear;
      switch ($("#month>option:selected").val()) {
        case 'февраль':
          valSelectedYear = $("#year>option:selected").val();
          if (!(valSelectedYear % 4 || valSelectedYear % 100 || valSelectedYear % 400)) {
            return daysInMonth(29);
          } else if (!(valSelectedYear % 4 || valSelectedYear % 100)) {
            return daysInMonth(28);
          } else if (!(valSelectedYear % 4)) {
            return daysInMonth(29);
          } else {
            return daysInMonth(28);
          }
      }
    });

    /* Прогрессбар формы и проверка input */

    /* Inputs */
    surnameInput = $('input[name="surname"]');
    nameInput = $('input[name="name"]');
    birthplaceInput = $('input[name="birthplace"]');

    /* Progressbar */
    firstDivision = $('.progressbar td:first-child>span');
    secondDivision = $('.progressbar td:nth-child(2)>span');
    thirdDivision = $('.progressbar td:nth-child(3)>span');
    fourthDivision = $('.progressbar td:nth-child(4)>span');
    fifthDivision = $('.progressbar td:nth-child(5)>span');
    patt = /^[а-я]/i;

    /*Функция изменения класса в прогрессбаре, в зависимости от изменения содержания input */
    checkInput = function(element, progressbar) {
      progressbar.removeClass();
      element.removeClass();
      if (element.val().length >= 2 && patt.test(element.val())) {
        element.addClass('border--success');
        return progressbar.addClass('progressbar__division--done');
      } else if (element.val() === '') {
        return progressbar.addClass('progressbar__division--not-started');
      } else {
        element.addClass('border--danger');
        return progressbar.addClass('progressbar__division--during');
      }
    };

    /*Запуск функции от событий в input, propertychange для IE8 */
    surnameInput.on("propertychange input", function() {
      return checkInput(surnameInput, firstDivision);
    });
    nameInput.on("propertychange input", function() {
      return checkInput(nameInput, secondDivision);
    });
    birthplaceInput.on("propertychange input", function() {
      return checkInput(birthplaceInput, thirdDivision);
    });

    /*IE 8 */

    /* Birthday */
    surnameYes = $('label[for="change-surname--yes"]');
    surnameNo = $('label[for="change-surname--no"]');

    /*Так как в IE8 не работает псевдокласс checked пришлось добавлять и удалять класс тут */
    $('#change-surname--no').prop('checked', true);
    surnameNo.addClass('bg--select');
    surnameYes.on('click', function() {
      surnameNo.removeClass();
      return surnameYes.addClass('bg--select');
    });
    surnameNo.on('click', function() {
      surnameYes.removeClass();
      return surnameNo.addClass('bg--select');
    });

    /* Gender */
    genderYes = $('label[for="gender--yes"]');
    genderNo = $('label[for="gender--no"]');

    /*Так как в IE8 не работает псевдокласс checked пришлось добавлять и удалять класс тут */
    $('#gender--yes').prop('checked', true);
    genderYes.addClass('bg--select');
    genderYes.on('click', function() {
      genderNo.removeClass();
      return genderYes.addClass('bg--select');
    });
    genderNo.on('click', function() {
      genderYes.removeClass();
      return genderNo.addClass('bg--select');
    });

    /*Burger */
    navigation = $('.navigation');
    $('#burger').on('click', function() {
      return navigation.toggleClass('hide');
    });

    /*Возможна ситуация когда экран был сжат до минимум, нажата кнопка бургера, так образом навигационная панель была спрятана, а потом экран расширен, так образом без данной инструкции и без повторного сжимания окна до мин размеров будет не возможно восстановить меню */
    return $(window).on('resize', function() {
      if ($(window).width() >= 688) {
        return navigation.removeClass('hide');
      }
    });
  });

}).call(this);
