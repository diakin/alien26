# Aliens26 — настольная оболочка (Lazarus + CEF4Delphi)

Окно со встроенным Chromium, в котором открывается игра из папки `game`.
Используется CEF4Delphi ветки 109 (Chromium 109.0.5414.120) — это последняя
версия CEF, которая работает на Windows 7.

## Что нужно

- Lazarus 2.2.x или новее (FPC 3.2.2).
- CEF4Delphi, тег `109.0.5414.120`:
  https://github.com/salvadordf/CEF4Delphi/tree/109.0.5414.120
- Пакет DCPcrypt — от него зависит пакет CEF4Delphi для Lazarus.
- Бинарники CEF 109.1.18 той же разрядности, что и собранный exe:
  - 32 бита: https://cef-builds.spotifycdn.com/cef_binary_109.1.18%2Bgf1c41e4%2Bchromium-109.0.5414.120_windows32.tar.bz2
  - 64 бита: https://cef-builds.spotifycdn.com/cef_binary_109.1.18%2Bgf1c41e4%2Bchromium-109.0.5414.120_windows64.tar.bz2

  Есть и варианты `_minimal.tar.bz2` — в них то же самое без примеров и отладочных файлов.

## Установка компонентов в Lazarus

1. Пакет → Online Package Manager → установить **DCPcrypt**.
   (Либо вручную: https://sourceforge.net/projects/lazarus-ccr/files/DCPcrypt/)
2. Распаковать CEF4Delphi 109, открыть `packages\cef4delphi_lazarus.lpk`,
   нажать «Компилировать», затем «Использовать → Установить».
   Lazarus пересоберёт IDE, на палитре появится вкладка Chromium.

## Сборка

Открыть `tools\desktop\Aliens26.lpi`, Запуск → Собрать.
Exe появится в `tools\desktop\dist\`. Разрядность exe совпадает с разрядностью
Lazarus (32-битный Lazarus собирает 32-битный exe).

## Файлы CEF рядом с exe

Из архива CEF скопировать в `dist\cef\`:

- из `Release\`: все `*.dll`, `*.bin`, `vk_swiftshader_icd.json`
  (`*.lib` не нужны);
- из `Resources\`: всё, включая папку `locales`.

Получается так:

```
dist\
  Aliens26.exe
  cef\
    libcef.dll, chrome_elf.dll, d3dcompiler_47.dll, libEGL.dll, libGLESv2.dll,
    vk_swiftshader.dll, vulkan-1.dll, vk_swiftshader_icd.json,
    snapshot_blob.bin, v8_context_snapshot.bin,
    icudtl.dat, resources.pak, chrome_100_percent.pak, chrome_200_percent.pak,
    locales\ru.pak, ...
  userdata\        (создаётся при первом запуске)
```

Если каких-то файлов не хватает, при запуске CEF4Delphi покажет окно со списком.

## Где программа ищет игру

Сначала рядом с exe (если exe положен прямо в папку `game`), затем папку
`game` в каталоге exe и в родительских каталогах — до пяти уровней вверх.
При сборке в репозитории это `..\..\..\game\globe.html`.

Для переноса на другой компьютер достаточно такой раскладки:

```
Aliens26\
  Aliens26.exe
  cef\...
  game\...        (копия папки game из репозитория)
```

## Управление и параметры

| Клавиша | Действие |
|---|---|
| F11 | полноэкранный режим |
| F5 / Ctrl+F5 | перезагрузить страницу / без кэша |
| F12 | инструменты разработчика |
| Esc | передаётся игре, окно не закрывает |

Полноэкранный режим из настроек игры (Fullscreen API) тоже работает.

```
Aliens26.exe [страница.html] [/fullscreen] [/nogpu]
```

- `страница.html` — стартовая страница из папки `game` (по умолчанию `globe.html`),
  например `Aliens26.exe city.html`;
- `/fullscreen` — запуск сразу во весь экран;
- `/nogpu` — без аппаратного ускорения, если с видеодрайвером проблемы
  (чёрный экран, мерцание).

## Сохранения

localStorage (состояние базы, настройки) хранится в `dist\userdata\`.
Это отдельный профиль: сохранения из Chrome или Firefox сюда не переносятся,
база начнётся с исходного состояния. Папка должна быть доступна на запись —
не кладите программу в `Program Files`.

## Состояние проверки

Проект собран кросс-компиляцией под win64 (Lazarus 3.0, FPC 3.2.2) — компилируется
и линкуется без ошибок. Запуск под Windows не проверялся: в среде сборки Windows нет.
