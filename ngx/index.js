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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var ApkDownload = /** @class */ (function (_super) {
    __extends(ApkDownload, _super);
    function ApkDownload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApkDownload.prototype.initPlugin = function (options) { return cordova(this, "initPlugin", {}, arguments); };
    ApkDownload.prototype.setProgressListener = function (progress, error) { return cordova(this, "setProgressListener", {}, arguments); };
    ApkDownload.prototype.startTask = function (option) { return cordova(this, "startTask", {}, arguments); };
    ApkDownload.prototype.pauseTask = function (option) { return cordova(this, "pauseTask", {}, arguments); };
    ApkDownload.prototype.resumeTask = function (option) { return cordova(this, "resumeTask", {}, arguments); };
    ApkDownload.prototype.getTask = function (option) { return cordova(this, "getTask", {}, arguments); };
    ApkDownload.prototype.installApk = function (option) { return cordova(this, "installApk", {}, arguments); };
    ApkDownload.prototype.checkDiskSpace = function (option) { return cordova(this, "checkDiskSpace", {}, arguments); };
    ApkDownload.pluginName = "ApkDownload";
    ApkDownload.plugin = "cordova-plugin-apk-download";
    ApkDownload.pluginRef = "cordova.plugins.ApkDownload";
    ApkDownload.repo = "";
    ApkDownload.install = "ionic cordova plugin add cordova-plugin-apk-download";
    ApkDownload.installVariables = [];
    ApkDownload.platforms = ["Android"];
    ApkDownload = __decorate([
        Injectable()
    ], ApkDownload);
    return ApkDownload;
}(IonicNativePlugin));
export { ApkDownload };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Fway1kb3dubG9hZC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0dBVUc7QUFDSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBT04sTUFBTSxvQkFBb0IsQ0FBQzs7SUFrQ0ssK0JBQWlCOzs7O0lBUWhELGdDQUFVLGFBQUMsT0FBMkI7SUFLdEMseUNBQW1CLGFBQUMsUUFBK0IsRUFBRSxLQUEwQjtJQUsvRSwrQkFBUyxhQUFDLE1BQThCO0lBS3hDLCtCQUFTLGFBQUMsTUFBVztJQUtyQixnQ0FBVSxhQUFDLE1BQVc7SUFLdEIsNkJBQU8sYUFBQyxNQUFXO0lBS25CLGdDQUFVLGFBQUMsTUFBZ0M7SUFLM0Msb0NBQWMsYUFBQyxNQUFXOzs7Ozs7OztJQTNDZixXQUFXO1FBRHZCLFVBQVUsRUFBRTtPQUNBLFdBQVc7c0JBckR4QjtFQXFEaUMsaUJBQWlCO1NBQXJDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xuICpcbiAqIFRPRE86XG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcbiAqIC0gRG9jdW1lbnQgdXNhZ2UgKGltcG9ydGluZywgZXhlY3V0aW5nIG1haW4gZnVuY3Rpb25hbGl0eSlcbiAqIC0gUmVtb3ZlIGFueSBpbXBvcnRzIHRoYXQgeW91IGFyZSBub3QgdXNpbmdcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXG4gKiAtIFJlbW92ZSB0aGlzIG5vdGVcbiAqXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFBsdWdpbixcbiAgQ29yZG92YSxcbiAgQ29yZG92YVByb3BlcnR5LFxuICBDb3Jkb3ZhSW5zdGFuY2UsXG4gIEluc3RhbmNlUHJvcGVydHksXG4gIElvbmljTmF0aXZlUGx1Z2luXG59IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQG5hbWUgYXBrLWRvd25sb2FkXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBhcGstZG93bmxvYWQgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2Fway1kb3dubG9hZCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBrLWRvd25sb2FkOiBhcGstZG93bmxvYWQpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmFway1kb3dubG9hZC5mdW5jdGlvbk5hbWUoJ0hlbGxvJywgMTIzKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0Fwa0Rvd25sb2FkJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYXBrLWRvd25sb2FkJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5BcGtEb3dubG9hZCcsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcmVwbzogJycsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1hcGstZG93bmxvYWQnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwa0Rvd25sb2FkIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGRvZXMgc29tZXRoaW5nXG4gICAqIEBwYXJhbSBhcmcyIHtudW1iZXJ9IEFub3RoZXIgcGFyYW0gdG8gY29uZmlndXJlIHNvbWV0aGluZ1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpbml0UGx1Z2luKG9wdGlvbnM6IEFwa0Rvd25sb2FkT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBzZXRQcm9ncmVzc0xpc3RlbmVyKHByb2dyZXNzPzogU3VjY2Vzc0NhbGxiYWNrPGFueT4sIGVycm9yPzogRXJyb3JDYWxsYmFjazxhbnk+KTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBzdGFydFRhc2sob3B0aW9uOiBBcGtEb3dubG9hZFN0YXJ0T3B0aW9uKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHBhdXNlVGFzayhvcHRpb246IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICByZXN1bWVUYXNrKG9wdGlvbjogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGdldFRhc2sob3B0aW9uOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgaW5zdGFsbEFwayhvcHRpb246IEFwa0Rvd25sb2FkSW5zdGFsbE9wdGlvbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBjaGVja0Rpc2tTcGFjZShvcHRpb246IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcGtEb3dubG9hZE9wdGlvbnMge1xuICBhdXRvSW5zdGFsbDogYm9vbGVhbjtcbiAgZW5hYmxlTm90aWZpY2F0aW9uOiBib29sZWFuO1xuICBub3RpZmljYXRpb25DbGlja0luc3RhbGw6IGJvb2xlYW47XG4gIGZpbGVTYXZlRGlyOiBzdHJpbmc7XG4gIGRpc2tXYXJuU2l6ZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwa0Rvd25sb2FkSW5zdGFsbE9wdGlvbiB7XG4gIGZpbGVMb2NhbFBhdGg6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcGtEb3dubG9hZFN0YXJ0T3B0aW9uIHtcbiAgZmlsZVVybDogc3RyaW5nO1xuICBmaWxlU2F2ZU5hbWU6IHN0cmluZztcbiAgdmVyc2lvbk5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgU3VjY2Vzc0NhbGxiYWNrPFQ+ID0gKHJlc3VsdD86IFQpID0+IHZvaWQ7XG5leHBvcnQgdHlwZSBFcnJvckNhbGxiYWNrPFQ+ID0gKHJlc3VsdD86IFQpID0+IHZvaWQ7XG4iXX0=