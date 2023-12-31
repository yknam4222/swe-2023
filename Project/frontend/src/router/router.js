import { createRouter, createWebHistory } from 'vue-router'
import BeluvMall from '../components/BeluvMall'
import itemsMenu from '../components/itemsMenu'
import itemDescription from '../components/itemDescription'
import review from '../components/reviewPage'
import wordCloud from '../components/WordCloud'
import writeReview from '../components/writeReview'
import similarItems from '../components/similarItems'
import negativeReviews from '../components/negativeReviews'

const routes = [
    {
        path: '/',
        name: 'BeluvMall',
        component: BeluvMall
    },
    {
        path: '/itemsMenu',
        name: 'itemsMenu',
        component: itemsMenu,
    },
    {
        path: '/item',
        name: 'itemDescription',
        component: itemDescription
    },
    {
        path: '/reviews',
        name: 'reviews',
        component: review
    },
    {
        path: '/wordcloud',
        name: 'wordcloud',
        component: wordCloud
    },
    {
        path: '/writeReview',
        name: 'writeReview',
        component: writeReview,
    },
    {
        path: '/similarItems',
        name: 'similarItems',
        component: similarItems
    },
    {
        path: '/negativeReviews',
        name: 'negativeReviews',
        component: negativeReviews,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;