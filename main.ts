function 右转 (速度: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, 速度)
    neZha.setMotorSpeed(neZha.MotorList.M4, 速度)
}
function 机械臂下降 () {
    // 高度上限70下限10
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 10)
}
function 左转 (速度: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, 速度 * -1)
    neZha.setMotorSpeed(neZha.MotorList.M4, 速度 * -1)
}
function 巡线传感器巡线 () {
    if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J3, PlanetX_Basic.TrackingStateType.Tracking_State_2) && PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J4, PlanetX_Basic.TrackingStateType.Tracking_State_1)) {
        前进(100)
    }
    if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J3, PlanetX_Basic.TrackingStateType.Tracking_State_2) && PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J4, PlanetX_Basic.TrackingStateType.Tracking_State_0)) {
        右转(100)
    }
    if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J3, PlanetX_Basic.TrackingStateType.Tracking_State_0) && PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J4, PlanetX_Basic.TrackingStateType.Tracking_State_1)) {
        左转(100)
    }
}
input.onButtonPressed(Button.A, function () {
    启动 = 1
})
function 后退 (速度: number) {
    // 向后转
    neZha.setMotorSpeed(neZha.MotorList.M1, 速度 * -1)
    // 向后转
    neZha.setMotorSpeed(neZha.MotorList.M4, 速度)
}
function 机械爪夹住 () {
    // 机械爪上限60下限20
    // 
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S4, 20)
}
function 前进 (速度: number) {
    // 向前转
    neZha.setMotorSpeed(neZha.MotorList.M4, 速度 * -1)
    // 向前转
    neZha.setMotorSpeed(neZha.MotorList.M1, 速度)
}
input.onButtonPressed(Button.B, function () {
    neZha.stopAllMotor()
})
function 机械爪松开 () {
    // 机械爪上限60下限20
    // 
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S4, 60)
}
function 机械臂抬升 () {
    // 高度上限70下限10
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 70)
}
let 启动 = 0
启动 = 0
// 机械爪上限60下限20
// 
neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S4, 60)
// 高度上限70下限10
neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 70)
PlanetX_AILens.initModule()
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Card)
// 巡线
basic.forever(function () {
    if (启动 == 1) {
        巡线传感器巡线()
    }
})
// 摄像头
basic.forever(function () {
    PlanetX_AILens.cameraImage()
    if (PlanetX_AILens.trafficCard(PlanetX_AILens.trafficCards.turnleft)) {
        basic.showIcon(IconNames.Meh)
    } else {
        basic.showIcon(IconNames.No)
    }
})
// 摄像头
basic.forever(function () {
    PlanetX_AILens.cameraImage()
    if (PlanetX_AILens.letterCard(PlanetX_AILens.letterCards.A)) {
        basic.showString("A")
    } else {
        basic.showIcon(IconNames.No)
    }
})
