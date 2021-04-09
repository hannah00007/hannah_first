let bankContent = document.getElementById("bankContent");
console.log(bankContent);
function bindHtml() {
    console.log(data.bankList);
    let str = ``;
    data.bankList.forEach((item) => {
        let { img, bankName, url } = item;
        str += `<li>
                    <a href="#">
                        <img src="${img}" alt="">
                        <span>${bankName}</span>
                    </a>
                </li>`;
    });
    bankContent.innerHTML = str;
}
bindHtml();

//swiper
var mySwiper = new Swiper(".swiper-container", {
    // direction: 'vertical', // 垂直切换选项
    // direction: 'horizontal',
    loop: true, // 循环模式选项
    autoplay: true,
    on: {
        click: function () {
            //this就是实例mySwiper
            
            let index = this.realIndex;
            console.log(this.realIndex)
            let { bankList } = data;
            location.href = bankList[index].url;
        },
    },
    // 如果需要分页器
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // 如果需要前进后退按钮
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    // 如果需要滚动条
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});
