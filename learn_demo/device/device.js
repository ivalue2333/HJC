

function Device() {
    this.ua = navigator.userAgent
    this.screenHeight = window.screen.height
    this.screenWidth = window.screen.width
    this.language = navigator.language
    this.netWork = navigator.connection.effectiveType

    this.deviceType = ''
    this.osType = ''
    this.osVersion = ''
    this.getDeviceType()
}

Device.prototype.getDeviceType = function() {
    var deviceType = 'other';
    var ua = this.ua.toLowerCase();
//    match 不区分大小写
    var pc = (ua.match('windows nt') == 'windows nt') || (ua.match('windows ce') == 'windows ce')
    var phone = (ua.match('iphone os') == 'iphone os') || (ua.match('midp') == 'midp') || (ua.match('ucweb') == 'ucweb') || (ua.match('android ') == 'android')
    var pad = (ua.match('pad') == 'pad')
    if (pc) { this.deviceType = 'pc'}
    else if (pad) {this.deviceType = 'pad'}
    else if (phone) {this.deviceType = 'phone'}
    else {this.deviceType = 'unknown'}
}

Device.prototype.getOsType = function() { }

Device.prototype.getOsVersion = function() { }

Device.prototype.getOrientationStatus = function() {
    return (window.screen.orientation.angle == 180 || window.screen.orientation.angle == 0) ? 'vertical' : 'horizontal'
}


device = new Device()

