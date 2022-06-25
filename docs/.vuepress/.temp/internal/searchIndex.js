export const searchIndex = [
  {
    "title": "",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Annotation",
    "headers": [
      {
        "level": 2,
        "title": "注解",
        "slug": "注解",
        "children": []
      },
      {
        "level": 2,
        "title": "内置注解",
        "slug": "内置注解",
        "children": []
      },
      {
        "level": 2,
        "title": "元注解",
        "slug": "元注解",
        "children": [
          {
            "level": 3,
            "title": "Target",
            "slug": "target",
            "children": []
          },
          {
            "level": 3,
            "title": "Retention",
            "slug": "retention",
            "children": []
          },
          {
            "level": 3,
            "title": "Document",
            "slug": "document",
            "children": []
          },
          {
            "level": 3,
            "title": "Inherited",
            "slug": "inherited",
            "children": []
          },
          {
            "level": 3,
            "title": "Demo",
            "slug": "demo",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "额外三个注解",
        "slug": "额外三个注解",
        "children": []
      },
      {
        "level": 2,
        "title": "自定义注解",
        "slug": "自定义注解",
        "children": [
          {
            "level": 3,
            "title": "Demo",
            "slug": "demo-1",
            "children": []
          }
        ]
      }
    ],
    "path": "/Java/Base/Annotation.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
