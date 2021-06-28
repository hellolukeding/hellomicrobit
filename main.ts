function 右转 (速度: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, 速度)
    neZha.setMotorSpeed(neZha.MotorList.M4, 速度)
}
function 左转 (速度: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, 速度 * -1)
    neZha.setMotorSpeed(neZha.MotorList.M4, 速度 * -1)
}
input.onButtonPressed(Button.A, function () {
    启动 = 1
})
function 巡线 () {
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
function 后退 (速度: number) {
    // 向后转
    neZha.setMotorSpeed(neZha.MotorList.M1, 速度 * -1)
    // 向后转
    neZha.setMotorSpeed(neZha.MotorList.M4, 速度)
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
let 启动 = 0
启动 = 0
// 机械爪下限
neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S4, 60)
// 高度上限
neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 70)
PlanetX_AILens.initModule()
PlanetX_AILens.cameraImage()
basic.forever(function () {
    if (启动 == 1) {
        巡线()
    }
    basic.showIcon(IconNames.Heart)
})
