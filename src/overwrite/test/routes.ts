/*
 * @Author: Just be free
 * @Date:   2021-03-04 11:17:13
 * @Last Modified by:   Just be free
 * @Last Modified time: 2022-07-18 17:07:59
 * @E-mail: justbefree@126.com
 */

import { default as RouterManager } from "@/core/RouterManager";
const router = new RouterManager("test/layout", "test");
router.register([
  {
    pathName: "child",
    path: "/child",
    name: "child",
  },
]);
export default router;
