$(function(){
	// header start
	(function(){
		var $ordericon = $("#h_main .h_m_right .h_m_r_ordericon");
		var $hide = $("#h_main .h_m_right .h_m_r_ordericon .h_m_r_ordericon_hide");
		// jquery.hove方法第一个func代表鼠标移入操作，第二个func代表鼠标移出操作
		// display block代表显示 none代表隐藏
		$ordericon.hover(function(){
			$hide.stop(true).slideDown();
		},function(){
			$hide.stop(true).slideUp();
		});
		
		var $search = $("#nav_search");
		var $input = $("#n_s_input input");
		var $n_s_hide = $("#n_s_input .n_s_hide")
		$input.focus(function(){
			// addClass 向search中添加一个类 focus
			$search.addClass("focus");
			$n_s_hide.addClass("focus")
			// show方法如果元素被隐藏则显示该元素
			$n_s_hide.show();
			}).blur(function(){
				// setTimeout设置函数等待2毫秒运行
				setTimeout(function(){
				$search.removeClass("focus");
				// hide的方法就是改变样式为：display:none
				$n_s_hide.hide();
				}, 200);
				
			});
			
		// 鼠标滑动到class为n_w_one的地方进行展示
		var $product = $("#n_w_product");
		var $one = $("#nav #nav_main .n_w_one");
	
		var $p_ul = $("#n_w_product .n_w_p_list ul");
		
		$one.hover(function(){
			// index 属性可返回下拉列表中选项的索引位置。
			var _index = $(this).index();
			$product.stop(true).slideDown();
			// eq() 方法将匹配元素集缩减值指定 index 上的一个
			// siblings() 方法返回被选元素的所有同级元素
			// hide隐藏元素
			$p_ul.eq(_index).show().siblings().hide();
		},function(){
			$product.stop(true).slideUp();
		});	
		
		$product.hover(function(){
			$(this).stop(true).slideDown();
		},function(){
			$(this).stop(true).slideUp();
		});
		
		var $tabli = $("#b_main .b_m_tab li");
		var len = $tabli.length;
		var $picli = $("#b_main .b_m_pic li");
		var _index = 0;
		var $btn = $("#b_main .b_m_btn div");
		var $b_main = $("#b_main");
		var timer = null;
		$tabli.hover(function(){
			$(this).addClass("hover");
		},function(){
			$(this).removeClass("hover");
		}).click(function(){
			_index = $(this).index();
			// eq() 方法将匹配元素集缩减值指定 index 上的一个
			// siblings() 方法返回被选元素的所有同级元素
			// fadeIn() 使用淡入效果显示所有 <p> 元素 fadeOut()使用淡出效果来隐藏一个 元素
			// addClass 向tabli中添加一个click类属性
			// $picli使用eq选中index对应元素使用fadeIn淡入，再将其他同级元素谈出隐藏
			plays();
		});
		// 点击左右按钮
		$btn.click(function(){
			var index = $(this).index();
			// 若点击的是右按钮
			if(index==1){
				_index ++;
				if(_index>len-1){
					_index = 0;
				}
				// 调用封装的函数
				plays();
			}else{
				_index --;
				if(_index<0){
					_index = 4;
				}
				// 调用封装的函数
				plays();
			}
		})
		// 如果有相同代码可使用函数
		function plays(){
			$tabli.eq(_index).addClass("click").siblings().removeClass("click");
			$picli.eq(_index).fadeIn().siblings().fadeOut();
		}
		
		function auto(){
			// setInterval 添加定时器
			timer = setInterval(function(){
				_index ++;
				if(_index>len-1){
					_index = 0;
				}
				// 调用封装的函数
				plays();
			},3000);
		};
		auto();
		// 鼠标移入b_main 停止运行定时器
		$b_main.hover(function(){
			// clearInterval 清除指定定时器
			clearInterval(timer);
		},function(){
			// 鼠标移出继续执行auto
			auto();
		})
		
		// 左侧nav的二级导航
		var $nav_li = $("#b_nav ul li");
		$nav_li.hover(function(){
			// 将对应的hide显示
			$(this).find(".b_n_hide").show();
		},function(){
			// 将对应的hide隐藏
			$(this).find(".b_n_hide").hide();
		})
	})();
});
