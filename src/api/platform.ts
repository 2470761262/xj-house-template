/* eslint-disable no-unused-vars */
enum Platform {
  DEV = "DEV",
  PROD = "PROD",
}

interface IPlatformType {
  [keyName: string]: IPlatformItem;
}

interface IPlatformItem {
  name: string;
  readonly url: string;
}

const isPlatform: string = Platform.PROD;

const PlatformType: IPlatformType = {
  [Platform.DEV]: {
    name: Platform.DEV,
    url: "xx.dev.com",
  },
  [Platform.PROD]: {
    name: Platform.PROD,
    url: "xx.prod.com",
  },
};

export default PlatformType[isPlatform];
