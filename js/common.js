
const appName = [
    [
        'Calender & Memo',
        'Cute Note Widget',
        'Mosquito Coil Pig',
        'Icon 3x3',
        'GitHub Widget',
        'Battery Widget',
        'Photo Widget for Twitter',
        'A words bird',
        'Planet Color Picker',
        '???',
        '???',
    ],
    [
        'カレンダー & メモ',
        'かわいいメモ ウィジェット',
        '蚊取線香のぶた',
        'Icon 3x3',
        'GitHub Widget',
        'Battery Widget',
        'Photo Widget for Twitter',
        'ひとこと小鳥',
        'Planet Color Picker',
        '???',
        '???',
    ]
];
const keyword = [
    ['widget', 'list calendar', 'grid calendar'],
    ['widget', 'memo', 'note'],
    ['widget', 'accessories', 'japanese summer'],
    ['widget', 'shortcut icon', '3x3', '3x1', '2x2', '1x3', '2x1', '2x3', '3x4', '3x2'],
    ['widget', 'github'],
    ['widget', 'battery'],
    ['widget', 'twitter', 'photo'],
    ['tool', 'communication', 'Wi-Fi'],
    ['library', 'github', 'open source'],
    ['game', 'widget', 'casual'],
    ['game', 'puzzle', 'kill time'],
];
const featureCalendarAndMemo = [
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
const featureCuteMemoWidget = [
    [
        'This is a note widget that can be placed on your home screen.',
        'Sophisticated, pretty, and easy-to-read design.',
        '　',
        '* Place multiple notes',
        '* Change background design & color',
        '* Change text font, text size, and text color',
        '* Change widget size',
    ],
    [
        '<font color="#e95464"><b>Appliv（アプリヴ）様に素敵なレビューを掲載していただきました！！</b></font>',
        '<a href="https://app-liv.jp/5346094/">https://app-liv.jp/5346094/</a>',
        '　',
        '　',
        'ホーム画面に置けるメモウィジェットです。',
        '大人かわいい、でもかわいすぎない、きれいで見やすいデザインを揃えました。',
        '　',
        '✻ 複数のメモを置けます',
        '✻ 背景デザインの変更＆色変更',
        '✻ 文字フォント＆文字サイズ＆文字色の変更',
        '✻ ウィジェットサイズの変更',
    ]
]
const featureMosquitoCoil = [
    [
        'Cute mosquito coil pig widget.',
        'Smoke billows from his mouth.',
        'Mosquito pig is one of Japan\'s summer traditions. It is a mosquito coil holder in the shape of a pig, often used in traditional Japanese gardens and porches.',
        '　',
        '<font color="#e95464"><b>Acrylic key chains are also available at SUZURI !!</b></font>',
        '<a href="https://suzuri.jp/chlorocube">chlorocube SHOP</a>',
        '<a href="https://suzuri.jp/chlorocube"><img src="img/pig_shop.png" class="contents-app-page-preview"></a>',
        '　',
        '* Pig color changing',
        '* Pig orientation changing',
    ],
    [
        'かわいい蚊遣り豚のウィジェットです。',
        '煙がもくもくします。',
        '　',
        '<font color="#e95464"><b>アクリルキーホルダーも SUZURI にて発売中！</b></font>',
        '<a href="https://suzuri.jp/chlorocube">chlorocube SHOP</a>',
        '<a href="https://suzuri.jp/chlorocube"><img src="img/pig_shop.png" class="contents-app-page-preview"></a>',
        '　',
        '✓ ぶたの色変更',
        '✓ ぶたの向き変更',
    ]
]
const featureGitHubWidget = [
    [
        'GitHub contributions widget.',
        'This app is iOS official widget looks-alike.',
        '　',
        '* color changing',
        '* size & margin changing',
    ],
    [
        'GitHub contribution ウィジェット。',
        '公式のiOSウィジェットに似せて作ってみた。',
        '　',
        '✓ 色変更',
        '✓ サイズ・余白変更',
    ]
]
const historyCalendarAndMemo = [
    [
        'v1.3.3',
        '- added a function to immediately jump to the calendar for the year and month of the plan by tapping the icon on the right side of each plan in the search results',
        'v1.3.2',
        '- fixed minor bugs',
        'v1.3.1',
        '- added numerical editing function for background color and opacity',
        'v1.3.0',
        '- added default text color setting (Black or White)',
        '- added selectable text color',
        'v1.2.1',
        '- fixed minor bugs',
        'v1.2.0',
        '- added backup file export to Google Drive in Settings',
        '- added manual acquisition of public holidays in Settings',
        'v1.1.12',
        '- changed the data recovery procedure to let the user select files',
        '- fixed the backup file export destination to Documents folder for Android 10 and later devices',
        'v1.1.11',
        '- fixed day of the week display in text search function',
        'v1.1.10',
        '- added text search function',
        'v1.1.9',
        '- changed the minimum size of widget',
        '- modified the bug related to backup files on Android 10 or higher',
        'v1.1.8',
        '- added schedule-lock setting',
        'v1.1.7',
        '- added button "Add Widget" to ABOUT page (above Android 8.0)',
        '- changed that list calendar scrolls to today\'s date by tapping the [Return to this month] button',
        'v1.1.6',
        '- fixed minor bugs',
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
        'v1.3.3',
        '- 検索結果の各予定の右端のアイコンをタップすることで、その予定年月のカレンダーに即ジャンプする機能を追加',
        'v1.3.2',
        '- 軽微な不具合の修正',
        'v1.3.1',
        '- 背景の色と透明度について、数値編集による変更機能を追加',
        'v1.3.0',
        '- 標準文字色の選択設定の追加 (黒or白)',
        '- 選択可能な文字色の追加と調整',
        'v1.2.1',
        '- 軽微な不具合の修正',
        'v1.2.0',
        '- 設定にGoogleドライブへのバックアップファイル出力を追加',
        '- 設定に祝日データの手動取得を追加',
        'v1.1.12',
        '- データ復元方法をファイル選択方式に変更',
        '- Android 10以降の端末でのバックアップファイル出力先をDocumentsフォルダに修正',
        'v1.1.11',
        '- 本文検索機能について曜日表示の修正',
        'v1.1.10',
        '- 本文検索機能の追加',
        'v1.1.9',
        '- ウィジェットの最小サイズを変更',
        '- Android 10以降の端末でのバックアップファイル出力不具合を修正',
        'v1.1.8',
        '- 予約編集のロックON/OFF設定を追加',
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
const historyCalendarAndMemoBlack = [
    [
        '<font color="#b7282e"><b>In v1.3.0, White version and Black version have been integrated.</b></font>',
        '<font color="#b7282e"><b>Distribution of Black version app on this page has ended.</b></font>',
        '&nbsp',
        '<big><big><big><font color="#b7282e">⚠</font></big></big></big>',
        '<font color="#b7282e">When migrating from the app distributed on this page to the app installed via GooglePlay, data migration is required.</font>',
        'Please migrate data from [BACKUP] in Settings of this app.',
        '1. Export the backup file on the distribution app.',
        '2. Restore the data from the backup file on the app installed via GooglePlay.',
        '&nbsp',
        '&nbsp',
        '---- ---- ---- ---- ----',
        'v1.2.0',
        '- added backup file export to Google Drive in Settings',
        '- added manual acquisition of public holidays in Settings',
        'v1.0.12',
        '- changed the data recovery procedure to let the user select files',
        '- fixed the backup file export destination to Documents folder for Android 10 and later devices',
        'v1.0.11',
        '- fixed day of the week display in text search function',
        'v1.0.10',
        '- added text search function',
        'v1.0.9',
        '- changed the minimum size of widget',
        '- modified the bug related to backup files on Android 10 or higher',
        'v1.0.8',
        '- added schedule-lock setting',
        'v1.0.7',
        '- added button "Add Widget" to ABOUT page (above Android 8.0)',
        '- changed that list calendar scrolls to today\'s date by tapping the [Return to this month] button',
        'v1.0.6',
        '- fixed minor bugs',
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
        '<font color="#b7282e"><b>v1.3.0にて、White版/Black版を統合しました。</b></font>',
        '<font color="#b7282e"><b>当ページでのBlack版アプリの配布は終了致します。</b></font>',
        '&nbsp',
        '<big><big><big><font color="#b7282e">⚠</font></big></big></big>',
        '<font color="#b7282e">当ページ配布版アプリからGooglePlay版アプリへ移行する場合、データの移行が必要です。</font>',
        '大変お手数ではございますが、当アプリの設定 [BACKUP] からデータの移行を行ってください。',
        '① 配布版側でバックアップファイルを出力します',
        '② GooglePlay版側でバックアップファイルからデータを復元します',
        '&nbsp',
        '&nbsp',
        '---- ---- ---- ---- ----',
        'v1.2.0',
        '- 設定にGoogleドライブへのバックアップファイル出力を追加',
        '- 設定に祝日データの手動取得を追加',
        'v1.0.12',
        '- データ復元方法をファイル選択方式に変更',
        '- Android 10以降の端末でのバックアップファイル出力先をDocumentsフォルダに修正',
        'v1.0.11',
        '- 本文検索機能について曜日表示の修正',
        'v1.0.10',
        '- 本文検索機能の追加',
        'v1.0.9',
        '- ウィジェットの最小サイズを変更',
        '- Android 10以降の端末でのバックアップファイル出力不具合を修正',
        'v1.0.8',
        '- 予約編集のロックON/OFF設定を追加',
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
const historyIcon3x3 = [
];
const historyPlanetColorPicker = [
    [
        'v1.0.3',
        '- update SDK version',
        'v1.0.2',
        '- update SDK version',
        'v1.0.1',
        '- updated app icon',
        'v1.0.0',
        '- release'
    ],
    [
        'v1.0.3',
        '- SDKバージョンの更新',
        'v1.0.2',
        '- SDKバージョンの更新',
        'v1.0.1',
        '- アプリアイコンの更新',
        'v1.0.0',
        '- リリース'
    ]
];
const introductionTxt = [
    'Welcome to my website. <b>chlorocube</b> is an indie Android developer.',
    '個人開発 <b>chlorocube</b> のサイト。<br>Android アプリ作ってます。'
]
const suffixLanguage = [
    '&hl=en',
    '&hl=jp'
]
var selectLanguage = 0;
var selectAppIndex = 0;

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

            $(this).prepend('<p>' + appName[selectLanguage][index] + '</p>');
            $(this).append('<div class="keyword"></div>');
            $(this).find('.keyword').each(generateKeyword(keyword[index]));
        };
    };
    $('.contents-app').each(generateContents());
}

function regeneratePageWorks() {
    
    var regenerateContents = function () {
        return function (index, element) {
            $(this).find("p").remove();
            $(this).prepend('<p>' + appName[selectLanguage][index] + '</p>');
        };
    };
    $('.contents-app').each(regenerateContents());
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

    $('#contents-header').find('p').text(appName[selectLanguage][index]);
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

    selectAppIndex = index;
}

function generateDocuments() {

    if ($('#contents-header').is(":visible")) {
        $('#contents-header').find('p').empty();
        $('#contents-header').find('p').text(appName[selectLanguage][selectAppIndex]);
    }

    $('.feature-contents-calendar').eq(0).empty()
    $.each(featureCalendarAndMemo[selectLanguage], function (index, value) {
        $('.feature-contents-calendar').eq(0).append('<p>' + value + '</p>');
    });
    $('.feature-contents-cute-memo-widget').eq(0).empty()
    $.each(featureCuteMemoWidget[selectLanguage], function (index, value) {
        $('.feature-contents-cute-memo-widget').eq(0).append('<p>' + value + '</p>');
    });
    $('.feature-contents-mosquito-coil').eq(0).empty()
    $.each(featureMosquitoCoil[selectLanguage], function (index, value) {
        $('.feature-contents-mosquito-coil').eq(0).append('<p>' + value + '</p>');
    });
    $('.feature-contents-github-contributions').eq(0).empty()
    $.each(featureGitHubWidget[selectLanguage], function (index, value) {
        $('.feature-contents-github-contributions').eq(0).append('<p>' + value + '</p>');
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