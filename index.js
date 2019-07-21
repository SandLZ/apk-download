var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var ApkDownloadOriginal = /** @class */ (function (_super) {
    __extends(ApkDownloadOriginal, _super);
    function ApkDownloadOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApkDownloadOriginal.prototype.initPlugin = function (options) { return cordova(this, "initPlugin", {}, arguments); };
    ApkDownloadOriginal.prototype.setProgressListener = function (progress, error) { return cordova(this, "setProgressListener", {}, arguments); };
    ApkDownloadOriginal.prototype.startTask = function (option) { return cordova(this, "startTask", {}, arguments); };
    ApkDownloadOriginal.prototype.pauseTask = function (option) { return cordova(this, "pauseTask", {}, arguments); };
    ApkDownloadOriginal.prototype.resumeTask = function (option) { return cordova(this, "resumeTask", {}, arguments); };
    ApkDownloadOriginal.prototype.getTask = function (option) { return cordova(this, "getTask", {}, arguments); };
    ApkDownloadOriginal.prototype.installApk = function (option) { return cordova(this, "installApk", {}, arguments); };
    ApkDownloadOriginal.prototype.checkDiskSpace = function (option) { return cordova(this, "checkDiskSpace", {}, arguments); };
    ApkDownloadOriginal.pluginName = "ApkDownload";
    ApkDownloadOriginal.plugin = "cordova-plugin-apk-download";
    ApkDownloadOriginal.pluginRef = "cordova.plugins.ApkDownload";
    ApkDownloadOriginal.repo = "";
    ApkDownloadOriginal.install = "ionic cordova plugin add cordova-plugin-apk-download";
    ApkDownloadOriginal.installVariables = [];
    ApkDownloadOriginal.platforms = ["Android"];
    return ApkDownloadOriginal;
}(IonicNativePlugin));
var ApkDownload = new ApkDownloadOriginal();
export { ApkDownload };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Fway1kb3dubG9hZC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBWUEsT0FBTyw4QkFPTixNQUFNLG9CQUFvQixDQUFDOztJQWtDSywrQkFBaUI7Ozs7SUFRaEQsZ0NBQVUsYUFBQyxPQUEyQjtJQUt0Qyx5Q0FBbUIsYUFBQyxRQUErQixFQUFFLEtBQTBCO0lBSy9FLCtCQUFTLGFBQUMsTUFBOEI7SUFLeEMsK0JBQVMsYUFBQyxNQUFXO0lBS3JCLGdDQUFVLGFBQUMsTUFBVztJQUt0Qiw2QkFBTyxhQUFDLE1BQVc7SUFLbkIsZ0NBQVUsYUFBQyxNQUFnQztJQUszQyxvQ0FBYyxhQUFDLE1BQVc7Ozs7Ozs7O3NCQWhHNUI7RUFxRGlDLGlCQUFpQjtTQUFyQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGlzIGEgdGVtcGxhdGUgZm9yIG5ldyBwbHVnaW4gd3JhcHBlcnNcbiAqXG4gKiBUT0RPOlxuICogLSBBZGQvQ2hhbmdlIGluZm9ybWF0aW9uIGJlbG93XG4gKiAtIERvY3VtZW50IHVzYWdlIChpbXBvcnRpbmcsIGV4ZWN1dGluZyBtYWluIGZ1bmN0aW9uYWxpdHkpXG4gKiAtIFJlbW92ZSBhbnkgaW1wb3J0cyB0aGF0IHlvdSBhcmUgbm90IHVzaW5nXG4gKiAtIFJlbW92ZSBhbGwgdGhlIGNvbW1lbnRzIGluY2x1ZGVkIGluIHRoaXMgdGVtcGxhdGUsIEVYQ0VQVCB0aGUgQFBsdWdpbiB3cmFwcGVyIGRvY3MgYW5kIGFueSBvdGhlciBkb2NzIHlvdSBhZGRlZFxuICogLSBSZW1vdmUgdGhpcyBub3RlXG4gKlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBQbHVnaW4sXG4gIENvcmRvdmEsXG4gIENvcmRvdmFQcm9wZXJ0eSxcbiAgQ29yZG92YUluc3RhbmNlLFxuICBJbnN0YW5jZVByb3BlcnR5LFxuICBJb25pY05hdGl2ZVBsdWdpblxufSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIEBuYW1lIGFway1kb3dubG9hZFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgYXBrLWRvd25sb2FkIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9hcGstZG93bmxvYWQnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFway1kb3dubG9hZDogYXBrLWRvd25sb2FkKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5hcGstZG93bmxvYWQuZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdBcGtEb3dubG9hZCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFway1kb3dubG9hZCcsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuQXBrRG93bmxvYWQnLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gIHJlcG86ICcnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tYXBrLWRvd25sb2FkJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcGtEb3dubG9hZCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBkb2VzIHNvbWV0aGluZ1xuICAgKiBAcGFyYW0gYXJnMiB7bnVtYmVyfSBBbm90aGVyIHBhcmFtIHRvIGNvbmZpZ3VyZSBzb21ldGhpbmdcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaW5pdFBsdWdpbihvcHRpb25zOiBBcGtEb3dubG9hZE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc2V0UHJvZ3Jlc3NMaXN0ZW5lcihwcm9ncmVzcz86IFN1Y2Nlc3NDYWxsYmFjazxhbnk+LCBlcnJvcj86IEVycm9yQ2FsbGJhY2s8YW55Pik6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc3RhcnRUYXNrKG9wdGlvbjogQXBrRG93bmxvYWRTdGFydE9wdGlvbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBwYXVzZVRhc2sob3B0aW9uOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgcmVzdW1lVGFzayhvcHRpb246IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBnZXRUYXNrKG9wdGlvbjogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGluc3RhbGxBcGsob3B0aW9uOiBBcGtEb3dubG9hZEluc3RhbGxPcHRpb24pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgY2hlY2tEaXNrU3BhY2Uob3B0aW9uOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBrRG93bmxvYWRPcHRpb25zIHtcbiAgYXV0b0luc3RhbGw6IGJvb2xlYW47XG4gIGVuYWJsZU5vdGlmaWNhdGlvbjogYm9vbGVhbjtcbiAgbm90aWZpY2F0aW9uQ2xpY2tJbnN0YWxsOiBib29sZWFuO1xuICBmaWxlU2F2ZURpcjogc3RyaW5nO1xuICBkaXNrV2FyblNpemU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcGtEb3dubG9hZEluc3RhbGxPcHRpb24ge1xuICBmaWxlTG9jYWxQYXRoOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBrRG93bmxvYWRTdGFydE9wdGlvbiB7XG4gIGZpbGVVcmw6IHN0cmluZztcbiAgZmlsZVNhdmVOYW1lOiBzdHJpbmc7XG4gIHZlcnNpb25OYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIFN1Y2Nlc3NDYWxsYmFjazxUPiA9IChyZXN1bHQ/OiBUKSA9PiB2b2lkO1xuZXhwb3J0IHR5cGUgRXJyb3JDYWxsYmFjazxUPiA9IChyZXN1bHQ/OiBUKSA9PiB2b2lkO1xuIl19