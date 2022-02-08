var wrapper = document.querySelector('.wrapper')
var weight = document.getElementById('weight')
var length = document.getElementById('length')
var width = document.getElementById('width')
var height = document.getElementById('height')
var button = document.querySelector('.search_box')
var list = document.querySelector('.list')
var result_weight = document.getElementById('result_weight')
var result_size = document.getElementById('result_size')
var result = document.querySelectorAll('table')[1]


const toasts = {
    lost_data:{
        text: 'Bạn chưa nhập đầy đủ thông tin !!!',
        icon: `<i class="fas fa-exclamation-triangle"></i>`
    },
    wrong_data:{
        text: 'Bạn nhập thông tin chưa chính xác !!!',
        icon: `<i class="fas fa-exclamation-triangle"></i>`
    }
}



button.addEventListener('click', function(e){
    if(weight.value == '' || length.value == '' || width.value == '' || height.value == '') {
        var status = 'lost_data'
        if(weight.value <= 0 || length.value <= 0 || width.value <= 0 || height.value <= 0)
            status = 'wrong_data'

        var toast = document.createElement('div')

        toast.innerHTML = `<div class="content">
                                ${toasts[status].icon}
                                <p>${toasts[status].text}</p>
                            </div>
                            <span></span>`

        var className = 'error_mess'
        console.log(className)

        toast.setAttribute('class', className)

        list.appendChild(toast)

        setTimeout(() => {
            toast.style.animation = 'hide_slide 1s ease forwards'
        }, 4000)

        setTimeout(() => {
             toast.remove()
        }, 6000)

        return;
    }

    
    let priceWeight = weight.value * 10000;
    let priceSize = ((length.value * width.value * height.value) / 6000) * 10000;
    result_weight.innerText = priceWeight + ' VNĐ'
    result_size.innerText = priceSize + ' VNĐ'

    console.log(result)
    result.classList.remove('hide')
})