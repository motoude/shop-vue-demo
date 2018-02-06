import Mock from 'mockjs';
let Random = Mock.Random
Mock.mock('/carousellist', {
    'list|4': [{
        'title|1': ['一加手机20', '三星 Galaxy S8', '荣耀9 全网通', 'OPPO R11 全网通', '小米6 全网通'],
        'src|+1': [
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
        ]
    }]
});
Mock.mock('/newslist', {
    'list|20': [{
        'newstitle|+1': [
            Random.ctitle(13),
            Random.ctitle(13),
            Random.ctitle(13),
            Random.ctitle(13),
            Random.ctitle(13)
        ],
        'newscat|+1': [
            Random.ctitle(2),
            Random.ctitle(2),
            Random.ctitle(2),
            Random.ctitle(2),
            Random.ctitle(2)
        ],
        'newspic': Random.dataImage('100x25', Random.color())
    }]
});
Mock.mock('/goodslist', {
    'list|30': [{
        'title|1': [
            Random.ctitle(10),
            Random.ctitle(10),
            Random.ctitle(10),
            Random.ctitle(10),
            Random.ctitle(10)
        ],
        'price|10-100': 1,
        'pic|+1': [
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color())
        ]
    }]
});
Mock.mock('/floorlist1', {
    'title': Random.ctitle(4),
    'list1': [{
        'src':Random.dataImage('200x100', Random.color())
    }],
    'list2|2': [{
        'src|+1': [
            Random.dataImage('100x100', Random.color()),
            Random.dataImage('100x100', Random.color())
        ]
    }],
    'list3': [{
    }],
    'list4|4': [{
        'src|+1': [
            Random.dataImage('100x100', Random.color()),
            Random.dataImage('100x100', Random.color()),
            Random.dataImage('100x100', Random.color()),
            Random.dataImage('100x100', Random.color())
        ]
    }],

});
Mock.mock('/floorlist2', {
    'title': Random.ctitle(4),
    'list2': [{
    }],
    'list1|2': [{
        'src|+1': [
            Random.dataImage('200x150', Random.color()),
            Random.dataImage('200x150', Random.color())
        ]
    }],
    'list3': [{
    }],
    'list4|4': [{
        'src|+1': [
            Random.dataImage('100x150', Random.color()),
            Random.dataImage('100x150', Random.color()),
            Random.dataImage('100x150', Random.color()),
            Random.dataImage('100x150', Random.color())
        ]
    }],

});
Mock.mock('/detaillist', {
    'object|': {
        'title': Random.ctitle(10),
        'price|10-1000':100,
        'sale|500-10000': 500,
        'city': Random.city(true), 
        'word': Random.ctitle(100),
        'pic': Random.dataImage('100x100', Random.color()),
        'wpic|5': [{
            'src|+1':[
                Random.dataImage('200x150', Random.color()),
                Random.dataImage('200x100', Random.color()),
                Random.dataImage('200x200', Random.color()),
                Random.dataImage('200x100', Random.color()),
                Random.dataImage('200x160', Random.color())
            ]
        }]
    }
});
