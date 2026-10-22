// ============================================================
// サイト全体で使うXアカウント
// @は付けても付けなくてもOKです。
// ============================================================
const X_ACCOUNT = "aganeamis2024";


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
　photos: 215,       // 販売データ全体の写真総数
　videos: 59,        // 販売データ全体の動画総数
　samplePhotos: 5,   // 公開するサンプル写真の枚数
　sampleVideos: 5,   // 公開するサンプル動画の本数
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
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "13ちゃんの公開サンプルです。",
    cover: "001.jpg"
  },

  {
    name: "Aoiちゃん",
    folder: "Aoiちゃん",
    prefix: "Aoiちゃん",
    photos: 49,
    videos: 43,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "Aoiちゃんの公開サンプルです。",
    cover: "001.jpg"
  },
  {
    name: "ありさちゃん",
    folder: "ありさちゃん",
    prefix: "ありさちゃん",
    photos: 215,
    videos: 59,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "032.jpg"
  },
  {
    name: "ｲｴちゃん",
    folder: "ｲｴちゃん",
    prefix: "ありさちゃん",
    photos: 62,
    videos: 22,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "001.jpg"
  },
  {
    name: "いちかちゃん",
    folder: "いちかちゃん",
    prefix: "いちかちゃん",
    photos: 26,
    videos: 11,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "001.jpg"
  },
  {
    name: "うさぎちゃん",
    folder: "うさぎちゃん",
    prefix: "うさぎちゃん",
    photos: 47,
    videos: 15,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "001.jpg"
  },
  {
    name: "えすちゃん",
    folder: "えすちゃん",
    prefix: "えすちゃん",
    photos: 91,
    videos: 14,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "001.jpg"
  },
  {
    name: "えむちゃん",
    folder: "えむちゃん",
    prefix: "えむちゃん",
    photos: 194,
    videos: 105,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "001.jpg"
  },
  {
    name: "おいもちゃん",
    folder: "おいもちゃん",
    prefix: "おいもちゃん",
    photos: 152,
    videos: 32,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "001.jpg"
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
