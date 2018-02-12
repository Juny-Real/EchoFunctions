var info = {};
/*==*/info.date = "September 13th, 2017";
var bC = 0;
var uC = 0;
var i;
for (i = 0; i < Server.Members.length; i++) {
    if (ServerMembers[i].User.Bot === false) {uC++} else {bC++}
}
/*==*/info.users = uC.toString();
/*==*/info.bots = bC.toString();
var name = "";
for (i = 0;i < ServerMembers.length;i++) {
  if (ServerMembers[i].User.ID === ServerOwnerID) {
    name += ServerMembers[i].User.Username+"#"+ServerMembers[i].User.Discriminator;
  }
}
/*==*/info.owner = name;
/*==*/info.chan = ServerChannels.length.toString();
/*==*/info.role = ServerRoles.length.toString();

var users = Server.Presences
var online = 0;
var botonline = 0;
for (i=0;i < users.length;i++) {
    if (users[i].Status !== "offline" && users[i].Status !== "") {
        for (j=0;j < ServerMembers.length;j++) {
			if (ServerMembers[j].User.ID === users[i].User.ID) {
				if (ServerMembers[j].User.Bot === true) {
					botonline++;
				} else {
					online++;
				}
			}
		}
    }
}
/*==*/info.onlinehumans = online.toString();
/*==*/info.onlinebots = botonline.toString();

var iconUrl = 'https://cdn.discordapp.com/icons/'+Server.ID+'/'+Server.Icon+'.jpg';
var colorHex = ["#ff0000","#00ff00","#ffffff","#4286f4","#f45642","#262525","#e2d626","#87e226","#26e2c0","#2633e2","#8126e2"];
var random = Math.floor(Math.random() * (colorHex.length - 0 + 1) ) + 0;
var emb = {};
emb.author = {"name":Server.Name,"url":"https://discord.gg/dbAgErg","icon_url":iconUrl};
emb.thumbnail = {"url":iconUrl,"height":250,"width":250};
emb.fields = [
    {"name":"Server Name","value":Server.Name,"inline":true},
    {"name":"Server ID","value":Server.ID,"inline":true},
    {"name":"Server Owner","value":info.owner,"inline":true},
    {"name":"Server Region","value":Server.Region,"inline":true},
    {"name":"Server Humans","value":info.users,"inline":true},
    {"name":"Server Bots","value":info.bots,"inline":true},
    {"name":"Humans Online","value":info.onlinehumans,"inline":true},
    {"name":"Bots Online","value":info.onlinebots,"inline":true},
    {"name":"Server Channels","value":info.chan,"inline":true},
    {"name":"Server Roles","value":info.role,"inline":true}
];
emb.color = HTML2Int(colorHex[random]);
emb.footer = {"text":"Date created : "+info.date}
resp = emb;
