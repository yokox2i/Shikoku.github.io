
// アルバムデータの作成
var album = [
  { src: 'img/1.JPG', msg: 'ぶっかけにちくわ天　麺もタレもしっかり　★★★'},
  { src: 'img/2.JPG', msg: 'ぶっかけおろし　★★'},
  { src: 'img/3.JPG', msg: '窯玉うどん　★★★★'},
  { src: 'img/4.JPG', msg: '山内うどん　山奥で窯卵うどん　★★★'},
  { src: 'img/5.JPG', msg: 'だしきいたうどん　★★★'},
  { src: 'img/6.JPG', msg: '長田in香の香　かまあげ発祥　★★★'},
  { src: 'img/7.JPG', msg: '山下うどん　ぶっかけ発祥　★★★★'}
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


