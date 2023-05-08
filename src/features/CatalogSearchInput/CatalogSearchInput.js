import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {Input} from "../../shared";
import React, {useCallback, useState} from "react";
import {createSearchParams, useNavigate} from "react-router-dom";
import cls from './CatalogSearchInput.module.scss'
import {useTranslation} from "react-i18next";

export const CatalogSearchInput = ({onSubmit}) => {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const {t} = useTranslation()

  const _onSubmit = useCallback((e) => {
    e.preventDefault()
    if (search) {
      navigate({
        pathname: '/',
        search: `?${createSearchParams({search})}`,
      });
      onSubmit?.()
    }
  }, [navigate, onSubmit, search])


  return (
    <form onSubmit={_onSubmit} className={cls.form}>
      <Input
        placeholder={t('search_input_placeholder')}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        icon={faMagnifyingGlass}
      />
    </form>
  )
}
