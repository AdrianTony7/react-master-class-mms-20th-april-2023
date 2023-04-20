
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="format-detection" content="telephone=no">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<meta name="description" content="" />
<meta name="keywords" content="" />
<meta name="robots" content="noindex,nofollow">
<link rel="canonical" href="https://lp.logrocket.com/blg/node-signup">
<link rel="shortcut icon" href="//v.fastcdn.co/u/f054cc68/62009037-0-favicon-bigger.png" type="image/ico">
<title>Signup for LogRocket</title>
<meta property="og:locale" content="en_US">
<meta property="og:type" content="article">
<meta property="og:title" content="">
<meta property="og:description" content="">
<meta property="og:site_name" content="">
<meta property="og:url" content="https://lp.logrocket.com/blg/node-signup">
<link rel="preload" as="script" href="//g.fastcdn.co/js/utils.cd5b4894ab46ac49c25b.js"></link>
<link rel="preload" as="script" href="//g.fastcdn.co/js/Cradle.c8a924beaefacc03f9bd.js"></link>
<link rel="preload" as="script" href="//g.fastcdn.co/js/LazyImage.90aa95d960c719e556c2.js"></link>
<link rel="preconnect dns-prefetch" href="https://fonts.gstatic.com" crossorigin></link>

<script>
  /*
    Caching Private Domain Suffix Finder v0.3.7
    Copyright (c) 2016, Sanford Whiteman/TEKNKL
    MIT License

    contains [JAAAulde/cookies v3.0.6](https://github.com/JAAulde/cookies)
    Copyright (c) 2005-2015, Jim Auldridge
    MIT License (https://raw.githubusercontent.com/JAAulde/cookies/master/LICENSE)
  */
  (function(f,k){(function(k,e){"object"===typeof module&&null!==module&&module.exports?module.exports=exports=e():"function"===typeof define&&define.amd?define(e):f[k]=e()})("cookies",function(){var m=f.document,e={expires:null,path:"/",domain:null,secure:!1},d=function(a){"object"===typeof f.console&&null!==f.console&&"function"===typeof f.console.warn&&(d=function(a){f.console.warn(a)},d(a))},g=function(a){var b,c;"object"!==typeof a||null===a?b=e:(b={expires:e.expires,path:e.path,domain:e.domain,secure:e.secure},"object"===typeof a.expires&&a.expires instanceof Date?b.expires=a.expires:"object"===typeof a.expires_at&&a.expires_at instanceof Date?(b.expires=a.expires_at,d('Cookie option "expires_at" has been deprecated. Rename to "expires". Support for "expires_at" will be removed in a version to come.')):"object"===typeof a.expiresAt&&a.expiresAt instanceof Date?(b.expires=a.expiresAt,d('Cookie option "expiresAt" has been deprecated. Rename to "expires". Support for "expiresAt" will be removed in a version to come.')):"number"===typeof a.hoursToLive&&0!==a.hoursToLive&&(c=new Date,c.setTime(c.getTime()+36E5*a.hoursToLive),b.expires=c,d('Cookie option "hoursToLive" has been deprecated. Rename to "expires" and prodvide a Date instance (see documentation). Support for "hoursToLive" will be removed in a version to come.')),"string"===typeof a.path&&""!==a.path&&(b.path=a.path),"string"===typeof a.domain&&""!==a.domain&&(b.domain=a.domain),!0===a.secure&&(b.secure=a.secure));return b},n=function(){return String.prototype.trim?function(a){return String.prototype.trim.call(a)}:function(){var a,b;a=/^\s+/;b=/\s+$/;return function(c){return c.replace(a,"").replace(b,"")}}()}(),l=function(){var a=/\d/,b=f.isNaN;return function(c){return null===c||!a.test(c)||b(c)}}(),p=function(){var a,b;a=JSON&&"function"===typeof JSON.parse?function(a){var b=null;if("string"===typeof a&&""!==a&&(a=n(a),""!==a))try{b=JSON.parse(a)}catch(t){b=null}return b}:function(){return null};b=/^(?:\{.*\}|\[.*\])$/;return function(){var c={},q=m.cookie.split(";"),f=q.length,e,d,g,h;for(e=0;e<f;e+=1){d=q[e].split("=");g=n(d.shift());d=1<=d.length?d.join("="):"";try{h=decodeURIComponent(d)}catch(r){h=d}try{h="true"===h?!0:"false"===h?!1:l(h)?b.test(h)?a(h):h:parseFloat(h)}catch(r){}c[g]=h}return c}}();return{get:function(a){var b,c,d=p();if("string"===typeof a)b=d[a]!==k?d[a]:null;else if("object"===typeof a&&null!==a)for(c in b={},a)Object.prototype.hasOwnProperty.call(a,c)&&(b[a[c]]=d[a[c]]!==k?d[a[c]]:null);else b=d;return b},filter:function(a){var b,c={},d=p();"string"===typeof a&&(a=new RegExp(a));for(b in d)Object.prototype.hasOwnProperty.call(d,b)&&b.match(a)&&(c[b]=d[b]);return c},set:function(a,b,c){if("object"!==typeof c||null===c)c={};if(b===k||null===b)b="",c.expires=new Date,c.expires.setFullYear(1978);else if(b=!0===b?"true":!1===b?"false":l(b)?b:String(b),"string"!==typeof b)if("object"===typeof JSON&&null!==JSON&&"function"===typeof JSON.stringify)b=JSON.stringify(b);else throw Error("cookies.set() could not be serialize the value");a=a+"="+encodeURIComponent(b);c=g(c);c=["object"===typeof c.expires&&c.expires instanceof Date?"; expires="+c.expires.toGMTString():"","; path="+c.path,"string"===typeof c.domain?"; domain="+c.domain:"",!0===c.secure?"; secure":""].join("");m.cookie=a+c},del:function(a,b){var c={},d;if("object"!==typeof b||null===b)b={};"boolean"===typeof a&&!0===a?c=this.get():"string"===typeof a&&(c[a]=!0);for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&"string"===typeof d&&""!==d&&this.set(d,null,b)},test:function(){var a=!1;this.set("test_cookies_jaaulde_js","data");"data"===this.get("test_cookies_jaaulde_js")&&(this.del("test_cookies_jaaulde_js"),a=!0);return a},setOptions:function(a){"object"!==typeof a&&(a=null);e=g(a)}}})})(this);function findPrivateSuffix(f){var k={},m=RegExp("(?:^|\\s|;)(?:_mch_auto_domain=)(.*?)(?:;|$)","ig"),e={},d,g;f=f||{};k[2]=!0;try{if(d=sessionStorage.getItem("shortestPrivateSuffix"),f.cache&&!d)try{sessionStorage.setItem("_mch_cache_test",""),sessionStorage.removeItem("_mch_cache_test"),k[1]=!0}catch(p){}}catch(p){}if(f.cache&&d)e.source=1;else{f=document.location.hostname.split(/\./);g=0;for(var n=f.length;g<n;g++){var l=f.slice(g).join(".");cookies.set("_mch_auto_domain",l,{domain:l})}for(f=document.cookie.toString();g=m.exec(f);)if(g=g[1],!d||g.length<d.length)d=g,cookies.del("_mch_auto_domain",{domain:g});e.source=2;1==k[1]&&sessionStorage.setItem("shortestPrivateSuffix",d)}e.cookieDomain="."+d;e.domainLevel=d.split(".").length;return e};
</script>
<script>
  function setupMunchkin() {
    if (!window.Munchkin || !window.Munchkin.init) {
      // extract core munchkin script
      var encodedSnippet = 'PHNjcmlwdCB0eXBlPSJ0ZXh0L2phdmFzY3JpcHQiPgooZnVuY3Rpb24oKSB7CiAgdmFyIGRpZEluaXQgPSBmYWxzZTsKICBmdW5jdGlvbiBpbml0TXVuY2hraW4oKSB7CiAgICBpZihkaWRJbml0ID09PSBmYWxzZSkgewogICAgICBkaWRJbml0ID0gdHJ1ZTsKICAgICAgTXVuY2hraW4uaW5pdCgnNzQwLUxLTS0yNjMnKTsKICAgIH0KICB9CiAgdmFyIHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsKICBzLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JzsKICBzLmFzeW5jID0gdHJ1ZTsKICBzLnNyYyA9ICcvL211bmNoa2luLm1hcmtldG8ubmV0L211bmNoa2luLmpzJzsKICBzLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkgewogICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSAnY29tcGxldGUnIHx8IHRoaXMucmVhZHlTdGF0ZSA9PSAnbG9hZGVkJykgewogICAgICBpbml0TXVuY2hraW4oKTsKICAgIH0KICB9OwogIHMub25sb2FkID0gaW5pdE11bmNoa2luOwogIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQocyk7Cn0pKCk7Cjwvc2NyaXB0Pg==';
      if (!encodedSnippet) {
        return;
      }
      var snippet = atob(encodedSnippet);
      var regexp = /^\<script[^\>]*\>([^]*)\<\/script\>/;
      var coreScript = snippet.match(regexp)[1];

      if (typeof findPrivateSuffix === 'function') {
        // set correct 'domainLevel' param in Munchkin.init function
        var suffixObject = findPrivateSuffix({ cache: true });
        coreScript = coreScript.replace(
          /Munchkin\.init\(([\'\"][\w\d\-]+[\'\"]).*\)/,
          'Munchkin.init($1, {domainLevel: '+suffixObject.domainLevel+'})'
        );
      }

      // execute Munchkin script
      eval(coreScript);
    }
  }
  setupMunchkin();
</script>

<link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic" />
<style type="text/css" media="screen">
    body{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:0;width:100%;font-family:Lato;font-weight:400;background:rgb(255,255,255);}a{text-decoration:none;color:inherit;cursor:pointer;}a:not(.btn):hover{text-decoration:underline;}input,select,textarea,p,h1,h2,h3,h4,h5,h6{margin:0;font-size:inherit;font-weight:inherit;}main{overflow:hidden;}u > span{text-decoration:inherit;}ol,ul{padding-left:2.5rem;margin:.625rem 0;}p{word-wrap:break-word;}h1 > span,h2 > span,h3 > span,h4 > span,h5 > span,h6 > span{display:block;word-wrap:break-word;}iframe{border:0;}*{box-sizing:border-box;}:root.js-text-scaling{--mobile-font-size:4vw;--default-font-size:16px;}.item-absolute{position:absolute;}.item-relative{position:relative;}.item-block{display:block;height:100%;width:100%;}.item-cover{z-index:1000030;}.item-breakword{word-wrap:break-word;}.item-content-box{box-sizing:content-box;}.hidden{display:none;}.clearfix{clear:both;}sup{margin-left:0.1rem;line-height:0;}@keyframes slide-down{from{opacity:0;transform:translateY(-50px);}}@keyframes fade-in{from{opacity:0;}}@supports (-webkit-overflow-scrolling:touch){@media (-webkit-min-device-pixel-ratio:2), (min-resolution:192dpi){.image[src$=".svg"]{width:calc(100% + 1px);}}}.show-for-sr{border:0 !important;clip:rect(1px,1px,1px,1px) !important;-webkit-clip-path:inset(50%) !important;clip-path:inset(50%) !important;height:1px !important;margin:-1px !important;overflow:hidden !important;padding:0 !important;position:absolute !important;width:1px !important;white-space:nowrap !important;}.headline{font-family:Lato;font-weight:700;}.section-fit{max-width:400px;}:root{--section-relative-margin:0 auto;}.section-relative{position:relative;margin:0 auto;}.js-text-scaling .section-relative{margin:var(--section-relative-margin);}.section-inner{height:100%;}#page-block-lg6mrzj27u{height:63.5625rem;max-width:100%;}#page-block-lg6mrzj27u .section-holder-border{border:0;}#page-block-lg6mrzj27u .section-block{background:rgb(117,74,188);height:63.5625rem;}#page-block-lg6mrzj27u .section-holder-overlay{display:none;}#element-44{top:1.0625rem;left:0.5625rem;height:2.3125rem;width:8.3125rem;z-index:18;}#element-44 .cropped{background:url(//v.fastcdn.co/u/f054cc68/61826933-0-LogRocket-white-larg.png) -0.6875rem -1.5625rem / 9.6875rem 5.5625rem;}#element-43{top:28.25rem;left:16.3125rem;height:34.375rem;width:8.6875rem;z-index:4;}#element-1{top:30.625rem;left:2.8125rem;height:31.1875rem;width:18.75rem;z-index:5;}.full-size{width:100%;height:100%;}.html-widget__text-center{text-align:center;}#element-15{top:6.1875rem;left:1.1875rem;height:4rem;width:22.5rem;z-index:6;color:#37465A;font-size:1.6718rem;line-height:2.025rem;text-align:left;}#element-15 .x_ed8d3663{text-align:left;line-height:2rem;font-size:1.6718rem;}#element-15 .x_f2074b6c{color:#ffffff;}#element-16{top:11.8125rem;left:1.8125rem;height:4.75rem;width:19.25rem;z-index:7;color:#37465A;font-size:0.9907rem;line-height:1.4rem;text-align:left;}#element-16 .x_ef245e2e{text-align:left;line-height:1.375rem;font-size:0.9907rem;}#element-16 .x_f2074b6c{color:#ffffff;}#element-16 .contents{color:rgb(55,70,90)!important;font-family:Lato!important;font-weight:400!important;padding:15px 15px 15px 25px!important;background:linear-gradient(272.55deg,rgb(126,84,191) 4.46%,rgb(139,80,215) 95.47%)!important;border-radius:15px!important;border:1px solid rgba(255,255,255,0.15)!important;}#element-20{top:13.6875rem;left:1.1875rem;height:1.25rem;width:1.25rem;z-index:10;}#element-20 .contents img{filter:drop-shadow(rgba(0,0,0,0.3) 0px 9px 13px)!important;}#element-17{top:17.1875rem;left:1.8125rem;height:4.75rem;width:19.25rem;z-index:8;color:#37465A;font-size:0.9907rem;line-height:1.4rem;text-align:left;}#element-17 .x_ef245e2e{text-align:left;line-height:1.375rem;font-size:0.9907rem;}#element-17 .x_f2074b6c{color:#ffffff;}#element-17 .contents{color:rgb(55,70,90)!important;font-family:Lato!important;font-weight:400!important;padding:15px 15px 15px 25px!important;background:linear-gradient(272.55deg,rgb(126,84,191) 4.46%,rgb(139,80,215) 95.47%)!important;border-radius:15px!important;border:1px solid rgba(255,255,255,0.15)!important;}#element-22{top:19rem;left:1.1875rem;height:1.25rem;width:1.25rem;z-index:11;}#element-22 .contents img{filter:drop-shadow(0px 9px 13px rgba(0,0,0,0.3))!important;}#element-18{top:22.5625rem;left:1.8125rem;height:4.75rem;width:19.25rem;z-index:9;color:#37465A;font-size:0.9907rem;line-height:1.4rem;text-align:left;}#element-18 .x_ef245e2e{text-align:left;line-height:1.375rem;font-size:0.9907rem;}#element-18 .x_f2074b6c{color:#ffffff;}#element-18 .contents{color:rgb(55,70,90)!important;font-family:Lato!important;font-weight:400!important;padding:15px 15px 15px 25px!important;background:linear-gradient(272.55deg,rgb(126,84,191) 4.46%,rgb(139,80,215) 95.47%)!important;border-radius:15px!important;border:1px solid rgba(255,255,255,0.15)!important;}#element-42{top:51rem;left:0.0625rem;height:12.375rem;width:8.6875rem;z-index:3;}#element-23{top:24.3125rem;left:1.1875rem;height:1.25rem;width:1.25rem;z-index:12;}#element-23 .contents img{filter:drop-shadow(0px 9px 13px rgba(0,0,0,0.3))!important;}#page_block_footer{height:26.3125rem;max-width:100%;}#page_block_footer .section-holder-border{border:0;}#page_block_footer .section-block{background:rgb(117,74,188);height:26.3125rem;}#page_block_footer .section-holder-overlay{display:none;}#element-46{top:2.5rem;left:1.25rem;height:1.6875rem;width:22.5rem;z-index:19;color:#37465A;font-size:1.1765rem;line-height:1.6625rem;text-align:center;font-weight:400;}#element-46 .x_66d76769{text-align:center;line-height:1.6875rem;font-size:1.1765rem;}#element-46 .x_f2074b6c{color:#ffffff;}#element-46 strong{font-weight:700;}#element-46.headline{font-weight:400;}#element-47{top:6.1875rem;left:7.8125rem;height:2.9375rem;width:4.125rem;z-index:20;}#element-51{top:10.6875rem;left:1.8125rem;height:2.5625rem;width:3.4375rem;z-index:24;}#element-48{top:6.4375rem;left:13.8125rem;height:2.375rem;width:4.125rem;z-index:21;}#element-52{top:20.0625rem;left:19.5rem;height:1.5625rem;width:4.9375rem;z-index:25;}#element-50{top:15.5625rem;left:8.1875rem;height:1.1875rem;width:3.375rem;z-index:23;}#element-61{top:15.3125rem;left:19.5625rem;height:1.6875rem;width:4.8125rem;z-index:34;}#element-60{top:15.375rem;left:0.5rem;height:1.5625rem;width:6.0625rem;z-index:33;}#element-49{top:7.1875rem;left:0.75rem;height:0.8125rem;width:5.625rem;z-index:22;}#element-57{top:10.6875rem;left:13.9375rem;height:2.5rem;width:3.8125rem;z-index:30;}#element-62{top:6.5rem;left:19.875rem;height:2.25rem;width:4.25rem;z-index:35;}#element-55{top:10.875rem;left:19.6875rem;height:2.125rem;width:4.5625rem;z-index:28;}#element-54{top:19.9375rem;left:0.875rem;height:1.625rem;width:5.375rem;z-index:27;}#element-54 .cropped{background:url(//v.fastcdn.co/u/f054cc68/63021096-0-8930d13fc52c1d40cfd1.svgw520h177autoformat) -0.5625rem -0.25rem / 6.5625rem 2.25rem;}#element-58{top:15.1875rem;left:14rem;height:1.8125rem;width:3.6875rem;z-index:31;}#element-59{top:19.875rem;left:7.4375rem;height:1.75rem;width:4.8125rem;z-index:32;}#element-53{top:11.4375rem;left:7.75rem;height:1.0625rem;width:4.25rem;z-index:26;}#element-56{top:20.375rem;left:13.8125rem;height:0.875rem;width:4.125rem;z-index:29;}#page-block-2i3fq4hrzb{height:9.875rem;max-width:100%;}#page-block-2i3fq4hrzb .section-holder-border{border:0;}#page-block-2i3fq4hrzb .section-block{background:rgb(53,54,55);height:9.875rem;}#page-block-2i3fq4hrzb .section-holder-overlay{display:none;}#element-35{top:2.3125rem;left:4.75rem;height:1.3125rem;width:15.4375rem;z-index:17;color:#37465A;font-size:0.805rem;line-height:1.3rem;text-align:center;}#element-35 .x_70ee4658{text-align:center;line-height:1.3125rem;font-size:0.805rem;}#element-35 .x_f2074b6c{color:#ffffff;}#element-26{top:4.375rem;left:1.25rem;height:1.125rem;width:22.5rem;z-index:13;color:#37465A;font-size:0.805rem;line-height:1.1375rem;text-align:center;}#element-26 .x_dc6c6e10{text-align:center;line-height:1.125rem;font-size:0.805rem;}#element-26 .x_f2074b6c{color:#ffffff;}#element-28{top:6.4375rem;left:4rem;height:1.3125rem;width:4.3125rem;z-index:15;color:#37465A;font-size:0.805rem;line-height:1.3rem;text-align:left;}#element-28 .x_b0120a37{text-align:left;line-height:1.3125rem;font-size:0.805rem;}#element-28 .x_f2074b6c{color:#ffffff;}#element-29{top:6.4375rem;left:10rem;height:1.3125rem;width:11.9375rem;z-index:16;color:#37465A;font-size:0.805rem;line-height:1.3rem;text-align:left;}#element-29 .x_b0120a37{text-align:left;line-height:1.3125rem;font-size:0.805rem;}#element-29 .x_f2074b6c{color:#ffffff;}#element-27{top:6.6875rem;left:8.4375rem;height:0.875rem;width:0.9375rem;z-index:14;}@media screen and (max-width:400px){:root{font-size:4vw;}:root.js-text-scaling{font-size:var(--mobile-font-size);}}@media screen and (min-width:401px) and (max-width:767px){:root{font-size:16px;}:root.js-text-scaling{font-size:var(--default-font-size);}}@media screen and (min-width:768px) and (max-width:1200px){:root{font-size:1.33vw;}}@media screen and (max-width:767px){.hidden-mobile{display:none;}}@media screen and (min-width:768px){.section-fit{max-width:60rem;}#page-block-lg6mrzj27u{height:47.3125rem;max-width:100%;}#page-block-lg6mrzj27u .section-holder-border{border:0;}#page-block-lg6mrzj27u .section-block{background:rgb(117,74,188);height:47.3125rem;}#page-block-lg6mrzj27u .section-holder-overlay{display:none;}#element-44{top:0.875rem;left:-7.5rem;height:3.1875rem;width:11.4375rem;z-index:18;}#element-44 .cropped{background:url(//v.fastcdn.co/u/f054cc68/61826933-0-LogRocket-white-larg.png) -0.9375rem -2.125rem / 13.3125rem 7.6875rem;}#element-43{top:2.375rem;left:52.0625rem;height:34.375rem;width:8.6875rem;z-index:4;}#element-1{top:6.75rem;left:37.5rem;height:33.3125rem;width:18.75rem;z-index:5;}#element-15{top:8.75rem;left:1.875rem;height:7rem;width:29.25rem;z-index:6;color:#37465A;font-size:2.4768rem;line-height:3.5rem;text-align:left;}#element-15 .x_90aba03d{text-align:left;line-height:3.5rem;font-size:2.4768rem;}#element-15 .x_f2074b6c{color:#ffffff;}#element-16{top:17.5rem;left:2.875rem;height:5.25rem;width:24.375rem;z-index:7;color:#37465A;font-size:0.9907rem;line-height:1.6rem;text-align:left;}#element-16 .x_3579aa00{text-align:left;line-height:1.625rem;font-size:0.9907rem;}#element-16 .x_f2074b6c{color:#ffffff;}#element-16 .contents{font-size:0.9907rem!important;line-height:1.625rem!important;color:rgb(55,70,90)!important;font-family:Lato!important;font-weight:400!important;width:21.75rem!important;padding:15px 15px 15px 25px!important;background:linear-gradient(272.55deg,rgb(126,84,191) 4.46%,rgb(139,80,215) 95.47%)!important;border-radius:15px!important;border:1px solid rgba(255,255,255,0.15)!important;}#element-16 .contents p{line-height:1.625rem!important;font-size:0.9907rem!important;}#element-20{top:19.5rem;left:2.25rem;height:1.25rem;width:1.25rem;z-index:10;}#element-20 .contents img{width:1.25rem!important;height:1.25rem!important;filter:drop-shadow(rgba(0,0,0,0.3) 0px 9px 13px)!important;margin-left:auto;margin-top:0rem!important;}#element-17{top:23.3125rem;left:2.875rem;height:5.25rem;width:24.375rem;z-index:8;color:#37465A;font-size:0.9907rem;line-height:1.6rem;text-align:left;}#element-17 .x_3579aa00{text-align:left;line-height:1.625rem;font-size:0.9907rem;}#element-17 .x_f2074b6c{color:#ffffff;}#element-17 .contents{font-size:0.9907rem!important;line-height:1.625rem!important;color:rgb(55,70,90)!important;font-family:Lato!important;font-weight:400!important;width:21.75rem!important;padding:15px 15px 15px 25px!important;background:linear-gradient(272.55deg,rgb(126,84,191) 4.46%,rgb(139,80,215) 95.47%)!important;border-radius:15px!important;border:1px solid rgba(255,255,255,0.15)!important;}#element-17 .contents p{line-height:1.625rem!important;font-size:0.9907rem!important;}#element-22{top:25.3125rem;left:2.25rem;height:1.25rem;width:1.25rem;z-index:11;}#element-22 .contents img{width:1.25rem!important;height:1.25rem!important;margin-top:0rem!important;filter:drop-shadow(0px 9px 13px rgba(0,0,0,0.3))!important;}#element-18{top:29.1875rem;left:2.875rem;height:5.25rem;width:24.375rem;z-index:9;color:#37465A;font-size:0.9907rem;line-height:1.6rem;text-align:left;}#element-18 .x_3579aa00{text-align:left;line-height:1.625rem;font-size:0.9907rem;}#element-18 .x_f2074b6c{color:#ffffff;}#element-18 .contents{font-size:0.9907rem!important;line-height:1.625rem!important;color:rgb(55,70,90)!important;font-family:Lato!important;font-weight:400!important;width:21.75rem!important;padding:15px 15px 15px 25px!important;background:linear-gradient(272.55deg,rgb(126,84,191) 4.46%,rgb(139,80,215) 95.47%)!important;border-radius:15px!important;border:1px solid rgba(255,255,255,0.15)!important;}#element-18 .contents p{line-height:1.625rem!important;font-size:0.9907rem!important;}#element-42{top:30.9375rem;left:35.1875rem;height:12.375rem;width:8.6875rem;z-index:3;}#element-23{top:31.25rem;left:2.25rem;height:1.25rem;width:1.25rem;z-index:12;}#element-23 .contents img{width:1.25rem!important;height:1.25rem!important;margin-top:0rem!important;filter:drop-shadow(0px 9px 13px rgba(0,0,0,0.3))!important;}#page_block_footer{height:15.5625rem;max-width:100%;}#page_block_footer .section-holder-border{border:0;}#page_block_footer .section-block{background:rgb(117,74,188);height:15.5625rem;}#page_block_footer .section-holder-overlay{display:none;}#element-46{top:0.8125rem;left:-7.5rem;height:2rem;width:75rem;z-index:19;color:#37465A;font-size:1.2384rem;line-height:2rem;text-align:center;font-weight:400;}#element-46 .x_06cb0376{text-align:center;line-height:2rem;font-size:1.2384rem;}#element-46 .x_f2074b6c{color:#ffffff;}#element-46 strong{font-weight:700;}#element-46.headline{font-weight:400;}#element-47{top:4.375rem;left:-3.375rem;height:3.25rem;width:4.5625rem;z-index:20;}#element-51{top:4.4375rem;left:31.25rem;height:2.875rem;width:3.875rem;z-index:24;}#element-48{top:4.5rem;left:4.25rem;height:2.6875rem;width:4.625rem;z-index:21;}#element-52{top:4.8125rem;left:37.9375rem;height:2.125rem;width:6.75rem;z-index:25;}#element-50{top:5rem;left:22.4375rem;height:1.75rem;width:5rem;z-index:23;}#element-61{top:5rem;left:47.9375rem;height:1.875rem;width:5.375rem;z-index:34;}#element-60{top:5rem;left:56.5rem;height:1.75rem;width:6.8125rem;z-index:33;}#element-49{top:5.3125rem;left:12.0625rem;height:1.0625rem;width:7.1875rem;z-index:22;}#element-57{top:9.1875rem;left:4.4375rem;height:2.8125rem;width:4.25rem;z-index:30;}#element-62{top:9.375rem;left:38.9375rem;height:2.5625rem;width:4.8125rem;z-index:35;}#element-55{top:9.4375rem;left:-3.6875rem;height:2.375rem;width:5.125rem;z-index:28;}#element-54{top:9.5rem;left:56.125rem;height:2.25rem;width:7.5rem;z-index:27;}#element-54 .cropped{background:url(//v.fastcdn.co/u/f054cc68/63021096-0-8930d13fc52c1d40cfd1.svgw520h177autoformat) -0.75rem -0.375rem / 9.1875rem 3.25rem;}#element-58{top:9.6875rem;left:22.875rem;height:2.0625rem;width:4.125rem;z-index:31;}#element-59{top:9.6875rem;left:30.5rem;height:1.9375rem;width:5.375rem;z-index:32;}#element-53{top:9.8125rem;left:12.375rem;height:1.625rem;width:6.5625rem;z-index:26;}#element-56{top:10.125rem;left:48.3125rem;height:1rem;width:4.625rem;z-index:29;}#page-block-2i3fq4hrzb{height:7.6875rem;max-width:100%;}#page-block-2i3fq4hrzb .section-holder-border{border:0;}#page-block-2i3fq4hrzb .section-block{background:rgb(53,54,55);height:7.6875rem;}#page-block-2i3fq4hrzb .section-holder-overlay{display:none;}#element-35{top:3.125rem;left:-7.5rem;height:1.3125rem;width:15.4375rem;z-index:17;color:#37465A;font-size:0.805rem;line-height:1.3rem;text-align:left;}#element-35 .x_b0120a37{text-align:left;line-height:1.3125rem;font-size:0.805rem;}#element-35 .x_f2074b6c{color:#ffffff;}#element-26{top:3.125rem;left:17.8125rem;height:1.3125rem;width:24.375rem;z-index:13;color:#37465A;font-size:0.805rem;line-height:1.3rem;text-align:center;}#element-26 .x_70ee4658{text-align:center;line-height:1.3125rem;font-size:0.805rem;}#element-26 .x_f2074b6c{color:#ffffff;}#element-28{top:3.125rem;left:50.5rem;height:1.3125rem;width:4.3125rem;z-index:15;color:#37465A;font-size:0.805rem;line-height:1.3rem;text-align:left;}#element-28 .x_b0120a37{text-align:left;line-height:1.3125rem;font-size:0.805rem;}#element-28 .x_f2074b6c{color:#ffffff;}#element-29{top:3.125rem;left:55.6875rem;height:1.3125rem;width:11.75rem;z-index:16;color:#37465A;font-size:0.805rem;line-height:1.3rem;text-align:right;}#element-29 .x_207b1059{text-align:right;line-height:1.3125rem;font-size:0.805rem;}#element-29 .x_f2074b6c{color:#ffffff;}#element-27{top:3.375rem;left:54.75rem;height:0.875rem;width:0.9375rem;z-index:14;}} 
  </style>
<script>
  window.__variantsData = [ { name: 'A', chance: 100 } ];

window.__page_id = 23444673;
  window.__customer_id = 4370939;
  window.__default_experience_id = 23444673;
  window.__version = 4;
  window.__variant = "A";
  window.__variant_id = 1;
  window.__variant_custom_name = "Variation A";
  window.__preview = false;
  window.__page_type = 2;
  window.__variant_hash = "8d9d1a3826ba17500f3c458b8bf3e82b8e6260a0";
  window.__page_domain = "lp.logrocket.com";
  window.__page_generator = true;
  window.__experiment_id = null;
  window._Translate = { 
    translations: {},
    set: function (text, translation) { this.translations[text] = translation; },
    get: function (text) { return this.translations[text] || text; }
  };
</script>
<script id="ip-config" type="application/json">
  {"mobileDisabled":false,"downloadFileEndpoint":"https://app.instapage.com/ajax/pageserver/files/serve-file","reCaptchaEnabled":false,"snowplowUrl":"https://cdn.instapagemetrics.com/t/js/3/it.js","snowplowWrapperUrl":"//g.fastcdn.co/js/sptw.e0d3d3700fa08797ac40.js"}
</script>
<script id="ip-analytics" type="application/json">{"trackingData":{"ownerId":3969102,"customerId":4370939,"pageId":23444673,"publishedVersion":4,"variationName":"A","variationId":1,"linkedVariationId":2,"variation":"A","trackedLinks":[],"allLinks":[{"href":"https://logrocket.com/privacy","ariaLabel":"","id":"c7kwfl1y3ub","type":"url","track":false,"targetNewWindow":true},{"href":"https://logrocket.com/terms-and-conditions/","ariaLabel":"","id":"dl2u5cuc2af","type":"url","track":false,"targetNewWindow":true}],"user_id":3969102},"conversionSettings":{"forms":true,"links":true,"external":false}}</script>
<script id="ip-trkr" type="text/javascript" async=1>
    ;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
    p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)
    };p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
    n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script","https://cdn.instapagemetrics.com/t/js/3/it.js","instapageSp"));
    ;(function(i,n,s,t,a,p,g){i[a]||(i[a]=function(){(i[a].q=i[a].q||[]).push(arguments)},
    i[a].q=i[a].q||[],p=n.createElement(s),g=n.getElementsByTagName(s)[0],p.async=1,
    p.src=t,g.parentNode.insertBefore(p,g))}(window,document,"script","//g.fastcdn.co/js/sptw.e0d3d3700fa08797ac40.js","_instapageSnowplow"));
    try {
      var trackingData = JSON.parse(document.querySelector('#ip-analytics').text).trackingData;
      window._instapageSnowplow('setWrapperConfig', {
        lpContext: {
          lp_id: trackingData.pageId,
          lp_variation_id: trackingData.variationId,
          lp_version: trackingData.publishedVersion,
          subaccount_id: trackingData.customerId
        },
        collectorHost: "https://ec.instapagemetrics.com"
      });
      window._instapageSnowplow('enableActivityTracking');
      window._instapageSnowplow('trackPageView');
    } catch (e) {
      console.warn('Snowplow tracker error', e);
    }
  </script>
<script id="ip-cm" type="text/javascript" async=1>
    ;(function(c,o,n,s,e,m,a){c[e]||(c[e]=function(){(c[e].q=c[e].q||[]).push(arguments)},
     c[e].q=c[e].q||[],m=o.createElement(n),a=o.getElementsByTagName(n)[0],m.async=1,
     m.src=s,a.parentNode.insertBefore(m,a))}(window,document,"script","https://g.fastcdn.co/js/cm.js","_instapageConsentManagement"));
 </script>
<script src="//g.fastcdn.co/js/LegacyVendors.1481b65225ca5f72d9bd.js"></script>




<script src="https://cdn.auth0.com/js/lock/11.16.3/lock.min.js"></script>
<script src='https://legacy.logrocket-assets.io/js/signup-page.js'></script>
<script src='https://legacy.logrocket-assets.io/js/signup.js'></script>
<script src="https://storage.googleapis.com/lr-marketing-js/lr-web-analytics/script/4.js"></script>
<script>
</script>
<script>
  /*! Raven.js 3.12.1 (d84f21c) | github.com/getsentry/raven-js */
!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.Raven=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){function d(a,b,c,d){return JSON.stringify(a,e(b,d),c)}function e(a,b){var c=[],d=[];return null==b&&(b=function(a,b){return c[0]===b?"[Circular ~]":"[Circular ~."+d.slice(0,c.indexOf(b)).join(".")+"]"}),function(e,f){if(c.length>0){var g=c.indexOf(this);~g?c.splice(g+1):c.push(this),~g?d.splice(g,1/0,e):d.push(e),~c.indexOf(f)&&(f=b.call(this,e,f))}else c.push(f);return null==a?f:a.call(this,e,f)}}c=b.exports=d,c.getSerialize=e},{}],2:[function(a,b,c){"use strict";function d(a){this.name="RavenConfigError",this.message=a}d.prototype=new Error,d.prototype.constructor=d,b.exports=d},{}],3:[function(a,b,c){"use strict";var d=function(a,b,c){var d=a[b],e=a;if(b in a){var f="warn"===b?"warning":b;a[b]=function(){var a=[].slice.call(arguments),b=""+a.join(" "),g={level:f,logger:"console",extra:{arguments:a}};c&&c(b,g),d&&Function.prototype.apply.call(d,e,a)}}};b.exports={wrapMethod:d}},{}],4:[function(a,b,c){(function(c){"use strict";function d(){return+new Date}function e(){this.a=!("object"!=typeof JSON||!JSON.stringify),this.b=!f(H),this.c=!f(I),this.d=null,this.e=null,this.f=null,this.g=null,this.h=null,this.i=null,this.j={},this.k={logger:"javascript",ignoreErrors:[],ignoreUrls:[],whitelistUrls:[],includePaths:[],crossOrigin:"anonymous",collectWindowErrors:!0,maxMessageLength:0,stackTraceLimit:50,autoBreadcrumbs:!0},this.l=0,this.m=!1,this.n=Error.stackTraceLimit,this.o=G.console||{},this.p={},this.q=[],this.r=d(),this.s=[],this.t=[],this.u=null,this.v=G.location,this.w=this.v&&this.v.href,this.x();for(var a in this.o)this.p[a]=this.o[a]}function f(a){return void 0===a}function g(a){return"function"==typeof a}function h(a){return"[object String]"===J.toString.call(a)}function i(a){for(var b in a)return!1;return!0}function j(a,b){var c,d;if(f(a.length))for(c in a)m(a,c)&&b.call(null,c,a[c]);else if(d=a.length)for(c=0;c<d;c++)b.call(null,c,a[c])}function k(a,b){return b?(j(b,function(b,c){a[b]=c}),a):a}function l(a,b){return!b||a.length<=b?a:a.substr(0,b)+"…"}function m(a,b){return J.hasOwnProperty.call(a,b)}function n(a){for(var b,c=[],d=0,e=a.length;d<e;d++)b=a[d],h(b)?c.push(b.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")):b&&b.source&&c.push(b.source);return new RegExp(c.join("|"),"i")}function o(a){var b=[];return j(a,function(a,c){b.push(encodeURIComponent(a)+"="+encodeURIComponent(c))}),b.join("&")}function p(a){var b=a.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!b)return{};var c=b[6]||"",d=b[8]||"";return{protocol:b[2],host:b[4],path:b[5],relative:b[5]+c+d}}function q(){var a=G.crypto||G.msCrypto;if(!f(a)&&a.getRandomValues){var b=new Uint16Array(8);a.getRandomValues(b),b[3]=4095&b[3]|16384,b[4]=16383&b[4]|32768;var c=function(a){for(var b=a.toString(16);b.length<4;)b="0"+b;return b};return c(b[0])+c(b[1])+c(b[2])+c(b[3])+c(b[4])+c(b[5])+c(b[6])+c(b[7])}return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0,c="x"===a?b:3&b|8;return c.toString(16)})}function r(a){for(var b,c=5,d=80,e=[],f=0,g=0,h=" > ",i=h.length;a&&f++<c&&(b=s(a),!("html"===b||f>1&&g+e.length*i+b.length>=d));)e.push(b),g+=b.length,a=a.parentNode;return e.reverse().join(h)}function s(a){var b,c,d,e,f,g=[];if(!a||!a.tagName)return"";if(g.push(a.tagName.toLowerCase()),a.id&&g.push("#"+a.id),b=a.className,b&&h(b))for(c=b.split(/\s+/),f=0;f<c.length;f++)g.push("."+c[f]);var i=["type","name","title","alt"];for(f=0;f<i.length;f++)d=i[f],e=a.getAttribute(d),e&&g.push("["+d+'="'+e+'"]');return g.join("")}function t(a,b){return!!(!!a^!!b)}function u(a,b){return!t(a,b)&&(a=a.values[0],b=b.values[0],a.type===b.type&&a.value===b.value&&v(a.stacktrace,b.stacktrace))}function v(a,b){if(t(a,b))return!1;var c=a.frames,d=b.frames;if(c.length!==d.length)return!1;for(var e,f,g=0;g<c.length;g++)if(e=c[g],f=d[g],e.filename!==f.filename||e.lineno!==f.lineno||e.colno!==f.colno||e["function"]!==f["function"])return!1;return!0}function w(a,b,c,d){var e=a[b];a[b]=c(e),d&&d.push([a,b,e])}var x=a(7),y=a(2),z=a(6),A=z.isError,B=z.isObject,C=a(1),D=a(3).wrapMethod,E="source protocol user pass host port path".split(" "),F=/^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/,G="undefined"!=typeof window?window:"undefined"!=typeof c?c:"undefined"!=typeof self?self:{},H=G.document,I=G.navigator;e.prototype={VERSION:"3.12.1",debug:!1,TraceKit:x,config:function(a,b){var c=this;if(c.g)return this.y("error","Error: Raven has already been configured"),c;if(!a)return c;var d=c.k;b&&j(b,function(a,b){"tags"===a||"extra"===a||"user"===a?c.j[a]=b:d[a]=b}),c.setDSN(a),d.ignoreErrors.push(/^Script error\.?$/),d.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/),d.ignoreErrors=n(d.ignoreErrors),d.ignoreUrls=!!d.ignoreUrls.length&&n(d.ignoreUrls),d.whitelistUrls=!!d.whitelistUrls.length&&n(d.whitelistUrls),d.includePaths=n(d.includePaths),d.maxBreadcrumbs=Math.max(0,Math.min(d.maxBreadcrumbs||100,100));var e={xhr:!0,console:!0,dom:!0,location:!0},f=d.autoBreadcrumbs;return"[object Object]"==={}.toString.call(f)?f=k(e,f):f!==!1&&(f=e),d.autoBreadcrumbs=f,x.collectWindowErrors=!!d.collectWindowErrors,c},install:function(){var a=this;return a.isSetup()&&!a.m&&(x.report.subscribe(function(){a.z.apply(a,arguments)}),a.A(),a.k.autoBreadcrumbs&&a.B(),a.C(),a.m=!0),Error.stackTraceLimit=a.k.stackTraceLimit,this},setDSN:function(a){var b=this,c=b.D(a),d=c.path.lastIndexOf("/"),e=c.path.substr(1,d);b.E=a,b.h=c.user,b.F=c.pass&&c.pass.substr(1),b.i=c.path.substr(d+1),b.g=b.G(c),b.H=b.g+"/"+e+"api/"+b.i+"/store/",this.x()},context:function(a,b,c){return g(a)&&(c=b||[],b=a,a=void 0),this.wrap(a,b).apply(this,c)},wrap:function(a,b,c){function d(){var d=[],f=arguments.length,h=!a||a&&a.deep!==!1;for(c&&g(c)&&c.apply(this,arguments);f--;)d[f]=h?e.wrap(a,arguments[f]):arguments[f];try{return b.apply(this,d)}catch(i){throw e.I(),e.captureException(i,a),i}}var e=this;if(f(b)&&!g(a))return a;if(g(a)&&(b=a,a=void 0),!g(b))return b;try{if(b.J)return b;if(b.K)return b.K}catch(h){return b}for(var i in b)m(b,i)&&(d[i]=b[i]);return d.prototype=b.prototype,b.K=d,d.J=!0,d.L=b,d},uninstall:function(){return x.report.uninstall(),this.M(),Error.stackTraceLimit=this.n,this.m=!1,this},captureException:function(a,b){if(!A(a))return this.captureMessage(a,k({trimHeadFrames:1,stacktrace:!0},b));this.d=a;try{var c=x.computeStackTrace(a);this.N(c,b)}catch(d){if(a!==d)throw d}return this},captureMessage:function(a,b){if(!this.k.ignoreErrors.test||!this.k.ignoreErrors.test(a)){b=b||{};var c=k({message:a+""},b);if(this.k.stacktrace||b&&b.stacktrace){var d;try{throw new Error(a)}catch(e){d=e}d.name=null,b=k({fingerprint:a,trimHeadFrames:(b.trimHeadFrames||0)+1},b);var f=x.computeStackTrace(d),g=this.O(f,b);c.stacktrace={frames:g.reverse()}}return this.P(c),this}},captureBreadcrumb:function(a){var b=k({timestamp:d()/1e3},a);if(g(this.k.breadcrumbCallback)){var c=this.k.breadcrumbCallback(b);if(B(c)&&!i(c))b=c;else if(c===!1)return this}return this.t.push(b),this.t.length>this.k.maxBreadcrumbs&&this.t.shift(),this},addPlugin:function(a){var b=[].slice.call(arguments,1);return this.q.push([a,b]),this.m&&this.C(),this},setUserContext:function(a){return this.j.user=a,this},setExtraContext:function(a){return this.Q("extra",a),this},setTagsContext:function(a){return this.Q("tags",a),this},clearContext:function(){return this.j={},this},getContext:function(){return JSON.parse(C(this.j))},setEnvironment:function(a){return this.k.environment=a,this},setRelease:function(a){return this.k.release=a,this},setDataCallback:function(a){var b=this.k.dataCallback;return this.k.dataCallback=g(a)?function(c){return a(c,b)}:a,this},setBreadcrumbCallback:function(a){var b=this.k.breadcrumbCallback;return this.k.breadcrumbCallback=g(a)?function(c){return a(c,b)}:a,this},setShouldSendCallback:function(a){var b=this.k.shouldSendCallback;return this.k.shouldSendCallback=g(a)?function(c){return a(c,b)}:a,this},setTransport:function(a){return this.k.transport=a,this},lastException:function(){return this.d},lastEventId:function(){return this.f},isSetup:function(){return!!this.a&&(!!this.g||(this.ravenNotConfiguredError||(this.ravenNotConfiguredError=!0,this.y("error","Error: Raven has not been configured.")),!1))},afterLoad:function(){var a=G.RavenConfig;a&&this.config(a.dsn,a.config).install()},showReportDialog:function(a){if(H){a=a||{};var b=a.eventId||this.lastEventId();if(!b)throw new y("Missing eventId");var c=a.dsn||this.E;if(!c)throw new y("Missing DSN");var d=encodeURIComponent,e="";e+="?eventId="+d(b),e+="&dsn="+d(c);var f=a.user||this.j.user;f&&(f.name&&(e+="&name="+d(f.name)),f.email&&(e+="&email="+d(f.email)));var g=this.G(this.D(c)),h=H.createElement("script");h.async=!0,h.src=g+"/api/embed/error-page/"+e,(H.head||H.body).appendChild(h)}},I:function(){var a=this;this.l+=1,setTimeout(function(){a.l-=1})},R:function(a,b){var c,d;if(this.b){b=b||{},a="raven"+a.substr(0,1).toUpperCase()+a.substr(1),H.createEvent?(c=H.createEvent("HTMLEvents"),c.initEvent(a,!0,!0)):(c=H.createEventObject(),c.eventType=a);for(d in b)m(b,d)&&(c[d]=b[d]);if(H.createEvent)H.dispatchEvent(c);else try{H.fireEvent("on"+c.eventType.toLowerCase(),c)}catch(e){}}},S:function(a){var b=this;return function(c){if(b.T=null,b.u!==c){b.u=c;var d;try{d=r(c.target)}catch(e){d="<unknown>"}b.captureBreadcrumb({category:"ui."+a,message:d})}}},U:function(){var a=this,b=1e3;return function(c){var d;try{d=c.target}catch(e){return}var f=d&&d.tagName;if(f&&("INPUT"===f||"TEXTAREA"===f||d.isContentEditable)){var g=a.T;g||a.S("input")(c),clearTimeout(g),a.T=setTimeout(function(){a.T=null},b)}}},V:function(a,b){var c=p(this.v.href),d=p(b),e=p(a);this.w=b,c.protocol===d.protocol&&c.host===d.host&&(b=d.relative),c.protocol===e.protocol&&c.host===e.host&&(a=e.relative),this.captureBreadcrumb({category:"navigation",data:{to:b,from:a}})},A:function(){function a(a){return function(b,d){for(var e=new Array(arguments.length),f=0;f<e.length;++f)e[f]=arguments[f];var h=e[0];return g(h)&&(e[0]=c.wrap(h)),a.apply?a.apply(this,e):a(e[0],e[1])}}function b(a){var b=G[a]&&G[a].prototype;b&&b.hasOwnProperty&&b.hasOwnProperty("addEventListener")&&(w(b,"addEventListener",function(b){return function(d,f,g,h){try{f&&f.handleEvent&&(f.handleEvent=c.wrap(f.handleEvent))}catch(i){}var j,k,l;return e&&e.dom&&("EventTarget"===a||"Node"===a)&&(k=c.S("click"),l=c.U(),j=function(a){if(a){var b;try{b=a.type}catch(c){return}return"click"===b?k(a):"keypress"===b?l(a):void 0}}),b.call(this,d,c.wrap(f,void 0,j),g,h)}},d),w(b,"removeEventListener",function(a){return function(b,c,d,e){try{c=c&&(c.K?c.K:c)}catch(f){}return a.call(this,b,c,d,e)}},d))}var c=this,d=c.s,e=this.k.autoBreadcrumbs;w(G,"setTimeout",a,d),w(G,"setInterval",a,d),G.requestAnimationFrame&&w(G,"requestAnimationFrame",function(a){return function(b){return a(c.wrap(b))}},d);for(var f=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],h=0;h<f.length;h++)b(f[h])},B:function(){function a(a,c){a in c&&g(c[a])&&w(c,a,function(a){return b.wrap(a)})}var b=this,c=this.k.autoBreadcrumbs,d=b.s;if(c.xhr&&"XMLHttpRequest"in G){var e=XMLHttpRequest.prototype;w(e,"open",function(a){return function(c,d){return h(d)&&d.indexOf(b.h)===-1&&(this.W={method:c,url:d,status_code:null}),a.apply(this,arguments)}},d),w(e,"send",function(c){return function(d){function e(){if(f.W&&(1===f.readyState||4===f.readyState)){try{f.W.status_code=f.status}catch(a){}b.captureBreadcrumb({type:"http",category:"xhr",data:f.W})}}for(var f=this,h=["onload","onerror","onprogress"],i=0;i<h.length;i++)a(h[i],f);return"onreadystatechange"in f&&g(f.onreadystatechange)?w(f,"onreadystatechange",function(a){return b.wrap(a,void 0,e)}):f.onreadystatechange=e,c.apply(this,arguments)}},d)}c.xhr&&"fetch"in G&&w(G,"fetch",function(a){return function(c,d){for(var e=new Array(arguments.length),f=0;f<e.length;++f)e[f]=arguments[f];var g="GET";e[1]&&e[1].method&&(g=e[1].method);var h={method:g,url:e[0],status_code:null};return b.captureBreadcrumb({type:"http",category:"fetch",data:h}),a.apply(this,e).then(function(a){return h.status_code=a.status,a})}},d),c.dom&&this.b&&(H.addEventListener?(H.addEventListener("click",b.S("click"),!1),H.addEventListener("keypress",b.U(),!1)):(H.attachEvent("onclick",b.S("click")),H.attachEvent("onkeypress",b.U())));var f=G.chrome,i=f&&f.app&&f.app.runtime,k=!i&&G.history&&history.pushState;if(c.location&&k){var l=G.onpopstate;G.onpopstate=function(){var a=b.v.href;if(b.V(b.w,a),l)return l.apply(this,arguments)},w(history,"pushState",function(a){return function(){var c=arguments.length>2?arguments[2]:void 0;return c&&b.V(b.w,c+""),a.apply(this,arguments)}},d)}if(c.console&&"console"in G&&console.log){var m=function(a,c){b.captureBreadcrumb({message:a,level:c.level,category:"console"})};j(["debug","info","warn","error","log"],function(a,b){D(console,b,m)})}},M:function(){for(var a;this.s.length;){a=this.s.shift();var b=a[0],c=a[1],d=a[2];b[c]=d}},C:function(){var a=this;j(this.q,function(b,c){var d=c[0],e=c[1];d.apply(a,[a].concat(e))})},D:function(a){var b=F.exec(a),c={},d=7;try{for(;d--;)c[E[d]]=b[d]||""}catch(e){throw new y("Invalid DSN: "+a)}if(c.pass&&!this.k.allowSecretKey)throw new y("Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key");return c},G:function(a){var b="//"+a.host+(a.port?":"+a.port:"");return a.protocol&&(b=a.protocol+":"+b),b},z:function(){this.l||this.N.apply(this,arguments)},N:function(a,b){var c=this.O(a,b);this.R("handle",{stackInfo:a,options:b}),this.X(a.name,a.message,a.url,a.lineno,c,b)},O:function(a,b){var c=this,d=[];if(a.stack&&a.stack.length&&(j(a.stack,function(a,b){var e=c.Y(b);e&&d.push(e)}),b&&b.trimHeadFrames))for(var e=0;e<b.trimHeadFrames&&e<d.length;e++)d[e].in_app=!1;return d=d.slice(0,this.k.stackTraceLimit)},Y:function(a){if(a.url){var b={filename:a.url,lineno:a.line,colno:a.column,"function":a.func||"?"};return b.in_app=!(this.k.includePaths.test&&!this.k.includePaths.test(b.filename)||/(Raven|TraceKit)\./.test(b["function"])||/raven\.(min\.)?js$/.test(b.filename)),b}},X:function(a,b,c,d,e,f){var g;if((!this.k.ignoreErrors.test||!this.k.ignoreErrors.test(b))&&(b+="",e&&e.length?(c=e[0].filename||c,e.reverse(),g={frames:e}):c&&(g={frames:[{filename:c,lineno:d,in_app:!0}]}),(!this.k.ignoreUrls.test||!this.k.ignoreUrls.test(c))&&(!this.k.whitelistUrls.test||this.k.whitelistUrls.test(c)))){var h=k({exception:{values:[{type:a,value:b,stacktrace:g}]},culprit:c},f);this.P(h)}},Z:function(a){var b=this.k.maxMessageLength;if(a.message&&(a.message=l(a.message,b)),a.exception){var c=a.exception.values[0];c.value=l(c.value,b)}return a},$:function(){if(this.c||this.b){var a={};return this.c&&I.userAgent&&(a.headers={"User-Agent":navigator.userAgent}),this.b&&(H.location&&H.location.href&&(a.url=H.location.href),H.referrer&&(a.headers||(a.headers={}),a.headers.Referer=H.referrer)),a}},x:function(){this._=0,this.aa=null},ba:function(){return this._&&d()-this.aa<this._},ca:function(a){var b=this.e;return!(!b||a.message!==b.message||a.culprit!==b.culprit)&&(a.stacktrace||b.stacktrace?v(a.stacktrace,b.stacktrace):!a.exception&&!b.exception||u(a.exception,b.exception))},da:function(a){if(!this.ba()){var b=a.status;if(400===b||401===b||429===b){var c;try{c=a.getResponseHeader("Retry-After"),c=1e3*parseInt(c,10)}catch(e){}this._=c?c:2*this._||1e3,this.aa=d()}}},P:function(a){var b=this.k,c={project:this.i,logger:b.logger,platform:"javascript"},e=this.$();if(e&&(c.request=e),a.trimHeadFrames&&delete a.trimHeadFrames,a=k(c,a),a.tags=k(k({},this.j.tags),a.tags),a.extra=k(k({},this.j.extra),a.extra),a.extra["session:duration"]=d()-this.r,this.t&&this.t.length>0&&(a.breadcrumbs={values:[].slice.call(this.t,0)}),i(a.tags)&&delete a.tags,this.j.user&&(a.user=this.j.user),b.environment&&(a.environment=b.environment),b.release&&(a.release=b.release),b.serverName&&(a.server_name=b.serverName),g(b.dataCallback)&&(a=b.dataCallback(a)||a),a&&!i(a)&&(!g(b.shouldSendCallback)||b.shouldSendCallback(a)))return this.ba()?void this.y("warn","Raven dropped error due to backoff: ",a):void this.ea(a)},fa:function(){return q()},ea:function(a,b){var c=this,d=this.k;if(this.isSetup()){if(this.f=a.event_id||(a.event_id=this.fa()),a=this.Z(a),!this.k.allowDuplicates&&this.ca(a))return void this.y("warn","Raven dropped repeat event: ",a);this.e=a,this.y("debug","Raven about to send:",a);var e={sentry_version:"7",sentry_client:"raven-js/"+this.VERSION,sentry_key:this.h};this.F&&(e.sentry_secret=this.F);var f=a.exception&&a.exception.values[0];this.captureBreadcrumb({category:"sentry",message:f?(f.type?f.type+": ":"")+f.value:a.message,event_id:a.event_id,level:a.level||"error"});var g=this.H;(d.transport||this.ga).call(this,{url:g,auth:e,data:a,options:d,onSuccess:function(){c.x(),c.R("success",{data:a,src:g}),b&&b()},onError:function(d){c.y("error","Raven transport failed to send: ",d),d.request&&c.da(d.request),c.R("failure",{data:a,src:g}),d=d||new Error("Raven send failed (no additional details provided)"),b&&b(d)}})}},ga:function(a){function b(){if(200===c.status)a.onSuccess&&a.onSuccess();else if(a.onError){var b=new Error("Sentry error code: "+c.status);b.request=c,a.onError(b)}}var c=new XMLHttpRequest,d="withCredentials"in c||"undefined"!=typeof XDomainRequest;if(d){var e=a.url;"withCredentials"in c?c.onreadystatechange=function(){4===c.readyState&&b()}:(c=new XDomainRequest,e=e.replace(/^https?:/,""),c.onload=b),c.open("POST",e+"?"+o(a.auth)),c.send(C(a.data))}},y:function(a){this.p[a]&&this.debug&&Function.prototype.apply.call(this.p[a],this.o,[].slice.call(arguments,1))},Q:function(a,b){f(b)?delete this.j[a]:this.j[a]=k(this.j[a]||{},b)}};var J=Object.prototype;e.prototype.setUser=e.prototype.setUserContext,e.prototype.setReleaseContext=e.prototype.setRelease,b.exports=e}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{1:1,2:2,3:3,6:6,7:7}],5:[function(a,b,c){(function(c){"use strict";var d=a(4),e="undefined"!=typeof window?window:"undefined"!=typeof c?c:"undefined"!=typeof self?self:{},f=e.Raven,g=new d;g.noConflict=function(){return e.Raven=f,g},g.afterLoad(),b.exports=g}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{4:4}],6:[function(a,b,c){"use strict";function d(a){return"object"==typeof a&&null!==a}function e(a){var b={}.toString.call(a);return d(a)&&"[object Error]"===b||"[object Exception]"===b||a instanceof Error}b.exports={isObject:d,isError:e}},{}],7:[function(a,b,c){(function(c){"use strict";function d(){return"undefined"==typeof document||"undefined"==typeof document.location?"":document.location.href}var e=a(6),f={collectWindowErrors:!0,debug:!1},g="undefined"!=typeof window?window:"undefined"!=typeof c?c:"undefined"!=typeof self?self:{},h=[].slice,i="?",j=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;f.report=function(){function a(a){m(),s.push(a)}function b(a){for(var b=s.length-1;b>=0;--b)s[b]===a&&s.splice(b,1)}function c(){n(),s=[]}function k(a,b){var c=null;if(!b||f.collectWindowErrors){for(var d in s)if(s.hasOwnProperty(d))try{s[d].apply(null,[a].concat(h.call(arguments,2)))}catch(e){c=e}if(c)throw c}}function l(a,b,c,g,h){var l=null;if(v)f.computeStackTrace.augmentStackTraceWithInitialElement(v,b,c,a),o();else if(h&&e.isError(h))l=f.computeStackTrace(h),k(l,!0);else{var m,n={url:b,line:c,column:g},p=void 0,r=a;if("[object String]"==={}.toString.call(a)){var m=a.match(j);m&&(p=m[1],r=m[2])}n.func=i,l={name:p,message:r,url:d(),stack:[n]},k(l,!0)}return!!q&&q.apply(this,arguments)}function m(){r||(q=g.onerror,g.onerror=l,r=!0)}function n(){r&&(g.onerror=q,r=!1,q=void 0)}function o(){var a=v,b=t;t=null,v=null,u=null,k.apply(null,[a,!1].concat(b))}function p(a,b){var c=h.call(arguments,1);if(v){if(u===a)return;o()}var d=f.computeStackTrace(a);if(v=d,u=a,t=c,setTimeout(function(){u===a&&o()},d.incomplete?2e3:0),b!==!1)throw a}var q,r,s=[],t=null,u=null,v=null;return p.subscribe=a,p.unsubscribe=b,p.uninstall=c,p}(),f.computeStackTrace=function(){function a(a){if("undefined"!=typeof a.stack&&a.stack){for(var b,c,e=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|<anonymous>).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,f=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|resource|\[native).*?)(?::(\d+))?(?::(\d+))?\s*$/i,g=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,h=a.stack.split("\n"),j=[],k=(/^(.*) is undefined$/.exec(a.message),0),l=h.length;k<l;++k){if(b=e.exec(h[k])){var m=b[2]&&b[2].indexOf("native")!==-1;c={url:m?null:b[2],func:b[1]||i,args:m?[b[2]]:[],line:b[3]?+b[3]:null,column:b[4]?+b[4]:null}}else if(b=g.exec(h[k]))c={url:b[2],func:b[1]||i,args:[],line:+b[3],column:b[4]?+b[4]:null};else{if(!(b=f.exec(h[k])))continue;c={url:b[3],func:b[1]||i,args:b[2]?b[2].split(","):[],line:b[4]?+b[4]:null,column:b[5]?+b[5]:null}}!c.func&&c.line&&(c.func=i),j.push(c)}return j.length?(j[0].column||"undefined"==typeof a.columnNumber||(j[0].column=a.columnNumber+1),{name:a.name,message:a.message,url:d(),stack:j}):null}}function b(a,b,c,d){var e={url:b,line:c};if(e.url&&e.line){if(a.incomplete=!1,e.func||(e.func=i),a.stack.length>0&&a.stack[0].url===e.url){if(a.stack[0].line===e.line)return!1;if(!a.stack[0].line&&a.stack[0].func===e.func)return a.stack[0].line=e.line,!1}return a.stack.unshift(e),a.partial=!0,!0}return a.incomplete=!0,!1}function c(a,g){for(var h,j,k=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,l=[],m={},n=!1,o=c.caller;o&&!n;o=o.caller)if(o!==e&&o!==f.report){if(j={url:null,func:i,line:null,column:null},o.name?j.func=o.name:(h=k.exec(o.toString()))&&(j.func=h[1]),"undefined"==typeof j.func)try{j.func=h.input.substring(0,h.input.indexOf("{"))}catch(p){}m[""+o]?n=!0:m[""+o]=!0,l.push(j)}g&&l.splice(0,g);var q={name:a.name,message:a.message,url:d(),stack:l};return b(q,a.sourceURL||a.fileName,a.line||a.lineNumber,a.message||a.description),q}function e(b,e){var g=null;e=null==e?0:+e;try{if(g=a(b))return g}catch(h){if(f.debug)throw h}try{if(g=c(b,e+1))return g}catch(h){if(f.debug)throw h}return{name:b.name,message:b.message,url:d()}}return e.augmentStackTraceWithInitialElement=b,e.computeStackTraceFromStackProp=a,e}(),b.exports=f}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{6:6}]},{},[5])(5)});
</script>
<script type="text/javascript">
(function(i,s,o,g,r,a,m){i['ProfitWellObject']=r;i[r]=i[r]||function(){  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);  })(window,document,'script','https://dna8twue3dlxq.cloudfront.net/js/profitwell.js','profitwell');

profitwell('auth_token', '725d856d34ee1ba46438d2f899c845b1');
</script>
<script>
window.Raven && window.Raven.config('https://a39e555ed62c408792586c55bbb2ce3b@e.logrocket.com/9').install()
</script>
<script src="https://staging.logrocket.com/LogRocket.min.js"></script>
<script type="text/javascript">
  window.lr_analytics.init({
    analyticsProxy: {
      enabled: true,
    },
    segment: {
      enabled: true,
      writeKey: 'hn3yvJCms37nkkjrwDQ08PuKJKydGtAZ',
      load: true,
    },
    sixSense: {
      enabled: true,
      apiKey: 'd5fbd2e5f08cba3d3d417f7a67cd8d1f',
      companyDetails: {
        enabled: true,
        apiKey: 'a2d1a28025c555de9af13fd94f96f9044dbb8331',
        callback: (sixSenseResponse) => {
          // send relevant 6sense events to segment
          window.lr_analytics.sixSenseCallbacks.sendSegmentEvents(sixSenseResponse);

          const sixSenseData = JSON.parse(sixSenseResponse);

          if (sixSenseData.company.domain && sixSenseData.company.name) {
            window.LogRocket && window.LogRocket.identify(Math.random().toString(36).substring(7), {
                company: sixSenseData.company.name,
                email: 'anonymous@' + sixSenseData.company.domain,
            });
          }

          window._vis_opt_queue = window._vis_opt_queue || [];
          window._vis_opt_queue.push(function() {_vis_opt_goal_conversion(202);});

          _linkedin_partner_id = "1468257";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          (function(){var s = document.getElementsByTagName("script")[0];
          var b = document.createElement("script");
          b.type = "text/javascript";b.async = true;
          b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
          s.parentNode.insertBefore(b, s);})();

          var linkedIn_img = document.createElement("img");
          linkedIn_img.src = "https://px.ads.linkedin.com/collect/?pid=1468257&fmt=gif";
          document.getElementsByTagName('head')[0].appendChild( linkedIn_img );
        }
      }
    },
    vwo: {
      enabled: true,
      accountId: 338524,
    },
    reddit: {
      enabled: true,
      accountId: 't2_3xdvtyx2',
    },
    utmMediumHash: {
      enabled: true,
    }
  });

  const createWatcher = (...args) => {
    return new Promise((resolve, reject) => {
        const watcher = window.setInterval(...args, (...result) => {
            resolve(...result);
            window.clearInterval(watcher);
        });
    });
  };

  const checkForIntercomModal = (callback) => {
    const intercomFrame = document.getElementsByName('intercom-messenger-frame')[0];
    if (!intercomFrame) return;
    callback(intercomFrame.contentDocument);
  };

  const checkForInput = (modal, callback) => {
    const input = modal.getElementsByName('message')[0];
    if (!input) return;
    callback(input);
  }

  const checkMessages = (modal, callback) => {
    if (modal.getElementsByClassName('intercom-comment').length <= 1) return;
    callback();
  };

  const monitorConversation = (modal) => {
    let newInput = false;

    const handleInput = () => {
        newInput = modal.getElementsByClassName('intercom-comment').length <= 1;
    };

    createWatcher(checkForInput, 500, modal)
      .then(input => input.addEventListener('input', handleInput));

    // poll for new conversation activity
    createWatcher(checkMessages, 500, modal).then(() => {
        if (newInput) {
            window.analytics.track('new-intercom-conversation');
        }
    });
  }

  createWatcher(checkForIntercomModal, 1000).then(monitorConversation);

  const checkIfIntercomLoaded = () => {
    const modalLoaded = Boolean(
        document.getElementsByName('intercom-launcher-frame')[0] ||
        document.getElementsByClassName('intercom-lightweight-app-launcher')[0]
    )

    window.analytics.track(`intercom loaded: ${modalLoaded}`);
  }

  window.setTimeout(checkIfIntercomLoaded, 10000);

  analytics.page();

  if (window.LogRocket) {
      window.LogRocket.init('apphub/logrocket-website',{
          dashboardHost: "https://staging.lr-ingest.io",
          serverURL: "https://staging-i.logrocket.com/i",
      });
  }

  if (typeof Intercom == 'function') {
    Intercom("onUnreadCountChange", function(a) {
      window._6si.push(["send", "chat", {
          event_id: 1,
          event_value: "onUnreadCountChange"
        }])
    });
  }
</script>
<script async src='https://cdn.statuspage.io/se-v2.js'></script>
<script>
  !function(a){"use strict";function b(a,b){return a.action.cost-b.action.cost}function c(a){if(!a||"string"!=typeof a)throw"rawSentence must be a string.";var b,c,d,e=[];for(b=0,c=0;c<a.length;c++)d=a.charAt(c),d.match(/[\.,"\/!\?\*\+;:{}=()\[\]\s]/g)&&(c>b&&(d.match(/\s/g)?e.push(a.slice(b,c)+"&nbsp;"):e.push(a.slice(b,c))),d.match(/\s/g)||(c+1<a.length&&a.charAt(c+1).match(/\s/g)?e.push(d+"&nbsp;"):e.push(d)),b=c+1);return c>b&&e.push(a.slice(b,c)),e}function d(){var a,b=document.createElement("fakeelement"),c={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",MSTransition:"msTransitionEnd",OTransition:"otransitionend",transition:"transitionend"};for(a in c)if(c.hasOwnProperty(a)&&void 0!==b.style[a])return c[a]}function e(a,b){return'<div class="'+a+"-to-idx-"+b+" "+a+'-word"><span class="'+a+'-visible" style="opacity: 0"></span><span class="'+a+'-invisible" style="width: 0px"></span></div>'}function f(a,b,c,d){var e="@font-face {\n    font-family: "+a+"-empty;\n    src: url(data:application/font-woff;charset=utf-8;base64,d09GRk9UVE8AAAQ0AAoAAAAAA+wAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABDRkYgAAAA9AAAAJ4AAACeXQ48j09TLzIAAAGUAAAAYAAAAGAIIgbWY21hcAAAAfQAAABEAAAARAAyAGlnYXNwAAACOAAAAAgAAAAIAAAAEGhlYWQAAAJAAAAANgAAADb9mzB5aGhlYQAAAngAAAAkAAAAJAHiAeVobXR4AAACnAAAABAAAAAQAAAAAG1heHAAAAKsAAAABgAAAAYABFAAbmFtZQAAArQAAAFdAAABXVqZXRlwb3N0AAAEFAAAACAAAAAgAAMAAAEABAQAAQEBDHNwYWNlLWVtcHR5AAECAAEAOvgcAvgbA/gYBB4KABlT/4uLHgoAGVP/i4sMB4tr+JT4dAUdAAAAfA8dAAAAgREdAAAACR0AAACVEgAFAQEMFxkbHnNwYWNlLWVtcHR5c3BhY2UtZW1wdHl1MHUxdTIwAAACAYkAAgAEAQEEBwoN/JQO/JQO/JQO/JQO+JQU+JQViwwKAAAAAwIAAZAABQAAAUwBZgAAAEcBTAFmAAAA9QAZAIQAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAABAAAAAIAHg/+D/4AHgACAAAAABAAAAAAAAAAAAAAAgAAAAAAACAAAAAwAAABQAAwABAAAAFAAEADAAAAAIAAgAAgAAAAEAIP/9//8AAAAAACD//f//AAH/4wADAAEAAAAAAAAAAAABAAH//wAPAAEAAAABAAAAeR2GXw889QALAgAAAAAAzz54vgAAAADPPni+AAAAAAAAAAAAAAAIAAIAAAAAAAAAAQAAAeD/4AAAAgAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAABQAAAEAAAAAAAOAK4AAQAAAAAAAQAWAAAAAQAAAAAAAgAOAGMAAQAAAAAAAwAWACwAAQAAAAAABAAWAHEAAQAAAAAABQAWABYAAQAAAAAABgALAEIAAQAAAAAACgAoAIcAAwABBAkAAQAWAAAAAwABBAkAAgAOAGMAAwABBAkAAwAWACwAAwABBAkABAAWAHEAAwABBAkABQAWABYAAwABBAkABgAWAE0AAwABBAkACgAoAIcAcwBwAGEAYwBlAC0AZQBtAHAAdAB5AFYAZQByAHMAaQBvAG4AIAAxAC4AMABzAHAAYQBjAGUALQBlAG0AcAB0AHlzcGFjZS1lbXB0eQBzAHAAYQBjAGUALQBlAG0AcAB0AHkAUgBlAGcAdQBsAGEAcgBzAHAAYQBjAGUALQBlAG0AcAB0AHkARwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=) format('woff');\n}\n."+a+"-invisible { visibility: hidden; }\n."+a+"-animating {\n  -webkit-transition: "+b+"s all linear;\n  -moz-transition: "+b+"s all linear;\n  -o-transition: "+b+"s all linear;\n  transition: "+b+"s all linear; }\n."+a+" {\n  position: relative;\n  font-family: "+a+"-empty;\n  margin: 0;}\n."+a+":after {\n  content: ' ';\n  display: block;\n  clear: both;}\n."+a+"-text-width-calculation {\n  position: absolute;\n  visibility: hidden;\n  font-family: "+d+";\n  height: auto;\n  width: auto;\n  display: inline-block;\n  white-space: nowrap; }\n  ."+a+" ."+a+"-old-content {\n    font-family: "+d+";\n    position: absolute;\n    left: 0;\n    width: 100%;\n    top: 0;\n    height: 100%;\n  }\n  ."+a+"."+a+"-loaded ."+a+"-old-content {    display: none;  }\n  ."+a+"."+a+"-loaded ."+a+"-word {    opacity: 1;  }\n  ."+a+" ."+a+"-punctuation { margin-left: -0.3rem; }\n  ."+a+" ."+a+"-word {\n    display: inline-block;\n    position: relative;\n    float: left;\n    opacity: 0;\n    font-family: "+d+";\n    text-align: center;\n    height: "+c+";\n    white-space: nowrap;\n    overflow: hidden;}\n    ."+a+" ."+a+"-word span {\n      top: 0;\n      position: relative;\n      overflow: hidden;\n      height: 1px;\n      display: inline-block;}\n      ."+a+" ."+a+"-word ."+a+"-visible {\n        position: absolute;\n        display: inline-block;\n        height: "+c+";\n        top: 0;\n        bottom: 0;\n        right:0;\n        left: 0;}",f=document.head||document.getElementsByTagName("head")[0],g=document.createElement("style");g.type="text/css",g.styleSheet?g.styleSheet.cssText=e:g.appendChild(document.createTextNode(e)),f.appendChild(g)}function g(b,c){var d=this,e=c||{};d.settings={containerId:e.containerId||"sub",namespace:e.namespace||"sub",interval:e.interval||5e3,speed:e.speed||200,mobileWidth:e.mobileWidth||null,verbose:void 0!==e.verbose?e.verbose:!1,random:void 0!==e.random?e.random:!1,best:void 0!==e.best?e.best:!0,clearOriginalContent:void 0!==e.clearOriginalContent?e.clearOriginalContent:!0,_testing:void 0!==e._testing?e._testing:!1},d.wrapper=document.getElementById(d.settings.containerId);var g=a.getComputedStyle(d.wrapper);return f(d.settings.namespace,d.settings.speed/1e3,g.height,g.fontFamily),d.highestTimeoutId=0,d.currentState=null,d.actions=[],d.invisibleClass=" ."+d.settings.namespace+"-invisible",d.visibleClass=" ."+d.settings.namespace+"-visible",d.fromClass=d.settings.namespace+"-from-idx-",d.toClass=d.settings.namespace+"-to-idx-",d.wrapperSelector="#"+d.settings.namespace,d.isEmpty=!0,d._setupContainer(),d.settings._testing||d._setSentences(d._parseSentences(b)),d}function h(a,b,c){var e=this;e.sub=b,e.ctx=c,e.transitionEnd=d(),e.animatingClass=" "+e.sub.settings.namespace+"-animating","remove"===a?e.steps=[function(){e._fadeOut()},function(){e._setWidth()},function(){e._removeElement()}]:"sub"===a?e.steps=[function(){e._reIndex()},function(){e._fadeOut()},function(){e._setWidth()},function(){e._setTextAndFadeIn()},function(){e._cleanUp()}]:"insert"===a?e.steps=[function(){e._setWidth()},function(){e._setTextAndFadeIn()},function(){e._cleanUp()}]:"keep"===a?e.steps=[function(){e._reIndex()}]:console.error("Unknown animation: ",a),e.steps[0]()}g.prototype._parseSentences=function(a){if(!a||"object"!=typeof a)throw"rawSentences must be an array of strings.";return a.map(c)},g.prototype._setupContainer=function(){var b=this,c=document.getElementById(b.settings.containerId);if(!c)throw"Cannot find element with id:"+b.settings.containerId;var d=a.getComputedStyle(c);c.style.height=d.height,b.settings.clearOriginalContent?c.innerHTML="":(c.style.width=d.width,c.innerHTML='<span class="'+b.settings.namespace+'-old-content">'+c.innerHTML.replace(" ","&nbsp;")+"</span>"),c.className=b.settings.namespace},g.prototype._getOnResize=function(){var b=this;b.isStopped=!1;var c=function(c){b.lastWindowWidth=a.innerWidth,null!==b.settings.mobileWidth&&(!b.isStopped&&b.lastWindowWidth<b.settings.mobileWidth?(b._stop(),b.isStopped=!0):b.isStopped&&b.lastWindowWidth>b.settings.mobileWidth&&(b._run(),b.isStopped=!1))};return c},g.prototype._run=function(){var a=this;if(!a.actions)return void setTimeout(function(){a.run()},20);if(a.isEmpty){a.isEmpty=!1;var b=a._computeActionsToChange([],a.actions[0].from);if(!b)throw console.log(b),"returned null action";a._applyAction(b)}a.highestTimeoutId=setTimeout(function(){a.wrapper.className+=" "+a.settings.namespace+"-loaded",a.wrapper.style.height="",a._sentenceLoop()},a.settings.interval)},g.prototype.run=function(){var b=this;return b.onResize=b._getOnResize(),a.addEventListener("resize",b.onResize,!1),a.addEventListener("orientationchange",b.onResize,!1),b._run(),b},g.prototype._stop=function(){var a=this;clearTimeout(a.highestTimeoutId)},g.prototype.stop=function(){var b=this;return a.removeEventListener("resize",b.onResize,!1),a.removeEventListener("orientationchange",b.onResize,!1),b._stop(),b},g.prototype._computeActionsToChange=function(a,b){var c=this;c.settings.verbose&&console.log("_computeActionsToChange: ",a,b);var d={from:a,to:b,sub:[],remove:[],insert:[],keep:[],cost:0},e=function(c,f,g){var h;if(g=g||!1,c>=a.length){if(!g)for(h=f;h<b.length;h++)d.insert.push({toWord:b[h],toIndex:h});return b.length-f}if(f>=b.length){if(!g)for(h=c;h<a.length;h++)d.remove.push({fromWord:a[h],fromIndex:h});return a.length-f}if(a[c]===b[f])return g?0:(d.keep.push({fromWord:a[c],toWord:b[f],fromIndex:c,toIndex:f}),e(c+1,f+1));var i=a.indexOf(b[f],c);if(g)return i;if(c+1==a.length&&-1===i)return d.sub.push({fromWord:a[c],toWord:b[f],fromIndex:c,toIndex:f}),e(c+1,f+1)+1;var j=e(c,f+1,!0);if(-1===i)return 0===j?(d.insert.push({toWord:b[f],toIndex:f}),e(c,f+1)+1):(d.sub.push({fromWord:a[c],toWord:b[f],fromIndex:c,toIndex:f}),e(c+1,f+1)+1);if(i===c+1&&j===c||i===j){var k=a.length-c,l=b.length-f;return k>l?(d.insert.push({toWord:b[f],toIndex:f}),e(c+1,f)+1):(d.remove.push({fromWord:a[c],fromIndex:c}),e(c,f+1)+1)}if(i>j&&-1!==j)return d.sub.push({fromWord:a[c],toWord:b[f],fromIndex:c,toIndex:f}),e(c+1,f+1)+1;for(h=c;i>h;h++)d.remove.push({fromWord:a[h],fromIndex:h});return d.keep.push({fromWord:a[i],toWord:b[f],fromIndex:i,toIndex:f}),e(i+1,f+1)+(i-c)};return d.cost=e(0,0),d},g.prototype._setSentences=function(a){var c,d,e,f=this;if(0===a.length&&(f.actions=[]),f.settings.best){var g=a.map(function(b,c){return a.map(function(b,d){if(c===d)return{action:{cost:Number.MAX_VALUE},fromIndex:c,toIndex:d};var e=f._computeActionsToChange(a[c],a[d]);return{action:e,fromIndex:c,toIndex:d}})}),h=[],i=0;g.sort(function(a,c){return a.sort(b),c.sort(b),a[0].cost-c[0].cost});var j=g[0][0].fromIndex;for(c=0;c<a.length;c++)for(d=0;d<a.length;d++)if(c===a.length-1&&g[i][d].toIndex===j||c!==a.length-1&&-1===h.indexOf(g[i][d].toIndex)){f.actions.push(g[i][d].action),h.push(i),i=g[i][d].toIndex;break}if(f.settings.random){var k=Math.floor(Math.random()*a.length);for(c=0;k>c;c++)f.actions.push(f.actions.shift())}}else for(f.settings.random&&a.sort(function(){return.5-Math.random()}),c=0;c<a.length;c++)e=0===c?a.length-1:c-1,f.actions.push(f._computeActionsToChange(a[e],a[c]))},g.prototype._sentenceLoop=function(){var a=this,b=a.actions.shift();if(!b)throw console.log(b,a.actions),"returned null action";a._applyAction(b),a.actions.push(b),clearTimeout(a.highestTimeoutId),a.highestTimeoutId=setTimeout(function(){a._sentenceLoop()},a.settings.interval)},g.prototype._applyAction=function(a){var b=this,c=document.getElementsByClassName(b.settings.namespace+"-word");[].forEach.call(c,function(a){b.settings.verbose&&console.log("replacing to- with from- for:",a),a.className=a.className.replace(b.toClass,b.fromClass)}),a.sub.map(function(a){b._subAction(a)}),a.remove.map(function(a){b._removeAction(a)}),a.keep.map(function(a){b._keepAction(a)}),b._performInsertions(a.insert)},g.prototype._removeAction=function(a){var b=this,c=b.fromClass+a.fromIndex,d={fromIndexClass:c,word:document.querySelector(b.wrapperSelector+" ."+c),visible:document.querySelector(b.wrapperSelector+" ."+c+b.visibleClass),invisible:document.querySelector(b.wrapperSelector+" ."+c+b.invisibleClass),newText:""};b.settings.verbose&&console.log("remove",d),new h("remove",b,d)},g.prototype._performInsertions=function(a){var b=this;setTimeout(function(){a.forEach(function(a){var c=e(b.settings.namespace,a.toIndex);if(0===a.toIndex)b.wrapper.insertAdjacentHTML("afterbegin",c);else{var d=b.wrapperSelector+" ."+b.toClass+(a.toIndex-1),f=document.querySelector(d);f.insertAdjacentHTML("afterend",c)}var g=b.toClass+a.toIndex,i={toIndexClass:g,word:document.querySelector(b.wrapperSelector+" ."+g),visible:document.querySelector(b.wrapperSelector+" ."+g+b.visibleClass),invisible:document.querySelector(b.wrapperSelector+" ."+g+b.invisibleClass),newText:a.toWord};b.settings.verbose&&console.log("insert",i),new h("insert",b,i)})},b.settings.speed)},g.prototype._subAction=function(a){var b=this,c=b.fromClass+a.fromIndex,d={fromIndexClass:c,toIndexClass:b.toClass+a.toIndex,word:document.querySelector(b.wrapperSelector+" ."+c),visible:document.querySelector(b.wrapperSelector+" ."+c+b.visibleClass),invisible:document.querySelector(b.wrapperSelector+" ."+c+b.invisibleClass),newText:a.toWord};b.settings.verbose&&console.log("sub",d),new h("sub",b,d)},g.prototype._keepAction=function(a){var b=this,c=b.fromClass+a.fromIndex,d={fromIndexClass:c,toIndexClass:b.toClass+a.toIndex,word:document.querySelector(b.wrapperSelector+" ."+c)};b.settings.verbose&&console.log("keep",d),new h("keep",b,d)},h.prototype._reIndex=function(){var a=this,b=a.ctx;a.sub.settings.verbose&&console.log("_reIndex ",b.word.innerText," from ",b.fromIndexClass," to ",b.toIndexClass),b.word.className=b.word.className.replace(b.fromIndexClass,b.toIndexClass),a.steps.shift(),a.steps.length>0&&a.steps[0]()},h.prototype._fadeOut=function(){var a=this,b=a.ctx;a.sub.settings.verbose&&console.log("_fadeOut"),b.visible.className+=a.animatingClass,a.steps.shift(),b.visible.addEventListener(a.transitionEnd,a.steps[0],!1),b.invisible.style.width=b.invisible.offsetWidth+"px",b.visible.style.opacity=0},h.prototype._setWidth=function(){var a=this,b=a.ctx;a.sub.settings.verbose&&console.log("_setWidth"),b.visible.className=b.visible.className.replace(a.animatingClass,""),b.invisible.className+=a.animatingClass,b.visible.removeEventListener(a.transitionEnd,a.steps[0],!1),a.steps.shift(),b.invisible.addEventListener(a.transitionEnd,a.steps[0],!1);var c=a._calculateWordWidth(b.newText,a.sub.wrapper.tagName,a.sub.wrapper.className.split(" "));setTimeout(function(){b.invisible.style.width=c+"px"},5)},h.prototype._removeElement=function(){var a=this,b=a.ctx;a.sub.settings.verbose&&console.log("_removeElement"),b.invisible.removeEventListener(a.transitionEnd,a.steps[0],!1),a.sub.wrapper.removeChild(b.word)},h.prototype._setTextAndFadeIn=function(){var a=this,b=a.ctx;a.sub.settings.verbose&&console.log("_setTextAndFadeIn"),b.invisible.className=b.invisible.className.replace(a.animatingClass,""),b.visible.className+=a.animatingClass,b.invisible.removeEventListener(a.transitionEnd,a.steps[0],!1),a.steps.shift(),b.visible.addEventListener(a.transitionEnd,a.steps[0],!1),b.visible.innerHTML=b.newText,b.invisible.innerHTML=b.newText,b.visible.style.opacity=1},h.prototype._cleanUp=function(){var a=this,b=a.ctx;a.sub.settings.verbose&&console.log("_cleanUp"),b.invisible.className=b.invisible.className.replace(a.animatingClass,""),b.visible.className=b.visible.className.replace(a.animatingClass,""),b.visible.removeEventListener(a.transitionEnd,a.steps[0],!1),b.invisible.style.width="auto"},h.prototype._calculateWordWidth=function(b,c,d){var e=this,f=document.createElement(c);d=d||[],d.push(e.sub.settings.namespace+"-text-width-calculation"),f.setAttribute("class",d.join(" ")),f.innerHTML=b,document.body.appendChild(f);var g=parseFloat(a.getComputedStyle(f,null).width);return f.parentNode.removeChild(f),g},a.Sub=g}(window);
</script>

</head>
<body id="landing-page">




<main>
<section class="section section-relative " id="page-block-lg6mrzj27u" data-at="section">
<div class="section-holder-border item-block item-absolute" data-at="section-border"></div>
<div class="section-holder-overlay item-block item-absolute" data-at="section-overlay"></div>
<div class="section-block">
<div class="section-inner section-fit section-relative">
<div class="widget item-absolute  " id="element-44">
<div class="contents cropped item-block" data-at="image-cropp">
</div>
</div>
<div class="widget item-absolute  " id="element-43">
<div class="contents cropped item-block" data-at="image-cropp">
<img class="item-content-box item-block image " data-at="image" alt="" src="//v.fastcdn.co/u/f054cc68/63020970-0-Group-10565.png" srcset="//v.fastcdn.co/u/f054cc68/63020970-0-Group-10565.png 2x">
</div>
</div>
<div class="widget item-absolute  " id="element-1">
<div class="contents html-widget__text-center " data-at="html">
<div id="embedded-lock"></div>
<script src="https://cdn.auth0.com/js/lock/11.16.3/lock.min.js"></script>
<script src='https://legacy.logrocket-assets.io/js/signup-page.js'></script>
<script src='https://legacy.logrocket-assets.io/js/signup.js'></script>
<style>
@media screen and (max-width: 767px) {
  .auth0-lock.auth0-lock .auth0-lock-cred-pane-internal-wrapper {
    height: 70vh;
  }</style>
</div>
</div>
<div class="widget item-absolute headline  " id="element-15" data-at="headline">
<div class="contents">
<h1>
<span class="x_90aba03d x_ed8d3663"><span class="x_f2074b6c">Isolate Node bugs that actually matter</span></span>
</h1>
</div>
</div>
<div class="widget item-absolute paragraph  " id="element-16" data-at="paragraph">
<div class="contents">
<p class="x_3579aa00 x_ef245e2e"><span class="x_f2074b6c">Inspect <strong>logs</strong>, <strong>network data</strong> and <strong>DOM states</strong> leading up to errors</span></p>
</div>
</div>
<div class="widget item-absolute  " id="element-20">
<div class="contents cropped item-block" data-at="image-cropp">
<img class="item-content-box item-block image " data-at="image" alt="" src="//v.fastcdn.co/u/f054cc68/62003885-0-inspect-logs.svg" srcset="//v.fastcdn.co/u/f054cc68/62003885-0-inspect-logs.svg 2x">
</div>
</div>
<div class="widget item-absolute paragraph  " id="element-17" data-at="paragraph">
<div class="contents">
<p class="x_3579aa00 x_ef245e2e"><span class="x_f2074b6c"><strong>Troubleshoot</strong> customer issues and fix problems faster</span></p>
</div>
</div>
<div class="widget item-absolute  " id="element-22">
<div class="contents cropped item-block" data-at="image-cropp">
<img class="item-content-box item-block image " data-at="image" alt="" src="//v.fastcdn.co/u/f054cc68/62003878-0-troubleshoot-faster.svg" srcset="//v.fastcdn.co/u/f054cc68/62003878-0-troubleshoot-faster.svg 2x">
</div>
</div>
<div class="widget item-absolute paragraph  " id="element-18" data-at="paragraph">
<div class="contents">
<p class="x_3579aa00 x_ef245e2e"><span class="x_f2074b6c">Deeply <strong>understand</strong> your users by watching them use your product</span></p>
</div>
</div>
<div class="widget item-absolute  " id="element-42">
<div class="contents cropped item-block" data-at="image-cropp">
<img class="item-content-box item-block image " data-at="image" alt="" src="//v.fastcdn.co/u/f054cc68/63020974-0-Group-10566.png" srcset="//v.fastcdn.co/u/f054cc68/63020974-0-Group-10566.png 2x">
</div>
</div>
<div class="widget item-absolute  " id="element-23">
<div class="contents cropped item-block" data-at="image-cropp">
<img class="item-content-box item-block image " data-at="image" alt="" src="//v.fastcdn.co/u/f054cc68/62003882-0-deeply-understand.svg" srcset="//v.fastcdn.co/u/f054cc68/62003882-0-deeply-understand.svg 2x">
</div>
</div>
</div>
</div>
</section>
<section class="section section-relative " id="page_block_footer" data-at="section">
<div class="section-holder-border item-block item-absolute" data-at="section-border"></div>
<div class="section-holder-overlay item-block item-absolute" data-at="section-overlay"></div>
<div class="section-block">
<div class="section-inner section-fit section-relative">
<div class="widget item-absolute headline  " id="element-46" data-at="headline">
<div class="contents">
<h1>
<span class="x_06cb0376 x_66d76769"><span class="x_f2074b6c">Trusted by</span></span>
</h1>
</div>
</div>
<div class="widget item-absolute  " id="element-47">
<div class="contents cropped item-block" data-at="image-cropp">
<img class="item-content-box item-block image " data-at="image" alt="" src="//v.fastcdn.co/u/f054cc68/63021060-0-442c2333d9fecaf9e23c.svgw73h52autoformat" srcset="//v.fastcdn.co/u/f054cc68/63021060-0-442c2333d9fecaf9e23c.svgw73h52autoformat 2x">
</div>
</div>
<div class="widget item-absolute  " id="element-51">
<div class="contents cropped item-block" data-at="image-cropp">
<img class="item-content-box item-block image " data-at="image" alt="" src="//v.fastcdn.co/u/f054cc68/63021082-0-e93abb9193362a1f8f11.svgw62h46autoformat" srcset="//v.fastcdn.co/u/f054cc68/63021082-0-e93abb9193362a1f8f11.svgw62h46autoformat 2x">
</div>
</div>
<div class="widget item-absolute  " id="element-48">
<div class="contents cropped item-block" data-at="image-cropp">
<img class="item-content-box item-block image " data-at="image" alt="" src="//v.fastcdn.co/u/f054cc68/63021067-0-dee9e1ba65ab54209236.svgw74h43autoformat" srcset="//v.fastcdn.co/u/f054cc68/63021067-0-dee9e1ba65ab54209236.svgw74h43autoformat 2x">
</div>
</div>
<div class="widget item-absolute  " id="element-52">
<div class="contents cropped item-block" data-at="image-cropp">
<img class="item-content-box item-block image " data-at="image" alt="" src="//v.fastcdn.co/u/f054cc68/63021089-0-adbd8cf0e0ed841d77f2.svgw108h34autoformat" srcset="//v.fastcdn.co/u/f054cc68/63021089-0-adbd8cf0e0ed841d77f2.svgw108h34autoformat 2x">
</div>
</div>
<div class="widget item-absolute  " id="element-50">
<div class="contents cropped item-block" data-at="image-cropp">
<img class="item-content-box item-block image " data-at="image" alt="" src="//v.fastcdn.co/u/f054cc68/63021075-0-dd98450c7535b08ad395.svgw80h28autoformat" srcset="//v.fastcdn.co/u/f054cc68/63021075-0-dd98450c7535b08ad395.svgw80h28autoformat 2x">
</div>
</div>
<div class="widget item-absolute  " id="element-61">
<div class="contents cropped item-block" data-at="image-cropp">
<img class="item-content-box item-block image " data-at="image" alt="" src="//v.fastcdn.co/u/f054cc68/63021114-0-1f59164bcb5815c3e47e.svgw86h30autoformat" srcset="//v.fastcdn.co/u/f054cc68/63021114-0-1f59164bcb5815c3e47e.svgw86h30autoformat 2x">
</div>
</div>
<div class="widget item-absolute  " id="element-60">
<div class="contents cropped item-block" data-at="image-cropp">
<img class="item-content-box item-block image " data-at="image" alt="" src="//v.fastcdn.co/u/f054cc68/63021112-0-b5f224d93f63adba8c5a.svgw109h28autoformat" srcset="//v.fastcdn.co/u/f054cc68/63021112-0-b5f224d93f63adba8c5a.svgw109h28autoformat 2x">
</div>
</div>
<div class="widget item-absolute  " id="element-49">
<div class="contents cropped item-block" data-at="image-cropp">
<img class="item-content-box item-block image " data-at="image" alt="" src="//v.fastcdn.co/u/f054cc68/63021070-0-44b15c011c0d1e4fcf7a.svgw115h17autoformat" srcset="//v.fastcdn.co/u/f054cc68/63021070-0-44b15c011c0d1e4fcf7a.svgw115h17autoformat 2x">
</div>
</div>
<div class="widget item-absolute  " id="element-57">
<div class="contents cropped item-block" data-at="image-cropp">
<img class="item-content-box item-block image " data-at="image" alt="" src="//v.fastcdn.co/u/f054cc68/63021105-0-f63c7ec782497cc3c495.pngw68h45autoformat" srcset="//v.fastcdn.co/u/f054cc68/63021105-0-f63c7ec782497cc3c495.pngw68h45autoformat 2x">
</div>
</div>
<div class="widget item-absolute  " id="element-62">
<div class="contents cropped item-block" data-at="image-cropp">
<img class="item-content-box item-block image " data-at="image" alt="" src="//v.fastcdn.co/u/f054cc68/63021119-0-fa4323a8dca554f4b9ae.svgw77h41autoformat" srcset="//v.fastcdn.co/u/f054cc68/63021119-0-fa4323a8dca554f4b9ae.svgw77h41autoformat 2x">
</div>
</div>
<div class="widget item-absolute  " id="element-55">
<div class="contents cropped item-block" data-at="image-cropp">
<img class="item-content-box item-block image " data-at="image" alt="" src="//v.fastcdn.co/u/f054cc68/63021101-0-1431e4e37c50e7083781.svgw82h38autoformat" srcset="//v.fastcdn.co/u/f054cc68/63021101-0-1431e4e37c50e7083781.svgw82h38autoformat 2x">
</div>
</div>
<div class="widget item-absolute  " id="element-54">
<div class="contents cropped item-block" data-at="image-cropp">
</div>
</div>
<div class="widget item-absolute  " id="element-58">
<div class="contents cropped item-block" data-at="image-cropp">
<img class="item-content-box item-block image " data-at="image" alt="" src="//v.fastcdn.co/u/f054cc68/63021106-0-5418b1027ac5d11bc300.svgw66h33autoformat" srcset="//v.fastcdn.co/u/f054cc68/63021106-0-5418b1027ac5d11bc300.svgw66h33autoformat 2x">
</div>
</div>
<div class="widget item-absolute  " id="element-59">
<div class="contents cropped item-block" data-at="image-cropp">
<img class="item-content-box item-block image " data-at="image" alt="" src="//v.fastcdn.co/u/f054cc68/63021107-0-ca05d72ccf86c16ad70d.svgw86h31autoformat" srcset="//v.fastcdn.co/u/f054cc68/63021107-0-ca05d72ccf86c16ad70d.svgw86h31autoformat 2x">
</div>
</div>
<div class="widget item-absolute  " id="element-53">
<div class="contents cropped item-block" data-at="image-cropp">
<img class="item-content-box item-block image " data-at="image" alt="" src="//v.fastcdn.co/u/f054cc68/63021093-0-8a867936f09fc13ccbb1.svgw105h26autoformat" srcset="//v.fastcdn.co/u/f054cc68/63021093-0-8a867936f09fc13ccbb1.svgw105h26autoformat 2x">
</div>
</div>
<div class="widget item-absolute  " id="element-56">
<div class="contents cropped item-block" data-at="image-cropp">
<img class="item-content-box item-block image " data-at="image" alt="" src="//v.fastcdn.co/u/f054cc68/63021102-0-2206594d3c40dd8cfa2e.svgw74h16autoformat" srcset="//v.fastcdn.co/u/f054cc68/63021102-0-2206594d3c40dd8cfa2e.svgw74h16autoformat 2x">
</div>
</div>
</div>
</div>
</section>
<section class="section section-relative " id="page-block-2i3fq4hrzb" data-at="section">
<div class="section-holder-border item-block item-absolute" data-at="section-border"></div>
<div class="section-holder-overlay item-block item-absolute" data-at="section-overlay"></div>
<div class="section-block">
<div class="section-inner section-fit section-relative">
<div class="widget item-absolute paragraph  " id="element-35" data-at="paragraph">
<div class="contents">
<p class="x_b0120a37 x_70ee4658"><span class="x_f2074b6c">Copyright © 2022 LogRocket, Inc</span></p>
</div>
</div>
<div class="widget item-absolute paragraph  " id="element-26" data-at="paragraph">
<div class="contents">
<p class="x_70ee4658 x_dc6c6e10"><span class="x_f2074b6c"><a href="https://logrocket.com/privacy" id="link-c7kwfl1y3ub" target="_blank" data-link-c7kwfl1y3ub class="url-link">Privacy Policy</a>&nbsp; &nbsp; &nbsp; |&nbsp; &nbsp; &nbsp; <a href="https://logrocket.com/terms-and-conditions/" id="link-dl2u5cuc2af" target="_blank" data-link-dl2u5cuc2af class="url-link">Terms and Conditions</a></span></p>
</div>
</div>
<div class="widget item-absolute paragraph  " id="element-28" data-at="paragraph">
<div class="contents">
<p class="x_b0120a37"><span class="x_f2074b6c">Made with</span></p>
</div>
</div>
<div class="widget item-absolute paragraph  " id="element-29" data-at="paragraph">
<div class="contents">
<p class="x_207b1059 x_b0120a37"><span class="x_f2074b6c">in Boston and around the world</span></p>
</div>
</div>
<div class="widget item-absolute  " id="element-27">
<div class="contents cropped item-block" data-at="image-cropp">
<img class="item-content-box item-block image img-lazy" data-at="image" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM89h8AApEBx2iaqpQAAAAASUVORK5CYII&#x3D;" data-src="//v.fastcdn.co/u/f054cc68/63021600-0-Path-131.png" data-retina-src="//v.fastcdn.co/u/f054cc68/63021600-0-Path-131.png">
</div>
</div>
</div>
</div>
</section>
</main>



<script>
window.instapageFormSubmitSuccess = function(form){
    // here is your code to execute
    // form variable holds submitted form
  var param1 = form.querySelector('input[name="'+'Email'+'"]').value;
  analytics.identify(param1);
  analytics.track('instapage-form-submit');
};
</script>

<script src="//g.fastcdn.co/js/utils.cd5b4894ab46ac49c25b.js"></script>
<script src="//g.fastcdn.co/js/Cradle.c8a924beaefacc03f9bd.js"></script>
<script src="//g.fastcdn.co/js/LazyImage.90aa95d960c719e556c2.js"></script>


</body>
</html>
