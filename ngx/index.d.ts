import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name apk-download
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { apk-download } from '@ionic-native/apk-download';
 *
 *
 * constructor(private apk-download: apk-download) { }
 *
 * ...
 *
 *
 * this.apk-download.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class ApkDownload extends IonicNativePlugin {
    /**
     * This function does something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    initPlugin(options: ApkDownloadOptions): Promise<any>;
    setProgressListener(progress?: SuccessCallback<any>, error?: ErrorCallback<any>): void;
    startTask(option: ApkDownloadStartOption): Promise<any>;
    pauseTask(option: any): Promise<any>;
    resumeTask(option: any): Promise<any>;
    getTask(option: any): Promise<any>;
    installApk(option: ApkDownloadInstallOption): Promise<any>;
    checkDiskSpace(option: any): Promise<any>;
}
export interface ApkDownloadOptions {
    autoInstall: boolean;
    enableNotification: boolean;
    notificationClickInstall: boolean;
    fileSaveDir: string;
    diskWarnSize: number;
}
export interface ApkDownloadInstallOption {
    fileLocalPath: string;
}
export interface ApkDownloadStartOption {
    fileUrl: string;
    fileSaveName: string;
    versionName: string;
}
export declare type SuccessCallback<T> = (result?: T) => void;
export declare type ErrorCallback<T> = (result?: T) => void;
