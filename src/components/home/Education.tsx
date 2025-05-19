"use client"

import { education } from '@/config/infoConfig'
import { GraduationCap } from 'lucide-react'

export default function Education() {
  return (
    <div className="rounded-2xl border border-muted p-6">
      <h2 className="flex items-center text-sm font-semibold leading-6">
        <GraduationCap className="h-5 w-5 flex-none" />
        <span className="ml-3">教育经历</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {education.map((role, roleIndex) => (
          <li key={roleIndex} className="relative flex gap-x-4">
            <div
              className={`absolute left-0 top-0 flex w-6 justify-center ${
                roleIndex === 0 ? '' : '-mt-6'
              }`}
            >
              <div className="w-px bg-muted" />
            </div>
            <div
              className={`absolute left-0 ${
                roleIndex === 0 ? 'top-0' : ''
              } flex w-6 justify-center`}
            >
              <div className="ring-1 ring-muted relative mt-3 h-2 w-2 rounded-full bg-background" />
            </div>
            <div className="flex-auto">
              <a className="flex flex-col sm:flex-row sm:justify-between">
                <div className="flex max-w-2xl flex-col items-start">
                  <span className="flex flex-row items-center gap-2">
                    <div className="text-base font-semibold leading-6">{role.school}</div>
                    <span className="rounded-md border border-muted px-2 text-xs bg-muted/20">
                      {role.degree}
                    </span>
                  </span>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {role.description}
                  </p>
                </div>
                <div className="flex flex-row gap-2 mt-0.5">
                  <span className="text-sm leading-5 text-muted-foreground">
                    {role.start.split('-')[0]}
                  </span>
                  <span className="text-sm leading-5 text-muted-foreground">-</span>
                  <span className="text-sm leading-5 text-muted-foreground">
                    {role.end}
                  </span>
                </div>
              </a>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}