// アルバムデータの作成
var album = [
  { src: '1.JPG', msg: 'ぶっかけにちくわ天　麺もタレもしっかり　★★★'},
  { src: '2.jpg', msg: 'ぶっかけおろし　★★'},
  { src: '3.jpg', msg: '窯玉うどん　★★★★'},
  { src: '4.jpg', msg: '山内うどん　山奥で窯卵うどん　★★★'},
  { src: '5.jpg', msg: 'だしきいたうどん　★★★'},
  { src: '6.jpg', msg: '長田in香の香　かまあげ発祥　★★★'},
  { src: '7.jpg', msg: '山下うどん　ぶっかけ発祥　★★★★'}
];

// 最初のデータを表示しておく
var mainImage = document.createElement('img');
mainImage.setAttribute('src', album[0].src);
mainImage.setAttribute('alt', album[0].msg);

var mainMsg = document.createElement('p');
mainMsg.innerText = mainImage.alt;

var mainFlame = document.querySelector('#gallery .main');
mainFlame.insertBefore(mainImage, null);
mainFlame.insertBefore(mainMsg, null);

// サムネイル画像の表示
var thumbFlame = document.querySelector('#gallery .thumb');
for (var i = 0; i < album.length; i++) {
  var thumbImage = document.createElement('img');
  thumbImage.setAttribute('src', album[i].src);
  thumbImage.setAttribute('alt', album[i].msg);
  thumbFlame.insertBefore(thumbImage, null);
}

// クリックした画像をメインにする
thumbFlame.addEventListener('click', function(event) {
  if (event.target.src) {
    mainImage.src = event.target.src;
    mainMsg.innerText = event.target.alt;
  }
});
