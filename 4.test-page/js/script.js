(function(){"use strict";$(document).ready(function(){var e,n,r,s,t,o,a,i,c,l,d,u,p,h,g,f,m,b,v,C,y;for(l=1,r=[];30>=l;)r.push("<option>"+l+"</option>"),l++;for($("#day").html(r),l=0,d=["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"],u=[];l<d.length;)u.push("<option>"+d[l]+"</option>"),l++;for($("#month").html(u),l=1930,y=[];l<=(new Date).getFullYear()-14;)y.push("<option>"+l+"</option>"),l++;return $("#year").html(y),$("#year>option:contains('1970')").prop("selected",!0),s=function(e){for(l=1,$("#day").empty(),r=[];e>=l;)r.push("<option>"+l+"</option>"),l++;return $("#day").html(r)},$("#month").change(function(){var e;switch($("#month>option:selected").val()){case"февраль":return e=$("#year>option:selected").val(),s(e%4||e%100||e%400?e%4||e%100?e%4?28:29:28:29);case"январь":case"апрель":case"июнь":case"сентябрь":case"ноябрь":return s(30);default:return s(31)}}),$("#year").change(function(){var e;switch($("#month>option:selected").val()){case"февраль":return e=$("#year>option:selected").val(),s(e%4||e%100||e%400?e%4||e%100?e%4?28:29:28:29)}}),m=$('input[name="surname"]'),p=$('input[name="name"]'),e=$('input[name="birthplace"]'),o=$(".progressbar td:first-child>span"),f=$(".progressbar td:nth-child(2)>span"),C=$(".progressbar td:nth-child(3)>span"),a=$(".progressbar td:nth-child(4)>span"),t=$(".progressbar td:nth-child(5)>span"),g=/^[а-я]/i,n=function(e,n){return n.removeClass(),e.removeClass(),e.val().length>=2&&g.test(e.val())?(e.addClass("border--success"),n.addClass("progressbar__division--done")):""===e.val()?n.addClass("progressbar__division--not-started"):(e.addClass("border--danger"),n.addClass("progressbar__division--during"))},m.on("propertychange input",function(){return n(m,o)}),p.on("propertychange input",function(){return n(p,f)}),e.on("propertychange input",function(){return n(e,C)}),v=$('label[for="change-surname--yes"]'),b=$('label[for="change-surname--no"]'),$("#change-surname--no").prop("checked",!0),b.addClass("bg--select"),v.on("click",function(){return b.removeClass(),v.addClass("bg--select")}),b.on("click",function(){return v.removeClass(),b.addClass("bg--select")}),c=$('label[for="gender--yes"]'),i=$('label[for="gender--no"]'),$("#gender--yes").prop("checked",!0),c.addClass("bg--select"),c.on("click",function(){return i.removeClass(),c.addClass("bg--select")}),i.on("click",function(){return c.removeClass(),i.addClass("bg--select")}),h=$(".navigation"),$("#burger").on("click",function(){return h.toggleClass("hide")}),$(window).on("resize",function(){return $(window).width()>=688?h.removeClass("hide"):void 0})})}).call(this);