function 右转 (速度: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, 速度)
    neZha.setMotorSpeed(neZha.MotorList.M4, 速度)
}
function 左转 (速度: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, 速度 * -1)
    neZha.setMotorSpeed(neZha.MotorList.M4, 速度 * -1)
}
function 巡线 () {
    if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J3, PlanetX_Basic.TrackingStateType.Tracking_State_2) && PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J4, PlanetX_Basic.TrackingStateType.Tracking_State_1)) {
        前进(50)
    }
    if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J3, PlanetX_Basic.TrackingStateType.Tracking_State_2) && PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J4, PlanetX_Basic.TrackingStateType.Tracking_State_0)) {
        右转(50)
    }
    if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J3, PlanetX_Basic.TrackingStateType.Tracking_State_0) && PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J4, PlanetX_Basic.TrackingStateType.Tracking_State_1)) {
        左转(50)
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
basic.showIcon(IconNames.StickFigure)
basic.forever(function () {
    巡线()
})
