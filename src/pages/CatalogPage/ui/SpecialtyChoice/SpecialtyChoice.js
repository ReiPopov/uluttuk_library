import {AppLink, classNames, HStack, CATALOGS, Text} from "../../../../shared";
import cls from './SpecialtyChoice.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleChevronRight} from "@fortawesome/free-solid-svg-icons";


export const SpecialtyChoice = () => {
  return (
    <div className={classNames(cls.wrapper, {}, ['container'])}>
      <Text size={'size_l'} align={'center'} title={'Выбор по специальности'}/>
      <HStack max justify={'between'} className={cls.specialityWrapper}>
        {CATALOGS.map((speciality) => (
          <AppLink to={`/catalog/${speciality.type}`} key={speciality.id} className={cls.speciality}>
            <FontAwesomeIcon icon={faCircleChevronRight} className={cls.icon}/>
            <Text size={"size_l"} text={speciality.name}/>
          </AppLink>
        ))}
      </HStack>
    </div>
  )
}
