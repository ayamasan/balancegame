let 差分Y = 0
let 差分X = 0
let スティックY = 0
let スティックX = 0
bluetooth.startUartService()
let 開始時間 = 500
let 終了時間 = 2500
let 角度X = 90
let 角度Y = 90
let パルス幅X = Math.map(角度X, 0, 180, 開始時間, 終了時間)
let パルス幅Y = Math.map(角度Y, 0, 180, 開始時間, 終了時間)
let スティックX0 = pins.analogReadPin(AnalogPin.P1)
let スティックY0 = pins.analogReadPin(AnalogPin.P0)
basic.forever(function () {
    スティックX = pins.analogReadPin(AnalogPin.P1)
    スティックY = pins.analogReadPin(AnalogPin.P0)
    差分X = Math.constrain(スティックX - スティックX0, -200, 200)
    差分Y = Math.constrain(スティックY - スティックY0, -200, 200)
    角度X = Math.map(差分X, -200, 200, 120, 60)
    角度Y = Math.map(差分Y, -200, 200, 60, 120)
    パルス幅X = Math.map(角度X, 180, 0, 開始時間, 終了時間)
    パルス幅Y = Math.map(角度Y, 180, 0, 開始時間, 終了時間)
    pins.servoSetPulse(AnalogPin.P8, パルス幅X)
    pins.servoSetPulse(AnalogPin.P9, パルス幅Y)
    bluetooth.uartWriteString("" + Math.trunc(角度X) + "," + Math.trunc(角度Y))
    basic.pause(30)
})
