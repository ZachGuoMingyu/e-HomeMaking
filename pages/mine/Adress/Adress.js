Page({
  data: {
    items: [
      {
        title: '华润国际社区',
        brief: '苏州市 昆山市',
      },
      {
        title: '岸芷汀兰花园',
        brief: '苏州市 昆山市',
      },
      {
        title: '观湖壹号',
        brief: '苏州市 昆山市',
      },
    ],
    selectCity:'华润国际社区'
  },
  onLoad() {},
  click(e){
     console.log(e);
     console.log(e.target.dataset.id);
     this.setData({
       selectCity: e.target.dataset.id
     })
  },
  addAddress(){
    dd.navigateTo({ url: '../addAddress/addAddress' })
  }
});
