import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

import useStyles from "./styles.js";

const BusCard = () => {
  const classes = useStyles();

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 700, margin: 10 }}
        image={
          "https://i0.wp.com/rayhaber.com/wp-content/uploads/2015/05/izmirim_kart.jpg?fit=1424%2C800&ssl=1"
        }
        title={"izmirimKart"}
      />
      <CardContent>
        <h1>İzmirim Kart Nasıl Alınır?</h1>
        <Typography>
          İzmirim Kartı banliyö, metro, vapur iskelelerindeki kart yükleme ve
          satın alma gişeleri, İzmirim Kart satış kulübeleri, İzmirim Kart dolum
          cihazları (TVM), büfe, gazete bayii ve marketlerden satın
          alabilirsiniz. Akıllı şehir kartınızı havalimanındaki istasyondan da
          temin edebilirsiniz. Kişiselleştirilmiş İndirimli Kart almak için
          Elektrik Su Havagazı Otobüs ve Troleybüs (ESHOT) Genel Müdürlüğü
          Elektronik Kartlar Şube Müdürlüğü’ne başvurmanız gerekiyor. Bu
          kartların başvurusu için ise gereken bazı belgeler bulunuyor. Bu
          kişiye özel çıkarılan kartları almak için öğrencilerin, öğretmenlerin,
          60 ve 65 yaş üzeri kişilerin durumlarını belirten belgeler ile
          birlikte ESHOT Genel Müdürlüğü Elektronik Kartlar Şube Müdürlüğü’ne
          başvurması gerekiyor. <hr></hr>
          Yüz yüze yapılan başvurulara ek olarak İzmirim Kart başvurusu internet
          üzerinden
          <a style={{color: 'black'}} href="https://www.izmirimkart.com.tr/tr/Anasayfa">
            https://www.izmirimkart.com.tr/tr/Anasayfa
          </a>{" "}
          adresine girerek de yapabiliyor. Bu sitede kimlerin hangi tür kartı
          alabileceğine ve yapılması gerekenlere dair detaylı açıklamalar
          bulunuyor. Kart başvurusu için ilk olarak ön başvuru formunu
          doldurmanız gerekiyor. Formu doldurduktan sonra kart ücretinizi
          yatırmalısınız. Son 6 ay içerisinde çekilmiş olan biyometrik
          fotoğrafınızı jpg formatında başvuru formuna kaydettiğinizde başvuruyu
          tamamlamış oluyorsunuz. İzmirim kartınızın basım durumunu
          www.izmirimkart.com.tr internet adresinden kontrol edebilirsiniz.
          Kartınızın basıldığını öğrendiğinizde kart numaranız ile Elektronik
          Kartlar Şube Müdürlüğü’ne gidip İzmirim Kartınızı teslim
          alabilirsiniz. Öğretmen Kartının teslimi esnasında Millî Eğitim
          Bakanlığı Bilişim Sistemleri veri tabanından alınan imzalı ve onaylı
          Görev Yeri Belgesi gerekiyor. Eğer diğer Bakanlıklara bağlı okullarda
          görev yapan bir öğretmenseniz okulunuz tarafından yazılan bir talep
          yazısı ve Eğitim – Öğretim Hizmetleri Sınıfı Personeli olduğunuzu
          gösteren bir personel hareket onayına ihtiyacınız var.{" "}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BusCard;
