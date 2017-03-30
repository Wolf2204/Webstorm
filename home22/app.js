function createCurrencyList(list) {
    var select = document.createElement('select');

    list.forEach(function (currency) {
        var option = document.createElement('option');
        option.value = currency.Cur_Abbreviation;
        option.textContent = currency.Cur_Name;
        select.appendChild(option);


    });

    return select;

}

var course;

function makeRequest(params, callback) {
    var xhr = new XMLHttpRequest();

    xhr.open(params.method, params.url, true);
    xhr.responseType = 'json';
    xhr.addEventListener('loadend', function listener() {
        xhr.removeEventListener('loadend', listener);
        course = xhr.response;
        callback(xhr.response);


    });

    xhr.send();

}

function loadCurrencyRate(code, callback) {
    makeRequest({
        method: 'GET',
        url: 'http://www.nbrb.by/API/ExRates/Rates/' + code + '?ParamMode=2'

    }, callback);

}

makeRequest({
    method: 'GET',
    url: 'http://www.nbrb.by/API/ExRates/Currencies'


}, function (list) {
    var select = createCurrencyList(list);

    select.addEventListener('change', function () {
        var currencyCode = select.value;

        loadCurrencyRate(currencyCode, function (rate) {
            console.log(rate);

        });
    });

    document.body.appendChild(select);

});

var inputNumber = document.querySelector('input#value');

inputNumber.addEventListener('input', function () {

    var div = document.createElement('div');
    document.body.appendChild(div);
    div.textContent = result(inputNumber);

});

function result(inputNumber) {
    var a = Number(course.Cur_OfficialRate);
    var b = Number(course.Cur_Scale);
    return (inputNumber.value / a * b);

}






