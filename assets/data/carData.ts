export interface Car {
  id: string;
  name: string;
  year: number;
  image: string;
}


export const carData: Car[] = [
  { id: '1', name: 'Toyota Corolla', year: 2020, image: 'https://blog.grupolider.com.br/wp-content/uploads/2024/02/Descubra-o-Toyota-Corolla-Altis-HV-um-icone-reinventado.jpg' },
  { id: '2', name: 'Honda Civic', year: 2019, image: 'https://cdn.motor1.com/images/mgl/mMEQ8j/s1/2024-honda-civic-rs-jdm.jpg' },
  { id: '3', name: 'Ford Mustang', year: 2018, image: 'https://cdn.motor1.com/images/mgl/jl9yNg/s1/2025-ford-mustang-gtd.webp' },
  { id: '4', name: 'Chevrolet Camaro', year: 2021, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/2019_Chevrolet_Camaro_base%2C_front_11.9.19.jpg/1200px-2019_Chevrolet_Camaro_base%2C_front_11.9.19.jpg' },
  { id: '5', name: 'Tesla Model 3', year: 2022, image: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Tesla_Model_3_%282023%29_Autofr%C3%BChling_Ulm_IMG_9282.jpg' },
  { id: '6', name: 'BMW X5', year: 2017, image: 'https://cdn.motor1.com/images/mgl/1ZkqgW/s1/2023-bmw-x5.webp' },
  { id: '7', name: 'Audi A4', year: 2016, image: 'https://fotos-jornaldocarro-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2020/11/18224844/audi_a4_45_tfsi_quattro_s_line-scaled.jpeg' },
  { id: '8', name: 'Mercedes-Benz C-Class', year: 2015, image: 'https://www.topgear.com/sites/default/files/2021/11/Mercedes_C300D_0000.jpg' },
  { id: '9', name: 'Volkswagen Golf', year: 2014, image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/2020_Volkswagen_Golf_Style_1.5_Front.jpg' },
  { id: '10', name: 'Nissan Altima', year: 2013, image: 'https://upload.wikimedia.org/wikipedia/commons/9/92/2019_Nissan_Altima_SR_AWD%2C_front_9.30.19.jpg' }
];