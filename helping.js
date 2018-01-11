if (!Object.entries)
  Object.entries = function( obj ){
    var ownProps = Object.keys( obj ),
        i = ownProps.length,
        resArray = new Array(i); // preallocate the Array
    while (i--)
      resArray[i] = [ownProps[i], obj[ownProps[i]]];
    
    return resArray;
  };

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

function leveledWeap(user, weapon) {
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


    var weap = Object.entries(weapon);
    var weapObjList = [];
    
    for (i=0; i < weap.length; i++) {
      weapObjList.push(JSON.parse(weap[i][1]));
    }
    
    var weapAvail = []; 
    weapAvail.push('Weapons\n========\n');

    for (i=0; i < weapObjList.length; i++) {
        if (user.userLevel >= weapObjList[i].Level) {
            weapAvail.push(weapObjList[i].Name + " : " + weapObjList[i].DMG + " DMG");
        }
    }
    //done with weapons!

    var weaponsShow = true;

    if (weapAvail.length === 1) {
        weaponsShow = false;
    }

    if (weaponsShow) {
        return weapAvail.join("\n");
    } else {
        return "Nothing is available! Sorry!"
    }
}

function leveledArm(user, armour) {
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


    var arm = Object.entries(armour);
    var armObjList = [];
    
    for (i=0; i < arm.length; i++) {
      armObjList.push(JSON.parse(arm[i][1]));
    }
    
    var armAvail = [];
    armAvail.push('Armors\n========\n');

    for (i=0; i < armObjList.length; i++) {
        if (user.userLevel >= armObjList[i].Level) {
            armAvail.push(armObjList[i].Name + " : " + armObjList[i].Protection + " Protection");
        }
    }
    //done with armours!

    var armourShow = true;

    if (armAvail.length === 1) {
        armourShow = false;
    }

    if (armourShow) {
        return armAvail.join("\n");
    } else {
        return "Nothing is available! Sorry!"
    }
}

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
                    weapAvail.push(weapObjList[i].Name + " : " + weapObjList[i].DMG + " DMG"+"\n"+"\tCost : `"+weapObjList[i].Souls+"` Souls & `"+weapObjList[i].Mecca+"` Mecca");
                }
            } else if (weapSouls) {
                if (user.userSouls >= weapObjList[i].Souls) {
                    weapAvail.push(weapObjList[i].Name + " : " + weapObjList[i].DMG + " DMG"+"\n"+"\tCost : `"+weapObjList[i].Souls+"` Souls");
                }
            } else if (weapMecca) {
                if (user.userMecca >= weapObjList[i].Mecca) {
                    weapAvail.push(weapObjList[i].Name + " : " + weapObjList[i].DMG + " DMG"+"\n"+"\tCost : `"+weapObjList[i].Mecca+"` Mecca");
                }
            } else {
                weapAvail.push(weapObjList[i].Name + " : " + weapObjList[i].DMG + " DMG"+"\n"+"\tCost : `Error` Nothing listed");
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
                    armAvail.push(armObjList[i].Name + " : " + armObjList[i].Protection + " Protection"+"\n"+"\tCost : `"+armObjList[i].Souls+"` Souls & `"+armObjList[i].Mecca+"` Mecca");
                }
            } else if (armSouls) {
                if (user.userSouls >= armObjList[i].Souls) {
                    armAvail.push(armObjList[i].Name + " : " + armObjList[i].Protection + " Protection"+"\n"+"\tCost : `"+armObjList[i].Souls+"` Souls");
                }
            } else if (armMecca) {
                if (user.userMecca >= armObjList[i].Mecca) {
                    armAvail.push(armObjList[i].Name + " : " + armObjList[i].Protection + " Protection"+"\n"+"\tCost : `"+armObjList[i].Mecca+"` Mecca");
                }
            } else {
                armAvail.push(armObjList[i].Name + " : " + armObjList[i].Protection + " Protection"+"\n"+"\tCost : `Error` Nothing listed");
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


function buyItem(user, item, weapon, armour) {
    if (!user) {
        throw new ReferenceError("Missing userObj! (Buy Command)");
    }
    if (typeof user !== 'object') {
        throw new TypeError("userObj is not an object! (Buy Command)");
    }
    if (user.toString() !== '[object Object]') {
        throw new TypeError("userObj is wrong type of object! (Buy Command)");
    }
    if (!user.userLevel && user.userLevel !== 0) {
        throw new ReferenceError("userObj is missing user's levels! (Buy Command)");
    }
    if (!user.userMecca && user.userMecca !== 0) {
        throw new ReferenceError("userObj is missing user's mecca! (Buy Command)");
    }
    if (!user.userSouls && user.userSouls !== 0) {
        throw new ReferenceError("userObj is missing user's souls! (Buy Command)");
    }
    //done with user error detecting

    if (!item) {
        throw new ReferenceError("Missing userObj! (Buy Command)");
    }
    if (typeof item !== 'string') {
        throw new TypeError("userObj is not a string! (Buy Command)");
    }
    //done with item error detectingw\

    if (!weapon) {
        throw new ReferenceError("Missing weaponObj! (Buy Command)");
    }
    if (typeof weapon !== 'object') {
        throw new TypeError("weaponObj is not an object! (Buy Command)");
    }
    if (weapon.toString() !== '[object Object]') {
        throw new TypeError("weaponObj is wrong type of object! (Buy Command)");
    }
    //done with weapon error detecting

    if (!armour) {
        throw new ReferenceError("Missing armourObj! (Buy Command)");
    }
    if (typeof armour !== 'object') {
        throw new TypeError("armourObj is not an object! (Buy Command)");
    }
    if (armour.toString() !== '[object Object]') {
        throw new TypeError("armourObj is wrong type of object! (Buy Command)");
    }
    //done with armour error detecting

    var returnObj = new Object();

    var weap = Object.entries(weapon);
    var weapObjList = [];
    
    var arm = Object.entries(armour);
    var armObjList = [];
    
    for (i=0; i < weap.length; i++) {
      weapObjList.push(JSON.parse(weap[i][1]));
    }

    for (i=0; i < arm.length; i++) {
      armObjList.push(JSON.parse(arm[i][1]));
    }


    var weapCheck = false;
    var weapName = "";
    var armCheck = false;
    var armName = "";



    for (i=0; i < weapObjList.length; i++) {
        if (item.toLowerCase() === weapObjList[i].Name) {
            weapCheck = true;
            weapName += weapObjList[i].Name;
        }
    }

    if (weapCheck === false) {
        for (i=0; i < armObjList.length; i++) {
            if (item.toLowerCase() === armObjList[i].Name) {
                armCheck = true;
                armName += armObjList[i].Name;
            }
        }
    }

    if (weapCheck === false && armCheck === false) {
        returnObj.message = "No Item Matching The Name `"+item+"` Was Found!";
        return returnObj;
    }

    if (weapCheck === true) {
        //weapon found
        for (i=0; i < weapObjList.length; i++) {
            if (weapName === weapObjList[i].Name) {
                var userWeap;
                for (j=0; j < weapObjList.length; j++) {
                    if (weapObjList[j].Name === user.userWeapon) {
                      var data = weapObjList[j].DMG;
                      if(data.includes("-")) {
                        var spliced = data.split("-")[1];
                           userWeap = spliced;
                        }
                    }
                }
                if (weapObjList[i].DMG <= userWeap) {
                    returnObj.message = "You are too powerful to purchase such a measly weapon!";
                    return returnObj;
                } else {
                    if (user.userLevel >= weapObjList[i].Level) {
                        //Good level
                        if (weapObjList[i].Souls && weapObjList[i].Mecca) {
                            //Souls and Mecca
                            //do cost check
                            if (user.userSouls >= weapObjList[i].Souls && user.userMecca >= weapObjList[i].Mecca) {
                                //buy
                                user.userMecca -= weapObjList[i].Mecca;
                                user.userSouls -= weapObjList[i].Souls;
                                user.userWeapon = weapObjList[i].Name;
                                returnObj.user = user;
                                returnObj.message = "You have succesfully bought `"+weapObjList[i].Name+"` for `"+weapObjList[i].Souls+"` Souls and `"+weapObjList[i].Mecca+"` Mecca!";
                                return returnObj;
                            } else {
                                //not enough funds
                                var missingSouls = weapObjList[i].Souls - user.userSouls;
                                var missingMecca = weapObjList[i].Mecca - user.userMecca;
                                returnObj.message = "You need `"+missingSouls+"` more Souls and `"+missingMecca+"` more Mecca to buy `"+item+"`!";
                                return returnObj;
                            }
                        } else if (weapObjList[i].Souls) {
                            //Souls
                            //do cost check
                            if (user.userSouls >= weapObjList[i].Souls) {
                                //buy
                                user.userSouls -= weapObjList[i].Souls;
                                user.userWeapon = weapObjList[i].Name;
                                returnObj.user = user;
                                returnObj.message = "You have succesfully bought `"+weapObjList[i].Name+"` for `"+weapObjList[i].Souls+"` Souls!";
                                return returnObj;
                            } else {
                                //not enough funds
                                var missingSouls = weapObjList[i].Souls - user.userSouls;
                                returnObj.message = "You need `"+missingSouls+"` more Souls to buy `"+item+"`!";
                                return returnObj;
                            }
                        } else if (weapObjList[i].Mecca) {
                            //Mecca
                            //do cost check
                            if (user.userMecca >= weapObjList[i].Mecca) {
                                //buy
                                user.userMecca -= weapObjList[i].Mecca;
                                user.userWeapon = weapObjList[i].Name;
                                returnObj.user = user;
                                returnObj.message = "You have succesfully bought `"+weapObjList[i].Name+"` for `"+weapObjList[i].Mecca+"` Mecca!";
                                return returnObj;
                            } else {
                                //not enough funds
                                var missingMecca = weapObjList[i].Mecca - user.userMecca;
                                returnObj.message = "You need `"+missingMecca+"` more Mecca to buy `"+item+"`!";
                                return returnObj;
                            }
                        } else {
                            //level good but no price found
                            returnObj.message = "User level met but no price was set, please contact a staff to fix!";
                            return returnObj;
                        }
                    } else {
                        //name found but not high enough level
                        returnObj.message = "Sorry, you are not a high enough level to buy `"+weapObjList[i].Name+"`";
                        return returnObj;
                    }
                }
            } else {
                //name not found
            }
        }
    } else if (armCheck === true) {
        //armour found
        for (i=0; i < armObjList.length; i++) {
            if (armName === armObjList[i].Name) {
                var userArm;
                for (j=0; j < armObjList.length; j++) {
                    if (armObjList[j].Name === user.userArmor) {
                        userArm = armObjList[j].Protection
                    }
                }
                if (armObjList[i].Protection <= userWeap) {
                    returnObj.message = "You are too powerful to purchase such a measly weapon!";
                    return returnObj;
                } else {
                    if (user.userLevel >= armObjList[i].Level) {
                        //Good level
                        if (armObjList[i].Souls && armObjList[i].Mecca) {
                            //Souls and Mecca
                            //do cost check
                            if (user.userSouls >= armObjList[i].Souls && user.userMecca >= armObjList[i].Mecca) {
                                //buy
                                user.userMecca -= armObjList[i].Mecca;
                                user.userSouls -= armObjList[i].Souls; 
                                user.userArmor = armObjList[i].Name;
                                returnObj.user = user;
                                returnObj.message = "You have succesfully bought `"+armObjList[i].Name+"` for `"+armObjList[i].Souls+"` Souls and `"+armObjList[i].Mecca+"` Mecca!";
                                return returnObj;
                            } else {
                                //not enough funds
                                var missingSouls = armObjList[i].Souls - user.userSouls;
                                var missingMecca = armObjList[i].Mecca - user.userMecca;
                                returnObj.message = "You need `"+missingSouls+"` more Souls and `"+missingMecca+"` more Mecca to buy `"+item+"`!";
                                return returnObj;
                            }
                        } else if (armObjList[i].Souls) {
                            //Souls
                            //do cost check
                            if (user.userSouls >= armObjList[i].Souls) {
                                //buy
                                user.userSouls -= armObjList[i].Souls; 
                                user.userArmor = armObjList[i].Name;
                                returnObj.user = user;
                                returnObj.message = "You have succesfully bought `"+armObjList[i].Name+"` for `"+armObjList[i].Souls+"` Souls!";
                                return returnObj;
                            } else {
                                //not enough funds
                                var missingSouls = armObjList[i].Souls - user.userSouls;
                                returnObj.message = "You need `"+missingSouls+"` more Souls to buy `"+item+"`!";
                                return returnObj;
                            }
                        } else if (armObjList[i].Mecca) {
                            //Mecca
                            //do cost check
                            if (user.userMecca >= armObjList[i].Mecca) {
                                //buy
                                user.userMecca -= armObjList[i].Mecca; 
                                user.userArmor = armObjList[i].Name;
                                returnObj.user = user;
                                returnObj.message = "You have succesfully bought `"+armObjList[i].Name+"` for `"+armObjList[i].Mecca+"` Mecca!";
                                return returnObj;
                            } else {
                                //not enough funds
                                var missingMecca = armObjList[i].Mecca - user.userMecca;
                                returnObj.message = "You need `"+missingMecca+"` more Mecca to buy `"+item+"`!";
                                return returnObj;
                            }
                        } else {
                            //level good but no price found
                            returnObj.message = "User level met but no price was set, please contact a staff to fix!";
                            return returnObj;
                        }
                    } else {
                        //name found but not high enough level
                        returnObj.message = "Sorry, you are not a high enough level to buy `"+armObjList[i].Name+"`";
                        return returnObj;
                    }
                }
            } else {
                //name not found
            }
        }
    } else {
        throw new ReferenceError("I honestly don't know how you got here but you failed both true checks while not triggering the double fail check. (Buy Command)");
    }
}
