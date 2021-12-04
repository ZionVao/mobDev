export interface IButtonItem {
  text: string;
  handler: (value: string) => void | Promise<void>;
}
