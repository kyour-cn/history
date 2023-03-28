<?php //一键对接API接口程序
header("Access-Control-Allow-Origin:*");
/*星号表示所有的域都可以接受，*/
header("Access-Control-Allow-Methods:GET,POST");
@$ym = $_SERVER["QUERY_STRING"];
$yms = explode("&", $ym);
$ym = $yms[0];
$quest=$_REQUEST;
include './php/main.php';
$er=array(
    "msg"=>"请求未响应",//文字代码
    "code"=>"0",//返回数字代码
    "name"=>"",//名称
    "umoney"=>"",//用户余额
    "tmoney"=>"",//商品价格
    "no"=>"",//订单号
    "zt"=>""
);
$ggc="json";
if(isset($_REQUEST['run']))$ggc=$_REQUEST['run'];
function endc(){
    global $er;global $ggc;
    switch ($ggc)
    {
        case "text":
            die($er["msg"]);
        case "json":
            die(json_encode($er));
        //   die("{code:\"{$er["code"]}\",msg:\"{$er["msg"]}\",tmoney:\"{$er["tmoney"]}\",umoney:\"{$er["umoney"]}\",no:\"{$er["no"]}\",name:\"{$er["name"]}\"}");
        case "msg":
            die($er["msg"]);
        default:
            die($er["code"]);
    }
}
function getKey(){
    global $er;
    $key=trims($_REQUEST['key']);
    $user=query("SELECT * FROM user where apikey=?",array($key))->fetch();
    if($user['apikey']!=$key or empty($key)){
        $er['msg']="秘钥不正确或不存在";
        return false;
    }
    return $user;
}
//处理请求
switch($quest['mov']){
    case "getclass":
        $user = getKey();
        if(!$user){
            endc();
        }
        $class = $pdo->query("SELECT Id,cid,name FROM class where zt = 1 ")->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($class);
        exit;
        break;
    case "gettools":
        $user = getKey();
        if(!$user){
            endc();
        }
        $class = query("SELECT cid FROM class where Id = ?",[$quest['cid']])->fetch(PDO::FETCH_ASSOC);
        $data = query("SELECT Id,tid,name,money FROM tools where zt = 1 and class = ?",[$class['cid']])->fetchAll(PDO::FETCH_ASSOC);
        foreach ($data as $k=>$v) {
            $data[$k]['money'] = countMoney($user['uid'],$v['tid'],$sid);
        }
        echo json_encode($data);
        exit;
        break;
    case 'verify_key':
        $user = getKey();
        if(!$user){
            $er['msg']="秘钥不正确或不存在";
        }else{
            $er['code']=200;
            $er['msg']="密钥验证成功";
        }
        endc();

        break;
    case 'djclass':
        $user = getKey();
        if(!$user){
            endc();
        }
        $issite?$conf['siteuid']:0;
        $class = query("SELECT cid,name FROM class where Id = ?",[$quest['cid']])->fetch(PDO::FETCH_ASSOC);
        $tool_list = query("SELECT Id,name,tid,inputs,text,maxnum FROM tools where zt = 1 and class = ?",[$class['cid']])->fetchAll(PDO::FETCH_ASSOC);
        foreach ($tool_list as $k=>$v) {
            $tool_list[$k]['money'] = countMoney($user['uid'],$v['tid'],$sid);
        }

        $res['class'] = $class['name'];
        $res['status'] = 1;
        $res['data'] = $tool_list;
        $res['api_host'] = DJ_API_MAIN;
        echo json_encode($res);
        exit;
        break;

    default:
        $er['msg']="Unicode";
        endc();
        break;
}