!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="8456cb7b-7c88-4f65-b953-f98874fa9694",e._sentryDebugIdIdentifier="sentry-dbid-8456cb7b-7c88-4f65-b953-f98874fa9694")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"6f90bd8ea1ba6b9634ad70449708b82b6bb865f9"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[9201],{33244:function(e,t,a){var n=a(67294),l=a(93416),r=a(22648);t.Z=function(e){var t=e.children;return(0,r.m)()?n.createElement(l.Layer,{full:!0},n.createElement(l.Flex,{width:"100%",background:"mainBackground","data-testid":"alertView-mobileContainer"},t)):t}},62567:function(e,t,a){a.d(t,{Z:function(){return B}});var n=a(67294),l=a(93416),r=a(12008),o=a(78266),i=a(22648),d=a(37518),c=a(92253),s=a(80854),u=a(32071),m=a(39840),f=a(89250),g=a(4822),b=a(97945),E=a(71893),p=(0,E.default)(l.Flex).attrs({alignItems:"center"}).withConfig({displayName:"styled__StyledButtonContainer",componentId:"sc-1glv09p-0"})(["position:sticky;bottom:0;"]),h=function(e){var t=e.disabled,a=e.nodeId,r=e.alertId,o=e.context,i=e.lastStatusChange,d=e.onClose,c=e.isLoading,s=e.small,u=void 0!==s&&s,m=e.testid,E=void 0===m?"alertDetailsModal":m,h=(0,f.s0)(),w=(0,b.m3)(a),I=(0,n.useCallback)((function(){d&&d(),h(w,r?{state:{alertId:r}}:{state:{contextToGo:o}})}),[w,r]),v=(0,g.TQ)(),y=(0,n.useCallback)((function(){var e=1e3*i;v({highlight:{after:e-6e4,before:e},correlation:!0}),I()}),[i,o,I,r]);return n.createElement(p,{justifyContent:"end",gap:2},n.createElement(l.Flex,{gap:2,justifyContent:"end"},n.createElement(l.Button,{small:u,label:"Run correlations",onClick:y,flavour:"hollow",isLoading:c,width:u?"112px":"170px","data-testid":"".concat(E,"-runCorrelations-button"),"data-ga":"alert-modal::click-run-correlations::alerts-view"}),n.createElement(l.Button,{small:u,label:"Go to chart",onClick:I,isLoading:c,disabled:c||t,width:u?"112px":"150px","data-testid":"".concat(E,"-goToNode-button"),"data-ga":"alert-modal::click-goto-chart::alerts-view"})))},w=(0,n.memo)(h),I=a(29876),v=a(54244),y=function(e){var t=e.alertId,a=e.context,r=e.name,o=e.nodeId,d=e.status,c=e.lastStatusChange,s=e.fullyLoaded,u=e.isWebview,m=(0,i.m)(),f=m?l.H4:l.H0;return n.createElement(l.Flex,{column:!0,gap:4},n.createElement(l.Flex,{justifyContent:"between"},n.createElement(l.Flex,{alignItems:"center",gap:2},n.createElement(v.Z,{margin:m?null:[.5,0,0],flavour:d,"data-testid":"alertView-statusPill"},d),n.createElement(f,{"data-testid":"alertView-alertName"},r)),!1),n.createElement(l.Flex,{justifyContent:"between",alignItems:"center"},n.createElement(I.Z,{alertId:t}),!u&&s&&!m&&n.createElement(w,{lastStatusChange:c,alertId:t,context:a,name:r,nodeId:o,small:!0,testid:"alertView"})))},x=a(46189),C=a(63346),k=E.default.img.withConfig({displayName:"sc-404__Illustration",componentId:"sc-4w81fg-0"})(["height:35%;width:35%;"]),Z=E.default.div.withConfig({displayName:"sc-404__ButtonContainer",componentId:"sc-4w81fg-1"})(["margin:",";"],(0,l.getSizeBy)(4)),L=function(){var e="".concat(x.Z.assetsBaseURL,"/img/no-nodes-room.svg");return n.createElement(C.Ht,null,n.createElement(l.Flex,{column:!0,alignItems:"center",justifyItems:"center",justifyContent:"center",height:"100%",width:"100%",padding:[0,0,"10%"]},n.createElement(k,{src:e,alt:"Unreachable alert",title:"Unreachable alert"}),n.createElement(l.H3,null,"We couldn't find the alert"),n.createElement(l.Text,null,"This can be a temporary problem of that specific alert."),n.createElement(Z,null,n.createElement(l.Button,{label:"Retry",icon:"reload"}))))},S=a(50709),V=a(34735),_=a(82210),F=function(e){var t=e.children;return n.createElement(l.Flex,{background:"modalHeaderBackground",height:12,flex:!1,gap:4,padding:[0,2,0,4],alignItems:"center"},n.createElement(l.Icon,{name:"logo_s",color:"success",width:"23px"}),t)},B=function(e){var t=e.alertId,a=e.spaceId,f=e.roomId,g=e.isWebview,b=e.nodeName,E=(0,d.Hm)("name"),p=(0,V.Z)().isNodeRestricted,h=(0,r.E5)(t),w=h.fullyLoaded,I=void 0!==w&&w,v=h.fullyLoading,x=void 0===v||v,k=h.info,Z=h.units,B=h.lastStatusChangeValue,T=h.lastStatusChange,N=h.context,R=h.instance,D=h.name,H=h.nodeId,j=h.status,U=h.lastUpdated,A=h.value;(0,r.yx)(t,{spaceId:a,roomId:f});var W=(0,m.pK)(A,Z),G=(0,m.pK)(B,Z),O=(0,i.m)();return H&&p(H)?n.createElement(C.ZP,{feature:"AlertDetailsViewRestricted"},n.createElement(_.Z,null)):n.createElement(C.ZP,{feature:"AlertDetailsView"},n.createElement(l.Flex,{column:!0,width:O?"100%":{max:280},padding:O?null:[0,0,10],background:O?"modalBackground":null},!g&&O&&n.createElement(F,null,n.createElement(l.Flex,{column:!0},n.createElement(l.H6,{color:"textLite"},"ROOM"),n.createElement(l.Text,{"data-testid":"alertView-mobile-roomName"},E))),n.createElement(l.Flex,{column:!0,padding:O?[3]:[0],overflow:O?"auto":"visible",gap:3},n.createElement(y,{alertId:t,context:N,status:j,name:D,nodeId:H,lastStatusChange:T,fullyLoaded:I,isWebview:g}),I?null:x?n.createElement(o.Z,{title:"Loading alert..."}):n.createElement(L,null),I&&k&&n.createElement(n.Fragment,null,n.createElement(s.Z,{iconName:"documentation"},"Alert Description"),n.createElement(l.Text,{"data-testid":"alertView-info"},k),n.createElement(S.Z,{alertId:t})),I&&n.createElement(c.Z,{id:t,context:N,instance:R,formattedLastValue:W,formattedLastStatusChangeValue:G,lastStatusChange:T,lastUpdated:U,isFormattedValueLoaded:I,nodeId:H,status:j,testid:"alertView",spaceId:a,roomId:f}),I&&n.createElement(u.Z,{id:t,nodeName:b,testid:"alertView"})),O&&n.createElement(l.Box,{position:"sticky",padding:[4],background:"modalBackground",bottom:0,border:{side:"top",color:"border"}},n.createElement(l.TextSmall,null,"In order to ",n.createElement(l.TextSmall,{strong:!0},"Run Correlations")," or"," ",n.createElement(l.TextSmall,{strong:!0},"View the Chart")," you will have to visit this alert from its' dedicated page on a desktop device."))))}},69201:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var n=a(67294),l=a(54227),r=a(12008),o=a(91268),i=a(78266),d=a(45987),c=(a(74916),a(64765),a(89250)),s=a(12599),u=a(17563),m=["alertId"],f=a(62567),g=a(33244),b=function(){var e=function(){var e=(0,c.UO)(),t=e.alertId,a=(0,d.Z)(e,m),l=(0,c.TH)().search,r=u.parse(l).transition,o=(0,n.useRef)(r||t),i=(0,c.s0)();return(0,n.useEffect)((function(){r&&r!==t&&i((0,s.Gn)("/spaces/:spaceSlug/rooms/:roomSlug/alerts/".concat(r),a),{replace:!0})}),[t,r]),o.current}(),t=(0,r.E5)(e),a=t.name,b=void 0===a?"unknown alert":a,E=t.fullyLoaded,p=void 0!==E&&E,h=(0,r.Bk)();return(0,l.bV)({title:b,id:e,destination:e,params:location.hash,type:"alerts",isReady:p}),h?n.createElement(o.Z,{overflow:{vertical:"auto"},margin:[0,0,8],padding:[3]},h&&n.createElement(g.Z,null,n.createElement(f.Z,{alertId:e}))):n.createElement(i.Z,{title:"Loading alert..."})}}}]);