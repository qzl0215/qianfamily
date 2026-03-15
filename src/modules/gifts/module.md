# Gifts

## 模块目标
承接礼品频道的概览、场景、详情和订单说明数据。

## 输入
参与行动主线、礼品用途、文化意义与订单说明。

## 输出
礼品概览事实卡、礼品卡片、详情页内容、订单说明数据。

## 关键职责
- 管理礼品频道所有公开内容配置。
- 为礼品详情路由提供统一 slug 数据源。
- 收敛订单说明页中可复用的内容块。

## 依赖
`src/modules/portal-shell/types.ts`

## 对外暴露接口
- `giftsOverviewFacts`
- `giftHighlightCards`
- `giftOccasionCards`
- `giftDetails`
- `giftOrder*`

## 不该做什么
- 不实现真实下单、支付和物流系统。
- 不混入活动与文化专题的正文内容。
