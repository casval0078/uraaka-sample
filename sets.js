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
    folder: "13ちゃん",
    prefix: "13ちゃん",
    photos: 29,
    videos: 5,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "13ちゃんの公開サンプルです。",
    cover: "005.jpg"
  },

  {
    name: "Aoiちゃん",
    folder: "Aoiちゃん",
    prefix: "Aoiちゃん",
    photos: 51,
    videos: 49,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "Aoiちゃんの公開サンプルです。",
    cover: "004.jpg"
  },
  {
    name: "ありさちゃん",
    folder: "ありさちゃん",
    prefix: "ありさちゃん",
    photos: 227,
    videos: 73,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "004.jpg"
  },
  {
    name: "ｲｴちゃん",
    folder: "ｲｴちゃん",
    prefix: "ｲｴちゃん",
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
    photos: 24,
    videos: 10,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "002.jpg"
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
    cover: "004.jpg"
  },
  {
    name: "えすちゃん",
    folder: "えすちゃん",
    prefix: "えすちゃん",
    photos: 90,
    videos: 14,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "005.jpg"
  },
  {
    name: "えむちゃん",
    folder: "えむちゃん",
    prefix: "えむちゃん",
    photos: 175,
    videos: 107,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "003.jpg"
  },
  {
    name: "おいもちゃん",
    folder: "おいもちゃん",
    prefix: "おいもちゃん",
    photos: 144,
    videos: 33,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "004.jpg"
      },
  {
    name: "かなこちゃん",
    folder: "かなこちゃん",
    prefix: "かなこちゃん",
    photos: 40,
    videos: 9,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "003.jpg"
      },
  {
    name: "カナちゃん",
    folder: "カナちゃん",
    prefix: "カナちゃん",
    photos: 39,
    videos: 6,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "003.jpg"
      },
  {
    name: "かなちゃん",
    folder: "かなちゃん",
    prefix: "かなちゃん",
    photos: 108,
    videos: 9,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "001.jpg"
      },
  {
    name: "かぬれちゃん",
    folder: "かぬれちゃん",
    prefix: "かぬれちゃん",
    photos: 36,
    videos: 9,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "001.jpg"
      },
  {
    name: "かりかりうめちゃん",
    folder: "かりかりうめちゃん",
    prefix: "かりかりうめちゃん",
    photos: 37,
    videos: 2,
　　samplePhotos: 5,
　　sampleVideos: 2,
    description: "新しいセットのサンプルです。",
    cover: "002.jpg"
      },
  {
    name: "こめっこちゃん",
    folder: "こめっこちゃん",
    prefix: "こめっこちゃん",
    photos: 110,
    videos: 169,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "001.jpg"
      },
  {
    name: "さなちゃん",
    folder: "さなちゃん",
    prefix: "さなちゃん",
    photos: 30,
    videos: 53,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "002.jpg"
      },
  {
    name: "しまーちゃん",
    folder: "しまーちゃん",
    prefix: "しまーちゃん",
    photos: 22,
    videos: 18,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "005.jpg"
                  },
  {
    name: "たかすちゃん",
    folder: "たかすちゃん",
    prefix: "たかすちゃん",
    photos: 7,
    videos: 52,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "003.jpg"
      },
  {
    name: "なぎぃちゃん",
    folder: "なぎぃちゃん",
    prefix: "なぎぃちゃん",
    photos: 25,
    videos: 2,
　　samplePhotos: 5,
　　sampleVideos: 2,
    description: "新しいセットのサンプルです。",
    cover: "004.jpg"
      },
  {
    name: "ナナセちゃん",
    folder: "ナナセちゃん",
    prefix: "ナナセちゃん",
    photos: 64,
    videos: 3,
　　samplePhotos: 5,
　　sampleVideos: 3,
    description: "新しいセットのサンプルです。",
    cover: "004.jpg"
      },
  {
    name: "ななせちゃん",
    folder: "ななせちゃん",
    prefix: "ななせちゃん",
    photos: 5,
    videos: 7,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "005.jpg"
      },
  {
    name: "にゃんちゃん",
    folder: "にゃんちゃん",
    prefix: "にゃんちゃん",
    photos: 24,
    videos: 26,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "003.jpg"
      },
  {
    name: "にゅーちゃん",
    folder: "にゅーちゃん",
    prefix: "にゅーちゃん",
    photos: 29,
    videos: 14,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "004.jpg"
                  },
  {
    name: "ねこちゃん",
    folder: "ねこちゃん",
    prefix: "ねこちゃん",
    photos: 29,
    videos: 12,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "001.jpg"
      },
  {
    name: "のぅちゃん",
    folder: "のぅちゃん",
    prefix: "のぅちゃん",
    photos: 141,
    videos: 16,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "005.jpg"
      },
  {
    name: "のりまきちゃん",
    folder: "のりまきちゃん",
    prefix: "のりまきちゃん",
    photos: 45,
    videos: 2,
　　samplePhotos: 5,
　　sampleVideos: 2,
    description: "新しいセットのサンプルです。",
    cover: "001.jpg"
      },
  {
    name: "はーとちゃん",
    folder: "はーとちゃん",
    prefix: "はーとちゃん",
    photos: 23,
    videos: 9,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "005.jpg"
      },
  {
    name: "ハナちゃん",
    folder: "ハナちゃん",
    prefix: "ハナちゃん",
    photos: 128,
    videos: 63,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "005.jpg"
      },
  {
    name: "はなちゃん",
    folder: "はなちゃん",
    prefix: "はなちゃん",
    photos: 624,
    videos: 115,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "001.jpg"
          },
  {
    name: "はるなちゃん",
    folder: "はるなちゃん",
    prefix: "はるなちゃん",
    photos: 87,
    videos: 50,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "001.jpg"
      },
  {
    name: "ヒスイちゃん",
    folder: "ヒスイちゃん",
    prefix: "ヒスイちゃん",
    photos: 69,
    videos: 101,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "001.jpg"
      },
  {
    name: "ぽんちゃん",
    folder: "ぽんちゃん",
    prefix: "ぽんちゃん",
    photos: 30,
    videos: 130,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "005.jpg"
          },
  {
    name: "まんぼうちゃん",
    folder: "まんぼうちゃん",
    prefix: "まんぼうちゃん",
    photos: 28,
    videos: 40,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "003.jpg"
          },
  {
    name: "みうちゃん",
    folder: "みうちゃん",
    prefix: "みうちゃん",
    photos: 103,
    videos: 15,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "004.jpg"
              },
  {
    name: "みくちゃん",
    folder: "みくちゃん",
    prefix: "みくちゃん",
    photos: 105,
    videos: 51,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "004.jpg"
              },
  {
    name: "みこちゃん",
    folder: "みこちゃん",
    prefix: "みこちゃん",
    photos: 203,
    videos: 140,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "003.jpg"
                  },
  {
    name: "みゆちゃん",
    folder: "みゆちゃん",
    prefix: "みゆちゃん",
    photos: 35,
    videos: 1,
　　samplePhotos: 5,
　　sampleVideos: 1,
    description: "新しいセットのサンプルです。",
    cover: "002.jpg"
                  },
  {
    name: "めすちゃん",
    folder: "めすちゃん",
    prefix: "めすちゃん",
    photos: 38,
    videos: 3,
　　samplePhotos: 5,
　　sampleVideos: 3,
    description: "新しいセットのサンプルです。",
    cover: "004.jpg"
                  },
  {
    name: "ゆるみちゃん",
    folder: "ゆるみちゃん",
    prefix: "ゆるみちゃん",
    photos: 40,
    videos: 0,
　　samplePhotos: 5,
　　sampleVideos: 0,
    description: "新しいセットのサンプルです。",
    cover: "001.jpg"
                  },
  {
    name: "りんちゃん",
    folder: "りんちゃん",
    prefix: "りんちゃん",
    photos: 101,
    videos: 63,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "001.jpg"
                  },
  {
    name: "れいちゃん",
    folder: "れいちゃん",
    prefix: "れいちゃん",
    photos: 88,
    videos: 0,
　　samplePhotos: 5,
　　sampleVideos: 0,
    description: "新しいセットのサンプルです。",
    cover: "001.jpg"
                  },
  {
    name: "わんわんちゃん",
    folder: "わんわんちゃん",
    prefix: "わんわんちゃん",
    photos: 17,
    videos: 8,
　　samplePhotos: 5,
　　sampleVideos: 5,
    description: "新しいセットのサンプルです。",
    cover: "005.jpg"
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
