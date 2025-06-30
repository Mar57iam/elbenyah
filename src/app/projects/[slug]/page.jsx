'use client'

import HeroSlider from '@/app/_components/HeroSlider/HeroSlider'
import { DataContext } from '@/Context/dataContext'
import { useParams } from 'next/navigation'
import React, { useContext } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'
import Loading from './../../loading';

export default function Slug() {
  const { t } = useTranslation()
  const { slug } = useParams()
  const { projects } = useContext(DataContext)

  const currentProject = projects.find((p) => p.slug === slug)

  if (!currentProject) {
   return <Loading/>
  }

  return (
    <>

      
      <section className="max-w-[1280px]  mx-auto px-4 md:px-6 lg:px-10 py-12">
        <h2 className="text-[40px] leading-[58px] font-bold text-black mb-10">
          {t("projectDetails")}
        </h2>

        {currentProject.related_projects?.map((related, i) => (
          <div key={i} className="mb-10">
            <p className="text-[#646464] text-xl leading-[38px]">
              {related.content}
            </p>
          </div>
        ))}
      </section>

    
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 flex justify-between items-center mt-16 mb-6">
        <h3 className="text-[32px] font-bold text-black">{t("relatedProjects")}</h3>
        <Link
          href="/projects"
          className="text-[#B79031] text-[32px] font-bold flex items-center gap-1 underline"
        >
          {t("viewAllProjects")}
          <FontAwesomeIcon icon={faArrowUp} className="rotate-45" />
        </Link>
      </div>

        
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-6 pb-16">
        {currentProject.related_projects?.slice(0, 3).map((related, i) => (
          <Link href={``} key={i}>
          <div className="relative h-[396px] rounded-[32px] overflow-hidden group cursor-pointer bg-black">
           
            <img
              src={related.featured_image}
              alt={related.title}
              className="w-full h-full object-cover absolute inset-0 z-0"
            />
        
        
            <div className="absolute bottom-0 left-0 right-0 h-[152px] px-6 py-4 bg-[#FFFFFF17] backdrop-blur-[40px] flex flex-col justify-between z-10">
           
              <div>
                <h4 className="text-white font-semibold text-lg mb-2 line-clamp-1">{related.title}</h4>
                <p className="text-white text-sm opacity-80 line-clamp-2">{related.short_description}</p>
              </div>
        
             
              <div className="flex justify-end">
                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                  <FontAwesomeIcon icon={faArrowRight} className="text-[#464141] text-lg" />
                </div>
              </div>
            </div>
          </div>
        </Link>
        
        ))}
      </div>
    </>
  )
}


