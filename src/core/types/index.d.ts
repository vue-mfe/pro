/*
 * @Author: Just be free
 * @Date:   2020-07-22 14:14:16
 * @Last Modified by:   Just be free
 * @Last Modified time: 2022-07-18 16:11:19
 * @E-mail: justbefree@126.com
 */

export type Callback = (args: any) => any;

import Vue, { ComponentOptions, AsyncComponent } from "vue";
export type Component = ComponentOptions<Vue> | typeof Vue | AsyncComponent;

export interface AnyObject {
  [propName: string]: any;
}

export type Anything = any;
