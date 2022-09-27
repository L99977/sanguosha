let swiperImgs = document.querySelectorAll('.swiper1 img');
let footLis = document.querySelectorAll('.swiper1 li');
let swiperImgs2 = document.querySelectorAll('.swiper2 img');
let footLis2 = document.querySelectorAll('.swiper2 li');
let swiper_foooter = document.querySelector('.swiper_foooter');
let swiper1 = document.querySelector('.swiper1');
let swiper2 = document.querySelector('.swiper2');
let index = 0;
let index1 = 0;
// 自动切换
function changeOpacity() {
  swiperImgs[index].style.opacity = 0;
  footLis[index].className = '';
  index++;
  if (index == swiperImgs.length) {
    index = 0;
  }
  swiperImgs[index].style.opacity = 1;
  footLis[index].className = 'li_actived'
}
let timer = setInterval(changeOpacity, 3000)

function changeOpacity1() {
  swiperImgs2[index1].style.opacity = 0;
  footLis2[index1].className = '';
  index1++;
  if (index1 == swiperImgs2.length) {
    index1 = 0;
  }
  swiperImgs2[index1].style.opacity = 1;
  footLis2[index1].className = 'li_actived'
}
let timer1 = setInterval(changeOpacity1, 3000)


// 点击切换
function cilckChange(list, list2) {
  list.forEach((item, index1) => {
    item.onclick = function () {
      item.className = 'li_actived';
      list2[index1].style.opacity = 1;
      list2[index].style.opacity = 0;
      list[index].className = '';
      index = index1
    }
  })
}
cilckChange(footLis, swiperImgs);

function cilckChange1(list, list2) {
  list.forEach((item, idx) => {
    item.onclick = function () {
      item.className = 'li_actived';
      list2[idx].style.opacity = 1;
      list2[index1].style.opacity = 0;
      list[index1].className = '';
      index1 = idx
    }
  })
}
cilckChange1(footLis2, swiperImgs2);


// 控制是否自动轮播

swiper1.onmouseover = function () {
  console.log('停止播放');
  clearInterval(timer)
}
swiper1.onmouseout = function () {
  console.log('开始播放');
  timer = setInterval(changeOpacity, 3000);
}
swiper2.onmouseover = function () {
  console.log('停止播放');
  clearInterval(timer1)
}
swiper2.onmouseout = function () {
  console.log('开始播放');
  timer1 = setInterval(changeOpacity1, 3000);
}

// 第三部分的轮播图
let gens = document.querySelectorAll('.hdtab li');
let c_contents = document.querySelectorAll('.c_content');
let newcenter = document.querySelector('.newcenter');
let index2 = 0;

// 自动切换
let timer2 = setInterval(changeOpacity2,4000);
function changeOpacity2(){
  gens[index2].classList.remove('gen_actived');
  c_contents[index2].style.opacity = '0';
  index2++;
  if(index2 == gens.length){
    index2 = 0;
  }
  gens[index2].classList.add('gen_actived');
  c_contents[index2].style.opacity = '1';
}

// 点击切换
gens.forEach((item,idx)=>{
  item.onclick = function(){
    item.classList.add('gen_actived');
    c_contents[idx].style.opacity = '1';
    gens[index2].classList.remove('gen_actived');
    c_contents[index2].style.opacity = '0';
    index2 = idx;
  }
})

// 轮播的暂停/继续
newcenter.onmouseover = function(){
  clearInterval(timer2);
}
newcenter.onmouseout = function(){
  timer2 = setInterval(changeOpacity2,4000);
}