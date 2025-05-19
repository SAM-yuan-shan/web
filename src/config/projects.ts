// Types
export type ProjectItemType = {
  name: string
  description: string
  link?: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "获奖经历"
export const awardsIntro = "各类竞赛与学术获奖经历"

export const awards: Array<ActivityItemType> = [
  {
    name: '全国大学生统计建模比赛省二等奖',
    description: '',
    date: '2024',
    location: '天津',
  },
  {
    name: '全国大学生数学竞赛省三等奖',
    description: '',
    date: '2024',
    location: '天津',
  },
]

// Research & Projects
export const projectHeadLine = "项目经历"
export const projectIntro = "参与的竞赛项目与案例分析"

export const projects: Array<ProjectItemType> = [
  {
    name: '蒙牛全国营销赛',
    description: '分析市场及消费调研数据，基于数据驱动理念整合跨界合作、内容营销、线下活动、裸眼3D、AI数媒等新兴传播形式案例，构思符合大学生情感与健康需求的创新营销方案，建立ROI模型量化财务影响，制定详细的KPI体系，策划全流程营销活动，获评全国第五名',
    tags: ['全国第五名', '数据分析', '营销策划', '2024.08-2024.12']
  },
  {
    name: '第十届全国大学生统计建模大赛',
    description: '运用熵权法确定各指标的权重，利用TOPSIS法综合评估新质生产力，建立了基于多维度指标的评价模型；通过对多个地区和行业的新兴生产力进行分析，建立了科学的排序体系，为进一步提升新质生产力的评估和优化提供理论支持',
    tags: ['天津赛区三等奖', '统计建模', '熵权法', 'TOPSIS', '2024.06']
  },
  {
    name: '全国大学生泰德商业案例分析大赛',
    description: '运用行业数据库、财报等渠道，系统性收集储能行业市场及格力电器储能业务数据，运用SWOT分析模型评估标的公司的行业竞争力，并绘制储能行业的国内外整体版图，展示全球储能行业的竞争格局；负责数据分析及SWOT模型竞争力报告撰写，提供案例分析数据支持与框架',
    tags: ['商业案例分析', 'SWOT分析', '数据分析', '2024.05']
  },
  {
    name: '天津师范大学职业规划大赛',
    description: '收集并分析行业/商业模式数据；撰写数据驱动的对比分析报告，论证职业路径可行性，提供数据支持',
    tags: ['团队铜奖', '职业规划', '数据分析', '2024.04']
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = "校园经历"
export const activitiesIntro = "校园内的组织与志愿服务经历"

export const activities: Array<ActivityItemType> = [
  {
    name: '晋江市星源志愿联合社',
    description:
      '宣传部副部长。统筹部门运营与信息传播，撰写发布暑期医院、春运站点等志愿者活动招募通知，精准触达目标学生群体；主导策划"晋江市九所中学学生志愿者交流会"，独立完成活动全流程设计，协调资源推进项目，提升项目管理与跨团队协作能力',
    date: '2023-09至今',
    location: '天津',
  },
]
