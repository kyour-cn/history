/*
作者:小小草_小小爱！
此功能从Space_70701.js中复制的！
日期:2016年1月18日
*/
ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({run: function(){
var layout=new android.widget.LinearLayout(ctx);
bb=new android.widget.Button(ctx);
bb.setText("W");
bb.setOnClickListener(new android.view.View.OnClickListener() { 
onClick: function(){
kw();
}});
layout.addView(bb,60,60);
butto=new android.widget.PopupWindow(layout); 
butto.setContentView(layout);
butto.setWidth(60);butto.setHeight(60);
butto.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM,20,220);
}}));

kws=0;
function kw(){
if(kws==0){for(var i=1;i<=255;i++){
Block.setDestroyTime(i,0.2)
};
kws=1;print("打开了快速挖掘")
}else{
for(var i=1;i<=255;i++){
Block.setDestroyTime(i,1)
}
kws=0;print("关闭了快速挖掘")
}
}