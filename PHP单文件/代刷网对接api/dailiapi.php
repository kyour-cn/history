<?php
    /**
     * 该工具为专用对接工具
     * 请放置在代刷系统主目录 （config.php 的位置）
     * 然后再访问此文件按照提示进行操作
     */
    //初始化
    session_start();
    $get = $_GET;
    $script = '';

    //函数
    function getpdo($dbconfig){
        try{
        	$dsn = 'mysql:host='.$dbconfig["host"].';dbname='.$dbconfig["dbname"].';port='.$dbconfig["port"];
        	$pdo = new PDO($dsn, $dbconfig["user"], $dbconfig["pwd"]);
        	$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        	$pdo->query("SET NAMES utf8");
        }catch (PDOException $e) {
            return false;
        }
    	return $pdo;
    }
    function cp($c,$b="",$h=false){//curl post
        $header = array(
         "Content-Type:application/x-www-form-urlencoded;",
         "Accept-Charset:utf-8;",
         'User-Agent:Mozilla/5.0 (Windows NT 10.0; WOW64; rv:61.0) Gecko/20100101 Firefox/61.0;');
        $d = curl_init();
        $e = curl_setopt($d, CURLOPT_URL, $c);
        curl_setopt($d, CURLOPT_SSL_VERIFYHOST, FALSE);
        curl_setopt($d, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($d, CURLOPT_HEADER, 0);
        curl_setopt($d, CURLOPT_TIMEOUT_MS, 5000);
        curl_setopt($d, CURLOPT_POST, 0);
        curl_setopt($d, CURLOPT_POSTFIELDS, $b);
        curl_setopt($d, CURLOPT_RETURNTRANSFER, 1);
        if($h!=false) curl_setopt($d, CURLOPT_HTTPHEADER, $a);
        $f = curl_exec($d);
        if ($f === false) {
            if (curl_errno($d) == CURLE_OPERATION_TIMEDOUT) {
                return "";
            }
        }curl_close($d);
        if ($f == NULL) {
            return "";
        }return $f;
    }
    
    function query($s,$a=array()){
        global $ds_db;
        try{
        $p=$ds_db->prepare($s);
        $p->execute($a);
        } catch (PDOException $e) {
            exit("数据操作失败:".$e->getMessage());
        }
        return $p;
    }

    function countTc($mon,$str){
		$ex = explode('%',$str);
        $con = count($ex);
        if($con <2){
            if(is_numeric($str)){
                return $mon+$str;
            }else{
                exit('必须为数值');
            }
        }else{
            if(is_numeric($ex[0])){
                $tc = ($ex[0]/100) * $mon;
                return $mon + $tc;
            }else{
                exit('百分号前必须为数值');
            }
        }
    }

    //权限及验证
    $verify = array('read' => 1,'path' => 1,'db' => 1);
    $isok = true;
    $ds_conf_file = 'config.php';

    if(file_exists($ds_conf_file)){
        if(!is_readable($ds_conf_file)){
            $isok = false;
            $verify['read'] = 0;
        }else{
            include($ds_conf_file);
        }
    }else{
        $isok = false;
        $verify['path'] = 0;
    }
    $ds_db = getpdo($dbconfig);
    if(!$ds_db || !$isok){
        $isok = false;
        $verify['db'] = 0;

    }else{
        //数据库操作
        $post = $_POST;

        if(!empty($get['t'])){
            switch($get['t']){
                case 'login':
                    $user_dat = $ds_db->query("SELECT * FROM shua_config WHERE k IN('admin_user','admin_pwd')")->fetchAll(PDO::FETCH_ASSOC);
                    if(count($user_dat) == 2){
                        $user_u = $user_dat[0]['k'] == 'admin_user' ? $user_dat[0]['v'] : $user_dat[1]['v'];
                        $user_p = $user_dat[0]['k'] == 'admin_pwd' ? $user_dat[0]['v'] : $user_dat[1]['v'];
                        if($post['user'] == $user_u && $post['pwd'] == $user_p){
                            $_SESSION['isadmin'] = 1;
                            $get['p'] = 'dj';
                        }else{
                            exit('<script>alert("账号或密码不正确！");history.back(-1);</script>');
                        }
                    }
                    break;
            }
            if($_SESSION['isadmin'] != 1)exit('你还未登陆管理员账号');
            switch($get['t']){

                case 'out':
                    $_SESSION = [];
                    break;
                case 'saveApi':
                    $_SESSION['api_url'] = $post['url'];
                    $_SESSION['api_key'] = $post['key'];
                    echo 1;
                    exit;
                    break;
                case 'settc':
                    $_SESSION['tc_1'] = $get['m1'];
                    $_SESSION['tc_2'] = $get['m2'];
                    $_SESSION['tc_3'] = $get['m3'];
                    break;
                case 'djclass':
                    $url = $_SESSION['api_url'].'?key='.$_SESSION['api_key'].'&mov=djclass&cid='.$get['cid'];
                    $str = cp($url);
                    $ret = json_decode($str,true);
                    if($ret['status'] != 1) exit('0');
                    
                    if(empty($ret['api_host'])){
                        $djurl = str_replace('dj.php','api.php',$_SESSION['api_url']);
                    }else{
                        $djurl = $ret['api_host'];
                    }

                    $apiurl = $djurl.'?order&key='.$_SESSION['api_key']."&";

                    query("INSERT INTO `shua_class` (`name`, `active`) VALUES (?,?);",[$ret['class'],1]);
                    $cid = query("SELECT max(cid) FROM shua_class")->fetch(PDO::FETCH_NUM)[0];
                    $addcount = 1;
                    $get_tc1 = empty($_SESSION['tc_1'])?'1.2':$_SESSION['tc_1'];
                    $get_tc2 = empty($_SESSION['tc_2'])?'0.8':$_SESSION['tc_2'];
                    $get_tc3 = empty($_SESSION['tc_3'])?'0.3':$_SESSION['tc_3'];
                    foreach ($ret['data'] as $v) {
                        $str = $v['inputs'];
                        $ins = explode('|',$str);
                        $n = count($ins);
                        $instr = '[input]';
                        if($n>1) $instr.='|[input2]';
                        if($n>2) $instr.='|[input3]';
                        if($n>3) $instr.='|[input4]';
                        $curl = $apiurl."tid=".$v['tid']."&input={$instr}&num=[num]";
                        $inputs = '';
                        $input = empty($ins[0])?'下单账号':$ins[0];
                        if($n <> 1){
                            $inputs= substr($str,strpos($str,'|')+1);
                        }
                        $multi = $v['maxnum']<2?1:0;
                        $mm1 = countTc($v['money'],$get_tc1);
                        $mm2 = countTc($v['money'],$get_tc2);
                        $mm3 = countTc($v['money'],$get_tc3);
                        // exit($v['money'].'-'.$get_tc1.'/'.$get_tc2.'/'.$get_tc3);
                        $sql = "INSERT INTO `shua_tools` (`cid`,`name`,`price`,`cost`,`cost2`,`input`,`inputs`,`alert`,`is_curl`,`curl`,`active`,`sort`,`multi`,`repeat`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
                        query($sql,[$cid,$v['name'],$mm1,$mm2,$mm3,$input,$inputs,$v['text'],1,$curl,1,$addcount,$multi,1]);
                        $addcount+=1;
                    }
                    echo $addcount;
                    exit;
                    break;
            }
        }

        $data = $ds_db->query("SELECT name FROM shua_class")->fetch();

    }

?><!DOCTYPE html>
<html>
    <head>
        <title>科佑儿代刷一键对接</title>
        <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
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
                  <a class="navbar-brand" href="http://www.kyour.vip/">KEY云</a>
                </div>

                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6">
                  <ul class="nav navbar-nav">
                    <li id="index"><a href="javascript:openUrl('?p=index');">主页</a></li>
                    <li id="dj"><a href="javascript:openUrl('?p=dj');">对接</a></li>
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
?>
                        <?php if(empty($_SESSION['api_url'])){ ?>
                        <div class="input-box">
							<div class="input-group">
								<span class="input-group-addon" id="basic-addon1">站点</span>
								<input type="text" id="site_url" class="form-control" placeholder="结尾不要/ 如 http://www.abc.com" value="http://daili.kyour.vip" aria-describedby="basic-addon1"><!--http://daili.kyour.vip-->
								<span class="input-group-btn">
								    <!--<button onclick="goDj()" class="btn btn-default" type="button">推荐站点</button>-->
							    </span>
							</div>
							<div class="input-group">
							    <span class="input-group-addon" id="basic-addon1">密钥</span>
							    <input type="text" id="site_key" class="form-control" placeholder="请填写对接站点的用户密钥(KEY)"><!--JkrXYQx6rOy5DaVpIRGLKrSnXjsxsKWb-->
							    <span class="input-group-btn">
								    <button onclick="goDj()" class="btn btn-info" type="button">开始</button>
							    </span>
							</div>
						</div>
<?php       }else{
                $script .= 'initClass();'."\n";
?>
                        <div id="dj_mian" ><!--style="visibility:hidden;display:none;"-->
                            <div class="row">
                                <div class="col-md-4 col-sm-4 col-lg-4">
                                    <div class="panel panel-default">
                                        <div class="panel-heading">分类列表<?php if($_SESSION['isadmin'] == 1)echo '<a href="?t=out" style="float: right;">注销</a>'; ?></div>
                                        <div class="panel-body">
                                            <table class="table">
                                                <thead>
                                                  <tr>
                                                    <th>分类ID</th>
                                                    <th>分类名称</th>
                                                  </tr>
                                                </thead>
                                                <tbody id="class_body">
                                                  <tr>
                                                    <th scope="row"></th>
                                                    <td>获取中。。。</td>
                                                  </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-8 col-sm-8 col-lg-8">
                                    <div class="panel panel-default">
                                        <div class="panel-heading">商品列表-分类：<span id="class_name">未选择</span>
                                            <button class="btn btn-xs btn-info" style="float: right;margin-left:6px;" onclick="djClass()">对接全部</button>
                                            <button class="btn btn-xs btn-info" style="float: right;" data-toggle="modal" data-target="#myModal">设置提成</button>
                                        </div>
                                        <div class="panel-body">
                                            <table class="table">
                                                <thead>
                                                  <tr>
                                                    <th>商品ID</th>
                                                    <th>商品名称</th>
                                                    <th>商品价格</th>
                                                    <th>操作</th>
                                                  </tr>
                                                </thead>
                                                <tbody id="tools_body">
                                                  <tr>
                                                    <th scope="row"></th>
                                                    <td class="red">点击分类名获取商品列表</td>
                                                    <td></td>
                                                  </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Modal -->
                            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                              <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    <h4 class="modal-title" id="myModalLabel">设置用户提成</h4>
                                  </div>
                                  &nbsp;&nbsp;&nbsp;&nbsp;只需设置提成金额，系统会自动将您的拿货价加上提成设置为最终商品金额！<br>
                                  &nbsp;&nbsp;&nbsp;&nbsp;提成金额支持百分比，也就是在末尾加上 % 符号，最终金额是提成金额+(提成金额 X 百分比)
                                  <form id="settc">
                                  <div class="modal-body">
                                    <div class="input-group">
                                      <span class="input-group-addon" id="basic-addon1">普通用户</span>
                                      <input type="text" name="m1" class="form-control" placeholder="填写提成金额或百分比" aria-describedby="basic-addon1">
                                    </div><br>
                                    <div class="input-group">
                                      <span class="input-group-addon" id="basic-addon1">二级分站</span>
                                      <input type="text" name="m2" class="form-control" placeholder="填写提成金额或百分比" aria-describedby="basic-addon1">
                                    </div><br>
                                    <div class="input-group">
                                      <span class="input-group-addon" id="basic-addon1">一级主站</span>
                                      <input type="text" name="m3" class="form-control" placeholder="填写提成金额或百分比" aria-describedby="basic-addon1">
                                    </div>
                                  </div>
                                  </form>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                                    <button type="button" onclick="setTc()" class="btn btn-primary">保存</button>
                                  </div>
                                </div>
                              </div>
                            </div>

<?php
			}
        }else{//未登录站长
?>
                            <h4 class="red">登录账号（代刷站长）</h4>
                            <p>请输入代刷管理员账号，以确认站长身份！</p>
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
                  <div class="panel-heading">关于对接工具</span></div>
                  <div class="panel-body">
                    <p>为了各位代刷客户能够更方便的对接<KEY代理平台>，我们就开发了这样一个程序！</p>
                    <p>本工具完全开源，没有任何后门，没有任何安全隐患！</p>
                    <p>嗯，就这样了。合作愉快！</p>
                  </div>
                </div>
<?php
        break;
    default:
?>
                <div class="panel panel-default">
                  <div class="panel-heading">欢迎使用&nbsp;<span class="red">科佑儿api对接工具</span></div>
                  <div class="panel-body">
                    <p>本工具为科佑儿下单系统彩虹代刷网对接工具!</p>
                    <p>本工具需要具备当前目录可写权限，并位于代刷网程序主目录才能正常工作！</p>
                    <p><span class="orang">#文件位置：<span><?php
                        echo $verify['path']?'<span class="green">正确</span>':'<span class="red">错误：请将此文件放在代刷程序主目录(config.php的位置)</span>';
                    ?></p>
                    <p><span class="orang">#文件权限：<span><?php
                        echo $verify['path']?'<span class="green">正常</span>':'<span class="red">错误：文件不存在或没有读取权限</span>';
                    ?></p>
                    <p><span class="orang">#数据库：<span><?php
                        echo $verify['db']?'<span class="green">连接成功</span>':'<span class="red">数据库连接失败！</span>';
                    ?></p>
                    <button type="button" onclick="openUrl('?p=dj')" class="btn btn-info" aria-label="Left Align">
                        开始对接
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

    var api_url = "<?php echo $_SESSION['api_url'] ?>";
    var api_key = "<?php echo $_SESSION['api_key'] ?>";

    var this_cid,this_cname;


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

    function goDj(){

        var url = $("#site_url").val();
        var key = $("#site_key").val();

        var api_url = url+'/dj.php';

        $get(api_url+'?mov=verify_key&key='+key,
            function(ret){
                var json = toJSON(ret);
                if(json.code == null){
                    alert('这不是一个正确的接口！')
                }else if(json.code == 200){
                    $.post("?t=saveApi",{url:api_url,key:key},function(ret){
                        if(ret == '1'){
                            openUrl('?p=dj')
                        }else{
                            alert('服务器出错：360')
                        }
                    });
                    $("#dj_mian").attr("style",'');
                }else{
                    alert(json.msg)
                }
            }
        );
    }

    function initClass(){
        $get(api_url+'?mov=getclass&key='+api_key,function(ret){
            var json = JSON.parse(ret);
            var body = $("#class_body");
            body.html('');
            $.each(json,function(k,v){
                var html = '<tr id="'+v.Id+'" onclick="getTools(\''+v.Id+'\')">'+
                        '<th scope="row">'+v.cid+'</th>'+
                        '<td class="n">'+v.name+'</td>'+
                    '</tr>';
                body.append(html);
            });
        });
    }

    function getTools(cid){
        if(this_cid == cid)return;
        var cel = $('#'+cid);
        cel.attr('class','opt-bg');
        $('#'+this_cid).attr('class','');
        this_cname = cel.find(".n").text();
        $('#class_name').text(this_cname);
        this_cid = cid;
        $get(api_url+'?mov=gettools&key='+api_key+'&cid='+cid,function(ret){
            var json = JSON.parse(ret);
            var body = $("#tools_body");
            body.html('');
            $.each(json,function(k,v){
                var html = '<tr>'+
                        '<th scope="row">'+v.tid+'</th>'+
                        '<td>'+v.name+'</td>'+
                        '<td>'+v.money+'</td>'+
                        '<td><a class="btn btn-xs btn-info">对接</a></td>'+
                    '</tr>';
                body.append(html);
            });
        });
    }

    function djClass(){
        if(this_cid == null){
            alert('请先选择分类');
            return;
        }
        if(confirm('确认对接('+this_cname+')的全部商品?')){
            $get('?t=djclass&key='+api_key+'&cid='+this_cid,function(ret){
                // openUrl(ret)
                alert('对接成功：添加了'+(ret-1)+'个商品')
            })
        }
    }

    function setTc(){
        var data = $('#settc').serialize();
        $get('?t=settc&'+data,function(ret){
            alert('设置成功')
        })
    }

    $(document).ready(function(){
        $("#<?php echo $get['p']; ?>").attr("class","active");
    })

    <?php echo $script ;?>

    </script>
</html>