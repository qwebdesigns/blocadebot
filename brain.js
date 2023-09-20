// https://script.google.com/macros/s/AKfycbwshzH6ORiJH-B4c85In07loYYJyhVeI7ErgvoCHLW_wianluuqc4awwlUA4quEUrTj/exec
(function () {
    $(".g-form").submit(function (event) {
        event.preventDefault();

        // Ссылка, которую получили на этапе публикации приложения
        let appLink = "https://script.google.com/macros/s/AKfycbwshzH6ORiJH-B4c85In07loYYJyhVeI7ErgvoCHLW_wianluuqc4awwlUA4quEUrTj/exec";

        // Сообщение при успешной отправке данных
       // let successRespond = 'Сообщение успешно отправлено. Посмотрите результат <a target="_blank" href="https://docs.google.com/spreadsheets/d/1rKOvsheNbwC63USkIMlIKhz-DP_XkYCMZpns6p9uHRg/edit#gid=0">тут</a>';

        // Сообщение при ошибке в отправке данных
       // let errorRespond = 'Не удалось отправить сообщение. Cвяжитесь с администратором сайта по адресу <a href="mailto:smart-landing@ya.ru">smart-landing@ya.ru</a>';

        // Id текущей формы
        let form = $('#' + $(this).attr('id'))[0];

        // h2 с ответом формы
       // let formRespond = $(this).find('.g-form__title_respond');

        // h2 с заголовком формы
      //  let formTitle = $(this).find('.g-form__title_main');

        // Блок прелоадера
       // let preloader = $(this).find('.g-form__preloader');

        // Кнопка отправки формы
        let submitButton = $(this).find('.g-form__button');


        // FormData
        let fd = new FormData(form);


        $.ajax({

            url: appLink,
            type: "POST",
            data: fd,
            processData: false,
            contentType: false,
            beforeSend: function () {

                if (fd.get('honeypot').length) {
                    return false;
                } else {
                    fd.delete('honeypot');
                }

                // Показываем прелоадер
                //preloader.css('opacity', '1');

                // Делаем неактивной кнопку отправки
                submitButton.prop('disabled', true);

                // валидация других полей.

            },

        }).done(function (res, textStatus, jqXHR) {

            if (jqXHR.readyState === 4 && jqXHR.status === 200) {

                // Прячем заголовок формы
                //formTitle.css({
                //    'display': 'none'
                //});

                // Прячем прелоадер
                //preloader.css('opacity', '0');

                // Выводим ответ формы.
                //formRespond.html(successRespond).css('color', '#37b599');

                // Возвращаем активность кнопке отправки
                submitButton.prop('disabled', false);

                // Очищаем поля формы
                form.reset();
                alert('Ваша учетная запись почти зарегистрирована. Она ожидает проверки и активации со стороны администрации. Пожалуйста, ожидайте. Вам будет отправлено уведомление от бота, когда процесс будет завершен.')

            } else {
                //formTitle.css({
                //    'display': 'none'
                //});
                //formRespond.html(errorRespond).css('color', '#c64b4b');
                //preloader.css('opacity', '0');
                setTimeout(() => {
                    //formRespond.css({
                    //    'display': 'none'
                    //});
                    //formTitle.css({
                    //    'display': 'block'
                    //});

                    submitButton.prop('disabled', false);
                }, 5000);

                console.log('Гугл не ответил статусом 200');
            }
        }).fail(function (res, textStatus, jqXHR) {
            //formTitle.css({
            //    'display': 'none'
            //});
            //preloader.css('opacity', '0');
            //formRespond.html('Не удалось отправить сообщение. Cвяжитесь с администратором сайта другим способом').css('color', '#c64b4b');
            setTimeout(() => {
                //formRespond.css({
                //    'display': 'none'
                //});
                //formTitle.css({
                //    'display': 'block'
                //});
                submitButton.prop('disabled', false);
            }, 5000);

            console.log('Не удалось выполнить запрос по указанному в скрипте пути');
        });
    });
}(jQuery));



const options = {
    method: 'GET'
};
var jsonDataDirty;
const url = "https://ipgeolocation.abstractapi.com/v1/?api_key=b1f2f86d7fd44bc3a036bc89c353e185";

fetch(url)
    .then(response => response.json())
    .then(data => {
        jsonDataDirty = data;
        //console.log('jsonDataDirty:', jsonDataDirty);
        if (jsonDataDirty) {
            beautifulJson(jsonDataDirty);
        }
    })
    .catch(err => console.error(err));


//console.warn(jsonDataDirty.city);
/*
const jsondirty = {
    "ip_address": "80.94.250.0",
    "city": "Tiraspol",
    "city_geoname_id": 617239,
    "region": "Transnistria",
    "region_iso_code": "SN",
    "region_geoname_id": 858889,
    "postal_code": "MD-3300",
    "country": "Moldova",
    "country_code": "MD",
    "country_geoname_id": 617790,
    "country_is_eu": false,
    "continent": "Europe",
    "continent_code": "EU",
    "continent_geoname_id": 6255148,
    "longitude": 29.6351,
    "latitude": 46.8411,
    "security": {
        "is_vpn": false
    },
    "timezone": {
        "name": "Europe/Chisinau",
        "abbreviation": "EEST",
        "gmt_offset": 3,
        "current_time": "12:22:12",
        "is_dst": true
    },
    "flag": {
        "emoji": "🇲🇩",
        "unicode": "U+1F1F2 U+1F1E9",
        "png": "https://static.abstractapi.com/country-flags/MD_flag.png",
        "svg": "https://static.abstractapi.com/country-flags/MD_flag.svg"
    },
    "currency": {
        "currency_name": "Leu",
        "currency_code": "MDL"
    },
    "connection": {
        "autonomous_system_number": 1547,
        "autonomous_system_organization": "Societatea mixta pe actiuni de tip inchis Interdnestrcom",
        "connection_type": "Corporate",
        "isp_name": "JSCC Interdnestrcom",
        "organization_name": null
    }
};
*/


function formatSecurity(jsonData) {
    return `VPN: ${jsonData.is_vpn ? 'Да' : 'Нет'}`;
}

function formatTimezone(jsonData) {
    return `Регион: ${jsonData.name}   Часовой регион: ${jsonData.abbreviation}   Текущее время: ${jsonData.current_time}`;
}


function formatCurrency(jsonData) {
    return `Название валюты: ${jsonData.currency_name}   Код валюты: ${jsonData.currency_code}`;
}

function formatConnection(jsonData) {
    return `AS Number: ${jsonData.autonomous_system_number}   AS Organization: ${jsonData.autonomous_system_organization}`;
}

function formatMainData(jsonData) {
    return `IP Address: ${jsonData.ip_address}   Город: ${jsonData.city}   Почтовый индекс: ${jsonData.postal_code}    Регион: ${jsonData.region}   Регион геоАйди: ${jsonData.region_geoname_id}   Страна: ${jsonData.country}   longitude: ${jsonData.longitude}   latitude: ${jsonData.latitude}`;
}

function beautifulJson(jsonBigDataDirty) {
    const security = formatSecurity(jsonBigDataDirty.security);
    const timezone = formatTimezone(jsonBigDataDirty.timezone);
    const currency = formatCurrency(jsonBigDataDirty.currency);
    const connection = formatConnection(jsonBigDataDirty.connection);
    const main_data = formatMainData(jsonBigDataDirty);
    //console.log("Security:", security);
    //console.log("Timezone:", timezone);
    //console.log("Currency:", currency);
    //console.log("Connection:", connection);
    //console.log("Main Data:", main_data);

    // Получите ссылки на элементы input
    const inputElement_security = document.querySelector('input[name="VPN"]');
    const inputElement_timezone = document.querySelector('input[name="Часовая Зона"]');
    const inputElement_currency = document.querySelector('input[name="Валюта региона"]');
    const inputElement_connection = document.querySelector('input[name="Подключение"]');
    const inputElement_main_data = document.querySelector('input[name="MainData"]');

    // Установите значения полей ввода
    inputElement_security.value = security;
    inputElement_timezone.value = timezone;
    inputElement_currency.value = currency;
    inputElement_connection.value = connection;
    inputElement_main_data.value = main_data;
}

// Вызовите функцию, когда страница будет загружена
document.addEventListener('DOMContentLoaded', function () {
    // Пример JSON-данных для тестирования
    const jsonBigDataDirty = {
        // Ваши данные здесь
    };

    // Вызовите функцию beautifulJson с вашими данными
    beautifulJson(jsonBigDataDirty);
});




function needaftarization(obj) {
    alert('Ваш пользовательский аккаунт ожидает активации или не существует.\nПожалуйста, ожидайте подтверждения учётной записи со стороны администрации. Как только это будет завершено, вам будет отправлено уведомление от бота.');
}