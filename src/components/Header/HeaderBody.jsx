import React from 'react'
import './header.css'

const HeaderBody = () => {
    return (
        <>
            <div className='main-2'>
                <div>
                    <img src='https://want.am/wp-content/uploads/2024/12/snimok-ekrana-2024-12-01-v-19.28.08-—-krupnyj-razmer-1.jpeg' className='img-1' />
                    <div class="category-card__block">
                        <div class="category-card__body">
                            <div class="category-card__title">Երեխաների համար</div>
                            <div class="category-card__subtitle">Հարրի Փոթերի պարագաներ</div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src='https://want.am/wp-content/uploads/2024/12/ugears-gift-ideas_promo-e1733162502649.jpg' className='img-1' />
                    <div class="category-card__block2">
                        <div class="category-card__body2">
                            <div class="category-card__title2">Հոբբի</div>
                            <div class="category-card__subtitle2">Ugears</div>
                        </div>
                    </div>
                    <div style={{display:"flex", gap:"10px"}}>
                        <div >
                            <img src='https://want.am/wp-content/uploads/2024/12/snimok-ekrana-2024-12-01-v-19.23.24-e1733066647151.jpeg' className='img-3' />
                            <div class="category-card__block3">
                                <div class="category-card__body3">
                                    <div class="category-card__title3">Օպտիկա</div>
                                    <div class="category-card__subtitle3">Աստղադիտակներ</div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <img src='https://want.am/wp-content/uploads/2024/12/luna14sm-1-1000x1000-1-e1733162657428.jpg' className='img-4' />
                            <div class="category-card__block3">
                                <div class="category-card__body3">
                                    <div class="category-card__title3">Կանանց համար</div>
                                    <div class="category-card__subtitle3">Լուսամփոփներ</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default HeaderBody