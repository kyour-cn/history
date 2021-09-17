/* !70701_Series -0.1 | © 2014-2015 | 70701.top @ModPE Script # mojang & zhuoweizhang
  \*请先阅读以下注释内容!
  \*请勿修改、抄袭此源文内容,侮辱、诋毁作者、遵守相关法律法规,使用此脚本而发生的负面效果作者将不付任何责任!
    ---作品相关---
    作者:贴吧(小小草_小小爱) QQ(2653907035) Email(aa1@90.cm)
    作者团队:光夜_Space工作室
    ---程序说明---
    此js会从网络获取内容!请定时连接网络运行此程序检测最新信息及更新数据!
    此js部分加密!如果修改部分将不能正常运行!
    ↘这里可以获取js的最新信息
       http://70701.top/js.asp
*/TIME=new Date().getTime();
C=G=new Array();//状态寄存器C,G
Activity=ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();var Gravity=android.view.Gravity,_win=ctx.getWindow().getDecorView(),Context = Packages.android.content.Context,tnfd=android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL,Null=Function(),Intent=android.content.Intent,hh="\n",http_="http://70701.top/data/mc";
function dip2px(d){return Math.ceil(d*ctx.getResources().getDisplayMetrics().density)}var JAVA={};
JAVA.F=java.io.File;
JAVA.FW=java.io.FileWriter;
JAVA.FIS=java.io.FileInputStream;
JAVA.FOS=java.io.FileOutputStream;
JAVA.IS=java.io.InputStream;
JAVA.ISR=java.io.InputStreamReader
JAVA.OS=java.io.OutputStream;
JAVA.ZF=java.util.zip.ZipFile;
JAVA.BR=java.io.BufferedReader;
/*
C[1]:任务进程提示1=f
*/
var GUI={Button:android.widget.Button,cdbg:[127,255,255,255],x:ctx.getWindowManager().getDefaultDisplay().getWidth(),y:ctx.getWindowManager().getDefaultDisplay().getHeight()}
String.prototype.void=function(){try{var c=Function(this);return c}catch(z){return null}}
Object.prototype.toString=function(){return JSON.stringify(this)+''}
var DC={cd:''}//临时寄存器
var Err={z:'解压出错:\n',p:'路径错误',m:'菜单显示出错\n',j:"记录信息出错\n",fc:"文件操作出错:\n",not:"未知错误:\n",http:"网络错误:\n",web:"服务器错误:\n",zh:"您没有登录账号!\n",task:"任务/进程出错",d:"下载可能出现了错误\n"};
var TASK={},TASKS={name:"",id:"",ing:false}
var TACK=new java.lang.Thread(new java.lang.Runnable({run: function(){while(1){
if(TASKS.ing==false){Task()}
TACK.sleep(2000);}}}));var DATA={iscd:true,btn_x:3,btn_y:GUI.y/2,btn_s:GUI.x/16,cdname:"70701后台管理",N:100,word:null,isplay:false,jx:android.os.Build.MODEL,anbb:android.os.Build.VERSION.RELEASE}//数据寄存器
DATA.SD=android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+'';
DATA.dp=DATA.SD+"/.70701";DATA.af=DATA.SD+"/70701";DATA.f_on=DATA.dp+"/con";DATA.f_off=DATA.dp+"/coff";DATA.Path=DATA.dp+"/Data";DATA.void=DATA.Path+"/Function";DATA.res=DATA.af+"/res";DATA.hc=DATA.dp+"/cache";DATA.tr=DATA.af+"/js日志.txt";DATA.lsp=DATA.hc+"/xx";DATA.exe=DATA.res+"/exe";
(function(){if(!(JAVA.F(DATA.f_on).exists()&&JAVA.F(DATA.f_off).exists()&&JAVA.F(DATA.exe).exists()&&JAVA.F(DATA.void).exists()&&JAVA.F(DATA.lsp).exists())){JAVA.F(DATA.f_on).mkdirs();JAVA.F(DATA.f_off).mkdir();JAVA.F(DATA.exe).mkdirs();
JAVA.F(DATA.void).mkdirs();JAVA.F(DATA.lsp).mkdirs();}if(!JAVA.F(DATA.tr).exists()){writetxt(DATA.tr,"70701_Series JS 日志\n*****************************\n 手机型号: "+DATA.jx+" 安卓版本: "+DATA.anbb+"\n作者联系方式:\n  QQ 2653907035[或12 7070 1414]\n  百度贴吧 小小草_小小爱\n  光夜_Space工作组出品\n*****************************")}})();
Game={bb:-0.1,zb:"0.11.1",dq:"0.11.1",wpath:DATA.SD+"/games/com.mojang/minecraftWorlds"};
/***数据声明***/
HTML=android.text.Html.fromHtml;_useItem=_attackHook=_entityAdded=_procCmd=_destroyBlock=_modTick=_leaveGame=_newLevel=_deathHook=_entityRemoved="";gethtml=android.text.Html.fromHtml;zd=ctx.getSystemService(Context.VIBRATOR_SERVICE);diaclick=android.content.DialogInterface.OnClickListener;byte1k=new java.lang.String(new Array(1025).toString()).getBytes();
function download(wp,fp,e_,m){
function main(){
try{var urlfile=java.net.URL(wp),httpUrl=urlfile.openConnection();var is=httpUrl.getInputStream();
var f_=(fp+'').split('/');f_=DATA.hc+"/"+f_[f_.length-1];
var bis=new java.io.BufferedInputStream(is),f=new java.io.File(f_);if(f.exists()){deleteA(fp)}
var bos=new java.io.BufferedOutputStream(new java.io.FileOutputStream(f));
while ((len = bis.read(byte1k)) != -1){
bos.write(byte1k,0,len)}bos.flush();bis.close();
httpUrl.disconnect();
}catch(e){}finally{try{
bos.close();bis.close();ydfile(f_,fp+'');eval(e_);
}catch(z){print(Err.d+z)}} }//})).start()}
if(m==null){new java.lang.Thread(new java.lang.Runnable({run:function(){main()}})).start()}else{main()}}
function jyss(a,b,e,m){//{
function main(){try{
var file=new JAVA.F(a),OutFile=null,zipFile=new JAVA.ZF(file),zipInput=new java.util.zip.ZipInputStream(new JAVA.FIS(file)),entity=null,output=null;
while((entry = zipInput.getNextEntry())!=null){
var pp=String(entry.getName()).replace(/{/ig,"/");outFile=new JAVA.F(b+'/'+pp);
if(!outFile.getParentFile().exists()){
outFile.getParentFile().mkdirs()}
if(!outFile.exists()){
outFile.createNewFile()}
input = zipFile.getInputStream(entry); output = new JAVA.FOS(outFile);var temp=0;
while((temp = input.read(byte1k))!=-1){
output.write(byte1k,0,temp)}
input.close();output.close();
};eval(e)}catch(z){err(Err.z+z)}}
if(m==null){new java.lang.Thread(new java.lang.Runnable({run:function(){main()}})).start()}else{main()}}
var tpopx=0,tpopy=0,prt="请稍后...",bt_n=null,n=null,dp,n,uuzt=false,allofgytype=[0,0,0,0,0],l=1,jg=0;
function guiuu(){
if(!uuzt){ctx.runOnUiThread(new java.lang.Runnable({
run: function(){try{dp = ctx.getResources().getDisplayMetrics().density;
var mX,mY;tpopx = 5*dp;tpopy = 25*dp;
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
bt_n=new android.widget.Button(ctx);
bt_n.setTextSize(13);bt_n.setText("请稍后");
//bt_n.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(100,200,200,200)));
n=bt_n;bt_n.setOnTouchListener(new android.view.View.OnTouchListener({
onTouch :function(v, e){
switch (e.getAction()){
case 0:mX=e.getX();mY=e.getY();
break;case 2:var delX=parseInt(e.getX()-mX);
var delY=parseInt(e.getY()-mY);
tpopx=tpopx+delX;tpopy=tpopy+delY;
bt_n.update(parseInt(tpopx), parseInt(tpopy), -1, -1);break}return true;
}}));layout.addView(bt_n);
bt_n=new android.widget.PopupWindow(layout,400,130); 
bt_n.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, tpopx, tpopy);uuzt=true
}catch(err){err(err);
}}}));uuzt=true}else{_update()}}
function _update(){
ctx.runOnUiThread(java.lang.Runnable({ run: function(){try{
if(n!=null){n.setText(prt)
}}catch(err){print(Err.m+err)}
}}))}
function dcz(u,n){ModPE.overrideTexture(n,u)}
function exe(_){var e=DATA.exe+"/"+_+".JString";if(JAVA.F(e).exists()){
return (readtxt4(e)+'').void()}
return null}
function cTask(){
var a=arguments;if(a.length>3){
this.name=a[0];this.void=a[1];this.str=a[2];this.err=a[3]}else{print("创建"+Err.task)}};
function addTask(t){
if(t instanceof cTask){
TASK[new Date().getTime()+'']=t
}}
function Task(){
TASKS.ing=true;for(i in TASK){
if(TASK[i] instanceof cTask){
var t=TASK[i];if(C[1]!=1){print("开始任务 : "+t.name+hh+t.str)}TASKS.ing=true;TASKS.name=t.name;TASKS.id=''+i;try{eval(t.void);
if(C[1]!=1){print("完成任务 :"+t.name)}
}catch(f){err("任务执行出错 :"+t.name+hh+t.err+"\n源错误代码:\n"+f)}
delete TASK[i]}else{delete TASK[i]}}
TASKS.ing=false}
function getcdn(){
if(DATA.isplay){return Game.wpath+"/"+Level.getWorldDir()}else{return null}}
function updateurl(){try{
var m= new android.widget.LinearLayout(ctx);
var s= new android.widget.ScrollView(ctx);
m.setOrientation(android.widget.LinearLayout.VERTICAL);s.addView(m);
var d= new android.app.Dialog(ctx); 
d.setContentView(s);d.setTitle('请输入链接');
var a= new android.widget.EditText(ctx);
a.setText("http://");a.setInputType(tnfd);
m.addView(a);
var btn= new android.widget.Button(ctx);
btn.setText('跳转链接');
btn.setOnClickListener(new android.view.View.OnClickListener({onClick:function(v){
webview.loadUrl(a.getText());print('万事俱备,稍加等待!何愁大事不成!')
}}));m.addView(btn);d.show()
}catch(z){err(z)}}
function fxzdy(a,b,c,d,e,f){
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){try{
var dialog=new android.app.AlertDialog.Builder(ctx);
dialog.setTitle(a);dialog.setMessage(b);
dialog.setPositiveButton(c,new android.content.DialogInterface.OnClickListener(){onClick:new Function(e)});
dialog.setNegativeButton(d,new android.content.DialogInterface.OnClickListener(){onClick:new Function(f)});dialog.show()
}catch(k){err(Err.m+k)}
}}))}
function iswl() {
var ni=Activity.getSystemService(Context.CONNECTIVITY_SERVICE).getActiveNetworkInfo();if (ni != null && ni.isConnected()){return 1 + ni.getType()}return 0}
function fz(str){
ctx.runOnUiThread(new java.lang.Runnable({ 
run: function(){
ctx.getSystemService(ctx.CLIPBOARD_SERVICE).setText(str)}}))}
GUI.WEB=false;
function webView(URLL,m){
if(GUI.WEB){GUI.web.dismiss()}GUI.WEB=true;GUI.wm=true;if(m==null){GUI.wm=false}
ctx.runOnUiThread(new java.lang.Runnable({run: function(){try{
var layout=new android.widget.LinearLayout(ctx);
var layout2=new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
GUI.web=new android.widget.PopupWindow(layout)
GUI.web.setFocusable(GUI.wm)
layout.setOrientation(1)
if(!GUI.wm){
var layout1= new android.widget.LinearLayout(ctx);
layout1.setOrientation(0);
layout1.addView(rbtn("关闭","try{GUI.web.dismiss();GUI.WEB=false}catch(z){err(z)}",""));
layout1.addView(rbtn("刷新","webview.loadUrl(webview.getUrl())",""));
layout1.addView(rbtn("跳转链接","updateurl()",""));
layout1.addView(rbtn("浏览器打开","try{openUrl(webview.getUrl())}catch(z){err(z)}",""));
layout2.addView(layout1)}else{print("返回关闭此网页")}
webview = new android.webkit.WebView(ctx);
webview.getSettings().setJavaScriptEnabled(true);//webview.addJavascriptInterface(java,"java");
webview.loadUrl(URLL);	
var abc=new android.webkit.WebViewClient();
webview.setWebViewClient(abc);
layout.addView(webview);
layout2.addView(makeMenu(layout));
GUI.web.setContentView(layout2);
GUI.web.setWidth(GUI.x);
GUI.web.setHeight(GUI.y);
GUI.web.setBackgroundDrawable(rcolor(255,255,255,255));
GUI.web.showAtLocation(ctx.getWindow().getDecorView(),Gravity.RIGHT | Gravity.TOP,0,0);
}catch(er){err(er)}}}))}
function login_yun(){
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){try{
var m = new android.widget.LinearLayout(ctx);
var s = new android.widget.ScrollView(ctx);
m.setOrientation(android.widget.LinearLayout.VERTICAL);s.addView(m);
d = new android.app.Dialog(ctx); 
d.setContentView(s);
d.setTitle("登录70701用户 - 云端");
var ig = new android.widget.EditText(ctx); 
ig.setHint("账号(必填)");m.addView(ig);
ig.setInputType(tnfd)
var a = new android.widget.EditText(ctx); 
a.setHint("密码(必填)");m.addView(a);
a.setInputType(tnfd)
var pp = new android.widget.Button(ctx); 
pp.setTextSize(15);pp.setText("登录"); 
pp.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
var f="",ar,br;
if(ig.getText()!=""){ar=ig.getText();}else{f="账号"}
if(a.getText()!=""){br=a.getText();}else{f+=" 密码"}
if(f!=""){err("未填写"+f+"！不能登陆哟")}else{
gethttp("http://70701.top/data/mc/login.asp?zh="+ar+"&mm="+br);
d.dismiss()}}});m.addView(pp);
m.addView(rbtn(gethtml("<font color=#55ff55>没有账号?点击注册</font>"),"d.dismiss();newlog_yun();",""));d.show()
}catch(e){print ("Error: "+e)
}}});if(readData(".zh")!=""){show("检测本地有账号记录!\n重新登录将覆盖当前账号!")}}
function newlog_yun(){
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){try{
var m = new android.widget.LinearLayout(ctx);
var s = new android.widget.ScrollView(ctx);
m.setOrientation(android.widget.LinearLayout.VERTICAL);s.addView(m);
d = new android.app.Dialog(ctx); 
d.setContentView(s);
d.setTitle("注册70701用户 - 云端");
var ig = new android.widget.EditText(ctx); 
ig.setHint("账号(必填)");m.addView(ig);
ig.setInputType(tnfd)
var a = new android.widget.EditText(ctx); 
a.setHint("密码(必填)");m.addView(a);
a.setInputType(tnfd)
var na = new android.widget.EditText(ctx); 
na.setHint("昵称-用户名(必填)");m.addView(na);
na.setInputType(tnfd)
var pp = new android.widget.Button(ctx); 
pp.setTextSize(15);pp.setText("注册"); 
pp.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){var f="",ar,br,nr;
if(ig.getText()!=""){ar=ig.getText();}else{f="账号"}
if(a.getText()!=""){br=a.getText();}else{f+=" 密码"}
if(na.getText()!=""){nr=na.getText();}else{f+=" 用户名"}
if(f!=""){err("未填写"+f+"！不能注册哟")}else if(isaz09(ar)==0&&isaz09(br)==0&&isna(nr)){
gethttp("http://70701.top/data/mc/newdata.asp?zh="+ar+"&mm="+br+"&name="+nr);d.dismiss()}}});m.addView(pp);
m.addView(rbtn(gethtml("<font color=#ccccff>已有账号?点击登录</font>"),"d.dismiss();login_yun()",''));d.show()
}catch(e){err(Err.m+e)}}})}
function setzh(m,zh,mm,name){
var nm="70701";
try{switch(m){case 0:saveData(".zh",zh);saveData(".mm",mm);saveData(".name",name);return true;
break;case 1:
var rs=readData1;return {zh:rs(".zh"),mm:rs(".mm"),name:rs(".name")};break;case 2:
DATA.zh=setzh(1)}}catch(x){err(Err.j+x)}}
function jmz(m,n,s){
try{switch(m){
case 0:
saveData(n,e_bm(String(s),"112"));return "e1"
break;case 1:
return e_jm(String(readData(n)),"112");
}}catch(z){err(z);return "e0"}}
function s_p(m,c1){
try{switch(m){
case 0:
DATA.c=1;if(c1){DATA.c=0.2};for(var i=1;i<=255;i++){Block.setDestroyTime(i,DATA.c)}DC.kw=c1;
break;case 1:
brrak;case 2:
if(c1==null){return Level.getGameMode()}else{Level.setGameMode(c1)} }}catch(z){err(z)}}
/***err,print,show******e_b,jm****/
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('w G(a,b){6 c="";s(6 i=0;i<b.7;i++){c+=b.u(i).o()}6 d=l.r(c.7/5);6 e=m(c.9(d)+c.9(d*2)+c.9(d*3)+c.9(d*4)+c.9(d*5));6 f=l.I(b.7/2);6 g=l.z(2,A)-1;B(e<2){t F}6 h=l.y(l.E()*D)%C;c+=h;v(c.7>p){c=(m(c.n(0,p))+m(c.n(p,c.7))).o()}c=(e*c+f)%g;6 j="";6 k="";s(6 i=0;i<a.7;i++){j=m(a.u(i)^l.r((c/g)*x));B(j<q){k+="0"+j.o(q)}H k+=j.o(q);c=(e*c+f)%g}h=h.o(q);v(h.7<8)h="0"+h;k+=h;t k}w J(a,b){6 c="";s(6 i=0;i<b.7;i++){c+=b.u(i).o()}6 d=l.r(c.7/5);6 e=m(c.9(d)+c.9(d*2)+c.9(d*3)+c.9(d*4)+c.9(d*5));6 f=l.y(b.7/2);6 g=l.z(2,A)-1;6 h=m(a.n(a.7-8,a.7),q);a=a.n(0,a.7-8);c+=h;v(c.7>p){c=(m(c.n(0,p))+m(c.n(p,c.7))).o()}c=(e*c+f)%g;6 j="";6 k="";s(6 i=0;i<a.7;i+=2){j=m(m(a.n(i,i+2),q)^l.r((c/g)*x));k+=K.L(j);c=(e*c+f)%g}t k}',48,48,'||||||var|length||charAt||||||||||||Math|parseInt|substring|toString|10|16|floor|for|return|charCodeAt|while|function|255|round|pow|31|if|100000000|1000000000|random|null|e_bm|else|ceil|e_jm|String|fromCharCode'.split('|'),0,{}));
function show(a){ctx.runOnUiThread(new java.lang.Runnable({run:function(){var b=new android.app.AlertDialog.Builder(ctx);b.setIcon(android.R.drawable.ic_menu_agenda);b.setTitle("来自70701的信息");b.setMessage(''+a);b.setPositiveButton("OK",new android.content.DialogInterface.OnClickListener(){onClick:function(a,w){}});b.show()}}))};function err(a){ctx.runOnUiThread(new java.lang.Runnable({run:function(){var c=new android.app.AlertDialog.Builder(ctx);c.setIcon(android.R.drawable.stat_notify_error);c.setTitle("提示");c.setMessage(String(a));c.setPositiveButton("关闭",new android.content.DialogInterface.OnClickListener(){onClick:function(a,w){}});c.setNegativeButton("复制",new android.content.DialogInterface.OnClickListener(){onClick:function(b,w){fz(String(a));print("已复制到手机粘贴板")}});c.show()}}))};function print(a,w,h){ctx.runOnUiThread(new java.lang.Runnable({run:function(){var t=android.widget.Toast.makeText(ctx,"70701:"+a,0);if(w!=null&&h!=null){t.setGravity(Gravity.LEFT | Gravity.TOP,w,h)}t.show()}}))};
function Not(_01,_02,_03,icon,id){
if(icon==null){icon= 'ic_menu_compass'}
ctx.runOnUiThread(new java.lang.Runnable(){run: function(){
var n=ctx.getSystemService(ctx.NOTIFICATION_SERVICE);var _7=eval("new android.app.Notification(android.R.drawable."+icon+",_01,1)");_7.setLatestEventInfo(ctx,_02,_03,null);n.notify(id,_7)
}});}
function gethttp(_url,str_,e_){
new java.lang.Thread(new java.lang.Runnable({
run: function(){try{
if(str_!=0){var yu=str_;
if(str_==null){yu="拼命加载中..."}
prt=yu;guiuu();}
var c=new java.net.URL(_url).openConnection();c.connect();
bu= new java.io.BufferedReader(new java.io.InputStreamReader(c.getInputStream()));
var d=bu.readLine(),vv=bu.readLine();
while(vv!=null){d+="\n"+vv;vv= bu.readLine()}
if(iswl()!=0){
/*var z=DATA.lsp+"/."+Math.floor(Math.random()*1000)+'.h';
if(iswl()!=0){var versionFile = new java.io.File(z);
versionFile.createNewFile();
var sVO= new java.io.FileOutputStream(versionFile);
var download = android.net.http.AndroidHttpClient.newInstance('o').execute(new org.apache.http.client.methods.HttpGet(_url)).getEntity().writeTo(sVO);sVO.close();*/
try{eval(d+'')}catch(z){
var x=z+'';if(x.indexOf('XML')!=-1){err("从服务器获取内容失败\n"+x)}else{err(Err.web+'请复制联系管理员\n'+x)}}
}else{print("当前网络不可用!")}}catch(z){err(z)}
//deleteF(z);
disuu();eval(e_);
}})).start()}
function openUrl(u){
ctx.startActivity(new android.content.Intent(android.content.Intent.ACTION_VIEW,android.net.Uri.parse(u)))}
/**********分割线********/
function readData(str){
var pp=DATA.Path+"/"+str+'.data'
if(new JAVA.F(pp).exists()){
return readtxt3(pp);
}else{return ''}}
function readData1(str){
var pp=DATA.Path+"/"+str+'.data'
if(new JAVA.F(pp).exists()){
return readtxt1(pp);
}else{return ''}}
function saveData(str,s){
var d=s;if(s==null){d=0}
new java.io.FileOutputStream(DATA.Path+"/"+str+'.data').write(new java.lang.String(d).getBytes())}
function deleteData(str){
var $=JAVA.F(DATA.Path+"/"+str+'.data');
if($.exists()){$.delete()}}
function deleteF(F){
try{var file=new JAVA.F(F);if(file.exists()){if(file.isFile()){file.delete()}else if(file.isDirectory()){var files=file.listFiles();for(var i=0;i<files.length;i++){var gg= files[i];deleteF(gg)}}}}catch(x){}};
function deleteA(F){ 
var file=new JAVA.F(F);if(file.exists()){if(file.isFile()){file.delete()}else if(file.isDirectory()){var files=file.listFiles();for(var i=0;i<files.length;i++){var gg= files[i];deleteA(gg);file.delete()}}}else{print(Err.p)}};
function readtxt1(_A_A){
if(java.io.File(_A_A).exists()){//第一
return new JAVA.BR(new JAVA.ISR(new JAVA.FIS(_A_A))).readLine();
}else{return ''}};
function writetxt(_A_A,A_A_,b){
var bm="UTF-8";
if(b!=null){bm=b}
try{new JAVA.FOS(_A_A).write(new java.lang.String(A_A_).getBytes(bm))
}catch(A_){print("输出数据出错:"+A_)}}
function ydfile(_A_A,AA__){
try{var A_A_=new java.io.File(_A_A);
var __AA=new java.io.File(AA__);
A_A_.renameTo(new java.io.File(__AA));
return true
}catch(z){err(Err.fc+z)}}
function txtZJ(_A_A,t,b){
var A_A_=new JAVA.F(_A_A),bm="UTF-8";
if(b!=null){bm=b}
try{var A__A= new JAVA.FW(A_A_,true);
A__A.write(new java.lang.String(t).getBytes(bm));A__A.close()
}catch(z){err(z)}}
function readtxt2(_A_A,gg){//多+END+注释
var A_A_=String(_A_A),__AA_='UTF-8';
if(gg!=null){__AA_=gg}
if(new JAVA.F(A_A_).exists()){
var A__A = new JAVA.BR(new JAVA.ISR(new JAVA.FIS(A_A_),__AA_));
var _AA__= '',_AA_= A__A.readLine(),__AA;
while(_AA_!='END'&&_AA_!=null){
if(_AA_.indexOf('//')==-1){
__AA=_AA_}else{var AA__=vv1.split('//');
__AA=AA__[0];}
_AA__+= __AA+'\n';_AA_= A__A.readLine()}
return _AA__}else{return ''}}
function readtxt3(re,gg){
if(new java.io.File(re).exists()){
var bb='UTF-8';if(gg!=null){bb=gg}
var bu = new JAVA.BR(new JAVA.ISR(new JAVA.FIS(re),bb));
var data=bu.readLine(),vv=bu.readLine();
while(vv!=null){
data+="\n"+vv;vv= bu.readLine()
}return String(data)}else{return ""}}
function readtxt4(re,m){
if(new java.io.File(re).exists()){
var bu = new JAVA.BR(new JAVA.ISR(new JAVA.FIS(re)));
var vv= bu.readLine();var data= vv;
if(m==null){data="";vv= bu.readLine();
while(vv!=null){data+= vv+"\n";vv= bu.readLine()
}}return String(data)}else{return ''}}
function Time(){
return new java.text.SimpleDateFormat("yyyy-MM-dd hh:mm:ss").format(new Date());}
function isaz09(_A_A){
var A_A_=String(_A_A),A__A=0;
if(A_A_.length<5){
print("账号与密码至少大于等于5位");
A__A=1}var AA_A = /^[0-9a-zA-Z]+$/;
if(!AA_A.test(A_A_)){
print("账号与密码只能由数字和字母组成");
A__A+=2}return A__A}
function isna(_A_A){
try{var A_A_=String(_A_A);var _AA_ = /'|"|<|>/g;if(_AA_.test(A_A_)){var A__A=said.match(A_A_);return false}else{return true}}catch(s){err("出现禁用字符,请不要出现英文的单 双引号('和'')及换行符,空格和html标签(<与>)等特殊字符");return false}}
function setC(i,v){
if(i!=null){C[i]=v;writetxt(DATA.Path+"/C.db",C.toString())}else{C=new Function("return ["+readtxt3(DATA.Path+"/C.db")+"]")()}}setC();
function setG(i,v){
var db=getcdn();if(db!=null){if(i!=null){G[i]=v;writetxt(db+"/G.db",G.toString())}else{G=new Function("return ["+readtxt3(db+"/G.db")+"]")()}}}
function logzj(_,$){var a='';if($){a=hh};txtZJ(DATA.tr,a+"\n"+_)}
/***程序开始***/
function _main(){
new java.lang.Thread(new java.lang.Runnable({
run: function(){try{
   var path=new JAVA.F(DATA.f_on);
   if(path.exists()&&path.isDirectory()){
   var files=path.listFiles()//new java.io.FilenameFilter("fx"));
   for(var i in files){
    try{
      var c=readtxt4(files[i]);
      new Function(c);
      eval(c);
    }catch(e){deleteF(files[i])}
   }}
setzh(2);hsdx();
}catch(z){err(z)}
}})).start()}
var nulln_=SP={a:Null,b:Null,c:Null,d:Null,e:Null,f:Null,h:Null,i:Null,mod:Null,new:Null};
function nullScript(){SP.f();SP=nulln_};
function newScript(){
try{var A_A_=Game.wpath+'/'+Level.getWorldDir();
var _A_A= A_A_+'/70701.Script';
if(JAVA.F(_A_A).exists()&&JAVA.F(_A_A).isFile()){
var _AA_=String(readtxt3(_A_A));
SP=new Function("return "+_AA_)()};
try{SP.new()}catch(A_){print(A_)}
} catch(f){err(f)}}
function disuu(){
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){try{
bt_n.dismiss();uuzt=false;prt="拼命加载中..."
}catch(z){}
}}))}
function isOk(){
if(iswl()!=0){var zh=setzh(1);
gethttp(http_+"/update.asp?bb="+Game.bb+"&zh="+zh.zh+"&mm="+zh.mm,0);}else{logzj("未打开网络连接");print("当前无法与服务器连接哟!")}}
function rbtn(text,click,long,bs){
var btn=new GUI.Button(ctx);
btn.setText(text);
if(bs!=null){btn.setTextSize(bs)};
btn.setOnClickListener(new android.view.View.OnClickListener(){
onClick:new Function(click)});
btn.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick:new Function(long+";return true")}));
return btn}
function rspin(names){
var Spinner=new android.widget.Spinner(ctx);
Spinner.setAdapter(new android.widget.ArrayAdapter(ctx,android.R.layout.simple_spinner_item,String(names).split(",")));
return Spinner}
function rcolor(a,b,c,d){
return new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(a,b,c,d))}
function rbmp(m,s){
var pa=new android.graphics.Paint(),cv=new android.graphics.Canvas(),bmp=android.graphics.Bitmap.createBitmap(100,100,android.graphics.Bitmap.Config.ARGB_8888);
pa.setStyle(android.graphics.Paint.Style.STROKE);pa.setColor(android.graphics.Color.parseColor('#FF0000FF'));cv.setBitmap(bmp);
pa.setStrokeWidth(1)//宽
pa.setTextSize(30);
if(m==null){
var su="无图片";if(s!=null){su=s}
cv.drawRect(1,1,99,99,pa);
cv.drawText(su,5,55,pa)}else{eval(m)}
return new android.graphics.drawable.BitmapDrawable(bmp)}
function rtext(te,s){
var t=new android.widget.TextView(ctx);t.setText(te);if(s!=null){t.setTextSize(s)};return t}
function rgui(m,s1,d2){
switch(m){
case 1: var r=new android.widget.LinearLayout(ctx);
r.setOrientation(s1);return r
break
}}
_cx={p:'',s:'',c:'',m:1};
function cxxq(id){
try{var file=JAVA.F(_cx.p+"/"+id);
if(file.exists()&&file.isFile()){
show("名称:"+id+"\n大小:"+file.length()+"字节\n版本:"+readtxt4(_cx.p+"/"+id,1))
}else{err("这个对象不是程序或者不存在!")}
}catch(r){err(r)}}
function ys_(s,f){
ctx.runOnUiThread(new java.lang.Runnable({run: function(){
try{new android.os.Handler().postDelayed(new java.lang.Runnable({run:new Function(f)}),s)
}catch(z){err(z)}
}}))}
var MIME_Table=[[".apk","application/vnd.android.package-archive"],[".avi","video/x-msvideo"],[".bin","application/octet-stream"],[".c","text/plain"],[".doc","application/msword"],[".gif","image/gif"],[".htm","text/html"],[".html","text/html"],[".jpeg","image/jpeg"],[".jpg","image/jpeg"],[".js","application/x-javascript"],[".log","text/plain"],[".mov","video/quicktime"],[".mp2","audio/x-mpeg"],[".mp3","audio/x-mpeg"],[".mp4","video/mp4"],[".mpg4","video/mp4"],[".ogg","audio/ogg"],[".png","image/png"],[".txt","text/plain"],[".wav","audio/x-wav"],[".xml","text/plain"],[".zip","application/x-zip-compressed"],["","*/*"]];
function getMIME(File){
var jo=String(File).split('.');var ygy=String(jo[jo.length-1].toLocaleLowerCase());var type="*/*";
if(jo.length<2 || ygy==''){return type}
for(var i=0;i<MIME_Table.length;i++){
if(('.'+ygy)==MIME_Table[i][0]){type = MIME_Table[i][1]}}return type}
function openFile(File,Mime){
var mime=getMIME(File);
if(Mime!=null){mime=getMIME("."+Mime)}
var intent=new Intent();
intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);intent.setAction(Intent.ACTION_VIEW)
var type = mime;intent.setDataAndType(new android.net.Uri.fromFile(new java.io.File(File)), type);Activity.startActivity(intent)}
function printfile(f,data,e,name){
new java.lang.Thread(new java.lang.Runnable({run: function(){
var kio=[data];if(data!=true&&data.indexOf(' ')!=-1){var yl=data.split(' ');for(var yi=0;yi<yl.length;yi++){kio[yi]=yl[yi]}}var file=new java.io.File(f);if(file.exists()&&file.isDirectory()){
try{var files=file.listFiles().sort();
var tofiles='';for(var i=0;i<files.length;i++){
var rr=String(files[i]).split('/');
var rt=rr[rr.length-1];tofiles+=rt;
if(i<files.length-1){tofiles+=','}
};var fu=f;if(name!=null){fu=name}
ctx.runOnUiThread(new java.lang.Runnable({ 
run: function(){var dialog=new android.app.AlertDialog.Builder(ctx);
dialog.setTitle(fu);
dialog.setIcon(android.R.drawable.stat_notify_sdcard);dialog.setPositiveButton("SD目录",new diaclick(){onClick:function(dia,w){printfile(DATA.SD,data,e,name)}});dialog.setNegativeButton("取消",null);
dialog.setItems(tofiles.split(','),new diaclick(){onClick: function(dia,w){try{var data2=new java.io.File(String(files[w])),h=String(files[w]);
if(data2.exists()){if(data2.isFile()){
var jo=h.split('.');var ygy=jo[jo.length-1].toLocaleLowerCase();
var vvb=false;for(var ll=0;ll<kio.length;ll++){
if(ygy==kio[ll]||kio[ll]==true){vvb=true}};
if(data==true||vvb){try{eval(e);
}catch(z){err(z)}}else{
printfile(f,data,e);print('不好意思,您选择的文件后缀不是('+data+'),请重新选择')}
}else if(data2.isDirectory()){
if(data2.listFiles().length>0){printfile(h,data,e,name)}else{printfile(f,data,e,name);err('您选择的文件夹内容为空,请重新选择')}}}else{print('未知错误！')}}catch(z){print(z)}
}});dialog.show();}}))}catch(z){err(z)}
}else{print('此路径不存在')}
}})).start()}
function sjgl(){
ctx.runOnUiThread(new java.lang.Runnable({ 
run: function(){try{
var dialog=new android.app.AlertDialog.Builder(ctx);
dialog.setTitle("资源/数据管理系统");
dialog.setPositiveButton("取消",null);dialog.setItems(String("清除账号及缓存,清除所有数据/文件").split(","),new diaclick(){onClick: function(dia,w){
switch(w){
case 0:deleteData(".zh");deleteA(DATA.hc);break;
case 1:fxzdy("恢复初始状态","\n请注意!\n此操作将删除你的所有数据、下载的程序,文件!恢复到初始化状态! 是否继续?\n","是","否","deleteA(DATA.af);deleteA(DATA.dp)","")}
}});dialog.show()
}catch(z){err(Err.m+z)}
}}))}
function cxgl(id){
var yy="关闭";if(_cx.m==1){yy="打开"}
try{_cx.s=_cx.p+"/"+id;_cx.c=id;
var file=JAVA.F(_cx.s);
if(file.exists()&&file.isFile()){
ctx.runOnUiThread(new java.lang.Runnable({ 
run: function(){try{var dialog=new android.app.AlertDialog.Builder(ctx)
dialog.setTitle("本地程序管理")
dialog.setNegativeButton("取消",null);
dialog.setItems(new java.lang.String(yy+"程序/检查更新/删除程序").split("/"),new diaclick(){onClick: function(dia,m){switch(m){
case 0:if(_cx.m==0){ydfile(_cx.s,DATA.f_off+"/"+_cx.c)}else{ydfile(_cx.s,DATA.f_on+"/"+_cx.c)}
break;case 1:update(url_+"/update.asp")
break;case 2:deleteF(_cx);
}}});dialog.show()}catch(er){err(er)}}}))
}else{err("这个对象不是程序或者不存在!")}
}catch(r){err(r)}}
function setfx_(){
fxzdy("本地程序管理","\n请选择查看已启用的还是已关闭的本地程序!\n","已启用","已关闭","_cx.m=0;_au('开启')","_cx.m=1;_au('关闭')")}
function _au(qq){try{
_cx.p=DATA.f_on;
if(_cx.m==1){_cx.p=DATA.f_off}
var file=JAVA.F(_cx.p);
var files=file.listFiles().sort(),ff='';
for(var i=0;i<files.length;i++){
var rr=String(files[i]).split('/');
var rt=rr[rr.length-1];ff+=rt;
if(i<files.length-1){ff+=','}}ff=ff.split(",");
var ch="";for(var y=0;y<ff.length;y++){
ch+="layout.addView(rbtn('"+ff[y]+"','cxxq(\""+ff[y]+"\")','cxgl(\""+ff[y]+"\")'));"
};ctx.runOnUiThread(new java.lang.Runnable({
run: new Function("var layout= new android.widget.LinearLayout(ctx);var s=new android.widget.ScrollView(ctx);layout.setOrientation(android.widget.LinearLayout.VERTICAL);s.addView(layout);layout.addView(rtext('点击查看详情,长按进行操作'));"+ch+"var dia= new android.app.Dialog(ctx);dia.setContentView(s);dia.setTitle(\"本地已"+qq+"程序管理\");dia.show();")}));
}catch(x){err(Err.m+x)}}
var menu={a:null,b:0,c:null,d:0,e:0}
function Menu(){
var b_x=GUI.x*0.15,b_y=GUI.y/9,b_s=GUI.y/40;
if(menu.b==0){menu.b=1;
ctx.runOnUiThread(new java.lang.Runnable({run:function(){try{
menu.a=new android.widget.PopupWindow();
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.addView(rbtn("关闭","if(menu.d==0){menu.e=0}if(menu.b==1&&menu.e==0){menu.a.dismiss();menu.b=0};if(menu.d==1){menu.c.dismiss();menu.d=0;menu.e=0};","",b_s),-1,b_y);
layout.addView(rbtn("主菜单","Menu2(g_1)","print(G[6]);",b_s),-1,b_y);
layout.addView(rbtn("文件","printfile(DATA.SD,'js','show(h)','文件管理测试')","s_p(0,true)",b_s),-1,b_y);
layout.addView(rbtn("浏览器","webView('file:sdcard/cs.html')","s_p(0,true)",b_s),-1,b_y);
eval(DC.cd);
menu.a.setContentView(makeMenu(layout));
menu.a.setWidth(b_x);
menu.a.setHeight(GUI.y*0.96);
menu.a.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127,0,0,0)));
menu.a.showAtLocation(_win,Gravity.LEFT | Gravity.TOP,GUI.x*0.02,GUI.y*0.02);}catch(z){err(z);menu.b=0}}}))}}
function Menu2(gui,m){
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
if(menu.d==1){menu.c.dismiss()}if(menu.b==0){Menu()}menu.d=1;menu.e=1;
var g=("try{menu.c=new android.widget.PopupWindow();var layout=new android.widget.LinearLayout(ctx);layout.setOrientation(1);"+gui+"menu.c.setContentView(makeMenu(layout));menu.c.setWidth(GUI.x*0.81);menu.c.setHeight(GUI.y*0.96);menu.c.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127,0,0,0)));menu.c.showAtLocation(_win,Gravity.LEFT | Gravity.TOP,GUI.x*0.17,GUI.y*0.02)}catch(z){err(z);menu.d=0}").void();if(m==1){g=gui}g();
}}))}
function makeMenu(layout){ 
var mlayout=new android.widget.RelativeLayout(ctx);
var scrollview=new android.widget.ScrollView(ctx);
var pad=dip2px(2);
scrollview.setPadding(pad,pad,pad,pad);
scrollview.setLayoutParams(new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT,android.widget.RelativeLayout.LayoutParams.FILL_PARENT));
scrollview.addView(layout);
mlayout.addView(scrollview);
return mlayout}
function xtcd(){
try{ctx.runOnUiThread(new java.lang.Runnable({run: function(){
var layout= new android.widget.LinearLayout(ctx);var s=new android.widget.ScrollView(ctx);layout.setOrientation(android.widget.LinearLayout.VERTICAL);s.addView(layout);
layout.addView(rbtn(gethtml("<font color=#0000ff>■</font>资源数据管理"),"dia.dismiss();sjgl()",""));
layout.addView(rbtn(gethtml("<font color=#ff0000>■</font>资源程序下载"),'gethttp(http_+"/download.asp");dia.dismiss()',""));
layout.addView(rbtn(gethtml("<font color=#00ff00>■</font>在线用户中心"),"if(readData('.zh')!=''){grzx()}else{login_yun()};dia.dismiss()",""));
//layout.addView(rbtn(gethtml("<font color=#00ff00>■</font>获取最新详情"),'gethttp(http_+"/new1.asp");dia.dismiss()',""));
layout.addView(rbtn(gethtml("<font color=#0000ff>■</font>本地程序管理"),"setfx_();dia.dismiss()",""));
layout.addView(rbtn(gethtml("<font color=#0000ff>■</font>帮助/反馈信息"),"gethttp(http_+'/bz.asp');dia.dismiss()",""));
layout.addView(rbtn(gethtml("关于"),"webView(http_+'/gy.asp');dia.dismiss()",""));
dia= new android.app.Dialog(ctx);
dia.setContentView(s);dia.setTitle(DATA.cdname);
dia.show()}}));}catch(z){err(Err.m+z)}}
function grzx(){
var x=setzh(1);gethttp(http_+"/grzx.asp?zh="+x.zh+"&mm="+x.mm,"个人信息加载中")}
function _add_(m,n){
var num=n,er="数据记录发生错误";
if(n==null){num=1};var e=jmz(1,m);if(e!="e0"){jmz(0,m,Number(e)+num)}else if(e==""){jmz(0,m,"1")}else{err(er)}}
function TICK(){
var _ii=new java.lang.Thread(
new java.lang.Runnable({run: function(){
while(fx$xx){
try{SP.mod_2()}catch(z){}
_ii.sleep(1000);
}}}));_ii.start()}
var Jp=[0,0,1,0,0,0];//5:0,off 1,on 2,*/2
function jp_(){
var pe=getPlayerEnt();
if(Jp[2]==1){Jp[0]=getPlayerX();Jp[1]=getPlayerZ();Jp[2]=2}if(Jp[2]==3){Jp[2]=1;Jp[3]=getPlayerX()-Jp[0];Jp[4]=getPlayerZ()-Jp[1];setVelX(pe,Jp[3]);setVelZ(pe,Jp[4])}if(Jp[2]!=1){Jp[2]=3}}
function isf_(_A){
try{new Function(_A)}catch(A_){return ";print('程序出错#ifs_');"}return _A}
function hsdx(){
try{var la="try{",j="}catch(z){err(z)}";
useItem=Function('a','b','c','d','e','f','g','h',la+isf_(_useItem)+j+";SP.a(a,b,c,d,e,f,g,h)");
attackHook=Function('a','b',la+'bl_setMobSkin(b,"mob/mooshroom.png");'+isf_(_attackHook)+j+";SP.b(a,b);");
entityAdded=Function("a",la+isf_(_entityAdded)+j+";SP.c(a);");
procCmd=Function("cmd",la+isf_(_procCmd)+j+";SP.d(cmd);");
destroyBlock=Function("a","b","c",la+isf_(_destroyBlock)+j+";SP.e(a,b,c);");
modTick=Function("if(G[1]==1){jp_();if(G[1]==2){jp_()}}"+la+isf_(_modTick)+j+";SP.mod();");
leaveGame=Function("DATA.isplay=false;G[0]=null;"+la+isf_(_leaveGame)+j+";nullScript();");
newLevel=Function("DATA.isplay=true;setG();"+la+isf_(_newLevel)+j+";newScript();");
deathHook=Function("a","b",la+isf_(_deathHook)+j+";SP.h(a,b);");
entityRemoved=Function("a",la+isf_(_entityRemoved)+j+";SP.i(a);");
}catch(x){err("发生严重错误!这可能是非法添加程序引起的\n"+x)}}
void(function(){
if(JAVA.F(DATA.res+"/.b2.png").exists()&&JAVA.F(DATA.res+"/.b1.png").exists()){
updateb_=function(){try{
_butto.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeFile(DATA.res+"/.b1.png")));_butto.setText('');
new android.os.Handler().postDelayed(new java.lang.Runnable({run: function(){ 
_butto.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeFile(DATA.res+"/.b2.png")));}}),300)}catch(e){
_butto.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(127,0,0,0)));_butto.setText("F")}}}else{updateb_=Null}}());
function updatetx(){
DC.c=DATA.res+"/.login_icon.png";
if(readData(".zh")!=""){
if(JAVA.F(DC.c).exists()){return new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeFile(DC.c))}
/*download("http://www.70701.top/res/icon/"+readData(".zh")+".png",DC.c,"print('快递!你的头像到了!请签收',0,0)")*/}else{print(Err.zh+"无法获取头像!");deleteF(DC.c)}return rbmp(null,"无头像")}
var g_1='var lo1=new android.widget.LinearLayout(ctx);lo1.setOrientation(0);var b1=rbtn("","","print(\'放开!你按疼我了 OTL\')");b1.setBackgroundDrawable(updatetx());lo1.addView(b1,GUI.y/3,GUI.y/3);lo1.addView(rtext(HTML("<big><font color=\'red\' >"+DATA.zh.name+"&nbsp;&nbsp;</font></big><small><font>"+DATA.zh.zh+"</font></small>")),-1,GUI.y/5);layout.addView(lo1);var l1=new android.widget.LinearLayout(ctx);l1.setOrientation(0);l1.addView(rbtn("按钮1","",""));layout.addView(makeMenu(l1));';
function getjzsd(s){
var r="你的爪机还能玩吗?",d="你的启动速度超过",f="%的玩家!",n=Math.floor(Math.random()*10);if(s<100){r=d+(89+n)+f}else if(s<500){r=d+(79+n)+f}else if(s<1000){r=d+(65+n)+f}else if(d<2000){r=d+(55+n)+f}else if(d<3000){r=d+(40+n)+f}else if(d<4000){r=d+(30+n)+f}return r}
function gui_p(){ctx.runOnUiThread(new java.lang.Runnable({run: function(){try{
var layout=new android.widget.LinearLayout(ctx);
_butto=rbtn("F","if(DATA.iscd);Menu();updateb_()",'xtcd()');//_butto.setEnabled(false);
layout.addView(_butto,DATA.btn_s,DATA.btn_s);
butto=new android.widget.PopupWindow(layout); 
butto.setContentView(layout);
butto.setWidth(DATA.btn_s);butto.setHeight(DATA.btn_s);butto.setBackgroundDrawable(rcolor(127,0,0,0));
butto.showAtLocation(_win,Gravity.RIGHT | Gravity.BOTTOM,DATA.btn_x,DATA.btn_y);butto.update(DATA.btn_x,DATA.btn_y,DATA.btn_s,DATA.btn_s);updateb_()}catch(er){err(er)}
}}))}gui_p();isOk();_main();Not("70701_Series JS加载完成！","70701_Series JS载入成功","你当前使用的是测试版!如果有好的想法请联系我","ic_dialog_info",10);TACK.start()//;TICK();
print("本次启动耗时"+(TIME=new Date().getTime()-TIME)/1000+"\n"+getjzsd(TIME),0,0);
_add_("game");logzj(" # "+Time()+"\n启动耗时"+TIME/1000+"秒 网络状态:"+iswl()+"\n共进入本游戏"+jmz(1,"game")+"次",true);
/***END ModPE Script***/
/*
addTask(new cTask("测试","show(Task)","测试用","出错"));
*/
//function 
//addTask(new cTask('安装存档-001','jyss(DATA.SD+"/70701-001.zip",Game.wpath,"print(\'解压完成\')","");',"","存档安装错误"))Not("呵呵","版权验证成功","你当前使用的是测试版!如果有好的想法请联系我","ic_dialog_info",9);