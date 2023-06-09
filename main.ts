radio.onReceivedValue(function (name, value) {
    if (name == "forward") {
        if (value >= 0) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, value)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 15)
        } else {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 15)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, value)
        }
    } else if (name == "backward") {
        if (value >= 0) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, value)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 15)
        } else {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 15)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, value)
        }
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
radio.setGroup(1)
