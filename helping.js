if (!Object.entries)
  Object.entries = function( obj ){
    var ownProps = Object.keys( obj ),
        i = ownProps.length,
        resArray = new Array(i); // preallocate the Array
    while (i--)
      resArray[i] = [ownProps[i], obj[ownProps[i]]];
    
    return resArray;
  };

function viewShop(user, weapon, armour) {
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

    if (!weapon) {
        throw new ReferenceError("Missing weaponObj! (Shop Command)");
    }
    if (typeof weapon !== 'object') {
        throw new TypeError("weaponObj is not an object! (Shop Command)");
    }
    if (weapon.toString() !== '[object Object]') {
        throw new TypeError("weaponObj is wrong type of object! (Shop Command)");
    }
    //done with weapon error detecting

    if (!armour) {
        throw new ReferenceError("Missing armourObj! (Shop Command)");
    }
    if (typeof armour !== 'object') {
        throw new TypeError("armourObj is not an object! (Shop Command)");
    }
    if (armour.toString() !== '[object Object]') {
        throw new TypeError("armourObj is wrong type of object! (Shop Command)");
    }
    //done with armour error detecting

    var weap = Object.entries(weapon);
    var weapObjList = [];
    
    for (i=0; i < weap.length; i++) {
      weapObjList.push(JSON.parse(weap[i][1]));
    }
    
    var weapAvail = []; 
    weapAvail.push('Weapons\n========\n');

    for (i=0; i < weapObjList.length; i++) {
        if (user.userLevel >= weapObjList[i].Level) {
            var weapSouls = true;
            var weapMecca = true;
            if (!weapObjList[i].Souls) {
                weapSouls =  false;
            }
            if (!weapObjList[i].Mecca) {
                weapMecca = false;
            }
            if (weapMecca && weapSouls) {
                if (user.userSouls >= weapObjList[i].Souls && user.userMecca >= weapObjList[i].Mecca) {
                    weapAvail.push(weapObjList[i].Name + " : " + weapObjList[i].DMG + " DMG"+"\n"+"Cost : `"+weapObjList[i].Souls+"` Souls & `"+weapObjList[i].Mecca+"` Mecca");
                }
            } else if (weapSouls) {
                if (user.userSouls >= weapObjList[i].Souls) {
                    weapAvail.push(weapObjList[i].Name + " : " + weapObjList[i].DMG + " DMG"+"\n"+"Cost : `"+weapObjList[i].Souls+"` Souls");
                }
            } else if (weapMecca) {
                if (user.userMecca >= weapObjList[i].Mecca) {
                    weapAvail.push(weapObjList[i].Name + " : " + weapObjList[i].DMG + " DMG"+"\n"+"Cost : `"+weapObjList[i].Mecca+"` Mecca");
                }
            } else {
                weapAvail.push(weapObjList[i].Name + " : " + weapObjList[i].DMG + " DMG"+"\n"+"Cost : `Error` Nothing listed");
            }
        }
    }
    //done with weapons!

    var arm = Object.entries(armour);
    var armObjList = [];
    
    for (i=0; i < arm.length; i++) {
      armObjList.push(JSON.parse(arm[i][1]));
    }
    
    var armAvail = [];
    armAvail.push('Armors\n========\n');

    for (i=0; i < armObjList.length; i++) {
        if (user.userLevel >= armObjList[i].Level) {
            var armSouls = true;
            var armMecca = true;
            if (!armObjList[i].Souls) {
                armSouls =  false;
            }
            if (!armObjList[i].Mecca) {
                armMecca = false;
            }
            if (armMecca && armSouls) {
                if (user.userSouls >= armObjList[i].Souls && user.userMecca >= armObjList[i].Mecca) {
                    armAvail.push(armObjList[i].Name + " : " + armObjList[i].Protection + " Protection"+"\n"+"Cost : `"+armObjList[i].Souls+"` Souls & `"+armObjList[i].Mecca+"` Mecca");
                }
            } else if (armSouls) {
                if (user.userSouls >= armObjList[i].Souls) {
                    armAvail.push(armObjList[i].Name + " : " + armObjList[i].Protection + " Protection"+"\n"+"Cost : `"+armObjList[i].Souls+"` Souls");
                }
            } else if (armMecca) {
                if (user.userMecca >= armObjList[i].Mecca) {
                    armAvail.push(armObjList[i].Name + " : " + armObjList[i].Protection + " Protection"+"\n"+"Cost : `"+armObjList[i].Mecca+"` Mecca");
                }
            } else {
                armAvail.push(armObjList[i].Name + " : " + armObjList[i].Protection + " Protection"+"\n"+"Cost : `Error` Nothing listed");
            }
        }
    }


    var weaponsShow = true;
    var armourShow = true;

    if (weapAvail.length === 1) {
        weaponsShow = false;
    }
    if (armAvail.length === 1) {
        armourShow = false;
    }

    if (weaponsShow && armourShow) {
        return weapAvail.join("\n") + "\n\n" + armAvail.join("\n");
    } else if (weaponsShow) {
        return weapAvail.join("\n");
    } else if (armourShow) {
        return armAvail.join("\n");
    } else {
        return "Nothing is available! Sorry!"
    }
}
