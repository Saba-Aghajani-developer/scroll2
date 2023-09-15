let preview = 0
    let left = document.querySelectorAll('.left')
    let right = document.querySelectorAll('.right')
    window.addEventListener('scroll', () => {
        let st = window.scrollY
        let h = document.getElementsByTagName('main')[0].clientHeight
        if ((st <= (h / 3)) && (st >= 0)) {
            document.getElementById('left').style.alignContent = 'end'
            document.getElementById('right').style.alignContent = 'start'
            document.getElementsByClassName('left3')[0].style.top = '0%'
            document.getElementsByClassName('right1')[0].style.top = '0%'
            document.getElementsByClassName('left2')[0].style.top = '-100%'
            document.getElementsByClassName('right2')[0].style.top = '100%'
            document.getElementsByClassName('left1')[0].style.top = '-200%'
            document.getElementsByClassName('right3')[0].style.top = '200%'
        }
        if ((st <= ((h * 2) / 3)) && (st > (h / 3))) {
            document.getElementById('left').style.alignContent = 'center'
            document.getElementById('right').style.alignContent = 'center'
            document.getElementsByClassName('left3')[0].style.top = '100%'
            document.getElementsByClassName('right1')[0].style.top = '-100%'
            document.getElementsByClassName('left2')[0].style.top = '0%'
            document.getElementsByClassName('right2')[0].style.top = '0%'
            document.getElementsByClassName('left1')[0].style.top = '-100%'
            document.getElementsByClassName('right3')[0].style.top = '100%'
        }
        if (st >= ((h * 2) / 3)) {
            document.getElementById('left').style.alignContent = 'start'
            document.getElementById('right').style.alignContent = 'end'
            document.getElementsByClassName('left3')[0].style.top = '200%'
            document.getElementsByClassName('right1')[0].style.top = '-200%'
            document.getElementsByClassName('left2')[0].style.top = '100%'
            document.getElementsByClassName('right2')[0].style.top = '-100%'
            document.getElementsByClassName('left1')[0].style.top = '0%'
            document.getElementsByClassName('right3')[0].style.top = '0%'
        }
    })