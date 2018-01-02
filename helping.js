if (!Object.entries)
  Object.entries = function( obj ){
    var ownProps = Object.keys( obj ),
        i = ownProps.length,
        resArray = new Array(i); // preallocate the Array
    while (i--)
      resArray[i] = [ownProps[i], obj[ownProps[i]]];
    
    return resArray;
  };

function viewShop(user, shop) {
    if (!user) {
        throw new ReferenceError("Missing userObj! (Shop Command)");
    }
    if (typeof user !== 'object') {
        throw new TypeError("userObj is not an object! (Shop Command)");
    }
    if (user.toString() !== '[object Object]') {
        throw new TypeError("userObj is wrong type of object! (Shop Command)");
    }
    if (!user.userLevel && user.userLevel !== 0) {
        throw new ReferenceError("userObj is missing user's levels! (Shop Command)");
    }
    if (!user.userMecca && user.userMecca !== 0) {
        throw new ReferenceError("userObj is missing user's mecca! (Shop Command)");
    }
    if (!user.userSouls && user.userSouls !== 0) {
        throw new ReferenceError("userObj is missing user's souls! (Shop Command)");
    }
    //done with user error detecting

    if (!shop) {
        throw new ReferenceError("Missing shopObj! (Shop Command)");
    }
    if (typeof shop !== 'object') {
        throw new TypeError("shopObj is not an object! (Shop Command)");
    }
    if (shop.toString() !== '[object Object]') {
        throw new TypeError("shopObj is wrong type of object! (Shop Command)");
    }
    //done with shop error detecting

    var obj = Object.entries(shop);
    var objList = [];
    
    for (i=0; i < obj.length; i++) {
      objList.push(JSON.parse(obj[i][1]));
    }
    
    var avail = []; 

    for (i=0; i < objList.length; i++) {
        if (user.userLevel >= objList[i].Level) {
            var souls = true;
            var mecca = true;
            if (!objList[i].Souls) {
                souls =  false;
            }
            if (!objList[i].Mecca) {
                mecca = false;
            }
            if (mecca && souls) {
                if (user.userSouls >= objList[i].Souls && user.userMecca >= objList[i].Mecca) {
                    avail.push(objList[i].Name + " : " + objList[i].DMG + "DMG");
                }
            } else if (souls) {
                if (user.userSouls >= objList[i].Souls) {
                    avail.push(objList[i].Name + " : " + objList[i].DMG + "DMG");
                }
            } else if (mecca) {
                if (user.userMecca >= objList[i].Mecca) {
                    avail.push(objList[i].Name + " : " + objList[i].DMG + "DMG");
                }
            } else {
                avail.push(objList[i].Name + " : " + objList[i].DMG + "DMG");
            }
        }
    }
    if (avail.length !== 0) {
        return avail.join("\n");
    } else {
        return "Nothing is available! Sorry!"
    }
}
