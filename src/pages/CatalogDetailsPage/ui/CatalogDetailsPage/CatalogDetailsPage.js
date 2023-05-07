import {PromoBlock} from "../PromoBlock/PromoBlock";
import {useParams} from "react-router-dom";
import {SPECIALTIES, Text} from "../../../../shared";
import cls from './CatalogDetailsPage.module.scss'
import {DissertationList} from "../DissertationList/DissertationList";

const CatalogDetailsPage = () => {
  const {type} = useParams()

  const catalog = SPECIALTIES.find(s => s.type === type)

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
