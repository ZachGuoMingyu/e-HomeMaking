Page({
  data: {
    
    tabs: [
      {
        title: '全部订单',
      },
      {
        title: '待付款',
      },
      { title: '待服务' },
      { title: '待评价' },
    ],
    activeTab: 0,
    title:'',
    winWidth: 0,
    winHeight: 0,
  },
  onload(){
      
  },
  onShow(){
    var that = this;
    /** 
     * 获取系统信息 
     */
    dd.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
  },
  /** 
   * 滑动切换tab 
   */
  onChange: function (e) {
    console.log(e.detail.current);
    var that = this;
    that.setData({
       activeTab: e.detail.current
        });
  },
  handleTabClick({ index }) {
    this.setData({
      activeTab: index,
    });
    console.log(index);
  },
  handleTabChange({ index }) {
    this.setData({
      activeTab: index,
    });
  },
  handlePlusClick() {
    my.alert({
      content: 'plus clicked',
    });
  },
});
