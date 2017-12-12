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

if (!Array.prototype.forEach) {
        Array.prototype.forEach = function(callback/*, thisArg*/) {

    var T, k;

    if (this == null) {
        throw new TypeError('this is null or not defined');
    }

    // 1. Let O be the result of calling toObject() passing the
    // |this| value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get() internal
    // method of O with the argument "length".
    // 3. Let len be toUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If isCallable(callback) is false, throw a TypeError exception. 
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let
    // T be undefined.
    if (arguments.length > 1) {
        T = arguments[1];
    }

    // 6. Let k be 0.
    k = 0;

    // 7. Repeat while k < len.
    while (k < len) {

        var kValue;

        // a. Let Pk be ToString(k).
        //    This is implicit for LHS operands of the in operator.
        // b. Let kPresent be the result of calling the HasProperty
        //    internal method of O with argument Pk.
        //    This step can be combined with c.
        // c. If kPresent is true, then
        if (k in O) {

        // i. Let kValue be the result of calling the Get internal
        // method of O with argument Pk.
        kValue = O[k];

        // ii. Call the Call internal method of callback with T as
        // the this value and argument list containing kValue, k, and O.
        callback.call(T, kValue, k, O);
        }
        // d. Increase k by 1.
        k++;
    }
    // 8. return undefined.
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


function makeBitwise(data, type) {
    var type = (typeof type !== 'undefined') ?  type : "0";
    var names = ["CREATE_INSTANT_INVITE","KICK_MEMBERS","BAN_MEMBERS","ADMINISTRATOR","MANAGE_CHANNELS","MANAGE_GUILD","ADD_REACTIONS","VIEW_AUDIT_LOG","VIEW_CHANNEL","SEND_MESSAGES","SEND_TTS_MESSAGES","MANAGE_MESSAGES","EMBED_LINKS","ATTACH_FILES","READ_MESSAGE_HISTORY","MENTION_EVERYONE","USE_EXTERNAL_EMOJIS","CONNECT","SPEAK","MUTE_MEMBERS","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD","CHANGE_NICKNAME","MANAGE_NICKNAMES","MANAGE_ROLES","MANAGE_WEBHOOKS","MANAGE_EMOJIS"];
    var numbers = [0x00000001,0x00000002,0x00000004,0x00000008,0x00000010,0x00000020,0x00000040,0x00000080,0x00000400,0x00000800,0x00001000,0x00002000,0x00004000,0x00008000,0x00010000,0x00020000,0x00040000,0x00100000,0x00200000,0x00400000,0x00800000,0x01000000,0x02000000,0x04000000,0x08000000,0x10000000,0x20000000,0x40000000];
    var numbname = ["0x00000001","0x00000002","0x00000004","0x00000008","0x00000010","0x00000020","0x00000040","0x00000080","0x00000400","0x00000800","0x00001000","0x00002000","0x00004000","0x00008000","0x00010000","0x00020000","0x00040000","0x00100000","0x00200000","0x00400000","0x00800000","0x01000000","0x02000000","0x04000000","0x08000000","0x10000000","0x20000000","0x40000000"];
    var error = {"status":false};
    var i;

    var data = data.toString().toUpperCase();
    var count = 0;
    var results = [];

    for (i = 0; i < names.length; i++) {
        if (data.includes(names[i])||data.includes(numbname[i])) {
            if (type === "0") {
                //results.push(names[i]);
                count += numbers[i];
            } else if (type === "1") {
                results.push(numbname[i]);
                count += numbers[i];
            } else {
                error.status = true;
                error.reason = "Invalid Type"
            }
        }
    }
    
    if (error.status) {
        return "Error : "+error.reason;
    } else {
        if (type === "0") {
            return String(count);
        } else if (type === "1") {
            return results.join(" | ");
        } else {
            error.reason = "No Type Declaired"
            return "Error : "+error.reason;
        }
    }
}


function unBitwise(data, type) {
    var type = (typeof type !== 'undefined') ?  type : "0";
    var names = ["CREATE_INSTANT_INVITE","KICK_MEMBERS","BAN_MEMBERS","ADMINISTRATOR","MANAGE_CHANNELS","MANAGE_GUILD","ADD_REACTIONS","VIEW_AUDIT_LOG","VIEW_CHANNEL","SEND_MESSAGES","SEND_TTS_MESSAGES","MANAGE_MESSAGES","EMBED_LINKS","ATTACH_FILES","READ_MESSAGE_HISTORY","MENTION_EVERYONE","USE_EXTERNAL_EMOJIS","CONNECT","SPEAK","MUTE_MEMBERS","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD","CHANGE_NICKNAME","MANAGE_NICKNAMES","MANAGE_ROLES","MANAGE_WEBHOOKS","MANAGE_EMOJIS"];
    var numbers = [0x00000001,0x00000002,0x00000004,0x00000008,0x00000010,0x00000020,0x00000040,0x00000080,0x00000400,0x00000800,0x00001000,0x00002000,0x00004000,0x00008000,0x00010000,0x00020000,0x00040000,0x00100000,0x00200000,0x00400000,0x00800000,0x01000000,0x02000000,0x04000000,0x08000000,0x10000000,0x20000000,0x40000000];
    var numbname = ["0x00000001","0x00000002","0x00000004","0x00000008","0x00000010","0x00000020","0x00000040","0x00000080","0x00000400","0x00000800","0x00001000","0x00002000","0x00004000","0x00008000","0x00010000","0x00020000","0x00040000","0x00100000","0x00200000","0x00400000","0x00800000","0x01000000","0x02000000","0x04000000","0x08000000","0x10000000","0x20000000","0x40000000"];
    var error = {"status":false};
    var i;

    var data = parseInt(data);
    var results = [];

    var numbers = numbers.reverse();
    var names = names.reverse();
    var numbname = numbname.reverse();

    if (data.toString() === 'NaN') {
        error.status = true;
        error.reason = "Invalid bitwise number";
    } else {
        for (i = 0; i < names.length; i++) {
            if (data >= numbers[i]) {
                if (type === "0") {
                    results.push(names[i]);
                    data -= numbers[i];
                } else if (type === "1") {
                    results.push(numbname[i]);
                    data -= numbers[i];
                } else {
                    error.status = true;
                    error.reason = "Invalid Type"
                }
            }
        }
    }
    if (error.status) {
        return "Error : "+error.reason;
    } else {
        if (type === "0") {
            return results.join(" | ");
        } else if (type === "1") {
            return results.join(" | ");
        } else {
            error.reason = "No Type Declaired"
            return "Error : "+error.reason;
        }
    }
}


function hasPerm(userId, permission) {
    var error = {"status":false};
    var i;
    var j;

    //Check for errors in the input
    if (!userId) {
        error.status = true;
        error.reason = "Missing userID";
    } else if (!permission) {
        error.status = true;
        error.reason = "Missing permission";
    } else if (typeof userId !== 'string') {
        error.status = true;
        error.reason = "Invalid userID (Not string)";
    } else if (!Array.isArray(permission)) {
        error.status = true;
        error.reason = "Invalid permissions (Must be an array)";        
    } else if (permission.length <= 0) {
        error.status = true;
        error.reason = "Invalid permissions (Must have 1+ permissions)";
    } else if (typeof permission === 'undefined') {
        error.status = true;
        error.reason = "Undefined Permissions";        
    }


    //end to deal with errors
    if (error.status) {
        return error.reason;
    }

    return permission;
    //validate the permissions
    var matchedPerms = [];
    var names = ["CREATE_INSTANT_INVITE","KICK_MEMBERS","BAN_MEMBERS","ADMINISTRATOR","MANAGE_CHANNELS","MANAGE_GUILD","ADD_REACTIONS","VIEW_AUDIT_LOG","VIEW_CHANNEL","SEND_MESSAGES","SEND_TTS_MESSAGES","MANAGE_MESSAGES","EMBED_LINKS","ATTACH_FILES","READ_MESSAGE_HISTORY","MENTION_EVERYONE","USE_EXTERNAL_EMOJIS","CONNECT","SPEAK","MUTE_MEMBERS","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD","CHANGE_NICKNAME","MANAGE_NICKNAMES","MANAGE_ROLES","MANAGE_WEBHOOKS","MANAGE_EMOJIS"];
    var numbers = [0x00000001,0x00000002,0x00000004,0x00000008,0x00000010,0x00000020,0x00000040,0x00000080,0x00000400,0x00000800,0x00001000,0x00002000,0x00004000,0x00008000,0x00010000,0x00020000,0x00040000,0x00100000,0x00200000,0x00400000,0x00800000,0x01000000,0x02000000,0x04000000,0x08000000,0x10000000,0x20000000,0x40000000];
    var numbname = ["0x00000001","0x00000002","0x00000004","0x00000008","0x00000010","0x00000020","0x00000040","0x00000080","0x00000400","0x00000800","0x00001000","0x00002000","0x00004000","0x00008000","0x00010000","0x00020000","0x00040000","0x00100000","0x00200000","0x00400000","0x00800000","0x01000000","0x02000000","0x04000000","0x08000000","0x10000000","0x20000000","0x40000000"];
    for (i=0;i < permission.length;i++) {
        for (i=0;i < names.length;i++) {
            if (permission[i].toUpperCase() === names[i]||parseInt(permission[i]) === numbers[i]||permission[i].toLowerCase() === numbname[i]) {
                matchedPerms.push(numbers[i]);
            }
        }
    }
    if (matchedPerms.length == 0) {
        error.status = true;
        error.reason = "Invalid Permissions (None found)";
    }

    //check for user and grab roles
    var foundUser = false;
    var arr = [];
    for (i = 0;i < ServerMembers.length;i++) {
        if (userId === ServerMembers[i].User.ID) {
            foundUser = true
            if (ServerMembers[i].Roles.length > 0) {
                for (j = 0;j < ServerMembers[i].Roles.length;j++) {
                    arr.push(ServerMembers[i].Roles[j]);
                }
            }
        }
    }
    if (!foundUser) {
        error.status = true;
        error.reason = "User not found"
    }


    //end to deal with errors
    if (error.status) {
        return error.reason;
    }


    //find role permissions
    var bitfields = [];
    if (arr.length > 0) {
        for (i=0;i < arr.length;i++) {
            for (j=0;j < ServerRoles.length;j++) {
                if (arr[i] === ServerRoles[j].ID) {
                    bitfields.push(ServerRoles[j].Permissions)
                }
            }
        }
    } else {
        error.status = true;
        error.reason = "User has no roles (No permissions collected)";
    }


    //check role permissions for given permissions
    //bitfields and matchedPerms
    var matches = 0;
    for (i=0;i < matchedPerms.length;i++) {
        for (j=0;j < bitfields.length;j++) {
            if (matchedPerms[i] <= bitfields[j]) {
                matches++;
            }
        }
    }
    if (matches !== matchedPerms.length) {
        return "False";
    } else if (matches === matchedPerms.length) {
        return "True";
    } else {
        error.status = true;
        error.reason = "Internal error (IDFK)";
    }

    //end to deal with errors
    if (error.status) {
        return error.reason;
    }
}
