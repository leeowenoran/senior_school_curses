# CloudBase 云开发 · 学习数据集合设计（形态1）

> 腾讯云 CloudBase 默认提供**文档型数据库**（MongoDB 兼容），用「集合 collection + 文档 doc」组织数据。
> 下面 4 个集合覆盖「用户登录 + 学习进度 + 做题记录 + 错题本」全部需求。
> 前端通过 `@cloudbase/js-sdk` 直连数据库，配合**安全规则**保证「用户只能读写自己的数据」。

## 1. users（账户，CloudBase auth 自带，额外存 profile）
```
{
  _id:        string   // 即 auth.uid
  email:      string
  profile: {
    displayName: string,
    grade:       string   // 高一 / 高二 / 高三
  },
  createdAt:  Date
}
```
> 注册时由 `cbRegister()` 自动写入；登录态由 CloudBase auth 管理，无需自建密码表。

## 2. studyProgress（学习进度，每课一条）
```
{
  _id:          string
  userId:       string   // == auth.uid（安全规则据此放行）
  subject:      string   // chemistry / history / math ...
  volume:       string   // bx1 / bx2 / xb1 ...
  lessonId:     string   // bx1-u1 / bx2-u3 ...（与 data-*.js 的 id 对应）
  status:       string   // 未学 / 学习中 / 已完成
  progressPct:  number   // 0~100
  lastStudiedAt: Date
}
```
> 唯一键：`userId + lessonId`，保存时 upsert（存在则更新）。

## 3. exerciseRecords（做题记录，每题一条）
```
{
  _id:           string
  userId:        string
  lessonId:      string
  questionIndex: number   // 该课第几题（0 起）
  selectedAnswer: string   // 用户所选/所填
  isCorrect:     boolean
  timeSpentSec:  number
  createdAt:     Date
}
```
> 用于统计每课正确率、知识点掌握度。

## 4. wrongQuestions（错题本，自动归集）
```
{
  _id:          string
  userId:       string
  lessonId:     string
  questionIndex: number
  wrongAnswer:  string
  note:         string   // 学生/老师批注，可空
  resolvedAt:   Date | null   // 订正后填时间
  createdAt:    Date
}
```
> 由 `cbSaveExercise()` 在 `isCorrect === false` 时自动写入，无需前端单独调用。

## 索引建议（控制台手动建）
- `studyProgress`: `{ userId: 1, lessonId: 1 }`
- `exerciseRecords`: `{ userId: 1, lessonId: 1, createdAt: -1 }`
- `wrongQuestions`: `{ userId: 1, resolvedAt: 1 }`
