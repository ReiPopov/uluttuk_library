import {PromoBlock} from "../PromoBlock/PromoBlock";
import {useParams} from "react-router-dom";
import {CATALOGS, Text} from "../../../../shared";
import cls from './CatalogDetailsPage.module.scss'
import {useEffect, useState} from "react";
import {DissertationList} from "../../../../entities/Dissertation";

// Имитация запроса
const serachCatalogByType = (type) => new Promise(resolve => {
  setTimeout(() => {
    const catalog = CATALOGS.find(s => s.type === type)
    resolve({item: catalog})
  }, 1000)
})

const CatalogDetailsPage = () => {
  const {type} = useParams()
  const [loading, setLoading] = useState(false)
  const [catalog, setCatalog] = useState(null)

  useEffect(() => {
    setLoading(true)
    serachCatalogByType(type).then(resp => setCatalog(resp.item)).finally(() => setLoading(false))
  }, [type])

  if (loading) {
    return (
      <div className={'container'}>
        <Text align={'center'} size={'size_l'} title={'Загрузка данных...'}/>
      </div>
    )
  }

  if (!catalog || !catalog.dissertations.length) {
    return (
      <div className={'container'}>
        <Text align={'center'} size={'size_l'} title={'Диссертации не найдены'}/>
      </div>
    )
  }

  return (
    <>
      <PromoBlock title={catalog.name}/>
      <div className={'container'}>
        <Text
          size={'size_l'}
          align={'center'}
          title={'Для полного ознакомления диссертаций необходимо посетить библиотеку.'}
          className={cls.title}
        />
        <DissertationList dissertations={catalog.dissertations}/>
      </div>
    </>
  )
}

export default CatalogDetailsPage
