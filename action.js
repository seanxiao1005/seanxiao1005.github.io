// lifeTime 祯数
const color1 = {
    h: 26,
    s: '87%',
    l: '48%',
    a: '100%'
};
const color2 = {
    h: 197,
    s: '100%',
    l: '50%',
    a: '80%'
};
const color3 = {
    h: 0,
    s: '100%',
    l: '50%',
    a: '80%'
};
const points1 = [];
const points2 = [];
const Actions = [{
    lifeTime: 120,
    texts: [{
        text: '生',
        hsla: color1
    }, {
        text: '日',
        hsla: color1
    }, {
        text: '快',
        hsla: color1
    }, {
        text: '乐',
        hsla: color1
    }, ]
}, {
    lifeTime: 120,
    texts: [{
        text: '平',
        hsla: color2
    }, {
        text: '安',
        hsla: color2
    }, {
        text: '喜',
        hsla: color2
    }, {
        text: '乐',
        hsla: color2
    }, ]
}, {
    lifeTime: 90,
    func: (width, height) => {
        if (!points1.length) {
            for (let i = 0; i < 1200; i++) {
                let x = (i - 1200 / 2) / 300;
                let y = Math.sqrt(Math.abs(x)) - Math.sqrt(Math.cos(x)) * Math.cos(30 * x);
                if (!isNaN(y)) {
                    points1.push({
                        x,
                        y
                    })
                }
            }
        }
        const p = points1[~~(Math.random() * points1.length)]
        const radius = Math.min(width * 0.4, height * 0.4);
        return {
            x: p.x * radius / 2,
            y: p.y * radius / 2,
            z: ~~(Math.random() * 30),
            color: {
                h: 0,
                s: '100%',
                l: '70%',
                a: '80%'
            }
        };
    }
}, {
    lifeTime: 180,
    texts: [{
        text: 'I',
        hsla: color3
    }, {
        text: 'X',
        hsla: color3
    }, {
        text: 'I',
        hsla: color3
    }, ]
}, ]


// 感谢ES2049，代码分享from https://juejin.im/post/6844903704491982856