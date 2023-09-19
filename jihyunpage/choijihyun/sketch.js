let starlight, mug, brain, dama, news, com, pic, braint, damat, newst, comt, pict, mmm, bbb, ddd, nnn, ccc, ppp;

function preload(){
  starlight = createImg('img/IMG_6440.GIF');

  mug = createImg('img/mug.jpg');
  mug.hide();
  brain = createImg('img/brain.jpg');
  brain.hide();
  dama = createImg('img/dama.jpg');
  dama.hide();
  news = createImg('img/news.jpg');
  news.hide();
  com = createImg('img/com.jpg');
  com.hide();
  pic = createImg('img/pic.jpg');
  pic.hide();

  
  braint = createImg('img/braint.jpg');
  braint.hide();
  damat = createImg('img/dmamt.jpg');
  damat.hide();
  newst = createImg('img/newst.jpg');
  newst.hide();
  comt = createImg('img/comt.jpg');
  comt.hide();
  pict = createImg('img/pict.jpg');
  pict.hide();
  
  mmm = createImg('img/mmm.jpg');
  bbb = createImg('img/bbb.png');
  ddd = createImg('img/ddd.png');
  nnn = createImg('img/nnn.jpg');
  ccc = createImg('img/ccc.png');
  ppp = createImg('img/ppp.jpg');

} //사전 정의


function setup(){
  createCanvas(windowWidth, windowHeight);
  
  let btn1 = mmm;
  btn1.mouseClicked(popUp);
  btn1.position(1250,385);
  btn1.size(150,164);
  
  let btn3 = bbb;
  btn3.mouseClicked(popUp2);
  btn3.position(0,0);
  btn3.size(285,360);
  
   let btn5 = ddd;
  btn5.mouseClicked(popUp3);
  btn5.position(334,880);
  btn5.size(435,380);
  
   let btn7 = nnn;
  btn7.mouseClicked(popUp4);
  btn7.position(0,1045);
  btn7.size(635,285);
  
   let btn9 = ccc;
  btn9.mouseClicked(popUp5);
  btn9.position(557,120);
  btn9.size(470,520);
  
   let btn11 = ppp;
  btn11.mouseClicked(popUp6);
  btn11.position(1175,0);
  btn11.size(390,285);
  
  //작은 이미지 삽입 버튼 제작

  let btn2 = mug;
  btn2.mouseClicked(popOut);
 
  let btn4 = brain;
  btn4.mouseClicked(popMid);
 
  let btn6 = dama;
  btn6.mouseClicked(popMid2);
  
  let btn8 = news;
  btn8.mouseClicked(popMid3);
  
  let btn10 = com;
  btn10.mouseClicked(popMid4);
  
  let btn12 = pic;
  btn12.mouseClicked(popMid5);
  
  //버튼에 팝미드 정의
  
   let btna = braint;
  btna.mouseClicked(popOut2);
  
   let btnb = damat;
  btnb.mouseClicked(popOut3);
  
  let btnc = newst;
  btnc.mouseClicked(popOut4);
  
  let btnd = comt;
  btnd.mouseClicked(popOut5);
  
  let btne = pict;
  btne.mouseClicked(popOut6);
  
}
//텍스트 버튼 제작


  
function popUp() {
  mug.show();
  mug.position(520, 400);
}

function popOut() {
  mug.hide();
}

function popUp2() {
  brain.show();
  brain.position(520, 400);
}

function popOut2() {
  braint.hide();
  brain.hide();
}

function popUp3() {
  dama.show();
  dama.position(520, 400);
}

function popOut3() {
  damat.hide();
  dama.hide();
}

function popUp4() {
  news.show();
  news.position(520, 400);
}

function popOut4() {
  newst.hide();
  news.hide();
}

function popUp5() {
  com.show();
  com.position(520, 400);
}

function popOut5() {
  comt.hide();
  com.hide();
}

function popUp6() {
  pic.show();
  pic.position(520, 400);
}

function popOut6() {
  pict.hide();
  pic.hide();
}




  
function popMid() {
  braint.show();
  braint.position(520, 400);
}
function popMid2() {
  damat.show();
  damat.position(520, 400);
}
function popMid3() {
  newst.show();
  newst.position(520, 400);
}
function popMid4() {
  comt.show();
  comt.position(520, 400);
}
function popMid5() {
  pict.show();
  pict.position(520, 400);
}
  
function draw() {
  starlight.position (0,0);
  starlight.size(1563,1330);
  
  
} //이미지 파일 재생

