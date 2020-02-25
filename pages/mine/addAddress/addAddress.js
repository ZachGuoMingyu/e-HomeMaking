Page({
  data: {
    pickerVisible:false,
    city:''
  },
  onLoad() {},
  onSubmit(e) {
    my.alert({
      content: `数据：${JSON.stringify(e.detail.value)}`,
    });
    
  },
  onPickerTap(){
    this.setData({
      pickerVisible:true
    })
  },
  addressPickerChange(e){
    console.log(e.value.province + e.value.city + e.value.county);
    let cityName = e.value.province + e.value.city + e.value.county;
    this.setData({
      pickerVisible:false,
      city:cityName
    })
  }
});
