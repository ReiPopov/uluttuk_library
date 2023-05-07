import Img from '../../../../shared/assets/content/content_img4.png'
import PropTypes from "prop-types";
import {AppLink, HStack, Text, VStack} from "../../../../shared";
import cls from './DissertationItem.module.scss'
import {Flex} from "../../../../shared/ui/Stack/Flex/Flex";

export const DissertationItem = ({dissertation}) => {

  return (
    <Flex direction={'row'} gap={'32'} className={cls.dissertationItem}>
      <img src={Img} alt="left_side_img" className={cls.img}/>
      <VStack gap={'16'}>
        <Text fontWeight={'bold'} size={'size_l'} text={dissertation.author}/>
        <Text size={'size_l'} text={dissertation.text}/>
        <HStack gap={'8'}>
          <Text size={'size_l'} fontWeight={'bold'} text={'Шифр хранения:'}/>
          <Text size={'size_l'} text={dissertation.storage_cipher}/>
        </HStack>
        <HStack gap={'16'}>
          <AppLink to={'/'}><Text className={cls.link} size={'size_l'} text={'Открыть диссертацию'}/></AppLink>
          <AppLink to={'/'}><Text className={cls.link} size={'size_l'} text={'Открыть автореферат'}/></AppLink>
        </HStack>
      </VStack>
    </Flex>
  )
}

DissertationItem.propTypes = {
  dissertation: PropTypes.shape({
    author: PropTypes.string,
    text: PropTypes.string,
    storage_cipher: PropTypes.string,
  })
}
