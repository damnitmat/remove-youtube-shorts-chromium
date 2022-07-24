// popup.js

/** Open Settings */

function openSettings() {
    console.log("not implemented yet...");
}

/** Switch click */
function toogleMainSwitch() {
    var mainSwitchToogle = document.getElementById('main-switch-toogle');
    if(mainSwitchToogle.checked == true){
        mainSwitchToogle.checked = false;
        deactivateSubSwitches();
        
    } else {
        mainSwitchToogle.checked = true;
        activateSubSwitches();
    }
}

function deactivateSubSwitches() {
    // TODO: store settings to reapply them on reactivation
    var subSwitches = document.getElementById('sub-switches-container');
    subSwitches.style.pointerEvents = "none";

    setHomepageSwitch(false);
    setSubscriptionSwitch(false);
    setAllowSwitch(false);
}

function activateSubSwitches() {
    // TODO: reapply setting that were previously saved
    var subSwitches = document.getElementById('sub-switches-container');
    subSwitches.style.pointerEvents = "all";
}

function toogleRemoveHomepageSwitch() {
    var homepageSwitchToogle = document.getElementById('remove-homepage-switch-toogle');
    if(homepageSwitchToogle.checked === true){
        homepageSwitchToogle.checked = false;
        
    } else {
        homepageSwitchToogle.checked = true;
    }
}

function setHomepageSwitch(value) {
    var homepageSwitchToogle = document.getElementById('remove-homepage-switch-toogle');
    homepageSwitchToogle.checked = value;
}

function setSubscriptionSwitch(value) {
    var subscriptionSwitchToogle = document.getElementById('remove-subscription-switch-toogle');
    subscriptionSwitchToogle.checked = value;
}

function setAllowSwitch(value) {
    var allowSwitchToogle = document.getElementById('allow-channel-switch-toogle');
    allowSwitchToogle.checked = value;
}

function toogleRemoveSubscriptionSwitch() {
    console.log("not implemented yet...");
}

function toogleAllowChannelSwitch() {
    console.log("not implemented yet...");
}

/** footer links */

function nameClicked() {
    console.log("not implemented yet...");
}

function donateClicked() {
    console.log("not implemented yet...");
}

/** Linking DOM with functions */
document.addEventListener('DOMContentLoaded', function() {
    // settings button
    var settingsButton = document.getElementById('settings-button');
    settingsButton.addEventListener('click', function() {
        openSettings();
    });

    // main switch
    var mainSwitchToogle = document.getElementById('main-switch-toogle');
    mainSwitchToogle.addEventListener('click', function() {
        toogleMainSwitch();
    });

    // remove homepage switch
    var removeHomepageSwitchToogle = document.getElementById('remove-homepage-switch-toogle');
    removeHomepageSwitchToogle.addEventListener('click', function() {
        toogleRemoveHomepageSwitch();
    });

    // remove subscriptions switch
    var removeSubSwitchToogle = document.getElementById('remove-subscription-switch-toogle');
    removeSubSwitchToogle.addEventListener('click', function() {
        toogleRemoveSubscriptionSwitch();
    });

    // allow on this channel switch
    var allowSwitchToogle = document.getElementById('allow-channel-switch-toogle');
    allowSwitchToogle.addEventListener('click', function() {
        toogleAllowChannelSwitch();
    });

    // name link footer
    var nameLink = document.getElementById('name-footer');
    nameLink.addEventListener('click', function() {
        nameClicked();
    });

    // donate link footer
    var donateLink = document.getElementById('donate-footer');
    donateLink.addEventListener('click', function() {
        donateClicked();
    });
});
