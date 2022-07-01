export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"./image/hero.png\",\"features\":[{\"title\":\"Web开发\",\"details\":\"所有在开发过程中的经验\"},{\"title\":\"Cs小课堂\",\"details\":\"大学里边讲的一些知识\"},{\"title\":\"小记\",\"details\":\"好用的软件网站库\"}],\"footer\":\"MIT Licensed | Copyright © 2022-present KaibutsuSama\"},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1656199535000,\"contributors\":[{\"name\":\"KaibutsuSama\",\"email\":\"XINLEROY.LIU001@STU.BMCC.CUNY.EDU\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
