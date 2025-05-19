// education 
export type EducationType = {
  school: string
  degree: string
  start: string
  end: string
  location: string
  description?: string
}

export const education: Array<EducationType> = [
  {
    school: '天津师范大学',
    degree: '经济学学士',
    start: '2023-09',
    end: '2027-06',
    location: '天津',
    description: 'GPA：3.89/4.0，89.54分。专业课程：金融学（91分）、管理学（91分）、微观经济学（92分）。荣誉奖项：全国大学生统计建模比赛省二等奖、全国大学生数学竞赛省三等奖。',
  },
]