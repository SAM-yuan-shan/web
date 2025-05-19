// career
export type CareerType = {
  company: string
  title: string
  logo: string
  start: string
  end: string
  description: string
}

export const career: Array<CareerType> = [
  {
    company: '八大会计师事务所',
    title: '审计实习生',
    logo: 'building',
    start: '2025-07',
    end: '2025-08',
    description:
      '参与审计项目，协助整理核对客户财务数据，运用Excel及审计工具执行数据验证；支持内部控制测试工作，学习审计底稿编制及数字化审计工具应用',
  },
  {
    company: '赵指数基金公司',
    title: '数据分析实习生',
    logo: 'briefcase',
    start: '2024-12',
    end: '2025-03',
    description:
      '协助基金金投研团队完成日常数据处理、绩效评估与风险监控；使用Python开发自动化脚本清洗金融数据，计算夏普比率等风险指标，辅助基金绩效评估，分析基金风险调整后的绩效、投资策略及风险控制策略，输出可视化分析图表支持量化决策，为项目提供数据支持',
  },
]