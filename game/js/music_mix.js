// Настройки микшера музыки — утилита music_mixer.html, файл перезаписывается ею (прежний — в js/music_backup).
// themes[тема].tracks[инструмент] = { gain, transpose, speed, mute } — громкость, перенос в полутонах, скорость;
// themes[тема].extra — добавленные к теме ритмические дорожки; custom — свои темы из ритмических дорожек.
var MUSIC_MIX = { "themes": {}, "custom": {} };
