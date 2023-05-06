import React from 'react'
import { Breadcrumbs } from '../../../components/Breadcrumbs/Breadcrumbs'
import { BannerCar } from '../../../components/CarSelection/BannerCar/BannerCar'
import { CarSelectionForm } from '../../../components/CarSelection/CarSelectionForm/CarSelectionForm'
import {SelectInfo} from '../../../components/CarSelection/SelectInfo/SelectInfo'
import style from './CarSelectionPage.module.scss'
import {MainWrapper} from '../../../components/UI/MainWrapper/MainWrapper'
function CarSelectionPage() {
  return (
    <MainWrapper mode='white'>
        <div className={style['car-selection']}>
            <Breadcrumbs/>
            <section className={style['car-selection__form']}>
                <BannerCar/>
                <CarSelectionForm/>
            </section>
            <SelectInfo/>
        </div>
    </MainWrapper>
  )
}

export {CarSelectionPage}