Page({
  data:{
    images:[
      {src:'../../../images/11.png'},
      {src:'../../../images/22.png'},
      {src:'../../../images/33.png'}
    ],
    list1: [
      {
        icon: '../../../images/xihu.png',
        text: '洗护',
        page:'xihu'
      },
      {
        icon: '../../../images/baojie.png',
        text: '保洁',
        page:'baojie'
      },
      {
        icon: '../../../images/kanhuxiaohai.png',
        text: '看护',
        page:'kanhuxiaohai'
      },
      {
        icon: '../../../images/yuesao.png',
        text: '月嫂',
        page:'yuesao'
      },
      {
        icon: '../../../images/qita.png',
        text: '其他',
        page:'qita'
      },
      {
        icon: '../../../images/jingqingqidai.png',
        text: '敬请期待',
        page:'jingqingqidai'
      }
    ],
    list2: [
      {
        icon: '../../../images/a.png',
        text: '洗衣',
        page:'xihu'
      },
      {
        icon: '../../../images/b.png',
        text: '洗鞋',
        page:'baojie'
      },
      {
        icon: '../../../images/c.png',
        text: '看护',
        page:'kanhuxiaohai'
      },
      {
        icon: '../../../images/d.png',
        text: '周期保洁',
        page:'yuesao'
      },
      {
        icon: '../../../images/e.png',
        text: '家电维修',
        page:'qita'
      },
      {
        icon: '../../../images/f.png',
        text: '家电清洗',
        page:'jingqingqidai'
      },
      {
        icon: '../../../images/g.png',
        text: '吸油烟机清洗',
        page:'jingqingqidai'
      },
      {
        icon: '../../../images/h.png',
        text: '钟点工',
        page:'jingqingqidai'
      },
      {
        icon: '../../../images/i.png',
        text: '新房开荒',
        page:'jingqingqidai'
      }
    ],
  },
  onLoad(query) {
    
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  //图片点击
  imageClick(e){
    dd.alert({
      title: '第'+e.currentTarget.dataset.id+'张',
    });
  },
  onItemClick(ev) {
    console.log(ev.detail.index);
    var index = ev.detail.index;
    let title = this.data.list1[index].text;
    dd.alert({
      title: title,
    });
  },
  onItemClick2(ev) {
    console.log(ev.detail.index);
    var index = ev.detail.index;
    let title = this.data.list2[index].text;
    dd.alert({
      title: title,
    });
  },
});
