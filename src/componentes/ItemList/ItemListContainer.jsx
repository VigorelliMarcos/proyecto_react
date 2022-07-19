import React, {useState,useEffect  } from "react";
import ItemList from "../ItemList";

const ItemListContainer = (props) => {
    const ItemsDATABASE=[{
        "id": 1,
        "producto": "Placa de Video MSI GeForce ",
        "price": 65200,
        "category": "GTX 1660 SUPER 6GB GDDR6 Ventus XS OC",
        "stock": 1,
        "img": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_27750_Placa_de_Video_MSI_GeForce_GTX_1660_SUPER_6GB_GDDR6_Ventus_XS_OC_ad982a75-grn.jpg"
      }, {
        "id": 2,
        "producto": "Placa de Video ASUS",
        "price": 67400,
        "category": "GeForce GTX 1660 SUPER 6GB GDDR6 Phoenix OC",
        "stock": 9,
        "img": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_27887_Placa_de_Video_ASUS_GeForce_GTX_1660_SUPER_6GB_GDDR6_Phoenix_OC_558bcfa1-grn.jpg"
      }, {
        "id": 3,
        "producto": "Placa de Video MSI",
        "price": 74500,
        "category": "GeForce RTX 2060 6GB GDDR6 VENTUS GP OC",
        "stock": 3,
        "img": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_27752_Placa_de_Video_MSI_GeForce_RTX_2060_6GB_GDDR6_VENTUS_GP_OC_784522a6-grn.jpg"
      }, {
        "id": 4,
        "producto": "Placa de Video Zotac",
        "price": 171000,
        "category": "GeForce RTX 3070 Ti 8GB GDDR6X Trinity",
        "stock": 10,
        "img": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32821_Placa_de_Video_Zotac_GeForce_RTX_3070_Ti_8GB_GDDR6X_Trinity_d4b1cf41-grn.jpg"
      }, {
        "id": 5,
        "producto": "Placa de Video MSI",
        "price": 295000,
        "category": "GeForce RTX 3090 24GB GDDR6X VENTUS 3X OC",
        "stock": 2,
        "img": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32389_Placa_de_Video_MSI_GeForce_RTX_3090_24GB_GDDR6X_VENTUS_3X_OC_bfed81e9-grn.jpg"
      }, ];
      console.log("%c render itemlistcontainer","color:green");
      ;
      let [items,setItems] = useState([]);
      useEffect(()=>{    let promiseItems = new Promise ((resolve,reject)=>{
        setTimeout(
            () => {
        resolve(ItemsDATABASE)  ;
        
        },
        2000);
      });
      promiseItems.then(
        (respuesta)=>{
          setItems(ItemsDATABASE);
        }
        ).catch ((errorMg)=>console.error((errorMg)))},
      [])

    return ( 
        <>
        <ItemList items={items}/>
        {console.log(items)}
        <p>{props.greeting}</p>
        </>
     );
}
 
export default ItemListContainer;