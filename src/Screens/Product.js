import React from 'react'
import styles from './Product.module.css';
import logo from '../assets/logo2.png';

function Product() {
  return (
    <div name="Producto">
      <section className={styles.section}>
          <h2>PRODUCTO</h2>
          <div className={styles.img}>
            <img src={logo} alt='producto'></img>
          </div>
          <div className={styles.box2}>
            <h2>Características</h2>
            <h3>TINACP LIAJJ, El tinaco ecológico.</h3>
              <p>Material: Polietileno de alta densidad (PEAD)<br />Capacidad: 1000 litros.<br /> Dimensiones: 120 cm de diámetro x 200 cm de altura.<br /> Tapa abatible con sistema de sellado hermético</p>
            </div>
            <div className={styles.box2}>
            <h3>Sistema de filtración de 3 etapas:</h3>
              <p>Filtro de malla para eliminar partículas gruesas. <br />Filtro de carbón activado para eliminar impurezas y olores. <br />Filtro de luz ultravioleta (UV) para eliminar bacterias y virus. <br />Batería recargable con energía solar y eólica. <br />Autonomía de la batería: 7 días</p>
            </div>
            <div className={styles.box2}>
            <h3>Aplicación para controlar el tinaco:</h3>
              <p>Abrir y cerrar la tapa. <br />Monitorizar el nivel de agua. <br />Recibir notificaciones sobre el estado del agua</p>
            </div>
            <div className={styles.box2}>
            <h3>Beneficios</h3>
              <p>Ahorro de agua: Recolección de agua de lluvia para su uso posterior. <br />Seguridad: Elimina la necesidad de subir a los techos. <br />Salud: Agua potable libre de enfermedades. <br />Ecología: Reduce el consumo de agua potable de la red pública. <br />Economía: Ahorro en la factura del agua.</p>
            </div>
            <div className={styles.box2}>
            <h3>Conclusiones</h3>
              <p>El proyecto TINACO LIAJJ tiene un gran potencial para mejorar <br />la calidad de vida de las personas y contribuir a <br />la preservación del medio ambiente. Se espera que el proyecto <br />sea un éxito y que se pueda implementar a gran escala en el futuro.</p>
            </div>
            <div className={styles.box2}>
            <h3>Link de compra</h3>
              <p></p>
            </div>
            <div className={styles.box2}>
            <h3>Link de descarga app</h3>
              <p></p>
            </div>
        </section>
    </div>
  )
}

export default Product