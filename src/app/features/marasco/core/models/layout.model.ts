import { config } from '@app/features/marasco/core/smartadmin.config';
import { environment } from '@env/environment';

export class LayoutModel {
  smartSkin: any;
  skin: any;
  skins: any;
  fixedHeader: any;
  fixedNavigation: boolean;
  fixedRibbon: boolean;
  fixedPageFooter: boolean;
  insideContainer: boolean;
  rtl: boolean;
  menuOnTop: boolean;
  colorblindFriendly: boolean;

  shortcutOpen: boolean;
  isMobile: boolean;
  isWeb: boolean;
  device: any;
  mobileViewActivated: boolean;
  menuCollapsed: boolean;
  menuMinified: boolean;
  hideRibbon?: boolean;
  hideBreadcrumbs?: boolean;

  constructor() {
    this.init();
  }

  private init() {
    this.initPlatform();

    if (this.isMobile) {
      this.initMobile();
    } else {
      this.initDesktop();
    }
  }

  private initMobile() {
    let smartSkin = config.mobileSmartSkin;

    this.smartSkin = localStorage.getItem('sm-skin') || smartSkin;
    this.skin = config.skins.find((_skin: any) => {
      return _skin.name === (localStorage.getItem('sm-skin') || smartSkin);
    });

    this.skins = config.skins;
    this.fixedHeader = true; //localStorage.getItem('sm-fixed-header') !== 'true';
    this.fixedNavigation = true; //localStorage.getItem('sm-fixed-navigation') !== 'true';
    this.fixedRibbon = false; //localStorage.getItem('sm-fixed-ribbon') === 'true';
    this.fixedPageFooter = true; //localStorage.getItem('sm-fixed-page-footer') === 'true';
    this.insideContainer = false; //localStorage.getItem('sm-inside-container') === 'true';
    this.rtl = false; //localStorage.getItem('sm-rtl') === 'true';
    this.menuOnTop = true; //localStorage.getItem('sm-menu-on-top') === 'true';
    this.colorblindFriendly = false; //localStorage.getItem('sm-colorblind-friendly') === 'true';
    this.shortcutOpen = false;
    //this.device = '';
    this.mobileViewActivated = true;
    this.menuCollapsed = false;
    this.menuMinified = false;
    this.hideBreadcrumbs = false;
    this.hideRibbon = false;
  }

  private initPlatform() {
    let storageItem = localStorage.getItem(environment.devicekey);

    if (!!storageItem) {
      this.device = JSON.parse(storageItem);
      if (this.device.platform === 'web') {
        this.isWeb = true;
        this.isMobile = false;
      } else {
          this.isWeb = false;
          this.isMobile = true;
      }
    } else {
      this.isMobile = /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(
        navigator.userAgent.toLowerCase()
      );
    }
  }

  private initDesktop() {
    let smartSkin = config.smartSkin;

    this.smartSkin = localStorage.getItem('sm-skin') || smartSkin;

    this.skin = config.skins.find((_skin: any) => {
      return _skin.name === (localStorage.getItem('sm-skin') || smartSkin);
    });

    this.skins = config.skins;
    this.fixedHeader = true; //localStorage.getItem('sm-fixed-header') === null;
    this.fixedNavigation = false; //localStorage.getItem('sm-fixed-navigation') === 'true';
    this.fixedRibbon = false; //localStorage.getItem('sm-fixed-ribbon') === 'true';
    this.fixedPageFooter = true; //localStorage.getItem('sm-fixed-page-footer') === 'true';
    this.insideContainer = true; //localStorage.getItem('sm-inside-container') !== 'true';
    this.rtl = false; //localStorage.getItem('sm-rtl') === 'true';
    this.menuOnTop = true; //localStorage.getItem('sm-menu-on-top') !== 'true';
    this.colorblindFriendly = false; //localStorage.getItem('sm-colorblind-friendly') === 'true';
    this.shortcutOpen = false;
    //this.device = '';
    this.mobileViewActivated = false;
    this.menuCollapsed = false;
    this.menuMinified = false;
    this.hideBreadcrumbs = false;
    this.hideRibbon = false;
  }

  private initDefault() {
    let smartSkin = config.mobileSmartSkin;

    this.smartSkin = localStorage.getItem('sm-skin') || smartSkin;
    this.skin = config.skins.find((_skin: any) => {
      return _skin.name === (localStorage.getItem('sm-skin') || smartSkin);
    });

    this.skins = config.skins;
    this.fixedHeader = localStorage.getItem('sm-fixed-header') !== 'true';
    this.fixedNavigation =
      localStorage.getItem('sm-fixed-navigation') !== 'true';
    this.fixedRibbon = localStorage.getItem('sm-fixed-ribbon') === 'true';
    this.fixedPageFooter =
      localStorage.getItem('sm-fixed-page-footer') === 'true';
    this.insideContainer =
      localStorage.getItem('sm-inside-container') === 'true';
    this.rtl = localStorage.getItem('sm-rtl') === 'true';
    this.menuOnTop = localStorage.getItem('sm-menu-on-top') === 'true';
    this.colorblindFriendly =
      localStorage.getItem('sm-colorblind-friendly') === 'true';
    this.shortcutOpen = false;
    this.device = '';
    this.mobileViewActivated = false;
    this.menuCollapsed = false;
    this.menuMinified = false;
    this.hideBreadcrumbs = false;
    this.hideRibbon = false;
  }
}
