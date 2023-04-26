import {AppLink, classNames, HStack, Text} from "../../../../shared";
import cls from './SpecialtyChoice.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleChevronRight} from "@fortawesome/free-solid-svg-icons";

const specialties = [
  {
    id: 1,
    name: 'Физика и математика'
  },
  {
    id: 2,
    name: 'Химия'
  },
  {
    id: 3,
    name: 'Биология'
  },
  {
    id: 4,
    name: 'Техника'
  },
  {
    id: 5,
    name: 'Сельское хозяйство'
  },
  {
    id: 6,
    name: 'История и археология'
  },
  {
    id: 7,
    name: 'Социология'
  },
  {
    id: 8,
    name: 'Политология'
  },
  {
    id: 9,
    name: 'Технические науки'
  },
  {
    id: 10,
    name: 'Медицинские науки'
  },
  {
    id: 11,
    name: 'Экономика'
  },
  {
    id: 12,
    name: 'Философия'
  },
  {
    id: 13,
    name: 'Филология'
  },
  {
    id: 14,
    name: 'Юриспруденция'
  },
  {
    id: 15,
    name: 'Педагогика'
  },
  {
    id: 16,
    name: 'Медицина'
  },
  {
    id: 17,
    name: 'Искусствоведение'
  },
  {
    id: 18,
    name: 'Психология'
  },
  {
    id: 19,
    name: 'Естественные науки '
  },
]

export const SpecialtyChoice = () => {
  return (
    <div className={classNames(cls.wrapper, {}, ['container'])}>
      <Text size={'size_l'} align={'center'} title={'Выбор по специальности'}/>
      <HStack max justify={'between'} className={cls.specialityWrapper}>
        {specialties.map((speciality) => (
          <AppLink to={'/'} key={speciality.id} className={cls.speciality}>
            <FontAwesomeIcon icon={faCircleChevronRight} className={cls.icon}/>
            <Text size={"size_l"} text={speciality.name}/>
          </AppLink>
        ))}
      </HStack>
    </div>
  )
}
