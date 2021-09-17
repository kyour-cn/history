/**************ModPE Script
版本适配:
    辅助 js  Space专用jz生成器    0.1+
    数据包  70701packet   0.8
 **************光夜-Space工作组
      欢迎使用《Space_70701》1.8
"既然你打开了我的js源码,那我有话说了"
  1.我对安卓和Java不太熟悉,所以这个js有诸多不足,也没什好参考甚至抄袭的。
  2.我没有专业知识,所以请大神们帮我看看存在的一些问题。
  3.如果你不会这东东,并且发现了bug请联系我。
   ●再次声明我的联系方式
     *QQ:aa1@90.cm(2653907035)
     *邮箱:aa1@90.cm
     *贴吧:小小草_小小爱
    *制作:光夜-Space工作组<小小草_小小爱>个人制作
★非专业人员请不要乱动以下内容.有问题联系作者
★注:如果无法运行此js.请看看有没有先放好数据包(本地文件).位置在 "默认储存路径/games/70701packet/"
*****************///70701.top
var bb="1.8";
var Time_NEW=new Date().getTime();
function dip2px(c,d){
return Math.ceil(d*c.getResources().getDisplayMetrics().density)}
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();var getSd=android.os.Environment.getExternalStorageDirectory().getAbsolutePath();var _08='检测当前数据包版本不适合当前js版本，请放置相对应的数据包!',_09='您未放置数据包,js无法正常工作,如果您已经放置,请检查路径是否正确!\n正确路径: '+getSd+'/games/70701packet',_07='未知错误!',_10='您当前使用的版本为《1.8》,是否检查有无更新版本?\n选择是将跳转到作者发布js的帖子,找到链接楼,里面可能有最新版说明或最新版文件!\n[如果链接失效请联系作者]';
var uti_pan='http://tieba.baidu.com/p/3573461863?share=9105&fr=share',pan_apk='http://x.co/5k8y3',pan_js='http://tieba.baidu.com/p/3573461863?share=9105&fr=share';var uri_pan=pan_js;
var geterr_1=getSd+'/games/70701packet';
var geterr_2=getSd+'/games/com.mojang/minecraftpe';
var path_music=getSd+'/games/70701packet/assets/music/';
var errFile=0;var BB={};
function _fx_0(){
var _xc_01=new java.lang.Thread(
new java.lang.Runnable({
run: function(){
while(1){
if(errms==0){print(_07);}
if(errms==1){print(_08);}
if(errms==2){print(_09);}
_xc_01.sleep(2000)
}}}));_xc_01.start()}
var errms=null
function _011(){
if(!java.io.File(geterr_1).exists()){errms=2}
if(!java.io.File(geterr_2).exists()){errme=0}
if((!new java.io.File(getSd+'/games/70701packet/META-INF/Space_v8.txt').exists())&&new java.io.File(getSd+'/games/70701packet/META-INF').exists()){errms=1}
if(errms!==null){_fx_0()}
if(!new java.io.File(getSd+'/games/70701packet').exists()){
eval('无法找到数据包,请正确放置数据包的位置！［把解压后的"70701packet"文件夹放在"'+getSd+'/games" 路径中即可!］')
}
};_011();
var anx=800,any=480;
function dywe(){
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
anx=ctx.getWindowManager().getDefaultDisplay().getWidth()
any=ctx.getWindowManager().getDefaultDisplay().getHeight()
}}))};dywe();
var zd=ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE);
var ZD=zd;
var se1=16;
var btnsize=50;
var se21=20,se22=220;
var se41=127,se42=0,se43=0,se44=0;
var clr=255,clr1=255,clr2=255,clr3=255
var bj1=20,bj2=100,bj3=0,bj4=0;
var isoks=readData("isoks"),isokes=readData("isokes");
var m_n= getSd+"/games/70701packet/assets/back/";
var setms=1,isHS=0;
button_2="butto.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(bases, 0), 0, android.util.Base64.decode(bases, 0).length))";
var ms1=".setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(bj1,bj2,bj3,bj4)))";
var ms2=".setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeFile(m_n+'S1')))";
var ms3=".setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeFile(m_n+'S2')))";
var ms4=".setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeFile(m_n+'S3')))";
var ms6=".setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeFile(m_n+'S4')))";
var ms5=".setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeFile(getSd+'/games/70701packet/GUI/btk.png')))";
var Spacelogo= new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeFile(getSd+'/games/70701packet/res/viewlogo'));
var _000=getSd+"/games/70701packet/";
var _001=".setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeFile(_000)))";
var fx_yy=1;
var bar=ms1;var fx_new=true;
var ff1="功能未完善";
var msgetdata=readData("ms");
function guisetfx(){
if( readData("tsd")==1){
se1= readData("textsize")}
if(readData("getbutton")==1){
se21=readData("button1");
se22=readData("button2")}
if( readData("btnsize")==1){
btnsize=readData("buttonsize") }
if(readData("sedata")==1){
se41=readData("se41");
se42=readData("se42");
se43=readData("se43");
se44=readData("se44")}
if(readData("clrdata")==1){
clr=readData("clr");
clr1=readData("clr1");
clr2=readData("clr2");
clr3=readData("clr3")}
if(readData("gm")!=""){
setms=readData("gm")}
if(readData("msdata")==0){
setms=0}else if(readData("msdata")==1){
setms=1; bar=ms1}else if( readData("msdata") ==2){setms=1; bar=ms2}else if( readData("msdata") ==3){setms=1; bar=ms3}else if( readData("msdata") ==4){setms=1; bar=ms4}else if( readData("msdata") ==5){setms=1; bar=ms5}else if( readData("msdata") ==6){setms=1; bar=ms6}
if(readData('fx_yy')==1){fx_yy=1}
if(readData('fx_yy')==2){fx_yy=2}
if(readData('fxnew')!=''){fx_new=false}
};eval(guisetfx());
function _012(){
if(java.io.File(getSd+"/games/70701packet/GUI/button.png").exists()){
button_2="butto.setImageBitmap(android.graphics.BitmapFactory.decodeFile(getSd+'/games/70701packet/GUI/button.png'))"}
};eval(_012());
function image(){
var png= new android.widget.ImageView(ctx); 
png.setImageBitmap(android.graphics.BitmapFactory.decodeFile(getSd+'/games/70701packet/res/diain'))
return png;
};
var f_t=getSd+"/games/70701packet/assets/back/";
var fx_t,fx_mt;
function hhi(){
var _1=java.io.File(f_t+'f.t');
var _2=java.io.File(f_t+'a.t');
var _3=java.io.File(f_t+'m.t');
if(_1.exists()){
fx_t=new android.graphics.Typeface.createFromFile(_1);
}else if(_2.exists()){
fx_t=new android.graphics.Typeface.createFromFile(_2);
errFile++
}else{errFile++}
if(_3.exists()){
fx_mt=new android.graphics.Typeface.createFromFile(_3);
}else{errFile++}
}hhi();
//1.0菜单
var gameic=true;
function fxcdz(){
try{
if(clr<=70){err(r[56]);clr=255
saveData("clr",clr);
saveData("clr1",clr1);
saveData("clr2",clr2);
saveData("clr3",clr3);
}}catch(e){print(e)}
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
try{
var layout=new android.widget.LinearLayout(ctx)
   var menu=new android.widget.PopupWindow();
   menu.setFocusable(true);
   mainMenu=menu;
   layout.setOrientation(1)

var fxwba=new android.widget.TextView(ctx)
fxwba.setText(r[0])
fxwba.setTypeface(fx_t)
fxwba.setTextColor(android.graphics.Color.argb(200,255,255,255))
fxwba.setTextSize(20)
layout.addView(fxwba)
if(gameic){
var fxicon= new android.widget.ImageView(ctx); 
fxicon.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(baselogo, 0), 0, android.util.Base64.decode(baselogo, 0).length))
fxicon.setOnClickListener(new android.view.View.OnClickListener({
onClick: function() {
//print(r[3])
fxkj()
}
}))
layout.addView(fxicon)
}
var fxwba=new android.widget.TextView(ctx)
fxwba.setText(Time(3)+"时"+Time(4)+"分"+Time(5)+"秒")
fxwba.setTypeface(fx_t)
fxwba.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxwba.setTextSize(12)
layout.addView(fxwba)

var fxala=new android.widget.Button(ctx)
fxala.setText(vv[0])
fxala.setTextSize(se1)
fxala .setTypeface(fx_t)
if(setms==1){ eval("fxala"+bar)}
fxala.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxala.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
fxcda()
}}))
layout.addView(fxala)

var fxalb=new android.widget.Button(ctx)
fxalb.setText(vv[1])
fxalb.setTextSize(se1)
fxalb .setTypeface(fx_t)
if(setms==1){ eval("fxalb"+bar)}
fxalb.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxalb.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
fxcdb()
}}))
layout.addView(fxalb)

var fxalg=new android.widget.Button(ctx)
fxalg.setText(vv[2])
fxalg.setTextSize(se1)
fxalg .setTypeface(fx_t)
if(setms==1){ eval("fxalg"+bar)}
fxalg.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxalg.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
fxcdu()
}}))
layout.addView(fxalg)

var fxali=new android.widget.Button(ctx)
fxali.setText(vv[3])
fxali.setTextSize(se1)
fxali .setTypeface(fx_t)
if(setms==1){ eval("fxali"+bar)}
fxali.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxali.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
fxcdj()
}}))
layout.addView(fxali)

var fxalg=new android.widget.Button(ctx)
fxalg.setText(vv[4])
fxalg.setTextSize(se1)
fxalg .setTypeface(fx_t)
if(setms==1){ eval("fxalg"+bar)}
fxalg.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxalg.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
fxcdbz()
}}))
layout.addView(fxalg)

var fxalc=new android.widget.Button(ctx)
fxalc.setText(vv[5])
fxalc.setTextSize(se1)
fxalc .setTypeface(fx_t)
if(setms==1){ eval("fxalc"+bar)}
fxalc.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxalc.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
fxcdc()
}}))
layout.addView(fxalc)

var fxty=new android.widget.LinearLayout(ctx)
var fxlogo= new android.widget.ImageView(ctx); 
fxlogo.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(icon, 0), 0, android.util.Base64.decode(icon, 0).length))
fxlogo.setOnClickListener(new android.view.View.OnClickListener({
onClick: function() {
fxhhc()
}
}))
fxty.addView(fxlogo,70,55)

var fximg= new android.widget.ImageView(ctx); 
fximg.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(homeb, 0), 0, android.util.Base64.decode(homeb, 0).length))
fximg.setOnClickListener(new android.view.View.OnClickListener({
onClick: function() {
fxhome()
}}))
fxty.addView(fximg,70,55)

var fxpng= new android.widget.ImageView(ctx); 
fxpng.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(basecc, 0), 0, android.util.Base64.decode(basecc, 0).length))
fxpng.setOnClickListener(new android.view.View.OnClickListener({
onClick: function() {
fxmusic()
}}))
fxty.addView(fxpng,70,55)
layout.addView(fxty)

var mlayout=makeMenu(ctx,menu,layout);
   menu.setContentView(mlayout);
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()/3.3333333333);
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());

menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(se41,se42,se43,se44)))

   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,0,0);
}catch(er){err(r[4]+er)}
};

function makeMenu(ctx,menu,layout){ 
var mlayout=new android.widget.RelativeLayout(ctx);
var svParams=new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT,android.widget.RelativeLayout.LayoutParams.FILL_PARENT);
var scrollview=new android.widget.ScrollView(ctx);
var pad=dip2px(ctx,2);
scrollview.setPadding(pad,pad,pad,pad);
scrollview.setLayoutParams(svParams);
scrollview.addView(layout);
mlayout.addView(scrollview);
return mlayout;
};
//1.1常用工具
function fxcda(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
var layout=new android.widget.LinearLayout(ctx)
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx,30));
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)
var fxwba=new android.widget.TextView(ctx)
fxwba.setText(r[5])
fxwba .setTypeface(fx_t)
fxwba.setTextColor(android.graphics.Color.argb(200,255,255,255))
fxwba.setTextSize(20)
layout.addView(fxwba)

var fxala=new android.widget.Button(ctx)
fxala.setText(vv[29])
fxala.setTextSize(se1)
fxala .setTypeface(fx_t)
if(setms==1){ eval("fxala"+bar)}
fxala.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxala.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
fxkj()
}}))
layout.addView(fxala)

var fxala=new android.widget.Button(ctx)
fxala.setText(vv[51])
fxala.setTextSize(se1)
fxala .setTypeface(fx_t)
if(setms==1){ eval("fxala"+bar)}
fxala.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxala.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
JZJZ()
}}))
layout.addView(fxala)

var fxala=new android.widget.Button(ctx)
fxala.setText('模拟钢琴')
fxala.setTextSize(se1)
fxala .setTypeface(fx_t)
if(setms==1){ eval("fxala"+bar)}
fxala.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxala.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
music_gq()
}}))
layout.addView(fxala)

var fxala=new android.widget.Button(ctx)
fxala.setText(vv[22])
fxala.setTextSize(se1)
fxala .setTypeface(fx_t)
if(setms==1){ eval("fxala"+bar)}
fxala.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxala.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
fxhhc()
}}))
layout.addView(fxala)

var fxalo=new android.widget.Button(ctx)
fxalo.setText('文件浏览器')
fxalo.setTextSize(se1)
fxalo .setTypeface(fx_t)
if(setms==1){ eval("fxalo"+bar)}
fxalo.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxalo.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
$_G.printfile(getSd,true,'$_G.evalfile(h)')
}}))
layout.addView(fxalo)

var fxalo=new android.widget.Button(ctx)
fxalo.setText(vv[34])
fxalo.setTextSize(se1)
fxalo .setTypeface(fx_t)
if(setms==1){ eval("fxalo"+bar)}
fxalo.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxalo.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
runin()
}}))
layout.addView(fxalo)

var fxalp=new android.widget.Button(ctx)
fxalp.setText(jmq("%u50CF%u7D20%u751F%u6210"))
fxalp.setTextSize(se1)
fxalp .setTypeface(fx_t)
if(setms==1){ eval("fxalp"+bar)}
fxalp.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxalp.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
xssc()
}}))
layout.addView(fxalp)

var fxau=new android.widget.Button(ctx)
fxau.setText(vv[7])
fxau.setTextSize(se1)
fxau .setTypeface(fx_t)
if(setms==1){ eval("fxau"+bar)}
fxau.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxau.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
getwj()
}}))
layout.addView(fxau)

var fxall=new android.widget.Button(ctx)
fxall.setText(vv[6])
fxall.setTextSize(se1)
fxall .setTypeface(fx_t)
if(setms==1){ eval("fxall"+bar)}
fxall.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxall.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
fxdhka()
}}))
layout.addView(fxall)

var mlayout=makeMenu(ctx,menu,layout);
   menu.setContentView(mlayout);
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()/3.3333333333);
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());

menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(se41,se42,se43,se44)))
 menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP, ctx.getWindowManager().getDefaultDisplay().getWidth()/3.3333333333 ,0);
 }catch(err){
    print(r[4]+err);
 }
}
//1.2作弊
function fxcdb(){
var layout=new android.widget.LinearLayout(ctx)
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx,30));
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)
var fxwba=new android.widget.TextView(ctx)
fxwba.setText(r[6])
fxwba .setTypeface(fx_t)
fxwba.setTextColor(android.graphics.Color.argb(200,255,255,255))
fxwba.setTextSize(20)
layout.addView(fxwba)

var fxala=new android.widget.Button(ctx)
fxala.setText(vv[8])
fxala.setTextSize(se1)
fxala .setTypeface(fx_t)
if(setms==1){ eval("fxala"+bar)}
fxala.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxala.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
fxtmi()
}}))
layout.addView(fxala)

var fxalo=new android.widget.Button(ctx)
fxalo.setText(jmq("%u8FD4%u56DE%u6B7B%u4EA1%u5730"))
fxalo.setTextSize(se1)
fxalo .setTypeface(fx_t)
if(setms==1){ eval("fxalo"+bar)}
fxalo.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxalo.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
fuswin()
}}))
layout.addView(fxalo)

var fxla=new android.widget.Button(ctx)
fxla.setText(vv[35])
fxla.setTextSize(se1)
fxla .setTypeface(fx_t)
if(setms==1){ eval("fxla"+bar)}
fxla.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxla.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
setzb()
}}))
layout.addView(fxla)

var fxalb=new android.widget.Button(ctx)
fxalb.setText(vv[24])
fxalb.setTextSize(se1)
fxalb .setTypeface(fx_t)
if(setms==1){ eval("fxalb"+bar)}
fxalb.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxalb.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
fxwc()
}}))
layout.addView(fxalb)

var fxalk=new android.widget.Button(ctx)
fxalk.setText(vv[9])
fxalk.setTextSize(se1)
fxalk .setTypeface(fx_t)
if(setms==1){ eval("fxalk"+bar)}
fxalk.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxalk.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
fxcc1()
}}))
layout.addView(fxalk)

var fxgi=new android.widget.Button(ctx)
fxgi.setText(vv[10])
fxgi.setTextSize(se1)
fxgi .setTypeface(fx_t)
if(setms==1){ eval("fxgi"+bar)}
fxgi.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxgi.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
wwwccc()
}}))
layout.addView(fxgi)

var mlayout=makeMenu(ctx,menu,layout);
   menu.setContentView(mlayout);
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()/3.3333333333);
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());

menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(se41,se42,se43,se44)))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP, ctx.getWindowManager().getDefaultDisplay().getWidth()/3.3333333333 ,0);
 }catch(err){
    print(r[4]+err);
 }
}
//1.3关于
function fxcdc(){
var layout=new android.widget.LinearLayout(ctx)
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx,30));
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var fxwba=new android.widget.TextView(ctx)
fxwba.setText(jmq("%u5173%u4E8E"))
fxwba .setTypeface(fx_t)
fxwba.setTextSize(20)
layout.addView(fxwba)

var fxala=new android.widget.Button(ctx)
fxala.setText('检查更新')
fxala.setTextSize(se1)
if(setms==1){ eval("fxala"+bar)}
fxala .setTypeface(fx_t)
fxala.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxala.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
isgx()
}}))
layout.addView(fxala)

var fxala=new android.widget.Button(ctx)
fxala.setText('更新日志')
fxala.setTextSize(se1)
if(setms==1){ eval("fxala"+bar)}
fxala .setTypeface(fx_t)
fxala.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxala.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
showrz()
}}))
layout.addView(fxala)

var fxalb=new android.widget.Button(ctx)
fxalb.setText(vv[12])
fxalb.setTextSize(se1)
fxalb .setTypeface(fx_t)
if(setms==1){ eval("fxalb"+bar)}
fxalb.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxalb.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
fxtsi()
}}))
layout.addView(fxalb)

var fxaliu=new android.widget.Button(ctx)
fxaliu.setText(vv[13])
fxaliu.setTextSize(se1)
fxaliu .setTypeface(fx_t)
if(setms==1){ eval("fxaliu"+bar)}
fxaliu.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxaliu.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
webview(uri_pan)
}}))

layout.addView(fxaliu)

var mlayout=makeMenu(ctx,menu,layout);
   menu.setContentView(mlayout); menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()/3.3333333333);
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());

menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(se41,se42,se43,se44)))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP, ctx.getWindowManager().getDefaultDisplay().getWidth()/3.3333333333 ,0);
 }catch(err){
    print(r[4]+err);
 }
}
//1.4游戏设置
function fxcdu(){
var layout=new android.widget.LinearLayout(ctx)
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx,30));
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)
var fxwba=new android.widget.TextView(ctx)
fxwba.setText(r[8])
fxwba .setTypeface(fx_t)
fxwba.setTextColor(android.graphics.Color.argb(200,255,255,255))
fxwba.setTextSize(20)
layout.addView(fxwba)

var fxala=new android.widget.Button(ctx)
fxala.setText(vv[46])
fxala.setTextSize(se1)
if(setms==1){ eval("fxala"+bar)}
fxala .setTypeface(fx_t)
fxala.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxala.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
fx_bs()
}}))
layout.addView(fxala)

var fxala=new android.widget.Button(ctx)
fxala.setText(vv[14])
fxala.setTextSize(se1)
fxala .setTypeface(fx_t)
if(setms==1){ eval("fxala"+bar)}
fxala.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxala.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
fxssd()
}}))
layout.addView(fxala)

var fxal9=new android.widget.Button(ctx)
fxal9.setText(vv[15])
fxal9.setTextSize(se1)
fxal9 .setTypeface(fx_t)
if(setms==1){ eval("fxal9"+bar)}
fxal9.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxal9.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
set_game()
}}))
layout.addView(fxal9)

var fxla=new android.widget.Button(ctx)
fxla.setText(vv[16])
fxla.setTextSize(se1)
fxla .setTypeface(fx_t)
if(setms==1){ eval("fxla"+bar)}
fxla.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxla.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
fxtm()
}}))
layout.addView(fxla)

var fxalb=new android.widget.Button(ctx)
fxalb.setText(vv[17])
fxalb.setTextSize(se1)
fxalb .setTypeface(fx_t)
if(setms==1){ eval("fxalb"+bar)}
fxalb.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxalb.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
fxgggk()
}}))
layout.addView(fxalb)

var fxalyy=new android.widget.Button(ctx)
fxalyy.setText(vv[18])
fxalyy.setTextSize(se1)
fxalyy .setTypeface(fx_t)
if(setms==1){ eval("fxalyy"+bar)}
fxalyy.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxalyy.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
fxhome()
}}))
layout.addView(fxalyy)

var fxalyy=new android.widget.Button(ctx)
fxalyy.setText('红石开关')
fxalyy.setTextSize(se1)
fxalyy .setTypeface(fx_t)
if(setms==1){ eval("fxalyy"+bar)}
fxalyy.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxalyy.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
ishson()
}}))
layout.addView(fxalyy)

var mlayout=makeMenu(ctx,menu,layout);
   menu.setContentView(mlayout);
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()/3.3333333333);
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());

menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(se41,se42,se43,se44)))

   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP, ctx.getWindowManager().getDefaultDisplay().getWidth()/3.3333333333 ,0);
 }catch(err){
    print(r[4]+err);
 }
}
//1.5插件设置
function fxcdj(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
var layout=new android.widget.LinearLayout(ctx)
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx,30));
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)
var fxwba=new android.widget.TextView(ctx)
fxwba.setText(r[9])
fxwba .setTypeface(fx_t)
fxwba.setTextColor(android.graphics.Color.argb(200,255,255,255))
fxwba.setTextSize(20)
layout.addView(fxwba)

var fxr=new android.widget.Button(ctx)
fxr.setText(vv[50])
fxr.setTextSize(se1)
fxr .setTypeface(fx_t)
if(setms==1){ eval("fxr"+bar)}
fxr.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxr.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
$_G.setyy()
}}))
layout.addView(fxr)

var fx0=new android.widget.Button(ctx)
fx0.setText(vv[19])
fx0.setTextSize(se1)
fx0 .setTypeface(fx_t)
if(setms==1){ eval("fx0"+bar)}
fx0.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fx0.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
setGUI()
}}))
layout.addView(fx0)
 var fx1=new android.widget.Button(ctx)
fx1.setText(vv[20])
fx1.setTextSize(se1)
fx1 .setTypeface(fx_t)
if(setms==1){ eval("fx1"+bar)}
fx1.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fx1.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
fxgn()
}}))
layout.addView(fx1)

var fxalb=new android.widget.Button(ctx)
fxalb.setText(vv[23])
fxalb.setTextSize(se1)
fxalb .setTypeface(fx_t)
if(setms==1){ eval("fxalb"+bar)}
fxalb.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxalb.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
fxmusic()
}}))
layout.addView(fxalb)
var mlayout=makeMenu(ctx,menu,layout);
   menu.setContentView(mlayout);
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()/3.3333333333);
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());

menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(se41,se42,se43,se44)))

   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()/3.3333333333,0);
 }catch(err){print(r[4]+err)}
}
//1.6帮助
function fxcdbz(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
var layout=new android.widget.LinearLayout(ctx)
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx,30));
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)
var fxwba=new android.widget.TextView(ctx)
fxwba.setText(jmq("%u5E2E%u52A9"))
fxwba.setTextSize(20)
fxwba .setTypeface(fx_t)
fxwba.setTextColor(android.graphics.Color.argb(200,255,255,255))
layout.addView(fxwba)

var fxala=new android.widget.Button(ctx)
fxala.setText('存档程序信息')
fxala.setTextSize(se1)
fxala .setTypeface(fx_t)
if(setms==1){ eval("fxala"+bar)}
fxala.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxala.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
getccdd()
}}))
layout.addView(fxala)

var fxala=new android.widget.Button(ctx)
fxala.setText(jmq("%u8BF4%u660E%u7EA7%u7528%u6CD5"))
fxala.setTextSize(se1)
fxala .setTypeface(fx_t)
if(setms==1){ eval("fxala"+bar)}
fxala.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxala.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
getsm()
}}))
layout.addView(fxala)

var fxala=new android.widget.Button(ctx)
fxala.setText(vv[25])
fxala.setTextSize(se1)
fxala .setTypeface(fx_t)
if(setms==1){ eval("fxala"+bar)}
fxala.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxala.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
ghh()
}}))
layout.addView(fxala)

var fxalhh=new android.widget.Button(ctx)
fxalhh.setText(vv[26])
fxalhh.setTextSize(se1)
fxalhh .setTypeface(fx_t)
if(setms==1){ eval("fxalhh"+bar)}
fxalhh.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxalhh.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
idid()
}}))
layout.addView(fxalhh)

var fxalh=new android.widget.Button(ctx)
fxalh.setText(jmq("%u5907%u5FD8%u5F55"))
fxalh.setTextSize(se1)
fxalh .setTypeface(fx_t)
if(setms==1){ eval("fxalh"+bar)}
fxalh.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxalh.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
fx_back()
}}))
layout.addView(fxalh)

var fxalkk=new android.widget.Button(ctx)
fxalkk.setText(vv[27])
fxalkk.setTextSize(se1)
fxalkk .setTypeface(fx_t)
if(setms==1){ eval("fxalkk"+bar)}
fxalkk.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
fxalkk.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
try{
webview(pan_apk)}catch(x){err(x)}
}}))
layout.addView(fxalkk)

var mlayout=makeMenu(ctx,menu,layout);
   menu.setContentView(mlayout);
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()/3.3333333333);
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());

menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(se41,se42,se43,se44)))

   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()/3.3333333333,0);
 }catch(err){
print(r[4]+err);
}}
//菜单结束
function showrz(){
show(readtext(getSd+"/games/70701packet/res/rz.text"))
}
function isgx(){
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
var dialog=new android.app.AlertDialog.Builder(ctx)
dialog.setTitle("是否查看新版本?")
dialog.setMessage(_10)
dialog.setPositiveButton("是",new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
webview(pan_js);
print('正在跳转...')
}})
dialog.setNegativeButton("否",new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
}})
dialog.show()
}})
}
function ishson(){
fxzdy('是否打开红石?','设置后需要重新进入游戏才会生效','打开',"saveData('HS',1)","关闭","deleteData('HS')")}
function runin(){
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
try{
var menu= new android.widget.LinearLayout(ctx);
var scroll= new android.widget.ScrollView(ctx);
menu.setOrientation(android.widget.LinearLayout.VERTICAL);
scroll.addView(menu);
var dialog= new android.app.Dialog(ctx);
dialog.setContentView(scroll);
dialog.setTitle(vv[34]);
var dd= new android.widget.Button(ctx)
dd.setTextSize(15)
var ided= new android.widget.EditText(ctx); 
ided.setHint(r[50]); 
menu.addView(ided);
ided.setInputType(android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL)
var gb= new android.widget.Button(ctx)
gb.setTextSize(15)
gb.setText(jmq("%u6267%u884C")); 
gb.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
try{
if( ided.getText()!=""){
eval(ided.getText()+" ")
}else if(ided.getText()==""){err(r[51])}
} catch (e){err(r[4]+e)}
}})
menu.addView(gb)
dialog.show()
} catch (e){print ("Error: "+e)}
}})
}
function setzb(){
try{
var dialog=new android.app.AlertDialog.Builder(ctx)
dialog.setTitle(vv[36])
dialog.setIcon( android.R.drawable.ic_input_get)
dialog.setPositiveButton(vv[31],new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
}})
dialog.setItems(new java.lang.String(vv[49]+" ").split(","),new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
if(Math.random()<0.3){isok()}
switch(w){case 0:
Player.setArmorSlot(0, 298, 0);
Player.setArmorSlot(1, 299, 0);
Player.setArmorSlot(2, 300, 0);
Player.setArmorSlot(3, 301, 0);
print("ok")
break;case 1:
Player.setArmorSlot(0, 306, 0);
Player.setArmorSlot(1, 307, 0);
Player.setArmorSlot(2, 308, 0);
Player.setArmorSlot(3, 309, 0);
print("ok")
break;case 2:
Player.setArmorSlot(0, 302, 0);
Player.setArmorSlot(1, 303, 0);
Player.setArmorSlot(2, 304, 0);
Player.setArmorSlot(3, 305, 0);
print("ok")
break;case 3:
Player.setArmorSlot(0, 314, 0);
Player.setArmorSlot(1, 315, 0);
Player.setArmorSlot(2, 316, 0);
Player.setArmorSlot(3, 317, 0);
print("ok")
break;case 4:
Player.setArmorSlot(0, 310, 0);
Player.setArmorSlot(1, 311, 0);
Player.setArmorSlot(2, 312, 0);
Player.setArmorSlot(3, 313, 0);
print("ok");break
}}});dialog.show()
}catch(er){err(er)}
}
var rit= 0
function getsm(){
show( "不好意思,暂时没有完善")
}
function getwj(){
try{
var x= FX.g.x(),y= FX.g.y(),z= FX.g.z()
if(lzlz==1){
err(jmq("%u5B58%u6863 ：")+FX.g.c_name()+jmq("  %u6635%u79F0：")+FX.g.p_name( Player.getEntity())+ "\n"+jmq("%u4F4D%u7F6EX：")+Math.round(x)+"  Y："+ Math.round(y)+"  Z："+ Math.round(z)+"\n"+jmq("%u6E38%u620F%u6A21%u5F0F：")+fget1()+jmq("  %u6E38%u620F%u65F6%u95F4:")+ Level.getTime()+"\n"+jmq("%u811A%u4E0B%u65B9%u5757:")+ Level.getTile(x,y-2,z)+jmq("%u624B%u6301%u7269%u54C1ID:")+getCarriedItem()+jmq("%u7279%u6B8A%u503C :")+ Player.getCarriedItemData()+jmq("\n%u751F%u7269%u6570%u91CF: ")+FX.g.num().length)
}else {err(r[40])}
}catch(e){print(jmq("%u4FE1%u606F%u9519%u8BEF:")+e)}
}
//////////////////////////////////////////////
function fx_back(){
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
try{
var menu= new android.widget.LinearLayout(ctx);
var scroll= new android.widget.ScrollView(ctx);
menu.setOrientation(android.widget.LinearLayout.VERTICAL);
scroll.addView(menu);
var dialog= new android.app.Dialog(ctx);
dialog.setContentView(scroll);
dialog.setTitle("备忘录");
var dd= new android.widget.Button(ctx)
dd.setTextSize(15)
var fxwba=new android.widget.TextView(ctx)
fxwba.setText("备忘录未完善")
fxwba.setTextSize(20)
menu.addView(fxwba)
var f1=new android.widget.LinearLayout(ctx)

menu.addView(f1)
//null
dialog.show()
} catch (e){print ("Error: "+e)}
}})
}
function setGUI(){
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
try{
var menutmi = new android.widget.LinearLayout(ctx);
var scrolltmi = new android.widget.ScrollView(ctx);
menutmi.setOrientation(android.widget.LinearLayout.VERTICAL);
scrolltmi.addView(menutmi);
var dialogtmi = new android.app.Dialog(ctx); 
dialogtmi.setContentView(scrolltmi);
dialogtmi.setTitle(r[58]);
var dd= new android.widget.Button(ctx)
dd.setTextSize(15)
var f1=new android.widget.LinearLayout(ctx)
var f2=new android.widget.LinearLayout(ctx)
dd.setText(r[59]); 
dd .setTypeface(fx_t)
dd.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
setgui(jmq("%u80CC%u666F%u989C%u8272"))
}}); 
f1.addView(dd);
var gg= new android.widget.Button(ctx);
gg.setTextSize(15);
gg.setText(r[60]);
gg .setTypeface(fx_t)
gg.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
settext(jmq("%u6587%u5B57%u989C%u8272"))
}}); 
f1.addView(gg);
var ga= new android.widget.Button(ctx);
ga.setTextSize(15);
ga.setText(r[61]);
ga .setTypeface(fx_t)
ga.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
setgui2()
}}); 
f1.addView(ga);
menutmi.addView(f1);
var gb= new android.widget.Button(ctx);
gb.setTextSize(15);
gb.setText(r[62]); 
gb .setTypeface(fx_t)
gb.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
setbut()
}}); 
f2.addView(gb)
var gbt= new android.widget.Button(ctx)
gbt.setTextSize(15)
gbt.setText('5.按钮图片');
gbt .setTypeface(fx_t)
gbt.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
try{
$_G.printfile(getSd,"png jpg","$_F.ydfile(h,getSd+'/games/70701packet/GUI','button.png');err('重启游戏生效')");
}catch(z){err(z)}
}}); 
f2.addView(gbt)
var gb= new android.widget.Button(ctx)
gb.setTextSize(15)
gb.setText(r[63]);
gb .setTypeface(fx_t)
gb.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
setcdbtn()
}}); 
f2.addView(gb)
menutmi.addView(f2)
dialogtmi.show()
} catch (e){print ("Error: "+e)}
}})
}
function setcdbtn(){
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
try{
var m= new android.widget.LinearLayout(ctx);
var s= new android.widget.ScrollView(ctx);
m.setOrientation(android.widget.LinearLayout.VERTICAL);
s.addView(m);
var d= new android.app.Dialog(ctx); 
d.setContentView(s);
d.setTitle(r[52]);
var f1=new android.widget.LinearLayout(ctx)
var f2=new android.widget.LinearLayout(ctx)
var dd= new android.widget.Button(ctx)
dd.setText(jmq("%u9ED8%u8BA4")); 
dd .setTypeface(fx_t)
dd.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
setms=0; saveData("msdata",0); print("ok")
}}); 
f1.addView(dd)
var dk= new android.widget.Button(ctx)
dk.setText(jmq("%u6837%u5F0F1")); 
dk .setTypeface(fx_t)
dk.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(bj1,bj2,bj3,bj4)))
dk.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
bar=ms1;print("ok")
setms=1; saveData("msdata",1)
}}); 
f1.addView(dk)
var d1= new android.widget.Button(ctx)
d1.setText(jmq("%u6837%u5F0F2")); 
d1 .setTypeface(fx_t)
d1.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeFile(m_n+'S1')))
d1.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
bar=ms2; print("ok")
setms=1 ;saveData("msdata",2)
}}); 
f1.addView(d1)
var d2= new android.widget.Button(ctx)
d2.setText( jmq("%u6837%u5F0F3")); 
d2 .setTypeface(fx_t)
d2.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeFile(m_n+'S2')))
d2.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
bar=ms3; print("ok");
setms=1;saveData("msdata",3)
}}); 
f1.addView(d2);
var d3= new android.widget.Button(ctx);
d3.setText( jmq("%u6837%u5F0F4")); 
d3 .setTypeface(fx_t)
d3.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeFile(m_n+'S3')));
d3.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
bar=ms4; print("ok");
setms=1 ;saveData("msdata",4)
}}); 
f1.addView(d3);
var d4= new android.widget.Button(ctx);
d4.setText(jmq("%u6837%u5F0F5")); 
d4 .setTypeface(fx_t)
d4.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeFile(m_n+'S4')));
d4.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
bar=ms6; print("ok");
setms=1;saveData("msdata",6)
}}); 
f1.addView(d4);
m.addView(f1);
if(java.io.File(getSd+"/games/70701packet/GUI/btk.png").exists()){
var d35= new android.widget.Button(ctx);
d35.setText(jmq("%u81EA%u5B9A%u4E49"));
d35 .setTypeface(fx_t)
d35.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeFile("sdcard/games/70701packet/GUI/btk.png")));
d35.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
bar=ms5;
setms=1 ;saveData("msdata",5);
print("ok")
}}); 
f1.addView(d35)
}
m.addView(f2)
var fxpng= new android.widget.ImageView(ctx); 
fxpng.setImageBitmap(android.graphics.BitmapFactory.decodeFile(getSd+'/games/70701packet/res/bael'))
m.addView(fxpng)
d.show()
} catch (e){print (r[4]+e)}
}})
}
//按ss
function setbut(){
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
try{
var m= new android.widget.LinearLayout(ctx);
var s= new android.widget.ScrollView(ctx);
m.setOrientation(android.widget.LinearLayout.VERTICAL);
s.addView(m);
var d= new android.app.Dialog(ctx); 
d.setContentView(s);
d.setTitle(vv[37]);
var idedit = new android.widget.EditText(ctx); 
idedit.setHint(vv[38]); 
m.addView(idedit);
idedit.setInputType(android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL)
var idedi= new android.widget.EditText(ctx); 
idedi.setHint(vv[39]); 
m.addView(idedi);
idedi.setInputType(android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL)
var ided= new android.widget.EditText(ctx); 
ided.setHint(vv[40]); 
m.addView(ided);
ided.setInputType(android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL)
var gb= new android.widget.Button(ctx)
gb.setTextSize(15)
gb.setText(vv[41]); 
gb.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
try{
if( idedit.getText()!=""&&idedi.getText() !=""){
se21= idedit.getText()
se22=idedi.getText()
saveData("getbutton",1)
saveData("button1",se21)
saveData("button2",se22)
}else if(ided.getText()==""){err(r[41])}
if( ided.getText()!=""){
btnsize=ided.getText()}
fxsetbtn()
saveData("btnsize",1)
saveData("buttonsize",btnsize)
print("OK")
if(Math.random()<0.2){isok()}
} catch (e){print (r[4]+e)}
}}); 
m.addView(gb);
d.show()
} catch (e){print ("Error: "+e)}
}})
}
//gui
var fxcy=0.3921568627
function setgui(a){
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
try{
var m= new android.widget.LinearLayout(ctx);
var scrolltmi = new android.widget.ScrollView(ctx);
m.setOrientation(android.widget.LinearLayout.VERTICAL);
scrolltmi.addView(m);
var dialogtmi = new android.app.Dialog(ctx); 
dialogtmi.setContentView(scrolltmi);
dialogtmi.setTitle(a);
var f1=new android.widget.LinearLayout(ctx)
var f2=new android.widget.LinearLayout(ctx)
var f3=new android.widget.LinearLayout(ctx)
var f4=new android.widget.LinearLayout(ctx)
var f5=new android.widget.LinearLayout(ctx)
var po=new android.widget.TextView(ctx)
po.setText(jmq("%u900F%u660E%u5EA6 "))
po.setTextSize(14)
f1.addView(po)
var p1=new android.widget.SeekBar(ctx)
p1.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener(){
onStopTrackingTouch: function(){
se41=Math.round(p1.getProgress()/fxcy)
saveData("sedata",1)
saveData("se41",se41)
pj.setTextColor(android.graphics.Color.argb(se41,se42,se43,se44))
}})
f1.addView(p1,380,45)
m.addView(f1)
var po=new android.widget.TextView(ctx)
po.setText(jmq("%u7EA2%u8272"))
po.setTextSize(15)
f2.addView(po)
var p2=new android.widget.SeekBar(ctx)
p2.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener(){
onStopTrackingTouch: function(){
se42=Math.round(p2.getProgress()/fxcy)
saveData("sedata",1)
saveData("se42",se42)
pj.setTextColor(android.graphics.Color.argb(se41,se42,se43,se44))
}})
f2.addView(p2,380,45)
m.addView(f2)
var po=new android.widget.TextView(ctx)
po.setText(vv[43])
po.setTextSize(15)
f3.addView(po)
var p3=new android.widget.SeekBar(ctx)
p3.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener(){
onStopTrackingTouch: function(){
se43=Math.round(p3.getProgress()/fxcy)
saveData("sedata",1)
saveData("se43",se43)
pj.setTextColor(android.graphics.Color.argb(se41,se42,se43,se44))
}})
f3.addView(p3,380,45)
m.addView(f3)
var po=new android.widget.TextView(ctx)
po.setText(vv[44])
po.setTextSize(15)
f4.addView(po)
var p4=new android.widget.SeekBar(ctx)
p4.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener(){
onStopTrackingTouch: function(){
se44=Math.round(p4.getProgress()/fxcy)
saveData("sedata",1)
saveData("se44",se44)
pj.setTextColor(android.graphics.Color.argb(se41,se42,se43,se44))
}})
f4.addView(p4,380,45)
m.addView(f4)
var pj=new android.widget.TextView(ctx)
pj.setText(r[38])
pj.setTextColor(android.graphics.Color.argb(se41,se42,se43,se44))
pj.setTextSize(20)
f5.addView(pj)
m.addView(f5)
p1.setProgress(se41*fxcy)
p2.setProgress(se42*fxcy)
p3.setProgress(se43*fxcy)
p4.setProgress(se44*fxcy)
 dialogtmi.show()
} catch (e){print ("Error: "+e)}
}});
}
function settext(a){
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
try{
var m= new android.widget.LinearLayout(ctx);
var scrolltmi = new android.widget.ScrollView(ctx)
m.setOrientation(android.widget.LinearLayout.VERTICAL);
scrolltmi.addView(m);
var dialogtmi = new android.app.Dialog(ctx); 
dialogtmi.setContentView(scrolltmi);
dialogtmi.setTitle(a);
var ff= new android.widget.LinearLayout(ctx)
var f1= new android.widget.LinearLayout(ctx),f2= new android.widget.LinearLayout(ctx),f3= new android.widget.LinearLayout(ctx),f4= new android.widget.LinearLayout(ctx),f5= new android.widget.LinearLayout(ctx);
var po=new android.widget.TextView(ctx)
po.setText(jmq("%u900F%u660E%u5EA6 "))
po.setTextSize(14)
f1.addView(po)
var p1=new android.widget.SeekBar(ctx)
p1.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener(){
onStopTrackingTouch: function(){
clr=Math.round(p1.getProgress()/fxcy)
saveData("clrdata",1)
saveData("clr",clr)
pj.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
}})
f1.addView(p1,380,45)
m.addView(f1)
var po=new android.widget.TextView(ctx)
po.setText(jmq("%u7EA2%u8272"))
po.setTextSize(15)
f2.addView(po)
var p2=new android.widget.SeekBar(ctx)
p2.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener(){
onStopTrackingTouch: function(){
clr1=Math.round(p2.getProgress()/fxcy)
saveData("clrdata",1)
saveData("clr1",clr1)
pj.setTextColor(android.graphics.Color.argb( clr,clr1,clr2,clr3 ))
}})
f2.addView(p2,380,45)
m.addView(f2)
var po=new android.widget.TextView(ctx)
po.setText(vv[43])
po.setTextSize(15)
f3.addView(po)
var p3=new android.widget.SeekBar(ctx)
p3.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener(){
onStopTrackingTouch: function(){
clr2=Math.round(p3.getProgress()/fxcy)
saveData("clrdata",1)
saveData("clr2",clr2)
pj.setTextColor(android.graphics.Color.argb( clr,clr1,clr2,clr3 ))
}})
f3.addView(p3,380,45)
m.addView(f3)
var po=new android.widget.TextView(ctx)
po.setText(vv[44])
po.setTextSize(15)
f4.addView(po)
var p4=new android.widget.SeekBar(ctx)
p4.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener(){
onStopTrackingTouch: function(){
clr3=Math.round(p4.getProgress()/fxcy)
saveData("clrdata",1)
saveData("clr3",clr3)
pj.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
}})
f4.addView(p4,380,45)
m.addView(f4)
var pj=new android.widget.TextView(ctx)
pj.setText(r[38])
pj.setTextColor(android.graphics.Color.argb(clr,clr1,clr2,clr3))
pj.setTextSize(20)
f5.addView(pj)
m.addView(f5)
p1.setProgress(clr*fxcy)
p2.setProgress(clr1*fxcy)
p3.setProgress(clr2*fxcy)
p4.setProgress(clr3*fxcy)
dialogtmi.show()
} catch (e){print ("Error: "+e)}
}})
}
function fxgn(){
try{
var a1='开',a2='关';
var b1=readData('ismusic'),b2=readData('istip');
var c1='提示音：',c2='存档提示：';
var d1=c1+a1,d2=c2+a1;
if(b1==0){d1=c1+a2};if(b2==0){d2=c2+a2}
ctx.runOnUiThread(new java.lang.Runnable({run:function(){try{
var sv=new android.widget.ScrollView(ctx);
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(0);
var t1=new android.widget.TextView(ctx);
t1.setText('点击按钮切换设置');
var btn=android.widget.Button;
var n1=new btn(ctx);
n1.setText(d1);
n1.setOnClickListener(new android.view.View.OnClickListener() { 
onClick:function(){try{
var v=readData("ismusic");if(v==0){saveData("ismusic",1);d1=c1+a1;n1.setText(d1)}else{saveData("ismusic",0);d1=c1+a2;n1.setText(d1)}
}catch(z){print(z)}}});
layout.addView(n1);
var n2=new btn(ctx);
n2.setText(d2);
n2.setOnClickListener(new android.view.View.OnClickListener() { 
onClick:function(){try{
var v=readData("istip");if(v==0){saveData("istip",1);d2=c2+a1;n2.setText(d2)}else{saveData("istip",0);d2=c2+a2;n2.setText(d2)}
}catch(z){print(z)}}});
layout.addView(n2);

sv.addView(layout);
var dialog=new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("插件设置")/*.setNegativeButton("按钮",new android.content.DialogInterface.OnClickListener()
{onClick:function(dialog,which){
}})*/.setPositiveButton("取消",null).create();dialog.setCanceledOnTouchOutside(false);dialog.show();}catch(err){print(r[4]+err);}}}))
}catch(z){err("错误!\n运算量大了难免会出错!\n"+z)}
}
function retbtn(n,e){
var b=new android.widget.Button(ctx);
b.setText(n);
b.setOnClickListener(new android.view.View.OnClickListener() { 
onClick:function(){
try{eval(e)}catch(z){print(z)}
}});
return b;
}
function setgui2(){
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
try{
var m= new android.widget.LinearLayout(ctx);
var scrolltmi = new android.widget.ScrollView(ctx);
m.setOrientation(android.widget.LinearLayout.VERTICAL);
scrolltmi.addView(m);
var dialogtmi = new android.app.Dialog(ctx); 
dialogtmi.setContentView(scrolltmi);
dialogtmi.setTitle(vv[45]);
var f1=new android.widget.LinearLayout(ctx)
var f2=new android.widget.LinearLayout(ctx)
var p4=new android.widget.SeekBar(ctx)
p4.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener(){
onStopTrackingTouch: function(){
se1=p4.getProgress()/3.3333333333
po.setTextSize(se1)
saveData("tsd",1)
saveData("texesize",se1)
}})
f1.addView(p4,380,45)
m.addView(f1)
var po=new android.widget.TextView(ctx)
po.setText(r[37])
po.setTextSize(se1)
f2.addView(po)
m.addView(f2)
dialogtmi.show()
} catch (e){print ("Error: "+e)}
}})
}
var fs=jmq("%u4F60%u6253%u5F00%u4E86");var fc=jmq("%u4F60%u5173%u95ED%u4E86");
var ii1,ii2,ii3,ii4,ii5,ii6;var kw=0;
function fxkj(){
ctx.runOnUiThread(new java.lang.Runnable(){run: function(){try{
var m= new android.widget.LinearLayout(ctx);
var s= new android.widget.ScrollView(ctx);
m.setOrientation(android.widget.LinearLayout.VERTICAL);
s.addView(m);
var d= new android.app.Dialog(ctx); 
d.setContentView(s);
d.setTitle(r[12]);
var dd= new android.widget.Button(ctx)
dd.setTextSize(15)
var y1= new android.widget.Button(ctx)
y1.setText(r[53]+':'+fget2(5))
y1 .setTypeface(fx_t)
y1.setTextSize(16)
y1.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
if(wxx==1){wxx=0;print(fc+r[53])}else if(wxx==0){wxx=1;print(fs+r[53])}
y1.setText(r[53]+':'+fget2(5))
}})
m.addView(y1)
var y2= new android.widget.Button(ctx)
y2.setText("连射弓:"+fget2(1))
y2 .setTypeface(fx_t)
y2.setTextSize(16)
y2.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
try{
if(cc==0){cc=1;print(fs+r[54])}else if(cc==1){cc=0;print(fc+r[54])}
}catch(e){print(r[4]+e)}
y2.setText("连射弓:"+fget2(1))
}})
m.addView(y2)
var y3= new android.widget.Button(ctx)
y3.setText("铺路:"+fget2(2))
y3 .setTypeface(fx_t)
y3.setTextSize(16)
y3.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
try{
if(pl==0||pl==2){pl=1;print(fs+"铺路")}else if(pl==1){pl=0;print(fc+"铺路")}
y3.setText('铺路:'+fget2(2))
}catch(e){print(r[4]+e)}
}})
m.addView(y3)
var y4= new android.widget.Button(ctx)
y4.setText("快速挖掘:"+fget2(6))
y4 .setTypeface(fx_t)
y4.setTextSize(16)
y4.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
try{
if(kw==0){for(var i=1;i<=255;i++){
Block.setDestroyTime(i,0.2)
};kw=1;print(fs+"快速挖掘")}else if(kw==1){for(var i=1;i<=255;i++){
Block.setDestroyTime(i,1)
};kw=0;print(fc+"快速挖掘")}
}catch(e){print(r[4]+e)}
y4.setText("快速挖掘:"+fget2(6))
}})
m.addView(y4)
var y5= new android.widget.Button(ctx)
y5.setText("疾跑:"+fget2(7))
y5 .setTypeface(fx_t)
y5.setTextSize(16)
y5.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
try{
if(Math.random()<0.1){isok()}
if(bbn==0){bbn=1;print(fs+"疾跑")}else if(bbn==1){bbn=0;print(fc+"疾跑")}
}catch(e){print(r[4]+e)}
y5.setText("疾跑:"+fget2(7))
}})
m.addView(y5)
var y6= new android.widget.Button(ctx)
y6.setText("模式:"+fget1())
y6 .setTypeface(fx_t)
y6.setTextSize(16)
y6.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
try{
if(Level.getGameMode()==0){Level.setGameMode(1)}else if(Level.getGameMode()==1){Level.setGameMode(0)}
}catch(e){print(r[4]+e)}
y6.setText("模式:"+fget1())
}})
m.addView(y6)
var y65= new android.widget.Button(ctx)
y65.setText("永昼:"+fget2(11))
y65 .setTypeface(fx_t)
y65.setTextSize(16)
y65.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
try{
if(fxyy==0){
if(Math.random()<0.2){isok()}
if(yzou){yzou=false}else{yzou=true}
y65.setText("永昼:"+fget2(11))
}else{show('请先关闭永夜')}
}catch(e){print(r[4]+e)}
}})
m.addView(y65)
var y7= new android.widget.Button(ctx)
y7.setText("永夜:"+fget2(8))
y7 .setTypeface(fx_t)
y7.setTextSize(16)
y7.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
try{
if(Math.random()<0.2){isok()}
if(lzlz==1){
if(fxyy==0){yzou=false;fxyy=1;Level.setNightMode(1)}else{Level.setNightMode(0);fxyy=0}
y7.setText("永夜:"+fget2(8))
}else{show('你还没有进入游戏')}
}catch(e){print(r[4]+e)}
}})
m.addView(y7)
var y8= new android.widget.Button(ctx)
y8.setText("动态光源:"+fget2(9))
y8 .setTypeface(fx_t)
y8.setTextSize(16)
y8.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
try{
if(dtgy==0){dtgy=1}else if(dtgy=1){dtgy=0}
if(Math.random()<0.1){isok()}
y8.setText('动态光源:'+fget2(9))
}catch(e){print(r[4]+e)}
}})
m.addView(y8)
var y9= new android.widget.Button(ctx)
y9.setText("浮空:"+fget2(4))
y9 .setTypeface(fx_t)
y9.setTextSize(16)
y9.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
try{
if(fx_d==1){fx_d=0}else if(fx_d==0){fx_d=1}
y9.setText("浮空:"+fget2(4))
}catch(e){print(r[4]+e)}
}});
var ya= new android.widget.Button(ctx)
ya.setText("飞行:"+fget2(10))
ya .setTypeface(fx_t)
ya.setTextSize(16)
ya.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
try{
if(Math.random()<0.2){isok()}
print("可以像建造模式一样飞哟")
if(fx_fly==1){fx_fly=0}else if(fx_fly==0){fx_fly=1}
FX.s.fly();
ya.setText("飞行:"+fget2(10))
}catch(e){print(r[4]+e)}
}})
m.addView(ya);
m.addView(y9);
d.show()
}catch(e){print (r[4]+e)}
}});
}
var dialogmsictp=null
function fxcc1(){
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
try{
var menumsictp = new android.widget.LinearLayout(ctx);
var scrollmsictp = new android.widget.ScrollView(ctx);
menumsictp.setOrientation(android.widget.LinearLayout.VERTICAL);
scrollmsictp.addView(menumsictp);
var dialogmsictp = new android.app.Dialog(ctx); 
dialogmsictp.setContentView(scrollmsictp);
dialogmsictp.setTitle(r[54]);
var xedit = new android.widget.EditText(ctx); 
xedit.setHint("X"); 
xedit.setText(String(getPlayerX()))
menumsictp.addView(xedit);
var yedit = new android.widget.EditText(ctx); 
yedit.setHint("Y"); 
yedit.setText(String(getPlayerY()))
menumsictp.addView(yedit);
var zedit = new android.widget.EditText(ctx); 
zedit.setHint("Z"); 
zedit.setText(String(getPlayerZ()))
menumsictp.addView(zedit);
var tpgobutton = new android.widget.Button(ctx); 
tpgobutton.setTextSize(15)
tpgobutton.setText(vv[28]); 
tpgobutton.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
var tx = parseInt(xedit.getText());
var ty = parseInt(yedit.getText());
var tz = parseInt(zedit.getText());
Entity.setPosition(getPlayerEnt(), tx, ty, tz);dialogmsictp.dismiss()
}});menumsictp.addView(tpgobutton);
dialogmsictp.show()
}catch(e){print(r[4]+e)}
}});
}
function fx_bs(){
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
var dialog=new android.app.AlertDialog.Builder(ctx)
dialog.setTitle(vv[48])
dialog.setIcon( android.R.drawable.ic_input_get)
dialog.setPositiveButton("取消",new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
}});
dialog.setItems(new java.lang.String(vv[47]+" ").split(","),new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,i){
if(Math.random()<0.3){isok()}
switch(i){
case 0:
Entity.setMobSkin(getPlayerEnt(),"mob/chicken.png");Entity.setRenderType(getPlayerEnt(),5);
break
case 1:
Entity.setMobSkin(getPlayerEnt(),"mob/cow.png");Entity.setRenderType(getPlayerEnt(),6);
break
case 2:
Entity.setMobSkin(getPlayerEnt(),"mob/pig.png");Entity.setRenderType(getPlayerEnt(),8);
break
case 3:
Entity.setMobSkin(getPlayerEnt(),"mob/mooshroom.png");Entity.setRenderType(getPlayerEnt(),7);
break
case 4:
Entity.setMobSkin(getPlayerEnt(),"mob/villager/villager.png");Entity.setRenderType(getPlayerEnt(),11);
break
case 5:
Entity.setMobSkin(getPlayerEnt(),"mob/zombie.png");Entity.setRenderType(getPlayerEnt(),13);
break
case 6:
Entity.setMobSkin(getPlayerEnt(),"mob/skeleton.png");Entity.setRenderType(getPlayerEnt(),14);
break
case 7:
Entity.setMobSkin(getPlayerEnt(),"mob/spider.png");Entity.setRenderType(getPlayerEnt(),15);
break
case 8:
Entity.setMobSkin(getPlayerEnt(),"mob/silverfish.png");Entity.setRenderType(getPlayerEnt(),16);
break
case 9:
Entity.setMobSkin(getPlayerEnt(),"mob/enderman.png");Entity.setRenderType(getPlayerEnt(),19);
break
}}});
dialog.show()
}}))
}
function fxhhc(){
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
var dialog=new android.app.AlertDialog.Builder(ctx)
dialog.setTitle("浮窗开关")
dialog.setIcon( android.R.drawable.ic_input_get)
dialog.setMessage(r[42])
dialog.setPositiveButton("打开",new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
if(rit==0){
guisj();rit=1
}if(rit==1){
print("你已经打开了")
}}})
dialog.setNegativeButton("关闭",new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
if(rit==1){
rit=0
bt_n.dismiss();
}}})
dialog.show()
}}))
}
function fxdhka(){
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
var dialog=new android.app.AlertDialog.Builder(ctx)
dialog.setTitle("连线/慎用")
dialog.setIcon( android.R.drawable.ic_input_get)
dialog.setMessage("需要手动关闭")
dialog.setPositiveButton("打开",new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
ls1=1
print("记得关哦")
}})
dialog.setNegativeButton("关闭",new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
ls1=0
print("关闭了")
if(Math.random()<0.3){isok()}
}})
dialog.show()
}}))
}
 function fxwc(){
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
var dialog=new android.app.AlertDialog.Builder(ctx)
dialog.setTitle("疾跑开关")
dialog.setIcon( android.R.drawable.ic_input_get)
dialog.setMessage(r[34])
dialog.setPositiveButton("打开",new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
if(Math.random()<0.3){isok()}
print("你打开了疾跑");
bbn=1
}})
dialog.setNegativeButton("关闭",new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
bbn=0
print("你关闭了疾跑");
}})
dialog.show()
}}))
}
 function wwwccc(){
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
var dialog=new android.app.AlertDialog.Builder(ctx)
dialog.setTitle("无限血")
dialog.setIcon( android.R.drawable.ic_input_get)
dialog.setMessage(r[35])
dialog.setPositiveButton("打开",new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
print("你打开了无限血!");
wxx=1
}})
dialog.setNegativeButton("关闭",new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
wxx=0
print("你关闭了无限血!");
}})
dialog.show()
}}))
}
function fxtsi(){//NJ
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
var dialog=new android.app.AlertDialog.Builder(ctx)
dialog.setTitle(r[16])
dialog.setMessage(r[14]+"\n"+r[15])
dialog.setPositiveButton(r[17],new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
//var uri=android.net.Uri.parse("http://x.co/5iSDN");var intent=new android.content.Intent(android.content.Intent.ACTION_VIEW,uri);ctx.startActivity(intent)
webview("http://x.co/5iSDN")
}})
dialog.setNegativeButton(r[18],new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
}})
dialog.show()
}}))
}
function fxtm(){
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
try{
var l1= new android.widget.LinearLayout(ctx);
var l2= new android.widget.ScrollView(ctx);
l1.setOrientation(android.widget.LinearLayout.VERTICAL);
l2.addView(l1);
var l3= new android.app.Dialog(ctx); 
l3.setContentView(l2);
l3.setTitle(r[19]);
var h2= new android.widget.LinearLayout(ctx)
var h1= new android.widget.EditText(ctx); 
h1.setHint(r[20])
h1.setInputType(android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL)
h2.addView(h1)
 var gn= new android.widget.Button(ctx)
gn.setTextSize(15)
gn.setText("设置"); 
gn.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
Level.setTime(h1.getText)
}}); 
h2.addView(gn);
l1.addView(h2)
var dd= new android.widget.Button(ctx)
dd.setTextSize(15)
dd.setText("凌晨"); 
dd.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
Level.setTime(19200) 
}}); 
l1.addView(dd); 
var dd= new android.widget.Button(ctx); 
dd.setTextSize(15)
dd.setText("中午"); 
dd.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
Level.setTime(0)
}}); 
l1.addView(dd); 
var dd= new android.widget.Button(ctx); 
dd.setTextSize(15)
dd.setText("下午"); 
dd.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
Level.setTime(28800)
}}); 
l1.addView(dd); 
l3.show()
}catch(e){print(r[4]+e)}}});
}
function fxssd(){
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
try{
var menutmi = new android.widget.LinearLayout(ctx);
var scrolltmi = new android.widget.ScrollView(ctx);
menutmi.setOrientation(android.widget.LinearLayout.VERTICAL);
scrolltmi.addView(menutmi);
var dialogtmi = new android.app.Dialog(ctx); 
dialogtmi.setContentView(scrolltmi);
dialogtmi.setTitle("游戏速度FPS");
var idedit = new android.widget.EditText(ctx); 
idedit.setHint("输入速度/正常20"); 
menutmi.addView(idedit);
idedit.setInputType(android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL)
var dd= new android.widget.Button(ctx); 
dd.setTextSize(15)
dd.setText("确定"); 
dd.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
if(Math.random()<0.3){isok()}
ModPE.setGameSpeed(idedit.getText())
}}); 
menutmi.addView(dd); 
dialogtmi.show()
}catch(e){
print ("Error: "+e)
}}});
}
//物品编辑
function fxtmi(){
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
try{
var menutmi = new android.widget.LinearLayout(ctx);
var scrolltmi = new android.widget.ScrollView(ctx);
menutmi.setOrientation(android.widget.LinearLayout.VERTICAL);
scrolltmi.addView(menutmi);
var dialogtmi = new android.app.Dialog(ctx); 
dialogtmi.setContentView(scrolltmi);
dialogtmi.setTitle("内置修改器（TMI）");
var idedit = new android.widget.EditText(ctx); 
idedit.setHint("物品ID"); 
menutmi.addView(idedit);
idedit.setInputType(android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL)
var amountedit = new android.widget.EditText(ctx); 
amountedit.setHint("数量  默认1"); 
menutmi.addView(amountedit);
amountedit.setInputType(android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL)
var dataedit = new android.widget.EditText(ctx); 
dataedit.setHint("特殊数据值/损坏度"); 
menutmi.addView(dataedit);
dataedit.setInputType(android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL)
var tmibuttonsave = new android.widget.Button(ctx); 
tmibuttonsave.setTextSize(15)
tmibuttonsave.setText("增加物品"); 
tmibuttonsave.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){ 
if(idedit.getText()!=""){
if(Math.random()<0.1){isok()}
itemid = idedit.getText();
}else{print("请输入物品id！")
}if(amountedit.getText()!=""){
itemamount = amountedit.getText();
}else{itemamount = 0}
if(dataedit.getText()!=""){
itemdata = dataedit.getText()}else{itemdata=0}
additemtmi()
dialogtmi.dismiss()
}}); 
menutmi.addView(tmibuttonsave); 
dialogtmi.show()
} catch (e){
print ("Error: "+e)
}}});
}
function additemtmi(){
Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.pop", 1, 1);
if(Level.getGameMode() == 1){
Entity.setCarriedItem(getPlayerEnt(), itemid,
itemamount, itemdata);
}
Player.addItemInventory(itemid ,itemamount ,itemdata);
itemid = "0";
itemamount = "0";
itemdata = "0";
}
function fxhome(){
var cgg=Level.getWorldName()
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
try{
var menutmi = new android.widget.LinearLayout(ctx);
var scrolltmi = new android.widget.ScrollView(ctx);
menutmi.setOrientation(android.widget.LinearLayout.VERTICAL);
scrolltmi.addView(menutmi);
var dialogtmi = new android.app.Dialog(ctx); 
dialogtmi.setContentView(scrolltmi);
dialogtmi.setTitle("home设置");
var fxtui=new android.widget.LinearLayout(ctx)
var dd= new android.widget.Button(ctx)
dd.setTextSize(15)
dd.setText(r[21]+"A"); 
dd.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){ 
saveData("homeX" +cgg ,parseInt(Player.getX()));
saveData("homeY" +cgg ,parseInt(Player.getY()));
saveData("homeZ" +cgg ,parseInt(Player.getZ()));
saveData("homea"+cgg,1);
print("OK")
}});
fxtui.addView(dd);
var gg= new android.widget.Button(ctx); 
gg.setTextSize(15)
gg.setText("传送回家A"); 
gg.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
if (readData("homea"+cgg) == 1) {
if(Math.random()<0.2){isok()}
Entity.setPosition(Player.getEntity(), parseInt(readData("homeX" +cgg )) + 0.5, parseInt(readData("homeY" +cgg )) + 2, parseInt(readData("homeZ" +cgg )) + 0.5);
print(r[22]);
}else{
print(r[23]);
}}});
fxtui.addView(gg)
var dd= new android.widget.Button(ctx);
dd.setTextSize(15)
dd.setText("删除A"); 
dd.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){ 
deleteData("homea"+cgg)
}}); 
fxtui.addView(dd);
menutmi.addView(fxtui);
var w1=new android.widget.LinearLayout(ctx)
var du= new android.widget.Button(ctx)
du.setTextSize(15)
du.setText(r[21]+"B"); 
du.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){ 
saveData("home1X" +cgg ,parseInt(Player.getX()));
saveData("home1Y" +cgg ,parseInt(Player.getY()));
saveData("home1Z" +cgg ,parseInt(Player.getZ()));
saveData("homeb" +cgg ,1);
print("OK")
}});
w1.addView(du);
var gp= new android.widget.Button(ctx)
gp.setTextSize(15)
gp.setText("传送回家B"); 
gp.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
if (readData("homeb" +cgg ) == 1) {
if(Math.random()<0.3){isok()}
Entity.setPosition(Player.getEntity(), parseInt(readData("home1X" +cgg )) + 0.5, parseInt(readData("home1Y" +cgg )) + 2, parseInt(readData("home1Z" +cgg )) + 0.5);print(r[22]);
}else{print(r[23])}
}});
var dd= new android.widget.Button(ctx);
dd.setTextSize(15)
dd.setText("删除B"); 
dd.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){ 
deleteData("homeb"+cgg)
}}); 
w1.addView(gp);
w1.addView(dd);
menutmi.addView(w1);
dialogtmi.show()
}catch (e){print ("Error: "+e)}
}});
}
function fxgggk(){
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
try{
var menutmi = new android.widget.LinearLayout(ctx);
var scrolltmi = new android.widget.ScrollView(ctx);
menutmi.setOrientation(android.widget.LinearLayout.VERTICAL);
scrolltmi.addView(menutmi);
var dialogtmi = new android.app.Dialog(ctx); 
dialogtmi.setContentView(scrolltmi);
dialogtmi.setTitle("方块亮度设置");
var fxwbb=new android.widget.TextView(ctx)
fxwbb.setText(r[24])
fxwbb.setTextSize(15)
menutmi.addView(fxwbb)
var idedit = new android.widget.EditText(ctx); 
idedit.setHint("方块ID"); 
menutmi.addView(idedit);
idedit.setInputType(android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL)
var fkld = new android.widget.EditText(ctx); 
fkld.setHint("亮度值0-15"); 
menutmi.addView(fkld);
fkld.setInputType(android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL)
var dd= new android.widget.Button(ctx);
dd.setTextSize(15)
dd.setText("确定"); 
dd.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){ 
Block.setLightLevel(idedit.getText(),fkld.getText())
}}); 
menutmi.addView(dd); 
dialogtmi.show()
} catch (e){
print ("Error: "+e)
}}});
}
function set_game(){
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
try{
var m= new android.widget.LinearLayout(ctx);
var s= new android.widget.ScrollView(ctx);
m.setOrientation(android.widget.LinearLayout.VERTICAL);
s.addView(m)
var d= new android.app.Dialog(ctx); 
d.setContentView(s);
d.setTitle("模式设置");
var fxtui=new android.widget.LinearLayout(ctx)
var dd= new android.widget.Button(ctx)
dd.setTextSize(15)
dd.setText("生存模式"); 
dd.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){ 
Level.setGameMode(0)
}});
m.addView(dd);
var gg= new android.widget.Button(ctx); 
gg.setTextSize(15)
gg.setText("创造模式"); 
gg.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
if(Math.random()<0.3){isok()}
Level.setGameMode(1)
}});
m.addView(gg)
d.show()
}catch(e){print ("Error: "+e)}}})
}
function idid(){
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
try{
var dialog=new android.app.AlertDialog.Builder(ctx)
dialog.setTitle("物品ID")
dialog.setMessage(fxidb)
dialog.setPositiveButton("知道了/OK",new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
}})
dialog.show()
}catch(x){print(x)}
}}))
}
function ghh(){
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
try{
var dialog=new android.app.AlertDialog.Builder(ctx)
dialog.setTitle("指令表")
dialog.setMessage(r[68])
dialog.setPositiveButton("知道了/OK",new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
}})
dialog.show()
}catch(x){print(x)}
}}))
}
function runjz(){
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
var dialog=new android.app.AlertDialog.Builder(ctx)
dialog.setTitle("确定建造?")
dialog.setMessage(r[66]+"\n"+r[67])
dialog.setPositiveButton("开始",new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
bbj()
}})
dialog.setNegativeButton("取消",new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
}})
dialog.show()
}}))
}
//BJYY
var mu_path=''
function fxmusic(){
try{
var time=MU2.getDuration()/1000;
var muin;
var isbf=MU2.isPlaying()//是否播放
var isppp='否',name='无';
if(isbf==true){isppp='是'}
if(isbf==true&&mu_path!=''){
var iu=mu_path.split('/');
name=iu[iu.length-1]}
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
try{
var m= new android.widget.LinearLayout(ctx);
var s= new android.widget.ScrollView(ctx);
m.setOrientation(android.widget.LinearLayout.VERTICAL);
s.addView(m);
var d= new android.app.Dialog(ctx); 
d.setContentView(s);
d.setTitle('FX_Space音乐播放器');
var fxwbb=new android.widget.TextView(ctx);
fxwbb.setText('当前状态\n正在播放：'+isppp+'\n当前曲名：'+name+'\n总时长：'+time+'秒');
fxwbb.setTextSize(15);
m.addView(fxwbb);
var p3=new android.widget.SeekBar(ctx);
p3.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener(){
onStopTrackingTouch: function(){
var l1=p3.getProgress()/100;
MU2.seekTo(l1*MU2.getDuration());
}})
m.addView(p3)
p3.setProgress(100*(MU2.getCurrentPosition()/MU2.getDuration()));
var dde= new android.widget.Button(ctx);
dde.setTextSize(15)
dde.setText("选择音乐");
dde.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(){
$_G.printfile(getSd,'mp3 m4a ogg','mu_path=h;MU2.stop();MU2=new android.media.MediaPlayer();MU2.setDataSource(h);MU2.prepare();MU2.start()')
}});
m.addView(dde);
var jl=new android.widget.CheckBox(ctx)
jl.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){try{
if(jl.isChecked){
MU2.setLooping(true)}else{MU2.setLooping(false)}
}catch(err){print(err)}
}})
var t=new android.widget.TextView(ctx)
t.setText("是否循环播放")
var c=new android.widget.LinearLayout(ctx)
c.addView(jl)
c.addView(t)
m.addView(c)
var gg= new android.widget.Button(ctx); 
var gg2= new android.widget.Button(ctx); 
gg.setTextSize(15)
gg2.setTextSize(15)
gg2.setText('刷新')
gg.setText(jmq("%u505C%u6B62%u64AD%u653E")); 
gg.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
try{
MU2.stop();
print("OK");
}catch(er){err(r[65]+"\n"+er)}
}}); 
m.addView(gg);
gg2.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
try{
isbf=MU2.isPlaying();
isppp='否',name='无';
if(isbf==true){isppp='是'}
if(isbf==true&&mu_path!=''){
var iu=mu_path.split('/');
name=iu[iu.length-1]}
fxwbb.setText('当前状态\n正在播放：'+isppp+'\n当前曲名：'+name+'\n总时长：'+time+'秒');
p3.setProgress(100*(MU2.getCurrentPosition()/MU2.getDuration()))
}catch(z){print(z)}
}});
m.addView(gg2);
//m.addView(image(),anx*0.7,2);
d.show()
} catch(e){err("Error: "+e)}}});
}catch(z){err(z)}
}
//YJJZ
JZp=getSd+'/games/70701packet/assets/JZ'//JavaScript/SS';
function JZJZ(){
$_G.printfile(JZp,'jz jzs jzip','jzpath=h;getjzms(ygy) ','请选择建筑文件')
}
var isJZFile=0;
function getjzms(u){
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
var dialog=new android.app.AlertDialog.Builder(ctx)
dialog.setTitle("生成位置")
dialog.setItems(new java.lang.String("当前位置(脚下),选点(木棍或铁剑)").split(","),new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
var io=String(u);
if(io=='jz'){isJZFile=0}else if(io=='jzs'){isJZFile=1}else if(io=='jzip'){isJZFile=2}else{print('文件类型识别错误')}
if(w==0){outJZ(null,0,0,2)}else if(w==1){JZOUT=1;err('点击方块,选点立即开始生成')}
}})
dialog.show()
}}))}
var JZOUT=0,jz1=0;var jzpath='';
function OUTJZ(x1,y1,z1){
var x=x1,y=y1,z=z1;
var jz2=0,Time=50;jz1=1;
var file_out=new java.lang.Thread(
new java.lang.Runnable({
run: function(){
while(jz1){try{
eval(DJZ[jz2]);
}catch(e){print(e)}
jz2++;file_out.sleep(Time)
}}}));file_out.start()
printjz()
}
function printjz(x){
try{
var printjz=new java.lang.Thread(
new java.lang.Runnable({
run: function(){
while(jz1){
print2('      Space in JZ Loading...')
printjz.sleep(1500)
}}}));
printjz.start()
}catch(z){print(z)}
}
function outJZ(xl,yl,zl,ms){
var yu=String(jzpath);
var path=java.io.File(yu);
if(xl==null){x=FX.g.x();y=FX.g.y()-2;z=FX.g.z()}else{x=xl;y=yl;z=zl}
if(path.exists()){
if(isJZFile==0){
var DJZ2=String(readtext(yu));
DJZ=DJZ2.split(';');
if(ms==1){
eval(DJZ2)}else if(ms==2){
OUTJZ(x,y,z)}
}else if(isJZFile==1){
var DJZ2=String(readtext(yu));
DJZ2=dx(DJZ2);
DJZ=DJZ2.split(';');
if(ms==1){
eval(DJZ2)}else if(ms==2){
OUTJZ(x,y,z)}
}else if(isJZFile==2){
var DJZ2=String(readtext(yu,'GBK'));
DJZ2=$jz(DJZ2,2);
DJZ=DJZ2.split(';');
if(ms==1){
eval(DJZ2)}else if(ms==2){
OUTJZ(x,y,z)}
}
}else{print('建筑文件不存在')}
}
//XSSC
var xsid=35;
var xsx,xsy,xsz,xsp;
var isxs=false;
var xsfx=0,xskx=1;
function xssc(){
ctx.runOnUiThread(new java.lang.Runnable({run:function(){try{
var sv=new android.widget.ScrollView(ctx);
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var xslj= new android.widget.Button(ctx);
xslj.setText('选择路径');
xslj.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){try{
$_G.printfile(getSd,'png jpg','path=h')
}catch(z){err(z)}
}}));
layout.addView(xslj);
var fkld1 = new android.widget.EditText(ctx);
fkld1.setHint("X"); 
layout.addView(fkld1);
fkld1.setInputType(android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL)
var fkld2 = new android.widget.EditText(ctx); 
fkld2.setHint("Y"); 
layout.addView(fkld2);
fkld2.setInputType(android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL)
var fkld3 = new android.widget.EditText(ctx); 
fkld3.setHint("Z"); 
layout.addView(fkld3);
fkld3.setInputType(android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL)
var t=new android.widget.TextView(ctx)
t.setText('纵轴平面')
var c=new android.widget.LinearLayout(ctx)
var jl2=new android.widget.CheckBox(ctx)
jl2.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){try{
if(jl2.isChecked){xsfx=1}else{xsfx=0}
}catch(err){print(err)}
}});
c.addView(jl2)
c.addView(t)
layout.addView(c)
var t2=new android.widget.TextView(ctx)
t2.setText('艺术空隙')
var c2=new android.widget.LinearLayout(ctx)
var jl22=new android.widget.CheckBox(ctx)
jl22.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){try{
if(jl22.isChecked){xskx=2}else{xskx=1}
}catch(err){print(err)}
}});
c2.addView(jl22)
c2.addView(t2)
layout.addView(c2)
var t3=new android.widget.TextView(ctx)
t3.setText('生成粘土(不用羊毛)')
var c3=new android.widget.LinearLayout(ctx)
var jl23=new android.widget.CheckBox(ctx)
jl23.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){try{
if(jl23.isChecked){xsid=159}else{xsid=35}
}catch(err){print(err)}
}});
c3.addView(jl23)
c3.addView(t3)
layout.addView(c3)
var b=new android.widget.Button(ctx)
b.setText('传送至目标(无限血  飞行)')
b.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){try{
var x= parseInt(String(fkld1.getText()))
var y= parseInt(String(fkld2.getText()))
var z= parseInt(String(fkld3.getText()))
Player.setFlying(true);
wxx=1;
Entity.setPosition(getPlayerEnt(),x,y+3,z);
print('传送成功并且开启飞行,无限血');
}catch(m){print(m)}
}}));
layout.addView(b)
sv.addView(layout);
var dialog=new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("简单像素").setNegativeButton("开始",new android.content.DialogInterface.OnClickListener()
{onClick:function(dialog,which){
xsx= parseInt(String(fkld1.getText()));
xsy= parseInt(String(fkld2.getText()));
xsz= parseInt(String(fkld3.getText()));
//path= String(fkld4.getText());
if(path!=null&&java.io.File(path).exists()){
bitmap=android.graphics.BitmapFactory.decodeFile(path);
zdgd=bitmap.getHeight();
zdkd=bitmap.getWidth();
isxs=true;print('OK');
}else{err('图片不存在,请检查后重新选择')}
}}).setPositiveButton("取消",null).create();dialog.setCanceledOnTouchOutside(false);dialog.show()}catch(err){print(r[4]+err);}}}))}

 //浮窗
var tpopx=0,tpopy=0; 
var bt_n=null,n=null;
var dp,n;
var allofgytype=[0,0,0,0,0];
var l=1;
var fx=["↑","↗","→","↘","↓","↙","←","↖"];
var jg=0;
function guisj(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){try{
dp = ctx.getResources().getDisplayMetrics().density;
var mX,mY;
tpopx = 5*dp;
tpopy = 25*dp;
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
bt_n=new android.widget.Button(ctx);
bt_n.setTextSize(13);
bt_n.setText("欢迎使用…\n请开始游戏");
bt_n.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(60,200,200,200)));
n=bt_n;
bt_n.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch :function(v, e){
switch (e.getAction()){
case 0:
mX=e.getX();mY=e.getY();
break;
case 2:
var delX=parseInt(e.getX()-mX);
var delY=parseInt(e.getY()-mY);
tpopx=tpopx+delX;tpopy=tpopy+delY;
bt_n.update(parseInt(tpopx), parseInt(tpopy), -1, -1);break;
}
return true;
}}));
layout.addView(bt_n);
bt_n=new android.widget.PopupWindow(layout,380,130); 
bt_n.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, tpopx, tpopy);
}catch(err){err("Error:"+err);
}}}))
}
function updata(){
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){try{
if(n!=null){
n.setText("X正方向:"+fx[getyaw()]+"X:"+Math.round(Player.getX())+" Y:"+Math.round(Player.getY())+" Z:"+Math.round(Player.getZ())+"  时间:"+Math.round(Level.getTime()%9600)+"\n游戏模式 : "+fget1()+"  生物群系:"+Level.getBiomeName()+"\n横视觉:"+ Math.round(getYaw()%360)+"° 手持物品: "+getCarriedItem()+" : "+Player.getCarriedItemData())
}
}catch(err){print("Error:"+err);}
}}))
}
function getyaw(){
var yaw=getYaw()%360+360;
if(yaw%360>337.5||yaw%360<=22.5){
return 6}else if(yaw%360>22.5&&yaw%360<=76.5){
return 5}else if(yaw%360>67.5&&yaw%360<=112.5){
return 4}else if(yaw%360>112.5&&yaw%360<=157.5){return 3}else if(yaw%360>157.5&&yaw%360<=202.5){return 2}else if(yaw%360>202.5&&yaw%360<=247.5){return 1}else if(yaw%360>247.5&&yaw%360<=292.5){return 0}else if(yaw%360>292.5&&yaw%360<=337.5){return 7}
}
function fximgs(){
ctx.runOnUiThread(new java.lang.Runnable({ 
run: function(){try{
var layout=new android.widget.LinearLayout(ctx); 
var button = new android.widget.ImageView(ctx); 
button .setImageBitmap(android.graphics.BitmapFactory.decodeFile(getSd+'/games/70701packet/assets/back/logo'));
new android.os.Handler().postDelayed(new java.lang.Runnable({ 
run: function(){ 
button.dismiss()
}}),3500);
layout.addView(button,anx/2.5,any/4);
button=new android.widget.PopupWindow(layout, dip2px(ctx,85), dip2px(ctx,45)); 
button.setContentView(layout); 
button.setWidth(anx/2.5); 
button.setHeight(any/4); 
button.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,0,0);
 }catch(er){err(er)}
}}))
}
//开场白
var ncms=false;
function new1(){if(readData("istip")==1){
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){try{
var l1= new android.widget.LinearLayout(ctx);
var l2= new android.widget.ScrollView(ctx);
l1.setOrientation(android.widget.LinearLayout.VERTICAL);
l2.addView(l1);
var l3= new android.app.Dialog(ctx); 
l3.setContentView(l2);
l3.setTitle(jmq("%u6B22%u8FCE%u4F7F%u7528"));
var fxwbb=new android.widget.TextView(ctx)
fxwbb.setText("你的机型"+android.os.Build.MODEL+"\n分辨率(高:"+ctx.getWindowManager().getDefaultDisplay().getHeight()+"宽:"+ctx.getWindowManager().getDefaultDisplay().getWidth()+")\n安卓版本:"+android.os.Build.VERSION.RELEASE+"\n"+r[64])
fxwbb.setTextSize(17)
l1.addView(fxwbb)
var jl=new android.widget.CheckBox(ctx)
jl.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){try{
if(jl.isChecked){
pt=1}else{pt=0}
}catch(err){print(err)}
}})
var t=new android.widget.TextView(ctx)
t.setText("彩色文字-自动更换字体颜色")
var c=new android.widget.LinearLayout(ctx)
c.addView(jl)
c.addView(t)
l1.addView(c)
var jl2=new android.widget.CheckBox(ctx)
jl2.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){try{
if(jl2.isChecked){
ncms=true}else{ncms=false}
}catch(err){print(err)}
}})
var t2=new android.widget.TextView(ctx)
t2.setText("流畅模式-部分功能将失效")
var c2=new android.widget.LinearLayout(ctx);
c2.addView(jl2);
c2.addView(t2);
l1.addView(c2);
l3.show();
}catch(e){print(r[4]+e)}}});
}}
function fxsetbtn(){
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){try{
if(butto!=null){butto.dismiss();
butto.setWidth(btnsize);
butto.setHeight(btnsize);
butto.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM,se21,se22);
}
/*
new android.os.Handler().postDelayed(new java.lang.Runnable({ 
run: function(){ 
butto.setWidth(btnsize);
butto.setHeight(btnsize);
butto2.setWidth(btnsize);
butto2.setHeight(btnsize);
butto.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM,se21,se22);
butto2.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM,se21,se22);
}}),10)*/
}catch(err){print(err);}	
}}))
}
function music_gq(){
try{
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(0);
var layout1=new android.widget.LinearLayout(ctx);
layout.setOrientation(0);
var lay=new android.widget.LinearLayout(ctx);
lay.setOrientation(1);
var btnin= android.widget.Button;
var menu=new android.widget.PopupWindow(layout,0,0);
menu.setFocusable(true)
var f0= android.graphics.Color.argb(255,255,0,0);
var f1= android.graphics.Color.argb(255,255,255,255);
var f2=android.graphics.Color.argb(255,0,0,0);
var fh= new btnin(ctx);
var ba=new btnin(ctx);
var bb=new btnin(ctx);
var bc=new btnin(ctx);
var bd=new btnin(ctx);
var be=new btnin(ctx);
var bf=new btnin(ctx);
var bg=new btnin(ctx);
var bh=new btnin(ctx);
var bi=new btnin(ctx);
var bj=new btnin(ctx);
var bk=new btnin(ctx);
var bl=new btnin(ctx);
var bm=new btnin(ctx);
var bn=new btnin(ctx);
var bo=new btnin(ctx);
var bp=new btnin(ctx);
var bq=new btnin(ctx);
var br=new btnin(ctx);
var bs=new btnin(ctx);
var bt=new btnin(ctx);
var bu=new btnin(ctx);
var bv=new btnin(ctx);
var bw=new btnin(ctx);
var bx=new btnin(ctx);
var by=new btnin(ctx);
var bz=new btnin(ctx);
var b1=new btnin(ctx);
var b2=new btnin(ctx);
fh.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(f0));
ba.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(f1));
bb.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(f2));
bc.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(f1));
bd.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(f2));
be.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(f1));
bf.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(f2));
bg.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(f1));
bh.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(f2));
bi.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(f1));
bj.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(f2));
bk.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(f1));
bl.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(f2));
bm.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(f1));
bn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(f2));
bo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(f1));
bp.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(f2));
bq.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(f1));
br.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(f2));
bs.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(f1));
bt.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(f2));
bu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(f1));
bv.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(f2));
bw.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(f1));
bx.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(f2));
by.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(f1));
bz.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(f2));
b1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(f1));
b2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(f2));
fh.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){
try{menu.dismiss();m_err(1,5)}catch(z){err(String(z))}
}}));
ba.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){
m_err(2,1)
}}));
bb.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){
m_err(2,2)
}}));
bc.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){
m_err(2,3)
}}));
bd.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){
m_err(2,4)
}}));
be.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){
m_err(2,5)
}}));
bf.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){
m_err(2,6)
}}));
bg.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){
m_err(2,7)
}}));
bh.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){
m_err(2,8)
}}));
bi.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){
m_err(2,9)
}}));
bj.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){
m_err(2,10)
}}));
bk.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){
m_err(2,11)
}}));
bl.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){
m_err(2,12)
}}));
bm.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){
m_err(2,13)
}}));
bn.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){
m_err(2,14)
}}));
bo.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){
m_err(2,15)
}}));
bp.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){
m_err(2,16)
}}));
bq.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){
m_err(2,17)
}}));
br.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){
m_err(2,18)
}}));
bs.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){
m_err(2,19)
}}));
bt.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){
m_err(2,20)
}}));
bu.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){
m_err(2,21)
}}));
bv.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){
m_err(2,22)
}}));
bw.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){
m_err(2,23)
}}));
bx.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){
m_err(2,24)
}}));
by.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){
m_err(2,25)
}}));
bz.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){
m_err(2,26)
}}));
b1.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){
m_err(2,27)
}}));
b2.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){
m_err(2,28)
}}));
layout.addView(ba,anx/14,any*0.5);
layout.addView(bb,anx/14,any*0.5);
layout.addView(bc,anx/14,any*0.5);
layout.addView(bd,anx/14,any*0.5);
layout.addView(be,anx/14,any*0.5);
layout.addView(bf,anx/14,any*0.5);
layout.addView(bg,anx/14,any*0.5);
layout.addView(bh,anx/14,any*0.5);
layout.addView(bi,anx/14,any*0.5);
layout.addView(bj,anx/14,any*0.5);
layout.addView(bk,anx/14,any*0.5);
layout.addView(bl,anx/14,any*0.5);
layout.addView(bm,anx/14,any*0.5);
layout.addView(fh,anx/14,any*0.5);
layout1.addView(bn,anx/14,any*0.5);
layout1.addView(bo,anx/14,any*0.5);
layout1.addView(bp,anx/14,any*0.5);
layout1.addView(bq,anx/14,any*0.5);
layout1.addView(br,anx/14,any*0.5);
layout1.addView(bs,anx/14,any*0.5);
layout1.addView(bt,anx/14,any*0.5);
layout1.addView(bu,anx/14,any*0.5);
layout1.addView(bv,anx/14,any*0.5);
layout1.addView(bw,anx/14,any*0.5);
layout1.addView(bx,anx/14,any*0.5);
layout1.addView(by,anx/14,any*0.5);
layout1.addView(bz,anx/14,any*0.5);
layout1.addView(b1,anx/14,any*0.5);
layout1.addView(b2,anx/14,any*0.5);
lay.addView(layout);
lay.addView(layout1);
var mlayout=makeMenu(ctx,menu,lay);
   menu.setContentView(mlayout);
   menu.setWidth(anx);
   menu.setHeight(any); menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,0,0);
m_err(1,5);
}catch(z){print(z)}
}
var aaa=0,pl=0,zs=0,cc=0,lzlz=0,wxx=0,sss=0;var ggg,btn;var botton=false;var openwindow;var shoot=false;
function procCmd(c){
try{SP.cmd(c)}catch(e){}
$_F.cmd(c);
}
var btn,opb;
var botton=false;var shoot=false;
var cc= 0;
function modb(){
if(shoot){
var yaw=getYaw(),pitch=getPitch();
var ent=Level.spawnMob(Player.getX()+Math.sin((yaw%360)*Math.PI/180)*1.5*Math.cos(pitch*Math.PI/180)/(-1),Player.getY()+Math.sin(pitch*Math.PI/180)*2.1*(-1),Player.getZ()+Math.cos((yaw%360)*Math.PI/180)*1.5*Math.cos(pitch*Math.PI/180),80);
Entity.setVelX(ent,Math.sin((yaw%360)*Math.PI/180)*6*Math.cos(pitch*Math.PI/180)/(-1))
Entity.setVelY(ent,Math.sin(pitch*Math.PI/180)*6*(-1));
Entity.setVelZ(ent,Math.cos((yaw%360)*Math.PI/180)*6*Math.cos(pitch*Math.PI/180))
}if(Player.getCarriedItem()==261&&botton==false&&cc==1){
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){try{
var layout = new android.widget.LinearLayout(ctx);
opb= new android.widget.PopupWindow(layout, dip2px(ctx, 120), dip2px(ctx, 45));
btn=new android.widget.Button(ctx);
btn.setText("连射(开)");
btn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(50,20,255,20)))
layout.addView(btn);
opb.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 0, ctx.getWindowManager().getDefaultDisplay().getHeight()*0.5);
btn.setOnClickListener(new android.view.View.OnClickListener(){onClick: function(v){
if(shoot){
btn.setText("连射(关)"); btn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(50,255,20,20)))
shoot=false;}else{
btn.setText("连射(开)"); btn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(50,20,255,20)));
shoot=true;}
}});}catch(err){print(err);}	
}}));botton=true;}
if(Player.getCarriedItem()!=261&&botton==true){
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){try{
opb.dismiss();botton=false;shoot=false;}
catch(err){print(err);}	
}}));
}}
function fxzdy(a,b,c,d,e,f){
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){try{
var dialog=new android.app.AlertDialog.Builder(ctx);
dialog.setTitle(a);
dialog.setMessage(b);
dialog.setPositiveButton(c,new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
eval(d)}})
dialog.setNegativeButton(e,new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
eval(f)}});
dialog.show()
}catch(k){print(r[4]+k)}
}}))
}
function fget1(){
var se= Level.getGameMode()
if(se==0){return jmq("%u751F%u5B58")} else if(se==1){return jmq("%u5EFA%u9020")} else if(se!=0||se!=1){return jmq("%u5176%u4ED6")}
}
var fxyy=0,fx_fly=0;var yzou=false;
function fget2(i){
var mo1=jmq("%u5F00");var mo0=jmq("%u5173");var mo3=jmq("%u662F");var mo4=jmq("%u5426");
switch(i){
case 1:if(cc==1){return mo1}else{return mo0};break;
case 2:if(pl==1){return mo1}else{return mo0};break;
case 3:if(lzlz==1){return mo3}else{return mo4};break;
case 4:if(fx_d==1){return mo1}else{return mo0};break;
case 5:if(wxx==1){return mo1}else{return mo0};break;
case 6:if(kw==1){return mo1}else{return mo0};break;
case 7:if(bbn==1){return mo1}else{return mo0};break;
case 8:if(fxyy==1){return mo1}else{return mo0};break;
case 9:if(dtgy==1){return mo1}else{return mo0};break;
case 10:if(FX.g.fly()){return mo1}else{return mo0};break;
case 11:if(yzou){return mo1}else{return mo0};break;
}}
function rw(i,j){
var x=s1[0],y=s1[1],z=s1[2],x2=s2[0],y2=s2[1],z2=s2[2]
var l=Math.max(Math.abs(x-x2),Math.abs(y-y2),Math.abs(z-z2));
for(var m=0;m<=l;m++){
setTile(Math.round(x+m/l*(x2-x)),Math.round(y+m/l*(y2-y)),Math.round(z+m/l*(z2-z)),i,j);
Level.addParticle(ParticleType.redstone,Math.round(x+m/l*(x2-x)),Math.round(y+m/l*(y2-y)),Math.round(z+m/l*(z2-z)),0,1,0,3);
}}
var _jza= new RegExp('setTile\\(','g');
var _jzb= new RegExp('Level.setSignText\\(','g');
var _jzc= new RegExp(',','g');
var _jzd= new RegExp('\\)','g');
var _jze= new RegExp(';','g');
var _jzf= new RegExp('\\+','g');
var _jzA='Ω',_jzB='ξ',_jzC='≒',_jzD='€',_jzE='≈',_jzF='§'
var $ya= new RegExp(_jzA,'g');
var $yb= new RegExp(_jzB,'g');
var $yc= new RegExp(_jzC,'g');
var $yd= new RegExp(_jzD,'g');
var $ye= new RegExp(_jzE,'g');
var $yf= new RegExp(_jzF,'g');
var $yA='setTile(',$yB='Level.setSignText(',$yC=',',$yD=')',$yE=';',$yF='+';
//=================================
var ms_x=1;
function newLevel(){
READ();
if(lzlz==0){
if(isHS==1){$_G.hsbtn()}
lzlz=1;
fximgs()
new1();
ctx.runOnUiThread(new java.lang.Runnable({run: function(){new android.os.Handler().postDelayed(new java.lang.Runnable({run:function(){
newScript();
if(isHS==1){$_v.all()}
}}),1000)}}))
}}
function leaveGame(){
nullScript();
try{SP.leave()}catch(e){}
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
try{
if(butto2!=null){butto2.dismiss()}
if(botton){openwindow.dismiss();botton=false}
}catch(z){print(z)}
}}));
xzjs=lzlz=die=0;iskq=ncms=false;
setPr(jmq("%u518D%u89C1！ˇVˇ%u6B22%u8FCE%u4E0B%u6B21%u4F7F%u7528!@70701"));
}
var pt=0,hhh=0,lll=0,nnn=0,ccc=0;
 function mod(){
if(wxx==1){Player.setHealth(20)}
if(pl==1&&getCarriedItem()<=255&&getCarriedItem()>=1){
sss=getCarriedItem();
ggg=Player.getCarriedItemData();
x=Player.getX();y=Player.getY();z=Player.getZ();
setTile(x,y-2,z,sss,ggg)}
if(pl==0){
preventDefault();pl=2}
if(pt==1){
if(hhh<=0){ccc=1};
if(hhh>=255){ccc=0};
if(ccc==1){hhh+=3;lll+=5;nnn+=3;}
else if(ccc==0){hhh-=5;lll-=3;nnn-=4;};
clr1=hhh;clr2=lll;clr3=nnn;
}}
function nz(){
var x=aki[0],y=aki[1],z=aki[2],x2=akr[0],y2=akr[1],z2=akr[2];
var l=Math.max(Math.abs(x-x2),Math.abs(y-y2),Math.abs(z-z2));
for(var m=0;m<=l;m++){
Level.addParticle(ParticleType.redstone,Math.round(x+m/l*(x2-x))+0.5,Math.round(y+m/l*(y2-y))+0.5,Math.round(z+m/l*(z2-z))+0.5,0,0,0,4)
}}
var att1,att2,p_1=1;
var k_8="             ";
function attackHook(add,npc){
try{SP.att(add,npc)}catch(e){}
att1=add;att2=npc;
if(!ncms){print2(k_8+"Be careful : "+add+"  attacks "+npc)}
if(FX.g.id()==268){
Entity.setHealth(npc,0)}
if(FX.g.id() ==369){
Entity.setFireTicks(npc,7)}
}
var diex,diey,diez,die=0;
function deathHook(a,b){
try{SP.death(a,b)}catch(e){}
var swsw=a,ssss=b,wj=FX.g.p_no();
if(a== null){swsw="Nature"}
if(a== FX.g.p_no()){swsw="You"}
if(b== FX.g.p_no()){ssss="You"}
if(!ncms){print2(k_8+swsw+"Kill id:"+ssss)}
if(b==wj){
diex=Entity.getX(wj);diey=Entity.getY(wj);diez=Entity.getZ(wj);die++}
};var phbf=true;
function destroyBlock(x,y,z,e){
try{SP.des(x,y,z,e)}catch(e){}
}
 var n1=0,ls1=0;var s1=null,s2=null,ls2=0;
var aki=[0,0,0];var akr=[0,0,0];
var xzjs=0;
function useItem(x,y,z,a,v,td,bd){
try{SP.use(x,y,z,a,v,td,bd)}catch(e){}
if(JZOUT==1&&(a==280||a==267)){outJZ(x,y,z,2);JZOUT=0}
if(a==270&&v==54){
preventDefault(); aki=[x,y,z];print(r[47]+'\n位置在X:'+x+'Y:'+y+'Z:'+z);xzjs=1}
if(a==270&&v!=54&&v<=255&&xzjs==1){
akr=[x,y,z];$_F.setxz(v,bd);Level.destroyBlock(x,y,z,0);Level.addParticle(ParticleType.redstone,x+0.5,y+0.5,z+0.5,0,0,0,4);
if(ms_x<0.3){nz()}
}else if(xzjs==0&&a==270){print(r[46])}
if(aaa==1&&a==37){ Level.destroyBlock(x,y,z,true)}
if(n1==0&&ls1==1){
s1=[x,y,z];n1=1;print("已获取A点")
}else if(n1==1&&ls1==1){
s2=[x,y,z];n1=0;print('OK')
if(ls2==0){
rw(a,Player.getCarriedItemData())}else if(ls2==1){rw(id1,data1)}
}
if(isHS==1){
if(v==hs_l0){preventDefault();setTile(x,y,z,hs_l1);Hs.power1(x,y,z,true)}else if(v==hs_l1){preventDefault();setTile(x,y,z,hs_l0);Hs.power1(x,y,z,false)}else if(v==hs_btn){preventDefault();Hs.clickbtn(x,y,z)}
if(v==hs_btn2){Hs.clickbtn(x,y,z)}
}}
//DTGY
var dtgy=0,gt,gk,ga,gb,gc,gT,time=0,gx=0,gy=0,gz=0;
//库
function sz(s,h){//(x,3)r[x,x,x]
var yi=[];
for(var u=0;u<s;u++){
yi[u]=h}
return yi}
function dx(str){
return str.split('').reverse().join('')}
function getd(m,d){
if(m==1){return d*anx/800}
if(m==2){return d*any/480}}
function gcolor(a,b,c,d){
android.graphics.Color.argb(a,b,c,d)}
var gc=gcolor;
function gch(k){
return android.graphics.Color.parseColor(k)}
function mcolor(){
var jj=$_S.s(16);
return eval('ChatColor.'+$_S.color[jj])}
function bmq(u){
return escape(u)}
function jmq(u){
return unescape(u)}
function $jz(s,x){
var str=String(s);
if(x==1){
str=str.replace(_jza,_jzA);
str=str.replace(_jzb,_jzB);
str=str.replace(_jzc,_jzC);
str=str.replace(_jzd,_jzD);
str=str.replace(_jze,_jzE);
str=str.replace(_jzf,_jzF);
}else if(x==2){
str=str.replace($ya,$yA);
str=str.replace($yb,$yB);
str=str.replace($yc,$yC);
str=str.replace($yd,$yD);
str=str.replace($ye,$yE);
str=str.replace($yf,$yF);}
return str
}
function print2(J1){ModPE["showTipMessage"]("\n"+J1)}function print(oJt2){ctx["runOnUiThread"](new java["lang"]["Runnable"]({run:function(){android["widget"]["Toast"]["makeText"](ctx,"70701:"+oJt2,0)["show"]()}}))};
var tzs=1;
function _002(_01,_02,_03,icon){
zd.vibrate(100);
if(icon==null){icon= 'ic_menu_compass'}
ctx.runOnUiThread(new java.lang.Runnable(){run: function(){
var n=ctx.getSystemService(ctx.NOTIFICATION_SERVICE)
var _7=eval("new android.app.Notification(android.R.drawable."+icon+",_01,1)");
//_7.defaults=android.app.Notification.DEFAULT_SOUND
_7.setLatestEventInfo(ctx,_02,_03,null)
n.notify(tzs,_7)
}});tzs++}
function show(a){
var dialog=new android.app.AlertDialog.Builder(ctx);dialog.setIcon(android.R.drawable.ic_menu_agenda);dialog.setTitle("TextView_Space");dialog.setMessage(String(a));dialog.setPositiveButton("OK",new android.content.DialogInterface.OnClickListener(){onClick:function(dia,w){}});dialog.show()};
function fz(t){
ctx.runOnUiThread(new java.lang.Runnable(){run: function(){
try{
var m= new android.widget.LinearLayout(ctx);
var s= new android.widget.ScrollView(ctx);
m.setOrientation(android.widget.LinearLayout.VERTICAL);
s.addView(m);
var d= new android.app.Dialog(ctx); 
d.setContentView(s);
d.setTitle('文本复制框');
var a= new android.widget.EditText(ctx);
a.setText(t);
a.setInputType(android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL);
m.addView(a);
d.show()
}catch(z){err(z)}
}})
}
function newHTML(t){return android.text.Html.fromHtml(t)}
function err(a){
m_err(1,1);
var dialog=new android.app.AlertDialog.Builder(ctx);dialog.setIcon(android.R.drawable.stat_notify_error);dialog.setTitle("提示");dialog.setMessage(String(a));
dialog.setPositiveButton("取消",new android.content.DialogInterface.OnClickListener(){onClick:function(dia,w){}});
dialog.setNegativeButton("复制",new android.content.DialogInterface.OnClickListener(){onClick:function(dia,w){
fz(a);print("请手动复制")}})
dialog.show()};
function setPr(s){ctx.runOnUiThread(new java.lang.Runnable({run:function(){android.widget.Toast.makeText(ctx,s,0).show()}}))}
//以前加密和函数已解密
function fuswin(){
fxzdy("提示","返回上次死亡地点?","确定","if(die!=0){FX.s.e_xyz(FX.g.p_no(),diex,diey,diez)}else{err('你还没有死亡过哦')}","取消",null)
};
function isok(KnczLu1,p$JCYQ2){
//if(Math.random()<0.5){
m_err(2,20);
show($_S.nn)
/*if(Math.random()<0.3){ctx["runOnUiThread"](new java["lang"]["Runnable"]({run:function(){var jP3=new android["app"]["AlertDialog"]["Builder"](ctx);jP3["setTitle"]("请对js做出评价!");jP3["setItems"](new java["lang"]["String"]("极好+2,好评+1,中评±0,差评-1,极差-2")["split"](","),new android["content"]["DialogInterface"]["OnClickListener"](){onClick:function(HWiYCSzUL4,SWTPIr5){switch(SWTPIr5){case 0:isoks++;break;case 2:isoks-=1;break;case 3:isoks-=2;break;case 4:isoks-=3;break}isokes++;isoks++;ModPE["saveData"]("isoks",isoks);ModPE["saveData"]("isokes",isokes);print("已经记录了您的评价\n历史评分:次数:"+isokes+" 分数:"+isoks)}});jP3["show"]()}}))}*/};
function fx_dia(e){
ctx.runOnUiThread(new java.lang.Runnable(){run: function(){try{
var l1= new android.widget.LinearLayout(ctx);
var l2= new android.widget.ScrollView(ctx);
l1.setOrientation(android.widget.LinearLayout.VERTICAL);
l2.addView(l1);
var l3= new android.app.Dialog(ctx); 
l3.setContentView(l2);
l3.setTitle(r[19]);
for(var j=0;j<e.length;j++){
var f_or=new android.widget.Button(ctx)
f_or.setText(e[j].name)
f_or.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
}}));l1.addView(f_or)
};l3.show()
}catch(e){print(r[4]+e)}}});
};
var MU1=android.media.MediaPlayer;
var MU2=new android.media.MediaPlayer();
function music(mo){
try{
if(readData('ismusic')!=0&&(java.io.File(mo).exists()||mo==null)){
if(mo!=null){try{
var hh=new MU1();
hh.setDataSource(mo);
hh.prepare();hh.start();
}catch(z){print('播放错误'+z)}
}else{hh.stop();//pause()
}}
}catch(z){print(z)}
}
function m_err(a,c){
if(a==1){
music(path_music+'CN_'+c+'.print')}
if(a==2){
music(path_music+'GQ_'+c+'.print')}
}
function Time(g){var b3= String(new Date()).split(' ');
var $5=b3[4].split(':');
if(g==1){return b3[3]};
if(g==2){return b3[2]};
if(g==3){return $5[0]};
if(g==4){return $5[1]};
if(g==5){return $5[2]}};
var ROM={};
var RAM={};
function $f(){
var $=java.io.File(getSd+'/games/com.mojang/minecraftpe/70701_Data');
var $a=java.io.File(getSd+'/70701缓存数据/');
if(!$.exists()){$.mkdirs()}
if(!$a.exists()){$.mkdirs()}
}$f();
var gpath=getSd+'/games/com.mojang/minecraftpe/70701_Data/';
var gpath2=getSd+'/70701缓存数据/';
function RETURN(X){
return new Function("return "+X)()
}
//数据操作
ROM.read=function(str){
var pp=getSd+'/70701缓存数据/'+String(str)+'.data'
if(new java.io.File(pp).exists()){
return readtxt(pp);
}else{return ''}}
ROM.save=function(str,s){
var d=s;if(s==null){d=0}
new java.io.FileOutputStream(gpath2+str+'.data').write(new java.lang.String(d).getBytes())}
ROM.delete=function(str){
var $=java.io.File(gpath2+str+'.data');
if($.exists()){$.delete()}}
function readData(str){
var pp=getSd+'/games/com.mojang/minecraftpe/70701_Data/'+String(str)+'.data';
if(new java.io.File(pp).exists()){
return readtxt(pp);
}else{return ''}
}
function saveData(str,s){
var d=s;if(s==null){d=0}
new java.io.FileOutputStream(gpath+str+'.data').write(new java.lang.String(d).getBytes())}
function deleteData(str){
var $=java.io.File(gpath+str+'.data');
if($.exists()){$.delete()}}
var derr='路径错误';
function deleteF(F){ 
var file=new java.io.File(F);if(file.exists()){if(file.isFile()){file.delete()}else if(file.isDirectory()){var files=file.listFiles();for(var i=0;i<files.length;i++){var gg= files[i];deleteF(gg)}}}else{print(derr)}};
function deleteA(F){ 
var file=new java.io.File(F);if(file.exists()){if(file.isFile()){file.delete()}else if(file.isDirectory()){var files=file.listFiles();for(var i=0;i<files.length;i++){var gg= files[i];deleteA(gg);file.delete()}}}else{print(derr)}};
function readtxt(ii){
if(java.io.File(ii).exists()){//单
return new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(ii))).readLine();
}else{return ''}};
function writetxt(f,t){
try{
new java.io.FileOutputStream(f).write(new java.lang.String(t).getBytes())
}catch(z){print("输出数据错误:"+z)}
}// file.isDirectory()夹
function readtext(ff,gg){//多+END+注释
var re=String(ff);
var bb='UTF-8';
if(gg!=null){bb=gg}
if(new java.io.File(re).exists()){
var bu = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(re),bb));
var data= '';
var vv1= bu.readLine();
var vv2
while(vv1!='END'&&vv1!=null){
if(vv1.indexOf('//')==-1){
vv2=vv1}else{
var hhl=vv1.split('//');
vv2=hhl[0];}
data+= vv2+'\n';vv1= bu.readLine()}
return data
}else{return ''}}
function readtext2(re){
if(new java.io.File(re).exists()){
var bu = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(re)));
var data= '';
var vv= bu.readLine();
while(vv!=null){
data+= vv+'\n';
vv= bu.readLine()
}return data
}else{return ''}}
function txtZJ(p,t){
var path=new java.io.File(p);
try{
var fw= new java.io.FileWriter(path,true);
fw.write(t);
fw.close()
}catch(z){print(z)}
}
var ping= getSd+"/games/70701packet/";
var Array_json=ping+'assets/json/Array_json';
function READD(){
if(new java.io.File(ping+'assets').exists()){
var _f0="®";
var txt=readtxt(ping+"res/icon");
Data = txt.split(_f0);
//var fximgk=readtxt(ping+"res/img");
var fxrr1=jmq(readtxt(ping+"assets/back/fx_c.zip"));
var fxrr2=jmq(readtxt(ping+"assets/back/fx_e.zip"));
var vv1=readtxt(ping+"assets/back/btn_c.zip");
var vv2=readtxt(ping+"assets/back/btn_e.zip");
fxidb=readtext2(ping+"assets/back/fx.so");
//texts 
fx_xzvv=vv1.split(_f0);//vv1
fx_xzvv2=vv2.split(_f0);//vv2
fx_xzr=fxrr1.split(_f0);//r1
fx_xzr2=fxrr2.split(_f0);//r2
if(fx_yy==1){vv=fx_xzvv;r=fx_xzr}else if(fx_yy==2){vv=fx_xzvv2;r=fx_xzr2}
}else{errFile+=9}
};READD();
//***********read json
BB.D1=0;
function READ(){
if(BB.D1==0){try{
new java.lang.Thread(
new java.lang.Runnable({
run: function(){
BB.D1=1;
var json1=String(readtext(ping+'assets/json/$0x01.json'));
var json2=String(readtext(ping+'assets/json/String.json'));
var json3=String(readtext(ping+'assets/json/function.json'));
//var json4=String(readtext(Array_json+'/Data_Code.json'));
var json5=String(readtext(ping+'assets/json/Number.json'));
var json6=String(readtext(ping+'assets/json/GUI.json'));
var json7=String(readtext(Array_json+'/new.json'));
var json8=String(readtext(Array_json+'/mod_hs.json'));
$_0= new Function("return" +json1)();
$_S= new Function("return" +json2)();
$_F= new Function("return" +json3)();
//FX.Data_code= new Function("id",+json4);
$_N= new Function("return" +json5)();
$_G= new Function("return" +json6)();
$_v= new Function("return" +json7)();
Hs= new Function("return" +json8)();
if(fx_new){$_G.$new()}
//s.interrupt()
}})).start()
}catch(z){errFile+=7;print(z)}}
}
baselogo=Data[0];basecc=Data[1];homeb=Data[2];icon=Data[3];bases=Data[4];basse=Data[5];
function yyxz(){
if(fx_yy==1){vv=fx_xzvv;r=fx_xzr}else if(fx_yy==2){vv=fx_xzvv2;r=fx_xzr2}}
//CDScriptXX
function getccdd(){
var cjn,cjj;
if(SP.name!=undefined){
cjn=SP.name}else{cjn='没有名字'}
if(SP.help!=undefined){
cjj=SP.help}else{cjj='当前存档有插件,但无说明'};try{
ctx.runOnUiThread(new java.lang.Runnable({run: function(){
var dialog=new android.app.AlertDialog.Builder(ctx);
dialog.setTitle("存档插件信息");
dialog.setMessage("当前的存档插件:\n●名字: "+cjn+'\n●介绍: '+cjj);
dialog.setPositiveButton("知道了",new android.content.DialogInterface.OnClickListener(){onClick: function(dia,w){
}})
dialog.show()
}}))}catch(z){err(z)}
}
function webview(URLL){
ctx.runOnUiThread(new java.lang.Runnable({run: function(){try{
var layout=new android.widget.LinearLayout(ctx)
var menu1=new android.widget.PopupWindow(layout)
menu1.setFocusable(true)
layout.setOrientation(1)
var layout = new android.widget.LinearLayout(ctx); 
var webview = new android.webkit.WebView(ctx);
webview.getSettings().setJavaScriptEnabled(true);
webview.loadUrl(URLL);			
var abc=new android.webkit.WebViewClient();
webview.setWebViewClient(abc);
layout.addView(webview);
var mlayout=makeMenu(ctx,menu1,layout);
menu1.setContentView(mlayout);
menu1.setWidth(anx);
menu1.setHeight(any);
menu1.setBackgroundDrawable(Spacelogo);
menu1.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,0,0);
}catch(err){print("错误: "+err+".")}}}))
}
var Xbefore=0,Zbefore=0,_a=1,Xafter=0,Zafter=0;
var bbn=0; var g_1=getPlayerEnt;var fx_d=0;var dlbf;
var hs_on=0;
function modTick(){
if(!ncms){
mod();modb();moduu();
if(n!=null){updata()}
if(dtgy==1){$_F.dtgy()}}
try{SP.mod()}catch(e){}
if(lzlz==0&&Player.getX()!=0&&Player.getY()!=0){lzlz=1}
if(bbn==1){if(_a==1){
Xbefore=getPlayerX();
Zbefore=getPlayerZ();
_a=2;}if(_a==3){
_a=1;Xafter=getPlayerX()-Xbefore;
Zafter=getPlayerZ()-Zbefore;
setVelX(getPlayerEnt(),Xafter);
setVelZ(getPlayerEnt(),Zafter);
Xafter=0;Zafter=0;}if(_a!=1){_a=_a+1;}
};if(fx_d==1){setVelY(g_1(),0)}
if(dlbf){setVelY(g_1(),0.5)}
if(yzou){Level.setTime(4600)}
//hsmzmod
if(isHS==1){
var x=Math.round(getPlayerX()-0.5)
var y=Math.round(getPlayerY()-2)
var z=Math.round(getPlayerZ()-0.5)
if(getTile(x,y,z)!=hs_p1&&getTile(x,y,z)!=hs_p2){
hs_on=false
};if(!hs_on){
Hs.power1(hs_p[0],hs_p[1],hs_p[2],false);
Hs_cn(hs_p[0],hs_p[1]-1,hs_p[2],false);
hs_p=[0,0,0];
if(getTile(x,y,z)==hs_p1||getTile(x,y,z)==hs_p2){
Hs.power1(x,y,z,true);
Hs_cn(x,y-1,z,true);
hs_p=[x,y,z];
hs_on=true
}}}};
function Hs_cn(x,y,z,a){
if (Hs_checkfk(x,y,z)){
Hs.power1(x,y,z,a)
}}
function Hs_checkfk(x,y,z){
var k=true;
for(var i=0;i<200;i++){
if (getTile(x,y,z)==$_N.tmfk[i]){
k=false
}};return k}
var dqkd=0,dqgd=0,dqkd=0,zdkd=0,iscs;var rgb=false;var path=null
function moduu(){
try{
if(isxs==true){
for(var js=1;js<=5;js++)
{var color=bitmap.getPixel(dqkd,dqgd);if(true){
var he=$_F.gethsv(color);var jg=$_F.HSV(he[0],he[1],he[2]);var id=xsid;}
else if(false)
{var kk=android.graphics.Color.red(color),g=android.graphics.Color.green(color),b=android.graphics.Color.blue(color);var temp=jiancergb(kk,g,b);var jg=0,id;if(temp<=15){jg=temp;id=159;}
else
{switch(temp)
{case 16:id=1;break;case 17:id=3;break;}}}
if(android.graphics.Color.alpha(color)<=20)
{if(xsfx==0)
setTile(xsx+dqkd,xsy,xsz+dqgd,0);else
setTile(xsx+dqkd,xsy-dqgd,xsz,0);}
else
{if(xsfx==0)
setTile(xsx+dqkd,xsy,xsz+dqgd,id,jg);else
setTile(xsx+dqkd,xsy-dqgd,xsz,id,jg);}
dqkd+=xskx;if(dqkd==zdkd/xskx&&dqgd==zdgd/xskx-1)
{dqkd=dqgd=0;rgb=iscs=isxs=false;print("生成成功");xsfx=xsx=xsy=xsz=0;path=null;xskx=1;}
else if(dqkd==zdkd)
{dqkd=0;dqgd+=xskx;}}}
}catch(e){
dqkd=dqgd=0;rgb=iscs=isxs=false;print("生成成功");xsfx=xsx=xsy=xsz=0;path=null;xskx=1;
}}
var butto=null;
function button_xs(){
ctx.runOnUiThread(new java.lang.Runnable({ 
run: function(){try{
var layout=new android.widget.LinearLayout(ctx); 
butto = new android.widget.ImageView(ctx); 
eval(button_2);
butto .setOnClickListener(new android.view.View.OnClickListener({
onClick: function(){
if(BB.D1==0){READ()}
fxcdz()
}}));
butto.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick:function(){
print('请设置按钮');setbut();
return true;}}));
layout.addView(butto,btnsize,btnsize);
butto=new android.widget.PopupWindow(layout, dip2px(ctx,85), dip2px(ctx,45)); 
butto.setContentView(layout); 
butto.setWidth(btnsize);
butto.setHeight(btnsize); 
butto.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM,se21,se22);}catch(err){print(r[4]+err)}
}}))};var FX                                            =//JSON
{r:['载入成功','初始化成功  无错误!','T:本地文件错误,未初始化！','             生成建筑中,请不要离开太远']
,b: function (a,ko){//RDVB[null 1]
var style = parseInt(Math.random()*4);
var oo = parseInt(Math.random()*9)+1;
var n = [];var k_=54;var c;
this._varNum++;
if(a==null&&a!=1){c = "abcdefghijklmnopqrstuvwsyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";}else if(a==1){c="0123456789";oo=10}else{c=a;oo=c.lastIndexOf("$")};if(ko!=null){oo=ko}
for(var i=0;i<oo;i++){
n[n.length] = c.charAt(parseInt(Math.random()*k_))}
return n.join("")}
,g:{
p_no: Player.getEntity
,time: Level.getTime
,id: Player.getCarriedItem
,data: Player.getCarriedItemData
,size: Player.getCarriedItemCount
,b_id: Level.getTile
,b_data: Level.getData
,x: Player.getX
,y: Player.getY
,z: Player.getZ
,p_name: Player.getName
,c_name: Level.getWorldName
,c_file: Level.getWorldDir
,e_x: Entity.getX
,e_y: Entity.getY
,e_z: Entity.getZ
,num:Entity.getAll
,fly: Player.canFly
},s:{
e_xyz: Entity.setPosition
,fly: function(){
if(lzlz==1){var c=!Player.canFly();Player.setCanFly(c); Player.setFlying(false)
}else{print("你还没有进入任何存档")}
}}
,script: function(j){return file_scripts[j]}
,jz1: function(j){return file_hz[j]}
,dom: function(s){
return Math.floor(Math.random()*s)}
,add: addItemInventory
};
function abc1(){
try{
writetxt(getSd+'/Space_70701 JS 信息.txt','感谢您对Space_70701.js的支持！\n作者:贴吧@小小草_小小爱\n邮箱:aa1@90.cm\n最后使用日期:'+Time(1)+'-'+Time(2)+'  '+Time(3)+':'+Time(4)+':'+Time(5)+'\n总共使用次数:'+readData('fxnew')+'次\n上次错误共:'+errFile+'次\n历史错误共:'+readData("Error")+'次\n\n感谢你的使用!请关注http://70701.top 来了解最新动态\nQQ 2653907035\n邮箱 aa1@90.cm')
var s=getSd+'/70701缓存数据';
if(!new java.io.File(s).exists()){
new java.io.File(s).mkdirs()}
}catch(z){print("错误:"+z)}
}abc1()
//红石模组
var hs_w0=178,hs_w1=246;
var hs_l0=155,hs_l1=255;
var hs_btn=98,hs_btn2=54;
var hs_p1=70,hs_p2=44;var hs_p=[0,0,0];
var hs_rp=114,hs_rt=108;
var hs_fs=61;
var ps=128,sps=156,pse=20;
hs_btntime=1000;
var butto2=null;//gui
Block.setExplosionResistance(178,25);
//建筑部分
var JZZ=0,JZin=0;
var DJZ=null;
//70701系列 io
var fx_dirin= getSd+"/Android/data/70701";
var fx$io=fx_dirin+'/Space.Script';
var fx$in=fx_dirin+'/Space.MOV';
function fx_70701(){
if(!new java.io.File(fx_dirin).exists()){
new java.io.File(fx_dirin).mkdirs()}
if(new java.io.File(fx$io).exists()){
new java.io.File(fx$io).delete()}
};var isErr=1;
fx_70701();//$_0.newgame();
//================================
function fx_ff(){//检测未启用
var spp,sp,lpp;
if(java.io.File(fx$in).exists()){
sp=readtxt(fx$in);
spp= Number(sp);
try{
$_0.Space(spp);print(spp);
new java.io.File(fx$in).delete()
}catch(e){print(e);
new java.io.File(fx$in).delete()}}
if(java.io.File(fx$io).exists()){
lpp=String(readtxt(fx$io));
try{eval(lpp);
new java.io.File(fx$io).delete()
}catch(e){
print('io_o:'+e);
new java.io.File(fx$io).delete()}}
}
var fx$xx=true;
function fx_tton(){
var _ii=new java.lang.Thread(
new java.lang.Runnable({run: function(){
while(fx$xx){
//fx_ff();
try{SP.mod_2()}catch(z){}
_ii.sleep(1000);
}}}));_ii.start()}
fx_tton();
var SP;var ADDMOD='null';
function nullScript(){//readfiles(file);
var Script=Array_json+'/null.Script';
var c=String(readtext(Script));
SP=new Function("return"+c)();
};nullScript();
function newScript(){
try{
var get_Script1=getSd+'/games/com.mojang/minecraftWorlds/'+Level.getWorldDir();
var get_Script= get_Script1+'/Space_70701.Script';
var get_Script2= get_Script1+'/Space_mod.Script';
if(java.io.File(get_Script).exists()){
var game_script=String(readtext(get_Script));
SP=new Function("return"+game_script)();};
if(java.io.File(get_Script2).exists()){
var ADDMOD=String(readtext(get_Script2));
try{eval(ADDMOD)}catch(e){print('存档程序错误'+e)}
}
try{SP.NEW()}catch(e){print(e)}
} catch(f){print(f)}
}
ModPE.$saveData= ModPE.saveData;
ModPE.$readData= ModPE.readData;
ModPE.$removeData= ModPE.removeData;
ModPE.saveData=saveData;
ModPE.readData=readData;
ModPE.removeData=deleteData;
function $$(){
try{
button_xs();
if(readData("ismusic")==''||null){saveData('ismusic',1)}
if(isErr==1){_002(FX.r[0],"Space_70701 "+FX.r[0],FX.r[1])}else{_002(FX.r[0],'Space_70701'+FX.r[0],FX.r[2])}
if(isHS==1){
Block.setLightLevel(124,15);
Block.setLightLevel(246,0);}
var $=readData('fxnew');
saveData('fxnew',Number($)+1);
if(readData('HS')==1){isHS=1}
var p=readData("Error"),pp=0;if(p!=''){pp=(p-1)+errFile+1}
saveData("Error",pp);
if(errFile!=0){_002('请查看数据包是否完整','数据包文件缺少','本地文件错误共'+errFile+'个','stat_notify_sdcard_usb')}
setPr('初始化完成   用时'+(new Date().getTime()-Time_NEW)/1000+'秒\n当前时间为：'+Time(3)+"\u65f6"+Time(4)+"\u5206"+Time(5)+"\u79d2");
}catch(z){print(z)}
};$$();
/*
    * QQ:aa1@90.cm(2653907035)
    * 邮箱：aa1@90.cm
    * Space工作组广收人才,期待你的加入！
*/
