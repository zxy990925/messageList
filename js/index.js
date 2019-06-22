/**
 * @author renjiefang
 * @date  2019-06-16 19:38
 */
$(function() {
    var arr =[
        {
            'name': '张熙烨', tel: '18406586265', pinyin: 'zhangxiye'
        },
        {
            'name': '赵静', tel: '13633596503', pinyin: 'zhaojing'
        },
        {
            'name': '张东兵', tel: '13603584598', pinyin: 'zhangdongbing'
        },
        {
            'name': '张潇烨', tel: '16598764567', pinyin: 'zhangxiaoye'
        },
        {
            'name': '范舒灵', tel: '18726760987', pinyin: 'fanshuling'
        },
        {
            'name': '盖一楠', tel: '15725670987', pinyin: 'gaiyinan'
        },
        {
            'name': '高志梅', tel: '1650976235', pinyin: 'gaozhimei'
        },
        {
            'name': '耿昊', tel: '18406586265', pinyin: 'genghao'
        },
        {
            'name': '任洁芳', tel: '18406586265', pinyin: 'renjiefang'
        },
        {
            'name': '高鑫', tel: '18406586265', pinyin: 'gaoxin'
        },

    ]
    let main = $('.main')
    let input = $('input')
    let aside = $('.aside')

    input.on('input', function() {
        let val = $(this).val()
        let newarr = arr.filter( (item) => {
            return item.name.includes(val) || item.pinyin.includes(val)
        })
        render(newarr)
    })

    render(arr)

    function render(arr) {
        aside.empty()
        main.empty()
        let person = {}

        arr.forEach(function (item) {

            let number = item.pinyin.charAt(0).toUpperCase()
            console.log(number);
            if (!person[number]) {
                person[number] = []
            }
            person[number].push(item)

        })

        let keys = Object.keys(person).sort()
        let content = ''
        let asidekey = ''
        for (let i = 0; i < keys.length; i++) {
            let keysnum = keys[i]
            content += `<section><h2>${keysnum}</h2>`;
            asidekey+= `<li>${keysnum}</li>`

            for (let j = 0; j < person[keysnum].length; j++) {

                content += ` <div ><a href = "tel: ${person[keysnum][j].tel}" >${person[keysnum][j].name} </a></div>`
            }
            content += `</section>`
        }


        main.html(content)
        aside.html(asidekey)
    }

    aside.on('click', 'li', function() {
        let _this = $(this)
        let mainkey = $('section h2')
        _this.addClass('focus_li').siblings().removeClass('focus_li')
        if(_this.html() === mainkey.eq(_this.index()).html() ) {
            let sec = mainkey.eq(_this.index())[0].parentNode
            let tops=sec.offsetTop - 50
            console.log(tops);
            $('.main').css( {top: -tops})
        }
    })

})