function plugins_sys(pdo, userid, postid, threadid)
{
	document.plugin_a_u.action = 'showthread.php?p=' + postid;
	document.plugin_a_u.userid.value = userid;
	document.plugin_a_u.postid.value = postid;
	document.plugin_a_u.threadid.value = threadid;
	document.plugin_a_u.pdo.value = pdo;
	document.plugin_a_u.submit();
}