(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"111H":function(t,e){!function(t,e,i,a){var l="jarvisWidgets",o=("ontouchstart"in e||e.DocumentTouch&&i instanceof DocumentTouch?"touchstart":"click")+"."+l;function s(e,i){this.obj=t(e),this.o=t.extend({},t.fn[l].defaults,i),this.objId=this.obj.attr("id"),this.pwCtrls=".jarviswidget-ctrls",this.widget=this.obj.find(this.o.widgets),this.toggleClass=this.o.toggleClass.split("|"),this.editClass=this.o.editClass.split("|"),this.fullscreenClass=this.o.fullscreenClass.split("|"),this.customClass=this.o.customClass.split("|"),this.storage={enabled:this.o.localStorage},this.initialized=!1,this.init()}s.prototype={_runLoaderWidget:function(t){!0===this.o.indicator&&t.parents(this.o.widgets).find(".jarviswidget-loader:first").stop(!0,!0).fadeIn(100).delay(this.o.indicatorTime).fadeOut(100)},_getPastTimestamp:function(t){var e=new Date(t),i=e.getMonth()+1,a=e.getDate(),l=e.getFullYear(),o=e.getHours(),s=e.getMinutes(),n=e.getUTCSeconds();return i<10&&(i="0"+i),a<10&&(a="0"+a),o<10&&(o="0"+o),s<10&&(s="0"+s),n<10&&(n="0"+n),this.o.timestampFormat.replace(/%d%/g,a).replace(/%m%/g,i).replace(/%y%/g,l).replace(/%h%/g,o).replace(/%i%/g,s).replace(/%s%/g,n)},_loadAjaxFile:function(e,i,a){var l=this;e.find(".widget-body").load(i,function(i,a,o){var s=t(this);if("error"==a&&s.html('<h4 class="alert alert-danger">'+l.o.labelError+"<b> "+o.status+" "+o.statusText+"</b></h4>"),"success"==a){var n=e.find(l.o.timestampPlaceholder);n.length&&n.html(l._getPastTimestamp(new Date)),"function"==typeof l.o.afterLoad&&l.o.afterLoad.call(this,e)}l=null}),this._runLoaderWidget(a)},_loadKeys:function(){if(!0===this.o.ajaxnav){var t=location.hash.replace(/^#/,"");this.storage.keySettings="Plugin_settings_"+t+"_"+this.objId,this.storage.keyPosition="Plugin_position_"+t+"_"+this.objId}else!1===this.initialized&&(t=this.o.pageKey||location.pathname,this.storage.keySettings="jarvisWidgets_settings_"+t+"_"+this.objId,this.storage.keyPosition="jarvisWidgets_position_"+t+"_"+this.objId)},_saveSettingsWidget:function(){var e=this.storage;this._loadKeys();var i=this.obj.find(this.o.widgets).map(function(){var e={};return e.id=t(this).attr("id"),e.style=t(this).attr("data-widget-attstyle"),e.title=t(this).children("header").children("h2").text(),e.hidden="none"==t(this).css("display")?1:0,e.collapsed=t(this).hasClass("jarviswidget-collapsed")?1:0,e}).get(),a=JSON.stringify({widget:i});e.enabled&&e.getKeySettings!=a&&(localStorage.setItem(e.keySettings,a),e.getKeySettings=a),"function"==typeof this.o.onSave&&this.o.onSave.call(this,null,a,e.keySettings)},_savePositionWidget:function(){var e=this,i=e.storage;e._loadKeys();var a=e.obj.find(e.o.grid+".sortable-grid").map(function(){return{section:t(this).find(e.o.widgets).map(function(){return{id:t(this).attr("id")}}).get()}}).get(),l=JSON.stringify({grid:a});i.enabled&&i.getKeyPosition!=l&&(localStorage.setItem(i.keyPosition,l),i.getKeyPosition=l),"function"==typeof e.o.onSave&&e.o.onSave.call(this,l,i.keyPosition)},init:function(){var e=this;if(!e.initialized){if(e._initStorage(e.storage),t("#"+e.objId).length||alert("It looks like your using a class instead of an ID, dont do that!"),!0===e.o.rtl&&t("body").addClass("rtl"),t(e.o.grid).each(function(){t(this).find(e.o.widgets).length&&t(this).addClass("sortable-grid")}),e.storage.enabled&&e.storage.getKeyPosition){var i=JSON.parse(e.storage.getKeyPosition);for(var a in i.grid){var s=e.obj.find(e.o.grid+".sortable-grid").eq(a);for(var n in i.grid[a].section)s.append(t("#"+i.grid[a].section[n].id))}}if(e.storage.enabled&&e.storage.getKeySettings){var r=JSON.parse(e.storage.getKeySettings);for(var a in r.widget){var d=t("#"+r.widget[a].id);r.widget[a].style&&d.removeClassPrefix("jarviswidget-color-").addClass(r.widget[a].style).attr("data-widget-attstyle",""+r.widget[a].style),1==r.widget[a].hidden?d.hide(1):d.show(1).removeAttr("data-widget-hidden"),1==r.widget[a].collapsed&&d.addClass("jarviswidget-collapsed").children("div").hide(1),d.children("header").children("h2").text()!=r.widget[a].title&&d.children("header").children("h2").text(r.widget[a].title)}}if(e.widget.each(function(){var i,a,l,o,s,n,r=t(this),d=t(this).children("header");if(!d.parent().attr("role")){!0===r.data("widget-hidden")&&r.hide(),!0===r.data("widget-collapsed")&&r.addClass("jarviswidget-collapsed").children("div").hide(),i=!0===e.o.customButton&&void 0===r.data("widget-custombutton")&&0!==e.customClass[0].length?'<a href="javascript:void(0);" class="button-icon jarviswidget-custom-btn"><i class="'+e.customClass[0]+'"></i></a>':"",a=!0===e.o.deleteButton&&void 0===r.data("widget-deletebutton")?'<a href="javascript:void(0);" class="button-icon jarviswidget-delete-btn" rel="tooltip" title="Delete" data-placement="bottom"><i class="'+e.o.deleteClass+'"></i></a>':"",l=!0===e.o.editButton&&void 0===r.data("widget-editbutton")?'<a href="javascript:void(0);" class="button-icon jarviswidget-edit-btn" rel="tooltip" title="Edit" data-placement="bottom"><i class="'+e.editClass[0]+'"></i></a>':"",o=!0===e.o.fullscreenButton&&void 0===r.data("widget-fullscreenbutton")?'<a href="javascript:void(0);" class="button-icon jarviswidget-fullscreen-btn" rel="tooltip" title="Fullscreen" data-placement="bottom"><i class="'+e.fullscreenClass[0]+'"></i></a>':"",!0===e.o.colorButton&&void 0===r.data("widget-colorbutton")&&d.prepend('<div class="widget-toolbar"><a data-toggle="dropdown" class="dropdown-toggle color-box selector" href="javascript:void(0);"></a><ul class="dropdown-menu arrow-box-up-right color-select pull-right"><li><span class="bg-color-green" data-widget-setstyle="jarviswidget-color-green" rel="tooltip" data-placement="left" data-original-title="Green Grass"></span></li><li><span class="bg-color-greenDark" data-widget-setstyle="jarviswidget-color-greenDark" rel="tooltip" data-placement="top" data-original-title="Dark Green"></span></li><li><span class="bg-color-greenLight" data-widget-setstyle="jarviswidget-color-greenLight" rel="tooltip" data-placement="top" data-original-title="Light Green"></span></li><li><span class="bg-color-purple" data-widget-setstyle="jarviswidget-color-purple" rel="tooltip" data-placement="top" data-original-title="Purple"></span></li><li><span class="bg-color-magenta" data-widget-setstyle="jarviswidget-color-magenta" rel="tooltip" data-placement="top" data-original-title="Magenta"></span></li><li><span class="bg-color-pink" data-widget-setstyle="jarviswidget-color-pink" rel="tooltip" data-placement="right" data-original-title="Pink"></span></li><li><span class="bg-color-pinkDark" data-widget-setstyle="jarviswidget-color-pinkDark" rel="tooltip" data-placement="left" data-original-title="Fade Pink"></span></li><li><span class="bg-color-blueLight" data-widget-setstyle="jarviswidget-color-blueLight" rel="tooltip" data-placement="top" data-original-title="Light Blue"></span></li><li><span class="bg-color-teal" data-widget-setstyle="jarviswidget-color-teal" rel="tooltip" data-placement="top" data-original-title="Teal"></span></li><li><span class="bg-color-blue" data-widget-setstyle="jarviswidget-color-blue" rel="tooltip" data-placement="top" data-original-title="Ocean Blue"></span></li><li><span class="bg-color-blueDark" data-widget-setstyle="jarviswidget-color-blueDark" rel="tooltip" data-placement="top" data-original-title="Night Sky"></span></li><li><span class="bg-color-darken" data-widget-setstyle="jarviswidget-color-darken" rel="tooltip" data-placement="right" data-original-title="Night"></span></li><li><span class="bg-color-yellow" data-widget-setstyle="jarviswidget-color-yellow" rel="tooltip" data-placement="left" data-original-title="Day Light"></span></li><li><span class="bg-color-orange" data-widget-setstyle="jarviswidget-color-orange" rel="tooltip" data-placement="bottom" data-original-title="Orange"></span></li><li><span class="bg-color-orangeDark" data-widget-setstyle="jarviswidget-color-orangeDark" rel="tooltip" data-placement="bottom" data-original-title="Dark Orange"></span></li><li><span class="bg-color-red" data-widget-setstyle="jarviswidget-color-red" rel="tooltip" data-placement="bottom" data-original-title="Red Rose"></span></li><li><span class="bg-color-redLight" data-widget-setstyle="jarviswidget-color-redLight" rel="tooltip" data-placement="bottom" data-original-title="Light Red"></span></li><li><span class="bg-color-white" data-widget-setstyle="jarviswidget-color-white" rel="tooltip" data-placement="right" data-original-title="Purity"></span></li><li><a href="javascript:void(0);" class="jarviswidget-remove-colors" data-widget-setstyle="" rel="tooltip" data-placement="bottom" data-original-title="Reset widget color to default">Remove</a></li></ul></div>'),s=!0===e.o.toggleButton&&void 0===r.data("widget-togglebutton")?'<a href="javascript:void(0);" class="button-icon jarviswidget-toggle-btn" rel="tooltip" title="Collapse" data-placement="bottom"><i class="'+(!0===r.data("widget-collapsed")||r.hasClass("jarviswidget-collapsed")?e.toggleClass[1]:e.toggleClass[0])+'"></i></a>':"",n=!0===e.o.refreshButton&&!1!==r.data("widget-refreshbutton")&&r.data("widget-load")?'<a href="javascript:void(0);" class="button-icon jarviswidget-refresh-btn" data-loading-text="&nbsp;&nbsp;Loading...&nbsp;" rel="tooltip" title="Refresh" data-placement="bottom"><i class="'+e.o.refreshButtonClass+'"></i></a>':"";var c=e.o.buttonOrder.replace(/%refresh%/g,n).replace(/%delete%/g,a).replace(/%custom%/g,i).replace(/%fullscreen%/g,o).replace(/%edit%/g,l).replace(/%toggle%/g,s);""===n&&""===a&&""===i&&""===o&&""===l&&""===s||d.prepend('<div class="jarviswidget-ctrls">'+c+"</div>"),!0===e.o.sortable&&void 0===r.data("widget-sortable")&&r.addClass("jarviswidget-sortable"),r.find(e.o.editPlaceholder).length&&r.find(e.o.editPlaceholder).find("input").val(t.trim(d.children("h2").text())),d.append('<span class="jarviswidget-loader"><i class="fa fa-refresh fa-spin"></i></span>'),r.attr("role","widget").children("div").attr("role","content").prev("header").attr("role","heading").children("div").attr("role","menu")}}),!0===e.o.buttonsHidden&&t(e.o.pwCtrls).hide(),e.obj.find("[data-widget-load]").each(function(){var i=t(this),a=i.children(),l=i.data("widget-load"),o=1e3*i.data("widget-refresh");i.children(),i.find(".jarviswidget-ajax-placeholder").length||(i.children("widget-body").append('<div class="jarviswidget-ajax-placeholder">'+e.o.loadingLabel+"</div>"),i.data("widget-refresh")>0?(e._loadAjaxFile(i,l,a),t.intervalArr.push(setInterval(function(){e._loadAjaxFile(i,l,a)},o))):e._loadAjaxFile(i,l,a))}),!0===e.o.sortable&&jQuery.ui){var c=e.obj.find(e.o.grid+".sortable-grid").not("[data-widget-excludegrid]");c.sortable({items:c.find(e.o.widgets+".jarviswidget-sortable"),connectWith:c,placeholder:e.o.placeholderClass,cursor:"move",revert:!0,opacity:e.o.opacity,delay:200,cancel:".button-icon, #jarviswidget-fullscreen-mode > div",zIndex:1e4,handle:e.o.dragHandle,forcePlaceholderSize:!0,forceHelperSize:!0,update:function(t,i){e._runLoaderWidget(i.item.children()),e._savePositionWidget(),"function"==typeof e.o.onChange&&e.o.onChange.call(this,i.item)}})}!0===e.o.buttonsHidden&&e.widget.children("header").on("mouseenter."+l,function(){t(this).children(e.o.pwCtrls).stop(!0,!0).fadeTo(100,1)}).on("mouseleave."+l,function(){t(this).children(e.o.pwCtrls).stop(!0,!0).fadeTo(100,0)}),e._clickEvents(),e.storage.enabled&&(t(e.o.deleteSettingsKey).on(o,this,function(t){confirm(e.o.settingsKeyLabel)&&localStorage.removeItem(keySettings),t.preventDefault()}),t(e.o.deletePositionKey).on(o,this,function(t){confirm(e.o.positionKeyLabel)&&localStorage.removeItem(keyPosition),t.preventDefault()})),initialized=!0}},_initStorage:function(t){t.enabled=t.enabled&&!!function(){var t,e=+new Date;try{return localStorage.setItem(e,e),t=localStorage.getItem(e)==e,localStorage.removeItem(e),t}catch(i){}}(),this._loadKeys(),t.enabled&&(t.getKeySettings=localStorage.getItem(t.keySettings),t.getKeyPosition=localStorage.getItem(t.keyPosition))},_clickEvents:function(){var i=this,a=i.widget.children("header");function s(){if(t("#jarviswidget-fullscreen-mode").length){var a=t(e).height(),l=t("#jarviswidget-fullscreen-mode").children(i.o.widgets).children("header").height();t("#jarviswidget-fullscreen-mode").children(i.o.widgets).children("div").height(a-l-15)}}a.on(o,".jarviswidget-toggle-btn",function(e){var a=t(this),l=a.parents(i.o.widgets);i._runLoaderWidget(a),l.hasClass("jarviswidget-collapsed")?a.children().removeClass(i.toggleClass[1]).addClass(i.toggleClass[0]).parents(i.o.widgets).removeClass("jarviswidget-collapsed").children("[role=content]").slideDown(i.o.toggleSpeed,function(){i._saveSettingsWidget()}):a.children().removeClass(i.toggleClass[0]).addClass(i.toggleClass[1]).parents(i.o.widgets).addClass("jarviswidget-collapsed").children("[role=content]").slideUp(i.o.toggleSpeed,function(){i._saveSettingsWidget()}),"function"==typeof i.o.onToggle&&i.o.onToggle.call(this,l),e.preventDefault()}),a.on(o,".jarviswidget-fullscreen-btn",function(e){var a=t(this).parents(i.o.widgets),l=a.children("div");i._runLoaderWidget(t(this)),t("#jarviswidget-fullscreen-mode").length?(t(".nooverflow").removeClass("nooverflow"),a.unwrap("div").children("div").removeAttr("style").end().find(".jarviswidget-fullscreen-btn:first").children().removeClass(i.fullscreenClass[1]).addClass(i.fullscreenClass[0]).parents(i.pwCtrls).children("a").show(),l.hasClass("jarviswidget-visible")&&l.hide().removeClass("jarviswidget-visible")):(t("body").addClass("nooverflow"),a.wrap('<div id="jarviswidget-fullscreen-mode"/>').parent().find(".jarviswidget-fullscreen-btn:first").children().removeClass(i.fullscreenClass[0]).addClass(i.fullscreenClass[1]).parents(i.pwCtrls).children("a:not(.jarviswidget-fullscreen-btn)").hide(),l.is(":hidden")&&l.show().addClass("jarviswidget-visible")),s(),"function"==typeof i.o.onFullscreen&&i.o.onFullscreen.call(this,a),e.preventDefault()}),t(e).on("resize."+l,function(){s()}),a.on(o,".jarviswidget-edit-btn",function(e){var a=t(this).parents(i.o.widgets);i._runLoaderWidget(t(this)),a.find(i.o.editPlaceholder).is(":visible")?t(this).children().removeClass(i.editClass[1]).addClass(i.editClass[0]).parents(i.o.widgets).find(i.o.editPlaceholder).slideUp(i.o.editSpeed,function(){i._saveSettingsWidget()}):t(this).children().removeClass(i.editClass[0]).addClass(i.editClass[1]).parents(i.o.widgets).find(i.o.editPlaceholder).slideDown(i.o.editSpeed),"function"==typeof i.o.onEdit&&i.o.onEdit.call(this,a),e.preventDefault()}),t(i.o.editPlaceholder).find("input").keyup(function(){t(this).parents(i.o.widgets).children("header").children("h2").text(t(this).val())}),a.on(o,"[data-widget-setstyle]",function(e){var a=t(this).data("widget-setstyle");t(this).parents(i.o.editPlaceholder).find("[data-widget-setstyle]").each(function(){t(this).data("widget-setstyle")}),t(this).parents(i.o.widgets).attr("data-widget-attstyle",""+a).removeClassPrefix("jarviswidget-color-").addClass(a),i._runLoaderWidget(t(this)),i._saveSettingsWidget(),e.preventDefault()}),a.on(o,".jarviswidget-custom-btn",function(e){var a=t(this).parents(i.o.widgets);i._runLoaderWidget(t(this)),t(this).children("."+i.customClass[0]).length?(t(this).children().removeClass(i.customClass[0]).addClass(i.customClass[1]),"function"==typeof i.o.customStart&&i.o.customStart.call(this,a)):(t(this).children().removeClass(i.customClass[1]).addClass(i.customClass[0]),"function"==typeof i.o.customEnd&&i.o.customEnd.call(this,a)),i._saveSettingsWidget(),e.preventDefault()}),a.on(o,".jarviswidget-delete-btn",function(e){var a=t(this).parents(i.o.widgets),l=a.attr("id"),o=a.children("header").children("h2").text();t.SmartMessageBox?t.SmartMessageBox({title:"<i class='fa fa-times' style='color:#ed1c24'></i> "+i.o.labelDelete+' "'+o+'"',content:i.o.deleteMsg,buttons:"[No][Yes]"},function(e){"Yes"==e&&(i._runLoaderWidget(t(this)),t("#"+l).fadeOut(i.o.deleteSpeed,function(){t(this).remove(),"function"==typeof i.o.onDelete&&i.o.onDelete.call(this,a)}))}):t("#"+l).fadeOut(i.o.deleteSpeed,function(){t(this).remove(),"function"==typeof i.o.onDelete&&i.o.onDelete.call(this,a)}),e.preventDefault()}),a.on(o,".jarviswidget-refresh-btn",function(e){var a=t(this).parents(i.o.widgets),l=a.data("widget-load"),o=a.children(),s=t(this);s.button("loading"),o.addClass("widget-body-ajax-loading"),setTimeout(function(){s.button("reset"),o.removeClass("widget-body-ajax-loading"),i._loadAjaxFile(a,l,o)},1e3),e.preventDefault()}),a=null},destroy:function(){var i="."+l;this.obj.find(this.o.grid+".sortable-grid").not("[data-widget-excludegrid]").sortable("destroy"),this.widget.children("header").off(i),t(this.o.deleteSettingsKey).off(i),t(this.o.deletePositionKey).off(i),t(e).off(i),this.obj.removeData(l)}},t.fn[l]=function(e){return this.each(function(){var i=t(this),a=i.data(l);a||i.data(l,a=new s(this,"object"==typeof e&&e)),"string"==typeof e&&a[e]()})},t.fn[l].defaults={grid:"section",widgets:".jarviswidget",localStorage:!0,deleteSettingsKey:"",settingsKeyLabel:"Reset settings?",deletePositionKey:"",positionKeyLabel:"Reset position?",sortable:!0,buttonsHidden:!1,toggleButton:!0,toggleClass:"min-10 | plus-10",toggleSpeed:200,onToggle:function(){},deleteButton:!0,deleteMsg:"Warning: This action cannot be undone",deleteClass:"trashcan-10",deleteSpeed:200,onDelete:function(){},editButton:!0,editPlaceholder:".jarviswidget-editbox",editClass:"pencil-10 | delete-10",editSpeed:200,onEdit:function(){},colorButton:!0,fullscreenButton:!0,fullscreenClass:"fullscreen-10 | normalscreen-10",fullscreenDiff:3,onFullscreen:function(){},customButton:!0,customClass:"",customStart:function(){},customEnd:function(){},buttonOrder:"%refresh% %delete% %custom% %edit% %fullscreen% %toggle%",opacity:1,dragHandle:"> header",placeholderClass:"jarviswidget-placeholder",indicator:!0,indicatorTime:600,ajax:!0,loadingLabel:"loading...",timestampPlaceholder:".jarviswidget-timestamp",timestampFormat:"Last update: %m%/%d%/%y% %h%:%i%:%s%",refreshButton:!0,refreshButtonClass:"refresh-10",labelError:"Sorry but there was a error:",labelUpdated:"Last Update:",labelRefresh:"Refresh",labelDelete:"Delete widget:",afterLoad:function(){},rtl:!1,onChange:function(){},onSave:function(){},ajaxnav:!0},t.fn.removeClassPrefix=function(e){return this.each(function(i,a){var l=a.className.split(" ").map(function(t){return 0===t.indexOf(e)?"":t});a.className=t.trim(l.join(" "))}),this}}(jQuery,window,document)},"1Ik6":function(t,e,i){"use strict";i.d(e,"a",function(){return a});var a=function(){function t(){}return t.prototype.ngOnInit=function(){},t}()},Uhp0:function(t,e,i){"use strict";i.d(e,"a",function(){return o}),i.d(e,"b",function(){return n});var a=i("CcnG"),l=i("Ip0R"),o=(i("1Ik6"),a.sb({encapsulation:2,styles:[],data:{}}));function s(t){return a.Ob(0,[(t()(),a.ub(0,0,null,null,1,"span",[],null,null,null,null,null)),(t()(),a.Mb(1,null,["> ",""]))],null,function(t,e){t(e,1,0,e.context.$implicit)})}function n(t){return a.Ob(0,[(t()(),a.ub(0,0,null,null,5,"div",[],null,null,null,null,null)),(t()(),a.ub(1,0,null,null,4,"h1",[["class","page-title txt-color-blueDark"]],null,null,null,null,null)),(t()(),a.ub(2,0,null,null,0,"i",[],[[8,"className",0]],null,null,null,null)),(t()(),a.Mb(3,null,[""," "])),(t()(),a.lb(16777216,null,null,1,null,s)),a.tb(5,278528,null,0,l.k,[a.T,a.Q,a.u],{ngForOf:[0,"ngForOf"]},null)],function(t,e){t(e,5,0,e.component.items.slice(1))},function(t,e){var i=e.component;t(e,2,0,a.wb(1,"fa-fw fa fa-",i.icon,"")),t(e,3,0,i.items[0])})}},jUDx:function(t,e,i){"use strict";var a={grid:"article",widgets:".jarviswidget",localStorage:!0,deleteSettingsKey:"#deletesettingskey-options",settingsKeyLabel:"Reset settings?",deletePositionKey:"#deletepositionkey-options",positionKeyLabel:"Reset position?",sortable:!0,buttonsHidden:!1,toggleButton:!0,toggleClass:"fa fa-minus | fa fa-plus",toggleSpeed:200,onToggle:function(){},deleteButton:!0,deleteMsg:"Warning: This action cannot be undone!",deleteClass:"fa fa-times",deleteSpeed:200,onDelete:function(){},editButton:!0,editPlaceholder:".jarviswidget-editbox",editClass:"fa fa-cog | fa fa-save",editSpeed:200,onEdit:function(){},colorButton:!0,fullscreenButton:!0,fullscreenClass:"fa fa-expand | fa fa-compress",fullscreenDiff:3,onFullscreen:function(){},customButton:!1,customClass:"folder-10 | next-10",customStart:function(){alert("Hello you, this is a custom button...")},customEnd:function(){alert("bye, till next time...")},buttonOrder:"%refresh% %custom% %edit% %toggle% %fullscreen% %delete%",opacity:1,dragHandle:"> header",placeholderClass:"jarviswidget-placeholder",indicator:!0,indicatorTime:600,ajax:!0,timestampPlaceholder:".jarviswidget-timestamp",timestampFormat:"Last update: %m%/%d%/%y% %h%:%i%:%s%",refreshButton:!0,refreshButtonClass:"fa fa-refresh",labelError:"Sorry but there was a error:",labelUpdated:"Last Update:",labelRefresh:"Refresh",labelDelete:"Delete widget:",afterLoad:function(){},rtl:!1,onChange:function(){},onSave:function(){},ajaxnav:!0};i("111H"),i.d(e,"a",function(){return l});var l=function(){function t(t){this.el=t}return t.prototype.ngAfterViewInit=function(){$("#widgets-grid",this.el.nativeElement).jarvisWidgets(a)},t}()},oFG5:function(t,e,i){"use strict";i.d(e,"a",function(){return l}),i.d(e,"b",function(){return o});var a=i("CcnG"),l=(i("jUDx"),a.sb({encapsulation:2,styles:[],data:{}}));function o(t){return a.Ob(0,[(t()(),a.ub(0,0,null,null,1,"section",[["class","sortable-grid"],["id","widgets-grid"]],null,null,null,null,null)),a.Db(null,0)],null,null)}},otId:function(t,e,i){"use strict";i.d(e,"a",function(){return a});var a=function(){function t(t,e){this.el=t,this.router=e,this.colorbutton=!0,this.editbutton=!0,this.togglebutton=!0,this.deletebutton=!0,this.fullscreenbutton=!0,this.custombutton=!1,this.collapsed=!1,this.sortable=!0,this.hidden=!1,this.load=!1,this.refresh=!1}return t.prototype.ngOnInit=function(){var t=this;this.widgetId=this.genId();var e=this.el.nativeElement;e.className+=" jarviswidget",this.sortable&&(e.className+=" jarviswidget-sortable"),this.color&&(e.className+=" jarviswidget-color-"+this.color),["colorbutton","editbutton","togglebutton","deletebutton","fullscreenbutton","custombutton","sortable"].forEach(function(i){t[i]||e.setAttribute("data-widget-"+i,"false")}),["hidden","collapsed"].forEach(function(i){t[i]&&e.setAttribute("data-widget-"+i,"true")})},t.prototype.genId=function(){if(this.name)return this.name;var e=this.el.nativeElement.querySelector("header h2"),i=e?e.textContent.trim():"jarviswidget-"+t.counter++;return i=i.toLowerCase().replace(/\W+/gm,"-"),this.router.url.substr(1).replace(/\//g,"-")+"--"+i},t.prototype.ngAfterViewInit=function(){var t=$(this.el.nativeElement);this.editbutton&&t.find(".widget-body").prepend('<div class="jarviswidget-editbox"><input class="form-control" type="text"></div>')},t.counter=0,t}()},qu3e:function(t,e,i){"use strict";i.d(e,"a",function(){return l}),i.d(e,"b",function(){return o});var a=i("CcnG"),l=(i("otId"),i("ZYCi"),a.sb({encapsulation:2,styles:[],data:{}}));function o(t){return a.Ob(0,[a.Db(null,0)],null,null)}}}]);