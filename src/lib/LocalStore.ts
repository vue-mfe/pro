/*
 * @Author: Just be free
 * @Date:   2020-08-21 10:12:06
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-05-12 16:05:35
 * @E-mail: justbefree@126.com
 */
declare let global: any;
export type StoreTypes = "local" | "session";
import { AnyObject } from "@/types";
class LocalStore {
  private nameSpace: string;
  private storeType: StoreTypes;
  private $store: Storage;
  private version: string;
  private encrypt: boolean;
  constructor(
    type: StoreTypes,
    nameSpace: string,
    version: string,
    encrypt?: true
  ) {
    this.nameSpace = nameSpace;
    this.storeType = type;
    this.version = version;
    this.$store = global[`${type}Storage`];
    this.encrypt = !!encrypt;
  }
  protected encode(str: string): string {
    return str;
  }
  protected decode(str: string): string {
    return str;
  }
  protected genKey(key: string): string {
    return this.encode(`${this.nameSpace}@${key}@${this.version}`);
  }
  public set(key: string, value: AnyObject | string): void {
    let convertedValue =
      typeof value === "object" ? JSON.stringify(value) : value;
    if (this.encrypt) {
      convertedValue = this.encode(convertedValue);
    }
    this.$store.setItem(this.genKey(key), convertedValue);
  }
  public get(key: string): string | AnyObject {
    let valued = this.$store.getItem(this.genKey(key)) || "";
    valued = this.decode(valued);
    try {
      valued = JSON.parse(valued);
    } catch (err) {
      console.log(
        `"${valued}" can not be parsed; The property ${key} does not exit on ${this.storeType};`
      );
      console.warn(err);
    }
    return valued;
  }
  public remove(key: string): void {
    this.$store.removeItem(this.genKey(key));
  }
  public clear(): void {
    this.$store.clear();
  }
}
export default LocalStore;
