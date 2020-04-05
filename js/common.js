
var appName = [
    'Calender & Memo',
    'Icon 3x3',
    'Color Picker Demo',
    '???',
];
var keyword = [
    ['widget', 'list calendar', 'grid calendar'],
    ['widget', 'shortcut icon', '3x3', '3x1', '2x2'],
    ['library', 'github'],
    ['game', 'puzzle', 'kill time'],
];
var historyCalendarAndMemo = [
    'v1.1.5',
    '- added wrap text setting of list calendar',
    'v1.1.4',
    '- added show/hide grid setting of grid calendar',
    'v1.1.3',
    '- changed that list calendar marks today\'s date',
    'v1.1.2',
    '- added header layout setting',
    'v1.1.1',
    '- changed that you can register up to three plans a day',
    '- adjusted badge size setting of grid calendar',
    'v1.1.0',
    '- added badge size setting of grid calendar',
    'v1.0.16',
    '- added blue saturday setting',
    '- adjusted badge color of grid calendar',
    'v1.0.15',
    '- added day of week language setting (English or local language)',
    '- bug fix about background color setting dialog in 4.4 and under device',
    '- changed timing to show review button',
    '- adjusted layout',
    'v1.0.14',
    '- added font size "tiny"',
    '- added background color setting',
    'v1.0.12',
    '- changed timing to get public holidays data',
    '- added background opacity setting',
    'v1.0.11',
    '- bug fix',
    '- added review button',
    'v1.0.10',
    '- renewal of settings',
    '- added schedule badge function to grid calendar',
    '- adjusted font size of grid calendar',
    '- adjusted widget minimum size',
    'v1.0.9',
    '- supported grid calendar',
    '- supported switching between list calendar and grid calendar',
    '- added new font colors',
    '- adjusted layout',
];
var historyCalendarAndMemoBlack = [
    'v1.0.5',
    '- added wrap text setting of list calendar',
    'v1.0.4',
    '- added show/hide grid setting of grid calendar',
    'v1.0.3',
    '- changed that list calendar marks today\'s date',
    'v1.0.2',
    '- added header layout setting',
    'v1.0.1',
    '- changed that you can register up to three plans a day',
    '- adjusted badge size setting of grid calendar',
    'v1.0.0',
    '- release',
];
var historyIcon3x3 = [
];

function initToTopButton() {

    var toTopBtn = $('.common-button-to-top');
    toTopBtn.hide();
    toTopBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            toTopBtn.fadeIn();
        } else {
            toTopBtn.fadeOut();
        }
    });
}

function generateSpeed() {
    var items = [5000, 5250, 5500, 5750, 6000, 6250, 6500, 6750];
    var index = Math.floor(Math.random() * items.length);
    return items[index];
}

function downloadCanedarAndMemoBlack() {
    window.location.href = './app/calendar_and_memo/SimpleScheduleWidgetBlack_v1.0.5_1920020123.apk';
}

var isLoadedCalendarAndMemoSlick = false;

function stopCalendarAndMemoSlick() {
    if (isLoadedCalendarAndMemoSlick)
        $('#calendar-and-memo').find('.thumbnail').slick('slickPause');
}

function startCalendarAndMemoSlick() {

    if (!isLoadedCalendarAndMemoSlick) {
        isLoadedCalendarAndMemoSlick = true;

        $('#calendar-and-memo').find('.thumbnail').slick({
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1200,
            dots: true,
        });
    } else {
        $('#calendar-and-memo').find('.thumbnail').slick('slickPlay');
    }
}

function startThumbnailSnow() {

    var landscape = $('.contents-app').find('#snow');
    for (var i = 0; i < 9; i++) {
        landscape.append('<div></div>');
    }
}

function startThumbnailFade() {

    var switchThumbnail = function () {
        return function (index, element) {

            var root = $(this);
            if (root.find('img').length > 1) {
                root.find('img:not(:first-child)').hide();

                setInterval(function () {
                    var first = root.find('img:first-child');
                    first.fadeOut('slow').next('img').fadeIn('slow').end();
                    root.find('.thumbnail').append(first);
                }, generateSpeed());
            }
        };
    };
    $(".contents-app").each(switchThumbnail());
}

function generatePageWorks() {

    var generateContents = function () {
        return function (index, element) {
            var generateKeyword = function (keyword) {
                return function (index, element) {
                    for (var i = 0; i < keyword.length; i++)
                        $(this).append('<span>' + keyword[i] + '</span>');
                };
            };

            $(this).prepend('<p>' + appName[index] + '</p>');
            $(this).append('<div class="keyword"></div>');
            $(this).find('.keyword').each(generateKeyword(keyword[index]));
        };
    };
    $('.contents-app').each(generateContents());
}

function clickMenu(index) {

    stopCalendarAndMemoSlick();

    $('#menu').css('opacity', '1');
    $('#menu div').removeClass('menu-selected');
    $('#menu div:nth-child(' + (index + 1) + ')').addClass('menu-selected');

    $('#contents-header').hide();
    $('.contents-app-page').hide();

    var switchContents = function (index) {
        return function (roopIndex, element) {
            if (roopIndex == index)
                $(this).show();
            else
                $(this).hide();
        };
    };
    $('.contents-main').each(switchContents(index));
}

function clickAppMenu(index) {

    if (index != 0)
        stopCalendarAndMemoSlick();

    $('#menu').css('opacity', '0.3');
    $('.contents-main').hide();

    $('#contents-header').find('p').text(appName[index]);
    $('#contents-header').show();

    var switchContents = function (index) {
        return function (roopIndex, element) {
            if (roopIndex == index)
                $(this).show();
            else
                $(this).hide();
        };
    };
    $('.contents-app-page').each(switchContents(index));

    if (index == 0)
        startCalendarAndMemoSlick();
}

function loadHistory() {
    
    $.each(historyCalendarAndMemo, function (index, value) {
        $('.update-history-contents').eq(0).append('<p>' + value + '</p>');
    });

    $.each(historyCalendarAndMemoBlack, function (index, value) {
        $('.update-history-contents').eq(1).append('<p>' + value + '</p>');
    });
}