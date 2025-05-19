export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = '林承列'
export const headline = '审计 - 数据分析'
export const introduction =
  "21岁，共青团员，具有扎实的经济学背景和数据分析能力，擅长Python数据处理与分析，熟悉SQL语言，拥有初级会计证、计算机二级证书等专业资格证书。"
export const email = '15396631779@163.com'
export const githubUsername = 'linchenglie'

// about page
export const aboutMeHeadline = '个人简历'
export const aboutParagraphs = [
  "21岁，共青团员，具有扎实的经济学背景和数据分析能力。",
  "擅长Python数据处理与分析，熟悉SQL语言，拥有初级会计证、计算机二级证书、银行从业资格证、证券从业资格证等专业资格证书。",
  "GPA：3.89/4.0，89.54分，专业课程成绩优异，曾获全国大学生统计建模比赛省二等奖、全国大学生数学竞赛省三等奖。"
]

// blog
export const blogHeadLine = "技能特长"
export const blogIntro =
  "技能：熟练使用Python进行数据清洗、处理、自动化及初步分析，熟悉SQL语言进行数据提取、查询与管理\n语言：CET4、2025年6月通过CET6\n证书：初级会计证、计算机二级证书、银行从业资格证、证券从业资格证"

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Email',
    icon: 'mail',
    href: 'mailto:15396631779@163.com',
  },
  {
    name: 'Phone',
    icon: 'phone',
    href: 'tel:15396631779',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'python',
  'mysql',
  'excel',
  'powerpoint',
  'microsoftoffice',
  'notion',
  'figma',
  'adobe',
  'adobephotoshop',
  'adobeillustrator',
  'adobepremierepro',
  'tableau',
  'powerbi',
]
