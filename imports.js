String.prototype.embedThis = function() {
	var emb = {};
	var t = "";
	var d = "";
	var c = 0;
	var fields = new Array();
	var footer = {};
	var thumb = {};

	if(Contains(this, "-t(")) {
		t = this.split("-t(")[1];
		if(Contains(t, "),")) {
			t = t.split("),")[0];
		}
	}
	if(Contains(this, "-d(")) {
		d = this.split("-d(")[1];
		if(Contains(d, "),")) {
			d = d.split("),")[0];
		}
	}
	if(Contains(this, "-c(")) {
		c = this.split("-c(")[1];
		if(Contains(c, "),")) {
			c = c.split("),")[0];
		}
	}
	if(Contains(this, "-f(")) {
		ls = this.split("-f(");
		for(i = 1; i < ls.length; i++) {
			var dat = ls[i];
			if(Contains(dat, "),")) {
				var e = dat.split("),")[0];
				if(Contains(e, "|")) {
					var field = {};
					// Name|Value|True
					var data = e.split("|");
					if(data.length == 3) {
						field.name = e.split("|")[0];
						field.value = e.split("|")[1];
						if(e.split("|")[2].toLowerCase() == "true") {
							field.inline = true;
						} else {
							field.inline = false;
						}
						fields.push(field);
					}
				}
			}
		}
	}
	if(Contains(this, "-ft(")) {
		var f = this.split("-ft(")[1];
		f = f.split("),")[0];
		footer.text = f;
	}
	if(Contains(this, "-fi")) {
		var f = this.split("-fi(")[1];
		f = f.split("),")[0];
		footer.icon_url = f;
	}
	if(Contains(this, "-tn")) {
		var f = this.split("-tn(")[1];
		f = f.split("),")[0];
		thumb.url = f;
	}
	if(Contains(this, "-td")) {
		var f = this.split("-td(")[1];
		f = f.split("),")[0];
		if(Contains(f, "x")) {
			var ff = f.split("x");
			thumb.height = ff[1];
			thumb.width = ff[0];
		}
	}

	emb.title = t;
	emb.description = d;
	emb.color = HTML2Int(c);
	if(thumb != null) {
		emb.thumbnail = thumb;
	}
	if(footer != null) {
		emb.footer = footer;
	}
	if(fields.length > 0) {
		emb.fields = fields;
	}
	return emb;
}




function search(arr, target) {
    if (!arr) {
        return "Error : Missing First Argument";
    }
    else if (!target) {
        return "Error : Missin Second Argument";
    }
    else if (Array.isArray(arr)) {
        if (arr.lastIndexOf(target) !== -1) {
            return 'true';
        } else {
            return 'false';
        }
    }
}




function bitwise(data) {
    var perms = {
        "CREATE_INSTANT_INVITE":0x00000001,0x00000001:1,
        "KICK_MEMBERS":0x00000002,0x00000002:2,
        "BAN_MEMBERS":0x00000004,0x00000004:4,
        "ADMINISTRATOR":0x00000008,0x00000008:8,
        "MANAGE_CHANNELS":0x00000010,0x00000010:16,
        "MANAGE_GUILD":0x00000020,0x00000020:32,
        "ADD_REACTIONS":0x00000040,0x00000040:64,
        "VIEW_AUDIT_LOG":0x00000080,0x00000080:128,
        "VIEW_CHANNEL":0x00000400,0x00000400:1024,
        "SEND_MESSAGES":0x00000800,0x00000800:2048,
        "SEND_TTS_MESSAGES":0x00001000,0x00001000:4096,
        "MANAGE_MESSAGES":0x00002000,0x00002000:8192,
        "EMBED_LINKS":0x00004000,0x00004000:16384,
        "ATTACH_FILES":0x00008000,0x00008000:32768,
        "READ_MESSAGE_HISTORY":0x00010000,0x00010000:65536,
        "MENTION_EVERYONE":0x00020000,0x00020000:131072,
        "USE_EXTERNAL_EMOJIS":0x00040000,0x00040000:262144,
        "CONNECT":0x00100000,0x00100000:1048576,
        "SPEAK":0x00200000,0x00200000:2097152,
        "MUTE_MEMBERS":0x00400000,0x00400000:4194304,
        "DEAFEN_MEMBERS":0x00800000,0x00800000:8388608,
        "MOVE_MEMBERS":0x01000000,0x01000000:16777216,
        "USE_VAD":0x02000000,0x02000000:33554432,
        "CHANGE_NICKNAME":0x04000000,0x04000000:67108864,
        "MANAGE_NICKNAMES":0x08000000,0x08000000:134217728,
        "MANAGE_ROLES":0x10000000,0x10000000:268435456,
        "MANAGE_WEBHOOKS":0x20000000,0x20000000:536870912,
        "MANAGE_EMOJIS":0x40000000,0x40000000:1073741824
    };
    var res = data.replace(/, /gi, ' + ');
    var res = res.replace(/CREATE_INSTANT_INVITE/gi, function myFunction(x){var data = x.toUpperCase(); return perms.data});
    var res = res.replace(/KICK_MEMBERS/gi, function myFunction(x){var data = x.toUpperCase(); return perms.data});
    var res = res.replace(/BAN_MEMBERS/gi, function myFunction(x){var data = x.toUpperCase(); return perms.data});
    var res = res.replace(/ADMINISTRATOR/gi, function myFunction(x){var data = x.toUpperCase(); return perms.data});
    var res = res.replace(/MANAGE_CHANNELS/gi, function myFunction(x){var data = x.toUpperCase(); return perms.data});
    var res = res.replace(/MANAGE_GUILD/gi, function myFunction(x){var data = x.toUpperCase(); return perms.data});
    var res = res.replace(/ADD_REACTIONS/gi, function myFunction(x){var data = x.toUpperCase(); return perms.data});
    var res = res.replace(/VIEW_AUDIT_LOG/gi, function myFunction(x){var data = x.toUpperCase(); return perms.data});
    var res = res.replace(/VIEW_CHANNEL/gi, function myFunction(x){var data = x.toUpperCase(); return perms.data});
    var res = res.replace(/SEND_MESSAGES/gi, function myFunction(x){var data = x.toUpperCase(); return perms.data});
    var res = res.replace(/SEND_TTS_MESSAGES/gi, function myFunction(x){var data = x.toUpperCase(); return perms.data});
    var res = res.replace(/MANAGE_MESSAGES/gi, function myFunction(x){var data = x.toUpperCase(); return perms.data});
    var res = res.replace(/EMBED_LINKS/gi, function myFunction(x){var data = x.toUpperCase(); return perms.data});
    var res = res.replace(/ATTACH_FILES/gi, function myFunction(x){var data = x.toUpperCase(); return perms.data});
    var res = res.replace(/READ_MESSAGE_HISTORY/gi, function myFunction(x){var data = x.toUpperCase(); return perms.data});
    var res = res.replace(/MENTION_EVERYONE/gi, function myFunction(x){var data = x.toUpperCase(); return perms.data});
    var res = res.replace(/USE_EXTERNAL_EMOJIS/gi, function myFunction(x){var data = x.toUpperCase(); return perms.data});
    var res = res.replace(/CONNECT/gi, function myFunction(x){var data = x.toUpperCase(); return perms.data});
    var res = res.replace(/SPEAK/gi, function myFunction(x){var data = x.toUpperCase(); return perms.data});
    var res = res.replace(/MUTE_MEMBERS/gi, function myFunction(x){var data = x.toUpperCase(); return perms.data});
    var res = res.replace(/DEAFEN_MEMBERS/gi, function myFunction(x){var data = x.toUpperCase(); return perms.data});
    var res = res.replace(/MOVE_MEMBERS/gi, function myFunction(x){var data = x.toUpperCase(); return perms.data});
    var res = res.replace(/USE_VAD/gi, function myFunction(x){var data = x.toUpperCase(); return perms.data});
    var res = res.replace(/CHANGE_NICKNAME/gi, function myFunction(x){var data = x.toUpperCase(); return perms.data});
    var res = res.replace(/MANAGE_NICKNAMES/gi, function myFunction(x){var data = x.toUpperCase(); return perms.data});
    var res = res.replace(/MANAGE_ROLES/gi, function myFunction(x){var data = x.toUpperCase(); return perms.data});
    var res = res.replace(/MANAGE_WEBHOOKS/gi, function myFunction(x){var data = x.toUpperCase(); return perms.data});
    var res = res.replace(/MANAGE_EMOJIS/gi, function myFunction(x){var data = x.toUpperCase(); return perms.data});
    return res;
}
