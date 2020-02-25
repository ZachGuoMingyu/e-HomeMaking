Page({
  data: {
    items1: [
      {
        title: '1.优惠券如何使用？',
        arrow: false,
      },
      {
        title: '2.取消订单后钱什么时候到账？',
        arrow: false,
      },
      {
        title: '3.可以固定同一个阿姨服务吗？',
        arrow: false,
      },
      {
        title: '4.如何选择上一次服务的阿姨？',
        arrow: false,
      },
      {
        title: '5.预约成功后在哪查看？',
        arrow: false,
      },
    ],
    items2: [
      {
        icon:'../../../images/dingdanxiangguan.png',
        text: '订单相关',
        page:'test'
      },
      {
        icon:'../../../images/kehuduan.png',
        text: '客户端使用',
        page:'test'
      },
      {
        icon:'../../../images/youhuiquan.png',
        text: '优惠券与活动',
        page:'test'
      },
      {
        icon:'../../../images/zhifu.png',
        text: '支付与费用',
        page:'test'
      },
      {
        icon:'../../../images/fuwu.png',
        text: '服务相关',
        page:'test'
      },
    ],
  },
  onLoad() {},
  onItemClick1(ev) {
    console.log(ev);
    var index = ev.index;
    let title = this.data.items1[index].title;
    dd.alert({
      title: title,
    });
  },
  onItemClick2(ev) {
    console.log(ev.detail.index);
    var index = ev.detail.index;
    let title = this.data.items2[index].text;
    dd.alert({
      title: title,
    });
  },
});
