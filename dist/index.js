var e,r,o,n=require("nanoid");function t(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r}function s(){return new Promise(function(e){var r=function(e){var r,n;e.source===window&&(null===(r=e.data)||void 0===r?void 0:r.type)===exports.ThanosPageMessageType.Response&&"PONG"===(null===(n=e.data)||void 0===n?void 0:n.payload)&&o(!0)},o=function(o){e(o),window.removeEventListener("message",r),clearTimeout(n)};i({type:exports.ThanosPageMessageType.Request,payload:"PING"}),window.addEventListener("message",r);var n=setTimeout(function(){return o(!1)},100)})}function a(e){return new Promise(function(r,o){var t=n.nanoid();i({type:exports.ThanosPageMessageType.Request,payload:e,reqId:t}),window.addEventListener("message",function e(n){var s=n.data;switch(!0){case n.source!==window||(null==s?void 0:s.reqId)!==t:return;case(null==s?void 0:s.type)===exports.ThanosPageMessageType.Response:r(s.payload),window.removeEventListener("message",e);break;case(null==s?void 0:s.type)===exports.ThanosPageMessageType.ErrorResponse:o(function(e){switch(e){case exports.ThanosDAppErrorType.NotGranted:return new T;case exports.ThanosDAppErrorType.NotFound:return new l;case exports.ThanosDAppErrorType.InvalidParams:return new d;default:return new u}}(s.payload)),window.removeEventListener("message",e)}})})}function p(e){if(!e)throw new Error("Invalid response recieved")}function i(e){window.postMessage(e,"*")}(e=exports.ThanosDAppMessageType||(exports.ThanosDAppMessageType={})).PermissionRequest="PERMISSION_REQUEST",e.PermissionResponse="PERMISSION_RESPONSE",e.OperationRequest="OPERATION_REQUEST",e.OperationResponse="OPERATION_RESPONSE",(r=exports.ThanosDAppErrorType||(exports.ThanosDAppErrorType={})).NotGranted="NOT_GRANTED",r.NotFound="NOT_FOUND",r.InvalidParams="INVALID_PARAMS",(o=exports.ThanosPageMessageType||(exports.ThanosPageMessageType={})).Request="THANOS_PAGE_REQUEST",o.Response="THANOS_PAGE_RESPONSE",o.ErrorResponse="THANOS_PAGE_ERROR_RESPONSE";var u=function(){this.name="ThanosWalletError",this.message="An unknown error occured. Please try again or report it"},c=function(e){function r(){var r;return(r=e.apply(this,arguments)||this).name="ThanosWalletNotConnected",r.message="You need to connect ThanosWallet by calling thanosWallet.connect() first",r}return t(r,e),r}(u),T=function(e){function r(){var r;return(r=e.apply(this,arguments)||this).name="NotGrantedThanosWalletError",r.message="Permission Not Granted",r}return t(r,e),r}(u),l=function(e){function r(){var r;return(r=e.apply(this,arguments)||this).name="NotFoundThanosWalletError",r.message="Account Not Found. Try connect again",r}return t(r,e),r}(u),d=function(e){function r(){var r;return(r=e.apply(this,arguments)||this).name="InvalidParamsThanosWalletError",r.message="Some of the parameters you provided are invalid",r}return t(r,e),r}(u);exports.InvalidParamsThanosWalletError=d,exports.NotConnectedThanosWalletError=c,exports.NotFoundThanosWalletError=l,exports.NotGrantedThanosWalletError=T,exports.ThanosWalletError=u,exports.isAvailable=s,exports.onAvailabilityChange=function(e){var r,o=!1;return function n(t){void 0===t&&(t=0);try{var a=t<5;return Promise.resolve(s()).then(function(s){o!==s&&(e(s),o=s),r=setTimeout(n,s?1e4:a?250:5e3,a?t+1:t)})}catch(e){return Promise.reject(e)}}(),function(){return clearTimeout(r)}},exports.requestOperation=function(e,r){try{return Promise.resolve(a({type:exports.ThanosDAppMessageType.OperationRequest,sourcePkh:e,opParams:r})).then(function(e){return p(e.type===exports.ThanosDAppMessageType.OperationResponse),e.opHash})}catch(e){return Promise.reject(e)}},exports.requestPermission=function(e,r,o){try{return Promise.resolve(a({type:exports.ThanosDAppMessageType.PermissionRequest,network:e,appMeta:r,force:o})).then(function(e){return p(e.type===exports.ThanosDAppMessageType.PermissionResponse),{pkh:e.pkh,rpc:e.rpc}})}catch(e){return Promise.reject(e)}};
//# sourceMappingURL=index.js.map
