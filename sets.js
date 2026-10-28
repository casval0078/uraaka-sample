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
    description: "13ちゃんの公開サンプルです。全34データ　20.2MB　￥500です。",
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
    description: "Aoiちゃんの公開サンプルです。全100データ　247MB　￥1,500です。",
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
    description: "ありさちゃんの公開サンプルです。全300データ　475MB　￥2,500です。",
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
    description: "ｲｴちゃんのサンプルです。全84データ　52.3MB　￥500です。",
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
    description: "いちかちゃんの公開サンプルです。全34データ　65.1MB　￥2,000です。",
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
    description: "うさぎちゃんの公開サンプルです。全62データ　55.0MB　￥500です。",
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
    description: "えすちゃんの公開サンプルです。全104データ　118MB　￥2,000です。",
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
    description: "えむちゃんの公開サンプルです。全282データ　4.0GB　￥8,000です。",
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
    description: "おいもちゃんの公開サンプルです。全177データ　249MB　￥2,000です。",
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
    description: "かなこちゃんの公開サンプルです。全49データ　78.4MB　￥3,000です。",
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
    description: "カナちゃんの公開サンプルです。全45データ　22.6MB　￥500です。",
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
    description: "かなちゃんの公開サンプルです。全117データ　83.1MB　￥500です。",
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
    description: "かぬれちゃんの公開サンプルです。全45データ　66.6MB　￥2,000です。",
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
    description: "かりかりうめちゃんの公開サンプルです。全39データ　13.2MB　￥300です。",
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
    description: "こめっこちゃんの公開サンプルです。全279データ　362MB　￥1,000です。",
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
    description: "さなちゃんの公開サンプルです。全83データ　1.66GB　￥5,000です。",
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
    description: "しまーちゃんの公開サンプルです。全40データ　105MB　￥1,500です。",
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
    description: "たかすちゃんの公開サンプルです。全59データ　133MB　￥3,000です。",
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
    description: "なぎぃちゃんの公開サンプルです。全27データ　450MB　￥2,500です。",
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
    description: "ナナセちゃんの公開サンプルです。全67データ　14.6MB　￥300です。",
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
    description: "ななせちゃんの公開サンプルです。全12データ　29.3MB　￥1,000です。",
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
    description: "にゃんちゃんの公開サンプルです。全50データ　83.1MB　￥500です。",
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
    description: "にゅーちゃんの公開サンプルです。全43データ　85.9MB　￥800です。",
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
    description: "ねこちゃんの公開サンプルです。全41データ　168MB　￥500です。",
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
    description: "のぅちゃんの公開サンプルです。全157データ　533MB　￥3,000です。",
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
    description: "のりまきちゃんの公開サンプルです。全47データ　3.83MB　￥100です。",
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
    description: "はーとちゃんの公開サンプルです。全32データ　15.6MB　￥1,000です。",
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
    description: "ハナちゃんの公開サンプルです。全191データ　173MB　￥1,500です。",
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
    description: "はなちゃんの公開サンプルです。全739データ　1.32GB　￥3,500です。",
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
    description: "準備中です。",
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
    description: "ヒスイちゃんの公開サンプルです。全170データ　477MB　￥2,000です。",
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
    description: "ぽんちゃんの公開サンプルです。全160データ　3.67GB　￥1,500です。",
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
    description: "まんぼうちゃんの公開サンプルです。全68データ　167MB　￥500です。",
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
    description: "みうちゃんの公開サンプルです。全118データ　110MB　￥2,000です。",
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
    description: "みくちゃんの公開サンプルです。全156データ　2.14GB　￥5,000です。",
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
    description: "みこちゃんの公開サンプルです。全343データ　899MB　￥3,000です。",
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
    description: "みゆちゃんの公開サンプルです。全36データ　20.8MB　￥100です。",
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
    description: "めすちゃんの公開サンプルです。全41データ　13.7MB　￥300です。",
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
    description: "ゆるみちゃんの公開サンプルです。全40データ　5.03MB　￥300です。",
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
    description: "りんちゃんの公開サンプルです。全164データ　115MB　￥1,000です。",
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
    description: "れいちゃんの公開サンプルです。全88データ　30.3MB　￥500です。",
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
    description: "わんわんちゃんの公開サンプルです。全25データ　21.4MB　￥300です。",
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
