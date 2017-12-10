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




function makeBitwise(data) {
    var data = data.toUpperCase();
	var count = 0;
	if (data.includes("CREATE_INSTANT_INVITE")) {
	  count += 0x00000001;
	}
	if(data.includes("KICK_MEMBERS")) {
	  count += 0x00000002;
	}
	if(data.includes("BAN_MEMBERS")) {
	  count += 0x00000004;
	}
	if(data.includes("ADMINISTRATOR")) {
	  count += 0x00000008;
	}
	if(data.includes("MANAGE_CHANNELS")) {
	  count += 0x00000010;
	}
	if(data.includes("MANAGE_GUILD")) {
	  count += 0x00000020;
	}
	if(data.includes("ADD_REACTIONS")) {
	  count += 0x00000040;
	}
	if(data.includes("VIEW_AUDIT_LOG")) {
	    count += 0x00000080;
	}
	if(data.includes("VIEW_CHANNEL")) {
	    count += 0x00000400;
	}
	if(data.includes("SEND_MESSAGES")) {
	    count += 0x00000800;
	}
	if(data.includes("SEND_TTS_MESSAGES")) {
	    count += 0x00001000;
	}
	if(data.includes("MANAGE_MESSAGES")) {
	    count += 0x00002000;
	}
	if(data.includes("EMBED_LINKS")) {
	    count += 0x00004000;
	}
	if(data.includes("ATTACH_FILES")) {
	    count += 0x00008000;
	}
	if(data.includes("READ_MESSAGE_HISTORY")) {
	    count += 0x00010000;
	}
	if(data.includes("MENTION_EVERYONE")) {
	    count += 0x00020000;
	}
	if(data.includes("USE_EXTERNAL_EMOJIS")) {
	    count += 0x00040000;
	}
	if(data.includes("CONNECT")) {
	    count += 0x00100000;
	}
	if(data.includes("SPEAK")) {
	    count += 0x00200000;
	}
	if(data.includes("MUTE_MEMBERS")) {
	    count += 0x00400000;
	}
	if(data.includes("DEAFEN_MEMBERS")) {
	    count += 0x00800000;
	}
	if(data.includes("MOVE_MEMBERS")) {
	    count += 0x01000000;
	}
	if(data.includes("USE_VAD")) {
	    count += 0x02000000;
	}
	if(data.includes("CHANGE_NICKNAME")) {
	    count += 0x04000000;
	}
	if(data.includes("MANAGE_NICKNAMES")) {
	    count += 0x08000000;
	}
	if(data.includes("MANAGE_ROLES")) {
	    count += 0x10000000;
	}
	if(data.includes("MANAGE_WEBHOOKS")) {
	    count += 0x20000000;
	}
	if(data.includes("MANAGE_EMOJIS")) {
	    count += 0x40000000;
	}
	return count;
}


function unBitwise(count) {
    if (typeof count !== 'number') {
        return "Please insert a number!";
    } else {
        var perms = "";
        if(count >= 0x40000000) {
            count -= 0x40000000;
            perms += "MANAGE_EMOJIS, ";
        }
        if(count >= 0x20000000) {
            count -= 0x20000000;
            perms += "MANAGE_WEBHOOKS, ";
        }
        if(count >= 0x10000000) {
            count -= 0x10000000;
            perms += "MANAGE_ROLES, ";
        }
        if(count >= 0x08000000) {
            count -= 0x08000000;
            perms += "MANAGE_ROLES, ";
        }
        if(count >= 0x04000000) {
            count -= 0x04000000;
            perms += "CHANGE_NICKNAME, ";
        }
        if(count >= 0x02000000) {
            count -= 0x02000000;
            perms += "USE_VAD, ";
        }
        if(count >= 0x01000000) {
            count -= 0x01000000;
            perms += "MOVE_MEMBERS, ";
        }
        if(count >= 0x00800000) {
            count -= 0x00800000;
            perms += "DEAFEN_MEMBERS, ";
        }
        if(count >= 0x00400000) {
            count -= 0x00400000;
            perms += "MUTE_MEMBERS, ";
        }
        if(count >= 0x00200000) {
            count -= 0x00200000;
            perms += "SPEAK, ";
        }
        if(count >= 0x00100000) {
            count -= 0x00100000;
            perms += "CONNECT, ";
        }
        if(count >= 0x00040000) {
            count -= 0x00040000;
            perms += "USE_EXTERNAL_EMOJIS, ";
        }
        if(count >= 0x00020000) {
            count -= 0x00020000;
            perms += "MENTION_EVERYONE, ";
        }
        if(count >= 0x00010000) {
            count -= 0x00010000;
            perms += "READ_MESSAGE_HISTORY, ";
        }
        if(count >= 0x00008000) {
            count -= 0x00008000;
            perms += "ATTACH_FILES, ";
        }
        if(count >= 0x00004000) {
            count -= 0x00004000;
            perms += "EMBED_LINKS, ";
        }
        if(count >= 0x00002000) {
            count -= 0x00002000;
            perms += "MANAGE_MESSAGES, ";
        }
        if(count >= 0x00001000) {
            count -= 0x00001000;
            perms += "SEND_TTS_MESSAGES, ";
        }
        if(count >= 0x00000800) {
            count -= 0x00000800;
            perms += "SEND_MESSAGES, ";
        }
        if(count >= 0x00000400) {
            count -= 0x00000400;
            perms += "VIEW_CHANNEL, ";
        }
        if(count >= 0x00000080) {
            count -= 0x00000080;
            perms += "VIEW_AUDIT_LOG, ";
        }
        if(count >= 0x00000040) {
            count -= 0x00000040;
            perms += "ADD_REACTIONS, ";
        }
        if(count >= 0x00000020) {
            count -= 0x00000020;
            perms += "MANAGE_GUILD, ";
        }
        if(count >= 0x00000010) {
            count -= 0x00000010;
            perms += "MANAGE_CHANNELS, ";
        }
        if(count >= 0x00000008) {
            count -= 0x00000008;
            perms += "ADMINISTRATOR, ";
        }
        if(count >= 0x00000004) {
            count -= 0x00000004;
            perms += "BAN_MEMBERS, ";
        }
        if(count >= 0x00000002) {
            count -= 0x00000002;
            perms += "KICK_MEMBERS, ";
        }
        if(count >= 0x00000001) {
            count -= 0x00000001;
            perms += "CREATE_INSTANT_INVITE, ";
        }
        if (count !== 0) {
            return "Error : Remainder of "+count+"\nCached : `\``\n"+perms.slice(0, -2)+"\n`\``";
        } else {
            return perms.slice(0, -2);
        }
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
