/*
============================================================
セット追加・変更はここだけ！
============================================================

新しいセットを追加するときは、下の { } のブロックをコピーして
name / folder / prefix / photos / videos を変更してください。

例：
{
  name: "新しい作品",
  folder: "new_set",
  prefix: "新しい作品",
  photos: 20,
  videos: 5,
  description: "新しい作品の公開サンプルです。",
  cover: "001.jpg"
},

folder:
  samples フォルダ名。半角英数字がおすすめ。

prefix:
  サンプル生成ツールの「ファイル名の接頭辞」と同じ名前。

photos / videos:
  写真・動画の枚数。

cover:
  一覧ページのサムネイルに使う写真。
*/

const SETS = [
  {
    name: "13ちゃん",
    folder: "13chan",
    prefix: "13ちゃん",
    photos: 27,
    videos: 5,
    description: "13ちゃんの公開サンプルです。",
    cover: "019.jpg"
  },

  {
    name: "Aoiちゃん",
    folder: "Aoiちゃん",
    prefix: "Aoiちゃん",
    photos: 49,
    videos: 43,
    description: "Aoiちゃんの公開サンプルです。",
    cover: "034.jpg"
  }

  /*
  ↓↓↓ここをコピーして新しいセットを追加↓↓↓

  ,
  {
    name: "サンプルセットC",
    folder: "set_c",
    prefix: "サンプルC",
    photos: 18,
    videos: 8,
    description: "新しいセットのサンプルです。",
    cover: "001.jpg"
  }

  ↑↑↑ここまで
  */
];
