$(document).ready(function() {
  var prh=$('.pr-img').width();
  $('.pr-img').height(prh);
  var cmsh=$('.sub-img').height();
  $('.sub-banner').height(cmsh);
  var blogh=$('.blogimg').height();
  $('.blog-img').height(blogh);
  var btnh=$('.btnpr').width();
  $('.btnpr').height(btnh);
  var prdetail=$('#carousel-prdetail').height();
  prdetail=parseInt+(prdetail,10);
  btnh=parseInt+(prdetail,10);
  prdetail+=btnh;
  $('.carousel-detail').height(prdetail);
  $('#categories').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          
        },
        600: {
          items: 3,
          
        },
        1000: {
          items: 5,
          
          
        },
        1200: {
            items: 6,
            nav:false,
            loop:true,
            margin: 24,
            autoplay:true,
            autoplaytimeout: 1000
          }
      }
    })
    $('#brands').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          
        },
        600: {
          items: 3,
          
        },
        1000: {
          items: 5,
          
          
        },
        1200: {
            items: 6,
            nav:false,
            loop:true,
            margin: 24,
            autoplay:true,
            autoplaytimeout: 1000
          }
      }
    })
    $('#imgslide').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          
        },
        600: {
          items: 3,
          
        },
        1000: {
          items: 5,
          
          
        },
        1200: {
            items: 6,
            nav:false,
            loop:true,
            margin: 24,
            autoplay:true,
            autoplaytimeout: 1000
          }
      }
    })
  })
  $(window).resize(function(){
    var prh=$('.pr-img').width();
    $('.pr-img').height(prh);
    var cmsh=$('.sub-img').height();
    $('.sub-banner').height(cmsh);
    var blogh=$('.blogimg').height();
    $('.blog-img').height(blogh);
    var btnh=$('.btnpr').width();
    $('.btnpr').height(btnh);
    var prdetail=$('#carousel-prdetail').height();
    prdetail=parseInt+(prdetail,10);
    btnh=parseInt+(prdetail,10);
    prdetail+=btnh;
    $('.carousel-detail').height(prdetail);
  })

  /* countdown */
  function makeTimer() {

    //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
      var endTime = new Date("10 October 2024 23:59:00 GMT+07:00");			
        endTime = (Date.parse(endTime) / 1000);
  
        var now = new Date();
        now = (Date.parse(now) / 1000);
  
        var timeLeft = endTime - now;
  
        var days = Math.floor(timeLeft / 86400); 
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
  
        $("#days").html(days + "<span>DAYS</span>");
        $("#hours").html(hours + "<span>HRS</span>");
        $("#minutes").html(minutes + "<span>MINS</span>");
        $("#seconds").html(seconds + "<span>SECS</span>");		
  
    }
  
    setInterval(function() { makeTimer(); }, 1000);
    $('#btn-filter').click(function(){
      $('#sidebar').toggle('slide');
    })
    $('#button-sidebar-close').click(function(){
      $('#sidebar').toggle('slide');
    })

    var QtyInput = (function () {
      var $qtyInputs = $(".qty-input");
      if (!$qtyInputs.length) {
        return;
      }
      var $inputs = $qtyInputs.find(".product-qty");
      var $countBtn = $qtyInputs.find(".qty-count");
      var qtyMin = parseInt($inputs.attr("min"));
      var qtyMax = parseInt($inputs.attr("max"));
      $inputs.change(function () {
        var $this = $(this);
        var $minusBtn = $this.siblings(".qty-count--minus");
        var $addBtn = $this.siblings(".qty-count--add");
        var qty = parseInt($this.val());
        if (isNaN(qty) || qty <= qtyMin) {
          $this.val(qtyMin);
          $minusBtn.attr("disabled", true);
        } else {
          $minusBtn.attr("disabled", false);
          if(qty >= qtyMax){
            $this.val(qtyMax);
            $addBtn.attr('disabled', true);
          } else {
            $this.val(qty);
            $addBtn.attr('disabled', false);
          }
        }
      });
      $countBtn.click(function () {
        var operator = this.dataset.action;
        var $this = $(this);
        var $input = $this.siblings(".product-qty");
        var qty = parseInt($input.val());
        if (operator == "add") {
          qty += 1;
          if (qty >= qtyMin + 1) {
            $this.siblings(".qty-count--minus").attr("disabled", false);
          }
          if (qty >= qtyMax) {
            $this.attr("disabled", true);
          }
        } else {
          qty = qty <= qtyMin ? qtyMin : (qty -= 1);	
          if (qty == qtyMin) {
            $this.attr("disabled", true);
          }
          if (qty < qtyMax) {
            $this.siblings(".qty-count--add").attr("disabled", false);
          }
        }
        $input.val(qty);
      });
    })();