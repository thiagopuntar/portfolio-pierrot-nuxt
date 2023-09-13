export {};

declare global {
  interface IMenuItem {
    name: string;
    linkRedirection: string;
    subMenu?: IMenuItem[];
  }
}
