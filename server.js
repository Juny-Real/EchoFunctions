var info = {};
var bC = 0;
var uC = 0;
var name = "";
for (i = 0; i < Server.Members.length; i++) {
    if (ServerMembers[i].User.ID === ServerOwnerID) {
	name += ServerMembers[i].User.Username+"#"+ServerMembers[i].User.Discriminator;
    }

    if (ServerMembers[i].User.Bot === false) {
	uC++
    } else {
	bC++
    }
}
/*==*/info.users = uC.toString();
/*==*/info.bots = bC.toString();
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

function System() {
    this.getUnicodePackage = function(pkg) {
        if(pkg == "opt1") { return ["░", "█"]; }
        if(pkg == "opt2") { return ["▁", "█"]; }
        if(pkg == "opt3") { return ["⣀", "⣿"]; }
        if(pkg == "opt4") { return ["○", "⬤"]; }
        if(pkg == "opt5") { return ["□", "■"]; }
        if(pkg == "opt6") { return ["⬜", "⬛"]; }
        if(pkg == "opt7") { return ["▱", "▰"]; }
        if(pkg == "opt8") { return ["▭", "◼"]; }
        if(pkg == "opt9") { return ["▯", "▮"]; }
        if(pkg == "opt10") { return ["◯", "⬤"]; }
        if(pkg == "opt11") { return ["⚪", "⚫"]; }
    };

    this.progressBar = function(exp, maxExp, barSize, pkg) {
        var progress = "";

        for(i = 0; i < barSize; i++) {
            progress = progress + "░";
        }

        var char = this.getUnicodePackage(pkg);
        progress = Replace(progress, "░", char[0]);

        var percent = exp / maxExp * 100;
        var prog = percent * progress.length;
        var track = 0;
    
        for(p = 0; p < progress.length; p++) {
            if(percent >= p / progress.length * 100) {
                progress = TrimSuffix(progress, char[0]);
                progress = char[1] + progress;
            }
        }
        if(exp > maxExp) {
            for(i = 0; i < barSize; i++) {
                progress = progress + "░";
            }
            progress = Replace(progress, "░", char[0]);
        }
        return progress;
    };
}

function commafy(inVal){
	var returnNum;
	if(inVal != null) {
	   	var dat = inVal.toString();
	   	var arrTheNumber = dat.split("").reverse();
	   	var newNum = Array();
	   	for(var i=0; i<arrTheNumber.length; i++){
	        newNum[newNum.length] = ((i%3===2) && (i<arrTheNumber.length-1)) ? "," + arrTheNumber[i]: arrTheNumber[i];
	   	}
	   	returnNum = newNum.reverse().join("");
	} else {
		returnNum = inVal;
	}
   return returnNum;
}


var num = uC;
var check1 = Math.ceil(num / 100);
var check2 = Math.ceil(num / 1000);
var check3 = Math.ceil(num / 10000);
var check4 = Math.ceil(num / 100000);
var check5 = Math.ceil(num / 1000000);
var milestone = ""
var Bot = new System();
if (check4 >= 2) {
	milestone += commafy(num) + "\t" +  Bot.progressBar(num, 1000000, 20, "opt3") + "\t1,000,000";
} else if (check3 >= 2) {
	milestone += commafy(num) + "\t" + Bot.progressBar(num, 100000, 20, "opt3") + "\t100,000";
} else if (check2 >= 2) {
	milestone += commafy(num) + "\t" +  Bot.progressBar(num, 10000, 20, "opt3") + "\t10,000";
} else if (check1 >= 2) {
	milestone += commafy(num) + "\t" +  Bot.progressBar(num, 1000, 20, "opt3") + "\t1,000";
} else if (check1 == 1) {
	milestone += commafy(num) + "\t" +  Bot.progressBar(num, 100, 20, "opt3") + "\t100";
} else {
	throw new ReferenceError("Invalid server object!");
}

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
emb.footer = {"text":"Milestones : "+milestone}
resp = emb;
