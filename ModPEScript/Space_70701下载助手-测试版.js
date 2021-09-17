/*    光夜-Space工作组出品
    警告,此版本为测试版,不公开发布,因为诸多问题存在！
    此js只提供Space_70701js的数据包下载
    功能:删除data数据,更新js,下载完整js
    完成后请禁用或者删除此js
    作者@小小草_小小爱
    由于数据包在云端,难免会出错,见谅
    光夜工作室官网:http://2653907035.3vhost.net
    如果网站和云端文件出现任何问题请建筑我
    邮箱:aa1@90.cm
    QQ:2653907035
    此js结构复杂,我也没注释,实在看不懂不要勉强
    也不要认为我这很绕,js里面这些构造函数更绕,所以应该不会太影响的
    光夜-Space工作组有js教学群,加入请在我的资料上找@小小草_小小爱
*/
var eeer='';
var saveData=ModPE.saveData;
var readData=ModPE.readData;
var text_hu1='未初始化';
var text_hu3='无错误';
var text_hu2='';
var sd=android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
var jsp=sd+'/games/70701packet/';
var jsu='http://2653907035.3vhost.net/file/70701packet/'
var dowfile=[
{path:jsp+"assets/back",http:jsu+'back.zip',z1:'print((text_hu2="下载主资源中...1/7"))',z2:'',name:'back',isjy:1},
{path:jsp+"assets/json",http:jsu+'json.zip',z1:'print((text_hu2="下载主程序中...2/7"))',z2:'',name:'json',isjy:1},
{path:jsp+"assets/json/Array_json",http:jsu+'Array_json.zip',z1:'print((text_hu2="下载子程序中...3/7"))', z2:'', name:'Array_json',isjy:1},
{path:jsp+"res",http:jsu+'res.zip',z1:'print((text_hu2="下载图片中...4/7"))', z2:'', name:'res',isjy:1},
{path:jsp+"META-INF",http:jsu+'META-INF.zip',z1:'print((text_hu2="下载版本注释中...5/7"))', z2:'', name:'META-INF',isjy:1},
{path:jsp+"assets/music",http:jsu+'music.zip',z1:'print((text_hu2="下载音频文件中...6/7"))', z2:'', name:'music',isjy:1},
{path:sd,http:jsu+'js.zip',z1:'print((text_hu2="下载最新版js中...7/7"))', z2:'print((text_hu2="js下载完成,在内存卡根目录"))', name:'js',isjy:1}
];
dowdir=[jsp+'/assets/back', jsp+'/assets/JavaScript', jsp+'/assets/json/Array_json', jsp+'/assets/JZ', jsp+'/assets/music',jsp+'/res',jsp+'/META-INF',jsp+'/GUI'];
function newhhh(){
var f=dowdir.length;
for(var i=0;i<f;i++){
if(!new java.io.File(dowdir[i]).exists()){
new java.io.File(dowdir[i]).mkdirs()}}
}
newhhh();
var JAVA={},JAVAC={};
JAVA.F=java.io.File;
JAVA.FIS=java.io.FileInputStream;
JAVA.FOS=java.io.FileOutputStream;
JAVA.IOE=java.io.IOException;
JAVA.IS=java.io.InputStream;
JAVA.OS=java.io.OutputStream;
JAVA.ZF=java.util.zip.ZipFile;
JAVA.ZE=java.util.zip.ZipEntry;
JAVA.ZOS=java.util.zip.ZipOutputStream;
JAVA.ZIS=java.util.zip.ZipInputStream;
var isdow=0;
function jjyy2(a,b,c){
new java.lang.Thread(
new java.lang.Runnable({
run:function(){
try{
var file=new JAVA.F(a);
var OutFile=null;
var zipFile=new JAVA.ZF(file);
var zipInput=new JAVA.ZIS(new JAVA.FIS(file));
var entity=null;
var output=null;
while((entry = zipInput.getNextEntry())!=null){
outFile=new JAVA.F(b+'/'+entry.getName());
if(!outFile.getParentFile().exists()){
outFile.getParentFile().mkdirs();
}
if(!outFile.exists()){
outFile.createNewFile()} 
input = zipFile.getInputStream(entry); output = new JAVA.FOS(outFile);
var temp=0;
while((temp = input.read())!=-1){
output.write(temp);
}
input.close();output.close();
saveData(c+'v',1);
}}catch(z){eeer+='\n'+(text_hu3='后台解压错误:\n'+z)}
}
})).start()
}
function iswcall(){
var i=readData;
if(i('jsonv')==1&& i('backv')==1&& i('jsv')==1&& i('resv')==1&& i('musicv')==1&& i('META-INFv')==1){
return 1
}}
function play_dow(){
if(isdow<7){
JAVAC.XF();
}else if(isdow==7){
print((text_hu2='开始检查是否全部完成'));
var i=readData;
if(iswcall()==1){
print((text_hu2='所有文件已成功安装'));
}else{
print('有未完成的下载,开始重新检测');
isdow=0;play_dow();
}}
}
JAVAC.XF=function (){
new java.lang.Thread(
new java.lang.Runnable({run: function(){
try{
function jjyy(a,b,c){
try{
var file=new JAVA.F(a);
var OutFile=null;
var zipFile=new JAVA.ZF(file);
var zipInput=new JAVA.ZIS(new JAVA.FIS(file));
var entity=null;
var output=null;
while((entry = zipInput.getNextEntry())!=null){
outFile=new JAVA.F(b+'/'+entry.getName());
if(!outFile.getParentFile().exists()){
outFile.getParentFile().mkdirs();
}
if(!outFile.exists()){
outFile.createNewFile()} 
input = zipFile.getInputStream(entry); output = new JAVA.FOS(outFile);
var temp=0;
while((temp = input.read())!=-1){
output.write(temp);
}saveData(c+'v',1);
input.close();output.close();
}}catch(z){eeer+='\n'+(text_hu3='解压错误:\n'+z)}
}
var ty= dowfile[isdow];
eval(ty.z1);
if(readData(ty.name)==1){
print((text_hu1='检测之前下载过了,无需重下'));
if(readData(ty.name+'v')!=1){
print((text_h1='检测下载后未成功解压,重新解压'));
if(ty.isjy==1){jjyy(ty.path+'/'+ty.name+'.zip',ty.path,ty.name)}else{jjyy1(ty.path+'/'+ty.name+'.zip',ty.path,ty.name)}
}}else{
print((text_hu1='获取文件动态链接中'))
var ccc= sd+'/.Space.data';
var vF= new java.io.File(ccc);
if(vF.exists()){vF.delete()}
vF.createNewFile();
var sVOr= new java.io.FileOutputStream(vF);
var dd= android.net.http.AndroidHttpClient.newInstance('kk').execute(new org.apache.http.client.methods.HttpGet(ty.http)).getEntity().writeTo(sVOr);sVOr.close();
var ak=String(readtxt(ccc));
if(ak!=''){
var ad=ak.split('地址: <a href="')[1];
var url2=ad.split('">点此下载')[0];
print((text_hu1='获取成功开始下载\n链接:'+url2));
var versionFile = new java.io.File(ty.path+'/'+ty.name+'.zip');
versionFile.createNewFile();
var sVO= new java.io.FileOutputStream(versionFile);
var download = android.net.http.AndroidHttpClient.newInstance('oo').execute(new org.apache.http.client.methods.HttpGet(url2)).getEntity().writeTo(sVO);sVO.close();
saveData(ty.name,1);
if(ty.isjy==1){
print((text_hu1='下载完成,开始解压缩'))
jjyy(ty.path+'/'+ty.name+'.zip',ty.path,ty.name);
}else{
print((text_hu1='文件过大,开始送进后台解压'));
jjyy2(ty.path+'/'+ty.name+'.zip',ty.path,ty.name);
}
print((text_hu1='完成,检测是否已全部下载完成...'));
eval(ty.z2);
}else{print((text_hu1='获取链接失败\n开始重连'));isdow-=1}
}
isdow++;play_dow();
}catch(z){err((text_hu3='错误-可能原因:\n1.连接超时\n2.无网络或其他\nJava错误代码:'+z))}
}})).start()
}
function dip2px(c,d){
return Math.ceil(d*c.getResources().getDisplayMetrics().density)}
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
function readtxt(re){
if(new java.io.File(re).exists()){
var bu = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(re),'GBK'));
var data= '';
var vv= bu.readLine();
while(vv!='END'&&vv!=null){
data+= vv;
vv= bu.readLine()
}return String(data)
}else{return ''}}
function err(a){
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
var dialog=new android.app.AlertDialog.Builder(ctx);
dialog.setIcon(android.R.drawable.stat_notify_error);
dialog.setTitle("提示");
dialog.setMessage(String(a));
dialog.setPositiveButton("OK",new android.content.DialogInterface.OnClickListener(){onClick:function(dia,w){}});dialog.show()
}})}

function guiuu(){
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
bt_n.setText(android.text.Html.fromHtml(text_hu1+'\n'+text_hu2));
bt_n.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(70,200,200,200)));
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
bt_n=new android.widget.PopupWindow(layout,420,220); 
bt_n.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, tpopx, tpopy);
}catch(rr){rr("错误："+err);
}}}))
}
var tpopx=0,tpopy=0; 
var bt_n=null,n=null;
var dp,n;
var allofgytype=[0,0,0,0,0];
var l=1;
var jg=0;
function updata1(){
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){try{
if(n!=null){
n.setText(android.text.Html.fromHtml("<font color=#0af>"+text_hu2+"</font><br><fiont color=#a7b863>"+text_hu1+"</font><br><font color=#f00>"+text_hu3+"</font>"))
}
}catch(er){print("错误:"+er);}
}}))
}
var fty=new java.lang.Thread(
new java.lang.Runnable({
run: function(){
while(1){
updata1();
fty.sleep(500)
}}}))
fty.start()
var isfc=0;//开关
ctx.runOnUiThread(new java.lang.Runnable({ 
run: function(){
try{
var layout=new android.widget.          LinearLayout(ctx);
var button=new android.widget.Button(ctx);
button.setText('覅');
button.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(v){ 
cd_as();
}});
layout.addView(button);
tiaotiaoGUI=new android.widget.PopupWindow(layout, dip2px(ctx,85), dip2px(ctx,45));
tiaotiaoGUI.setContentView(layout);
tiaotiaoGUI.setWidth(100);
tiaotiaoGUI.setHeight(100);
tiaotiaoGUI.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT | android.view.Gravity.TOP,1,60);
}catch(err){print("无法显示"+err)}
}}))
function cd_as(){
ctx.runOnUiThread(new java.lang.Runnable({ 
run: function(){
var dialog=new android.app.AlertDialog.Builder(ctx)
dialog.setTitle("Space_70701助手")
dialog.setPositiveButton("取消",new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
}})
dialog.setItems(new java.lang.String("检测状态,开始下载,清除下载记录,查看云端详情,帮助").split(","),new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
switch(w){
case 0:
break;
case 1:play_dow();
if(isfc==0){guiuu();isfc=1}
break;
case 2:
var n=saveData;
n('res',0); n('back',0); n('json',0); n('Array_json',0); n('js',0); n('META-INF',0);
break;
case 3:
break;
case 4:bz()
break;
}
}})
dialog.show()
}}))
}
function bz(){
ctx.runOnUiThread(new java.lang.Runnable({ 
run: function(){
var dialog=new android.app.AlertDialog.Builder(ctx)
dialog.setTitle("帮助信息")
dialog.setMessage("    点击按钮弹出对话框\n    点击开始下载\n    全部下载并解压缩后安装js\n    下载完成后js会在内存卡根目录\n    如果下载或安装中断,重新开始下载,如果下载过的将跳过\n    如果js无法正常运行,请点击清除下载记录重新下载！")
dialog.setPositiveButton("知道了",new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
}})
dialog.show()
}}))}
