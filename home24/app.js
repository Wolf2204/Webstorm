var element = $('#myElement');

$.ajax({
    type: 'GET',
    url: 'http://www.nbrb.by/API/ExRates/Currencies/'
}).done(function (currencies) {

    currencies.forEach(function (currency) {
        var option = $('<option>');
        option.attr('value', currency.Cur_Abbreviation);
        option.text(currency.Cur_Name);


        element.append(option);


    });


    var element1 = document.querySelector('#myElement');
    console.log(element1);

    result(element1);
    element1.addEventListener('change', function () {

        result(element1);




    });

});
var input = document.querySelector('#value');
var div = $('.diva');

function result (element1) {
    var _this = element1.value;
    $.ajax({
        type: 'GET',
        url: 'http://www.nbrb.by/API/ExRates/Rates/' + _this + '?ParamMode=2'
    }).done(function (response) {
        var txt = ('.abc');
        $(txt).text(_this);
        console.log(response);
        var a = Number(response.Cur_OfficialRate);
        var b = Number(response.Cur_Scale);
        input.addEventListener('input', function () {
                var d = input.value * b / a;
                $(div).text(d.toFixed(2));
            }
        );

    });
}







