import cls from './PromoBlock.module.scss'
import {Text, VStack} from "../../../../shared";

export const PromoBlock = ({title}) => {
  return (
    <div className={cls.promo}>
      <VStack max justify={'center'} align={'center'} className="container">
        <Text
          color={'white'}
          size={'size_xl'}
          title={title}
          headerCategory={'h1'}
        />
      </VStack>
    </div>
  );
};
