import {Flex} from "../../../../shared/ui/Stack/Flex/Flex";

export const MapBlock = () => {
  return (
    <div className={'container'} style={{marginTop: 60}}>
      <Flex justify={'center'}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4233.348054308968!2d74.60746156007596!3d42.880032349723244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7ea1fcbecef%3A0x78aaeabf4292fc87!2z0J3QsNGG0LjQvtC90LDQu9GM0L3QsNGPINCR0LjQsdC70LjQvtGC0LXQutCwINCa0YvRgNCz0YvQt9GB0LrQvtC5INCg0LXRgdC_0YPQsdC70LjQutC4INC40LwuINCQLiDQntGB0LzQvtC90L7QstCw!5e0!3m2!1sru!2skg!4v1682617867102!5m2!1sru!2skg"
          width="1000"
          height="450"
          style={{border: 0}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Flex>
    </div>
  )
}
