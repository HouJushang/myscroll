/**
 * Created by hou on 2016/12/7.
 */
class myScroll {
    constructor (el, option) {
        this.wrapper = document.querySelector(el);  //外部容器
        this.scroller = this.wrapper.children[0];   //内部滚动容器
        this.scrollerStyle = this.scroller.style;   //内部容器样式
        this.options = {
            startX: 0,
            startY: 0,
            scrollY: true,
            directionLockThreshold: 5,
            momentum: true,
            bounce: true,
            selectedIndex: 0,
            rotate: 25,
            wheel: false,
            snap: false,
            snapLoop: false,
            snapThreshold: 0.1,
            swipeTime: 2500,
            bounceTime: 700,
            adjustTime: 400,
            swipeBounceTime: 1200,
            deceleration: 0.001,
            momentumLimitTime: 300,
            momentumLimitDistance: 15,
            resizePolling: 60,
            preventDefault: true,
            preventDefaultException: {
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
            },
            HWCompositing: true,
            useTransition: true,
            useTransform: true
        };
        Object.assign(this.options,option)
    }
}
new myScroll('.out', {})
let elementStyle = document.createElement('div').style;
console.log(elementStyle)

