<?php

$conf = [
'db_host' => "localhost",#数据库地址
'db_user' => "yhdb",#数据库用户名
'db_pass' => "yhdb123",#数据库密码
'db_name' => "yhdb",#数据库名称
'db_port' => 3600,#数据库端口
'admin' => 'admin',#管理员账号
'pass' => '123456'#管理员密码
];

function newpdo($a=null){
    global $conf;
	$dsn = 'mysql:host='.$conf["db_host"].';dbname='.$conf["db_name"].';port='.$conf["db_port"];
	try{
    	$pdo = new PDO($dsn, $conf["db_user"], $conf["db_pass"]);
    	$pdo->query("SET NAMES utf8");
    	if($a==null)
    	$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);//ERRMODE_EXCEPTION ERRMODE_WARNING ERRMODE_SILENT
    }catch(PDOException $e){
        exit("数据库连接失败".$e->getMessage());
    }
	return $pdo;
}
function query($s,$a=array()){
    global $pdo;
    // try{
    $p=$pdo->prepare($s);
    $p->execute($a);
    // } catch (PDOException $e) {
    //     exit("数据操作失败:".$e->getMessage());
    // }
    return $p;
}

//初始化程序
$pdo = newpdo();

function toDate($int = 0,$str = 0){
    $int = empty($int)?time():$int;
    $str = empty($str)?'Y-m-d H:i:s':$str;
    return date($str,$int);
}

$request = $_REQUEST;
$get = $_GET;

$uid = $request['uid'];
$time = time();

if(!empty($get['api'])){
    switch($get['api']){
        case 'add':
            $res = query("SELECT * FROM user where uid=?",array($uid))->fetch(PDO::FETCH_ASSOC);
            if($res){
                exit;
            }
            query("INSERT INTO user(uid) VALUES (?)",array($uid));
            exit('1');
            break;
        case 'time':
            $data = query("SELECT * FROM user where uid=?",array($uid))->fetch(PDO::FETCH_ASSOC);
            if($data){
                if($data['time'] < ($time - 60)){
                    query("UPDATE user SET time=? where uid=?",array($time,$uid));
                    exit('-10');
                }else{
                    exit(''.toDate($data['time'],'i'));
                }
            }else{
                exit('-1');
            }
            break;
        case 'xt':
                query("UPDATE user SET xt=? where uid=?",array($time,$uid));
                exit('1');
            break;
        case 'page':
                query("UPDATE user SET page=? where uid=?",array($get['page'],$uid));
                exit('1');
            break;
        case 'countopen':
            $xttime = $time - 240;
            $count = query("SELECT count(id) FROM user where page='正在游戏'")->fetch(PDO::FETCH_NUM)[0];
            $count1 = query("SELECT count(id) FROM user where xt>{$xttime}")->fetch(PDO::FETCH_NUM)[0];
            exit($count1.','.$count);
            break;
        case 'fx':
            if(empty($get['fx'])){
                $data = query("SELECT * FROM user where uid=?",array($uid))->fetch(PDO::FETCH_ASSOC);
                exit(''.$data['fx']);
            }
            query("UPDATE user SET fx=? where uid=?",array($get['fx'],$uid));
            exit('1');
            break;
        case 'fs':
            if(empty($get['fs'])){
                $data = query("SELECT * FROM user where uid=?",array($uid))->fetch(PDO::FETCH_ASSOC);
                exit(''.$data['fs']);
            }
            query("UPDATE user SET isfs=? where uid=?",array($get['fs'],$uid));
            exit('1');
            break;
        case 'time':
            exit('www');
            break;

    }
}

if(empty($get['p']) && empty($get['t'])){
    exit;
}
session_start();

$post = $_POST;

switch($get['t']){
    case 'login':
        if($post['user'] == $conf['admin'] && $post['pwd'] == $conf['pass']){
            $_SESSION['isadmin'] = 1;
            exit('<script>alert("登录成功！");history.back(-1);</script>');
        }else{
            exit('<script>alert("账号或密码不正确！");history.back(-1);</script>');
        }
        break;
    case 'getdata':
        if($_SESSION['isadmin'] != 1){
            exit;
        }
        $data = query("SELECT * FROM user")->fetchAll(PDO::FETCH_ASSOC);
        $xttime = $time - 240;
        $count = query("SELECT count(id) FROM user where page='正在游戏'")->fetch(PDO::FETCH_NUM)[0];
        $count1 = query("SELECT count(id) FROM user where xt>{$xttime}")->fetch(PDO::FETCH_NUM)[0];
        $res['data'] = $data;
        $res['count'] = $count;
        $res['count1'] = $count1;
        exit(json_encode($res));
        break;
    case 'allopen':
        query("UPDATE user SET time=?",array($time));
        exit('修改成功');
        break;
    case 'ghfx':
        query("UPDATE user SET fx=?",array($get['fx']));
        exit('修改成功');
        break;
    case 'fs':
        query("UPDATE user SET isfs=1 where id=?",array($get['id']));
        exit('修改成功');
        break;
    case 'tq':
        query("UPDATE user SET isfs=2 where id=?",array($get['id']));
        exit('修改成功');
        break;
    case 'ks':
        query("UPDATE user SET isks=1 where id=?",array($get['id']));
        exit('修改成功');
        break;
    case 'tz':
        query("UPDATE user SET isks=0 where id=?",array($get['id']));
        exit('修改成功');
        break;
}
?><!DOCTYPE html>
<html>
    <head>
        <title>科佑儿代刷一键对接</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
        <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
        <style>
            #content{
                padding: 6px;
            }
            #dj_mian{
                padding:10px 20px;
            }
            .red{
                color:red;
            }
            .blue{
                color: blue;
            }
            .green{
                color:green;
            }
            .yellow{
                color：yellow;
            }
            .orang{
                color:#FF9933;
            }
            .input-box div{
                padding: 8px;
            }
            .opt-bg{
                background-color: #ddd;
            }
        </style>
    </head>
    <body>

        <div class="container">
            <nav class="navbar navbar-inverse">

                <div class="navbar-header">
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-6" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                  <a class="navbar-brand" href="http://www.kyour.vip/">KEY云 - YH1.0</a>
                </div>

                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6">
                  <ul class="nav navbar-nav">
                    <li id="index"><a href="javascript:openUrl('?p=index');">主页</a></li>
                    <li id="dj"><a href="javascript:openUrl('?p=dj');">后台</a></li>
                    <li id="about"><a href="javascript:openUrl('?p=about');">关于</a></li>
                  </ul>
                </div>
            </nav>

            <div id="content">

<?php
switch($get['p']){
    case 'dj':
?>
                <!--div class="panel panel-default">
                    <div class="panel-heading">站点对接</div>
                    <div class="panel-body"-->
<?php
        if($_SESSION['isadmin'] == 1){
            $script = '    setInterval("getData()","2000");';
            $xttime = $time - 240;
            $count = query("SELECT count(id) FROM user where page='正在游戏'")->fetch(PDO::FETCH_NUM)[0];
            $count1 = query("SELECT count(id) FROM user where xt>{$xttime}")->fetch(PDO::FETCH_NUM)[0];
?>
                        <div id="dj_mian" ><!--style="visibility:hidden;display:none;"-->

                                    <div class="panel panel-default">
                                        <div class="panel-heading">设备列表
                                            <button class="btn btn-xs btn-info" style="float: right;margin-left: 5px;" onclick="getData()">刷新数据</button>
                                            <button class="btn btn-xs btn-info" style="float: right;margin-left: 5px;" onclick="allopen()">全部开始</button>
                                            <button class="btn btn-xs btn-info" style="float: right;" onclick="ghfx()">更换方向</button>
                                        </div>
                                        <div class="panel-body">
                                            --当前在线<span id="count1"><?php echo $count1.'</span>人,“正在游戏”界面的有<span id="count">'.$count.'</span>人'; ?>
                                            <table class="table">
                                                <thead>
                                                  <tr>
                                                    <th>设备编号</th>
                                                    <th>当前页面</th>
                                                    <th>方向</th>
                                                    <th>是否分身</th>
                                                    <th>是否开始</th>
                                                    <th>操作</th>
                                                  </tr>
                                                </thead>
                                                <tbody id="tools_body">
                                                  <tr>
                                                    <th scope="row"></th>
                                                    <td class="red">加载中...</td></td>
                                                    <td></td>
                                                  </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
<?php
        }else{//未登录站长
?>
                            <h4 class="red">登录账号</h4>
                            <p>请输入管理员账号，以确认站长身份！</p>
                            <form action="?t=login" method="post">
                                <div class="input-box">
                                    <div class="input-group">
                                        <span class="input-group-addon" id="basic-addon1">账号</span>
                                        <input type="text" name="user" class="form-control" placeholder="代刷管理员账号" aria-describedby="basic-addon1">
                                    </div>
                                    <div class="input-group">
                                        <span class="input-group-addon" id="basic-addon1">密码</span>
                                      <input type="text" name="pwd" id="djsite" class="form-control" placeholder="管理员密码">
                                      <span class="input-group-btn">
                                        <button class="btn btn-info" type="submit">登录</button>
                                      </span>
                                    </div>
                                </div>
                            </form>
<?php
        }
?>
                        </div>
                    <!--/div>
                </div-->
<?php
        break;
    case 'about':
?>
                <div class="panel panel-default">
                  <div class="panel-heading">关于API</span></div>
                  <div class="panel-body">
                    <p>XXXXXXXXXXXXX</p>
                    <p>本工具完全开源，没有任何后门，没有任何安全隐患！</p>
                    <p>嗯，就这样了。合作愉快！</p>
                  </div>
                </div>
<?php
        break;
    default:
?>
                <div class="panel panel-default">
                  <div class="panel-heading">欢迎使用&nbsp;<span class="red">科佑儿api</span></div>
                  <div class="panel-body">
                    <p>XXXXXXXXXXXXXXXXXXXX！</p>
                    
                    <button type="button" onclick="openUrl('?p=dj')" class="btn btn-info" aria-label="Left Align">
                        进入后台
                    </button>
                  </div>
                </div>
<?php
        break;
}

?>
            </div>
        </div>
    </body>
    <script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script>

    function openUrl(url){
        if(url == 0){
            location.reload();
            return;
        }
        window.location.href=url;//+'&key='+api_key;
    }
    function toJSON(j){
        return JSON.parse(j);
    }

    function $get(url,suc,er){
        var err = er;
        if(er == null){
            err = function(){
                alert("连接失败，请检查链接是否正确！");
            }
        }
        $.ajax({
            url: url,
            context: document.body,
            success: suc,
            error: err
        });
    }

    function getData(){
        $get('?t=getdata',function(ret){
            // alert(ret);
            var json = JSON.parse(ret);
            var body = $("#tools_body");
            body.html('');
            $('#count').text(json.count);
            $('#count1').text(json.count1);
            $.each(json.data,function(k,v){
                var html = '<tr onclick="getTools(\''+v.id+'\')">'+
                        '<th scope="row">'+v.uid+'</th>'+
                        '<td class="n">'+v.page+'</td>'+
                        '<td class="n">'+v.fx+'</td>'+
                        '<td class="n">'+v.isfs+'</td>'+
                        '<td class="n">'+v.isks+'</td>'+
                        '<td><a class="btn btn-xs btn-info" onclick="fs('+v.id+')">分身</a><a class="btn btn-xs btn-success" onclick="tq('+v.id+')">吐球</a><a class="btn btn-xs btn-info" onclick="ks('+v.id+')">开始</a><a class="btn btn-xs btn-success" onclick="tz('+v.id+')">停止</a></td>'+
                    '</tr>';
                body.append(html);
            });
        });
    }

    function allopen(){
        $get('?t=allopen',function(ret){
            alert(ret);
            // getData();
        })
    }
    function ghfx(){
        var fx = prompt("请输入方向","1");
        $get('?t=ghfx&fx='+fx,function(ret){
            alert(ret);
            // getData();
        })
    }
    
    function fs(id){
        $get('?t=fs&id='+id,function(ret){
            alert(ret);
            // getData();
        })
    }
    function tq(id){
        $get('?t=tq&id='+id,function(ret){
            alert(ret);
            // getData();
        })
    }
    function ks(id){
        $get('?t=ks&id='+id,function(ret){
            alert(ret);
            // getData();
        })
    }
    function tz(id){
        $get('?t=tz&id='+id,function(ret){
            alert(ret);
            // getData();
        })
    }

    $(document).ready(function(){
        $("#<?php echo $get['p']; ?>").attr("class","active");
    })

    <?php echo $script ;?>

    </script>