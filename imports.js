if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';
    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}



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
						if(e.split("|")[2].toString().toLowerCase() == "true") {
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




function makeBitwise(data, type) {
    var type = (typeof type !== 'undefined') ?  type : 0;
    var data = data.toUpperCase();
    var count = 0;
    if (type.toString() == "0") {
        if (data.includes("CREATE_INSTANT_INVITE")||data.includes("0x00000001")) {
            count += 0x00000001;
        }
        if(data.includes("KICK_MEMBERS")||data.includes("0x00000002")) {
            count += 0x00000002;
        }
        if(data.includes("BAN_MEMBERS")||data.includes("0x00000004")) {
            count += 0x00000004;
        }
        if(data.includes("ADMINISTRATOR")||data.includes("0x00000008")) {
            count += 0x00000008;
        }
        if(data.includes("MANAGE_CHANNELS")||data.includes("0x00000010")) {
            count += 0x00000010;
        }
        if(data.includes("MANAGE_GUILD")||data.includes("0x00000020")) {
            count += 0x00000020;
        }
        if(data.includes("ADD_REACTIONS")||data.includes("0x00000040")) {
            count += 0x00000040;
        }
        if(data.includes("VIEW_AUDIT_LOG")||data.includes("0x00000080")) {
            count += 0x00000080;
        }
        if(data.includes("VIEW_CHANNEL")||data.includes("0x00000400")) {
            count += 0x00000400;
        }
        if(data.includes("SEND_MESSAGES")||data.includes("0x00000800")) {
            count += 0x00000800;
        }
        if(data.includes("SEND_TTS_MESSAGES")||data.includes("0x00001000")) {
            count += 0x00001000;
        }
        if(data.includes("MANAGE_MESSAGES")||data.includes("0x00002000")) {
            count += 0x00002000;
        }
        if(data.includes("EMBED_LINKS")||data.includes("0x00004000")) {
            count += 0x00004000;
        }
        if(data.includes("ATTACH_FILES")||data.includes("0x00008000")) {
            count += 0x00008000;
        }
        if(data.includes("READ_MESSAGE_HISTORY")||data.includes("0x00010000")) {
            count += 0x00010000;
        }
        if(data.includes("MENTION_EVERYONE")||data.includes("0x00020000")) {
            count += 0x00020000;
        }
        if(data.includes("USE_EXTERNAL_EMOJIS")||data.includes("0x00040000")) {
            count += 0x00040000;
        }
        if(data.includes("CONNECT")||data.includes("0x00100000")) {
            count += 0x00100000;
        }
        if(data.includes("SPEAK")||data.includes("0x00200000")) {
            count += 0x00200000;
        }
        if(data.includes("MUTE_MEMBERS")||data.includes("0x00400000")) {
            count += 0x00400000;
        }
        if(data.includes("DEAFEN_MEMBERS")||data.includes("0x00800000")) {
            count += 0x00800000;
        }
        if(data.includes("MOVE_MEMBERS")||data.includes("0x01000000")) {
            count += 0x01000000;
        }
        if(data.includes("USE_VAD")||data.includes("0x02000000")) {
            count += 0x02000000;
        }
        if(data.includes("CHANGE_NICKNAME")||data.includes("0x04000000")) {
            count += 0x04000000;
        }
        if(data.includes("MANAGE_NICKNAMES")||data.includes("0x08000000")) {
            count += 0x08000000;
        }
        if(data.includes("MANAGE_ROLES")||data.includes("0x10000000")) {
            count += 0x10000000;
        }
        if(data.includes("MANAGE_WEBHOOKS")||data.includes("0x20000000")) {
            count += 0x20000000;
        }
        if(data.includes("MANAGE_EMOJIS")||data.includes("0x40000000")) {
            count += 0x40000000;
        }
        if (count == 0) {
            return "Error : No Perms Found";
        } else {
            return count.toString();
        }
    } else if (type.toString() == "1") {
        var eq = [];
        if (data.includes("CREATE_INSTANT_INVITE")||data.includes("0x00000001")) {
            eq.push(0x00000001);
        }
        if(data.includes("KICK_MEMBERS")||data.includes("0x00000002")) {
            eq.push(0x00000002);
        }
        if(data.includes("BAN_MEMBERS")||data.includes("0x00000004")) {
            eq.push(0x00000004);
        }
        if(data.includes("ADMINISTRATOR")||data.includes("0x00000008")) {
            eq.push(0x00000008);
        }
        if(data.includes("MANAGE_CHANNELS")||data.includes("0x00000010")) {
            eq.push(0x00000010);
        }
        if(data.includes("MANAGE_GUILD")||data.includes("0x00000020")) {
            eq.push(0x00000020);
        }
        if(data.includes("ADD_REACTIONS")||data.includes("0x00000040")) {
            eq.push(0x00000040);
        }
        if(data.includes("VIEW_AUDIT_LOG")||data.includes("0x00000080")) {
            eq.push(0x00000080);
        }
        if(data.includes("VIEW_CHANNEL")||data.includes("0x00000400")) {
            eq.push(0x00000400);
        }
        if(data.includes("SEND_MESSAGES")||data.includes("0x00000800")) {
            eq.push(0x00000800);
        }
        if(data.includes("SEND_TTS_MESSAGES")||data.includes("0x00001000")) {
            eq.push(0x00001000);
        }
        if(data.includes("MANAGE_MESSAGES")||data.includes("0x00002000")) {
            eq.push(0x00002000);
        }
        if(data.includes("EMBED_LINKS")||data.includes("0x00004000")) {
            eq.push(0x00004000);
        }
        if(data.includes("ATTACH_FILES")||data.includes("0x00008000")) {
            eq.push(0x00008000);
        }
        if(data.includes("READ_MESSAGE_HISTORY")||data.includes("0x00010000")) {
            eq.push(0x00010000);
        }
        if(data.includes("MENTION_EVERYONE")||data.includes("0x00020000")) {
            eq.push(0x00020000);
        }
        if(data.includes("USE_EXTERNAL_EMOJIS")||data.includes("0x00040000")) {
            eq.push(0x00040000);
        }
        if(data.includes("CONNECT")||data.includes("0x00100000")) {
            eq.push(0x00100000);
        }
        if(data.includes("SPEAK")||data.includes("0x00200000")) {
            eq.push(0x00200000);
        }
        if(data.includes("MUTE_MEMBERS")||data.includes("0x00400000")) {
            eq.push(0x00400000);
        }
        if(data.includes("DEAFEN_MEMBERS")||data.includes("0x00800000")) {
            eq.push(0x00800000);
        }
        if(data.includes("MOVE_MEMBERS")||data.includes("0x01000000")) {
            eq.push(0x01000000);
        }
        if(data.includes("USE_VAD")||data.includes("0x02000000")) {
            eq.push(0x02000000);
        }
        if(data.includes("CHANGE_NICKNAME")||data.includes("0x04000000")) {
            eq.push(0x04000000);
        }
        if(data.includes("MANAGE_NICKNAMES")||data.includes("0x08000000")) {
            eq.push(0x08000000);
        }
        if(data.includes("MANAGE_ROLES")||data.includes("0x10000000")) {
            eq.push(0x10000000);
        }
        if(data.includes("MANAGE_WEBHOOKS")||data.includes("0x20000000")) {
            eq.push(0x20000000);
        }
        if(data.includes("MANAGE_EMOJIS")||data.includes("0x40000000")) {
            eq.push(0x40000000);
        }
        if (eq.length === 0) {
            return "Error : No Perms Found"
        } else {
            return eq.join(" | ");
        }
    } else {
        return "Error : Invalid type";
    }
}


function unBitwise(count, type) {
    var type = (typeof type !== 'undefined') ?  type : 0;
    var count = parseInt(count);
    if (count.toString() !== 'NaN') {
        if (String(type) == "0") {
            var perms = [];
            var eq = [];
            if(count >= 0x40000000) {
                count -= 0x40000000;
                eq.push("0x40000000");
                perms.push("MANAGE_EMOJIS");
            }
            if(count >= 0x20000000) {
                count -= 0x20000000;
                eq.push("0x20000000");
                perms.push("MANAGE_WEBHOOKS");
            }
            if(count >= 0x10000000) {
                count -= 0x10000000;
                eq.push("0x10000000");
                perms.push("MANAGE_ROLES");
            }
            if(count >= 0x08000000) {
                count -= 0x08000000;
                eq.push("0x08000000");
                perms.push("MANAGE_ROLES");
            }
            if(count >= 0x04000000) {
                count -= 0x04000000;
                eq.push("0x04000000");
                perms.push("CHANGE_NICKNAME");
            }
            if(count >= 0x02000000) {
                count -= 0x02000000;
                eq.push("0x02000000");
                perms.push("USE_VAD");
            }
            if(count >= 0x01000000) {
                count -= 0x01000000;
                eq.push("0x01000000");
                perms.push("MOVE_MEMBERS");
            }
            if(count >= 0x00800000) {
                count -= 0x00800000;
                eq.push("0x00800000");
                perms.push("DEAFEN_MEMBERS");
            }
            if(count >= 0x00400000) {
                count -= 0x00400000;
                eq.push("0x00400000");
                perms.push("MUTE_MEMBERS");
            }
            if(count >= 0x00200000) {
                count -= 0x00200000;
                eq.push("0x00200000");
                perms.push("SPEAK");
            }
            if(count >= 0x00100000) {
                count -= 0x00100000;
                eq.push("0x00100000");
                perms.push("CONNECT");
            }
            if(count >= 0x00040000) {
                count -= 0x00040000;
                eq.push("0x00040000");
                perms.push("USE_EXTERNAL_EMOJIS");
            }
            if(count >= 0x00020000) {
                count -= 0x00020000;
                eq.push("0x00020000");
                perms.push("MENTION_EVERYONE");
            }
            if(count >= 0x00010000) {
                count -= 0x00010000;
                eq.push("0x00010000");
                perms.push("READ_MESSAGE_HISTORY");
            }
            if(count >= 0x00008000) {
                count -= 0x00008000;
                eq.push("0x00008000");
                perms.push("ATTACH_FILES");
            }
            if(count >= 0x00004000) {
                count -= 0x00004000;
                eq.push("0x00004000");
                perms.push("EMBED_LINKS");
            }
            if(count >= 0x00002000) {
                count -= 0x00002000;
                eq.push("0x00002000");
                perms.push("MANAGE_MESSAGES");
            }
            if(count >= 0x00001000) {
                count -= 0x00001000;
                eq.push("0x00001000");
                perms.push("SEND_TTS_MESSAGES");
            }
            if(count >= 0x00000800) {
                count -= 0x00000800;
                eq.push("0x00000800");
                perms.push("SEND_MESSAGES");
            }
            if(count >= 0x00000400) {
                count -= 0x00000400;
                eq.push("0x00000400");
                perms.push("VIEW_CHANNEL");
            }
            if(count >= 0x00000080) {
                count -= 0x00000080;
                eq.push("0x00000080");
                perms.push("VIEW_AUDIT_LOG");
            }
            if(count >= 0x00000040) {
                count -= 0x00000040;
                eq.push("0x00000040");
                perms.push("ADD_REACTIONS");
            }
            if(count >= 0x00000020) {
                count -= 0x00000020;
                eq.push("0x00000020");
                perms.push("MANAGE_GUILD");
            }
            if(count >= 0x00000010) {
                count -= 0x00000010;
                eq.push("0x00000010");
                perms.push("MANAGE_CHANNELS");
            }
            if(count >= 0x00000008) {
                count -= 0x00000008;
                eq.push("0x00000008");
                perms.push("ADMINISTRATOR");
            }
            if(count >= 0x00000004) {
                count -= 0x00000004;
                eq.push("0x00000004");
                perms.push("BAN_MEMBERS");
            }
            if(count >= 0x00000002) {
                count -= 0x00000002;
                eq.push("0x00000002");
                perms.push("KICK_MEMBERS");
            }
            if(count >= 0x00000001) {
                count -= 0x00000001;
                eq.push("0x00000001");
                perms.push("CREATE_INSTANT_INVITE");
            }
            if (count !== 0) {
                return "Error : Remainder of "+String(count)+"\nCached : `\``\n"+perms.join(", ")+"\n`\``";
            } else {
                return perms.join(", ");
            }
        } else if (String(type) == "1") {
            var perms = [];
            var eq = [];
            if(count >= 0x40000000) {
                count -= 0x40000000;
                eq.push("0x40000000");
                perms.push("MANAGE_EMOJIS");
            }
            if(count >= 0x20000000) {
                count -= 0x20000000;
                eq.push("0x20000000");
                perms.push("MANAGE_WEBHOOKS");
            }
            if(count >= 0x10000000) {
                count -= 0x10000000;
                eq.push("0x10000000");
                perms.push("MANAGE_ROLES");
            }
            if(count >= 0x08000000) {
                count -= 0x08000000;
                eq.push("0x08000000");
                perms.push("MANAGE_ROLES");
            }
            if(count >= 0x04000000) {
                count -= 0x04000000;
                eq.push("0x04000000");
                perms.push("CHANGE_NICKNAME");
            }
            if(count >= 0x02000000) {
                count -= 0x02000000;
                eq.push("0x02000000");
                perms.push("USE_VAD");
            }
            if(count >= 0x01000000) {
                count -= 0x01000000;
                eq.push("0x01000000");
                perms.push("MOVE_MEMBERS");
            }
            if(count >= 0x00800000) {
                count -= 0x00800000;
                eq.push("0x00800000");
                perms.push("DEAFEN_MEMBERS");
            }
            if(count >= 0x00400000) {
                count -= 0x00400000;
                eq.push("0x00400000");
                perms.push("MUTE_MEMBERS");
            }
            if(count >= 0x00200000) {
                count -= 0x00200000;
                eq.push("0x00200000");
                perms.push("SPEAK");
            }
            if(count >= 0x00100000) {
                count -= 0x00100000;
                eq.push("0x00100000");
                perms.push("CONNECT");
            }
            if(count >= 0x00040000) {
                count -= 0x00040000;
                eq.push("0x00040000");
                perms.push("USE_EXTERNAL_EMOJIS");
            }
            if(count >= 0x00020000) {
                count -= 0x00020000;
                eq.push("0x00020000");
                perms.push("MENTION_EVERYONE");
            }
            if(count >= 0x00010000) {
                count -= 0x00010000;
                eq.push("0x00010000");
                perms.push("READ_MESSAGE_HISTORY");
            }
            if(count >= 0x00008000) {
                count -= 0x00008000;
                eq.push("0x00008000");
                perms.push("ATTACH_FILES");
            }
            if(count >= 0x00004000) {
                count -= 0x00004000;
                eq.push("0x00004000");
                perms.push("EMBED_LINKS");
            }
            if(count >= 0x00002000) {
                count -= 0x00002000;
                eq.push("0x00002000");
                perms.push("MANAGE_MESSAGES");
            }
            if(count >= 0x00001000) {
                count -= 0x00001000;
                eq.push("0x00001000");
                perms.push("SEND_TTS_MESSAGES");
            }
            if(count >= 0x00000800) {
                count -= 0x00000800;
                eq.push("0x00000800");
                perms.push("SEND_MESSAGES");
            }
            if(count >= 0x00000400) {
                count -= 0x00000400;
                eq.push("0x00000400");
                perms.push("VIEW_CHANNEL");
            }
            if(count >= 0x00000080) {
                count -= 0x00000080;
                eq.push("0x00000080");
                perms.push("VIEW_AUDIT_LOG");
            }
            if(count >= 0x00000040) {
                count -= 0x00000040;
                eq.push("0x00000040");
                perms.push("ADD_REACTIONS");
            }
            if(count >= 0x00000020) {
                count -= 0x00000020;
                eq.push("0x00000020");
                perms.push("MANAGE_GUILD");
            }
            if(count >= 0x00000010) {
                count -= 0x00000010;
                eq.push("0x00000010");
                perms.push("MANAGE_CHANNELS");
            }
            if(count >= 0x00000008) {
                count -= 0x00000008;
                eq.push("0x00000008");
                perms.push("ADMINISTRATOR");
            }
            if(count >= 0x00000004) {
                count -= 0x00000004;
                eq.push("0x00000004");
                perms.push("BAN_MEMBERS");
            }
            if(count >= 0x00000002) {
                count -= 0x00000002;
                eq.push("0x00000002");
                perms.push("KICK_MEMBERS");
            }
            if(count >= 0x00000001) {
                count -= 0x00000001;
                eq.push("0x00000001");
                perms.push("CREATE_INSTANT_INVITE");
            }
            if (count !== 0) {
                return "Error : Remainder of "+String(count)+"\nCached : `\``\n"+eq.join(" | ")+"\n`\``";
            } else {
                return eq.join(" | ");
            }
        } else {
            return "Error : Not a valid type";
        }
    } else {
        return "Error : "+count+"is not a valid number";
    }
}


function getUser(id) {
    if (id.toLowerCase() === '$$collect') {
        var text = "";
        for (i = 0; i < ServerMembers.length; i++) {
            text += ServerMembers[i].User.Username+",\t";
        }
        return text;
    } else {
        var text = "";
        for (i = 0; i < ServerMembers.length; i++) {
            if (ServerMembers[i].User.ID === id||ServerMembers[i].User.Username === id||ServerMembers[i].User.Discriminator === id) {
                text += JSON.stringify(ServerMembers[i])+"\n\n";
            }
        }
        if (text !== "") {
            return text;
        } else {
            return "Internal Error : `"+id+"` Not found in guild";
        }
    }
}

function getChan(id) {
    if (id.toLowerCase() === '$$collect') {
        var text = "";
        for (i = 0; i < ServerChannels.length; i++) {
            text += ServerChannels[i].Name+",\t";
        }
        return text;
    } else {
        var text = "";
        for (i = 0; i < ServerChannels.length; i++) {
            if (ServerChannels[i].ID === id||ServerChannels[i].Name === id) {
            text += JSON.stringify(ServerChannels[i])+"\n\n";
            }
        }
        if (text !== "") {
            return text;
        } else {
            return "Internal Error : `"+id+"` Not found in guild";
        }
    }
}

function getRole(id) {
    if (id.toLowerCase() === '$$collect') {
        var text = "";
        for (i = 0; i < ServerRoles.length; i++) {
            text += ServerRoles[i].Name+",\t";
        }
        return text;
    } else {
        var text = "";
        for (i = 0; i < ServerRoles.length; i++) {
            if (ServerRoles[i].ID === id||ServerRoles[i].Name === id) {
                text += JSON.stringify(ServerRoles[i])+"\n\n";
            }
        }
        if (text !== "") {
            return text;
        } else {
            return "Internal Error : `"+id+"` Not found in guild";
        }
    }
}
