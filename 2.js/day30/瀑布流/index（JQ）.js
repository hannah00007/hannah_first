(function () {
    let data = null;
    $.ajax({
        url: `./data.json`,
        method: "get",
        async: false,
        dataType: "json",
        success: result => {
            data = result;
            // console.log(data);
        },
    });

    let renderHtml = () => {
        $.each(data, (index, item) => {
            let $ul = $('ul');
            $ul.sort((a, b) => {
                return $(a).outerHeight() - $(b).outerHeight();
              });
            let { title, src, height } = item;
            // console.log(height,src);
            let $li = $(`
            <li>
            <img true-img="${src}" class="bg" style="height:${height}"/>

            <p>${title}</p>
            </li>
          `);
            $li.appendTo($ul.eq(0));
        })
    };
    renderHtml();
    function check() {
        $("img").each(function (index, item) {
            delay(item);
        });
    }

    function delay(img) {
        img = $(img);
        if (img.attr("flag")) {
            return;
        }

        let imgH = img.outerHeight();
        let imgT = img.offset().top;
        let winH = $(window).innerHeight();
        let winT = $(window).scrollTop();
        if (winH + winT > imgH + imgT) {
            let address = img.attr("true-img");
            img.css("display", "none");
            img.attr({
                "src": address,
                flag: true,
            });
            img.fadeIn("slow");
        }
    }
    check();
    $(window).on(
        "scroll",
        _.throttle(function () {
            check();
            let winH = $(window).outerHeight(),
                pageH =
                    document.documentElement.scrollHeight ||
                    document.body.scrollHeight,
                scrollT = $(window).scrollTop();
            if (scrollT + winH > pageH - 30) {
                renderHtml();
            }
        }, 500))

}())
