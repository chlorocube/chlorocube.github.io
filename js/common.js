
var appName = [
    'Calender & Memo',
    'Icon 3x3',
    'Planet Color Picker',
    '???',
];
var keyword = [
    ['widget', 'list calendar', 'grid calendar'],
    ['widget', 'shortcut icon', '3x3', '3x1', '2x2'],
    ['library', 'github', 'open source'],
    ['game', 'puzzle', 'kill time'],
];
var featureCalendarAndMemo = [
    [
        '* Calendar Widget',
        '* Tap the date and enter your plan DIRECTLY',
        '* Switch list calendar and grid calendar with one tap',
        '* Supported public holidays'
    ],
    [
        '✓ カレンダーウィジェット',
        '✓ 日付をタップして予定を記入できる',
        '✓ 縦型カレンダーと月カレンダーをワンタップ切替で表示',
        '✓ 祝日対応 (要インターネット接続)',
    ]
]
var historyCalendarAndMemo = [
    [
        'v1.1.7',
        '- added button "Add Widget" to ABOUT page (above Android 8.0)',
        '- changed that list calendar scrolls to today\'s date by tapping the [Return to this month] button',
        'v1.1.6',
        '- modified the small bug',
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
    ],
    [
        'v1.1.7',
        '- ABOUTページにウィジェット設定ボタンを追加 (Android 8.0以降)',
        '- 縦型カレンダーについて、[今月に戻る]ボタンの再タップで今日の日付までスクロールするよう変更',
        'v1.1.6',
        '- 軽微な不具合の修正',
        'v1.1.5',
        '- 縦型カレンダーに「改行して全体を表示する」設定を追加',
        'v1.1.4',
        '- 月カレンダーの格子の表示/非表示設定を追加',
        'v1.1.3',
        '- 縦型カレンダーで今日の日付をマークするよう変更',
        'v1.1.2',
        '- ヘッダーレイアウト設定を追加',
        'v1.1.1',
        '- 1日に3つまで予定登録できるよう変更',
        '- 月カレンダーのバッジサイズを調整',
        'v1.1.0',
        '- 月カレンダーのバッジサイズ設定を追加',
    ]
];
var historyCalendarAndMemoBlack = [
    [
        'v1.0.7',
        '- added button "Add Widget" to ABOUT page (above Android 8.0)',
        '- changed that list calendar scrolls to today\'s date by tapping the [Return to this month] button',
        'v1.0.6',
        '- modified the small bug',
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
    ],
    [
        'v1.0.7',
        '- ABOUTページにウィジェット設定ボタンを追加 (Android 8.0以降)',
        '- 縦型カレンダーについて、[今月に戻る]ボタンの再タップで今日の日付までスクロールするよう変更',
        'v1.0.6',
        '- 軽微な不具合の修正',
        'v1.0.5',
        '- 縦型カレンダーに「改行して全体を表示する」設定を追加',
        'v1.0.4',
        '- 月カレンダーの格子の表示/非表示設定を追加',
        'v1.0.3',
        '- 縦型カレンダーで今日の日付をマークするよう変更',
        'v1.0.2',
        '- ヘッダーレイアウト設定を追加',
        'v1.0.1',
        '- 1日に3つまで予定登録できるよう変更',
        '- 月カレンダーのバッジサイズを調整',
        'v1.0.0',
        '- リリース',
    ]
];
var historyIcon3x3 = [
];
var historyPlanetColorPicker = [
    [
        'v1.0.2',
        '- update SDK version',
        'v1.0.1',
        '- updated app icon',
        'v1.0.0',
        '- release'
    ],
    [
        'v1.0.2',
        '- SDKバージョンの更新',
        'v1.0.1',
        '- アプリアイコンの更新',
        'v1.0.0',
        '- リリース'
    ]
];
var introductionTxt = [
    'Welcome to my website. <b>chlorocube</b> is an individual Android developer.',
    '個人開発 <b>chlorocube</b> のサイト。<br>Android アプリ作ってます。'
]
var suffixLanguage = [
    '&hl=en',
    '&hl=jp'
]
var selectLanguage = 0;

function initLanguage() {

    var language = (window.navigator.languages && window.navigator.languages[0]) ||
        window.navigator.language ||
        window.navigator.userLanguage ||
        window.navigator.browserLanguage;
    if (language == 'ja') {
        selectLanguage = 1;
        $('#select-lang').find('select').val(1);
    }
}

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
    window.location.href = './app/calendar_and_memo/SimpleScheduleWidgetBlack_v1.0.7_1920091515.apk';
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

function generateIntroduction() {

    $('#introduction').html(introductionTxt[selectLanguage]);
}

function generateStoreLink() {

    $('a').each(function (index, element) {
        var url = $(element).attr('href');
        if (url.startsWith('https://play.google.com')) {
            $(element).attr('href', url.split("&")[0] + suffixLanguage[selectLanguage]);
        }
    });
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

function generateDocuments() {

    $('.feature-contents').eq(0).empty()
    $.each(featureCalendarAndMemo[selectLanguage], function (index, value) {
        $('.feature-contents').eq(0).append('<p>' + value + '</p>');
    });

    $('.update-history-contents').eq(0).empty()
    $.each(historyCalendarAndMemo[selectLanguage], function (index, value) {
        $('.update-history-contents').eq(0).append('<p>' + value + '</p>');
    });

    $('.update-history-contents').eq(1).empty()
    $.each(historyCalendarAndMemoBlack[selectLanguage], function (index, value) {
        $('.update-history-contents').eq(1).append('<p>' + value + '</p>');
    });

    $('.update-history-contents').eq(2).empty()
    $.each(historyPlanetColorPicker[selectLanguage], function (index, value) {
        $('.update-history-contents').eq(2).append('<p>' + value + '</p>');
    });
}