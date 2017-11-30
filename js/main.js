$(function(){
	var i =0;
	var timer = null;
	var long = $('#lun li').length;
	auto(i);
	$('#bo li').mouseover(function(){
		clearInterval(timer);
		$(this).addClass('on');
		$(this).siblings("li").removeClass('on');
		
		$('#lun').stop(true).animate({
			left:-$('#lun li').width()*$(this).index()+'px',
		})
		$('#bo li').mouseout(function(){
			i=$(this).index();//从当前索引开始
			auto(i);
		})
	})
	/*自动轮播函数*/	
	function auto (i){
		clearInterval(timer);
		timer = setInterval(function(){
			i++;
			if(i<long){	
				$('#lun').stop(true).animate({
					left:-$('#lun li').width()*i+'px',
				})
				$('#bo li').siblings("li").removeClass('on');
				$('#bo li').eq(i).addClass('on');
			}else{
				i=-1;
			}
		},2000)
	}
	/*隐藏显示框*/
	$('#box').mouseenter(function(){	
		$('#cai li').mouseover(function(){			
			$(this).addClass('active').siblings('li').removeClass('active');
			var j = $(this).index();
			$('#ff>div').stop('ture').eq(j).show().siblings('div').hide();
			$('#box').mouseleave(function(event){
				var ev = event||window.event;
				$('#cai li').removeClass('active');
				$('#ff>div').siblings('.lunbo').stop('ture').fadeIn();
				$('#ff>div').siblings('.one').stop('ture').fadeOut();
			    ev.stopPropagation();
			})			
		})				
	})
})