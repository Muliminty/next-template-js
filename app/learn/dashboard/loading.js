
// loading.js 的实现原理是将 page.js和下面的 children 用 <Suspense> 包裹。
// 因为page.js导出一个 async 函数，Suspense 得以捕获数据加载的 promise，借此实现了 loading 组件的关闭。
export default function DashboardLoading() {
    return <>Loading dashboard...</>
}