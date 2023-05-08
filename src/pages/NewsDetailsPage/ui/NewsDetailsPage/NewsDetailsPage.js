import cls from './NewsDetailsPage.module.scss'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {news, Text, VStack} from "../../../../shared";
import {Carousel} from "../../../../shared/ui/Carousel/Carousel";


// Имитация запроса
const getNewsById = (news_id) => new Promise((resolve) => {
  setTimeout(() => {
    const newsByid = news.find(n => n.id === Number(news_id))
    resolve({item: newsByid})
  }, 1000)
})

const NewsDetailsPage = () => {
  const [loading, setLoading] = useState(false)
  const [news, setNews] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    setLoading(true)
    getNewsById(id).then(resp => setNews(resp.item)).finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <div className={'container'}>
        <Text size={'size_l'} align={'center'} title={'Загрузка новости...'}/>
      </div>
    )
  }

  if (!news) {
    return (
      <div className={'container'}>
        <Text size={'size_l'} align={'center'} title={'Новость не найдена'}/>
      </div>
    )
  }

  return (
    <div className={'container'}>
      <VStack gap={'32'} className={cls.newsDetailsPage}>
        <Carousel images={news.images}/>
        <Text title={news.title} size={'size_l'} align={'center'}/>
        <VStack gap={'32'}>
          {news.textBlocks.map(text => (
            <Text text={text} size={'size_l'}/>
          ))}
        </VStack>
      </VStack>
    </div>
  )
}

export default NewsDetailsPage
