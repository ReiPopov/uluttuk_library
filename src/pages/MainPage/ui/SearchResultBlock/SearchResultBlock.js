import {CATALOGS, Text} from "../../../../shared";
import React, {useEffect, useState} from "react";
import {DissertationList} from "../../../../entities/Dissertation";
import cls from './SearchResultBlock.module.scss'


// Имитация запроса
const searchDissertationsByValue = (value) => new Promise(resolve => {
  setTimeout(() => {
    const _value = value.toLowerCase().trim()
    const catalogDissertations = CATALOGS.map(c => c.dissertations.length ? c.dissertations : null).filter(Boolean).flat()
    const catalogsByName = CATALOGS
      .filter(c => c.name.toLowerCase().trim().includes(_value))
      .map(c => c.dissertations.length ? c.dissertations : null)
      .filter(Boolean)
      .flat()
    const catalogsByAuthor = catalogDissertations.filter((c) => c.author.toLowerCase().trim().includes(_value))
    const catalogsByStorageCipher = catalogDissertations.filter(c => c.storage_cipher.toLowerCase().trim().includes(_value))
    const catalogsByText = catalogDissertations.filter(c => c.text.toLowerCase().trim().includes(_value))

    if (catalogsByName.length) {
      return resolve({list: catalogsByName})
    } else if (catalogsByAuthor.length) {
      return resolve({list: catalogsByAuthor})
    } else if (catalogsByStorageCipher.length) {
      return resolve({list: catalogsByStorageCipher})
    } else if (catalogsByText.length) {
      return resolve({list: catalogsByText})
    } else {
      return resolve({list: []})
    }

  }, 1000)
})

export const SearchResultBlock = ({searchValue}) => {
  const [loading, setLoading] = useState(false)
  const [dissertations, setDissertations] = useState([])

  useEffect(() => {
    setLoading(true)
    searchDissertationsByValue(searchValue)
      .then(resp => setDissertations(resp.list))
      .finally(() => setLoading(false))
  }, [searchValue])

  if (loading) {
    return (
      <div className={'container'}>
        <Text align={'center'} size={'size_l'} title={'Поиск...'} className={cls.title}/>
      </div>
    )
  }

  return (
    <div className={'container'}>
      <Text align={'center'} size={'size_l'} title={`Результаты поиска для: ${searchValue}`} className={cls.title}/>
      {dissertations.length ? (
        <DissertationList dissertations={dissertations}/>
      ) : <Text size={'size_m'} title={'К сожалению, поиск не дал результатов.'}/>}
    </div>
  )
}
