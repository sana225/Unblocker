// Any scripts that need to be preloaded in advance, like ads or analytics

// UV Service Worker

const swAllowedHostnames = ["localhost", "127.0.0.1"];

async function registerSW() {
    console.log("Starting registration...")
  if (
    location.protocol !== "https:" &&
    !swAllowedHostnames.includes(location.hostname)
  )
    throw new Error("Service workers cannot be registered without https.");

  if (!navigator.serviceWorker)
    throw new Error("Your browser doesn't support service workers.");

  await navigator.serviceWorker.register('sw.js', {
    scope: __uv$config.prefix,
  }).then(() => {
    console.log("Registered!")
  })
  
}

registerSW()

// Font Awesome
const fa = document.createElement("link")
fa.href = "https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@4cac1a6/css/all.css";
fa.rel = "stylesheet"
fa.type = "text/css"
document.head.appendChild(fa)

// Posthog
!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init('phc_4OGwIhy8LF5lGwHGLmSlF1gFAq0ey8luF6MUo34pyJQ',{api_host:'https://hog.intoabyss.org'})

// backup analytics
!function(){"use strict";var a=window.location,r=window.document,o=r.currentScript,l=new URL(o.src).origin+"/api/event";function s(t,e){t&&console.warn("Ignoring Event: "+t),e&&e.callback&&e.callback()}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(a.hostname)||"file:"===a.protocol)return s("localhost",e);if(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)return s(null,e);try{if("true"===window.localStorage.plausible_ignore)return s("localStorage flag",e)}catch(t){}var n={},i=(n.n=t,n.u=a.href,n.d="artclass.site",n.r=r.referrer||null,e&&e.meta&&(n.m=JSON.stringify(e.meta)),e&&e.props&&(n.p=e.props),new XMLHttpRequest);i.open("POST",l,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(n)),i.onreadystatechange=function(){4===i.readyState&&e&&e.callback&&e.callback()}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var n,i=0;i<e.length;i++)t.apply(this,e[i]);function p(){n!==a.pathname&&(n=a.pathname,t("pageview"))}var c,w=window.history;w.pushState&&(c=w.pushState,w.pushState=function(){c.apply(this,arguments),p()},window.addEventListener("popstate",p)),"prerender"===r.visibilityState?r.addEventListener("visibilitychange",function(){n||"visible"!==r.visibilityState||p()}):p()}();

// CSS Scripts

const hover = document.createElement("link")
hover.href = "https://cdn.jsdelivr.net/gh/ianlunn/hover/css/hover-min.css"
hover.rel = "stylesheet"
document.head.appendChild(hover)

// Google Analytics
var googleAnalytics = document.createElement("script")
googleAnalytics.src = "https://www.googletagmanager.com/gtag/js?id=G-66ZE075DLD"
googleAnalytics.async = true
document.head.appendChild(googleAnalytics)

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-66ZE075DLD');