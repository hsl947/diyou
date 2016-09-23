$('.layer-btn1').on('click',function(){
  //iframe层-禁滚动条
  layer.open({
    type: 2,
    title: '新建收款',
    area: ['730px', '690px'],
    content: ['./popup1.html', 'no']
  });
    
})

$('.layer-btn2').on('click',function(){
  //iframe层-禁滚动条
  layer.open({
    type: 2,
    title: '新建收款',
    area: ['740px', '580px'],
    content: ['./popup2.html', 'no']
  });
})

$('.layer-btn3').on('click',function(){
  //iframe层-禁滚动条
  layer.open({
    type: 2,
    title: '新建收款',
    area: ['730px', '440px'],
    content: ['./popup3.html', 'no']
  });
})
