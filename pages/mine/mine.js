Page({
  data: {
    itemsThumb: [
      {
        thumb: '../../../images/changyongdizhi.png',
        title: '常用地址',
        arrow: true,
      },
      {
        thumb: '../../../images/lianxidianhua.png',
        title: '联系电话',
      }
    ],
  },
  onLoad() {},
  onItemClick(ev) {
    if(ev.index === 0){
      dd.navigateTo({ url: './Adress/Adress' })
    }else{
    console.log(ev);
    var index = ev.index;
    let title = this.data.itemsThumb[index].title;
    dd.alert({
      title: '联系我们',
      content: 'xxxx-xxxxxx',
      buttonText: '我知道了',
      success: () => {
        
      }
    });
    }
  },
});
